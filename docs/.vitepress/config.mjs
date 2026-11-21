import { defineConfig } from 'vitepress'

// GitHub Pages 프로젝트 사이트는 https://<사용자명>.github.io/<저장소명>/ 에서 열린다.
// 저장소 이름을 바꾸면 아래 REPO_NAME도 같이 바꿔야 CSS와 링크가 깨지지 않는다.
const REPO_NAME = 'FDE_CS_Notes'
const GITHUB_USER = 'JJonyeok2'

const topics = [
  { text: '1. 네트워크와 HTTP', link: '/01-network-http' },
  { text: '2. API와 인증', link: '/02-api-auth' },
  { text: '3. 데이터베이스와 SQL', link: '/03-database-sql' },
  { text: '4. 데이터 통합', link: '/04-data-integration' },
  { text: '5. OS, 리눅스, 컨테이너', link: '/05-os-linux-container' },
  { text: '6. 클라우드와 배포', link: '/06-cloud-deploy' },
  { text: '7. 보안과 권한', link: '/07-security' },
  { text: '8. 시스템 설계 기초', link: '/08-system-design' },
  { text: '9. LLM 응용', link: '/09-llm-application' },
  { text: '10. 자료구조와 알고리즘', link: '/10-ds-algo' }
]

const fieldTopics = [
  { text: '11. 트러블슈팅 방법론', link: '/11-troubleshooting' },
  { text: '12. 고객 요구사항과 PoC', link: '/12-customer-poc' },
  { text: '13. 테스트', link: '/13-testing' }
]

const aiTopics = [
  { text: '15. RAG와 벡터 DB 심화', link: '/15-rag-vector-db' },
  { text: '16. Agentic Workflow와 멀티 에이전트', link: '/16-agentic-workflow' },
  { text: '17. SDK와 AI 프레임워크', link: '/17-sdk-frameworks' },
  { text: '18. 데이터 파이프라인', link: '/18-data-pipeline' }
]

const customerTopics = [
  { text: '14. 기업 업무 시스템: ERP, CRM, 그룹웨어', link: '/14-enterprise-systems' },
  { text: '19. 고객사와 산업 이해', link: '/19-industries' }
]

export default defineConfig({
  lang: 'ko-KR',
  title: 'FDE CS 노트',
  description: 'FDE(Forward Deployed Engineer) 지원자가 알아야 할 CS 지식 정리',
  base: `/${REPO_NAME}/`,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '학습 로드맵', link: '/roadmap' },
      { text: '면접 질문 모음', link: '/interview-questions' },
      { text: '문서 템플릿', link: '/template' }
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: 'FDE와 CS 지식', link: '/' },
          { text: '학습 로드맵', link: '/roadmap' },
          { text: '문서 템플릿', link: '/template' }
        ]
      },
      { text: 'CS 기초', items: topics },
      { text: 'FDE 실무', items: fieldTopics },
      { text: 'AI 엔지니어링', items: aiTopics },
      { text: '고객과 산업', items: customerTopics },
      {
        text: '면접 대비',
        items: [{ text: '면접 질문 모음', link: '/interview-questions' }]
      }
    ],
    outline: { level: [2, 3], label: '이 페이지에서' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: `https://github.com/${GITHUB_USER}/${REPO_NAME}` }
    ],
    docFooter: { prev: '이전', next: '다음' },
    lastUpdated: { text: '마지막 수정' },
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '목차',
    darkModeSwitchLabel: '테마'
  }
})
