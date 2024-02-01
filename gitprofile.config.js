// gitprofile.config.js

const config = {
  github: {
    username: 'adamclements3', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'adam-clements-510514170',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '', //maybe make this or a dev acct?
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'AdamClements3.github.io',
    phone: '+1 (803)-667-2373',
    email: 'awc919@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1uMefABRlvQtHoixLjytMNy02RMqQ3nz0/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C',
    'Python',
    'Java',
    'MATLAB',
    'Git/Github',
    'Unix/Linux',
    'Command Line',
    'PLC',
    'HTML',
    'CSS',
    'Javascript',
    'Django',
    
  ],
  experiences: [
    {
      company: 'Clemson University',
      position: 'Algorithms and Data Structures TA',
      from: 'August 2023',
      to: 'Present',
    },
    {
      company: 'Escapology Columbia',
      position: 'PLC Technician/Handyman',
      from: 'May 2019',
      to: 'July 2022',
      companyLink: 'https://www.escapology.com/en/columbia-sc',
    },
  ],
  certifications: [
    {
      name: 'SOLIDWORKS CSWA - Mechanical Design',
      body: '',
      year: 'May 2022',
      link: 'https://drive.google.com/file/d/1NJUt8PYuRrWnumZLnx0LwTK73jXBcDKK/view?usp=sharing'
    },
  ],
  education: [
    {
      institution: 'Clemson University',
      degree: 'BS Computer Science',
      from: 'August 2022',
      to: 'December 2024',
    },
    {
      institution: 'South Carolina Governor\'s School',
      degree: 'ACCELERATE Program',
      from: 'August 2019',
      to: 'June 2022',
    },
    {
      institution: 'Lexington High School',
      degree: 'High School Diploma',
      from: 'August 2018',
      to: 'June 2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'CU Courseview',
      description:
        'All-in-One tool to simplify the course registration process for Clemson Students',
      imageUrl: 'https://i.pinimg.com/474x/79/04/30/7904300a06eb43dc11f44c7f908ff5d5.jpg',
      link: 'https://github.com/AdamClements3/Courseview',
    },
    {
      title: 'Stock Prediction Machine Learning Models',
      description:
        'Machine Learning model trainer for stock movement',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/258/888/original/candlestick-graph-bar-vector.jpg',
      link: 'https://github.com/AdamClements3/StockPredictionMLModel',
    },
    {
      title: 'Text-Based Adventure Game',
      description:
        'Text-Based Adventure game built by myself and some friends in High School',
      imageUrl: 'https://www.lifewire.com/thmb/UNFAOJgy1mz6j2WZkSDmOYKGqJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ADVENT_--_Will_Crowthers_original_version-eae8cf8ae2144d2ba58bd5ca42708845.png',
      link: 'https://github.com/AdamClements3/TextBasedAdventureGame',
    },
    {
      title: 'AWBot',
      description:
        'AI Chatbot that mimics Albert Wesker from Resident Evil',
      imageUrl: 'https://i.pinimg.com/736x/63/4d/ed/634dedfa8ae35f67f3642e11ad6d9a6e.jpg',
      link: 'https://github.com/AdamClements3/AWBot',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  */
  googleAnalytics: {
    id: 'G-KJR75011VD', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /*
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
    */
};

export default config;
