import linkedin from '../assets/icons/linkedin.svg'
import gmail from '../assets/icons/google.svg'
import github from '../assets/icons/github.svg'

import figma from '../assets/icons/figma.svg'
import css from '../assets/icons/css.svg'
import python from '../assets/icons/python.svg'
import django from '../assets/icons/django.svg'
import next from '../assets/icons/nextjs.svg'
import react_svg from '../assets/icons/react.svg'
import php from '../assets/icons/Php.svg'
import html from '../assets/icons/html5.svg'
import mysql from '../assets/icons/mysql.svg'
import git from '../assets/icons/git.svg'
import javascript from '../assets/icons/javascript.svg'

//littleSites
import littlesites1 from '../assets/imgs/projects/littlesites/littlesites.jpg'
import littlesites2 from '../assets/imgs/projects/littlesites/littlesites-landing.jpg'
import littlesites3 from '../assets/imgs/projects/littlesites/littlesites-figma.png'
import littlesites4 from '../assets/imgs/projects/littlesites/littlesites-figjam.png'

// Makhai
import makhai1 from '../assets/imgs/projects/makhai/makhai-index.jpeg'
import makhai2 from '../assets/imgs/projects/makhai/makhai-habitaciones.jpeg'
import makhai3 from '../assets/imgs/projects/makhai/makhai-eventos.jpeg'
import makhai4 from '../assets/imgs/projects/makhai/makhai-gestion.jpeg'
import makhai5 from '../assets/imgs/projects/makhai/makhai-gestion2.jpeg'

export const profiles = [
  {
    img: linkedin,
    name: 'LinkedIn - Angel Gabriel Manzano Contreras',
    link: 'https://www.linkedin.com/in/angel-gabriel-manzano-contreras/'
  },
  {
    img: gmail,
    name: 'Gmail - Angel Gabriel Manzano Contreras',
    link: 'mailto:amanzanocontreras@gmail.com'
  },
  {
    img: github,
    name: 'GitHub - Angel Gabriel Manzano Contreras',
    link: 'https://github.com/AngelGabriel-ManzanoContreras'
  }
]

export const values = [
  {
    value: 'Teamwork and Collaboration',
    image: 'https://cdn3.iconfinder.com/data/icons/teamwork-competition/128/Gear_management_strategy_teamwork-512.png',
    comment: 'I like how an idea expands as individuals contribute with their perspectives and experiences.'
  },
  {
    value: 'Strategy and Planification',
    image: 'https://www.freeiconspng.com/uploads/strategy-icon-2.png',
    comment: 'I like when things get done when the process or roadmap was well planned, because when you just rush into the development process, it’s harder to solve the problems that show up.',
  },
  {
    value: 'Open Communication and Empathy',
    image: 'https://th.bing.com/th/id/R.5be7f33267c467e050a08d5a662ac702?rik=UmBMYIF2AaPbVA&riu=http%3a%2f%2fclipartmag.com%2fimages%2fempathy-clipart-36.png&ehk=SRj2bKMhmrSnnV8pWkgckXCMJW0wwpOqkWgrFGQ00Hw%3d&risl=&pid=ImgRaw&r=0',
    comment: 'I like when people are open to listen to others and try to understand their point of view.'
  },
  {
    value: 'Building Relationships and Diversity',
    image: 'https://cdn-icons-png.flaticon.com/512/4332/4332512.png',
    comment: 'I like when people connect with each other and build a relationship that lasts.'
  }
]

export const skills = {
  technical : [ 
    {
      name: 'Figma',
      img: figma
    },
    {
      name: 'HTML5',
      img: html
    },
    {
      name: 'CSS3',
      img: css
    },
    {
      name: 'Javascript',
      img: javascript
    },
    {
      name: 'React',
      img: react_svg
    },
    {
      name: 'MySQL',
      img: mysql
    },
    {
      name: 'Git',
      img: git
    },
    {
      name: 'Github',
      img: github
    },
    {
      name: 'Python',
      img: python
    }
  ],
  professional : [
    {
      name: 'Communication',
      img: 'https://cdn-icons-png.flaticon.com/512/6157/6157637.png'
    },
    {
      name: 'Teamwork',
      img: 'https://cdn3.iconfinder.com/data/icons/teamwork-competition/128/Gear_management_strategy_teamwork-512.png'
    },
    {
      name: 'Problem Solving',
      img: 'https://cdn0.iconfinder.com/data/icons/artificial-intelligence-butterscotch-vol-2/256/Problem_Solving-1024.png'
    },
    {
      name: 'Time Management',
      img: 'https://th.bing.com/th/id/R.b09d66f9fea623cf07768b16495e2da7?rik=oCt651s3pW7sFQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Empathy',
      img: 'https://th.bing.com/th/id/R.5be7f33267c467e050a08d5a662ac702?rik=UmBMYIF2AaPbVA&riu=http%3a%2f%2fclipartmag.com%2fimages%2fempathy-clipart-36.png&ehk=SRj2bKMhmrSnnV8pWkgckXCMJW0wwpOqkWgrFGQ00Hw%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Creativity',
      img: 'https://cdn4.iconfinder.com/data/icons/media-advertising-gray/64/CREATIVITY-1024.png'
    },
    {
      name: 'Critical Thinking',
      img: 'https://cdn2.iconfinder.com/data/icons/office-and-business-lineal-color-smart-start/512/critical_thinking-1024.png'
    },
    {
      name: 'Adaptability',
      img: 'https://cdn-icons-png.flaticon.com/512/8553/8553611.png'
    },
    {
      name: 'Pragmatism',
      img: 'https://cdn4.iconfinder.com/data/icons/psychology-highlight/128/Problem_solving-idea-solution-psychology-256.png'
    }
  ]
}

export const education = [
  {
    cert: 'Higher university technician in computer systems',
    org: 'PTECH - IBM - JA Worldwide',
    current: true,
    image: 'https://pbs.twimg.com/profile_images/1216830335687843845/VteYO_S9_400x400.jpg',
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Professional Technologist in Computer Systems',
    org: 'Escuela Politecnica de Guadalajara - UdeG',
    current: true,
    image: 'https://th.bing.com/th/id/R.f5fc81c37f06c10be4b9ea29063f0e54?rik=XQJSBXiuDLPGXA&riu=http%3a%2f%2fpolitecnica.sems.udg.mx%2frevista%2flineamientos%2fassets%2fimg%2ffind_user.png&ehk=oD5PoLZ%2bCeBYZevld7NDUXsgvh9q5Ic9NK1KoqwOhBo%3d&risl=&pid=ImgRaw&r=0',
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Google Professional Certificate Project Management',
    org: 'Google - Coursera',
    current: true,
    image: 'https://images.credly.com/images/771cff46-3573-4d12-bfd8-528745f00957/GCC_badge_PGM_1000x1000.png',
    skills: [ 'Project Management', 'Project Planning', 'Project Scheduling', 'Project Budgeting' ]
  },
  {
    cert: 'Google Professional Certificate User Exeprience (UX) Design',
    org: 'Google - Coursera',
    current: true,
    image: 'https://i0.wp.com/www.neverlandseeker.com/wp-content/uploads/2021/09/Google-UX-Design-Credly-Certificate.png',
    skills: [ 'User Experience', 'User Research', 'User-centered Design', 'User Interface' ]
  },
  {
    cert: 'Artificial Intelligence Fundamentals',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/df7ecc00-e6cf-4e07-8f03-b2ab446d8309/public_url',
    image: 'https://images.credly.com/size/340x340/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png',
    skills: [ 'Artificial Intelligense', 'AI Applications', 'AI Capabilities', 'AI Ethics' ]
  },
  {
    cert: 'Enterprise Design Thinking Practitioner',
    org: 'IBM',
    badge: 'https://www.credly.com/badges/779b1a70-904a-408f-8575-d10ccb154158/public_url',
    image: 'https://images.credly.com/size/340x340/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07_Practitioner.png',
    skills: [ 'Experience Design', 'User-centered Design', 'User Experience', 'User Research' ]
  },
  {
    cert: 'Basic Principles of Design',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/50a0200e-d282-44ef-8e52-b18e51aee455/public_url',
    image: 'https://images.credly.com/size/340x340/images/13ba6d71-e938-4fc0-a341-b0c7df45c095/Basic_Principles_of_Design.png',
    skills: [ 'Design Elements and Principles', 'Design Practices', 'Visual Design', 'Creativity' ]
  },
  {
    cert: 'CCNA: Introduction to Networks',
    org: 'Cisco',
    badge: 'https://www.credly.com/badges/8dcf4dc8-41e7-4b1f-896c-9926505509fe/public_url',
    image: 'https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png',
    skills: [ 'Network Fundamentals', 'Ethernet', 'IPv4 and IPv6 Addressing', 'IP Connectivity' ]
  },
  {
    cert: 'Agile Explorer',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/c1afc90d-beea-4859-ad22-00e46a0c1f40/public_url',
    image: 'https://images.credly.com/size/340x340/images/3b7846e2-bdbd-4ed6-8543-182f47502190/image.png',
    skills: [ 'Collaboration', 'Agile Methodology', 'Scrum methodology', 'Iterations' ]
  },
  {
    cert: 'Working in a Digital World',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/fef651be-a916-46ad-a071-15e04a5a139b/public_url',
    image: 'https://images.credly.com/size/340x340/images/4f76c627-c180-49ae-a5a0-742885eef581/Working_in_a_Digital_World-_Professional_Skills.png',
    skills: [ 'Creative and Critical Thinking', 'Interpersonal Communication', 'Problem Solving', 'Team Collaboration' ]
  }
]

export const projectsData = {
  'Sites' : {
    head : {
      title: 'Sites',
      slogan: 'Cafesito con pan',
      img:littlesites2
    },
    problem : 'My team and I were looking to address the problem of SMEs (PyMEs) not having a website. We wanted a platform where they could create their own website with a few clicks and a little help from us. We wanted to make it easy for them to have a website and be able to manage it themselves.',
    task: 'As UI Designer, I had to build an intuitive and pleasant Interface where the users were able to input their information and see their Landing page. Later on, I had to correct some CSS styles to accomplish what was planned and help with the website\'s backend development. Currently, only the Landing page is available, but the rest of the website is under development.',
    tools: [
      {
        name: 'Figma',
        img: figma
      },
      {
        name: 'CSS3',
        img: css
      },
      {
        name: 'React',
        img: react_svg
      },
      {
        name: 'Next',
        img: next
      },
      {
        name: 'Django',
        img: django
      },
      {
        name: 'PHP',
        img: php
      },
      {
        name: 'MySQL',
        img: mysql
      },
      {
        name: 'Git',
        img: git
      },
      {
        name: 'Github',
        img: github
      }
    ],
    results: {
      proofs: [ littlesites2, littlesites3, littlesites4, littlesites1 ],
      href: 'https://github.com/LittleSites/UI-CLIENT-NextJS'
    }
  },
  'makhai' : {
    head: {
      title: 'Makhai',
      slogan: 'Schoolar project',
      img: makhai1
    },
    problem: 'My team and I were asked to build a website for a Hotel where they could show their rooms, events, and activities. Also, make Room reservations and Logistic administration possible.',
    task: 'As my team\'s Product Owner, I was responsible for structuring the Team\'s backlog, task relegation, and handing deliverables weekly. In addition, I was responsible for debugging and refactoring front-end code, creating the website\'s back-end, and deploying the website.',
    tools: [
      {
        name: 'HTML5',
        img: html
      },
      {
        name: 'CSS3',
        img: css
      },
      {
        name: 'Javascript',
        img: javascript
      },
      {
        name: 'PHP',
        img: php
      },
      {
        name: 'MySQL',
        img: mysql
      }
    ],
    results: {
      proofs: [ makhai1, makhai2, makhai3, makhai4, makhai5 ],
      href: 'https://hotel-makhai-nayarit.000webhostapp.com/'
    }
  }
}