/**
 * Portfolio content. Update this file before sharing the site.
 * Leave a string empty if you do not have that link yet.
 * Keep project descriptions accurate to what you actually built.
 */

export const profile = {
  name: "Dhananjay S.",
  greeting: "Hello, I'm",
  headline: "Building solutions through code, cloud and technology.",
  role: "Aspiring Software Engineer | Full-Stack Development | Cloud & Cybersecurity | AI/ML | Python | Java",
  summary:
    "Computer Science undergraduate at BNM Institute of Technology. I build and test applications, and my internships cover vulnerability assessment, container security, and a live machine-learning dashboard.",
  availability:
    "Open to software engineering, testing, cloud, cybersecurity, and AI/ML opportunities.",
  photo: "/profile.jpg",
  resumePdf: "/Dhananjay_S_Resume.pdf",
  pills: [
    "Software Development",
    "Cloud Computing",
    "Cybersecurity",
    "AI & Machine Learning",
  ],
}

export const stats = [
  { value: "9.27", label: "CGPA" },
  { value: "2027", label: "Graduation" },
  { value: "CSE", label: "Degree" },
]

export const contact = {
  email: "dhananjays1225@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhananjays1225/",
  github: "https://github.com/DhananjayS4",
  location: "Bengaluru, Karnataka, India",
}

export const aboutParagraphs = [
  "I'm Dhananjay, a Computer Science and Engineering student at BNM Institute of Technology, Bengaluru. I am pursuing my bachelor's degree under Visvesvaraya Technological University, from August 2023 to 2027.",
  "I have a strong foundation in programming, data structures, and algorithms, and hands-on experience from two cybersecurity internships. At Ganaka Praudyogikee Tech Solutions I tested software, assessed vulnerabilities, and built a Python and Streamlit monitoring application with machine-learning inference. At Elevates Lab I automated assessments with Trivy and Burp Suite and hardened Docker images.",
  "My project work includes a full-stack Cloud-Powered Personal Workspace and an ongoing Autonomous Cloud-Native Security Fabric for Kubernetes services. I want to grow as a software engineer who can build reliable applications and also work with cloud, security, and machine learning.",
]

export const focuses = [
  {
    id: "software",
    title: "Software Development",
    text: "Full-stack applications with React, Node.js, Express, and MongoDB, including authentication and APIs.",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    text: "A cloud-based personal workspace, plus AWS and Kubernetes on an ongoing security framework.",
  },
  {
    id: "security",
    title: "Cybersecurity",
    text: "Vulnerability assessment with Burp Suite, Nmap, Wireshark, and Trivy, and Docker image hardening.",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    text: "A Streamlit dashboard for live sensor data, heart-rate features, and machine-learning inference.",
  },
]

export const levels = ["used", "exposure", "learning"]

export const skillGroups = [
  {
    title: "Programming languages",
    summary: "Languages I use for coursework, projects, and experiments.",
    items: [
      { name: "Java", level: "used" },
      { name: "Python", level: "used" },
      { name: "C", level: "used" },
      { name: "JavaScript", level: "used" },
    ],
  },
  {
    title: "Frontend development",
    summary: "Interfaces I have built for the browser.",
    items: [
      { name: "HTML", level: "used" },
      { name: "CSS", level: "used" },
      { name: "JavaScript", level: "used" },
      { name: "React.js", level: "used" },
    ],
  },
  {
    title: "Backend development",
    summary: "Server-side work and the APIs that sit behind an interface.",
    items: [
      { name: "Node.js", level: "used" },
      { name: "Express.js", level: "used" },
      { name: "REST APIs", level: "used" },
    ],
  },
  {
    title: "Databases",
    summary: "Where application data is stored and queried.",
    items: [
      { name: "SQL", level: "used" },
      { name: "MongoDB", level: "used" },
    ],
  },
  {
    title: "Cloud and DevOps",
    summary: "Tools for shipping, running, and securing software.",
    items: [
      { name: "AWS", level: "used" },
      { name: "Docker", level: "used" },
      { name: "Kubernetes", level: "used" },
      { name: "Git", level: "used" },
      { name: "GitHub", level: "used" },
      { name: "Linux", level: "used" },
      { name: "Selenium", level: "used" },
      { name: "Blynk", level: "used" },
    ],
  },
  {
    title: "Cybersecurity",
    summary: "Assessment, traffic analysis, and container security from both internships.",
    items: [
      { name: "Kali Linux", level: "used" },
      { name: "Wireshark", level: "used" },
      { name: "Burp Suite", level: "used" },
      { name: "Nmap", level: "used" },
      { name: "Trivy", level: "used" },
      { name: "Metasploit", level: "used" },
    ],
  },
  {
    title: "AI, machine learning and data science",
    summary:
      "Used on a live monitoring application: sensor data in, features extracted, and a model running behind a Streamlit interface.",
    featured: true,
    items: [
      { name: "Python", level: "used" },
      { name: "Streamlit", level: "used" },
      { name: "Machine learning", level: "used" },
      { name: "Signal processing", level: "used" },
    ],
  },
]

export const projectFilters = ["All", "Software", "Cloud", "Security", "AI/ML"]

export const projects = [
  {
    title: "Cloud-Powered Personal Workspace",
    eyebrow: "Cloud computing · Web development",
    areas: ["Software", "Cloud"],
    art: "workspace",
    image: "",
    summary:
      "A full-stack cloud workspace for notes and personal work, with authentication, secure storage, and APIs between the interface and the database.",
    problem:
      "Personal notes and day-to-day work need one signed-in place, not a stack of disconnected files.",
    features: [
      "Full-stack application with React.js, Node.js, Express.js, and MongoDB",
      "User authentication and secure data storage",
      "Dynamic note management with real-time interactions",
      "Backend services and APIs between the interface and the database",
    ],
    learned:
      "How authentication, an API, and a database have to move together for a workspace to feel reliable.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/DhananjayS4/CloudWork-Space",
    demo: "",
  },
  {
    title: "Autonomous Cloud-Native Security Fabric",
    eyebrow: "Cybersecurity · Cloud security",
    areas: ["Security", "Cloud"],
    art: "security",
    image: "",
    status: "Ongoing",
    summary:
      "An AI-driven cloud-native security framework for Kubernetes-based microservices, using containers, cloud services, and security tooling to automate operations.",
    problem:
      "Microservice environments need security checks that run with the platform, not as a separate manual pass.",
    features: [
      "A cloud-native design aimed at Kubernetes-based microservices",
      "Docker and Kubernetes as the runtime for the services being protected",
      "AWS as the cloud foundation",
      "Security tooling aimed at automating assessment and operations",
    ],
    learned:
      "How container, cloud, and security decisions belong in one design instead of three separate checklists.",
    stack: ["Docker", "Kubernetes", "AWS", "AI"],
    github: "",
    demo: "",
  },
  {
    title: "Real-Time Physiological Monitoring",
    eyebrow: "AI / machine learning · Streamlit",
    areas: ["AI/ML", "Software"],
    art: "ai",
    image: "",
    summary:
      "A Python and Streamlit application from the Ganaka Praudyogikee internship. It takes live physiological sensor data, extracts heart-rate features, and runs machine-learning inference in an interactive dashboard.",
    problem:
      "Sensor readings are hard to use until they are processed, turned into features, and shown while the data is still arriving.",
    features: [
      "Real-time data acquisition from multiple physiological sensors",
      "Signal processing and HR/HRV feature extraction",
      "Machine-learning inference on the live stream",
      "An interactive Streamlit interface for visualization and analysis",
    ],
    learned:
      "How a model is only useful in this setting when the signal path, the features, and the interface stay in sync.",
    stack: ["Python", "Streamlit", "Machine learning", "Signal processing"],
    github: "",
    demo: "",
  },
]

export const experience = [
  {
    role: "Cybersecurity Intern",
    organization: "Ganaka Praudyogikee Tech Solutions",
    period: "Aug 2025 – Jan 2026",
    location: "Bengaluru, India",
    bullets: [
      "Developed and tested software solutions while performing security assessments and vulnerability remediation across enterprise systems.",
      "Built a real-time monitoring application using Python and Streamlit by integrating multiple physiological sensors for real-time data acquisition.",
      "Implemented signal processing and HR/HRV feature extraction for real-time physiological data analysis.",
      "Integrated machine learning inference with an interactive Streamlit interface for live data visualization and analysis.",
      "Conducted network traffic analysis using Wireshark and vulnerability scanning with Nmap, improving incident detection time by 20%.",
    ],
    technologies: ["Python", "Streamlit", "Wireshark", "Nmap", "Machine learning"],
  },
  {
    role: "Cybersecurity Intern",
    organization: "Elevates Lab",
    period: "June 2025 – July 2025",
    location: "Bengaluru, India",
    bullets: [
      "Automated vulnerability assessments using Trivy and Burp Suite, reducing issue detection time by 50%.",
      "Hardened Docker images by resolving 25+ critical vulnerabilities and improving container security compliance.",
    ],
    technologies: ["Trivy", "Burp Suite", "Docker"],
  },
]

export const education = [
  {
    title: "Bachelor of Engineering — Computer Science and Engineering",
    place: "BNM Institute of Technology, Bengaluru",
    detail: "Autonomous institution under Visvesvaraya Technological University (VTU)",
    meta: "Aug 2023 – 2027",
    result: "CGPA 9.27",
  },
  {
    title: "Pre-University / 12th Standard",
    place: "Karnataka School Examination and Assessment Board",
    detail: "",
    meta: "2023",
    result: "87.33%",
  },
  {
    title: "SSLC / 10th Standard",
    place: "Karnataka School Examination and Assessment Board",
    detail: "",
    meta: "2021",
    result: "88.64%",
  },
]

export const certifications = [
  {
    name: "Google Foundations of Cybersecurity",
    issuer: "Google",
    date: "",
    url: "",
  },
  {
    name: "Red Hat System Administration",
    issuer: "Red Hat",
    date: "",
    url: "",
  },
  {
    name: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "",
    url: "",
  },
]

const sectionCopy = [
  {
    id: "about",
    eyebrow: "About",
    title: "About me",
    intro:
      "Computer science student in Bengaluru, with internship work in security assessment, cloud-native design, and machine learning.",
  },
  {
    id: "skills",
    eyebrow: "Skills",
    title: "Technical skills",
    intro:
      "Grouped by the kind of work. Each tag says whether I have used the tool in a project, gained practical exposure, or I am actively learning it.",
  },
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Projects",
    intro:
      "Selected work across software development, cloud, cybersecurity, and AI/ML.",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Experience",
    intro:
      "Two cybersecurity internships in Bengaluru: application testing and a live monitoring dashboard, then container hardening and automated assessment.",
  },
  {
    id: "education",
    eyebrow: "Education",
    title: "Education",
    intro: "Bachelor of Engineering in Computer Science, August 2023 to 2027, with Class 12 and Class 10 results.",
  },
  {
    id: "certifications",
    eyebrow: "Certifications",
    title: "Certifications and achievements",
    intro: "Cybersecurity, Linux administration, and MongoDB.",
    optional: true,
  },
  {
    id: "resume",
    eyebrow: "Resume",
    title: "Resume",
    intro: "The current one-page resume, with both internships, projects, certifications, and CGPA.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's connect",
    intro: "",
  },
]

export const sections = Object.fromEntries(
  sectionCopy
    .filter((section) => section.id !== "certifications" || certifications.length > 0)
    .map((section, index) => [
      section.id,
      { ...section, index: String(index + 2).padStart(2, "0") },
    ]),
)

export const navLinks = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["education", "Education"],
  ...(certifications.length ? [["certifications", "Certificates"]] : []),
  ["contact", "Contact"],
].map(([id, label]) => ({ id, href: `#${id}`, label }))

export function publishReminders() {
  const items = []
  if (!contact.email) items.push("your email")
  if (!contact.linkedin) items.push("your LinkedIn URL")
  if (!contact.github) items.push("your GitHub URL")
  if (!profile.photo) items.push("a profile photo")
  if (experience.some((role) => !role.organization || !role.period)) items.push("the internship organization and dates")
  if (projects.some((project) => !project.github)) items.push("project repository links")
  return items
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Aspiring Software Engineer",
  email: contact.email,
  description: profile.summary,
  sameAs: [contact.linkedin, contact.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "BNM Institute of Technology",
  },
  knowsAbout: [
    "Software Development",
    "Full-Stack Development",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Python",
    "Java",
  ],
}
