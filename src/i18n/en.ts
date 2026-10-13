// All interface texts live here. To add a language, copy this file (for example ru.ts)
// and create src/pages/ru/. Content files carry their own language.

export const en = {
  lang: 'en',
  siteName: 'Konstantin Beregovoy',
  domain: 'bereg.dev',
  role: 'Senior AI Frontend Engineer, Tech & Team Lead',
  tagline:
    'I build and lead frontend teams for complex products in fintech, platforms and developer tools. React, TypeScript, accessibility and web standards.',
  email: 'konstantin@bereg.dev',

  nav: [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/projects/', label: 'Projects' },
    { href: '/certificates/', label: 'Certificates' },
    { href: '/blog/', label: 'Blog' },
    { href: '/contact/', label: 'Contact' },
  ],

  links: {
    linkedin: 'https://www.linkedin.com/in/konstantin-beregovoy/',
    github: 'https://github.com/KonstantinBeregovoy',
  },

  facts: [
    { value: '15+', label: 'years in frontend' },
    { value: '8', label: 'engineers led at peak' },
    { value: '100x', label: 'customer growth supported at Perimeter 81' },
    { value: 'Top 3', label: 'software development creator in Israel (Favikon, Sep 2026)' },
  ],

  help: {
    title: 'How I help a business',
    items: [
      {
        title: 'Faster delivery',
        text: 'AI-assisted workflows and AI code review cut pull request turnaround to under 24 hours and sped up development cycles about 3x at Payouts.com.',
      },
      {
        title: 'Shorter time to market',
        text: 'A unified design system and strict API contracts reduced time to market by 70% across products.',
      },
      {
        title: 'Scale without chaos',
        text: 'A modular UI architecture and an internal analytics platform supported 100x customer growth (30 to 3,000+) at Perimeter 81.',
      },
      {
        title: 'Accessible and audit-ready',
        text: 'WCAG compliance and SOC audit preparation built into the frontend, plus open source work on accessibility validation.',
      },
    ],
  },

  about: {
    intro: [
      'More than 15 years in frontend and 20 in programming. I started by teaching programming and robotics, then moved into web development, fintech and cybersecurity products.',
      'I care about the place where UX, architecture and business rules meet. I lead frontend teams, set engineering standards and bring AI into the workflow in a way a team can adopt and scale.',
      'I contribute to web standards and open source, and I write about what I learn.',
    ],
  },

  // Experience. "main" roles show on Home, everything shows on About.
  experience: [
    {
      company: 'Payouts.com',
      title: 'Frontend Team Lead (Founding Engineer)',
      period: '2022 to 2026',
      place: 'Herzliya',
      main: true,
      text: 'First engineering hire. Built the frontend from scratch and grew the team to 8 engineers. Led AI document parsing with OpenAI and Gemini, a unified Storybook design system that cut time to market by 70%, AI-assisted code review, and frontend preparation for SOC audits.',
    },
    {
      company: 'Perimeter 81, a Check Point company',
      title: 'Senior Frontend Developer (early hire)',
      period: '2019 to 2022',
      place: 'Tel Aviv',
      main: true,
      text: 'Built the internal analytics platform that tracked contracts, payments and 100x customer growth, the fleet monitoring dashboards, and the first company-wide design system, which passed technical audits during the Check Point acquisition.',
    },
    {
      company: 'NGsoft',
      title: 'Frontend Developer',
      period: '2017 to 2019',
      place: 'Petah Tikva',
      main: true,
      text: 'Fintech, government and e-commerce projects, including banking and retail clients (Discount Bank, Shufersal). Worked in a secure, isolated environment on accessibility verification and certification for an official government defense website.',
    },
    {
      company: 'OleOle',
      title: 'Frontend Technical Lead (Consultant)',
      period: '2026 to now',
      place: 'Remote',
      other: true,
      text: 'Advisory role, a few hours a week. Helping an early-stage football fan platform set up frontend practices: test coverage, shared design tokens, browser support standards and hiring.',
    },
    {
      company: 'Shahmatland',
      title: 'Founder and Technical Lead (volunteer)',
      period: '2024 to now',
      place: 'Israel',
      other: true,
      text: 'A chess education platform used by 20+ schools and 13+ instructors, available in 5 languages. Built with a volunteer team of teachers and a grandmaster.',
    },
    {
      company: 'Elpisor',
      title: 'Frontend Developer',
      period: '2016 to 2017',
      place: 'Israel',
      text: 'Web applications in HTML, CSS and JavaScript.',
    },
    {
      company: 'HI5Studio',
      title: 'Frontend Developer',
      period: '2014 to 2016',
      place: 'Dnipro, Ukraine',
      text: 'Responsive pages from Photoshop designs for finance and other clients.',
    },
    {
      company: 'World ORT',
      title: 'Technical Trainer',
      period: '2014 to 2016',
      place: 'Dnipro region, Ukraine',
      text: 'Taught HTML, CSS, JavaScript, computer science, programming and robotics.',
    },
    {
      company: 'STEP Computer Academy',
      title: 'Developer and trainer',
      period: '2010 to 2014',
      place: 'Dnipro region, Ukraine',
      text: '',
    },
    {
      company: 'Freelance',
      title: 'IT consulting',
      period: '2007 to 2010',
      place: 'Dnipro, Ukraine',
      text: 'Web projects, software setup, computer assembly and repair.',
    },
  ],

  skills: [
    {
      group: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Vite', 'Webpack', 'Storybook', 'Jest', 'Vitest', 'Playwright'],
    },
    {
      group: 'Architecture',
      items: ['Frontend architecture', 'Modular and scalable UI', 'Design systems', 'Contract-first API design', 'Performance optimization', 'WebSocket', 'CI/CD'],
    },
    {
      group: 'AI and workflows',
      items: ['Agentic workflows', 'Spec-driven development', 'AI implementation', 'Prompt engineering', 'RAG', 'Claude', 'Cursor', 'Gemini'],
    },
    {
      group: 'Accessibility and security',
      items: ['WCAG', 'Digital accessibility', 'SOC compliance', 'Web security', 'High-security interfaces'],
    },
    {
      group: 'Leadership',
      items: ['Team leadership', 'Mentoring', 'Code review', 'Hiring', 'Cross-functional work', 'Agile'],
    },
  ],

  education: [
    { school: 'Dnipro University of Technology', degree: 'Master of Computer Engineering', period: '2002 to 2007' },
    { school: 'Dnipro State Agrarian University', degree: 'Master of Finance', period: '2005 to 2010' },
    { school: 'Tel-Ran Educational Center', degree: 'Programming courses', period: '2016 to 2017' },
  ],

  research: [
    {
      title: 'Proper Financial Strategy as the Key to Successful Enterprise Development',
      venue: 'V International Forum for Students and Young Researchers, Dnipro',
      year: '2010',
    },
    {
      title: 'Prototyping in Modern Robotics Using Arduino and 3D-printers',
      venue: 'X International Forum for Students and Young Researchers, Dnipro',
      year: '2015',
      href: 'https://im.nmu.org.ua/ua/forum/Contents2%202015.doc',
    },
    {
      title: 'Process of Programming a Robot Car (research mentor and co-author, Diploma for Original Engineering Development)',
      venue: 'XI International Forum for Students and Young Researchers, Dnipro',
      year: '2016',
      href: 'https://djc.com.ua/ru/novosti/rahely-lyubarskaya-nagrazhdena-gramoto/',
    },
  ],

  volunteering: [
    {
      title: 'Educational Technology and IT Strategy Consultant, World ORT',
      period: '2015 to now',
      text: 'Curriculum for computer science, robotics and programming, AI tools in education, guest sessions for students.',
    },
    {
      title: 'Web Accessibility Advocate and Mentor',
      period: '2020 to now',
      text: 'Sessions for students and junior developers on accessible interfaces: semantic HTML, ARIA, keyboard navigation.',
    },
  ],

  languages: ['English', 'Hebrew', 'Ukrainian', 'Russian'],

  // Quotes are taken word for word from LinkedIn recommendations (visible ones).
  recommendations: [
    {
      quote:
        'He doesn’t just write exceptional React/TypeScript code; he builds autonomous engineering cultures. By introducing strict API contracts and a unified Design System, he directly contributed to reducing our Time-to-Market by 70%.',
      name: 'Sergei Antonov',
      role: 'VP of R&D, Payouts.com',
    },
    {
      quote:
        'He is an outstanding Frontend Lead and a true business partner. He easily connects Product, Design, and Engineering, so everyone works together.',
      name: 'Barak Hirchson',
      role: 'Founder & Chief AI Officer, Payouts.com',
    },
    {
      quote:
        'Under his leadership, our frontend architecture became far more modular, testable, and future-proof.',
      name: 'Barak Yerushalmi',
      role: 'VP of Products, Payouts.com',
      href: 'https://www.linkedin.com/in/barak-yerushalmi-b3516b2a/',
    },
    {
      quote:
        'This project was built from scratch, involved a highly complex layout and multiple stakeholder groups, yet Konstantin delivered all milestones on time, with impressive technical precision and clear, proactive communication throughout.',
      name: 'Daniel Goldfeld',
      role: 'VP of Customer Success and Delivery, Hi Auto (worked together at Perimeter 81)',
    },
    {
      quote:
        'Konstantin has an exceptional ability to see both the big picture and the fine details.',
      name: 'Alexey Kagan',
      role: 'Full Stack Engineer, Vi-Soft',
      href: 'https://www.linkedin.com/in/alexey-kagan/',
    },
    {
      quote:
        'I saw Kosta’s passion and commitment. He is a team player, always willing to do the extra mile and not afraid of hard work.',
      name: 'Yehuda Naim',
      role: 'VP Digital, NGsoft',
      href: 'https://www.linkedin.com/in/yehudanaim/',
    },
  ],

  contact: {
    heading: 'Contact',
    text: 'Open to frontend leadership, consulting and interesting product problems.',
  },
};

export type Copy = typeof en;
