module.exports = {
  title: `partlyjadedyouth.github.io`,
  description: `Joon's Blog`,
  siteUrl: `https://partlyjadedyouth.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Joonyoung Park`,
    bio: {
      thumbnail: 'profile.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/partlyjadedyouth`,
      instagram: 'https://instagram.com/partlyjadedyouth',
      photography: 'https://instagram.com/mieserfotograf',
      // linkedIn: ``, //
      rym: 'https://rateyourmusic.com/~Proshuto',
      email: `mogun99@snu.ac.kr`,
    },
  },

  // metadata for About Page
  about: {
    education: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        date: '',
        activity: '',
        description: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
          website:'',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.03 ~',
        activity: 'Seoul National University',
        description: 'Dept. of Electrical and Computer Engineering',
        links: {
          website: 'https://ee.snu.ac.kr',
        },
      },
      {
        date: '2023.03 ~',
        activity: 'Seoul National University',
        description: 'Information Science',
        links: {
          website: 'https://isc.snu.ac.kr',
        },
      },
    ],

    workexperience: [
      {
        date: '',
        activity: '',
        description: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
          website:'',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.08',
        activity: 'Samsung Electro-Mechanics',
        description: 'Engineer Intern',
        links: {
          website:'https://www.samsungsem.com/kr/index.do',
        }, 
      },
    ],

    projects: [ 
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
