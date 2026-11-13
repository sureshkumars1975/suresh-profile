// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Dr. Suresh Kumar S",
  firstLine: "Dr. Suresh",
  secondLine: "Kumar S",
  roles: ["Professor", "Researcher", "Tech Enthusiast"],
  tagline:
    "Professor and Researcher with expertise in Machine Learning, Deep Learning, and IoT. Dedicated to advancing technology through research and education.",
  about:
    "Professor and Researcher with over 20 years of experience in Computer Science and Engineering. Specializing in Machine Learning, Deep Learning, and IoT, dedicated to advancing technology through research and education.",
  photo: "/suresh.jpg",
  // CV download is hidden until a version without personal ID data (Aadhaar, PAN, DOB, address)
  // is available. Put the new file in public/ and set e.g. cv: "/cv-suresh-kumar.pdf".
  cv: null,
  email: "sureshkumar.s@rajalakshmi.edu.in",
  phone: "+91 9941137810",
  phoneHref: "tel:+919941137810",
  focus: ["Agentic AI", "Machine Learning", "Deep Learning", "IoT", "Cloud Computing"],
  stats: { yearsExperience: 20 },
};

export const links = {
  scholar: "https://scholar.google.com/citations?user=q3bismUAAAAJ&hl=en",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=57215495873",
  orcid: "https://orcid.org/0000-0001-5655-2718",
  linkedin: "https://www.linkedin.com/in/suresh-kumar-s-srinivasan-b5a7b435/",
  github: "https://github.com/sureshkumars1975",
  instagram: "https://www.instagram.com/suresh_.nalini",
  // ORCID lists two Web of Science ResearcherIDs for this author.
  webOfScience: [
    { id: "AAB-9451-2019", url: "https://www.webofscience.com/wos/author/record/AAB-9451-2019" },
    { id: "IXX-2855-2023", url: "https://www.webofscience.com/wos/author/record/IXX-2855-2023" },
  ],
};

export const education = [
  {
    year: "2025",
    degree: "Doctorate in Computer Science and Engineering",
    institution: "Hindustan University",
  },
  {
    year: "2008",
    degree: "ME Computer Science and Engineering",
    institution: "Rajalakshmi Engineering College",
  },
  {
    year: "1999",
    degree: "BE Computer Science and Engineering",
    institution: "Priyadarshini Engineering College",
  },
];

export const experience = [
  { period: "2021 - 2025", position: "Professor", institution: "Rajalakshmi Engineering College (Autonomous)" },
  { period: "2008 - 2021", position: "Associate Professor", institution: "Rajalakshmi Engineering College (Autonomous)" },
  { period: "2005 - 2006", position: "Senior Lecturer", institution: "Rajalakshmi Engineering College (Autonomous)" },
  { period: "2002 - 2005", position: "Lecturer", institution: "Prathyusha Engineering College (Autonomous)" },
  { period: "2001 - 2002", position: "Lecturer", institution: "Sree Sastha College of Engineering" },
];

export const skills = [
  "Agentic AI",
  "Machine Learning",
  "Deep Learning",
  "IoT",
  "Cloud Computing",
  "React",
  "HTML 5",
  "CSS 3",
  "JavaScript",
];

export const researchAreas = [
  "Agentic AI",
  "Cloud Computing Security",
  "Machine Learning",
  "Network Security",
  "Rootkit Detection",
  "Computer Vision",
  "Natural Language Processing",
  "Data Mining",
];

// Source: ORCID 0000-0001-5655-2718 (pub.orcid.org, synced 2026-11-13).
// `citedBy` comes from Google Scholar where known; omitted when unknown.
// Entries marked `source: "scholar"` are on Google Scholar but not yet on ORCID.
export const publications = [
  {
    title: "Optimizing Power Consumption in Data Centers for Sustainability",
    authors: "Suresh Kumar S, Shanmugashree M, Vijay Kumar V, Vikashini S",
    venue: "2025 Innovations in Power and Advanced Computing Technologies (i-PACT), IEEE",
    year: 2025,
    type: "Conference",
    link: "https://doi.org/10.1109/i-pact65952.2025.11307964",
  },
  {
    title: "Rootkit Detection Using Hybrid Machine Learning Models and Deep Learning Model: Implementation",
    authors: "Suresh Kumar S, S Stephen, Suhainul M Rumysia",
    venue: "2024 International Conference on Advances in Computing, Communication and Applied Informatics (ACCAI), IEEE",
    year: 2024,
    type: "Conference",
    link: "https://doi.org/10.1109/ACCAI61061.2024.10602165",
  },
  {
    title: "Kernel rootkit detection multi class on deep learning techniques",
    authors: "Suresh Kumar Srinivasan, SudalaiMuthu Thalavaipillai",
    venue: "Bulletin of Electrical Engineering and Informatics 13 (3), 2000-2008",
    year: 2024,
    citedBy: 0,
    type: "Journal",
    link: "https://doi.org/10.11591/eei.v13i3.6802",
  },
  {
    title: "Kernel rootkit prevention model using multiclass",
    authors: "Suresh Kumar Srinivasan, Sudalaimuthu Thalavaipillai",
    venue: "International Journal of Reconfigurable and Embedded Systems (IJRES) 13 (2), 395-402",
    year: 2024,
    citedBy: 0,
    type: "Journal",
    link: "https://doi.org/10.11591/ijres.v13.i2.pp395-402",
  },
  {
    title: "Analyzing Classroom Behavior to Enhance Student Engagement and Learning Outcomes",
    authors: "Suresh Kumar S, Anantha Sivaprakasam, R Edwin Joseph, Atmakuru Siva Sandeep, Buvankalyan P",
    venue: "2024 International Conference on Emerging Research in Computational Science (ICERCS), IEEE",
    year: 2024,
    citedBy: 0,
    type: "Conference",
    link: "https://doi.org/10.1109/icercs63125.2024.10895274",
  },
  {
    title: "Rootkit detection using deep learning: A comprehensive survey",
    authors: "SS Kumar, S Stephen, MS Rumysia",
    venue: "2024 10th International Conference on Communication and Signal Processing (ICCSP)",
    year: 2024,
    citedBy: 2,
    type: "Conference",
    link: "https://doi.org/10.1109/iccsp60870.2024.10543963",
    source: "scholar",
  },
  {
    title: "Enhancing deep learning models for sentiment analysis integrating texts and emojis: A comprehensive survey",
    authors: "SS Kumar, D Gayathri, R Shugavaneshwar",
    venue: "2024 10th International Conference on Communication and Signal Processing (ICCSP)",
    year: 2024,
    citedBy: 2,
    type: "Conference",
    link: "https://doi.org/10.1109/iccsp60870.2024.10544333",
    source: "scholar",
  },
  {
    title: "Volatile Kernel Rootkit hidden process detection in cloud computing",
    authors: "Suresh Kumar S, Sudalai Muthu T",
    venue: "Journal of Cloud Computing (Springer)",
    year: 2023,
    citedBy: 1,
    type: "Journal",
    link: "https://doi.org/10.1186/s13677-023-00549-w",
  },
  {
    title: "Video Analytics using Deep Learning in Cloud Services to Detect Corrosion - A Comprehensive Survey",
    authors: "S Suresh Kumar, K Gokul, I Hemanand, M.S Eaknath, V.M Jayabharanivelu",
    venue: "2023 3rd International Conference on Innovative Mechanisms for Industry Applications (ICIMIA), IEEE",
    year: 2023,
    citedBy: 0,
    type: "Conference",
    link: "https://doi.org/10.1109/icimia60377.2023.10426026",
  },
  {
    title: "Advance Kernel Rootkit Detection: Survey",
    authors: "S Suresh Kumar, T SudalaiMuthu",
    venue: "2023 7th International Conference on Intelligent Computing and Control Systems (ICICCS), IEEE",
    year: 2023,
    citedBy: 3,
    type: "Conference",
    link: "https://doi.org/10.1109/iciccs56967.2023.10142360",
  },
  {
    title: "Exploring Techniques for Web Phishing Detection: A Comprehensive Survey",
    authors: "S Suresh Kumar, B Swarnagowri, R Susmitha, R Sujitha",
    venue: "2023 7th International Conference on Intelligent Computing and Control Systems (ICICCS), IEEE",
    year: 2023,
    citedBy: 1,
    type: "Conference",
    link: "https://doi.org/10.1109/iciccs56967.2023.10142655",
  },
  {
    title: "Prevention of Kernel Rootkit in Cloud Computing",
    authors: "S Suresh Kumar, A Ponni Valavan, V Prathiksha",
    venue: "2023 7th International Conference on Intelligent Computing and Control Systems (ICICCS), IEEE",
    year: 2023,
    citedBy: 1,
    type: "Conference",
    link: "https://doi.org/10.1109/iciccs56967.2023.10142886",
  },
  {
    title: "Visual Impaired Assist Mobile App using CNN",
    authors: "S Suresh Kumar, B Prasana, S Pratheep Kumar",
    venue: "2023 International Conference on Smart Systems and Inventive Technology (ICSSIT), IEEE",
    year: 2023,
    citedBy: 1,
    type: "Conference",
    link: "https://doi.org/10.1109/ICSSIT55814.2023.10061033",
  },
  {
    title: "Kernel Rootkit Secret Detection in Cloud Computing",
    authors: "S Suresh Kumar, T SudalaiMuthu",
    venue: "2022 International Conference on Computational Science and Technology (ICCST), IEEE",
    year: 2022,
    citedBy: 1,
    type: "Conference",
    link: "https://doi.org/10.1109/ICCST55948.2022.10040354",
  },
  {
    title: "Nonvolatile kernel rootkit detection using cross-view clean boot in cloud computing",
    authors: "R Geetha Ramani, S Suresh Kumar",
    venue: "Concurrency and Computation: Practice and Experience 33 (3), e5239 (Wiley)",
    year: 2021,
    citedBy: 9,
    type: "Journal",
    link: "https://doi.org/10.1002/cpe.5239",
  },
  {
    title: "Assessing Car Damage using Mask R-CNN",
    authors: "P Sarath, M Soorya, A Shaik Abdul Rahman, S Suresh Kumar, K Devaki",
    venue: "International Journal of Engineering and Advanced Technology (IJEAT) 9 (3), 2287-2290",
    year: 2020,
    citedBy: 0,
    type: "Journal",
    link: "https://doi.org/10.35940/ijeat.C5302.029320",
  },
  {
    title: "Automated Attendance Management using OneShot Learning",
    authors: "K Arvind Vignesh, S Suresh Kumar",
    venue: "International Journal of Computer Science and Mobile Computing (IJCSMC) 9 (3), 244-247",
    year: 2020,
    type: "Journal",
    link: "https://ijcsmc.com/docs/papers/March2020/V9I3202045.pdf",
  },
  {
    title: "Non-Volatile Kernel Root kit Detection and Prevention in Cloud Computing",
    authors: "R Geetha Ramani, SS Kumar",
    venue: "International Journal of Engineering and Advanced Technology (IJEAT) 8 (5S3), 139-144",
    year: 2019,
    citedBy: 1,
    type: "Journal",
    link: "https://doi.org/10.35940/ijeat.E1034.0785S319",
  },
  {
    title: "Knowledge Representation and Answer Evaluation System using Language Processing Algorithm",
    authors: "V Sridevi, S Suresh Kumar, B Supraja, S Udhayakumar",
    venue: "2019 International Conference on Vision Towards Emerging Trends in Communication and Networking (ViTECoN), IEEE",
    year: 2019,
    citedBy: 3,
    type: "Conference",
    link: "https://doi.org/10.1109/ViTECoN.2019.8899525",
  },
  {
    title: "NoSQL based Cassandra Cluster with Combination of Tesseract for Optical Character Recognition",
    authors: "M Ramya, S Suresh Kumar",
    venue: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET) 5 (10), 2540-2543",
    year: 2016,
    type: "Journal",
    link: "http://ijarcet.org/?page_id=4750",
  },
  {
    title: "Detecting the Rootkit through Dynamic Analysis",
    authors: "D Suganya Gandhi, S Suresh Kumar",
    venue: "International Journal of Science and Research (IJSR) 4 (3), 1864-1868",
    year: 2015,
    type: "Journal",
    link: "https://www.ijsr.net/get_abstract.php?paper_id=19031505",
  },
  {
    title: "Rootkit (Malicious Code) Prediction through Data Mining Methods and Techniques",
    authors: "R Geetha Ramani, S Suresh Kumar, Shomona Gracia Jacob",
    venue: "2013 IEEE International Conference on Computational Intelligence and Computing Research (ICCIC)",
    year: 2013,
    citedBy: 7,
    type: "Conference",
    link: "https://doi.org/10.1109/ICCIC.2013.6724243",
  },
];

// Patent applications (Indian Patent Office). Status values: "Filed" | "Published" | "Granted".
// Verified against the Official Journal of the Patent Office; `pdf` is the journal page for each application.
export const patents = [
  {
    title: "Agentic AI System and Method for Sustainable Agriculture",
    applicationNo: "202641096262 A",
    status: "Published",
    office: "Indian Patent Office",
    journal: "Patent Office Journal No. 37/2026, p. 114030",
    filed: "10 August 2026",
    published: "11 September 2026",
    applicant: "Rajalakshmi Engineering College (Autonomous)",
    coInventors: "Dr. Sudalaimuthu T",
    pdf: "/patents/202641096262.pdf",
  },
  {
    title:
      "An Artificial-Intelligence System and Method that Keeps an AI Assistant Inside the Permission its User Actually Gave and that Checks Every Tool",
    applicationNo: "202641104360 A",
    status: "Published",
    office: "Indian Patent Office",
    journal: "Patent Office Journal No. 37/2026, p. 114372",
    filed: "31 August 2026",
    published: "11 September 2026",
    applicant: "Rajalakshmi Engineering College",
    coInventors: "Dr. Sudalaimuthu T",
    pdf: "/patents/202641104360.pdf",
  },
  {
    title: "AI Tutoring System and Method to Prevent Learner Over-Reliance",
    applicationNo: "202641113938 A",
    status: "Published",
    office: "Indian Patent Office",
    journal: "Patent Office Journal No. 40/2026, p. 125482",
    filed: "23 September 2026",
    published: "2 October 2026",
    applicant: "Rajalakshmi Engineering College",
    coInventors: "Dr. Sudalaimuthu T",
    pdf: "/patents/202641113938.pdf",
  },
];

export const academicProfiles = [
  {
    title: "Google Scholar",
    description: "Citation metrics, h-index and the full list of indexed publications.",
    link: links.scholar,
  },
  {
    title: "Scopus",
    description:
      "Elsevier's abstract and citation database, used for literature review and research impact assessment.",
    link: links.scopus,
  },
  {
    title: "Web of Science",
    description:
      "Clarivate's citation index of peer-reviewed research, with a ResearcherID author record and Web of Science Core Collection metrics.",
    links: links.webOfScience.map((w) => ({ label: `ResearcherID ${w.id}`, href: w.url })),
  },
  {
    title: "ORCID",
    description:
      "A persistent digital identifier that distinguishes researchers and ensures accurate attribution of their work.",
    link: links.orcid,
  },
];

export const events = [
  {
    title: "Faculty Development Program — Microsoft Azure AI Engineer",
    date: "July 5-9, 2022",
    description:
      "A 5-day online FDP on Emerging Cloud Technology (Microsoft Azure AI Engineer), organized by Rajalakshmi Engineering College and associated organizations.",
  },
  {
    title: "AWS Workshop",
    date: "2022",
    description:
      "Workshop to enhance skills on AWS services along with current research studies, challenges and practical experience — from an introduction to AWS and cloud computing through its domains, history and advantages.",
  },
];

export const certificates = [
  {
    title: "Reliable Google Cloud Infrastructure: Design and Process",
    date: "July 26, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c1.jpeg",
    verify: "https://coursera.org/verify/LUHGP2sCS9TN",
  },
  {
    title: "Creating New BigQuery Datasets and Visualizing Insights",
    date: "August 09, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c2.jpeg",
    verify: "https://coursera.org/verify/LK3BUNPDRLL9",
  },
  {
    title: "Oracle Autonomous Database Cloud 2019 Certified Specialist",
    date: "April 18, 2020",
    issuer: "Oracle University",
    image: "/certificates/c3.jpeg",
    certId: "274Z20634OADB19-F",
  },
  {
    title: "Exploring and Preparing your Data with BigQuery",
    date: "July 31, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c4.jpeg",
    verify: "https://coursera.org/verify/VG3XS98CGU7R",
  },
  {
    title: "Build Your Portfolio Website with HTML and CSS",
    date: "June 07, 2020",
    issuer: "Coursera Project Network",
    image: "/certificates/c5.jpeg",
    verify: "https://coursera.org/verify/2ZE3MNQSKQRW",
  },
  {
    title: "Essential Google Cloud Infrastructure: Core Services",
    date: "July 23, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c6.jpeg",
    verify: "https://coursera.org/verify/QCDPLMSFFMKK",
  },
  {
    title: "Essential Google Cloud Infrastructure: Foundation",
    date: "July 22, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c7.jpeg",
    verify: "https://coursera.org/verify/SRWGNZ8QEXQ9",
  },
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    date: "July 08, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c8.jpeg",
    verify: "https://coursera.org/verify/8D9GM9CSNQZQ",
  },
  {
    title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
    date: "July 25, 2020",
    issuer: "Google Cloud & Coursera",
    image: "/certificates/c9.jpeg",
    verify: "https://coursera.org/verify/4BRPA4AMZWES",
  },
  {
    title: "Hands-on Workshop on Recent Trends",
    date: "July 03, 2025",
    issuer: "Indian Institute of Information Technology Kottayam",
    image: "/certificates/c10.jpg",
  },
];

export const gallery = [
  { src: "/gallery/1.jpg", title: "Award Ceremony", description: "Receiving recognition for academic excellence" },
  { src: "/gallery/2.jpg", title: "Smart City Workshop", description: "Presenting on IoT applications in smart cities" },
  { src: "/gallery/3.jpg", title: "Student Interaction", description: "Engaging with students during a technical session" },
  { src: "/gallery/5.jpg", title: "Award Recognition", description: "Receiving departmental excellence award" },
  { src: "/gallery/photo-2.jpg", title: "Academic Achievement", description: "Recognition ceremony at Rajalakshmi Engineering College" },
  { src: "/gallery/broucher.jpg", title: "FDP Program", description: "Faculty Development Program on Cloud Technology" },
  { src: "/gallery/7.jpg", title: "FDP Program", description: "Faculty Development Program on Recent Trends in Next Generation Technologies" },
  { src: "/gallery/8.jpg", title: "ResearchGate Achievement", description: "Appreciation from ResearchGate for publications" },
];

/** "/gallery/2.jpg" -> "/gallery/thumbs/2.jpg" (800px-wide card image). */
export const thumbOf = (src) => src.replace(/\/([^/]+)\.(jpe?g|png)$/i, "/thumbs/$1.jpg");

export const certificateSlides = certificates.map((c) => ({ src: c.image, title: c.title, description: c.issuer }));
