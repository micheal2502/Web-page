const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Project",
    link: "/project",
  },
  {
    name: "Skills",
    link: "/skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// Achievements Section
export const achievementsSection = [
  { content: "Victoria University of Wellington" },
  { content: "Ministry of Social Development" },
  { content: "Agua International" },
];

const showcase = [
  { text: "Front-End Application", imgPath: "/images/ideas.svg" },
  { text: "Front-End Application", imgPath: "/images/concepts.svg" },
  { text: "Front-End Application", imgPath: "/images/ideas.svg" },
  { text: "Front-End Application", imgPath: "/images/concepts.svg" },
];

const fullstack = [
  { text: "Application", imgPath: "/images/code.svg" },
  { text: "Application", imgPath: "/images/designs.svg" },
  { text: "Application", imgPath: "/images/code.svg" },
  { text: "Application", imgPath: "/images/designs.svg" },
];


const AI = [
  { text: "AI Application", imgPath: "/images/code.svg" },
  { text: "AI Application", imgPath: "/images/designs.svg" },
  { text: "AI Application", imgPath: "/images/code.svg" },
  { text: "AI Application", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Programming Language" },
  { value: 3, suffix: "+", label: "Internships & Industry Roles" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Front-End Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Full-Stack Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Michael helped us create an exceptional educational web experience beyond our expectations.",
    title: "Front-end Developer / UI Developer - Agua International Education",
    date: "Nov 2024 - Current",
    responsibilities: [
      "Led a team of developers to build and maintain a web application using React, Node.js, and MongoDB, enabling students to book mentors, explore career paths, track progress, and allow families to monitor development.",
      "Assessed front-end technologies, guided UI/UX design decisions, and led the migration of a legacy jQuery/Bootstrap project to React with Redux, Tailwind CSS and JavaScript (ES6+).",
      "Defined front-end architecture, enforced coding standards, and implemented CI/CD pipelines for all front-end services, including automated linting, unit test coverage monitoring, and custom deployment scripts.",
      "Integrated front-end with cloud-hosted databases via RESTful APIs, real-time data synchronization with <300ms latency for 95% of transactions.",
      "Refactored legacy codebase (TypeScript) and wrote unit and integration tests, achieving >96% coverage, with detailed technical documentation to facilitate developers.",
      "Collaborated with the product owner and design team to define the product roadmap, manage feature prioritization, and coordinate release cycles.",
      "Integrated third-party APIs, including OAuth 2.0 for secure authentication and Twilio for SMS notifications.",
    ],
  },
  {
    review: "Michael’s contributions to our machine learning research applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    title: "Machine Learning Reseacher - Victoria University of Wellington",
    date: "November 2023 - March 2024",
    responsibilities: [
      "Awarded a competitive AI and Machine Learning research collaboration scholarship with Health NZ, selected from over 50 applicants based on academic excellence.",
      "Description: Leveraged machine learning algorithms to analyze patterns in medical data, improving early detection accuracy and enabling proactive healthcare interventions.",
      "Built and evaluated an ETL data preprocessing pipeline and models in Python for 25,000 cancer patient records to predict 1-year survival outcomes, achieving 96% early-predict accuracy on a hold-out set.",
      "Performed feature engineering, statistical analysis, and exploratory data analysis to identify key biomarkers and risk factors associated with early-stage cancer.",
      "Designed, implemented, and optimized multiple machine learning models (Neural Networks), using Scikit-learn and TensorFlow/Keras to maximize predictive accuracy.",
      "Applied cross-validation, hyperparameter tuning, and model evaluation metrics to ensure robust, generalizable predictions suitable for clinical use.",
      "Developed an RAG framework integrating OpenAI GPT-4 with a custom SQLite-backed vector store to summarize clinician notes and generate patient-specific prognosis explanations.",
      "Automated the ML workflow with reproducible pipelines, including data ingestion, preprocessing, model taining, and evaluation, ensuring scalability and maintainability for future datasets."
    ],
  },
  {
    review: "Michael’s work brought a high level of quality and efficiency. He delivered solutions that enhanced our user experience & meet our product goals.",
    title: "Client application team - Ministry of Social Development",
    date: "November 2022 - February 2023",
    responsibilities: [
      "Supported the elicitation and documentation of business and technical requirements for system projects.",
      "Assisted in analyzing and interpreting data sets to generate insights for decision-making, preparing reports and visualizations using tools like Excel and Power BI.",
      "Optimized SQL queries to extract, filter, and analyze data from internal system databases, supporting data validation, reporting, and decision-making processes.",
      "Participated in Agile software development workflows by attending daily stand-ups, sprint planning meetings, and backlog grooming sessions to stay aligned with team goals and priorities.",
      "Provided post-implementation support by troubleshooting system issues, replicating bugs, and documenting findings for the development team to address in subsequent updates.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
]

const socialImgs = [
  {
    name: "git",
    imgPath: "/images/git.png",
    link: 'https://github.com/micheal2502'
  },
];

export {
  words,
  AI,
  showcase,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  fullstack,
};
