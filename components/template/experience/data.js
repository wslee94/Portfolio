export const experienceList = [
  {
    title: '함수형 프로그래밍 & 멀티패러다임 언어',
    period: '2024-08-20 ~ 2024-11-05',
    host: 'Nexon, 유인동(마플코퍼레이션 CTO)',
    content: [
      {
        title: '📌 과정소개',
        description:
          'TypeScript를 사용하며 Java, C#, Scala, Kotlin, Swift 등의 다른 언어에도 동일하게 적용되어 있거나 적용할 수 있는 기술과 개념을 다룹니다. 기존에 사용하던 환경과 언어를 함수형 전용 언어로 바꾸지 않고 함수형 프로그래밍을 실무에 적용할 수 있도록 합니다. 더 나아가 객체지향 프로그래밍과 함수형 프로그래밍을 섞어서 문제를 해결하는 코드들을 통해 멀티패러다임 언어를 다루는 기술력과 응용력을 높이고 문제 해결 능력을 확장할 수 있게 합니다.',
      },
      {
        title: '📌 학습목표',
        description: `- 함수형 프로그래밍, LISP(리스트프로세싱, 이터레이터/제너레이터)을 코드 레벨에서 배우고 실무에 적용할 수 있다.
      - 멀티패러다임 프로그래밍의 개념을 익히고, 다양한 패러다임을 결합하여 문제를 더욱 효과적으로 해결할 수 있다. 
      - 비동기/동시성 프로그래밍을 더욱 안전하고 다양하고 정확하게 다룰 수 있다.
      - for, if, I++, break; 대신 지연평가와 이터러블 함수들로 로직을 작성할 수 있고, 알고리즘 문제를 풀 수 있다. 
      - 생산성을 높이고 에러율을 줄이는 코딩 패턴을 익힌다.`,
      },
    ],
    link: [],
    techList: [{ icon: 'typescript', tooltip: 'Typescript' }],
  },
  {
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
