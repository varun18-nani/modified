const ROADMAP_DATA = {
    // --- TECH & SOFTWARE (13 Categories) ---
    "data-science": {
        "title": "Data Science",
        "description": "Turning raw data into actionable insights and intelligent systems.",
        "icon": "database",
        "milestones": [
            { "level": "Beginner", "title": "Math & Python Foundations", "skills": [{ "name": "Python", "desc": "Logic, Data Structures, and libraries like NumPy.", "importance": "Critical" }, { "name": "Statistics", "desc": "Probability, Distributions, and Hypothesis testing.", "importance": "High" }] },
            { "level": "Intermediate", "title": "Data Engineering & Viz", "skills": [{ "name": "Pandas", "desc": "Data manipulation and cleaning.", "importance": "Critical" }, { "name": "Visualization", "desc": "Matplotlib and Seaborn for storytelling.", "importance": "High" }] },
            { "level": "Advanced", "title": "Machine Learning Models", "skills": [{ "name": "Scikit-Learn", "desc": "Supervised and Unsupervised learning.", "importance": "Critical" }, { "name": "Big Data Tooling", "desc": "Spark and Hadoop basics.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Highlight analytical projects and Kaggle rankings.", "portfolio": "Showcase end-to-end data pipelines on GitHub.", "interview": "Focus on explaining model trade-offs." }
    },
    "ai": {
        "title": "Artificial Intelligence (AI)",
        "description": "Building systems that simulate human intelligence and solve complex problems.",
        "icon": "cpu",
        "milestones": [
            { "level": "Beginner", "title": "Logic & Algebra", "skills": [{ "name": "Linear Algebra", "desc": "Tensors, Matrices.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Neural Networks", "skills": [{ "name": "Deep Learning", "desc": "CNNs, RNNs.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Modern AI Paradigms", "skills": [{ "name": "LLMs", "desc": "Transformers, fine-tuning.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Showcase expertise in deep learning frameworks.", "portfolio": "Demonstrate fine-tuned models.", "interview": "Expect deep dives into architecture." }
    },
    "ml": {
        "title": "Machine Learning (ML)",
        "description": "Developing algorithms that allow computers to learn from and make predictions on data.",
        "icon": "brain-circuit",
        "milestones": [
            { "level": "Beginner", "title": "Statistical Learning", "skills": [{ "name": "Regression & Classification", "desc": "Linear regression, Logistic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Ensemble Methods", "skills": [{ "name": "Boosting", "desc": "XGBoost, LightGBM.", "importance": "High" }] },
            { "level": "Advanced", "title": "Deployment & MLOps", "skills": [{ "name": "Model Serving", "desc": "FastAPI, Docker.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Focus on accuracy improvements.", "portfolio": "Link to deployed models.", "interview": "Practice live coding." }
    },
    "full-stack": {
        "title": "Full Stack Web Development",
        "description": "Mastering both frontend and backend technologies to build complete web applications.",
        "icon": "layers",
        "milestones": [
            { "level": "Beginner", "title": "Frontend Core", "skills": [{ "name": "HTML/CSS/JS", "desc": "Core web trinity.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Frontend Frameworks & Backend", "skills": [{ "name": "React", "desc": "Reactive UI.", "importance": "Critical" }, { "name": "Node.js", "desc": "APIs.", "importance": "High" }] },
            { "level": "Advanced", "title": "Database & DevOps", "skills": [{ "name": "PostgreSQL", "desc": "Relational storage.", "importance": "High" }, { "name": "Docker", "desc": "Containerization.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "List tech stack (e.g. MERN).", "portfolio": "Show one full-featured SaaS project.", "interview": "Review system design." }
    },
    "cloud": {
        "title": "Cloud Computing",
        "description": "Designing and managing scalable infrastructure on platforms like AWS, Azure, and GCP.",
        "icon": "cloud",
        "milestones": [
            { "level": "Beginner", "title": "Networking", "skills": [{ "name": "VPC", "desc": "Subnets, routing.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Compute & Storage", "skills": [{ "name": "S3/Lambda", "desc": "Object storage, serverless.", "importance": "High" }] },
            { "level": "Advanced", "title": "IaC", "skills": [{ "name": "Terraform", "desc": "Automating cloud.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Get cloud certifications.", "portfolio": "Build multi-region architecture.", "interview": "Focus on security." }
    },
    "cyber-security": {
        "title": "Cyber Security",
        "description": "Safeguarding digital assets and networks from malicious attacks.",
        "icon": "shield-check",
        "milestones": [
            { "level": "Beginner", "title": "Networking & OS", "skills": [{ "name": "TCP/IP", "desc": "Data movement.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Penetration Testing", "skills": [{ "name": "Kali Linux", "desc": "Metasploit, Nmap.", "importance": "High" }] },
            { "level": "Advanced", "title": "Architecture", "skills": [{ "name": "Incident Response", "desc": "Detecting threats.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "List bug bounty findings.", "portfolio": "CTF solutions.", "interview": "Live demo an exploit." }
    },
    "devops": {
        "title": "DevOps",
        "description": "Bridging dev and ops through automation.",
        "icon": "infinity",
        "milestones": [
            { "level": "Beginner", "title": "Linux & Git", "skills": [{ "name": "Linux Admin", "desc": "Shell scripting.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "CI/CD & Containers", "skills": [{ "name": "GitHub Actions", "desc": "Automated pipelines.", "importance": "High" }] },
            { "level": "Advanced", "title": "Orchestration", "skills": [{ "name": "Kubernetes", "desc": "Managing at scale.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Show zero-downtime deployment exp.", "portfolio": "Automated pipeline project.", "interview": "Study SRE principles." }
    },
    "blockchain": {
        "title": "Blockchain Technology",
        "description": "Developing decentralized apps and smart contracts.",
        "icon": "link-2",
        "milestones": [
            { "level": "Beginner", "title": "Cryptography", "skills": [{ "name": "Hash Functions", "desc": "Consensus (PoW, PoS).", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Smart Contracts", "skills": [{ "name": "Solidity", "desc": "Ethereum logic.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "DApps", "skills": [{ "name": "Web3.js", "desc": "Frontend to chain.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Highlight security audits.", "portfolio": "Deploy an NFT marketplace.", "interview": "Understand gas optimization." }
    },
    "software-testing": {
        "title": "Software Testing",
        "description": "Ensuring quality through Rigorous manual and automated testing.",
        "icon": "badge-check",
        "milestones": [
            { "level": "Beginner", "title": "Manual Testing", "skills": [{ "name": "Bug Lifecycle", "desc": "Effective bug reports.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Automation Basics", "skills": [{ "name": "Selenium", "desc": "Cross-browser testing.", "importance": "High" }] },
            { "level": "Advanced", "title": "Modern Frameworks", "skills": [{ "name": "Cypress", "desc": "Modern E2E.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Highlight automation time reduction.", "portfolio": "Complex test suite.", "interview": "Focus on POM pattern." }
    },
    "dsa": {
        "title": "Data Structures & Algorithms",
        "description": "The foundation of computer science and technical interviews.",
        "icon": "binary",
        "milestones": [
            { "level": "Beginner", "title": "Core Foundations", "skills": [{ "name": "Arrays & Strings", "desc": "Foundational manipulation.", "importance": "Critical" }, { "name": "Complexity Analysis", "desc": "Big O notation mastery.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Linear & Non-Linear", "skills": [{ "name": "Linked Lists", "desc": "Dynamic pointers.", "importance": "Critical" }, { "name": "Recursion", "desc": "Divide and conquer.", "importance": "High" }] },
            { "level": "Advanced", "title": "Complex Algorithms", "skills": [{ "name": "Dynamic Programming", "desc": "Optimal subproblems.", "importance": "Critical" }, { "name": "Graph Theory", "desc": "Network algorithms.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Showcase competitive ranks.", "portfolio": "Complex algorithms in repo.", "interview": "Focus on Big O." }
    },
    "python": {
        "title": "Python Programming",
        "description": "General purpose programming for everything from web to AI.",
        "icon": "terminal",
        "milestones": [
            { "level": "Beginner", "title": "Core Syntax", "skills": [{ "name": "Automation", "desc": "Scripting, Scraping.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Data structures", "skills": [{ "name": "Collections", "desc": "Lists, Dicts, Sets.", "importance": "High" }] },
            { "level": "Advanced", "title": "Frameworks", "skills": [{ "name": "Django", "desc": "Web apps.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "List automation scripts.", "portfolio": "Functional tools.", "interview": "Focus on Pythonic idioms." }
    },
    "ethical-hacking": {
        "title": "Ethical Hacking",
        "description": "Identifying and fixing security gaps legally.",
        "icon": "ghost",
        "milestones": [
            { "level": "Beginner", "title": "Footprinting", "skills": [{ "name": "Recon", "desc": "Scanning networks.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Scanning", "skills": [{ "name": "Networks", "desc": "Identifying hosts.", "importance": "High" }] },
            { "level": "Advanced", "title": "Exploitation", "skills": [{ "name": "Post-Exploit", "desc": "Maintenance.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Certifications (CEH, PenTest+).", "portfolio": "Retired box write-ups.", "interview": "Ethics defense." }
    },
    "iot": {
        "title": "Internet of Things (IoT)",
        "description": "Interconnecting physical devices with the internet.",
        "icon": "webhook",
        "milestones": [
            { "level": "Beginner", "title": "Sensors", "skills": [{ "name": "ESP32", "desc": "Arduino connectivity.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Protocols", "skills": [{ "name": "MQTT", "desc": "Device communication.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Cloud Integration", "skills": [{ "name": "AWS IoT", "desc": "Cloud management.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Telemetry data projects.", "portfolio": "Smart prototypes.", "interview": "Low-power logic." }
    },

    // --- MANAGEMENT & BUSINESS (5 Categories) ---
    "mba": {
        "title": "MBA",
        "description": "Leading organizations and managing global operations.",
        "icon": "graduation-cap",
        "milestones": [
            { "level": "Beginner", "title": "Core Mgmt", "skills": [{ "name": "Org Behavior", "desc": "Hierarchy, Teams.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Strategy", "skills": [{ "name": "Market Positioning", "desc": "Competitive analysis.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Leadership", "skills": [{ "name": "Change Mgmt", "desc": "Leading transformation.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Quantify leadership impact.", "portfolio": "Corporate mentors.", "interview": "Behavioral cases." }
    },
    "pgdm": {
        "title": "PGDM",
        "description": "Practical post-grad diploma in management.",
        "icon": "scroll",
        "milestones": [
            { "level": "Beginner", "title": "Theory", "skills": [{ "name": "Economics", "desc": "Micro/Macro.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Operations", "skills": [{ "name": "Supply Chain", "desc": "Operational excellence.", "importance": "High" }] },
            { "level": "Advanced", "title": "Financial Planning", "skills": [{ "name": "Budgeting", "desc": "Capital allocation.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Highlight internships.", "portfolio": "ERP/SAP certs.", "interview": "Situational problems." }
    },
    "business-analytics": {
        "title": "Business Analytics",
        "description": "Using data analysis to drive strategic improvements.",
        "icon": "bar-chart-big",
        "milestones": [
            { "level": "Beginner", "title": "Excel", "skills": [{ "name": "Modeling", "desc": "Pivot tables, macros.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "BI", "skills": [{ "name": "Tableau", "desc": "Dynamic dashboards.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Predictive Modeling", "skills": [{ "name": "R/Python", "desc": "Data science labs.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Showcase dashboards.", "portfolio": "Data blog posts.", "interview": "Explain tech to non-tech." }
    },
    "product-management": {
        "title": "Product Management",
        "description": "Leading product life-cycles from ideation to launch.",
        "icon": "package",
        "milestones": [
            { "level": "Beginner", "title": "Ideation", "skills": [{ "name": "User Research", "desc": "Validating problems.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Agile", "skills": [{ "name": "PRD Writing", "desc": "Defining requirements.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Go-to-Market", "skills": [{ "name": "Growth Hacking", "desc": "Scaling users.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Focus on metrics.", "portfolio": "App teardowns.", "interview": "Design a better X." }
    },
    "digital-marketing": {
        "title": "Digital Marketing",
        "description": "Executing online campaigns across digital channels.",
        "icon": "megaphone",
        "milestones": [
            { "level": "Beginner", "title": "SEO", "skills": [{ "name": "Keywords", "desc": "On-page optimization.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Paid Media", "skills": [{ "name": "Meta Ads", "desc": "Targeted campaigns.", "importance": "High" }] },
            { "level": "Advanced", "title": "Automation", "skills": [{ "name": "Email Funnels", "desc": "Retention marketing.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "List ROAS benchmarks.", "portfolio": "Viral campaigns.", "interview": "Attribution modeling." }
    },

    // --- FINANCE (4 Categories) ---
    "cfa": {
        "title": "CFA",
        "description": "Chartered Financial Analyst: Global standard for investment.",
        "icon": "coins",
        "milestones": [
            { "level": "Level I", "title": "Ethics & Tools", "skills": [{ "name": "Integrity", "desc": "Trust in markets.", "importance": "Critical" }] },
            { "level": "Level II", "title": "Asset Valuation", "skills": [{ "name": "Equity/Fixed Income", "desc": "Pricing models.", "importance": "Critical" }] },
            { "level": "Level III", "title": "Portfolio Mgmt", "skills": [{ "name": "Wealth planning", "desc": "Institutional logic.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Passed levels.", "portfolio": "CFA societies.", "interview": "Technical expertise." }
    },
    "frm": {
        "title": "FRM",
        "description": "Financial Risk Manager: Expert in managing risk.",
        "icon": "shield-alert",
        "milestones": [
            { "level": "Part I", "title": "Quant Analysis", "skills": [{ "name": "Market Risk", "desc": "Risk measuring.", "importance": "Critical" }] },
            { "level": "Part II", "title": "Advanced Topics", "skills": [{ "name": "Operational Risk", "desc": "Mgmt frameworks.", "importance": "High" }] },
            { "level": "Level-Expert", "title": "Regulatory", "skills": [{ "name": "Basel III", "desc": "Global compliance.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Modeling & compliance.", "portfolio": "Risk tools.", "interview": "Stress test scenarios." }
    },
    "financial-modeling": {
        "title": "Financial Modeling",
        "description": "Representing financial situations for decisions.",
        "icon": "file-spreadsheet",
        "milestones": [
            { "level": "Beginner", "title": "Keyboarding", "skills": [{ "name": "Shortcuts", "desc": "Modeling speed.", "importance": "High" }] },
            { "level": "Intermediate", "title": "3-Statement", "skills": [{ "name": "Linking IS, BS", "desc": "Financial flow.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "LBO/M&A", "skills": [{ "name": "Scenario analysis", "desc": "Complex transaction modeling.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Quantify speed.", "portfolio": "Dummy models.", "interview": "Live modeling tests." }
    },
    "investment-banking": {
        "title": "Investment Banking",
        "description": "Advising on capital raising and M&A deals.",
        "icon": "banknote",
        "milestones": [
            { "level": "Beginner", "title": "Awareness", "skills": [{ "name": "Markets", "desc": "Global trends.", "importance": "High" }] },
            { "level": "Intermediate", "title": "Deals", "skills": [{ "name": "Structuring", "desc": "Equity/Debt.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Client advisory", "skills": [{ "name": "Pitches", "desc": "Origination.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Internships.", "portfolio": "Deal analysts.", "interview": "High-pressure tech." }
    },

    // --- DESIGN (4 Categories) ---
    "ui-ux": {
        "title": "UI/UX Design",
        "description": "Designing intuitive interfaces for digital products.",
        "icon": "framer",
        "milestones": [
            { "level": "Beginner", "title": "Typography", "skills": [{ "name": "Contrast", "desc": "Visual hierarchy.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Prototyping", "skills": [{ "name": "Figma", "desc": "Design systems.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "User research", "skills": [{ "name": "Testing", "desc": "Usability labs.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Visual design.", "portfolio": "Behance profile.", "interview": "Explain the Why." }
    },
    "graphic-design": {
        "title": "Graphic Design",
        "description": "Visual messaging for print and digital.",
        "icon": "palette",
        "milestones": [
            { "level": "Beginner", "title": "Adobe Suite", "skills": [{ "name": "Photoshop", "desc": "Retouching.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Layout", "skills": [{ "name": "InDesign", "desc": "Magazine/Ads.", "importance": "High" }] },
            { "level": "Advanced", "title": "Vector", "skills": [{ "name": "Illustrator", "desc": "Logo design.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Visual layout.", "portfolio": "Branding projects.", "interview": "Identity theory." }
    },
    "animation-vfx": {
        "title": "Animation & VFX",
        "description": "Generating animations and effects for movies.",
        "icon": "sparkles",
        "milestones": [
            { "level": "Beginner", "title": "Modeling", "skills": [{ "name": "Blender", "desc": "3D basics.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Rigging", "skills": [{ "name": "Maya", "desc": "Complex movement.", "importance": "High" }] },
            { "level": "Advanced", "title": "VFX", "skills": [{ "name": "Houdini", "desc": "Particles and fire.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Showreel links.", "portfolio": "Vimeo reel.", "interview": "Technical growth." }
    },
    "video-editing": {
        "title": "Video Editing",
        "description": "Assembling footage with sound/grading.",
        "icon": "video",
        "milestones": [
            { "level": "Beginner", "title": "Cutting", "skills": [{ "name": "DaVinci", "desc": "Sequence building.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Audio", "skills": [{ "name": "Mixing", "desc": "Soundscapes.", "importance": "High" }] },
            { "level": "Advanced", "title": "Color", "skills": [{ "name": "Grading", "desc": "Cinematic look.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Styles mix.", "portfolio": "Best 3 edits.", "interview": "Pacing & story." }
    },

    // --- ENGINEERING & PREP (11 Categories) ---
    "m-tech": {
        "title": "M.Tech",
        "description": "Specialized degree in Engineering domains.",
        "icon": "microscope",
        "milestones": [
            { "level": "Beginner", "title": "Foundations", "skills": [{ "name": "Maths", "desc": "Adv Engineering.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Specialized Theory", "skills": [{ "name": "Core Branch", "desc": "NPTEL/IIT Mastery.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Research", "skills": [{ "name": "Thesis", "desc": "Peer review.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Papers & projects.", "portfolio": "Thesis blog.", "interview": "Niche expertise." }
    },
    "robotics": {
        "title": "Robotics",
        "description": "Designing and building autonomous robots.",
        "icon": "bot",
        "milestones": [
            { "level": "Beginner", "title": "Arduino", "skills": [{ "name": "Sensors", "desc": "Actuators.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "ROS", "skills": [{ "name": "Logic", "desc": "Robot OS.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "AI/Vision", "skills": [{ "name": "CV", "desc": "Object detection.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Hw-Sw integration.", "portfolio": "Robot videos.", "interview": "Kinematics." }
    },
    "embedded-systems": {
        "title": "Embedded Systems",
        "description": "Developing computer systems inside mechanical/electrical systems.",
        "icon": "circuit-board",
        "milestones": [
            { "level": "Beginner", "title": "Low-level C", "skills": [{ "name": "Firmware", "desc": "System logic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Microcontrollers", "skills": [{ "name": "ARM", "desc": "Architecture.", "importance": "High" }] },
            { "level": "Advanced", "title": "RTOS", "skills": [{ "name": "Real-time Ops", "desc": "Logic timing.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "PCB design.", "portfolio": "Firmware repos.", "interview": "Interrupts." }
    },
    "vlsi": {
        "title": "VLSI Design",
        "description": "Combining transistors into chips.",
        "icon": "microchip",
        "milestones": [
            { "level": "Beginner", "title": "Verilog", "skills": [{ "name": "HDL", "desc": "Hardware logic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Physical Design", "skills": [{ "name": "Layout", "desc": "DRC/LVS.", "importance": "High" }] },
            { "level": "Advanced", "title": "Tape-out", "skills": [{ "name": "System on Chip", "desc": "Complex flows.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "IC cycles.", "portfolio": "Circuit designs.", "interview": "Logic testing." }
    },
    "automation": {
        "title": "Industrial Automation",
        "description": "Automating industrial processes with SCADA.",
        "icon": "factory",
        "milestones": [
            { "level": "Beginner", "title": "PLC", "skills": [{ "name": "Logix", "desc": "Programming controllers.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "SCADA", "skills": [{ "name": "HMI", "desc": "Interface design.", "importance": "High" }] },
            { "level": "Advanced", "title": "DCS", "skills": [{ "name": "Plant logic", "desc": "Large scale.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "PLC/SCADA certs.", "portfolio": "Line optimization.", "interview": "Safety protocols." }
    },
    "upsc": {
        "title": "UPSC CSE",
        "description": "The Civil Services Examination for IAS/IPS.",
        "icon": "landmark",
        "milestones": [
            { "level": "Phase-I", "title": "Prelims Prep", "skills": [{ "name": "GS Paper 1", "desc": "History, Geography, Polity.", "importance": "Critical" }] },
            { "level": "Phase-II", "title": "Mains Writing", "skills": [{ "name": "Answer Writing", "desc": "Analytical skills.", "importance": "Critical" }] },
            { "level": "Phase-III", "title": "The Interview", "skills": [{ "name": "Personality", "desc": "Critical thinking.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Govt sector path.", "portfolio": "Current affairs.", "interview": "Civil ethics." }
    },
    "gate": {
        "title": "GATE",
        "description": "Graduate Aptitude Test in Engineering for PSU/M.Tech.",
        "icon": "file-check",
        "milestones": [
            { "level": "Beginner", "title": "Core Subjects", "skills": [{ "name": "Discipline core", "desc": "Branch specific theory.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Problem Solving", "skills": [{ "name": "Numerical", "desc": "Complex engineering math.", "importance": "High" }] },
            { "level": "Advanced", "title": "Test Series", "skills": [{ "name": "Simulated GATE", "desc": "Time management.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Score based hiring.", "portfolio": "Certificates.", "interview": "Technical core." }
    },
    "ssc": {
        "title": "SSC CGL",
        "description": "Staff Selection Commission for Group B & C posts.",
        "icon": "scroll-text",
        "milestones": [
            { "level": "Tier I", "title": "Qualifying", "skills": [{ "name": "Reasoning", "desc": "Aptitude foundations.", "importance": "High" }] },
            { "level": "Tier II", "title": "Selection", "skills": [{ "name": "Mathematics", "desc": "Quantitative skills.", "importance": "Critical" }] },
            { "level": "Final", "title": "Post Analysis", "skills": [{ "name": "Admin skills", "desc": "Govt protocols.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Govt officer roles.", "portfolio": "Exam scores.", "interview": "Verifying documents." }
    },
    "banking-exams": {
        "title": "Banking Exams",
        "description": "SBI PO, IBPS, and RBI Grade B preparations.",
        "icon": "piggy-bank",
        "milestones": [
            { "level": "Phase 1", "title": "Aptitude", "skills": [{ "name": "Quant", "desc": "Banking math.", "importance": "High" }] },
            { "level": "Phase 2", "title": "Financial Aware", "skills": [{ "name": "Banking Awareness", "desc": "Economics, Policies.", "importance": "Critical" }] },
            { "level": "Final", "title": "GD/Interview", "skills": [{ "name": "Communication", "desc": "Banking soft skills.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Banking sector.", "portfolio": "Prep certificates.", "interview": "Financial ethics." }
    },
    "ms-abroad": {
        "title": "MS Abroad",
        "description": "Masters in Science from international universities.",
        "icon": "globe",
        "milestones": [
            { "level": "Phase 1", "title": "Standardized Tests", "skills": [{ "name": "GRE/TOEFL", "desc": "Aptitude & English.", "importance": "Critical" }] },
            { "level": "Phase 2", "title": "Application", "skills": [{ "name": "SOP/LOR", "desc": "Narrative building.", "importance": "Critical" }] },
            { "level": "Phase 3", "title": "Visa/Relocation", "skills": [{ "name": "Finance Planning", "desc": "International move.", "importance": "Medium" }] }
        ],
        "job_guide": { "resume": "Global profile.", "portfolio": "Study projects.", "interview": "College admissions." }
    },
    "mba-abroad": {
        "title": "MBA Abroad",
        "description": "Management degree from top global b-schools.",
        "icon": "plane",
        "milestones": [
            { "level": "Phase 1", "title": "GMAT/IELTS", "skills": [{ "name": "Quant & Verbal", "desc": "Mgmt aptitude.", "importance": "Critical" }] },
            { "level": "Phase 2", "title": "Career goals", "skills": [{ "name": "Essay writing", "desc": "Why MBA?", "importance": "Critical" }] },
            { "level": "Phase 3", "title": "Interview prep", "skills": [{ "name": "Case discussion", "desc": "Admissions interview.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Senior leadership.", "portfolio": "Mgmt essays.", "interview": "Adcom filters." }
    }
};

window.ROADMAP_DATA = ROADMAP_DATA;

const PLAYLIST_DATA = {
    "dsa": [
        { "id": "dsa-v1", "title": "A2Z DSA | Arrays Masterclass", "youtubeId": "PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_8B5", "author": "takeUforward", "testType": "coding-challenge", "task": "Implement an algorithm to find the largest element in an array." },
        { "id": "dsa-v2", "title": "Step 1: Basics 01 - Language Basics", "youtubeId": "EAR7De6G6Ck", "author": "takeUforward", "testType": "quiz", "quiz": [{ "q": "What is the Big O complexity of accessing an array element?", "opts": ["O(1)", "O(n)", "O(log n)"], "ans": 0 }, { "q": "Which data structure is best for search?", "opts": ["Array", "Linked List", "Hash Table"], "ans": 2 }] },
        { "id": "dsa-v3", "title": "Step 1: Basics 02 - Time/Space Complexity", "youtubeId": "V426WPM_8hU", "author": "takeUforward", "testType": "quiz", "quiz": [{ "q": "O(n^2) is better than O(n log n)?", "opts": ["True", "False"], "ans": 1 }] }
    ],
    "python": [
        { "id": "py-v1", "title": "1. Introduction to Python", "youtubeId": "Y8Tko2YC5hA", "author": "Programming with Mosh", "testType": "quiz", "quiz": [{ "q": "What is Python?", "opts": ["Scripting Language", "Hardware Language"], "ans": 0 }] },
        { "id": "py-v2", "title": "2. Variables and Types", "youtubeId": "kqtD5dpn9C8", "author": "Programming with Mosh", "testType": "coding-challenge", "task": "Declare a variable named age and set it to 25." }
    ],
    "full-stack": [
        { "id": "fs-v1", "title": "1. Frontend Fundamentals", "youtubeId": "mU6an79wzkY", "author": "Traversy Media", "testType": "html-lab", "task": "Create a centered div with 20px padding." },
        { "id": "fs-v2", "title": "2. Backend with Node.js", "youtubeId": "RLtyhwFtXWc", "author": "Traversy Media", "testType": "quiz", "quiz": [{ "q": "What is Node.js?", "opts": ["Runtime", "Framework"], "ans": 0 }] }
    ],
    "data-science": [
        { "id": "ds-v1", "title": "1. Data Science for Engineers", "youtubeId": "ua-CiDNNj30", "author": "NPTEL", "testType": "data-lab", "task": "Calculate the mean of [10, 20, 30]." }
    ],
    "ai": [ { "id": "ai-v1", "title": "1. AI Search Methods", "youtubeId": "JMUxmLyz9W4", "author": "IIT Madras", "testType": "quiz", "quiz": [{ "q": "What is BFS?", "opts": ["Breadth First Search", "Best First Search"], "ans": 0 }] } ],
    "ml": [ { "id": "ml-v1", "title": "1. Regression Analysis", "youtubeId": "PPLop4L2eGk", "author": "NPTEL", "testType": "quiz", "quiz": [{ "q": "Linear regression is Supervised?", "opts": ["Yes", "No"], "ans": 0 }] } ],
    "cloud": [ { "id": "cl-v1", "title": "1. Cloud Fundamentals", "youtubeId": "EN4fPBX22is", "author": "AWS Full Course", "testType": "quiz", "quiz": [{ "q": "What is EC2?", "opts": ["Compute", "Storage"], "ans": 0 }] } ],
    "cyber-security": [ { "id": "cs-v1", "title": "1. Cybersecurity Basics", "youtubeId": "nzj7u9bf_94", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "What is Phishing?", "opts": ["Email Scam", "Hardware hack"], "ans": 0 }] } ],
    "devops": [ { "id": "dv-v1", "title": "1. DevOps Roadmap", "youtubeId": "hQcFE0nvGuU", "author": "TechWorld with Nana", "testType": "quiz", "quiz": [{ "q": "What is Docker?", "opts": ["Containerization", "Automation"], "ans": 0 }] } ],
    "blockchain": [ { "id": "bc-v1", "title": "1. Blockchain Intro", "youtubeId": "gyMwXuJrbJQ", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "What is a block?", "opts": ["Data unit", "Physical limit"], "ans": 0 }] } ],
    "ui-ux": [ { "id": "ui-v1", "title": "1. UI/UX Principles", "youtubeId": "c9Wg6i-P7pA", "author": "DesignCode", "testType": "html-lab", "task": "Style a button with blue background and white text." } ],
    "upsc": [ { "id": "sc-v1", "title": "1. Indian Polity", "youtubeId": "V_V7e9G6-wM", "author": "Drishti IAS", "testType": "quiz", "quiz": [{ "q": "Article 14?", "opts": ["Equality", "Freedom"], "ans": 0 }] } ],
    "gate": [ { "id": "gt-v1", "title": "1. Engineering Math", "youtubeId": "EN4fPBX22is", "author": "Unacademy", "testType": "quiz", "quiz": [{ "q": "Calculus limit?", "opts": ["0", "1"], "ans": 0 }] } ],
    "ssc": [ { "id": "ss-v1", "title": "1. Reasoning Fundamentals", "youtubeId": "nzj7u9bf_94", "author": "Abhinay Maths", "testType": "quiz", "quiz": [{ "q": "Logical pattern?", "opts": ["A-B", "1-2"], "ans": 0 }] } ],
    "banking-exams": [ { "id": "be-v1", "title": "1. Banking Awareness", "youtubeId": "jN-S6Z7bBHo", "author": "Adda247", "testType": "quiz", "quiz": [{ "q": "RBI Repo Rate?", "opts": ["Finance", "Trade"], "ans": 0 }] } ],
    "ms-abroad": [ { "id": "ms-v1", "title": "1. GRE Prep", "youtubeId": "nzj7u9bf_94", "author": "Magoosh", "testType": "quiz", "quiz": [{ "q": "Quantitative?", "opts": ["Yes", "No"], "ans": 0 }] } ],
    "mba-abroad": [ { "id": "ma-v1", "title": "1. GMAT Strategy", "youtubeId": "V_V7e9G6-wM", "author": "GMAT Club", "testType": "quiz", "quiz": [{ "q": "CR scope?", "opts": ["Logic", "Facts"], "ans": 0 }] } ],
};

window.PLAYLIST_DATA = PLAYLIST_DATA;
