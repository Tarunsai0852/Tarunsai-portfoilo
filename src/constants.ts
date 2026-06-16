import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  basics: {
    name: "Tarun Sai Madimi",
    title: "Full Stack Developer | Java | Python | TypeScript | AWS | Azure | Microservices",
    summary: "Full Stack Developer with 3+ years of experience building scalable web applications, APIs, and event-driven systems using Java, Python, TypeScript, and cloud-native technologies. Delivered platforms supporting 99.9% service availability and processing over 10M+ transaction and event records annually across fintech and cybersecurity environments. Experienced in microservices, distributed systems, real-time data pipelines, cloud infrastructure, and secure application development using AWS, Azure, PostgreSQL, Kafka, and modern frontend frameworks.",
    location: "OH, USA",
    email: "madimitarunsai0@gmail.com",
    links: [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/tarunsaimadimi/"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Tarunsai0852"
      }
    ]
  },
  experience: [
    {
      company: "Amazon",
      role: "Full Stack Developer",
      dates: "October 2024 - Present",
      location: "OH, USA",
      bullets: [
        "Contributed to RESTful microservices using FastAPI and Celery with async task queues, integrating internal APIs to automate data enrichment workflows and cut manual processing time by 50%.",
        "Took ownership of a real-time event correlation engine using Python asyncio and Amazon SQS, aggregating multi-source data streams into unified event timelines and reducing duplicate alert noise by 60% for internal operations teams.",
        "Collaborated with backend teams to expose normalized operational data through a GraphQL API built with Strawberry and SQLAlchemy, deployed behind AWS API Gateway with rate limiting and authentication for multiple internal consumers.",
        "Drove automation of compliance and reporting workflows using Python scripting integrated with Terraform and AWS Lambda, cutting report turnaround time from 2 days to 4 hours.",
        "Worked with the observability team to instrument distributed backend services using OpenTelemetry and AWS CloudWatch, contributing to trace-level analysis that resolved latency bottlenecks in production payment workflows.",
        "Partnered with product and design to rebuild internal operational dashboards in Next.js and TypeScript with live WebSocket data feeds, reducing UI regressions by 35% through improved testing and CI practices."
      ],
      metrics: [
        { label: "Manual Processing", value: "-50%" },
        { label: "Alert Noise", value: "-60%" },
        { label: "Report Turnaround", value: "4 hrs" },
        { label: "UI Regressions", value: "-35%" }
      ]
    },
    {
      company: "FIS Global",
      role: "Software Developer",
      dates: "November 2021 - August 2023",
      location: "India",
      bullets: [
        "Built a multi-tenant payment reporting framework using Java 17, Hibernate ORM, and PostgreSQL that consolidated client reporting pipelines for banking clients, reducing data processing time by 40% across enterprise accounts.",
        "Developed a real-time audit trail system using Spring Batch to manage ETL workflows between core banking systems and cloud data warehouses, supporting PCI-DSS compliance for financial institution clients.",
        "Designed RESTful microservices using Spring WebFlux and R2DBC to handle non-blocking, high-frequency transaction requests, improving service throughput by 45% during peak settlement and reconciliation windows.",
        "Refactored inter-service communication between payment gateway and reconciliation modules from synchronous REST to event-driven messaging using Kafka, reducing processing latency and improving fault tolerance across transaction workflows.",
        "Managed cloud infrastructure on Azure AKS using Terraform and Helm charts, enabling automated environment provisioning and zero-downtime deployments for production banking applications.",
        "Set up CI/CD pipelines using Jenkins and GitHub Actions, integrating automated build, test, and deployment stages that streamlined release cycles and improved team delivery consistency across environments.",
        "Enforced SonarQube code quality gates across service repositories, achieving 85% test coverage through JUnit and Mockito and reducing production defects by 30% across the team."
      ],
      metrics: [
        { label: "Data Processing", value: "-40%" },
        { label: "Throughput", value: "+45%" },
        { label: "Test Coverage", value: "85%" },
        { label: "Production Defects", value: "-30%" }
      ]
    }
  ],
  achievements: [
    { title: "Service Availability", metric: "99.9%", context: "Supported reliable cloud-native platforms across fintech and cybersecurity systems." },
    { title: "Annual Records", metric: "10M+", context: "Processed transaction and event records through distributed services and pipelines." },
    { title: "Alert Noise", metric: "60% Reduction", context: "Built real-time event correlation workflows for cleaner internal operations." },
    { title: "Claims Processing", metric: "45% Faster", context: "Improved portal throughput with RBAC, validation workflows, and caching." }
  ],
  projects: [
    {
      title: "Insurance Claims Management Portal",
      category: "Enterprise Workflow Platform",
      summary: "Architected a secure claims management portal with role-based access, automated validation workflows, OWASP-aligned API security, and caching strategies.",
      impact: "45% reduction in claim processing time",
      stack: ["Spring Boot", "React", "TypeScript", "React Query", "PostgreSQL", "JWT", "Redis", "Docker", "AWS S3"],
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Insurance claim paperwork and business documents"
    },
    {
      title: "Private Self-Destructing URL Shortener",
      category: "Secure Sharing Platform",
      summary: "Modernized a privacy-first URL shortening platform with time-bound automatic link expiration and secure authentication for controlled resource sharing.",
      impact: "Zero manual cleanup overhead for sensitive links",
      stack: ["React", "TypeScript", "Express.js", "MongoDB", "OAuth2", "AWS Cognito"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Cybersecurity lock and secure network visualization"
    },
    {
      title: "E-Commerce Web App",
      category: "Commerce Experience",
      summary: "Delivered a high-performance e-commerce platform featuring product discovery, cart functionality, secure payments, and a seamless multi-device experience.",
      impact: "40% faster page loads",
      stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Stripe", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90",
      imageAlt: "Online commerce checkout and product browsing interface"
    }
  ],
  skills: {
    "Programming": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    "Backend & APIs": ["FastAPI", "Celery", "Spring Boot", "Spring WebFlux", "Spring Batch", "Express.js", "Node.js", "Hibernate ORM", "SQLAlchemy", "R2DBC", "Apache Camel", "GraphQL", "RESTful APIs", "gRPC"],
    "Frontend": ["React", "Next.js", "Redux Toolkit", "React Query", "WebSockets", "Server-Side Rendering"],
    "Data & ML": ["Apache Kafka", "Apache Spark", "scikit-learn", "ETL Pipelines", "Real-Time Streaming"],
    "Databases & Cloud": ["PostgreSQL", "MongoDB", "Redis", "AWS Lambda", "API Gateway", "AWS SQS", "AWS S3", "CloudWatch", "Azure AKS"],
    "DevOps & Quality": ["Terraform", "Docker", "Helm", "Jenkins", "GitHub Actions", "OpenTelemetry", "Grafana Tempo", "ELK Stack", "JUnit", "Mockito", "SonarQube", "ESLint"],
    "Security & Architecture": ["AWS Cognito", "JWT Authentication", "OAuth2", "RBAC", "OWASP Security Practices", "VirusTotal API", "MISP API", "SIEM", "Threat Intelligence", "Microservices", "Multi-Tenant Systems"]
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
