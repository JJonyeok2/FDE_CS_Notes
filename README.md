# FDE CS 노트

FDE(Forward Deployed Engineer) 지원자가 알아야 할 CS 지식을 "고객사 현장에서 부딪히는 순서"로 정리한 문서 사이트입니다. VitePress로 만들고 GitHub Pages로 배포합니다.

사이트: https://jjonyeok2.github.io/FDE_CS_Notes/

## 로컬에서 보기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173/FDE_CS_Notes/` 를 엽니다.

## 배포

1. `main` 브랜치에 푸시합니다.
2. 저장소 Settings > Pages > Build and deployment > Source 를 **GitHub Actions** 로 바꿉니다. (처음 한 번만)
3. 이후 `main` 에 푸시할 때마다 `.github/workflows/deploy.yml` 이 빌드와 배포를 수행합니다.

저장소 이름을 바꾸면 `docs/.vitepress/config.mjs` 의 `REPO_NAME` 도 같은 이름으로 바꿔야 합니다.

## 문서 구조

모든 주제 문서는 네 칸으로 통일합니다.

| 칸 | 내용 |
| --- | --- |
| 개념 요약 | 꼭 알아야 하는 개념을 짧게 |
| 현장에서 만나는 상황 | 고객사 환경에서 이 지식이 필요한 순간 |
| 면접 예상 질문 | 질문과 답변 요지 |
| 내 프로젝트와의 연결 | 직접 겪은 사례로 채우는 칸 |

새 문서는 `docs/template.md` 를 복사해서 시작합니다.
