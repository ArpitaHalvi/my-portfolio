export const personalInfo = {
  name: "Alex Chen",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Engineer",
    "Cloud Architect",
    "UI/UX Craftsman",
  ],
  tagline:
    "Crafting digital experiences at the intersection of design & engineering",
  bio: "I'm a passionate software engineer with 5+ years of experience building scalable web applications. I thrive at turning complex problems into elegant solutions, with a deep love for clean code, stunning UIs, and robust backend systems.",
  location: "San Francisco, CA",
  email: "alex.chen@devcraft.io",
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
  twitter: "https://twitter.com/alexchendev",
  resume: "#",
  avatar: null,
};

export const stats = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 12, label: "Open Source Contributions", suffix: "k", prefix: "" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "🔷" },
    { name: "Vue.js", level: 80, icon: "💚" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
    { name: "Framer Motion", level: 85, icon: "✨" },
    { name: "Three.js", level: 72, icon: "🌐" },
    { name: "GraphQL", level: 78, icon: "🔗" },
  ],
  backend: [
    { name: "Node.js", level: 92, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Express.js", level: 90, icon: "🚂" },
    { name: "FastAPI", level: 80, icon: "⚡" },
    { name: "Go", level: 68, icon: "🐹" },
    { name: "REST APIs", level: 95, icon: "🔌" },
    { name: "WebSockets", level: 82, icon: "🔄" },
    { name: "Microservices", level: 78, icon: "🏗️" },
  ],
  database: [
    { name: "PostgreSQL", level: 88, icon: "🐘" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Redis", level: 80, icon: "🔴" },
    { name: "MySQL", level: 82, icon: "🐬" },
    { name: "Prisma", level: 85, icon: "💎" },
    { name: "Firebase", level: 78, icon: "🔥" },
    { name: "Supabase", level: 80, icon: "⚡" },
    { name: "Elasticsearch", level: 70, icon: "🔍" },
  ],
  other: [
    { name: "AWS", level: 82, icon: "☁️" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "Kubernetes", level: 72, icon: "⚙️" },
    { name: "CI/CD", level: 88, icon: "🔁" },
    { name: "Git", level: 95, icon: "📦" },
    { name: "Linux", level: 85, icon: "🐧" },
    { name: "Figma", level: 78, icon: "🎭" },
    { name: "AI/ML APIs", level: 75, icon: "🤖" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "NexaFlow – SaaS Analytics Platform",
    description:
      "A real-time analytics dashboard for SaaS businesses with AI-powered insights, custom dashboards, and automated reporting.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Chart.js"],
    category: "Full Stack",
    color: "#00d4ff",
    year: "2024",
    links: { live: "#", github: "#" },
    images: [
      {
        label: "Dashboard Overview",
        bg: "from-blue-900 to-cyan-900",
        icon: "📊",
      },
      {
        label: "Analytics Charts",
        bg: "from-cyan-900 to-teal-900",
        icon: "📈",
      },
      {
        label: "User Management",
        bg: "from-teal-900 to-green-900",
        icon: "👥",
      },
      {
        label: "Settings Panel",
        bg: "from-indigo-900 to-blue-900",
        icon: "⚙️",
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Cipher – E2E Encrypted Chat",
    description:
      "End-to-end encrypted messaging app with disappearing messages, file sharing, voice/video calls, and cross-platform support.",
    tech: ["React Native", "WebRTC", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile",
    color: "#7c3aed",
    year: "2024",
    links: { live: "#", github: "#" },
    images: [
      {
        label: "Chat Interface",
        bg: "from-purple-900 to-violet-900",
        icon: "💬",
      },
      { label: "Video Calls", bg: "from-violet-900 to-purple-900", icon: "📹" },
      {
        label: "File Sharing",
        bg: "from-fuchsia-900 to-purple-900",
        icon: "📁",
      },
      {
        label: "Security Screen",
        bg: "from-purple-900 to-indigo-900",
        icon: "🔐",
      },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "TerraShop – Multi-vendor Marketplace",
    description:
      "Scalable e-commerce marketplace supporting 1000+ vendors with AI-powered recommendations and real-time inventory management.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Stripe", "Redis"],
    category: "Full Stack",
    color: "#00ff9d",
    year: "2023",
    links: { live: "#", github: "#" },
    images: [
      { label: "Home Page", bg: "from-green-900 to-emerald-900", icon: "🏪" },
      {
        label: "Product Listing",
        bg: "from-emerald-900 to-teal-900",
        icon: "🛍️",
      },
      {
        label: "Vendor Dashboard",
        bg: "from-teal-900 to-green-900",
        icon: "📦",
      },
      { label: "Checkout Flow", bg: "from-green-900 to-lime-900", icon: "💳" },
    ],
    featured: true,
  },
  {
    id: 4,
    title: "DevOps Command Center",
    description:
      "Unified DevOps dashboard for monitoring Kubernetes clusters, CI/CD pipelines, and cloud resources in real-time.",
    tech: ["Vue.js", "Go", "Kubernetes", "Prometheus", "Grafana", "AWS"],
    category: "DevOps",
    color: "#ff006e",
    year: "2023",
    links: { live: "#", github: "#" },
    images: [
      { label: "Cluster Overview", bg: "from-red-900 to-pink-900", icon: "☸️" },
      { label: "Pipeline Status", bg: "from-pink-900 to-rose-900", icon: "🔁" },
      {
        label: "Metrics Dashboard",
        bg: "from-rose-900 to-red-900",
        icon: "📉",
      },
      { label: "Alerts Center", bg: "from-orange-900 to-red-900", icon: "🚨" },
    ],
    featured: false,
  },
  {
    id: 5,
    title: "MindMap AI – Note Taking App",
    description:
      "AI-powered knowledge management tool with automatic mind map generation, smart tagging, and semantic search.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB", "D3.js"],
    category: "AI",
    color: "#ffb300",
    year: "2024",
    links: { live: "#", github: "#" },
    images: [
      {
        label: "Mind Map View",
        bg: "from-yellow-900 to-amber-900",
        icon: "🧠",
      },
      { label: "Note Editor", bg: "from-amber-900 to-orange-900", icon: "✍️" },
      {
        label: "AI Suggestions",
        bg: "from-orange-900 to-yellow-900",
        icon: "🤖",
      },
      {
        label: "Search Interface",
        bg: "from-yellow-900 to-lime-900",
        icon: "🔍",
      },
    ],
    featured: false,
  },
  {
    id: 6,
    title: "BlockVault – NFT Marketplace",
    description:
      "Decentralized NFT marketplace with smart contract integration, real-time bidding, and cross-chain support.",
    tech: ["React", "Solidity", "Ethers.js", "IPFS", "Node.js", "Polygon"],
    category: "Web3",
    color: "#00d4ff",
    year: "2023",
    links: { live: "#", github: "#" },
    images: [
      { label: "NFT Gallery", bg: "from-blue-900 to-indigo-900", icon: "🎨" },
      {
        label: "Auction Room",
        bg: "from-indigo-900 to-violet-900",
        icon: "🏆",
      },
      {
        label: "Wallet Connect",
        bg: "from-violet-900 to-blue-900",
        icon: "👛",
      },
      { label: "Collection Page", bg: "from-blue-900 to-cyan-900", icon: "🗂️" },
    ],
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "TechVerse Inc.",
    period: "2022 – Present",
    duration: "2+ years",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Leading a team of 8 engineers building a cloud-native SaaS platform serving 50k+ users. Architected microservices, improved system performance by 40%, and drove adoption of modern DevOps practices.",
    tech: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
    achievements: [
      "Reduced API latency by 60%",
      "Led migration to microservices",
      "Mentored 4 junior devs",
    ],
    color: "#00d4ff",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Nexus Digital Agency",
    period: "2020 – 2022",
    duration: "2 years",
    location: "Remote",
    type: "Full-time",
    description:
      "Built 15+ client projects ranging from e-commerce platforms to real-time collaboration tools. Introduced TypeScript and automated testing, cutting bug reports by 35%.",
    tech: ["Next.js", "Python", "MongoDB", "Docker", "Stripe"],
    achievements: [
      "Delivered 15+ projects on time",
      "Reduced bugs by 35%",
      "Built reusable component library",
    ],
    color: "#7c3aed",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "StartupHub",
    period: "2019 – 2020",
    duration: "1 year",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Developed responsive web interfaces for a B2B SaaS startup. Built the core dashboard from scratch using React and D3.js, enabling real-time data visualization for business clients.",
    tech: ["React", "D3.js", "CSS-in-JS", "REST APIs"],
    achievements: [
      "Built core dashboard from scratch",
      "Increased user engagement 45%",
      "Implemented real-time updates",
    ],
    color: "#00ff9d",
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "CodeForge Labs",
    period: "2018 – 2019",
    duration: "1 year",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Started my professional career maintaining and enhancing legacy PHP applications, while transitioning the frontend stack to modern React. Learned the full SDLC in a fast-paced environment.",
    tech: ["JavaScript", "React", "PHP", "MySQL", "WordPress"],
    achievements: [
      "Modernized legacy frontend",
      "Built 8 client websites",
      "Learned agile workflow",
    ],
    color: "#ff006e",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "☁️",
    color: "#ff9900",
    credentialId: "AWS-SAA-2024-XC91",
  },
  {
    id: 2,
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2023",
    icon: "🌩️",
    color: "#4285f4",
    credentialId: "GCP-PDE-2023-AC44",
  },
  {
    id: 3,
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2023",
    icon: "⚙️",
    color: "#326ce5",
    credentialId: "CKA-2023-7F2E",
  },
  {
    id: 4,
    title: "Meta React Developer",
    issuer: "Meta / Coursera",
    year: "2022",
    icon: "⚛️",
    color: "#0668e1",
    credentialId: "META-RD-2022-P9K1",
  },
  {
    id: 5,
    title: "MongoDB Professional",
    issuer: "MongoDB University",
    year: "2022",
    icon: "🍃",
    color: "#00ed64",
    credentialId: "MDB-DEV-2022-L3X7",
  },
  {
    id: 6,
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    year: "2021",
    icon: "🔐",
    color: "#e63946",
    credentialId: "CEH-2021-R8N2",
  },
];

export const clients = [
  { name: "TechVerse", industry: "SaaS", logo: "TV", color: "#00d4ff" },
  { name: "NexaCorp", industry: "Finance", logo: "NC", color: "#7c3aed" },
  {
    name: "GreenEdge",
    industry: "Sustainability",
    logo: "GE",
    color: "#00ff9d",
  },
  { name: "ByteForge", industry: "Gaming", logo: "BF", color: "#ff006e" },
  { name: "DataPulse", industry: "Analytics", logo: "DP", color: "#ffb300" },
  { name: "CloudNine", industry: "Cloud", logo: "CN", color: "#00d4ff" },
  { name: "PixelDrift", industry: "Design", logo: "PD", color: "#ff006e" },
  {
    name: "QuantumAI",
    industry: "Artificial Intelligence",
    logo: "QA",
    color: "#7c3aed",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO, TechVerse Inc.",
    text: "Alex is an exceptional engineer. Their ability to architect scalable solutions while maintaining code quality is unmatched. Delivered our platform on time and it's been rock solid.",
    rating: 5,
    avatar: "SM",
    color: "#00d4ff",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Product Lead, NexaCorp",
    text: "Working with Alex transformed our product. The attention to performance optimization and user experience was incredible. Our load times dropped by 60% and user satisfaction skyrocketed.",
    rating: 5,
    avatar: "MJ",
    color: "#7c3aed",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Founder, GreenEdge",
    text: "From concept to launch in 6 weeks. Alex's full-stack expertise meant we had one person who truly understood every layer of our system. Absolutely hire this person.",
    rating: 5,
    avatar: "PP",
    color: "#00ff9d",
  },
];
