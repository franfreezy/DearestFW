import {
  c,
  python,
  egypro,
  knbs,
  gearbox,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  netgenix,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  ksa,
  CompileVortex,
  tethics,
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
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

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
