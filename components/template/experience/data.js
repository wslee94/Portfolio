export const experienceList = [
  {
    image: '/assets/img/experience/pop3.png',
    title: 'POP3 클라이언트 오픈소스 기여',
    period: '2021-10',
    host: '개인',
    content: [
      { title: 'node-pop', description: 'TLS 사용 시 TLS 관련 옵션을 설정할 수 있도록 수정했습니다.' },
      { title: 'yapople', description: '소켓 통신 시 메모리 누수 이슈를 해결했습니다.' },
    ],
    link: [
      { text: 'node-pop3 PR', href: 'https://github.com/node-pop3/node-pop3/pull/20' },
      { text: 'yapople PR', href: 'https://github.com/agsh/yapople/pull/30' },
    ],
    techList: [
      { icon: 'github', tooltip: 'Github' },
      { icon: 'node', tooltip: 'Node' },
    ],
  },
  {
    image: '/assets/img/experience/kosta.png',
    title: '지능정보사회를 위한 응용 Web Framework 개발자 양성과정',
    period: '2018-02-26 ~ 2018-06-27',
    host: '한국소프트웨어기술진흥협회(KOSTA) ',
    content:
      'Web 설계-개발의 전반적인 지식을 습득하고, 웹 서비스 구축 프로젝트를 진행하면서 Front-End, DB programming, Analysis and Design 관련 역량을 갖출 수 있었습니다.',
    link: [],
    techList: [
      { icon: 'html', tooltip: 'HTML5' },
      { icon: 'css', tooltip: 'CSS3' },
      { icon: 'javascript', tooltip: 'Javascript' },
      { icon: 'java', tooltip: 'Java' },
      { icon: 'spring', tooltip: 'Spring' },
    ],
  },
];
