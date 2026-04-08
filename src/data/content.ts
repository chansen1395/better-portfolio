import { withBasePath } from "../lib/basePath";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  tech: string[];
  challenge: string;
  approach: string;
  outcomes: string[];
  link?: string;
}

export interface Job {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

// --- Hero ----------------------------------------------------
export const hero = {
  name: "Connor Hansen",
  title: "Software Engineer",
  tagline:
    "I build and maintain web applications at Pacific Northwest National Laboratory, mostly in React and TypeScript, for federal users.",
  cta: [
    { label: "Resume", to: "/resume" },
    { label: "Projects", to: "/projects" },
  ],
};

// --- Projects ------------------------------------------------
export const projects: Project[] = [
  {
    slug: "facility-cybersecurity-framework",
    title: "Facility Cybersecurity Framework",
    subtitle:
      "A suite of self-assessment tools that helps federal facility owners and operators manage cybersecurity risks across their OT and IT networks, following the NIST Cybersecurity Framework.",
    role: "Frontend Developer",
    duration: "2022 - Present",
    tech: ["React", "TypeScript", "JavaScript"],
    challenge:
      "The platform had grown into a large suite of assessments, training tools, and mitigation features, but usability issues and accumulated bugs were hurting engagement, particularly for the long assessment sessions users needed to complete.",
    approach:
      "Joined the existing team and built FCF Lite while reworking core UI and application logic. Ran bug-fixing campaigns, modernized component architecture, and improved the experience for long sessions. The project was nominated as an R&D 100 finalist in 2022.",
    outcomes: [
      "12,000+ users across federal institutions",
      "1.3M+ page views; 59,000+ sessions over 60 minutes",
      "FCF Training Game featured in DOE's April 2025 FEMP Digest",
      "R&D 100 Award finalist (2022)",
    ],
    link: "https://facilitycyber.labworks.org/",
  },
  {
    slug: "water-balance-tool",
    title: "FEMP Water Balance Tool",
    subtitle:
      "A full-stack application for federal energy managers to track and analyze water usage across facilities.",
    role: "Technical Lead",
    duration: "2023 - Present (2 years as lead)",
    tech: ["React", "TypeScript", "ExpressJS", "PostgreSQL"],
    challenge:
      "Five years of accumulated technical debt had made the codebase slow to work in and unreliable to ship from. It needed modernization without breaking things for active users.",
    approach:
      "Led a phased refactoring effort -- cleaned up state management, improved the UI, and set up reliable CI/CD and deployment pipelines. Worked directly with stakeholders on feature priorities, wrote statements of work, and delivered monthly usage reports.",
    outcomes: [
      "207 logins and 45 new registrations in 8 months (Jan-Aug 2025)",
      "Modernized UI with improved data visualizations",
      "Reduced legacy technical debt accumulated over 5+ years",
      "Regular stakeholder reporting with usage analytics",
    ],
    link: "https://water-balance.labworks.org/",
  },
  {
    slug: "ai-engineering-workflows",
    title: "AI-Assisted Developer Tooling",
    subtitle:
      "A proof-of-concept pipeline and VS Code extension for automating parts of the development cycle using generative AI.",
    role: "Software Engineer",
    duration: "2024 - Present",
    tech: ["VS Code Extensions", "Jira API", "Generative AI", "TypeScript"],
    challenge:
      "Our team wanted to see where AI code generation could realistically fit into existing development workflows without sacrificing review quality or introducing risk.",
    approach:
      "Built a VS Code extension that pulls Jira tickets and feeds them through AI code generation, automated review, and PR creation as a proof of concept. Ran weekly demos for the team to share what worked and what didn't. Used AI-assisted workflows to rapidly prototype a grid resilience app and an iRODS browser that would have taken much longer to scaffold by hand.",
    outcomes: [
      "Proof-of-concept pipeline from Jira ticket to pull request via a custom VS Code extension",
      "Prototyped two internal applications (grid resilience, iRODS browser) using AI-assisted development",
      "Ran weekly team sessions sharing practical AI workflow techniques",
      "Improved test coverage on existing projects using AI-generated test scaffolding",
    ],
  },
];

// --- Experience ----------------------------------------------
export const experience: Job[] = [
  {
    company: "Pacific Northwest National Laboratory",
    title: "Software Engineer",
    location: "Richland, WA",
    period: "April 2022 - Present",
    highlights: [
      "Frontend-focused full-stack developer working primarily with React, TypeScript, and ExpressJS",
      "Technical lead on a production application serving federal energy managers (2 years)",
      "Contributed to an R&D 100 finalist project (2022)",
      "Led codebase modernization across 5+ years of legacy code",
      "Wrote statements of work and managed CI/CD pipelines and production deployments",
      "Building a grid resilience application with an iRODS browser w/ companion TUI & executables & provenance tracking",
      "Built and shared AI-assisted development workflows with the team through weekly sessions",
    ],
  },
  {
    company: "Fusion Marketing",
    title: "Operations Coordinator & Farm Manager",
    location: "Newberg, OR",
    period: "Mar 2019 - Aug 2021",
    highlights: [
      "Automated label-making processes, eliminating 100+ hours of manual labor per year",
      "Performed sales analytics and forecasting for operations planning",
      "Coordinated between vendors, suppliers, and buyers as a project manager",
    ],
  },
  {
    company: "George Fox University",
    title: "Events Coordinator & Conference Manager",
    location: "Newberg, OR",
    period: "May 2015 - Sept 2017",
    highlights: [
      "Supervised and coordinated teams of 5-15 students across events and conferences",
      "Managed logistics for graduation ceremonies and multi-day university conferences",
    ],
  },
];

// --- Education -----------------------------------------------
export const education: Education[] = [
  {
    institution: "Epicodus",
    degree: "Full-Stack Web & Mobile Development Certificate",
    period: "2021 - 2022",
    details: [
      "Full-time pair-programming intensive with a 3-month internship",
    ],
  },
  {
    institution: "George Fox University",
    degree: "B.A. Economics - Magna Cum Laude (3.72 GPA)",
    period: "2013 - 2017",
    details: [
      "Minors in Finance and Information Systems",
      "Authored an economic impact study for the university under faculty direction",
    ],
  },
];

// --- Skills --------------------------------------------------
export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["ExpressJS", "C# / .NET", "Python"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Tableau"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "CI/CD", "Git", "Firebase"],
  },
  {
    label: "Other",
    items: ["AI-Assisted Development", "Agile / Jira"],
  },
];

// --- About ---------------------------------------------------
export const about = {
  intro:
    "Software engineer at Pacific Northwest National Laboratory with experience leading production web applications, pioneering AI-assisted development workflows, reducing technical debt, and working directly with stakeholders to turn requirements into shipped software. Frontend-focused in React and TypeScript, with additional full-stack work in Express and PostgreSQL.",
  journey:
    "I came to software through an economics degree and a couple of operations roles where I kept finding things to automate. That habit eventually pointed me toward development full-time, so I went through Epicodus and landed at PNNL.",
  personal:
    "Outside of work I make pottery, plan backpacking trips, restore ancient coins, and run a Dungeons & Dragons campaign.",
};

// --- Contact / Social ----------------------------------------
export const social = {
  email: "chansen13@georgefox.edu",
  linkedin: "https://www.linkedin.com/in/connor--hansen/",
  github: "https://github.com/chansen1395",
};

// --- Side Projects -------------------------------------------
export const labs = [
  {
    title: "Genesis -- Neuroevolution Ecosystem Simulator",
    description:
      "A real-time artificial life simulation where neural network-driven creatures evolve, hunt, reproduce, and die in a predator-prey ecosystem. Single HTML file, ~600 lines of JavaScript, no dependencies.",
    tech: ["Canvas 2D", "Neural Networks", "Genetic Algorithms", "Vanilla JS"],
    href: withBasePath("labs/genesis.html"),
    details: [
      "Feedforward neural networks with Xavier initialization (163 parameters per creature)",
      "Uniform crossover + Gaussian mutation with large-leap escape from local optima",
      "Click any creature to see its neural network fire in real time",
      "Emergent behaviors: pursuit strategies, pack formation, population oscillations",
    ],
    built: "Built with AI-assisted development",
  },
  {
    title: "Seasons At The Grove Simulator -- Lightweight Farming Game",
    description:
      "A Stardew Valley-inspired top-down farming game. Chop trees, haul logs, split them at the shed, and stack firewood before nightfall. Day-night cycle, daily quotas, and a tool upgrade economy.",
    tech: ["Canvas 2D", "Tile Map", "Game Loop", "Vanilla JS"],
    href: withBasePath("labs/farmstead.html"),
    details: [
      "Top-down 2D world with farmhouse, wood shed, barn, garage, forest, and fields",
      "Chop trees, haul logs, split at shed, stack at firepit before the day ends",
      "Tool progression from axe to chainsaw, manual splitting to log splitter, and carry capacity upgrades",
      "Day-night cycle with escalating quotas -- surplus logs convert to currency at the general store",
    ],
    built: "Single self-contained HTML file, no dependencies",
  },
];
