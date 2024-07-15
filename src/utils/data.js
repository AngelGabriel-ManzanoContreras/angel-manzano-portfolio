import { icons, makhaiImages, littlesitesImages, buyingTicketsImages, planSmartImages, storeFindingImages, externalImages } from './images.js'
import { pdfs } from './pdfs.js'

export const profiles = [
  {
    img: icons.linkedin,
    name: 'LinkedIn - Angel Gabriel Manzano Contreras',
    link: 'https://www.linkedin.com/in/angel-gabriel-manzano-contreras/'
  },
  {
    img: icons.gmail,
    name: 'Gmail - Angel Gabriel Manzano Contreras',
    link: 'mailto:amanzanocontreras@gmail.com'
  },
  {
    img: icons.github,
    name: 'GitHub - Angel Gabriel Manzano Contreras',
    link: 'https://github.com/AngelGabriel-ManzanoContreras'
  },
  {
    img: icons.cv_icon,
    name: 'CV - Angel Gabriel Manzano Contreras',
    link: pdfs.angelCV
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
      img: icons.figma
    },
    {
      name: 'HTML5',
      img: icons.html
    },
    {
      name: 'CSS3',
      img: icons.css
    },
    {
      name: 'Java',
      img: icons.java
    },
    {
      name: 'JavaScript',
      img: icons.javascript
    },
    {
      name: 'TypeScript',
      img: icons.typescript
    },
    {
      name: 'Golang',
      img: icons.golang
    },
    {
      name: 'React',
      img: icons.react_svg
    },
    {
      name: 'MySQL',
      img: icons.mysql
    },
    {
      name: 'Git',
      img: icons.git
    },
    {
      name: 'Github',
      img: icons.github
    },
    {
      name: 'Python',
      img: icons.python
    },
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
    // {
    //   name: 'Creativity',
    //   img: 'https://cdn4.iconfinder.com/data/icons/media-advertising-gray/64/CREATIVITY-1024.png'
    // },
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
    image: externalImages.ptech,
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Professional Technologist in Computer Systems',
    org: 'Escuela Politecnica de Guadalajara - UdeG',
    current: true,
    image: externalImages.udeg,
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Google Professional Certificate Project Management',
    org: 'Google - Coursera',
    current: true,
    image: externalImages.google_pm,
    skills: [ 'Project Management', 'Project Planning', 'Project Scheduling', 'Agile Project Management' ]
  },
  {
    cert: 'Google Professional Certificate User Exeprience (UX) Design',
    org: 'Google - Coursera',
    image: externalImages.google_ux,
    skills: [ 'User Experience', 'User Research', 'User-centered Design', 'User Interface Design' ]
  },
  {
    cert: 'Git Essentials',
    org: `O'Reilly Media`,
    badge: 'https://www.credly.com/badges/664a764c-55b8-4bbf-88e8-11c52838ad3b',
    image: externalImages.oreilly_git,
    skills: [ 'Git', 'Github', 'Version Control', 'Software Collaboration' ]
  },
  {
    cert: 'Artificial Intelligence Fundamentals',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/df7ecc00-e6cf-4e07-8f03-b2ab446d8309/public_url',
    image: externalImages.sks_ia,
    skills: [ 'Artificial Intelligense', 'AI Applications', 'AI Capabilities', 'AI Ethics' ]
  },
  {
    cert: 'Enterprise Design Thinking Practitioner',
    org: 'IBM',
    badge: 'https://www.credly.com/badges/779b1a70-904a-408f-8575-d10ccb154158/public_url',
    image: externalImages.designThinkingPractitioner,
    skills: [ 'Experience Design', 'User-centered Design', 'User Experience', 'User Research' ]
  },
  {
    cert: 'CCNA: Introduction to Networks',
    org: 'Cisco',
    badge: 'https://www.credly.com/badges/8dcf4dc8-41e7-4b1f-896c-9926505509fe/public_url',
    image: externalImages.ccna_itn,
    skills: [ 'Network Fundamentals', 'Ethernet', 'IPv4 and IPv6 Addressing', 'IP Connectivity' ]
  },
  {
    cert: 'IBM Agile Explorer',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/2c92f743-0d57-459a-95e3-c8e7fc44d974',
    image: externalImages.sks_agile,
    skills: [ 'Agile Operations', 'Scrum methodology', 'Sprints', 'Iterations' ]
  },
  {
    cert: 'Working in a Digital World',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/fef651be-a916-46ad-a071-15e04a5a139b/public_url',
    image: externalImages.sks_workingInADigitalWorld,
    skills: [ 'Creative and Critical Thinking', 'Interpersonal Communication', 'Problem Solving', 'Team Collaboration' ]
  }
]

export const projectsData = {
  'sites' : {
    head : {
      title: 'Sites',
      slogan: 'Cafesito con pan',
      img: littlesitesImages[0]
    },
    problem : 'My team and I were looking to address the problem of SMEs (PyMEs) not having a website. We wanted a platform where they could create their own website with a few clicks and a little help from us. We wanted to make it easy for them to have a website and be able to manage it themselves.',
    task: 'As UI Designer, I had to build an intuitive and pleasant Interface where the users were able to input their information and see their Landing page. Later on, I had to correct some CSS styles to accomplish what was planned and help with the website\'s backend development. Currently, only the Landing page is available, but the rest of the website is under development.',
    tools: [
      {
        name: 'Figma',
        img: icons.figma
      },
      {
        name: 'CSS3',
        img: icons.css
      },
      {
        name: 'Next',
        img: icons.next
      },
      {
        name: 'Django',
        img: icons.django
      },
      {
        name: 'PHP',
        img: icons.php
      },
      {
        name: 'MySQL',
        img: icons.mysql
      },
      {
        name: 'Git',
        img: icons.git
      },
      {
        name: 'Github',
        img: icons.github
      }
    ],
    results: {
      proofs: littlesitesImages,
      href: 'https://github.com/LittleSites/UI-CLIENT-NextJS'
    }
  },
  'makhai' : {
    head: {
      title: 'Makhai',
      slogan: 'Schoolar project',
      img: makhaiImages[0]
    },
    problem: 'My team and I were asked to build a website for a Hotel where they could show their rooms, events, and activities. Also, make Room reservations and Logistic administration possible.',
    task: 'As my team\'s Product Owner, I was responsible for structuring the Team\'s backlog, task relegation, and handing deliverables weekly. In addition, I was responsible for debugging and refactoring front-end code, creating the website\'s back-end, and deploying the website.',
    tools: [
      {
        name: 'HTML5',
        img: icons.html
      },
      {
        name: 'CSS3',
        img: icons.css
      },
      {
        name: 'Javascript',
        img: icons.javascript
      },
      {
        name: 'PHP',
        img: icons.php
      },
      {
        name: 'MySQL',
        img: icons.mysql
      }
    ],
    results: {
      proofs: makhaiImages,
      href: 'https://hotel-makhai-nayarit.000webhostapp.com/'
    }
  },
  'buying-tickets' : {
    head : {
      title: 'Buying Tickets',
      slogan: 'Concert tickets app (Coursera project)',
      img: buyingTicketsImages[3]
    },
    problem : 'We aimed to create a mobile application for purchasing concert tickets that allows users to select their seat at the concert, so that people with any disability can have a better experience.',
    task: 'As UX/UI designer I was responsible for Conducting interviews, paper and digital wireframes, creating low and high-fidelity prototypes, conducting usability studies, accessibility, and design iteration.',
    tools: [
      {
        name: 'Figma',
        img: icons.figma
      },
    ],
    results: {
      proofs: buyingTicketsImages,
      href: 'https://www.figma.com/design/QQNhvAyPtj7ohtfewnMlW0/Buying-tickets-app?node-id=0-1&t=fmaTfxIGz0ph84Jh-1',
      uxcase : pdfs.buyingTicketsUXCase
    }
  },
  'store-finding' : {
    head : {
      title: 'Store Finding',
      slogan: 'Stores near you (Coursera project)',
      img: storeFindingImages[2]
    },
    problem : `We aimed to create a website to find stores near you. Especially when you have limited time to move between work and home and you don't have time to run an errand at your favorite store.`,
    task: 'As UX/UI designer I was responsible for Conducting interviews, paper and digital wireframes, creating low and high-fidelity prototypes, conducting usability studies, accessibility, and design iteration.',
    tools: [
      {
        name: 'Figma',
        img: icons.figma
      },
    ],
    results: {
      proofs: storeFindingImages,
      href: 'https://www.figma.com/design/lFicAqZGrqLK3sPff7qbKB/SECOND-PROJECT-(COURSE-7)?node-id=0-1&t=Xr8gESDBx0sXaZKT-0',
      uxcase : pdfs.storeFindingUXCase
    }
  },
  'Plan Smart' : {
    head : {
      title: 'Plan Smart',
      slogan: 'Budgeting app (Coursera project)',
      img: planSmartImages[2]
    },
    problem : 'We are aiming to create a cross-platform app for budgeting. It is mainly aimed at young adults looking to start working on their finances. our objective is to promote personal finances by providing a tool to follow up easily and comfortably and offering you learning recommendations.',
    task: 'As UX/UI designer I was responsible for Conducting interviews, paper and digital wireframes, creating low and high-fidelity prototypes, conducting usability studies, accessibility, and design iteration.',
    tools: [
      {
        name: 'Figma',
        img: icons.figma
      },
    ],
    results: {
      proofs: planSmartImages,
      href: 'https://www.figma.com/design/DnVnNsg8JiAArAFlOYSeP8/Third-project?node-id=2-4&t=VyUJtMs4kDWezCUr-1',
      uxcase : pdfs.planSmartUXCase
    }
  },
}