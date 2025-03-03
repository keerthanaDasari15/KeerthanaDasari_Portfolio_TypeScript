import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  CertificationsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Dasari Keerthana',
  title: "Hi all, I'm Dasari Keerthana",
  description:
    "I am an Final Year Student based out of Vijayawada, Andhra Pradesh, with a strong passion for technology and problem-solving. As a self-taught programmer, I am continually exploring new technologies and innovative solutions to build impactful projects. I thrive on tackling challenges and am always eager to expand my knowledge and expertise.",
  resumeLink:
    'https://github.com/',
};

export const openSource = {
  githubUserName: 'DasariKeerthana',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https:',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/',
  kaggle: "https://www.kaggle.com/",
  linktr: "https://linktr.ee/"
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'ENERGETIC CODER EAGER TO PUSH BOUNDARIES IN MODERN TECHNOLOGY',
  data: [
    {
      title: 'Web Development and Automation Testing',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Building Response Web Application using Python, Django and Flask'
        ),
        emoji('⚡ Building Automation testing Frameworks'),
        emoji('⚡ Building Machine Learning Models to solve real world problems'),
      ],
      softwareSkills: [
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
            skillName: 'Flask',
            fontAwesomeClassName: 'fa-brands:python',
        },
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Python Development', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Automation Testing',
    progressPercentage: '80',
  },
  {
    Stack: 'AWS',
    progressPercentage: '80',
  },
  {
    Stack: 'DevOps',
    progressPercentage: '80',
  },
  {
    Stack: 'Web Scraping',
    progressPercentage: '80',
  },
  {
    Stack: 'Data Engineering',
    progressPercentage: '80',
  },
  {
    Stack: 'Machine Learning',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'KL University',
    subHeader: 'B.TECH in Computer science and Engineering',
    duration: 'June 2022 - May 2026',
  },
  {
    schoolName: 'Narayana Junior College',
    subHeader: 'Intermediate',
    duration: 'June 2020 - June 2022',
  },
  {
    schoolName: 'Narayana Olympiad School',
    subHeader: 'SSC',
    duration: 'June 2019 - June 2020',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Skills Marathon',
    companyLogo: '/img/icons/common/ss&c.png',
    date: 'Sep 2024- Feb 2025',
    desc: 'Worked On Designing ML Models',
    descBullets: [
      'Optimized code, achieving a 40% reduction in load times, significantly enhancing user experience.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Portfolio Website designed using Third-party tool (Strikingly)',
    desc: 'A portfolio website designed using the third-party tool Strikingly provides an easy-to-use platform for creating professional-looking websites without needing any coding knowledge.',
    github: 'https://mystrikingly.com/',
  },

];


export const certifications: CertificationsType[] = [
  {
    certificate: 'AWS Cloud Certified Practitioner',
    issuedby: 'AWS',
    github: 'https://www.credly.com/badges',
  }

];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dasari Keerthana',
  description:
    'A passionate AI/ML Developer',
  author: 'Dasari Keerthana',
  url: '',
  keywords: [
    'Dasari Keerthana',
    'Portfolio',
    'Dasari Portfolio ',
    'Dasari Keerthana Portfolio',
  ],
};
