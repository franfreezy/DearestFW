import {
    cert1,
    altium,
  hackerrank, 
  kaggle,
  unitar,
  cert27,
  cert28,
  cert29,
  cert30,
  cert31,
  cert32,
  cert33,
  cert34,
  cert35,
  cert36,
  cert37,
  cert38,
    ses,
    sescert,
    asi,
    dojocert,
    aws,
  cert2,  
  cert39,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert15,
  cert16,
  cert17,
  cert18,
  cert19,
  cert20,
  cert21,
  cert22,
  cert23,
  cert24,
  cert25,
  cert26,
  negotiation,
  c,
  ibm,
  microsoft,
  cisco,
  hmis,
  python,
  egypro,
  knbs,
  gearbox,
  cpp,
  javascript,
  jkuat,
  undata,
  agrisat,
  tafiti,
  reactjs,
  tailwind,
  git,
  netgenix,
  podcast,
  threejs,
  linkedin,
  ksa,
  tethics,
  github as githubLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Embedded C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "JavaScript", icon: javascript },
];

export const technologies = [
  
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Python", icon: python },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Co-Founder",
    company_name: "Tethics Electrics Group",
    icon: tethics,
    iconBg: "#161329",
    date: "Apr 2025 - Current",
    points: [
      "Building diverse innovative solutions in the fields of AI, ML, and IoT.",
      "Sustaining a strong focus on climate action and sustainability.",
    ],
  },
  {
    title: "TT&C Subsystem Lead",
    company_name: "Kenya Space Agency | Tafiti Project",
    icon: ksa,
    iconBg: "#161329",
    date: "Jan 2024 - Mar 2025",
    points: [
      "Established a suitable implementation framework and work plan for the TT&C subsystem.",
      "Designed and Implemented a data visualisation tool for the satellite data.",
      "Lead, mentor, and manage a high-performing engineering students team, fostering a collaborative and results-driven work environment.",
      "Co-designed and implemented the communication circuitry for a nano satellite and proofed firmware for the communication subsystem.",
      "Resolved a preexisting backlog in the TT&C subsystem and ended up delivering a working model."],
  },
  {
    title: "CTO",
    company_name: "Netgenix Tech Icons",
    icon: netgenix,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Developed and implemented a comprehensive technology strategy to drive innovation and growth within the company.",
      "Laid the foundation for a robust technology infrastructure, ensuring scalability and reliability.",
      "Led the design and development of cutting-edge software solutions, leveraging emerging technologies to enhance product quality and user experience.",],
  },
  {
    title: "Engineering Intern",
    company_name: "EgyPro EA Limited",
    icon: egypro,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
     "Achieved realtime mitigation of electrical and mechanical faults in booster stations owned by Safaricom in Kiambu County.",
     "Ensured seamless transmission of telemetry data to the Egypro command center.",
     "Determined the most effective solutions to address the needs of various booster sites."],
  },
  
  {
    title: "Engineering Intern",
    company_name: "Gearbox EA Limited| Untapped Global | Fedha Electrics",
    icon: gearbox,
    iconBg: "#161329",
    date: "Jan 2022 - May 2022",
    points: [
      "Co-developed smart solutions addressing human challenges, including a smart water hub and speed limiter.",
      "Developed data dashboards for IoT sensors.",
      "Co-developed firmware for hardware designed by other engineers."],
  },
  {
    title: "Census Enumerator",
    company_name: "Kenya National Bureau of Statistics",
    icon: knbs,
    iconBg: "#161329",
    date: "July 2019 - Aug 2019",
    points: [
      "collected and recorded data on the population of Kenya during the 2019 National Population and Housing Census.",
      "Ensured accuracy and completeness of data collected.",
      "Provided support to other Census enumerators."],
  },
];

export const issuingorg = [
  "LinkedIn Learning",
  "Jkuat-JICA",
  "GitHub",
  "Microsoft",
  "IBM",
  "Cisco",
  "Society of Engineering Students",
  "Italian Space Agency",
  "AWS",
  "UNITAR",
  "Altium",
  "Hackerrank",
  "Kaggle",

];

export const orgImages = {
  "GitHub": githubLogo,
  "LinkedIn Learning": linkedin, 
  "Microsoft": microsoft,
  "IBM": ibm,
  "Cisco": cisco,
  "Jkuat-JICA": jkuat,
  "Italian Space Agency": cert4,
  "Society of Engineering Students": ses,
  "AWS": aws,
  "UNITAR": unitar,
  "Altium": altium,
  "Hackerrank": hackerrank,
  "Kaggle": kaggle
};

export const projects = [
  {
    name: "Feed Generator For Podcasts",
    description:
      "a feed generator for podcasts available on github marketplace",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "Github Actions", color: "pink-text-gradient" },
    ],
    image: podcast,
    source_code_link: "https://github.com/marketplace/actions/feed-generator-for-podcasts",
  },
  {
    name: "Health Information Management System",
    description:
      "Web-based health information management system that allows users to manage patient records, appointments, and medical history.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Full Stack", color: "pink-text-gradient" },
    ],
    image: hmis,
    source_code_link: "https://github.com/K-HIF/MedicApp",
  },
  {
    name: "AB Data Platform",
    description:
      "Full-stack data platform for Agricultural data, built with React and Django.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Full Stack", color: "pink-text-gradient" },
    ],
    image: jkuat,
    source_code_link: "https://github.com/franfreezy/",
  },
  {
    name: "Tafiti Cubesat",
    description:
      "TAFITI satellite project for space research",
    tags: [
      { name: "Space Tech", color: "blue-text-gradient" },
      { name: "Engineering", color: "green-text-gradient" },
      { name: "Research", color: "pink-text-gradient" },
    ],
    image: tafiti,
    source_code_link: "https://www.linkedin.com/company/tafiti-cubesat/",
  },
  {
    name: "AgriX Cubesat",
    description:
      "JKUAT Satellite project for agricultural monitoring",
    tags: [
      { name: "Space Tech", color: "blue-text-gradient" },
      { name: "IoT", color: "green-text-gradient" },
      { name: "Circuit Design", color: "pink-text-gradient" },
    ],
    image: agrisat,
    source_code_link: "https://agroxsatsite.onrender.com",
  },
  {
    name: "UN Data Analysis",
    description:
      "Data analysis on UN datasets for humanitarian insights.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "Data Science", color: "pink-text-gradient" },
    ],
    image: undata,
    source_code_link:
      "https://github.com/franfreezy/dataScience",
  },
];

export const certifications = [
  {
    name: "Getting Started with Artificial Intelligence",
    description: "Introductory Course on Artificial Intelligence.",
    image: cert1, 
    organisation: "IBM",
  },
  {
    name: "Introduction to Cybersecurity",
    description: "Base fundamentals on cybersecurity.",
    image: cert2,
    organisation: "Cisco",
  },
  
  {
    name: "Robotics Dojo",
    description: "Certification for completing the Robotics Dojo course.",
    image: dojocert,
    organisation: "JKUAT-JICA",
  },
  {
    name: "Build your first chatbot",
    description: "Course on building chatbots with IBM.",
    image: cert5, 
    organisation: "IBM",
  },
  {
    name: "Microsoft AI fluency Course",
    description: "Course on AI.",
    image: cert7, 
    organisation: "Microsoft",
  },
  {
    name: "Cloud for CTOs",
    description: "Course on cloud.",
    image: cert10, 
    organisation: "AWS",
  },
  {
    name: "Getting Started with DevOps on AWS",
    description: "Course on DevOps.",
    image: cert11, 
    organisation: "AWS",
  },
   {
    name: "Project Management Foundations",
    description: "Course on Project Management.",
    image: cert12, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    description: "Github Actions, Code Search,Github Copilot, Project Management and collaboration.",
    image: cert13, 
    organisation: "GitHub",
  },
   {
    name: "Cybersecurity Awareness:Ransomware",
    description: "Ransomware mitigation.",
    image: cert18, 
    organisation: "LinkedIn Learning",
  },
   {
    name: "Delivering an Authentic Elevator Pitch",
    description: "Elevator pitch.",
    image: cert19, 
    organisation: "LinkedIn Learning",
  },
   {
    name: "Learn Emotional Intelligence: The key determiner of success",
    description: "Emotional Intelligence.",
    image: cert20, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Learning to be Approachable",
    description: "Approachable.",
    image: cert21, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Unconcious Bias",
    description: "How to avoid bias.",
    image: cert22, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Communicating Values",
    description: "Values.",
    image: cert23, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "ETL in Python and SQL",
    description: "Data pipelines.",
    image: cert24, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Holding Yourself Accountable",
    description: "Accountability.",
    image: cert25, 
    organisation: "LinkedIn Learning",
  },
   {
    name: "Persuading Others",
    description: "Persuation.",
    image: cert26, 
    organisation: "LinkedIn Learning",
  },
   {
    name: "Complex Negotiation Tips",
    description: "Negotiation.",
    image: negotiation, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Engineering as a path to leadership",
    description: "Designed a line following robot that participated in the tech week competition.",
    image: sescert, 
    organisation: "Society of Engineering Students",
  },
  {
    name: "Cubesat Design and Development",
    description: "Involved in the design and development of a bench model cubesat for space research and a white paper in Malindi.",
    image: asi, 
    organisation: "Italian Space Agency",
  },
  {
    name: "Altium Education PCB Design Course",
    description: "PCB design.",
    image: cert38, 
    organisation: "Italian Space Agency",
  },
   {
    name: "Cities and Climate Change",
    description: "Cities in the 21st century, effects of climate change, integrating Climate change adaptation and mitigation in urban planning and major initiatives related to climate change and cities.",
    image: cert37, 
    organisation: "UNITAR",
  },
  {
    name: "Introduction to Machine Learning",
    description: "Machine Learning Foundations.",
    image: cert34, 
    organisation: "Kaggle",
  },
   {
    name: "Python Coder",
    description: "Python language.",
    image: cert36, 
    organisation: "Kaggle",
  },
  {
    name: "Python (Basic)",
    description: "Python language.",
    image: cert35, 
    organisation: "Hackerrank",
  },
  {
    name: "Climate Adaptation and the cost of Inaction",
    description: "Call to action.",
    image: cert28, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Climate Justice and Sustainable Business Practices",
    description: "What businesses must do in the context of climate change.",
    image: cert29, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Diversity, Inclusion and Belonging",
    description: "Making workspaces inclusive.",
    image: cert30, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Overcoming Procrastination",
    description: "Beating procrastination.",
    image: cert31, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Problem-Solving Techniques",
    description: "What will happen and what will not happen.",
    image: cert32, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Smart Cities: Solving Urban Challenges Using Technology",
    description: "Palo Alto and its Open data system.",
    image: cert33, 
    organisation: "LinkedIn Learning",
  },
  {
    name: "Navigating Environmental Sustainability: A guide for leaders",
    description: "Sustainability practices.",
    image: cert39, 
    organisation: "LinkedIn Learning",
  },
  
];

export const certificationsByOrg = {
  "Hackerrank": [
    "Python (Basic)"
  ],
  "Kaggle": [
    "Introduction to Machine Learning", 
    "Python Coder"
  ],
  "Altium": [
    "Altium Education PCB Design Course"
  ],
  "GitHub": [
    "GitHub Actions Fundamentals"
  ],
  "Society of Engineering Students": [
    "Engineering as a path to leadership"
    
  ],
  "Italian Space Agency": [
    "Cubesat Design and Development"
  ],

  "UNITAR" : [
    "Cities and Climate Change"
  ],
  "AWS": [
    "Cloud for CTOs"
  ],
  "LinkedIn Learning": [
    "Cybersecurity Awareness:Ransomware",
    "Project Management Foundations",
    "Delivering an Authentic Elevator Pitch",
    "Learn Emotional Intelligence: The key determiner of success",
    "Learning to be Approachable",
    "Unconcious Bias",
    "Communicating Values",
    "ETL in Python and SQL",
    "Holding Yourself Accountable",
    "Persuading Others",
    "Complex Negotiation Tips",
    "Climate Adaptation and the cost of Inaction",
    "Climate Justice and Sustainable Business Practices",
    "Diversity, Inclusion and Belonging",
    "Overcoming Procrastination",
    "Problem-Solving Techniques",
    "Smart Cities: Solving Urban Challenges Using Technology",
    "Navigating Environmental Sustainability: A guide for leaders"
  ],
  "Jkuat-JICA": [
    "Robotics Dojo",
  ],
  "Microsoft": [
    "Microsoft AI fluency Course"
  ],
  "GitHub": [
    "Career Essentials in GitHub Professional Certificate"
  ],
  "IBM": [
    "Getting Started with Artificial Intelligence",
    "Build your first chatbot"
  ],
  "Cisco": [
    "Introduction to Cybersecurity"
  ],
};



