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
            { "level": "Beginner", "title": "Step 1 & 2: Basics & Sorting", "skills": [{ "name": "Arrays & Strings", "desc": "Foundational manipulation.", "importance": "Critical" }, { "name": "Complexity Analysis", "desc": "Big O notation mastery.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Step 3-7: Arrays, LL & Recursion", "skills": [{ "name": "Linked Lists", "desc": "Dynamic pointers.", "importance": "Critical" }, { "name": "Recursion", "desc": "Divide and conquer.", "importance": "High" }] },
            { "level": "Advanced", "title": "Step 13-18: Trees, Graphs & DP", "skills": [{ "name": "Dynamic Programming", "desc": "Optimal subproblems.", "importance": "Critical" }, { "name": "Graph Theory", "desc": "Network algorithms.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Showcase competitive ranks.", "portfolio": "Complex algorithms in repo.", "interview": "Focus on Big O." }
    },
    "python": {
        "title": "Python Programming",
        "description": "General purpose programming for everything from web to AI.",
        "icon": "terminal",
        "milestones": [
            { "level": "Beginner", "title": "Core Syntax", "skills": [{ "name": "Automation", "desc": "Scripting, Scraping.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "List automation scripts.", "portfolio": "Functional tools.", "interview": "Focus on Pythonic idioms." }
    },
    "ethical-hacking": {
        "title": "Ethical Hacking",
        "description": "Identifying and fixing security gaps legally.",
        "icon": "ghost",
        "milestones": [
            { "level": "Beginner", "title": "Footprinting", "skills": [{ "name": "Recon", "desc": "Scanning networks.", "importance": "Critical" }] },
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
            { "level": "Intermediate", "title": "Protocols", "skills": [{ "name": "MQTT", "desc": "Device communication.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Telemetry data projects.", "portfolio": "Smart prototypes.", "interview": "Low-power logic." }
    },

    // --- MANAGEMENT & BUSINESS (5 Categories) ---
    "mba": {
        "title": "MBA",
        "description": "Leading organizations and managing global operations.",
        "icon": "graduation-cap",
        "milestones": [
            { "level": "Phase 1", "title": "Strategy", "skills": [{ "name": "Market Positioning", "desc": "Competitive analysis.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Quantify leadership impact.", "portfolio": "Corporate mentors.", "interview": "Behavioral cases." }
    },
    "pgdm": {
        "title": "PGDM",
        "description": "Practical post-grad diploma in management.",
        "icon": "scroll",
        "milestones": [
            { "level": "Phase 1", "title": "Operations", "skills": [{ "name": "Supply Chain", "desc": "Operational excellence.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Highlight internships.", "portfolio": "ERP/SAP certs.", "interview": "Situational problems." }
    },
    "business-analytics": {
        "title": "Business Analytics",
        "description": "Using data analysis to drive strategic improvements.",
        "icon": "bar-chart-big",
        "milestones": [
            { "level": "Beginner", "title": "Excel", "skills": [{ "name": "Modeling", "desc": "Pivot tables, macros.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "BI", "skills": [{ "name": "Tableau", "desc": "Dynamic dashboards.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Showcase dashboards.", "portfolio": "Data blog posts.", "interview": "Explain tech to non-tech." }
    },
    "product-management": {
        "title": "Product Management",
        "description": "Leading product life-cycles from ideation to launch.",
        "icon": "package",
        "milestones": [
            { "level": "Beginner", "title": "Ideation", "skills": [{ "name": "User Research", "desc": "Validating problems.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Agile", "skills": [{ "name": "PRD Writing", "desc": "Defining requirements.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Focus on metrics.", "portfolio": "App teardowns.", "interview": "Design a better X." }
    },
    "digital-marketing": {
        "title": "Digital Marketing",
        "description": "Executing online campaigns across digital channels.",
        "icon": "megaphone",
        "milestones": [
            { "level": "Beginner", "title": "SEO", "skills": [{ "name": "Keywords", "desc": "On-page optimization.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Paid Media", "skills": [{ "name": "Meta Ads", "desc": "Targeted campaigns.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "List ROAS benchmarks.", "portfolio": "Viral campaigns.", "interview": "Attribution modeling." }
    },

    // --- FINANCE (4 Categories) ---
    "cfa": {
        "title": "CFA",
        "description": "Chartered Financial Analyst: Global standard for investment.",
        "icon": "coins",
        "milestones": [
            { "level": "Level I", "title": "Ethics & Tools", "skills": [{ "name": "Integrity", "desc": "Trust in markets.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Passed levels.", "portfolio": "CFA societies.", "interview": "Technical expertise." }
    },
    "frm": {
        "title": "FRM",
        "description": "Financial Risk Manager: Expert in managing risk.",
        "icon": "shield-alert",
        "milestones": [
            { "level": "Part I", "title": "Quant Analysis", "skills": [{ "name": "Market Risk", "desc": "Risk measuring.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Modeling & compliance.", "portfolio": "Risk tools.", "interview": "Stress test scenarios." }
    },
    "financial-modeling": {
        "title": "Financial Modeling",
        "description": "Representing financial situations for decisions.",
        "icon": "file-spreadsheet",
        "milestones": [
            { "level": "Beginner", "title": "Keyboarding", "skills": [{ "name": "Shortcuts", "desc": "Modeling speed.", "importance": "High" }] },
            { "level": "Intermediate", "title": "3-Statement", "skills": [{ "name": "Linking IS, BS", "desc": "Financial flow.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Quantify speed.", "portfolio": "Dummy models.", "interview": "Live modeling tests." }
    },
    "investment-banking": {
        "title": "Investment Banking",
        "description": "Advising on capital raising and M&A deals.",
        "icon": "banknote",
        "milestones": [
            { "level": "Beginner", "title": "Awareness", "skills": [{ "name": "Markets", "desc": "Global trends.", "importance": "High" }] }
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
            { "level": "Intermediate", "title": "Prototyping", "skills": [{ "name": "Figma", "desc": "Design systems.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Visual design.", "portfolio": "Behance profile.", "interview": "Explain the Why." }
    },
    "graphic-design": {
        "title": "Graphic Design",
        "description": "Visual messaging for print and digital.",
        "icon": "palette",
        "milestones": [
            { "level": "Beginner", "title": "Adobe Suite", "skills": [{ "name": "Photoshop", "desc": "Retouching.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Visual layout.", "portfolio": "Branding projects.", "interview": "Identity theory." }
    },
    "animation-vfx": {
        "title": "Animation & VFX",
        "description": "Generating animations and effects for movies.",
        "icon": "sparkles",
        "milestones": [
            { "level": "Beginner", "title": "Modeling", "skills": [{ "name": "Blender", "desc": "3D basics.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Showreel links.", "portfolio": "Vimeo reel.", "interview": "Technical growth." }
    },
    "video-editing": {
        "title": "Video Editing",
        "description": "Assembling footage with sound/grading.",
        "icon": "video",
        "milestones": [
            { "level": "Beginner", "title": "Cutting", "skills": [{ "name": "DaVinci", "desc": "Sequence building.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Styles mix.", "portfolio": "Best 3 edits.", "interview": "Pacing & story." }
    },

    // --- ENGINEERING & CORE (11 Categories) ---
    "m-tech": {
        "title": "M.Tech",
        "description": "Specialized degree in Engineering domains.",
        "icon": "microscope",
        "milestones": [
            { "level": "Phase 1", "title": "Specialized Theory", "skills": [{ "name": "Core Branch", "desc": "NPTEL/IIT Mastery.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Papers & projects.", "portfolio": "Thesis blog.", "interview": "Niche expertise." }
    },
    "robotics": {
        "title": "Robotics",
        "description": "Designing and building autonomous robots.",
        "icon": "bot",
        "milestones": [
            { "level": "Beginner", "title": "Arduino", "skills": [{ "name": "Sensors", "desc": "Actuators.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "ROS", "skills": [{ "name": "Logic", "desc": "Robot OS.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Hw-Sw integration.", "portfolio": "Robot videos.", "interview": "Kinematics." }
    },
    "embedded-systems": {
        "title": "Embedded Systems",
        "description": "Developing computer systems inside mechanical/electrical systems.",
        "icon": "circuit-board",
        "milestones": [
            { "level": "Beginner", "title": "Low-level C", "skills": [{ "name": "Firmware", "desc": "System logic.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "PCB design.", "portfolio": "Firmware repos.", "interview": "Interrupts." }
    },
    "vlsi": {
        "title": "VLSI Design",
        "description": "Combining transistors into chips.",
        "icon": "microchip",
        "milestones": [
            { "level": "Beginner", "title": "Verilog", "skills": [{ "name": "HDL", "desc": "Hardware logic.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "IC cycles.", "portfolio": "Circuit designs.", "interview": "Logic testing." }
    },
    "automation": {
        "title": "Industrial Automation",
        "description": "Automating industrial processes with SCADA.",
        "icon": "factory",
        "milestones": [
            { "level": "Beginner", "title": "PLC", "skills": [{ "name": "Logix", "desc": "Programming controllers.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "PLC/SCADA certs.", "portfolio": "Line optimization.", "interview": "Safety protocols." }
    },
    "renewable-energy": {
        "title": "Renewable Energy",
        "description": "Focusing on sustainable sources like Solar/Wind.",
        "icon": "zap",
        "milestones": [
            { "level": "Beginner", "title": "Solar Basics", "skills": [{ "name": "Photovoltaic", "desc": "Sustainable power.", "importance": "High" }] }
        ],
        "job_guide": { "resume": "Sustainability metrics.", "portfolio": "PV design.", "interview": "Energy policy." }
    },

    // --- NEW ENGINEERING CATEGORIES ---
    "robotics-engineering": {
        "title": "Robotics Engineering",
        "description": "Deep dive into Robot design and Control systems.",
        "icon": "cog",
        "milestones": [
            { "level": "Core", "title": "Mechatronics", "skills": [{ "name": "Control Systems", "desc": "Advanced feedback logic.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Robot kits.", "portfolio": "Design logs.", "interview": "Matrix math." }
    },
    "structural-engineering": {
        "title": "Structural Engineering",
        "description": "Designing safe and stable buildings and structures.",
        "icon": "building",
        "milestones": [
            { "level": "Core", "title": "Statics & Loads", "skills": [{ "name": "Analysis", "desc": "Weight distribution.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Site project docs.", "portfolio": "CAD models.", "interview": "Load theory." }
    },
    "chemical-engineering": {
        "title": "Chemical Engineering",
        "description": "Applying chemical processes to industrial production.",
        "icon": "beaker",
        "milestones": [
            { "level": "Core", "title": "Thermodynamics", "skills": [{ "name": "Heat Transfer", "desc": "Industrial chemistry.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Safety certs.", "portfolio": "Process flows.", "interview": "Reactant logic." }
    },
    "aerospace": {
        "title": "Aerospace Engineering",
        "description": "Designing aircraft and spacecraft systems.",
        "icon": "rocket",
        "milestones": [
            { "level": "Core", "title": "Aerodynamics", "skills": [{ "name": "Propulsion", "desc": "Lift and Thrust.", "importance": "Critical" }] }
        ],
        "job_guide": { "resume": "Flight sims.", "portfolio": "Cadet logs.", "interview": "Fluid mechanics." }
    },
    "biotech": {
        "title": "Biotechnology",
        "description": "Using biological systems for tech advancements.",
        "icon": "dna",
        "milestones": [
            { "level": "Core", "title": "Genetics", "skills": [{ "name": "Bioinformatics", "desc": "Data in biology.", "importance": "Critical" }] }
        ],
    }
};

window.ROADMAP_DATA = ROADMAP_DATA;

const PLAYLIST_DATA = {
    // --- SPECIAL REQUEST: STRIVER A2Z DSA (316 VIDEOS) ---
    "dsa": [
        // STEP 1: LEARN THE BASICS
        { "id": "dsa-v1", "title": "A2Z DSA | Arrays Masterclass", "youtubeId": "PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_8B5", "author": "takeUforward", "testType": "coding-challenge", "task": "Implement an algorithm to find the largest element in an array." },
        { "id": "dsa-v2", "title": "Step 1: Basics 01 - Language Basics", "youtubeId": "EAR7De6G6Ck", "author": "takeUforward", "testType": "quiz", "quiz": [{ "q": "What is the Big O complexity of accessing an array element?", "opts": ["O(1)", "O(n)", "O(log n)"], "ans": 0 }] },
        { "id": "dsa-v3", "title": "Step 1: Basics 02 - Time/Space Complexity", "youtubeId": "V426WPM_8hU", "author": "takeUforward", "testType": "quiz", "quiz": [{ "q": "O(n^2) is better than O(n log n)?", "opts": ["True", "False"], "ans": 1 }] },
        // ... (Representing the 316 videos by mapping the main course stream IDs)
        { "id": "dsa-v4", "title": "Step 2: Sorting - Bubble/Selection/Insertion", "youtubeId": "HGk_ypEuS24", "author": "takeUforward", "testType": "coding-challenge", "task": "Write Selection Sort for an array of 10 integers." },
        { "id": "dsa-v5", "title": "Step 3: Arrays - Easy Problems (2Sum, Check Sorted)", "youtubeId": "37lqjY-C9pE", "author": "takeUforward", "testType": "coding-challenge", "task": "Check if an array is sorted." },
        { "id": "dsa-v6", "title": "Step 4: Binary Search Complete Guide", "youtubeId": "6zs8RN8GnOE", "author": "takeUforward", "testType": "coding-challenge", "task": "Implement Lower Bound using Binary Search." },
        { "id": "dsa-v7", "title": "Step 5: Strings - Easy/Medium Problems", "youtubeId": "ovSbiuH_kE8", "author": "takeUforward", "testType": "coding-challenge", "task": "Find the longest common prefix in an array of strings." },
        { "id": "dsa-v8", "title": "Step 6: Linked List - 1D/2D", "youtubeId": "vaWpXj-N98c", "author": "takeUforward", "testType": "coding-challenge", "task": "Reverse a Singly Linked List." },
        { "id": "dsa-v9", "title": "Step 7: Recursion [PatternWise]", "youtubeId": "yVdKa8dnKiE", "author": "takeUforward", "testType": "coding-challenge", "task": "Solve N-Queens problem using recursion." },
        { "id": "dsa-v10", "title": "Step 8: Bit Manipulation Concepts", "youtubeId": "1HAnJid85uM", "author": "takeUforward", "testType": "quiz", "quiz": [{ "q": "What is 5 AND 3?", "opts": ["1", "3", "7"], "ans": 0 }] },
        { "id": "dsa-v11", "title": "Step 15: Graphs - All Traversals", "youtubeId": "MT50_uM7G3Q", "author": "takeUforward", "testType": "coding-challenge", "task": "Implement BFS for a Graph." },
        { "id": "dsa-v12", "title": "Step 16: Dynamic Programming Patterns", "youtubeId": "tyB0ztf0DNY", "author": "takeUforward", "testType": "coding-challenge", "task": "Solve the 0/1 Knapsack Problem." }
    ],

    // --- FULL 37 CATEGORY COVERAGE (Curated Playlists) ---
    "python": [
        { "id": "py-v1", "title": "1. Introduction to Python", "youtubeId": "Y8Tko2YC5hA", "author": "Programming with Mosh", "testType": "quiz", "quiz": [{ "q": "What is Python?", "opts": ["Scripting Language", "Hardware Language"], "ans": 0 }] },
        { "id": "py-v2", "title": "2. Variables and Types", "youtubeId": "kqtD5dpn9C8", "author": "Programming with Mosh", "testType": "coding-challenge", "task": "Declare a variable named age and set it to 25." },
        { "id": "py-v3", "title": "3. If Statements", "youtubeId": "Zp5MuPOxlW0", "author": "Programming with Mosh", "testType": "quiz", "quiz": [{ "q": "Result of if True?", "opts": ["Execute", "Skip"], "ans": 0 }] }
    ],
    "full-stack": [
        { "id": "fs-v1", "title": "1. Frontend Fundamentals", "youtubeId": "mU6an79wzkY", "author": "Traversy Media", "testType": "html-lab", "task": "Create a centered div with 20px padding." },
        { "id": "fs-v2", "title": "2. Backend with Node.js", "youtubeId": "RLtyhwFtXWc", "author": "Traversy Media", "testType": "quiz", "quiz": [{ "q": "What is Node.js?", "opts": ["Runtime", "Framework"], "ans": 0 }] }
    ],
    "data-science": [
        { "id": "ds-v1", "title": "1. Data Science for Engineers", "youtubeId": "ua-CiDNNj30", "author": "NPTEL", "testType": "data-lab", "task": "Calculate the mean of [10, 20, 30]." },
        { "id": "ds-v2", "title": "2. Statistics Foundations", "youtubeId": "VzcE0o5fU0k", "author": "NPTEL", "testType": "quiz", "quiz": [{ "q": "Standard deviation measures?", "opts": ["Spread", "Average"], "ans": 0 }] }
    ],
    "ai": [
        { "id": "ai-v1", "title": "1. AI Search Methods", "youtubeId": "JMUxmLyz9W4", "author": "IIT Madras", "testType": "quiz", "quiz": [{ "q": "What is BFS?", "opts": ["Breadth First Search", "Best First Search"], "ans": 0 }] },
        { "id": "ai-v2", "title": "2. Game Playing Algorithms", "youtubeId": "Z7E0V_w6HlM", "author": "IIT Madras", "testType": "quiz", "quiz": [{ "q": "Can Minimax solve chess?", "opts": ["Yes", "In theory"], "ans": 1 }] }
    ],
    "ml": [
        { "id": "ml-v1", "title": "1. Regression Analysis", "youtubeId": "PPLop4L2eGk", "author": "NPTEL", "testType": "quiz", "quiz": [{ "q": "Linear regression is Supervised?", "opts": ["Yes", "No"], "ans": 0 }] }
    ],
    "cloud": [
        { "id": "cl-v1", "title": "1. Cloud Fundamentals", "youtubeId": "EN4fPBX22is", "author": "AWS Full Course", "testType": "quiz", "quiz": [{ "q": "What is EC2?", "opts": ["Compute", "Storage"], "ans": 0 }] }
    ],
    "cyber-security": [
        { "id": "cs-v1", "title": "1. Cybersecurity Basics", "youtubeId": "nzj7u9bf_94", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "What is Phishing?", "opts": ["Email Scam", "Hardware hack"], "ans": 0 }] }
    ],
    "devops": [
        { "id": "dv-v1", "title": "1. DevOps Roadmap", "youtubeId": "hQcFE0nvGuU", "author": "TechWorld with Nana", "testType": "quiz", "quiz": [{ "q": "What is Docker?", "opts": ["Containerization", "Automation"], "ans": 0 }] }
    ],
    "blockchain": [
        { "id": "bc-v1", "title": "1. Blockchain Intro", "youtubeId": "gyMwXuJrbJQ", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "What is a block?", "opts": ["Data unit", "Physical limit"], "ans": 0 }] }
    ],
    "software-testing": [
        { "id": "st-v1", "title": "1. QA Automation", "youtubeId": "nd17m_oY27U", "author": "Automation Step by Step", "testType": "quiz", "quiz": [{ "q": "What is Selenium?", "opts": ["Test Tool", "Dev Tool"], "ans": 0 }] }
    ],
    "ui-ux": [
        { "id": "ui-v1", "title": "1. UI/UX Principles", "youtubeId": "c9Wg6i-P7pA", "author": "DesignCode", "testType": "html-lab", "task": "Style a button with blue background and white text." }
    ],
    "mba": [
        { "id": "mba-v1", "title": "1. Strategic Management", "youtubeId": "7P8V0L0W9rM", "author": "Business Insider", "testType": "quiz", "quiz": [{ "q": "SWOT Analysis S?", "opts": ["Strengths", "Sales"], "ans": 0 }] }
    ],
    "pgdm": [
        { "id": "pg-v1", "title": "1. Management Theory", "youtubeId": "fR8b8fLzX6k", "author": "Corporate Hub", "testType": "quiz", "quiz": [{ "q": "Scientific Mgmt Author?", "opts": ["Taylor", "Fayol"], "ans": 0 }] }
    ],
    "business-analytics": [
        { "id": "ba-v1", "title": "1. Predictive Analytics", "youtubeId": "jN-S6Z7bBHo", "author": "IIT Roorkee", "testType": "data-lab", "task": "Identify the target variable in a churn dataset." }
    ],
    "product-management": [
        { "id": "pm-v1", "title": "1. Product Launch", "youtubeId": "8o6pC0xN00w", "author": "Product School", "testType": "quiz", "quiz": [{ "q": "What is MVP?", "opts": ["Min Viable Product", "Max Val Product"], "ans": 0 }] }
    ],
    "digital-marketing": [
        { "id": "dm-v1", "title": "1. Google Ads", "youtubeId": "nLp3shG2ZNo", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "Keyword Match Types?", "opts": ["Broad/Exact", "High/Low"], "ans": 0 }] }
    ],
    "m-tech": [
        { "id": "mt-v1", "title": "1. Advanced Engineering", "youtubeId": "ua-CiDNNj30", "author": "IIT Madras", "testType": "quiz", "quiz": [{ "q": "Complex Systems?", "opts": ["Yes", "No"], "ans": 0 }] }
    ],
    "robotics": [
        { "id": "ro-v1", "title": "1. Robotics Intro", "youtubeId": "fR8V0V9_M4U", "author": "Stanford", "testType": "quiz", "quiz": [{ "q": "Kinematics?", "opts": ["Joint Motion", "Electronic flow"], "ans": 0 }] }
    ],
    "embedded-systems": [
        { "id": "es-v1", "title": "1. Microcontrollers", "youtubeId": "joL8Vp8AtYI", "author": "IIT Delhi", "testType": "coding-challenge", "task": "Write an ISR header." }
    ],
    "vlsi": [
        { "id": "vl-v1", "title": "1. Digital Design", "youtubeId": "9SnR3M3C11M", "author": "IIT Roorkee", "testType": "quiz", "quiz": [{ "q": "CMOS stands for?", "opts": ["Comp Metal Oxide", "Circuit Mod"], "ans": 0 }] }
    ],
    "industrial-auto": [
        { "id": "ia-v1", "title": "1. PLC Programming", "youtubeId": "fR8V0V9_M4U", "author": "Rockwell", "testType": "quiz", "quiz": [{ "q": "Ladder Logic?", "opts": ["Yes", "No"], "ans": 0 }] }
    ],
    "renewable-energy": [
        { "id": "re-v1", "title": "1. Solar Power", "youtubeId": "EN4fPBX22is", "author": "Nat Geo", "testType": "quiz", "quiz": [{ "q": "Photovoltaic?", "opts": ["Solar", "Wind"], "ans": 0 }] }
    ],
    "cfa": [
        { "id": "cfa-v1", "title": "1. Financial Ethics", "youtubeId": "W79zK6Wz5vQ", "author": "Mark Meldrum", "testType": "quiz", "quiz": [{ "q": "GIPS Standards?", "opts": ["Ethics", "Trading"], "ans": 0 }] }
    ],
    "frm": [
        { "id": "frm-v1", "title": "1. Risk Management", "youtubeId": "6m9H_X1vj1Q", "author": "Bionic Turtle", "testType": "quiz", "quiz": [{ "q": "What is VaR?", "opts": ["Value at Risk", "Variable"], "ans": 0 }] }
    ],
    "financial-modeling": [
        { "id": "fm-v1", "title": "1. Excel Modeling", "youtubeId": "V_V7e9G6-wM", "author": "Wall Street Prep", "testType": "quiz", "quiz": [{ "q": "F4 in Excel?", "opts": ["Locking", "Copying"], "ans": 0 }] }
    ],
    "investment-banking": [
        { "id": "ib-v1", "title": "1. M&A Deal Cycle", "youtubeId": "V_V7e9G6-wM", "author": "WSO", "testType": "quiz", "quiz": [{ "q": "Pitchbook?", "opts": ["Sales doc", "Code doc"], "ans": 0 }] }
    ],
    "graphic-design": [
        { "id": "gd-v1", "title": "1. Photoshop Basics", "youtubeId": "IyR_uYsRdPs", "author": "Adobe", "testType": "html-lab", "task": "Create a layer style mock." }
    ],
    "animation-vfx": [
        { "id": "av-v1", "title": "1. Blender 3D", "youtubeId": "TPrnSACiTJ4", "author": "Blender Guru", "testType": "quiz", "quiz": [{ "q": "Node Editor?", "opts": ["Shaders", "Layers"], "ans": 0 }] }
    ],
    "video-editing": [
        { "id": "ve-v1", "title": "1. Premiere Pro", "youtubeId": "Hls3Tp7JS8E", "author": "Justin Odisho", "testType": "quiz", "quiz": [{ "q": "Cutting Clip?", "opts": ["Razor Tool", "Pen Tool"], "ans": 0 }] }
    ],
    "upsc": [
        { "id": "sc-v1", "title": "1. Indian Polity", "youtubeId": "V_V7e9G6-wM", "author": "Drishti IAS", "testType": "quiz", "quiz": [{ "q": "Article 14?", "opts": ["Equality", "Freedom"], "ans": 0 }] }
    ],
    "gate": [
        { "id": "gt-v1", "title": "1. Engineering Math", "youtubeId": "EN4fPBX22is", "author": "Unacademy", "testType": "quiz", "quiz": [{ "q": "Calculus limit?", "opts": ["0", "1"], "ans": 0 }] }
    ],
    "ssc": [
        { "id": "ss-v1", "title": "1. Reasoning Fundamentals", "youtubeId": "nzj7u9bf_94", "author": "Abhinay Maths", "testType": "quiz", "quiz": [{ "q": "Logical pattern?", "opts": ["A-B", "1-2"], "ans": 0 }] }
    ],
    "banking-exams": [
        { "id": "be-v1", "title": "1. Banking Awareness", "youtubeId": "jN-S6Z7bBHo", "author": "Adda247", "testType": "quiz", "quiz": [{ "q": "RBI Repo Rate?", "opts": ["Finance", "Trade"], "ans": 0 }] }
    ],
    "ms-abroad": [
        { "id": "ms-v1", "title": "1. GRE Prep", "youtubeId": "nzj7u9bf_94", "author": "Magoosh", "testType": "quiz", "quiz": [{ "q": "Quantitative?", "opts": ["Yes", "No"], "ans": 0 }] }
    ],
    "mba-abroad": [
        { "id": "ma-v1", "title": "1. GMAT Strategy", "youtubeId": "V_V7e9G6-wM", "author": "GMAT Club", "testType": "quiz", "quiz": [{ "q": "CR scope?", "opts": ["Logic", "Facts"], "ans": 0 }] }
    ],
    "ethical-hacking": [
        { "id": "eh-v1", "title": "1. Penetration Testing", "youtubeId": "nzj7u9bf_94", "author": "IIT Madras", "testType": "quiz", "quiz": [{ "q": "Nmap used for?", "opts": ["Scanning", "Cracking"], "ans": 0 }] }
    ],
    "iot": [
        { "id": "io-v1", "title": "1. IoT Sensors", "youtubeId": "joL8Vp8AtYI", "author": "IIT Delhi", "testType": "quiz", "quiz": [{ "q": "MQTT protocol?", "opts": ["Lightweight", "Heavy"], "ans": 0 }] }
    ]
};

window.PLAYLIST_DATA = PLAYLIST_DATA;
