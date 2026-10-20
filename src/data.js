// Everything the site says lives here. Edit text in this file, not in the components.
// Anything in [square brackets] shows up on the site as a pencilled "fill me in" note.

const img = (name) => `${import.meta.env.BASE_URL}${name}`;

export const me = {
  name: 'Eiman Khairol',
  hello: "Hi, I'm Eiman.",
  intro:
    'Computer engineer from Malaysia, Penn State class of 2026. I like taking messy systems, whether networks, data or a pile of documents, and turning them into something people can actually use.',
  email: 'khairoleiman03@gmail.com',
  linkedin: 'https://linkedin.com/in/khairol-eimannajwan',
  github: 'https://github.com/eimankhairol',
  resume: img('resume.pdf'),
  photo: null, // e.g. img('me.jpg') once it's in public/
};

// On the tape: sample songs until Spotify is connected.
export const onRepeat = [
  { song: '[Song]', artist: '[Artist]' },
  { song: '[Song]', artist: '[Artist]' },
  { song: '[Song]', artist: '[Artist]' },
  { song: '[Song]', artist: '[Artist]' },
  { song: '[Song]', artist: '[Artist]' },
];

// The story, told as chapters. `roles` and `projects` pin those cards into the chapter
// where they happened; `photo` is a placeholder frame until you add a real image.
export const chapters = [
  {
    title: 'Where it starts',
    photo: '[A childhood photo, an old Minecraft screenshot, or home]',
    when: 'Before',
    body: [
      'I grew up in Malaysia building things on a computer: Roblox games, Lego sets, and eventually Minecraft mods and servers. Running a server for my friends was my first messy system: things broke, people complained, and I was the one who had to figure out why.',
      'Later I went to a science boarding school, where I was good at the work and assumed computer science was where I’d end up.',
    ],
  },
  {
    title: 'The detour',
    photo: '[A photo from your first year at Penn State]',
    when: '2022',
    body: [
      'I got a scholarship to study in the US. The catch: it had to be engineering. I wanted computer science, so I picked the closest thing, computer engineering, and moved from Malaysia to State College, Pennsylvania.',
      'Two years in, I was honest with myself: I didn’t love physics or calculus, and I wasn’t sure engineering was for me. I kept my grades up anyway and started paying attention to which parts I actually enjoyed.',
      '[What the first winter felt like, or what surprised you.]',
    ],
  },
  {
    title: 'Finding my people',
    roles: ['vp', 'grader'],
    when: '2023–24',
    body: [
      'The part I enjoyed turned out to be people. As Vice President of the Penn State Malaysian Students Club, I helped run six cultural events of 100+ people each, chasing sponsors, budgets and logistics.',
      'I also started grading for engineering courses, which taught me how many different ways there are to get the same program almost right, and that explaining why something is wrong is a skill of its own.',
    ],
  },
  {
    title: 'A summer inside a bank',
    roles: ['cimb'],
    projects: ['cimb'],
    when: 'Summer 2025',
    body: [
      'Back home in Kuala Lumpur, I interned with CIMB’s network engineering team, on the infrastructure under core banking. It taught me what “production” means: you don’t experiment on a live bank.',
      'It also taught me something about myself. The part of the summer I couldn’t stop thinking about was the internal hackathon, where I built an AI chatbot to help customer service find answers faster. I liked building things people use more than keeping cables in order.',
    ],
  },
  {
    title: 'The translator',
    roles: ['capstone', 'la'],
    projects: ['iot', 'zscore', 'scoach'],
    when: '2025–26',
    body: [
      'For my capstone I led a four-person team building a real-time IoT handover system with Exacta Global Smart Solutions. I built the first version of the Django backend, but my real job was being the bridge between the hardware and software halves of the team, making sure each side understood what the other needed. We placed 2nd at the International oneM2M Hackathon.',
      'On the side I kept building for fun: a trading signal from one-minute price candles, and SCOACH, an AI running coach that reads my Strava. In my last semester I was a Learning Assistant, running office hours and helping students untangle code and routing. I graduated in May 2026.',
    ],
  },
  {
    title: 'Now',
    roles: ['kri'],
    when: '2026',
    body: [
      'Back in Malaysia, I joined the K-Youth Development Programme’s data analytics track and was placed at Khazanah Research Institute in August, in the team that supports researchers with data and technology.',
      'My first project: the data and charts behind a research dashboard, and now a public scrollytelling page that explains that research to people who aren’t economists. Six weeks in, I was offered a contract role to stay on.',
      'It’s the same thing I’ve been doing since the Minecraft server: taking something messy and making it make sense for the people who need it. Next, I want to do that for decisions in strategy, consulting and investing.',
    ],
  },
];

// The bookshelf. `spine` picks the colour, `tall` the height (0–1).
export const projects = [
  {
    id: 'scoach',
    title: 'SCOACH',
    tagline: 'An AI running coach that reads your Strava',
    year: 'Mar 2026',
    spine: 'orange',
    tall: 0.92,
    story:
      'I started running and immediately overdid it. SCOACH connects to Strava, looks at what you actually ran, and has Claude write you a coaching report. Mine told me, politely, to slow down.',
    built: [
      'Strava OAuth sign-in and a short onboarding: goal, days per week, 5K time, experience',
      'A coaching report from Claude that references your real recent runs',
      'Charts for weekly distance, pace trend and activity mix',
      'A shareable monthly stats card with an AI-written caption',
    ],
    stack: ['React', 'Node.js', 'Express', 'Strava API', 'Claude API', 'Recharts'],
    images: [
      { src: img('scoach-dashboard.jpeg'), alt: 'SCOACH dashboard with weekly distance and pace charts' },
      { src: img('scoach-report.jpeg'), alt: 'An AI coaching report telling the runner to slow down' },
      { src: img('scoach-coach.jpeg'), alt: 'Onboarding: what are you training for?' },
      { src: img('scoach-share.jpeg'), alt: 'Shareable monthly stats card' },
    ],
    links: [{ label: 'Code on GitHub', url: 'https://github.com/eimankhairol/scoach' }],
  },
  {
    id: 'iot',
    title: 'IoT Handover',
    tagline: 'Keeping devices connected as they move between gateways',
    year: 'Fall 2025',
    spine: 'green',
    tall: 1,
    award: '2nd place',
    story:
      'My capstone. Devices move, gateways change, and the system has to keep track without dropping data. I led a team of four to build the backend and the dashboard that watched it all happen live.',
    built: [
      'A Django backend with REST APIs for high-frequency telemetry',
      'Handover tracking between gateways, keeping device state consistent',
      'A live dashboard for signal strength, connectivity and handover history',
      'Deployed on AWS EC2',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'AWS EC2'],
    images: [
      { src: img('django-app-home-page.png'), alt: 'The IoT monitoring dashboard home page' },
      { src: img('iot1.jpg'), alt: 'Devices page showing an ESP32 and a SEEED XIAO online' },
      { src: img('iot2.jpg'), alt: 'Live temperature reading from a SEEED XIAO sensor' },
    ],
    links: [
      { label: 'Code on GitHub', url: 'https://github.com/BobFIV/PSU_CAPSTONE_F25' },
      { label: 'oneM2M feature', url: 'https://www.onem2m.org/membership/executive-viewpoints/985-international-hackathon-psu2025-scalable-iot-mobility' },
      { label: 'Hackster write-up', url: 'https://www.hackster.io/540749/onem2m-hackathon-team-pennstatenitannylions-2025-9935d2' },
    ],
  },
  {
    id: 'zscore',
    title: 'Minute Z-Score Trader',
    tagline: 'A trading signal built from one-minute candles',
    year: 'Sep 2025',
    spine: 'pink',
    tall: 0.8,
    story:
      'A research project into whether volume times candle body says anything about where price goes next. I built the signal, backtested it, and made a dashboard so I could poke at any ticker.',
    built: [
      'A custom Volume × Candle Body signal, smoothed with a moving average',
      'Long, short or neutral positions from the signal’s sign',
      'A Streamlit dashboard with candlesticks, trade markers and an equity curve',
      'Return, volatility and Sharpe ratio for every run',
    ],
    stack: ['Python', 'Pandas', 'Streamlit', 'Yahoo Finance'],
    images: [
      { src: img('z-dash.jpeg'), alt: 'Streamlit dashboard for the trading strategy' },
      { src: img('z-bar.jpeg'), alt: 'Candlestick chart with buy and sell markers' },
      { src: img('z-bar2.jpeg'), alt: 'Another candlestick chart view' },
      { src: img('z-prof.jpeg'), alt: 'Equity curve and performance metrics' },
    ],
    links: [{ label: 'Code on GitHub', url: 'https://github.com/eimankhairol/minute-zscore-trader' }],
  },
  {
    id: 'cimb',
    title: 'CIMB Chatbot',
    tagline: 'Helping customer service find answers faster',
    year: 'Summer 2025',
    spine: 'cream',
    tall: 0.72,
    story:
      'Built in an internal hackathon at CIMB. Customer service reps were digging through documentation for the same answers again and again, so we gave a chatbot the docs and a curated Q&A list instead. Internal project, so no public code.',
    built: [
      'A knowledge base from company documentation and common Q&A',
      'Model deployment on Azure AI Foundry',
      'A Streamlit front end for the hackathon demo',
      'Designed to sit directly on the customer-facing website',
    ],
    stack: ['Python', 'Azure AI Foundry', 'Streamlit'],
    images: [
      { src: img('cimb-presentation-1.JPG'), alt: 'Hackathon pitch slide' },
      { src: img('cimb-presentation-2.JPEG'), alt: 'The problem statement slide: slow responses and overloaded agents' },
      { src: img('cimb-presentation-3.JPEG'), alt: 'Another slide from the hackathon pitch' },
    ],
    links: [],
  },
];

// The library cards. Each role has three sides instead of bullet points.
export const roles = [
  {
    key: 'kri',
    role: 'Data Analyst',
    place: 'Khazanah Research Institute, Kuala Lumpur',
    from: 'Aug 2026',
    to: 'Now',
    did: 'Built the charts and data pipeline for a research dashboard. Now leading a public scrollytelling page (D3, GSAP) on the same research.',
    learned: '[What you learned in your first months at KRI.]',
    moment: '[A moment from KRI you still think about.]',
  },
  {
    key: 'la',
    role: 'Learning Assistant',
    place: 'Penn State College of Engineering',
    from: 'Jan 2026',
    to: 'May 2026',
    did: 'Ran office hours for undergrad computer engineering courses, helped students debug code and get their heads around IP addressing and routing, graded, built rubrics and proctored exams.',
    learned: 'If you can’t explain subnetting to a tired sophomore at 4pm, you don’t really understand it yet.',
    moment: '[A student or office-hours moment you remember.]',
  },
  {
    key: 'capstone',
    role: 'Capstone Team Lead',
    place: 'Exacta Global Smart Solutions × Penn State',
    from: 'Aug 2025',
    to: 'Dec 2025',
    did: 'Led four people building a real-time IoT handover backend in Django, from architecture to deployment. It placed 2nd at the International oneM2M Hackathon.',
    learned: '[What leading a team taught you that building alone didn’t.]',
    moment: '[The moment you found out you placed.]',
    project: 'iot',
  },
  {
    key: 'cimb',
    role: 'Network Engineering Intern',
    place: 'CIMB Group Technology & Data, Kuala Lumpur',
    from: 'May 2025',
    to: 'Aug 2025',
    did: 'Configured routers and switches over Cisco CLI in a live banking network, helped diagnose routing and connectivity issues, and documented 50+ network components so the next person could find things.',
    learned: 'In production, nobody is impressed by clever. They are impressed by nothing going down.',
    moment: '[Your first time touching a live production device.]',
    project: 'cimb',
  },
  {
    key: 'vp',
    role: 'Vice President',
    place: 'Penn State Malaysian Students Club',
    from: 'Aug 2023',
    to: 'May 2024',
    did: 'Ran bi-weekly exec meetings and organised six cultural events of 100+ people each, including sponsorship, budgeting and logistics.',
    learned: '[What you learned about getting people to show up.]',
    moment: '[Your favourite event and why.]',
  },
  {
    key: 'grader',
    role: 'Assistant Grader',
    place: 'Penn State College of Engineering',
    from: 'Aug 2023',
    to: 'Dec 2025',
    did: 'Graded programming assignments, projects and exams for 100+ students a semester, keeping it consistent across sections.',
    learned: 'There are a hundred ways to get a program almost right, and reading them all makes you write clearer code.',
    moment: '[The strangest submission you ever graded.]',
  },
];

export const currently = [
  { label: 'Reading', value: '[Book title]' },
  { label: 'Learning on guitar', value: '[A Strokes song?]' },
  { label: 'Running', value: 'Easy miles, as instructed' },
  { label: 'Building', value: 'A scrollytelling page (day job) and this site.' },
];

// The "read it here" version of the resume.
export const resume = {
  education: [
    { what: 'BSc Computer Engineering', where: 'The Pennsylvania State University', when: 'Aug 2022 – May 2026' },
    { what: 'K-Youth Development Programme, BI & Data Analytics track', where: 'SQL, Power Query, Power BI', when: 'Jul 2026' },
  ],
  experience: [
    {
      role: 'Data Analyst',
      place: 'Khazanah Research Institute',
      when: 'Aug 2026 – Present',
      note: 'K-Youth placement; offered a contract data analyst role six weeks in',
      points: [
        'Built the charts and data pipeline for a Tableau dashboard for a research project, working with researchers and a data engineer.',
        'Leading a public scrollytelling page (D3, GSAP) that makes the research readable for a general audience.',
        'Use agentic AI workflows (Claude Code) daily to ship faster than a solo analyst normally could.',
        '[A number: datasets, sectors or charts]',
      ],
    },
    {
      role: 'Capstone Team Lead',
      place: 'Exacta Global Smart Solutions × Penn State',
      when: 'Aug 2025 – Dec 2025',
      points: [
        'Led four people building a real-time IoT handover backend in Django, from architecture to deployment. It placed 2nd at the International oneM2M Hackathon.',
        'Main integrator between the hardware and software teams; built the initial Django app.',
      ],
    },
    {
      role: 'Network Engineering Intern',
      place: 'CIMB Group Technology & Data',
      when: 'May 2025 – Aug 2025',
      points: [
        'Configured routers and switches over Cisco CLI in a live banking network, helped diagnose routing and connectivity issues, and documented 50+ network components so the next person could find things.',
      ],
    },
    {
      role: 'Teaching: Assistant Grader → Learning Assistant',
      place: 'Penn State College of Engineering',
      when: 'Aug 2023 – May 2026',
      points: [
        'Graded assignments and exams for 100+ students a semester; later ran office hours, built rubrics and proctored exams for undergrad computer engineering courses.',
      ],
    },
    {
      role: 'Vice President',
      place: 'Penn State Malaysian Students Club',
      when: 'Aug 2023 – May 2024',
      points: [
        'Ran bi-weekly exec meetings and organised six cultural events of 100+ people each, including sponsorship, budgeting and logistics.',
      ],
    },
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'SQL', 'C++', 'JavaScript'] },
    { group: 'Building', items: ['React', 'Node.js', 'Django', 'Streamlit', 'Docker', 'Git', 'GSAP'] },
    { group: 'Data', items: ['Power BI', 'Power Query', 'Excel', 'Pandas', 'Tableau', 'D3.js'] },
    { group: 'Infrastructure', items: ['AWS EC2', 'Azure AI', 'Linux', 'Cisco CLI'] },
    { group: 'AI tooling', items: ['Claude Code', 'Claude API', 'Azure AI Foundry'] },
  ],
  interests: 'Guitar (indie rock, slowly working through The Strokes); running, coached by an AI I built; novels.',
};
