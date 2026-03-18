import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  basics: {
    name: "Tarun Sai Madimi",
    title: "Full Stack Developer | Java | Spring Boot | React | AWS | Microservices",
    summary: "Full Stack Developer with 3+ years of experience delivering cloud-native web applications across security, finance, and workflow systems. Combines Java/Spring ecosystems with React and modern DevOps practices to build scalable platforms. Improved feature adoption by 18% through usability-driven UI enhancements and reduced production incidents by 31% by strengthening automated tests and monitoring. Experienced in REST API design, distributed messaging, containerized deployments, and secure authentication using OAuth2/JWT. Background spans AWS, Kubernetes, PostgreSQL/MySQL, and performance optimization.",
    location: "OH, USA",
    email: "tarunsai.madimi@gmail.com",
    links: [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/tarun-sai-madimi-378435369/"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Tarunsai0852"
      }
    ]
  },
  experience: [
    {
      company: "ReliaQuest",
      role: "Full Stack Developer",
      dates: "October 2024 - Present",
      location: "OH, USA",
      bullets: [
        "Architected core backend services using Java and Spring Cloud, with Gradle streamlining build automation and PostgreSQL supporting relational data operations, reducing query latency by 26% and improving overall release efficiency.",
        "Developed interactive frontend components with React.js, leveraging Redux to stabilize complex state transitions and Bootstrap to ensure responsive layouts, increasing user engagement by 21% across key application workflows.",
        "Enhanced scalable event-driven workflows through microservices architecture, integrating AWS SQS, Apache Kafka, and Redis for asynchronous messaging, real-time streaming, and low-latency caching, improving system throughput by 33%.",
        "Directed and documented REST APIs with Swagger, while API Gateway centralized routing, throttling, and monitoring capabilities, reducing API onboarding time by 38% and improving cross-team integration efficiency.",
        "Strengthened secure authentication and authorization using OAuth2/JWT, with Mockito enabling isolated unit validation and Jira supporting defect tracking and sprint visibility, decreasing security-related defects and strengthening platform reliability.",
        "Orchestrated testing and deployments via GitHub Actions, orchestrating Kubernetes container workflows and integrating Prometheus monitoring with Playwright UI validation, reducing release cycles by 15% and strengthening deployment stability."
      ],
      metrics: [
        { label: "Query Latency", value: "-26%" },
        { label: "User Engagement", value: "+21%" },
        { label: "System Throughput", value: "+33%" },
        { label: "API Onboarding", value: "-38%" },
        { label: "Release Cycles", value: "-15%" }
      ]
    },
    {
      company: "DXC Technology",
      role: "Software Developer",
      dates: "November 2021 - August 2023",
      location: "India",
      bullets: [
        "Developed modular Java backend components, streamlined Maven builds, optimized MySQL queries, and enforced SonarQube standards, reducing query execution time by 22% through normalization and indexing.",
        "Created responsive UI modules with React, HTML5, and CSS3, enhancing cross-browser compatibility and accessibility while reducing page load latency by optimizing rendering and minimizing unnecessary DOM updates.",
        "Implemented single-page application features leveraging Angular, TypeScript, and RxJS, enabling reactive data flows and efficient state management, increasing user interaction responsiveness by 27% across complex UI workflows.",
        "Collaborated and validated RESTful APIs using Spring Boot, Hibernate, and Postman, streamlining data exchange and ORM mapping validation, accelerating defect identification through early-stage contract and integration testing.",
        "Established secure authentication and role-based access controls using Spring Security and Data JPA, supported by JUnit testing and GitHub version control, reducing regression issues and improving application resilience by 20%.",
        "Deployed containerized microservices using Docker, automated CI/CD pipelines with Jenkins, and managed cloud infrastructure on AWS (EC2, S3, Lambda) using Terraform, shortening release cycles by 38% and improving deployment reliability.",
        "Improved data persistence and UI consistency utilizing NoSQL, Tailwind CSS, and Agile methodologies, improving sprint predictability while enhancing code maintainability and cross-functional development efficiency."
      ],
      metrics: [
        { label: "Query Execution", value: "-22%" },
        { label: "Interaction Resp.", "value": "+27%" },
        { label: "App Resilience", "value": "+20%" },
        { label: "Release Cycles", "value": "-38%" }
      ]
    }
  ],
  achievements: [
    { title: "Feature Adoption", metric: "18% Increase", context: "Improved through usability-driven UI enhancements." },
    { title: "Production Incidents", metric: "31% Reduction", context: "Achieved by strengthening automated tests and monitoring." },
    { title: "Operational Efficiency", metric: "35% Improvement", context: "Insurance Claims Management Portal optimization." },
    { title: "Expense Tracking", metric: "30% Accuracy Boost", context: "Smart Finance Management System implementation." }
  ],
  projects: [
    {
      title: "Insurance Claims Management Portal",
      category: "Enterprise Workflow Platform",
      summary: "Built a secure claims workflow experience for intake, validation, and case tracking with API-driven services and responsive interfaces.",
      impact: "35% improvement in operational efficiency",
      stack: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Business workflow and analytics desk setup"
    },
    {
      title: "Smart Finance Management System",
      category: "Finance Tracking Application",
      summary: "Created an expense management experience with transaction visibility, cleaner reporting flows, and backend logic focused on reliable financial tracking.",
      impact: "30% boost in expense tracking accuracy",
      stack: ["Java", "Spring Boot", "React.js", "MySQL", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Personal finance and budgeting workspace",
      liveUrl: "https://finance-management-mauve.vercel.app/"
    },
    {
      title: "The Aroma Web App",
      category: "Responsive Product Experience",
      summary: "Designed a polished web experience centered on product discovery, mobile responsiveness, and a smoother customer browsing journey.",
      impact: "Responsive, conversion-focused frontend delivery",
      stack: ["TypeScript", "React.js", "Tailwind CSS", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Coffee-focused brand presentation and product mood image",
      liveUrl: "https://the-aroma.vercel.app/"
    },
    {
      title: "Weather App",
      category: "Forecast Dashboard",
      summary: "Built a weather experience for quick city search, live condition snapshots, and a clean forecast-first interface that stays easy to read.",
      impact: "Fast forecast lookup with readable weather insights",
      stack: ["React.js", "TypeScript", "REST APIs", "CSS3"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Dramatic sky and weather conditions over a city",
      liveUrl: "https://weather-app-rho-opal-97.vercel.app/"
    }
  ],
  skills: {
    "Programming": ["Java", "TypeScript", "JavaScript", "SQL"],
    "Frontend": ["React.js", "Angular", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Redux", "Chart.js"],
    "Backend": ["Spring Boot", "Spring Cloud", "Spring Framework (MVC, Security, Data JPA)", "Hibernate", "Node.js"],
    "APIs & Testing": ["REST APIs", "Swagger", "Postman", "JUnit", "Mockito", "Playwright"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "NoSQL"],
    "Cloud & Infra": ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform"],
    "DevOps": ["Gradle", "Maven", "Jenkins", "GitHub Actions"],
    "Security & Monitoring": ["AWS SQS", "Apache Kafka", "Prometheus", "OAuth2", "JWT Authentication", "Jira", "GitHub", "Agile", "Microservices Architecture", "Event-Driven Architecture"]
  },
  education: [
    {
      institution: "Indiana Institute of Technology, USA",
      degree: "Master of Science in Information Systems",
      dates: "January 2024 - May 2025"
    },
    {
      institution: "Vignan Institute of Technology, India",
      degree: "Bachelor of Engineering in Electrical Engineering",
      dates: "July 2019 - May 2022"
    }
  ],
  certifications: [
    "AWS Cloud Technical Essentials",
    "SAP Certified Associate - Back-End Developer - ABAP Cloud",
    "Hewlett Packard Enterprise - Software Engineering Job Simulation",
    "Deloitte Australia - Data Analytics Job Simulation"
  ]
};
