"""면접 질문 모음 페이지(docs/interview-questions.md)를 다시 만든다.

각 주제 문서의 "## 면접 예상 질문" 아래 "### Q. ..." 제목을 모아,
질문마다 해당 답변 위치로 바로 가는 링크를 단다.

앵커 id는 VitePress가 만드는 것을 그대로 쓰기 위해 빌드 결과에서 읽는다.
그래서 빌드를 먼저 한 번 해야 한다.

    npm run build
    python3 scripts/gen_questions.py
    npm run build
"""

import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
DIST = os.path.join(DOCS, ".vitepress", "dist")

HEADER = """# 면접 질문 모음

> 주제 문서들의 "면접 예상 질문"을 한곳에 모았다. 면접 직전에 질문만 보고 소리 내어 답해 본 뒤, 막히는 질문은 링크로 들어가 답변을 확인한다.

전체 {total}문항.

## 사용법

1. 질문만 보고 30초~1분 안에 결론부터 답해 본다.
2. 막힌 질문은 따로 적어 두고 해당 문서의 답변과 비교한다.
3. 답변 끝에 "제 프로젝트에서는"으로 이어지는 사례를 붙일 수 있는지 확인한다. 못 붙이면 그 문서의 "내 프로젝트와의 연결" 칸을 채운다.
"""


def main():
    sections = []
    total = 0
    for path in sorted(glob.glob(os.path.join(DOCS, "[0-9][0-9]-*.md"))):
        page = os.path.basename(path)[:-3]
        text = open(path, encoding="utf-8").read()
        title = re.search(r"^# (.+)$", text, re.M).group(1)
        if "## 면접 예상 질문" not in text:
            continue
        section = text.split("## 면접 예상 질문", 1)[1].split("\n## ", 1)[0]
        questions = re.findall(r"^### Q\. (.+)$", section, re.M)

        html = open(os.path.join(DIST, page + ".html"), encoding="utf-8").read()
        ids = re.findall(r'<h3 id="(q-[^"]+)"', html)
        if len(ids) != len(questions):
            raise SystemExit(f"{page}: 질문 {len(questions)}개, 앵커 {len(ids)}개. 빌드를 먼저 하세요.")

        lines = [f"## [{title}](./{page}#면접-예상-질문)", ""]
        for i, (q, anchor) in enumerate(zip(questions, ids), 1):
            lines.append(f"{i}. [{q}](./{page}#{anchor})")
        sections.append("\n".join(lines))
        total += len(questions)

    out = HEADER.format(total=total) + "\n" + "\n\n".join(sections) + "\n"
    open(os.path.join(DOCS, "interview-questions.md"), "w", encoding="utf-8").write(out)
    print(f"{total}문항을 모았습니다.")


if __name__ == "__main__":
    main()
