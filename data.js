const ROADMAP_DATA = {
    // --- TECH & SOFTWARE (13 Categories) ---
    "data-science": {
        "title": "Data Science",
        "description": "Turning raw data into actionable insights and intelligent systems.",
        "icon": "database",
        "milestones": [
            { "level": "Beginner", "title": "Math & Python Foundations", "hoursNeeded": 12, "skills": [{ "name": "Python", "desc": "Logic, Data Structures, and libraries like NumPy.", "importance": "Critical" }, { "name": "Statistics", "desc": "Probability, Distributions, and Hypothesis testing.", "importance": "High" }] },
            { "level": "Intermediate", "title": "Data Engineering & Viz", "hoursNeeded": 16, "skills": [{ "name": "Pandas", "desc": "Data manipulation and cleaning.", "importance": "Critical" }, { "name": "Visualization", "desc": "Matplotlib and Seaborn for storytelling.", "importance": "High" }] },
            { "level": "Advanced", "title": "Machine Learning Models", "hoursNeeded": 20, "skills": [{ "name": "Scikit-Learn", "desc": "Supervised and Unsupervised learning.", "importance": "Critical" }, { "name": "Big Data Tooling", "desc": "Spark and Hadoop basics.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["Install Python & Jupyter", "Variables, Data Types, Control Flow", "Functions & Modules", "NumPy arrays & operations", "Statistics: Mean, Median, Mode", "Probability fundamentals"],
            1: ["Pandas DataFrames intro", "Loading & cleaning CSV data", "EDA techniques", "Matplotlib charts", "Seaborn heatmaps & plots", "Data storytelling principles", "SQL for data analysts", "Database joins & aggregation"],
            2: ["Linear Regression", "Logistic Regression", "Decision Trees", "Scikit-Learn pipelines", "Model evaluation metrics", "Hyperparameter tuning", "PCA & dimensionality", "Spark introduction", "Capstone project planning", "Final project submission"]
        },
        "job_guide": { "resume": "Highlight analytical projects and Kaggle rankings.", "portfolio": "Showcase end-to-end data pipelines on GitHub.", "interview": "Focus on explaining model trade-offs." }
    },
    "ai": {
        "title": "Artificial Intelligence (AI)",
        "description": "Building systems that simulate human intelligence and solve complex problems.",
        "icon": "cpu",
        "milestones": [
            { "level": "Beginner", "title": "Logic & Algebra", "hoursNeeded": 10, "skills": [{ "name": "Linear Algebra", "desc": "Tensors, Matrices.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Neural Networks", "hoursNeeded": 16, "skills": [{ "name": "Deep Learning", "desc": "CNNs, RNNs.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Modern AI Paradigms", "hoursNeeded": 20, "skills": [{ "name": "LLMs", "desc": "Transformers, fine-tuning.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Intro to AI history", "Search algorithms: BFS, DFS", "Heuristics & A*", "Linear Algebra for AI", "Matrix operations", "Probability & Bayes' theorem"],
            1: ["Perceptron model", "Multi-layer neural networks", "Backpropagation", "CNNs for image tasks", "RNNs for sequences", "LSTM networks", "Regularization techniques", "Transfer learning basics"],
            2: ["Transformer architecture", "Attention mechanisms", "BERT & GPT overview", "Fine-tuning LLMs", "Prompt engineering", "Responsible AI", "AI Evaluation metrics", "LangChain intro", "AI Agent patterns", "Capstone AI project"]
        },
        "job_guide": { "resume": "Showcase expertise in deep learning frameworks.", "portfolio": "Demonstrate fine-tuned models.", "interview": "Expect deep dives into architecture." }
    },
    "ml": {
        "title": "Machine Learning (ML)",
        "description": "Developing algorithms that allow computers to learn from and make predictions on data.",
        "icon": "brain-circuit",
        "milestones": [
            { "level": "Beginner", "title": "Statistical Learning", "hoursNeeded": 10, "skills": [{ "name": "Regression & Classification", "desc": "Linear regression, Logistic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Ensemble Methods", "hoursNeeded": 14, "skills": [{ "name": "Boosting", "desc": "XGBoost, LightGBM.", "importance": "High" }] },
            { "level": "Advanced", "title": "Deployment & MLOps", "hoursNeeded": 16, "skills": [{ "name": "Model Serving", "desc": "FastAPI, Docker.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["ML problem types", "Linear Regression math", "Logistic Regression", "Model metrics (accuracy, F1)", "Train/test splits", "Overfitting concept"],
            1: ["Decision Trees & Random Forests", "XGBoost deep dive", "LightGBM & CatBoost", "Feature engineering", "K-Fold validation", "Imbalanced datasets", "SVM concepts"],
            2: ["FastAPI for model serving", "Docker containers", "CI/CD for ML", "MLflow tracking", "A/B testing models", "Model monitoring", "Cloud deployment (AWS SageMaker)", "MLOps best practices"]
        },
        "job_guide": { "resume": "Focus on accuracy improvements.", "portfolio": "Link to deployed models.", "interview": "Practice live coding." }
    },
    "full-stack": {
        "title": "Full Stack Web Development",
        "description": "Mastering both frontend and backend technologies to build complete web applications.",
        "icon": "layers",
        "milestones": [
            { "level": "Beginner", "title": "Frontend Core", "hoursNeeded": 14, "skills": [{ "name": "HTML/CSS/JS", "desc": "Core web trinity.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Frontend Frameworks & Backend", "hoursNeeded": 18, "skills": [{ "name": "React", "desc": "Reactive UI.", "importance": "Critical" }, { "name": "Node.js", "desc": "APIs.", "importance": "High" }] },
            { "level": "Advanced", "title": "Database & DevOps", "hoursNeeded": 16, "skills": [{ "name": "PostgreSQL", "desc": "Relational storage.", "importance": "High" }, { "name": "Docker", "desc": "Containerization.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["HTML structure & semantics", "CSS box model", "Flexbox & Grid", "JavaScript fundamentals", "DOM manipulation", "Events & forms", "Responsive design"],
            1: ["React components & JSX", "State & props", "Hooks (useState, useEffect)", "React Router", "Node.js & Express setup", "REST API design", "Middleware & auth (JWT)", "MongoDB basics", "Mongoose ODM"],
            2: ["PostgreSQL queries", "Database relations", "ORM (Prisma/Sequelize)", "Docker fundamentals", "CI/CD with GitHub Actions", "Cloud deployment (Vercel/Railway)", "Testing (Jest/Cypress)", "Full-stack project"]
        },
        "job_guide": { "resume": "List tech stack (e.g. MERN).", "portfolio": "Show one full-featured SaaS project.", "interview": "Review system design." }
    },
    "cloud": {
        "title": "Cloud Computing",
        "description": "Designing and managing scalable infrastructure on platforms like AWS, Azure, and GCP.",
        "icon": "cloud",
        "milestones": [
            { "level": "Beginner", "title": "Networking Essentials", "hoursNeeded": 10, "skills": [{ "name": "VPC", "desc": "Subnets, routing.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Compute & Storage", "hoursNeeded": 14, "skills": [{ "name": "S3/Lambda", "desc": "Object storage, serverless.", "importance": "High" }] },
            { "level": "Advanced", "title": "IaC & Security", "hoursNeeded": 16, "skills": [{ "name": "Terraform", "desc": "Automating cloud.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Cloud concepts & models", "AWS account setup", "IAM users & roles", "VPC networking", "Subnets & routing tables", "Security groups & NACLs"],
            1: ["EC2 instances", "Auto-scaling & load balancers", "S3 buckets & policies", "Lambda functions", "API Gateway", "RDS databases", "CloudFront CDN"],
            2: ["Terraform basics", "Writing infra as code", "Terraform state management", "Cloud security hardening", "Cost optimization", "Multi-region architecture", "CloudWatch monitoring", "AWS certification prep"]
        },
        "job_guide": { "resume": "Get cloud certifications.", "portfolio": "Build multi-region architecture.", "interview": "Focus on security." }
    },
    "cyber-security": {
        "title": "Cyber Security",
        "description": "Safeguarding digital assets and networks from malicious attacks.",
        "icon": "shield-check",
        "milestones": [
            { "level": "Beginner", "title": "Networking & OS", "hoursNeeded": 12, "skills": [{ "name": "TCP/IP", "desc": "Data movement.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Penetration Testing", "hoursNeeded": 16, "skills": [{ "name": "Kali Linux", "desc": "Metasploit, Nmap.", "importance": "High" }] },
            { "level": "Advanced", "title": "Security Architecture", "hoursNeeded": 18, "skills": [{ "name": "Incident Response", "desc": "Detecting threats.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Networking fundamentals", "TCP/IP stack", "DNS, HTTP, Firewalls", "Linux OS command line", "File permissions", "Log analysis basics"],
            1: ["Kali Linux setup", "Nmap scanning techniques", "Metasploit framework", "Web vulnerabilities (OWASP Top 10)", "SQL injection", "XSS & CSRF", "Burp Suite basics", "Password cracking"],
            2: ["Incident response lifecycle", "Digital forensics", "SIEM systems", "SOC analyst workflow", "Zero Trust architecture", "Threat intelligence", "Security certifications (CEH, CompTIA)", "CTF practice"]
        },
        "job_guide": { "resume": "List bug bounty findings.", "portfolio": "CTF solutions.", "interview": "Live demo an exploit." }
    },
    "devops": {
        "title": "DevOps",
        "description": "Bridging dev and ops through automation.",
        "icon": "infinity",
        "milestones": [
            { "level": "Beginner", "title": "Linux & Git", "hoursNeeded": 10, "skills": [{ "name": "Linux Admin", "desc": "Shell scripting.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "CI/CD & Containers", "hoursNeeded": 16, "skills": [{ "name": "GitHub Actions", "desc": "Automated pipelines.", "importance": "High" }] },
            { "level": "Advanced", "title": "Orchestration", "hoursNeeded": 18, "skills": [{ "name": "Kubernetes", "desc": "Managing at scale.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Linux CLI mastery", "Bash scripting", "Git branching strategies", "SSH & remote access", "Package management"],
            1: ["GitHub Actions workflows", "CI/CD pipeline design", "Docker build & run", "Docker Compose", "Container registries", "Artifact management", "Testing automation", "SonarQube code quality"],
            2: ["Kubernetes architecture", "Pods, Deployments, Services", "Helm charts", "Kubernetes networking", "Monitoring (Prometheus, Grafana)", "ELK stack logging", "SRE principles", "On-call runbooks"]
        },
        "job_guide": { "resume": "Show zero-downtime deployment exp.", "portfolio": "Automated pipeline project.", "interview": "Study SRE principles." }
    },
    "blockchain": {
        "title": "Blockchain Technology",
        "description": "Developing decentralized apps and smart contracts.",
        "icon": "link-2",
        "milestones": [
            { "level": "Beginner", "title": "Cryptography Basics", "hoursNeeded": 10, "skills": [{ "name": "Hash Functions", "desc": "Consensus (PoW, PoS).", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Smart Contracts", "hoursNeeded": 14, "skills": [{ "name": "Solidity", "desc": "Ethereum logic.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "DApps & DeFi", "hoursNeeded": 16, "skills": [{ "name": "Web3.js", "desc": "Frontend to chain.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Blockchain fundamentals", "Hash functions & SHA", "Public/private keys", "Consensus mechanisms (PoW/PoS)", "Bitcoin vs Ethereum"],
            1: ["Solidity language basics", "Smart contract structure", "ERC20 token development", "Testing with Hardhat", "Gas optimization", "Remix IDE", "OpenZeppelin libraries"],
            2: ["Web3.js / Ethers.js", "MetaMask integration", "DeFi protocols", "NFT marketplace development", "IPFS for decentralized storage", "Security auditing", "Layer-2 solutions", "Web3 deployment"]
        },
        "job_guide": { "resume": "Highlight security audits.", "portfolio": "Deploy an NFT marketplace.", "interview": "Understand gas optimization." }
    },
    "software-testing": {
        "title": "Software Testing",
        "description": "Ensuring quality through rigorous manual and automated testing.",
        "icon": "badge-check",
        "milestones": [
            { "level": "Beginner", "title": "Manual Testing", "hoursNeeded": 10, "skills": [{ "name": "Bug Lifecycle", "desc": "Effective bug reports.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Automation Basics", "hoursNeeded": 14, "skills": [{ "name": "Selenium", "desc": "Cross-browser testing.", "importance": "High" }] },
            { "level": "Advanced", "title": "Modern Frameworks", "hoursNeeded": 16, "skills": [{ "name": "Cypress", "desc": "Modern E2E.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["SDLC & testing overview", "Types of testing", "Test case writing", "Bug lifecycle & reporting", "Jira for bug tracking", "Exploratory testing"],
            1: ["Selenium WebDriver setup", "XPath & CSS selectors", "Page Object Model (POM)", "TestNG framework", "Maven & build tools", "API testing with Postman", "Rest Assured framework"],
            2: ["Cypress modern E2E", "BDD with Cucumber", "Performance testing (JMeter)", "Security testing basics", "CI/CD integration for QA", "Test reporting & dashboards", "ISTQB certification prep", "Mobile testing"]
        },
        "job_guide": { "resume": "Highlight automation time reduction.", "portfolio": "Complex test suite.", "interview": "Focus on POM pattern." }
    },
    "dsa": {
        "title": "Data Structures & Algorithms",
        "description": "The foundation of computer science and technical interviews.",
        "icon": "binary",
        "milestones": [
            { "level": "Beginner", "title": "Core Foundations", "hoursNeeded": 12, "skills": [{ "name": "Arrays & Strings", "desc": "Foundational manipulation.", "importance": "Critical" }, { "name": "Complexity Analysis", "desc": "Big O notation mastery.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Linear & Non-Linear", "hoursNeeded": 16, "skills": [{ "name": "Linked Lists", "desc": "Dynamic pointers.", "importance": "Critical" }, { "name": "Recursion", "desc": "Divide and conquer.", "importance": "High" }] },
            { "level": "Advanced", "title": "Complex Algorithms", "hoursNeeded": 20, "skills": [{ "name": "Dynamic Programming", "desc": "Optimal subproblems.", "importance": "Critical" }, { "name": "Graph Theory", "desc": "Network algorithms.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Big O notation", "Arrays: insert/delete/search", "String manipulation", "Two Pointer technique", "Sliding Window", "Binary Search"],
            1: ["Linked Lists operations", "Stacks & Queues", "Recursion fundamentals", "Trees (BST, AVL)", "Heaps & Priority Queues", "Hash Maps", "Breadth-First Search", "Depth-First Search"],
            2: ["Dynamic Programming intro", "Memoization vs Tabulation", "Classic DP problems", "Greedy algorithms", "Dijkstra's shortest path", "Floyd Warshall", "Union Find / Disjoint Set", "Topological Sort", "Advanced graph algorithms", "Mock interview practice"]
        },
        "job_guide": { "resume": "Showcase competitive ranks.", "portfolio": "Complex algorithms in repo.", "interview": "Focus on Big O." }
    },
    "python": {
        "title": "Python Programming",
        "description": "General purpose programming for everything from web to AI.",
        "icon": "terminal",
        "milestones": [
            { "level": "Beginner", "title": "Core Syntax", "hoursNeeded": 10, "skills": [{ "name": "Automation", "desc": "Scripting, Scraping.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Data Structures", "hoursNeeded": 12, "skills": [{ "name": "Collections", "desc": "Lists, Dicts, Sets.", "importance": "High" }] },
            { "level": "Advanced", "title": "Frameworks", "hoursNeeded": 14, "skills": [{ "name": "Django", "desc": "Web apps.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["Python setup & syntax", "Variables & data types", "Control flow & loops", "Functions & scope", "File I/O operations"],
            1: ["Lists, tuples, sets, dicts", "List comprehensions", "OOP: classes & objects", "Modules & packages", "Exception handling", "Regular expressions"],
            2: ["Flask web framework", "Django MTV pattern", "REST APIs with FastAPI", "Web scraping (BeautifulSoup)", "Automation scripts", "Unit testing (pytest)", "Packaging Python apps"]
        },
        "job_guide": { "resume": "List automation scripts.", "portfolio": "Functional tools.", "interview": "Focus on Pythonic idioms." }
    },
    "ethical-hacking": {
        "title": "Ethical Hacking",
        "description": "Identifying and fixing security gaps legally.",
        "icon": "ghost",
        "milestones": [
            { "level": "Beginner", "title": "Footprinting", "hoursNeeded": 10, "skills": [{ "name": "Recon", "desc": "Scanning networks.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Scanning & Exploitation", "hoursNeeded": 16, "skills": [{ "name": "Networks", "desc": "Identifying hosts.", "importance": "High" }] },
            { "level": "Advanced", "title": "Post Exploitation", "hoursNeeded": 18, "skills": [{ "name": "Post-Exploit", "desc": "Maintenance.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["CEH certification overview", "Legal & ethical framework", "Footprinting techniques", "Google Dorking", "WHOIS & DNS enumeration"],
            1: ["Nmap scanning", "Vulnerability scanning (Nessus)", "Metasploit basics", "Exploiting web vulnerabilities", "Password attacks (Hydra)", "Wireless hacking", "Social engineering", "Phishing simulation"],
            2: ["Post-exploitation techniques", "Privilege escalation", "Pivoting & port forwarding", "Covering tracks", "Report writing", "Bug bounty methodology", "HackTheBox walkthroughs", "Career in ethical hacking"]
        },
        "job_guide": { "resume": "Certifications (CEH, PenTest+).", "portfolio": "Retired box write-ups.", "interview": "Ethics defense." }
    },
    "iot": {
        "title": "Internet of Things (IoT)",
        "description": "Interconnecting physical devices with the internet.",
        "icon": "webhook",
        "milestones": [
            { "level": "Beginner", "title": "Sensors & Microcontrollers", "hoursNeeded": 10, "skills": [{ "name": "ESP32", "desc": "Arduino connectivity.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Communication Protocols", "hoursNeeded": 14, "skills": [{ "name": "MQTT", "desc": "Device communication.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Cloud & Analytics", "hoursNeeded": 16, "skills": [{ "name": "AWS IoT", "desc": "Cloud management.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["IoT ecosystem overview", "Arduino & ESP32 basics", "GPIO pins & sensors", "LED, motor control", "Reading sensor data"],
            1: ["MQTT protocol", "Node-RED flows", "LoRaWAN networks", "Bluetooth & WiFi IoT", "Edge computing", "Data collection pipelines", "IoT dashboards"],
            2: ["AWS IoT Core", "Azure IoT Hub", "Predictive maintenance", "Anomaly detection in IoT", "IoT security", "Edge AI (TinyML)", "Smart home project", "Industry 4.0 use cases"]
        },
        "job_guide": { "resume": "Telemetry data projects.", "portfolio": "Smart prototypes.", "interview": "Low-power logic." }
    },

    // --- MANAGEMENT & BUSINESS (5 Categories) ---
    "mba": {
        "title": "MBA",
        "description": "Leading organizations and managing global operations.",
        "icon": "graduation-cap",
        "milestones": [
            { "level": "Foundation", "title": "Core Management", "hoursNeeded": 12, "skills": [{ "name": "Org Behavior", "desc": "Hierarchy, Teams.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Strategy & Finance", "hoursNeeded": 16, "skills": [{ "name": "Market Positioning", "desc": "Competitive analysis.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Leadership & Execution", "hoursNeeded": 14, "skills": [{ "name": "Change Mgmt", "desc": "Leading transformation.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Management fundamentals", "Organizational behavior", "Team dynamics", "Decision-making frameworks", "Business ethics", "Communication skills"],
            1: ["SWOT & PESTLE analysis", "Porter's Five Forces", "Financial statements basics", "NPV, IRR, Cash flows", "Marketing mix (4Ps)", "Consumer behavior", "Operations management", "Supply chain basics"],
            2: ["Change management models", "Leadership styles", "Executive presence", "Negotiation skills", "Entrepreneurship & innovation", "Case study method", "MBA interview prep", "Career transition strategy"]
        },
        "job_guide": { "resume": "Quantify leadership impact.", "portfolio": "Corporate mentors.", "interview": "Behavioral cases." }
    },
    "pgdm": {
        "title": "PGDM",
        "description": "Practical post-grad diploma in management.",
        "icon": "scroll",
        "milestones": [
            { "level": "Foundation", "title": "Theory & Economics", "hoursNeeded": 10, "skills": [{ "name": "Economics", "desc": "Micro/Macro.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Operations & HR", "hoursNeeded": 14, "skills": [{ "name": "Supply Chain", "desc": "Operational excellence.", "importance": "High" }] },
            { "level": "Advanced", "title": "Finance & Strategy", "hoursNeeded": 14, "skills": [{ "name": "Budgeting", "desc": "Capital allocation.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["PGDM program overview", "Microeconomics basics", "Macroeconomics essentials", "Business law fundamentals", "Quantitative methods"],
            1: ["HR management", "Recruitment & selection", "Supply chain management", "Logistics & warehousing", "Project management (PMI)", "ERP systems (SAP basics)", "Operations research"],
            2: ["Corporate finance", "Working capital management", "Strategic management", "International business", "Business plan writing", "Internship preparation", "Placement strategy"]
        },
        "job_guide": { "resume": "Highlight internships.", "portfolio": "ERP/SAP certs.", "interview": "Situational problems." }
    },
    "business-analytics": {
        "title": "Business Analytics",
        "description": "Using data analysis to drive strategic improvements.",
        "icon": "bar-chart-big",
        "milestones": [
            { "level": "Beginner", "title": "Excel & Statistics", "hoursNeeded": 10, "skills": [{ "name": "Modeling", "desc": "Pivot tables, macros.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "BI & Dashboards", "hoursNeeded": 14, "skills": [{ "name": "Tableau", "desc": "Dynamic dashboards.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Predictive Analytics", "hoursNeeded": 16, "skills": [{ "name": "R/Python", "desc": "Data science labs.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Excel advanced features", "Pivot Tables & VLOOKUP", "Descriptive statistics", "Data cleaning in Excel", "Statistical distributions"],
            1: ["Tableau Desktop basics", "Power BI setup", "Dashboard design principles", "SQL for business analysts", "KPI definition & tracking", "Google Analytics basics", "A/B Testing"],
            2: ["R programming for analytics", "Python for business data", "Regression models", "Customer segmentation", "Forecasting models", "Storytelling with data", "Business case presentations", "Analytics certification prep"]
        },
        "job_guide": { "resume": "Showcase dashboards.", "portfolio": "Data blog posts.", "interview": "Explain tech to non-tech." }
    },
    "product-management": {
        "title": "Product Management",
        "description": "Leading product life-cycles from ideation to launch.",
        "icon": "package",
        "milestones": [
            { "level": "Beginner", "title": "Ideation & Discovery", "hoursNeeded": 10, "skills": [{ "name": "User Research", "desc": "Validating problems.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Agile Execution", "hoursNeeded": 14, "skills": [{ "name": "PRD Writing", "desc": "Defining requirements.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Launch & Growth", "hoursNeeded": 14, "skills": [{ "name": "Growth Hacking", "desc": "Scaling users.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["PM role & responsibilities", "Problem framing", "User interviews", "Jobs-to-be-done framework", "Product vision & strategy"],
            1: ["PRD writing guide", "User stories & epics", "Agile & Scrum", "Sprint planning", "Prioritization (RICE, MoSCoW)", "Data-driven decisions", "Technical literacy for PMs"],
            2: ["Product launch planning", "GTM strategy", "North Star metric", "Growth loops", "Monetization models", "PM interview prep", "Product teardown analysis", "Building PM portfolio"]
        },
        "job_guide": { "resume": "Focus on metrics.", "portfolio": "App teardowns.", "interview": "Design a better X." }
    },
    "digital-marketing": {
        "title": "Digital Marketing",
        "description": "Executing online campaigns across digital channels.",
        "icon": "megaphone",
        "milestones": [
            { "level": "Beginner", "title": "SEO & Content", "hoursNeeded": 10, "skills": [{ "name": "Keywords", "desc": "On-page optimization.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Paid Campaigns", "hoursNeeded": 12, "skills": [{ "name": "Meta Ads", "desc": "Targeted campaigns.", "importance": "High" }] },
            { "level": "Advanced", "title": "Automation & Analytics", "hoursNeeded": 12, "skills": [{ "name": "Email Funnels", "desc": "Retention marketing.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["Digital marketing overview", "SEO fundamentals", "Keyword research", "On-page optimization", "Content marketing strategy"],
            1: ["Google Ads fundamentals", "Meta Ads (Facebook/Instagram)", "Social media marketing", "Influencer marketing", "Landing page optimization", "Email marketing basics"],
            2: ["Marketing automation (HubSpot)", "Google Analytics 4", "Attribution modeling", "CRM fundamentals", "Conversion rate optimization", "Digital marketing certifications"]
        },
        "job_guide": { "resume": "List ROAS benchmarks.", "portfolio": "Viral campaigns.", "interview": "Attribution modeling." }
    },

    // --- FINANCE (4 Categories) ---
    "cfa": {
        "title": "CFA",
        "description": "Chartered Financial Analyst: Global standard for investment.",
        "icon": "coins",
        "milestones": [
            { "level": "Level I", "title": "Ethics & Tools", "hoursNeeded": 16, "skills": [{ "name": "Integrity", "desc": "Trust in markets.", "importance": "Critical" }] },
            { "level": "Level II", "title": "Asset Valuation", "hoursNeeded": 20, "skills": [{ "name": "Equity/Fixed Income", "desc": "Pricing models.", "importance": "Critical" }] },
            { "level": "Level III", "title": "Portfolio Management", "hoursNeeded": 20, "skills": [{ "name": "Wealth planning", "desc": "Institutional logic.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["CFA program overview", "Code of Ethics", "Standards of Professional Conduct", "Quantitative Methods", "Statistics for finance", "TVM (Time Value of Money)", "DCF analysis", "Financial reporting basics"],
            1: ["Equity analysis", "Fixed income pricing", "Derivatives intro", "Alternative investments", "Quant models for valuation", "Corporate finance", "Financial modeling", "Ethics applications in Level II", "Practice exams", "Weak area review"],
            2: ["Portfolio management theory", "Asset allocation strategies", "Performance measurement", "Risk management (IPS)", "Behavioral finance", "Private wealth management", "Institutional portfolio management", "GIPS standards", "Final exam prep", "CFA community networking"]
        },
        "job_guide": { "resume": "Passed levels.", "portfolio": "CFA societies.", "interview": "Technical expertise." }
    },
    "frm": {
        "title": "FRM",
        "description": "Financial Risk Manager: Expert in managing risk.",
        "icon": "shield-alert",
        "milestones": [
            { "level": "Part I", "title": "Quantitative Analysis", "hoursNeeded": 16, "skills": [{ "name": "Market Risk", "desc": "Risk measuring.", "importance": "Critical" }] },
            { "level": "Part II", "title": "Advanced Risk Topics", "hoursNeeded": 18, "skills": [{ "name": "Operational Risk", "desc": "Mgmt frameworks.", "importance": "High" }] },
            { "level": "Expert", "title": "Regulatory Compliance", "hoursNeeded": 14, "skills": [{ "name": "Basel III", "desc": "Global compliance.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["FRM overview & registration", "Probability & statistics", "Regression analysis for risk", "Value at Risk (VaR)", "Market risk fundamentals", "Financial products overview", "Stress testing", "Risk measurement techniques"],
            1: ["Credit risk modeling", "Operational risk frameworks", "Liquidity risk management", "Risk in investment management", "Correlations & copulas", "Advanced VaR methods", "CVA & counterparty credit risk", "Risk data aggregation", "Basel III/IV requirements"],
            2: ["Basel III capital requirements", "MiFID II / Dodd-Frank", "Risk governance frameworks", "Risk reporting", "Emerging market risks", "Fintech & cyber risk", "FRM work experience requirements", "Career paths in risk management"]
        },
        "job_guide": { "resume": "Modeling & compliance.", "portfolio": "Risk tools.", "interview": "Stress test scenarios." }
    },
    "financial-modeling": {
        "title": "Financial Modeling",
        "description": "Representing financial situations for decisions.",
        "icon": "file-spreadsheet",
        "milestones": [
            { "level": "Beginner", "title": "Excel Mastery", "hoursNeeded": 10, "skills": [{ "name": "Shortcuts", "desc": "Modeling speed.", "importance": "High" }] },
            { "level": "Intermediate", "title": "3-Statement Model", "hoursNeeded": 14, "skills": [{ "name": "Linking IS, BS", "desc": "Financial flow.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "LBO & M&A Modeling", "hoursNeeded": 16, "skills": [{ "name": "Scenario analysis", "desc": "Complex transaction modeling.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Excel shortcuts for finance", "Financial statement overview", "Income Statement deep dive", "Balance Sheet analysis", "Cash Flow Statement"],
            1: ["3-Statement model build", "Revenue driver assumptions", "COGS & OpEx modeling", "Working capital schedule", "Debt schedule", "Linking all 3 statements", "Sensitivity analysis"],
            2: ["DCF valuation model", "LBO model fundamentals", "M&A accretion/dilution", "Comps & precedent transactions", "Scenario & sensitivity tables", "Monte Carlo simulation", "Model audit techniques", "WSP/BIWS certification prep"]
        },
        "job_guide": { "resume": "Quantify speed.", "portfolio": "Dummy models.", "interview": "Live modeling tests." }
    },
    "investment-banking": {
        "title": "Investment Banking",
        "description": "Advising on capital raising and M&A deals.",
        "icon": "banknote",
        "milestones": [
            { "level": "Beginner", "title": "Market Awareness", "hoursNeeded": 10, "skills": [{ "name": "Markets", "desc": "Global trends.", "importance": "High" }] },
            { "level": "Intermediate", "title": "Deal Mechanics", "hoursNeeded": 16, "skills": [{ "name": "Structuring", "desc": "Equity/Debt.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Client Advisory", "hoursNeeded": 14, "skills": [{ "name": "Pitches", "desc": "Origination.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["IB industry overview", "Bulge bracket vs boutique", "Capital markets basics", "IPO process", "Equity & debt capital markets"],
            1: ["M&A process walkthrough", "Buy-side vs sell-side", "Deal structuring", "Fairness opinions", "Leveraged buyouts (LBO)", "Valuation methodologies", "Financial modeling for IB", "Pitch book creation"],
            2: ["Client relationship management", "Deal origination", "Syndication & distribution", "Regulatory approval process", "IB interview prep (HireVue)", "Technical interview practice", "Networking in finance", "IB culture & lifestyle"]
        },
        "job_guide": { "resume": "Internships.", "portfolio": "Deal analysts.", "interview": "High-pressure tech." }
    },

    // --- DESIGN (4 Categories) ---
    "ui-ux": {
        "title": "UI/UX Design",
        "description": "Designing intuitive interfaces for digital products.",
        "icon": "framer",
        "milestones": [
            { "level": "Beginner", "title": "Design Fundamentals", "hoursNeeded": 10, "skills": [{ "name": "Contrast", "desc": "Visual hierarchy.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Figma & Prototyping", "hoursNeeded": 14, "skills": [{ "name": "Figma", "desc": "Design systems.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "User Research & Testing", "hoursNeeded": 14, "skills": [{ "name": "Testing", "desc": "Usability labs.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Design principles (CRAP)", "Color theory & palettes", "Typography hierarchy", "Gestalt principles", "Accessibility (WCAG)"],
            1: ["Figma interface overview", "Auto Layout in Figma", "Component libraries", "Design systems", "Mobile first design", "Interaction design", "Micro-animations"],
            2: ["User interviews & surveys", "Usability testing methods", "Heuristic evaluation", "Card sorting & IA", "A/B testing design", "Handoff to developers", "Portfolio for UX roles", "Freelance UX career"]
        },
        "job_guide": { "resume": "Visual design.", "portfolio": "Behance profile.", "interview": "Explain the Why." }
    },
    "graphic-design": {
        "title": "Graphic Design",
        "description": "Visual messaging for print and digital.",
        "icon": "palette",
        "milestones": [
            { "level": "Beginner", "title": "Adobe Suite", "hoursNeeded": 10, "skills": [{ "name": "Photoshop", "desc": "Retouching.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Layout & Print", "hoursNeeded": 12, "skills": [{ "name": "InDesign", "desc": "Magazine/Ads.", "importance": "High" }] },
            { "level": "Advanced", "title": "Brand Identity", "hoursNeeded": 14, "skills": [{ "name": "Illustrator", "desc": "Logo design.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["Design history overview", "Adobe Photoshop basics", "Layer management", "Photo retouching", "Color correction"],
            1: ["InDesign for print", "Grid systems & layout", "Typography in print", "Poster & flyer design", "Magazine layout"],
            2: ["Adobe Illustrator vectors", "Logo design process", "Brand guidelines", "Motion graphics basics (AE)", "Portfolio presentation", "Freelancing as a designer", "Client communication"]
        },
        "job_guide": { "resume": "Visual layout.", "portfolio": "Branding projects.", "interview": "Identity theory." }
    },
    "animation-vfx": {
        "title": "Animation & VFX",
        "description": "Generating animations and effects for movies.",
        "icon": "sparkles",
        "milestones": [
            { "level": "Beginner", "title": "3D Modeling", "hoursNeeded": 12, "skills": [{ "name": "Blender", "desc": "3D basics.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Rigging & Animation", "hoursNeeded": 16, "skills": [{ "name": "Maya", "desc": "Complex movement.", "importance": "High" }] },
            { "level": "Advanced", "title": "VFX & Compositing", "hoursNeeded": 18, "skills": [{ "name": "Houdini", "desc": "Particles and fire.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Animation principles (12 principles)", "Blender interface", "3D modeling basics", "Materials & textures", "Lighting setup", "Basic rendering"],
            1: ["Character rigging in Maya", "Skinning & weight painting", "Walk cycle animation", "Facial animation", "Keyframe animation", "Motion paths", "Camera animation", "Rendering with Arnold"],
            2: ["Houdini for VFX", "Particle simulations", "Fluid & fire effects", "Compositing in Nuke", "Green screen keying", "Color grading", "Showreel compilation", "VFX industry pipeline"]
        },
        "job_guide": { "resume": "Showreel links.", "portfolio": "Vimeo reel.", "interview": "Technical growth." }
    },
    "video-editing": {
        "title": "Video Editing",
        "description": "Assembling footage with sound/grading.",
        "icon": "video",
        "milestones": [
            { "level": "Beginner", "title": "Cutting & Assembly", "hoursNeeded": 8, "skills": [{ "name": "DaVinci", "desc": "Sequence building.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Audio & Motion", "hoursNeeded": 12, "skills": [{ "name": "Mixing", "desc": "Soundscapes.", "importance": "High" }] },
            { "level": "Advanced", "title": "Color Grading", "hoursNeeded": 14, "skills": [{ "name": "Grading", "desc": "Cinematic look.", "importance": "Critical" }] }
        ],
        "dailyTopics": {
            0: ["DaVinci Resolve interface", "Timeline & sequences", "Cuts & transitions", "B-roll techniques", "Pacing for storytelling"],
            1: ["Audio mixing fundamentals", "Fairlight audio in DaVinci", "Motion graphics in Fusion", "Text animations", "After Effects basics", "Sound design"],
            2: ["Color theory for film", "DaVinci Color page", "LUT application", "HDR grading", "Export for YouTube/broadcast", "YouTube channel strategy", "Freelance videography", "Building video portfolio"]
        },
        "job_guide": { "resume": "Styles mix.", "portfolio": "Best 3 edits.", "interview": "Pacing & story." }
    },

    // --- ENGINEERING & PREP (11 Categories) ---
    "m-tech": {
        "title": "M.Tech",
        "description": "Specialized degree in Engineering domains.",
        "icon": "microscope",
        "milestones": [
            { "level": "Foundation", "title": "Core Subjects", "hoursNeeded": 14, "skills": [{ "name": "Maths", "desc": "Adv Engineering.", "importance": "High" }] },
            { "level": "Phase 1", "title": "Specialized Theory", "hoursNeeded": 18, "skills": [{ "name": "Core Branch", "desc": "NPTEL/IIT Mastery.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "Research & Thesis", "hoursNeeded": 20, "skills": [{ "name": "Thesis", "desc": "Peer review.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["M.Tech program selection", "Advanced mathematics", "Linear algebra applications", "Numerical methods", "Research methodology", "Literature review writing", "Academic integrity"],
            1: ["Branch specialization deep-dive", "NPTEL courses selection", "Simulation software (MATLAB)", "Laboratory skills", "Seminar preparation", "Peer-reviewed journals", "Conference paper writing", "Collaboration with supervisors"],
            2: ["Thesis topic finalization", "Research proposal writing", "Experimental design", "Data collection & analysis", "Thesis chapters writing", "Viva preparation", "Research paper submission", "Post-M.Tech career options", "PSU recruitment process", "PhD admission preparation"]
        },
        "job_guide": { "resume": "Papers & projects.", "portfolio": "Thesis blog.", "interview": "Niche expertise." }
    },
    "robotics": {
        "title": "Robotics",
        "description": "Designing and building autonomous robots.",
        "icon": "bot",
        "milestones": [
            { "level": "Beginner", "title": "Arduino & Sensors", "hoursNeeded": 12, "skills": [{ "name": "Sensors", "desc": "Actuators.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "ROS & Control", "hoursNeeded": 16, "skills": [{ "name": "Logic", "desc": "Robot OS.", "importance": "Critical" }] },
            { "level": "Advanced", "title": "AI & Computer Vision", "hoursNeeded": 18, "skills": [{ "name": "CV", "desc": "Object detection.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Robotics overview", "Arduino programming", "Sensors (ultrasonic, IR)", "Servo & DC motors", "Basic robot chassis", "PWM control"],
            1: ["ROS2 installation", "ROS nodes & topics", "URDF robot description", "Gazebo simulation", "Path planning algorithms", "PID control", "Kinematics & dynamics", "Robot localization (SLAM)"],
            2: ["Computer vision (OpenCV)", "Object detection (YOLO)", "Depth cameras", "Robot arm manipulation", "Autonomous navigation", "Drone programming", "ROS2 advanced features", "Robotics competitions", "Industry robotics careers"]
        },
        "job_guide": { "resume": "Hw-Sw integration.", "portfolio": "Robot videos.", "interview": "Kinematics." }
    },
    "embedded-systems": {
        "title": "Embedded Systems",
        "description": "Developing computer systems inside mechanical/electrical systems.",
        "icon": "circuit-board",
        "milestones": [
            { "level": "Beginner", "title": "Low-level C & MCUs", "hoursNeeded": 12, "skills": [{ "name": "Firmware", "desc": "System logic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "ARM Architecture", "hoursNeeded": 14, "skills": [{ "name": "ARM", "desc": "Architecture.", "importance": "High" }] },
            { "level": "Advanced", "title": "RTOS & Protocols", "hoursNeeded": 16, "skills": [{ "name": "Real-time Ops", "desc": "Logic timing.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Embedded systems overview", "C programming for embedded", "Microcontroller architecture (8051)", "GPIO, ADC, DAC", "UART communication", "SPI & I2C protocols"],
            1: ["ARM Cortex-M series", "STM32 microcontroller", "STM32CubeIDE setup", "Interrupt service routines", "Timers & PWM", "HAL drivers", "Bare-metal programming"],
            2: ["RTOS concepts", "FreeRTOS tasks & scheduling", "Semaphores & mutexes", "Boot loaders", "CAN bus protocol", "Ethernet for embedded", "PCB design basics (KiCad)", "Embedded Linux intro", "AUTOSAR for automotive"]
        },
        "job_guide": { "resume": "PCB design.", "portfolio": "Firmware repos.", "interview": "Interrupts." }
    },
    "vlsi": {
        "title": "VLSI Design",
        "description": "Combining transistors into chips.",
        "icon": "microchip",
        "milestones": [
            { "level": "Beginner", "title": "Verilog & HDL", "hoursNeeded": 12, "skills": [{ "name": "HDL", "desc": "Hardware logic.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Physical Design", "hoursNeeded": 16, "skills": [{ "name": "Layout", "desc": "DRC/LVS.", "importance": "High" }] },
            { "level": "Advanced", "title": "Tape-out & SoC", "hoursNeeded": 18, "skills": [{ "name": "System on Chip", "desc": "Complex flows.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["VLSI design overview", "Digital logic review", "Verilog HDL basics", "Combinational circuits", "Sequential logic", "Testbenches"],
            1: ["Synthesis using Design Compiler", "Static timing analysis", "Floorplanning", "Placement & routing", "DRC & LVS checks", "SPICE simulations", "CMOS design fundamentals", "Layout with Cadence"],
            2: ["SoC architecture", "IP integration", "Functional verification (UVM)", "Power analysis & optimization", "Clock domain crossing", "DFT (Design for Test)", "Tape-out checklist", "VLSI job preparation", "Tools: Synopsys/Cadence"]
        },
        "job_guide": { "resume": "IC cycles.", "portfolio": "Circuit designs.", "interview": "Logic testing." }
    },
    "automation": {
        "title": "Industrial Automation",
        "description": "Automating industrial processes with SCADA.",
        "icon": "factory",
        "milestones": [
            { "level": "Beginner", "title": "PLC Programming", "hoursNeeded": 12, "skills": [{ "name": "Logix", "desc": "Programming controllers.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "SCADA & HMI", "hoursNeeded": 14, "skills": [{ "name": "HMI", "desc": "Interface design.", "importance": "High" }] },
            { "level": "Advanced", "title": "Industry 4.0", "hoursNeeded": 14, "skills": [{ "name": "Plant logic", "desc": "Large scale.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["Industrial automation overview", "PLC hardware (Siemens/Rockwell)", "Ladder logic programming", "Function block diagrams", "Structured text (ST)", "Digital & analog I/O"],
            1: ["SCADA systems overview", "SCADA software (Wonderware/InTouch)", "HMI design principles", "Tag databases", "Historian systems", "Alarm management", "Communication protocols (Modbus, Profibus)"],
            2: ["Industry 4.0 concepts", "IIoT integration", "OPC-UA protocol", "Digital twin concepts", "Cybersecurity for OT", "Predictive maintenance automation", "Automation career paths", "PLC certifications (Siemens TIA Portal)"]
        },
        "job_guide": { "resume": "PLC/SCADA certs.", "portfolio": "Line optimization.", "interview": "Safety protocols." }
    },
    "upsc": {
        "title": "UPSC CSE",
        "description": "The Civil Services Examination for IAS/IPS.",
        "icon": "landmark",
        "milestones": [
            { "level": "Phase-I", "title": "Prelims Preparation", "hoursNeeded": 20, "skills": [{ "name": "GS Paper 1", "desc": "History, Geography, Polity.", "importance": "Critical" }] },
            { "level": "Phase-II", "title": "Mains Writing", "hoursNeeded": 20, "skills": [{ "name": "Answer Writing", "desc": "Analytical skills.", "importance": "Critical" }] },
            { "level": "Phase-III", "title": "Interview & Personality", "hoursNeeded": 14, "skills": [{ "name": "Personality", "desc": "Critical thinking.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["UPSC notification & syllabus", "Study plan basics", "Modern History (Spectrum)", "Ancient & Medieval History", "Geography (NCERT 11-12)", "Indian Polity (Laxmikant)", "Economics (Ramesh Singh)", "Environment & Ecology", "Science & Technology", "Current Affairs daily"],
            1: ["Mains answer writing format", "Essay paper practice", "GS 1: Society & Culture", "GS 2: Governance & IR", "GS 3: Economy & Security", "GS 4: Ethics & Integrity", "Case studies for ethics", "Optional subject strategy", "Previous year papers", "Answer evaluation practice"],
            2: ["Personality Test overview", "Mock interview practice", "DAF analysis", "Current affairs depth", "Soft skills for interview", "Body language & communication", "State-level awareness", "UPSC community & mentors", "Revision strategy", "Test series analysis"]
        },
        "job_guide": { "resume": "Govt sector path.", "portfolio": "Current affairs.", "interview": "Civil ethics." }
    },
    "gate": {
        "title": "GATE",
        "description": "Graduate Aptitude Test in Engineering for PSU/M.Tech.",
        "icon": "file-check",
        "milestones": [
            { "level": "Foundation", "title": "Core Engineering Subjects", "hoursNeeded": 18, "skills": [{ "name": "Discipline core", "desc": "Branch specific theory.", "importance": "Critical" }] },
            { "level": "Intermediate", "title": "Problem Solving", "hoursNeeded": 16, "skills": [{ "name": "Numerical", "desc": "Complex engineering math.", "importance": "High" }] },
            { "level": "Advanced", "title": "Test Series & Revision", "hoursNeeded": 14, "skills": [{ "name": "Simulated GATE", "desc": "Time management.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["GATE syllabus analysis", "Core subject 1 (Theory)", "Core subject 2 (Problems)", "Engineering Mathematics", "Aptitude & Reasoning", "Previous year paper analysis", "Weak subject identification", "NPTEL course alignment", "Standard reference books", "Study group formation"],
            1: ["Subject 1: Numerical practice", "Subject 2: Numerical practice", "Mock test analysis", "Error analysis & correction", "Time-bound problem sets", "Formula revision sheets", "Topic-wise practice sets", "Conceptual clarity sessions"],
            2: ["Full GATE mock test 1", "Mock test analysis", "Revision of core formulas", "Last-mile weak areas", "Exam day strategy", "GATE cutoff analysis", "PSU expectations post-GATE", "M.Tech admission process", "GATE score validity & usage"]
        },
        "job_guide": { "resume": "Score based hiring.", "portfolio": "Certificates.", "interview": "Technical core." }
    },
    "ssc": {
        "title": "SSC CGL",
        "description": "Staff Selection Commission for Group B & C posts.",
        "icon": "scroll-text",
        "milestones": [
            { "level": "Tier I", "title": "Qualifying Round", "hoursNeeded": 14, "skills": [{ "name": "Reasoning", "desc": "Aptitude foundations.", "importance": "High" }] },
            { "level": "Tier II", "title": "Selection Round", "hoursNeeded": 16, "skills": [{ "name": "Mathematics", "desc": "Quantitative skills.", "importance": "Critical" }] },
            { "level": "Final", "title": "Document Verification", "hoursNeeded": 8, "skills": [{ "name": "Admin skills", "desc": "Govt protocols.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["SSC CGL exam pattern", "General Intelligence (Reasoning)", "Quantitative Aptitude basics", "English Language basics", "General Awareness", "Previous year papers", "Tier 1 mock tests"],
            1: ["Advanced Maths (Tier II)", "Statistics paper prep", "English: grammar & comprehension", "Reasoning advanced topics", "Current Affairs", "Computer fundamentals", "Mock test Tier II", "Time management"],
            2: ["Document checklist", "Category & reservation rules", "Post preferences & allotment", "Interview prep (if applicable)", "SSC community guidance", "Previous batch toppers strategy", "Final revision"] 
        },
        "job_guide": { "resume": "Govt officer roles.", "portfolio": "Exam scores.", "interview": "Verifying documents." }
    },
    "banking-exams": {
        "title": "Banking Exams",
        "description": "SBI PO, IBPS, and RBI Grade B preparations.",
        "icon": "piggy-bank",
        "milestones": [
            { "level": "Phase 1", "title": "Aptitude & Reasoning", "hoursNeeded": 14, "skills": [{ "name": "Quant", "desc": "Banking math.", "importance": "High" }] },
            { "level": "Phase 2", "title": "Financial Awareness", "hoursNeeded": 14, "skills": [{ "name": "Banking Awareness", "desc": "Economics, Policies.", "importance": "Critical" }] },
            { "level": "Final", "title": "GD & Interview", "hoursNeeded": 10, "skills": [{ "name": "Communication", "desc": "Banking soft skills.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["Exam pattern & syllabus", "Quantitative aptitude basics", "Data interpretation", "Logical reasoning", "Puzzle solving", "Seating arrangement", "Syllogisms", "Current affairs daily"],
            1: ["Banking awareness fundamentals", "RBI functions & policies", "Monetary policy & repo rate", "Financial inclusion schemes", "Budget & economic survey", "English reading comprehension", "Cloze test practice", "Descriptive writing"],
            2: ["Group Discussion techniques", "Banking interview etiquette", "Personal Finance knowledge", "Recent banking news", "Mock GD practice", "HR interview questions", "Document preparation", "IBPS/SBI post joining info", "Salary structure awareness"]
        },
        "job_guide": { "resume": "Banking sector.", "portfolio": "Prep certificates.", "interview": "Financial ethics." }
    },
    "ms-abroad": {
        "title": "MS Abroad",
        "description": "Masters in Science from international universities.",
        "icon": "globe",
        "milestones": [
            { "level": "Phase 1", "title": "Exams & Scores", "hoursNeeded": 14, "skills": [{ "name": "GRE/TOEFL", "desc": "Aptitude & English.", "importance": "Critical" }] },
            { "level": "Phase 2", "title": "Application Building", "hoursNeeded": 14, "skills": [{ "name": "SOP/LOR", "desc": "Narrative building.", "importance": "Critical" }] },
            { "level": "Phase 3", "title": "Visa & Admission", "hoursNeeded": 10, "skills": [{ "name": "Finance Planning", "desc": "International move.", "importance": "Medium" }] }
        ],
        "dailyTopics": {
            0: ["GRE exam overview", "GRE Verbal strategy", "GRE Quantitative practice", "GRE AWA essays", "TOEFL reading & listening", "TOEFL speaking & writing", "Target score setting"],
            1: ["University shortlisting strategy", "SOP writing process", "SOP draft & revision", "LOR request guidance", "CV building for MS", "Portfolio projects", "Application tracker setup", "Scholarship search", "Financial aid options", "Alumni networking"],
            2: ["I-20 & visa application (F-1)", "DS-160 form", "SEVIS registration", "US embassy interview prep", "Funding & stipend basics", "Housing research abroad", "Pre-departure checklist", "On-campus opportunities", "International student community", "Career services abroad"]
        },
        "job_guide": { "resume": "Global profile.", "portfolio": "Study projects.", "interview": "College admissions." }
    },
    "mba-abroad": {
        "title": "MBA Abroad",
        "description": "Management degree from top global b-schools.",
        "icon": "plane",
        "milestones": [
            { "level": "Phase 1", "title": "GMAT & IELTS", "hoursNeeded": 14, "skills": [{ "name": "Quant & Verbal", "desc": "Mgmt aptitude.", "importance": "Critical" }] },
            { "level": "Phase 2", "title": "Application & Essays", "hoursNeeded": 14, "skills": [{ "name": "Essay writing", "desc": "Why MBA?", "importance": "Critical" }] },
            { "level": "Phase 3", "title": "Interview Preparation", "hoursNeeded": 10, "skills": [{ "name": "Case discussion", "desc": "Admissions interview.", "importance": "High" }] }
        ],
        "dailyTopics": {
            0: ["GMAT exam structure", "GMAT Quant (PS & DS)", "GMAT Verbal (CR, RC, SC)", "GMAT AWA & IR", "IELTS preparation overview", "Target score benchmarks"],
            1: ["B-school research & ranking", "Your 'Why MBA' story", "Essay outline writing", "Essay drafting & editing", "Resume for MBA applications", "Recommendation strategy", "Application timeline", "Common app platforms (GMAT Club)", "Diversity & leadership essays", "Waitlist strategy"],
            2: ["MBA interview types (HBS/Wharton)", "Behavioral interview (STAR method)", "Case interview preparation", "Group interview dynamics", "Campus visit & networking", "Scholarship essays", "Mental & financial preparation", "Pre-MBA preparation courses", "Student club involvement planning", "Visa process for MBA"]
        },
        "job_guide": { "resume": "Senior leadership.", "portfolio": "Mgmt essays.", "interview": "Adcom filters." }
    }
};

window.ROADMAP_DATA = ROADMAP_DATA;

// ==============================================================
// PLAYLIST DATA — Unique videos for EVERY course
// ==============================================================
const PLAYLIST_DATA = {
    "data-science": [
        { "id": "ds-v1", "title": "1. Python for Data Science Crash Course", "youtubeId": "LHBE0uhFjNU", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "Which library is used for data manipulation in Python?", "opts": ["NumPy", "Pandas", "Matplotlib", "SciPy"], "ans": 1 }, { "q": "What does NaN stand for?", "opts": ["Not a Number", "Null and Nil", "New Array Node", "None"], "ans": 0 }] },
        { "id": "ds-v2", "title": "2. Statistics for Data Science", "youtubeId": "xxpc-HPKN28", "author": "StatQuest", "testType": "quiz", "quiz": [{ "q": "What is the median of [1,2,3,4,5]?", "opts": ["2", "3", "4", "5"], "ans": 1 }, { "q": "Normal distribution is also called?", "opts": ["Bell Curve", "Pareto", "Bimodal", "Skewed"], "ans": 0 }] },
        { "id": "ds-v3", "title": "3. Pandas & EDA Tutorial", "youtubeId": "vmEHCJofslg", "author": "sentdex", "testType": "data-lab", "task": "Calculate the mean of [10, 20, 30, 40, 50] and explain what EDA means." },
        { "id": "ds-v4", "title": "4. Machine Learning with Scikit-Learn", "youtubeId": "pqNCD_5r0IU", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "Overfitting means the model?", "opts": ["Performs well on test data", "Memorizes training data", "Underfits", "Has high bias"], "ans": 1 }, { "q": "What does cross-validation help with?", "opts": ["Faster training", "Assessing generalization", "Data cleaning", "Model compression"], "ans": 1 }] }
    ],
    "ai": [
        { "id": "ai-v1", "title": "1. AI for Everyone - Introduction", "youtubeId": "JMUxmLyz9W4", "author": "AI Foundations", "testType": "quiz", "quiz": [{ "q": "What is BFS?", "opts": ["Breadth First Search", "Best First Search", "Backward First Scan", "Base Features Set"], "ans": 0 }, { "q": "Which is an AI problem type?", "opts": ["Classification", "Compilation", "Concatenation", "Calibration"], "ans": 0 }] },
        { "id": "ai-v2", "title": "2. Neural Networks Explained", "youtubeId": "aircAruvnKk", "author": "3Blue1Brown", "testType": "quiz", "quiz": [{ "q": "What is a neuron in an ANN?", "opts": ["A unit that processes input", "A memory cell", "A logic gate", "A CPU core"], "ans": 0 }, { "q": "Backpropagation is used for?", "opts": ["Prediction", "Weight updates", "Data loading", "Feature scaling"], "ans": 1 }] },
        { "id": "ai-v3", "title": "3. Transformers & Attention Explained", "youtubeId": "SZorAJ4I-sA", "author": "Computerphile", "testType": "quiz", "quiz": [{ "q": "Transformers use which mechanism?", "opts": ["Convolution", "Attention", "Recurrence", "Pooling"], "ans": 1 }, { "q": "GPT stands for?", "opts": ["General Pre-trained Transformer", "Generative Pre-trained Transformer", "Graph Processing Tool", "Giant Prediction Tensor"], "ans": 1 }] }
    ],
    "ml": [
        { "id": "ml-v1", "title": "1. Machine Learning Full Course", "youtubeId": "NWONeJKn6kc", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "Linear regression predicts?", "opts": ["Continuous values", "Class labels", "Clusters", "Rankings"], "ans": 0 }, { "q": "What is supervised learning?", "opts": ["Learning with labeled data", "Learning without labels", "Learning from rewards", "Learning from queries"], "ans": 0 }] },
        { "id": "ml-v2", "title": "2. XGBoost & Ensemble Methods", "youtubeId": "OtD8wVaFm6E", "author": "StatQuest", "testType": "quiz", "quiz": [{ "q": "XGBoost uses which technique?", "opts": ["Gradient Boosting", "Bagging", "Stacking", "Voting"], "ans": 0 }, { "q": "Random Forest is an example of?", "opts": ["Ensemble method", "Single model", "Neural network", "SVM variant"], "ans": 0 }] },
        { "id": "ml-v3", "title": "3. MLOps & Model Deployment", "youtubeId": "9i3dJ6G-kes", "author": "Weights & Biases", "testType": "quiz", "quiz": [{ "q": "Docker is used for?", "opts": ["Containerization", "Training models", "Data cleaning", "Feature engineering"], "ans": 0 }, { "q": "What is model drift?", "opts": ["Model performance degrading over time", "Model getting faster", "Model retraining", "Model compression"], "ans": 0 }] }
    ],
    "full-stack": [
        { "id": "fs-v1", "title": "1. HTML & CSS Crash Course", "youtubeId": "916GWv2Qs08", "author": "Traversy Media", "testType": "html-lab", "task": "Create a centered div with blue background, white text saying 'Hello World', and 20px padding." },
        { "id": "fs-v2", "title": "2. JavaScript Fundamentals", "youtubeId": "W6NZfCO5SIk", "author": "Programming with Mosh", "testType": "coding-challenge", "task": "Write a JavaScript function that takes an array and returns the sum of all elements." },
        { "id": "fs-v3", "title": "3. React.js Crash Course", "youtubeId": "w7ejDZ8SWv8", "author": "Traversy Media", "testType": "quiz", "quiz": [{ "q": "React is a?", "opts": ["Framework", "Library", "Database", "Language"], "ans": 1 }, { "q": "useState is a?", "opts": ["Lifecycle method", "Hook", "Component", "Router"], "ans": 1 }] },
        { "id": "fs-v4", "title": "4. Node.js & Express API", "youtubeId": "fBNz5xF-Kx4", "author": "Traversy Media", "testType": "quiz", "quiz": [{ "q": "Node.js runs JavaScript on?", "opts": ["Browser", "Server", "Database", "Mobile"], "ans": 1 }, { "q": "HTTP method for creating data?", "opts": ["GET", "POST", "PUT", "DELETE"], "ans": 1 }] },
        { "id": "fs-v5", "title": "5. MongoDB & Mongoose", "youtubeId": "-56x56UppqQ", "author": "Web Dev Simplified", "testType": "quiz", "quiz": [{ "q": "MongoDB stores data as?", "opts": ["Tables", "JSON documents", "XML", "CSV rows"], "ans": 1 }, { "q": "Mongoose is?", "opts": ["A database", "An ODM for MongoDB", "A query language", "A web server"], "ans": 1 }] }
    ],
    "cloud": [
        { "id": "cl-v1", "title": "1. AWS Cloud Practitioner Essentials", "youtubeId": "3hLmDS179YE", "author": "AWS Training", "testType": "quiz", "quiz": [{ "q": "What is EC2?", "opts": ["Compute service", "Storage service", "Database service", "CDN service"], "ans": 0 }, { "q": "IAM manages?", "opts": ["Compute instances", "Access & identities", "Storage buckets", "Networking"], "ans": 1 }] },
        { "id": "cl-v2", "title": "2. AWS S3 & Storage Services", "youtubeId": "tfU0JEZjcsg", "author": "AWS re:Invent", "testType": "quiz", "quiz": [{ "q": "S3 stands for?", "opts": ["Simple Storage Service", "Scalable Sample Storage", "Secure Sync Service", "Structured Storage Solution"], "ans": 0 }, { "q": "S3 bucket names must be?", "opts": ["Globally unique", "Locally unique", "Numeric only", "Case sensitive"], "ans": 0 }] },
        { "id": "cl-v3", "title": "3. Terraform Infrastructure as Code", "youtubeId": "SLB_c_ayRMo", "author": "Techworld with Nana", "testType": "quiz", "quiz": [{ "q": "Terraform is used for?", "opts": ["Code testing", "Infrastructure provisioning", "Micro-service deployment", "Data analysis"], "ans": 1 }, { "q": "terraform apply does what?", "opts": ["Shows plan", "Creates resources", "Destroys resources", "Validates syntax"], "ans": 1 }] }
    ],
    "cyber-security": [
        { "id": "cs-v1", "title": "1. Cybersecurity Full Course for Beginners", "youtubeId": "nzj7u9bf_94", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "What is phishing?", "opts": ["Email fraud attack", "Hardware exploitation", "Malware type", "Network scanning"], "ans": 0 }, { "q": "Firewall purpose?", "opts": ["Encrypt data", "Filter network traffic", "Speed up internet", "Store passwords"], "ans": 1 }] },
        { "id": "cs-v2", "title": "2. Kali Linux & Ethical Hacking", "youtubeId": "3Kq1MIfTWCE", "author": "NetworkChuck", "testType": "quiz", "quiz": [{ "q": "Nmap is used for?", "opts": ["Network scanning", "Password cracking", "Malware analysis", "Log monitoring"], "ans": 0 }, { "q": "Metasploit is a?", "opts": ["Firewall tool", "Penetration testing framework", "VPN software", "Antivirus"], "ans": 1 }] },
        { "id": "cs-v3", "title": "3. SOC Analyst & Incident Response", "youtubeId": "rz_t_XGNFHQ", "author": "Professor Messer", "testType": "quiz", "quiz": [{ "q": "SIEM stands for?", "opts": ["Security Information and Event Management", "Simple Intrusion Event Monitor", "Secure Internet Email Module", "System Integrity Error Monitor"], "ans": 0 }, { "q": "Incident response first step?", "opts": ["Eradication", "Identification", "Recovery", "Containment"], "ans": 1 }] }
    ],
    "devops": [
        { "id": "dv-v1", "title": "1. DevOps Roadmap for Beginners", "youtubeId": "hQcFE0nvGuU", "author": "TechWorld with Nana", "testType": "quiz", "quiz": [{ "q": "DevOps combines?", "opts": ["Development and Operations", "Design and Operations", "Data and Operations", "DevDB and Ops"], "ans": 0 }, { "q": "CI/CD stands for?", "opts": ["Continuous Integration/Deployment", "Core Interface/Delivery", "Code Integration/Diagnostics", "Cloud Integration/Design"], "ans": 0 }] },
        { "id": "dv-v2", "title": "2. Docker Complete Course", "youtubeId": "3c-iBn73dDE", "author": "TechWorld with Nana", "testType": "quiz", "quiz": [{ "q": "Docker containers share?", "opts": ["Hardware only", "OS kernel with host", "Full VM", "Nothing"], "ans": 1 }, { "q": "Dockerfile FROM instruction?", "opts": ["Sets working directory", "Specifies base image", "Runs a command", "Copies files"], "ans": 1 }] },
        { "id": "dv-v3", "title": "3. Kubernetes Complete Course", "youtubeId": "X48VuDVv0do", "author": "TechWorld with Nana", "testType": "quiz", "quiz": [{ "q": "Kubernetes manages?", "opts": ["Containers at scale", "Source code", "Databases", "Networks only"], "ans": 0 }, { "q": "A pod is the smallest?", "opts": ["Node unit", "Deployable unit in K8s", "Service unit", "Volume unit"], "ans": 1 }] }
    ],
    "blockchain": [
        { "id": "bc-v1", "title": "1. Blockchain & Crypto Explained", "youtubeId": "gyMwXuJrbJQ", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "Blockchain is?", "opts": ["A centralized database", "A distributed ledger", "A cloud service", "An OS"], "ans": 1 }, { "q": "Proof of Work is a?", "opts": ["Consensus mechanism", "Encryption type", "Wallet type", "Token standard"], "ans": 0 }] },
        { "id": "bc-v2", "title": "2. Solidity Smart Contract Development", "youtubeId": "M576WGiDBdQ", "author": "freeCodeCamp", "testType": "coding-challenge", "task": "Describe what a smart contract does and write pseudocode for a simple token transfer function." },
        { "id": "bc-v3", "title": "3. Building DApps with Web3.js", "youtubeId": "OwSl2xwl2-w", "author": "EatTheBlocks", "testType": "quiz", "quiz": [{ "q": "Web3.js is used to?", "opts": ["Build web servers", "Interact with Ethereum blockchain", "Mine crypto", "Create NFTs only"], "ans": 1 }, { "q": "MetaMask is a?", "opts": ["Crypto wallet browser extension", "Mining software", "Smart contract language", "Blockchain node"], "ans": 0 }] }
    ],
    "software-testing": [
        { "id": "st-v1", "title": "1. Software Testing Fundamentals", "youtubeId": "TDynSmrzpXw", "author": "TestAutomationU", "testType": "quiz", "quiz": [{ "q": "Unit testing tests?", "opts": ["Individual functions/units", "Entire system", "User interface", "Database"], "ans": 0 }, { "q": "A test case includes?", "opts": ["Only inputs", "Input, steps, expected output", "Code only", "Bug reports"], "ans": 1 }] },
        { "id": "st-v2", "title": "2. Selenium WebDriver Tutorial", "youtubeId": "0pgc_G1Sqkw", "author": "SDET", "testType": "quiz", "quiz": [{ "q": "Selenium automates?", "opts": ["API testing", "Browser interactions", "Database testing", "Mobile testing"], "ans": 1 }, { "q": "XPath is used to?", "opts": ["Style web elements", "Locate elements in DOM", "Send HTTP requests", "Assert responses"], "ans": 1 }] },
        { "id": "st-v3", "title": "3. Cypress Modern Testing", "youtubeId": "5XQOK0v_YRE", "author": "Traversy Media", "testType": "quiz", "quiz": [{ "q": "Cypress runs tests in?", "opts": ["Node only", "Real browser", "Headless only", "Virtual machine"], "ans": 1 }, { "q": "cy.get() is used to?", "opts": ["Make HTTP request", "Select DOM elements", "Assert text", "Click elements"], "ans": 1 }] }
    ],
    "dsa": [
        { "id": "dsa-v1", "title": "1. DSA Full Course - Arrays & Strings", "youtubeId": "RBSGKlAvoiM", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "Array access time complexity?", "opts": ["O(1)", "O(n)", "O(log n)", "O(n²)"], "ans": 0 }, { "q": "Binary search requires?", "opts": ["Unsorted array", "Sorted array", "Linked list", "Hash map"], "ans": 1 }] },
        { "id": "dsa-v2", "title": "2. Linked Lists & Stacks & Queues", "youtubeId": "njTh_OwMljA", "author": "Clement Mihailescu", "testType": "coding-challenge", "task": "Write pseudocode to reverse a linked list. Explain the steps clearly." },
        { "id": "dsa-v3", "title": "3. Trees, Heaps & Graphs", "youtubeId": "fAAZixBzIAI", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "BFS uses which data structure?", "opts": ["Stack", "Queue", "Array", "Heap"], "ans": 1 }, { "q": "DFS uses which data structure?", "opts": ["Queue", "Stack", "Hash Map", "Deque"], "ans": 1 }] },
        { "id": "dsa-v4", "title": "4. Dynamic Programming Masterclass", "youtubeId": "oBt53YbR9Kk", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "Memoization is a form of?", "opts": ["Iteration only", "Top-down DP", "Bottom-up DP", "Greedy"], "ans": 1 }, { "q": "Longest Common Subsequence is a?", "opts": ["Graph problem", "DP problem", "Greedy problem", "Sorting problem"], "ans": 1 }] }
    ],
    "python": [
        { "id": "py-v1", "title": "1. Python Full Course for Beginners", "youtubeId": "rfscVS0vtbw", "author": "Programming with Mosh", "testType": "quiz", "quiz": [{ "q": "Python is?", "opts": ["Compiled language", "Interpreted language", "Assembly language", "Markup language"], "ans": 1 }, { "q": "print() in Python does?", "opts": ["Prints to file", "Displays output", "Gets input", "Imports module"], "ans": 1 }] },
        { "id": "py-v2", "title": "2. Python OOP Tutorial", "youtubeId": "JeznW_7DlB0", "author": "Tech With Tim", "testType": "coding-challenge", "task": "Create a Python class called 'Car' with attributes brand and speed, and a method that prints the car details." },
        { "id": "py-v3", "title": "3. Python Web Development with Flask/Django", "youtubeId": "Z1RJmh_OqeA", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "Flask is?", "opts": ["Full stack framework", "Micro web framework", "Database ORM", "Testing library"], "ans": 1 }, { "q": "Django follows which pattern?", "opts": ["MVC", "MTV", "MVVM", "REST only"], "ans": 1 }] }
    ],
    "ethical-hacking": [
        { "id": "eh-v1", "title": "1. Ethical Hacking Full Course", "youtubeId": "3Kq1MIfTWCE", "author": "freeCodeCamp", "testType": "quiz", "quiz": [{ "q": "White hat hacker is?", "opts": ["Malicious hacker", "Authorized security tester", "Criminal hacker", "Script kiddie"], "ans": 1 }, { "q": "Reconnaissance phase includes?", "opts": ["Exploitation", "Information gathering", "Patching", "Reporting"], "ans": 1 }] },
        { "id": "eh-v2", "title": "2. Penetration Testing with Nmap & Metasploit", "youtubeId": "9Ys_gWf90sM", "author": "NetworkChuck", "testType": "quiz", "quiz": [{ "q": "Nmap flag -sV does?", "opts": ["Ping scan", "Service version detection", "OS fingerprinting", "Port filtering"], "ans": 1 }, { "q": "Metasploit's msfconsole is?", "opts": ["Web interface", "CLI for exploits", "Password manager", "Traffic analyzer"], "ans": 1 }] },
        { "id": "eh-v3", "title": "3. Web App Hacking (OWASP Top 10)", "youtubeId": "VtFuAH19Qz0", "author": "The Cyber Mentor", "testType": "quiz", "quiz": [{ "q": "SQL Injection targets?", "opts": ["Network layer", "OS kernel", "Database via input", "Cloud storage"], "ans": 2 }, { "q": "XSS stands for?", "opts": ["Cross Server Scripting", "Cross-Site Scripting", "Cross-System Sandbox", "Cross-Service Sync"], "ans": 1 }] }
    ],
    "iot": [
        { "id": "iot-v1", "title": "1. IoT & Arduino for Beginners", "youtubeId": "fQ8-FrOQPmE", "author": "Paul McWhorter", "testType": "quiz", "quiz": [{ "q": "GPIO stands for?", "opts": ["General Purpose Input/Output", "Global Pin Interface Output", "Grounded Pin Input Options", "General Protocol I/O"], "ans": 0 }, { "q": "Arduino Uno uses which chip?", "opts": ["ATmega328P", "ESP32", "Raspberry Pi", "ARM Cortex-A53"], "ans": 0 }] },
        { "id": "iot-v2", "title": "2. MQTT Protocol & IoT Communication", "youtubeId": "EIxdz-2rhLs", "author": "HiveMQ", "testType": "quiz", "quiz": [{ "q": "MQTT is a?", "opts": ["Lightweight pub/sub protocol", "HTTP variant", "File transfer protocol", "Blockchain protocol"], "ans": 0 }, { "q": "MQTT broker does?", "opts": ["Generates data", "Routes messages between clients", "Encrypts IoT data", "Manages GPIO pins"], "ans": 1 }] },
        { "id": "iot-v3", "title": "3. AWS IoT Core & Cloud Integration", "youtubeId": "6w9a6y_-T2o", "author": "AWS Online Tech Talks", "testType": "quiz", "quiz": [{ "q": "AWS IoT Core handles?", "opts": ["On-premise data only", "Device to cloud connectivity", "Video streaming", "GPU processing"], "ans": 1 }, { "q": "Digital twin in IoT means?", "opts": ["Two hardware devices", "Virtual copy of physical device", "Twin core processors", "Redundant sensor"], "ans": 1 }] }
    ],
    "mba": [
        { "id": "mba-v1", "title": "1. MBA Core Concepts Overview", "youtubeId": "xm3AzHj2bAo", "author": "IIMA", "testType": "quiz", "quiz": [{ "q": "MBA stands for?", "opts": ["Master of Business Administration", "Management & Business Academy", "Masters in Banking Affairs", "Module-Based Academics"], "ans": 0 }, { "q": "Porter's Five Forces analyzes?", "opts": ["Employee performance", "Industry competitive forces", "Stock prices", "Supply chain"], "ans": 1 }] },
        { "id": "mba-v2", "title": "2. Financial Management for MBAs", "youtubeId": "WEDIj9JBTC8", "author": "IIM Kozhikode", "testType": "quiz", "quiz": [{ "q": "NPV stands for?", "opts": ["Net Present Value", "Net Profit Value", "New Product Valuation", "Net Payback Value"], "ans": 0 }, { "q": "Which ratio measures profitability?", "opts": ["Current Ratio", "Return on Equity", "Debt-to-Equity", "Quick Ratio"], "ans": 1 }] },
        { "id": "mba-v3", "title": "3. Leadership & Organizational Behavior", "youtubeId": "XKUPDUDOBVo", "author": "Harvard Business School", "testType": "quiz", "quiz": [{ "q": "Transactional leadership focuses on?", "opts": ["Inspiration & vision", "Rewards & penalties", "Emotional connection", "Team autonomy"], "ans": 1 }, { "q": "Maslow's Hierarchy top level is?", "opts": ["Safety", "Belonging", "Esteem", "Self-actualization"], "ans": 3 }] }
    ],
    "pgdm": [
        { "id": "pgdm-v1", "title": "1. PGDM vs MBA - What to Choose", "youtubeId": "jLGkP_PCPFU", "author": "MBA Crystal Ball", "testType": "quiz", "quiz": [{ "q": "PGDM is offered by?", "opts": ["Universities only", "AICTE-approved institutions", "Government colleges only", "IITs only"], "ans": 1 }, { "q": "Supply chain management involves?", "opts": ["Only procurement", "End-to-end product flow", "Marketing only", "Finance only"], "ans": 1 }] },
        { "id": "pgdm-v2", "title": "2. Operations Management & Supply Chain", "youtubeId": "PSpPfqPQGEk", "author": "MIT OpenCourseWare", "testType": "quiz", "quiz": [{ "q": "JIT (Just-in-Time) aims to reduce?", "opts": ["Quality", "Inventory waste", "Customer demand", "Labor cost only"], "ans": 1 }, { "q": "TQM stands for?", "opts": ["Total Quality Management", "Team Quantity Method", "Technical Quality Measure", "Training Quality Module"], "ans": 0 }] }
    ],
    "business-analytics": [
        { "id": "ba-v1", "title": "1. Business Analytics with Excel", "youtubeId": "qILCMK5RMiM", "author": "ExcelIsFun", "testType": "quiz", "quiz": [{ "q": "Pivot Tables are used for?", "opts": ["Drawing charts", "Summarizing data quickly", "Writing macros", "Creating formulas only"], "ans": 1 }, { "q": "VLOOKUP searches in?", "opts": ["First column", "Any column", "Last row", "Diagonal"], "ans": 0 }] },
        { "id": "ba-v2", "title": "2. Tableau Dashboard Design", "youtubeId": "aHaOIvR00So", "author": "Tableau", "testType": "quiz", "quiz": [{ "q": "Tableau is primarily a?", "opts": ["Programming language", "Data visualization tool", "Database", "ETL tool"], "ans": 1 }, { "q": "Calculated fields in Tableau allow?", "opts": ["Scheduling reports", "Creating new data using formulas", "Connecting to databases", "Filtering rows"], "ans": 1 }] },
        { "id": "ba-v3", "title": "3. Predictive Analytics with Python", "youtubeId": "xi0vhXFPegw", "author": "freeCodeCamp", "testType": "data-lab", "task": "Explain the difference between descriptive, predictive, and prescriptive analytics." }
    ],
    "product-management": [
        { "id": "pm-v1", "title": "1. Product Management 101", "youtubeId": "QRZ_l7cVzzU", "author": "Exponent", "testType": "quiz", "quiz": [{ "q": "PRD stands for?", "opts": ["Product Requirement Document", "Project Release Date", "Product Roadmap Draft", "Platform Release Definition"], "ans": 0 }, { "q": "North Star Metric measures?", "opts": ["Company revenue only", "Core user value delivered", "Monthly active users only", "Bug count"], "ans": 1 }] },
        { "id": "pm-v2", "title": "2. Agile & Scrum for Product Managers", "youtubeId": "GzzkpAOxHXs", "author": "Atlassian", "testType": "quiz", "quiz": [{ "q": "Sprint duration is typically?", "opts": ["1 day", "2 weeks", "1 month", "1 year"], "ans": 1 }, { "q": "Product backlog is maintained by?", "opts": ["Project Manager", "Product Owner", "Scrum Master", "Dev Lead"], "ans": 1 }] }
    ],
    "digital-marketing": [
        { "id": "dm-v1", "title": "1. Digital Marketing Full Course", "youtubeId": "wZZnxXyES80", "author": "Simplilearn", "testType": "quiz", "quiz": [{ "q": "SEO stands for?", "opts": ["Search Engine Optimization", "Social Engagement Output", "Site Error Override", "Search Event Operations"], "ans": 0 }, { "q": "CTR means?", "opts": ["Click Through Rate", "Content Transfer Rate", "Customer Tracking Report", "Campaign Total Revenue"], "ans": 0 }] },
        { "id": "dm-v2", "title": "2. Google Ads & Meta Ads Mastery", "youtubeId": "1H_RIHw-aP8", "author": "Google Skillshop", "testType": "quiz", "quiz": [{ "q": "Google Ads billing model is?", "opts": ["Pay per impression only", "Pay per click (PPC)", "Flat monthly fee", "Revenue sharing"], "ans": 1 }, { "q": "A/B testing in marketing tests?", "opts": ["Two versions of a campaign", "Alpha & Beta users", "Annual & bi-annual data", "Ads & Blogs"], "ans": 0 }] },
        { "id": "dm-v3", "title": "3. Email Marketing & Automation", "youtubeId": "75tnPSFKalA", "author": "HubSpot Academy", "testType": "quiz", "quiz": [{ "q": "Email open rate is?", "opts": ["Clicks / Sent", "Opens / Sent", "Replies / Opens", "Unsubscribes / Sent"], "ans": 1 }, { "q": "Marketing automation helps with?", "opts": ["Manual ad design", "Triggered, personalized campaigns", "Physical mail", "Phone calls"], "ans": 1 }] }
    ],
    "cfa": [
        { "id": "cfa-v1", "title": "1. CFA Level 1 - Ethics & Professional Standards", "youtubeId": "HF7LoaJNf2M", "author": "Mark Meldrum CFA", "testType": "quiz", "quiz": [{ "q": "CFA Code of Ethics requires?", "opts": ["Maximize client short-term returns", "Act with integrity and competence", "Follow employer instructions always", "Prioritize personal gain"], "ans": 1 }, { "q": "CFA charter is awarded by?", "opts": ["SEC", "CFA Institute", "FINRA", "Federal Reserve"], "ans": 1 }] },
        { "id": "cfa-v2", "title": "2. Equity & Fixed Income Valuation", "youtubeId": "7CM_MiyY4vY", "author": "IFT CFA", "testType": "quiz", "quiz": [{ "q": "DCF stands for?", "opts": ["Discounted Cash Flow", "Direct Capital Financing", "Diversified Cost Factor", "Dynamic Currency Framework"], "ans": 0 }, { "q": "Bond duration measures?", "opts": ["Credit risk", "Interest rate sensitivity", "Currency risk", "Inflation risk"], "ans": 1 }] },
        { "id": "cfa-v3", "title": "3. Portfolio Management & Wealth Planning", "youtubeId": "KCCjSMv3HYQ", "author": "CFA Institute", "testType": "quiz", "quiz": [{ "q": "Asset allocation is about?", "opts": ["Picking individual stocks", "Distributing investments across asset classes", "Day trading frequency", "Leverage ratio"], "ans": 1 }, { "q": "GIPS are standards for?", "opts": ["Global investment performance", "Governance and integrity", "Global interest policies", "Grant income plans"], "ans": 0 }] }
    ],
    "frm": [
        { "id": "frm-v1", "title": "1. FRM Part 1 - Risk Foundations", "youtubeId": "UJPzMcNVr88", "author": "BionicTurtle", "testType": "quiz", "quiz": [{ "q": "Value at Risk (VaR) measures?", "opts": ["Maximum possible loss", "Potential loss at confidence level", "Average daily return", "Portfolio diversification"], "ans": 1 }, { "q": "Market risk is caused by?", "opts": ["Employee fraud", "Market price fluctuations", "IT failures", "Regulatory changes"], "ans": 1 }] },
        { "id": "frm-v2", "title": "2. Credit Risk & Operational Risk", "youtubeId": "VfKFAIPhXtY", "author": "GARP FRM", "testType": "quiz", "quiz": [{ "q": "Credit risk is the risk of?", "opts": ["Market price changes", "Counterparty default", "IT system failure", "Regulatory penalties"], "ans": 1 }, { "q": "Basel III is a?", "opts": ["Tax treaty", "International banking regulation framework", "Insurance guideline", "Accounting standard"], "ans": 1 }] }
    ],
    "financial-modeling": [
        { "id": "fm-v1", "title": "1. Financial Modeling in Excel - 3 Statement Model", "youtubeId": "NlBiMOJo3oI", "author": "Wall Street Prep", "testType": "quiz", "quiz": [{ "q": "The 3 financial statements are?", "opts": ["P&L, Balance Sheet, Cash Flow", "Revenue, Expenses, Profit", "EBITDA, EPS, ROE", "Budget, Forecast, Variance"], "ans": 0 }, { "q": "Working capital = ?", "opts": ["Current Assets - Current Liabilities", "Fixed Assets - Long-term Debt", "Revenue - COGS", "Total Assets - Total Equity"], "ans": 0 }] },
        { "id": "fm-v2", "title": "2. DCF Valuation Model", "youtubeId": "NlBiMOJo3oI", "author": "WSP Financial Modeling", "testType": "quiz", "quiz": [{ "q": "Terminal value in DCF represents?", "opts": ["Year 1 value", "Value beyond the forecast period", "Salvage value", "Book value"], "ans": 1 }, { "q": "WACC is the?", "opts": ["Weighted Average Cost of Capital", "Weekly Asset Change Calculation", "Working Asset Cash Conversion", "Weighted Amortization Cost Coefficient"], "ans": 0 }] },
        { "id": "fm-v3", "title": "3. LBO Modeling - Private Equity", "youtubeId": "eG9EpHsijMg", "author": "Breaking Into Wall Street", "testType": "quiz", "quiz": [{ "q": "LBO stands for?", "opts": ["Leveraged Buyout", "Long Bond Offer", "Liquid Balance Option", "Low Basis Operations"], "ans": 0 }, { "q": "LBO returns are primarily from?", "opts": ["Dividends", "Debt paydown, EBITDA growth & multiple expansion", "Tax refunds", "Interest income"], "ans": 1 }] }
    ],
    "investment-banking": [
        { "id": "ib-v1", "title": "1. Investment Banking Overview", "youtubeId": "0zbjNKTKF_A", "author": "Wall Street Oasis", "testType": "quiz", "quiz": [{ "q": "Investment banks primarily?", "opts": ["Lend retail money", "Advise on capital markets & M&A", "Insure assets", "Manage pension funds"], "ans": 1 }, { "q": "IPO process involves?", "opts": ["Private sale only", "Company going public via stock exchange", "Buying another company", "Bond issuance only"], "ans": 1 }] },
        { "id": "ib-v2", "title": "2. M&A Deal Process & Valuation", "youtubeId": "GxGTYbNMR2k", "author": "Mergers & Inquisitions", "testType": "quiz", "quiz": [{ "q": "Accretion in M&A means?", "opts": ["Deal decreases acquirer's EPS", "Deal increases acquirer's EPS", "Deal is cash-neutral", "Deal creates debt only"], "ans": 1 }, { "q": "Buy-side M&A advisor represents?", "opts": ["The seller", "The buyer", "The government", "The exchange"], "ans": 1 }] }
    ],
    "ui-ux": [
        { "id": "ux-v1", "title": "1. UI/UX Design Fundamentals", "youtubeId": "c9Wg6i-P7pA", "author": "DesignCode", "testType": "html-lab", "task": "Design a button with a blue background, white text, rounded corners, and a hover effect using CSS." },
        { "id": "ux-v2", "title": "2. Figma Complete Course for Beginners", "youtubeId": "FTFaQWZBqQ8", "author": "DesignCourse", "testType": "quiz", "quiz": [{ "q": "Figma is primarily a?", "opts": ["Code editor", "Design & prototyping tool", "Database tool", "Video editor"], "ans": 1 }, { "q": "Auto Layout in Figma helps with?", "opts": ["Color management", "Responsive component design", "Icon creation", "Export settings"], "ans": 1 }] },
        { "id": "ux-v3", "title": "3. User Research Methods & Usability Testing", "youtubeId": "0pYkHn3--Vc", "author": "NNGroup", "testType": "quiz", "quiz": [{ "q": "Usability testing involves?", "opts": ["Developer code review", "Real users using the product", "Automated scripts", "A/B ad testing"], "ans": 1 }, { "q": "Heuristic evaluation checks?", "opts": ["User emotions", "Adherence to usability principles", "SEO ranking", "Color accuracy"], "ans": 1 }] }
    ],
    "graphic-design": [
        { "id": "gd-v1", "title": "1. Graphic Design Principles", "youtubeId": "a--gYhqjE1k", "author": "Envato Tuts+", "testType": "quiz", "quiz": [{ "q": "CRAP design principles stand for?", "opts": ["Contrast, Repetition, Alignment, Proximity", "Color, Ratio, Art, Position", "Clear, Readable, Artistic, Professional", "Centered, Rounded, Aesthetic, Plain"], "ans": 0 }, { "q": "Kerning refers to?", "opts": ["Space between lines", "Space between letters", "Font weight", "Color saturation"], "ans": 1 }] },
        { "id": "gd-v2", "title": "2. Adobe Photoshop for Beginners", "youtubeId": "IyR_uYsbekU", "author": "Tutorialspoint", "testType": "quiz", "quiz": [{ "q": "Layers in Photoshop allow?", "opts": ["Working on different elements separately", "Faster rendering", "File compression", "Cloud sync"], "ans": 0 }, { "q": "Smart objects in PS allow?", "opts": ["Real-time collaboration", "Non-destructive transformations", "AI generation", "Video editing"], "ans": 1 }] },
        { "id": "gd-v3", "title": "3. Adobe Illustrator Logo Design", "youtubeId": "Ib8UBwf3yow", "author": "Will Paterson", "testType": "quiz", "quiz": [{ "q": "Vector graphics scale without?", "opts": ["Color", "Losing quality", "File size increase", "Layer support"], "ans": 1 }, { "q": "Illustrator's Pen Tool creates?", "opts": ["Pixel art", "Bezier curves & paths", "3D models", "Animations"], "ans": 1 }] }
    ],
    "animation-vfx": [
        { "id": "avfx-v1", "title": "1. Blender 3D - Complete Beginners Guide", "youtubeId": "nIoXOplUvAw", "author": "Grant Abbitt", "testType": "quiz", "quiz": [{ "q": "Blender is a?", "opts": ["2D only tool", "3D modeling & animation software", "Video editor only", "Photo editor"], "ans": 1 }, { "q": "Mesh in 3D modeling is?", "opts": ["A texture map", "A 3D object made of vertices, edges, faces", "A lighting rig", "A camera type"], "ans": 1 }] },
        { "id": "avfx-v2", "title": "2. Character Rigging in Maya", "youtubeId": "biNlpTqG0hM", "author": "CGMeetup", "testType": "quiz", "quiz": [{ "q": "Rigging in animation is?", "opts": ["Adding colors", "Creating a skeleton to animate a character", "Rendering frames", "Compositing layers"], "ans": 1 }, { "q": "IK stands for?", "opts": ["Inverse Kinematics", "Image Key", "Integrated Keyframe", "Inertia Kinetics"], "ans": 0 }] },
        { "id": "avfx-v3", "title": "3. Houdini VFX - Particles & Simulations", "youtubeId": "Tsv8UGqDibc", "author": "Rebelway", "testType": "quiz", "quiz": [{ "q": "Houdini uses a?", "opts": ["Layer-based workflow", "Node-based procedural workflow", "Timeline only workflow", "Bitmap-based workflow"], "ans": 1 }, { "q": "Particle systems in VFX simulate?", "opts": ["Rigged characters", "Natural phenomena (fire, smoke, rain)", "Textures", "Audio waveforms"], "ans": 1 }] }
    ],
    "video-editing": [
        { "id": "ve-v1", "title": "1. DaVinci Resolve for Beginners", "youtubeId": "63Ln33O4p4I", "author": "Darren Mostyn", "testType": "quiz", "quiz": [{ "q": "DaVinci Resolve is primarily used for?", "opts": ["3D animation", "Professional video editing & color grading", "Audio only production", "Web design"], "ans": 1 }, { "q": "The Cut page in DaVinci is designed for?", "opts": ["Color correction", "Fast editing", "Audio mixing", "Export"], "ans": 1 }] },
        { "id": "ve-v2", "title": "2. Audio Mixing & Sound Design", "youtubeId": "D-ra0mPQcCE", "author": "In The Mix", "testType": "quiz", "quiz": [{ "q": "dB stands for?", "opts": ["Digital Bits", "Decibels", "Data Blocks", "Dynamic Bass"], "ans": 1 }, { "q": "Compression in audio does?", "opts": ["Reduces file size", "Controls dynamic range", "Adds reverb", "Increases pitch"], "ans": 1 }] },
        { "id": "ve-v3", "title": "3. Color Grading & LUTs", "youtubeId": "eMa--zCQqvE", "author": "FilmRiot", "testType": "quiz", "quiz": [{ "q": "LUT stands for?", "opts": ["Look Up Table", "Linear Undo Tool", "Luma Utility Transform", "Layer Unification Technique"], "ans": 0 }, { "q": "Color grading purpose is?", "opts": ["Increase video resolution", "Create consistent cinematic look", "Reduce file size", "Add captions"], "ans": 1 }] }
    ],
    "upsc": [
        { "id": "upsc-v1", "title": "1. UPSC Strategy & Syllabus Breakdown", "youtubeId": "V_V7e9G6-wM", "author": "Drishti IAS", "testType": "quiz", "quiz": [{ "q": "UPSC stands for?", "opts": ["Union Public Service Commission", "University Public Study Center", "Universal Prep & Study Council", "Urban Planning Service Commission"], "ans": 0 }, { "q": "CSE Prelims has how many papers?", "opts": ["1", "2", "3", "4"], "ans": 1 }] },
        { "id": "upsc-v2", "title": "2. Indian Polity for UPSC (Laxmikant)", "youtubeId": "pMvD-Ax0yoo", "author": "BYJU's IAS", "testType": "quiz", "quiz": [{ "q": "Article 14 guarantees?", "opts": ["Freedom of speech", "Equality before law", "Right to education", "Right to life"], "ans": 1 }, { "q": "Fundamental Rights are in which part of Constitution?", "opts": ["Part II", "Part III", "Part IV", "Part V"], "ans": 1 }] },
        { "id": "upsc-v3", "title": "3. UPSC Mains Answer Writing", "youtubeId": "Bq2-VBRiCKg", "author": "Insights IAS", "testType": "quiz", "quiz": [{ "q": "UPSC Mains has how many GS papers?", "opts": ["2", "4", "6", "8"], "ans": 1 }, { "q": "Essay paper word limit is?", "opts": ["500 words", "800 words", "1000-1200 words", "2000 words"], "ans": 2 }] }
    ],
    "gate": [
        { "id": "gate-v1", "title": "1. GATE Preparation Strategy", "youtubeId": "EN4fPBX22is", "author": "NPTEL GATE", "testType": "quiz", "quiz": [{ "q": "GATE stands for?", "opts": ["Graduate Aptitude Test in Engineering", "Graduate Admission Test for Excellence", "General Aptitude Technology Exam", "Graduate Applications & Technical Exam"], "ans": 0 }, { "q": "GATE score is valid for?", "opts": ["1 year", "2 years", "3 years", "5 years"], "ans": 2 }] },
        { "id": "gate-v2", "title": "2. Engineering Mathematics for GATE", "youtubeId": "Q9CtMRRzSf0", "author": "NPTEL", "testType": "quiz", "quiz": [{ "q": "Linear Algebra topics include?", "opts": ["Matrices, Eigenvalues", "Thermodynamics", "Fluid Mechanics", "Chemical Reactions"], "ans": 0 }, { "q": "GATE exam duration?", "opts": ["1 hour", "2 hours", "3 hours", "4 hours"], "ans": 2 }] },
        { "id": "gate-v3", "title": "3. GATE Mock Test Analysis Strategy", "youtubeId": "rR4n-0KYeKQ", "author": "Made Easy", "testType": "quiz", "quiz": [{ "q": "Negative marking in GATE is?", "opts": ["No negatives", "1/3 for 1 mark questions", "1/2 for all questions", "Same for all"], "ans": 1 }, { "q": "PSU recruitment via GATE requires?", "opts": ["State level exam", "GATE score above cutoff", "Only interviews", "Only group discussions"], "ans": 1 }] }
    ],
    "ssc": [
        { "id": "ssc-v1", "title": "1. SSC CGL Complete Strategy", "youtubeId": "jN-S6Z7bBHo", "author": "Adda247", "testType": "quiz", "quiz": [{ "q": "SSC CGL Tier 1 has how many sections?", "opts": ["2", "3", "4", "5"], "ans": 2 }, { "q": "SSC CGL is conducted by?", "opts": ["UPSC", "SSC", "IBPS", "State PSC"], "ans": 1 }] },
        { "id": "ssc-v2", "title": "2. Quantitative Aptitude for SSC", "youtubeId": "wCVGEFEXJOI", "author": "Abhinay Maths", "testType": "quiz", "quiz": [{ "q": "Simple Interest formula?", "opts": ["P*R*T/100", "P*(1+R/100)^T", "P+R+T", "P/R*T"], "ans": 0 }, { "q": "LCM of 12 and 18?", "opts": ["6", "24", "36", "72"], "ans": 2 }] }
    ],
    "banking-exams": [
        { "id": "be-v1", "title": "1. Banking Exams Strategy (SBI PO, IBPS)", "youtubeId": "jN-S6Z7bBHo", "author": "Oliveboard", "testType": "quiz", "quiz": [{ "q": "RBI Repo Rate is the rate at which?", "opts": ["Banks lend to public", "RBI lends to banks", "Govt borrows from RBI", "Banks lend to each other"], "ans": 1 }, { "q": "IBPS stands for?", "opts": ["International Bank of Personnel Selection", "Institute of Banking Personnel Selection", "Indian Banking & Placement Services", "Institute of Business & Public Services"], "ans": 1 }] },
        { "id": "be-v2", "title": "2. Data Interpretation for Banking", "youtubeId": "C1VkMp0iGj0", "author": "Gradeup Banking", "testType": "quiz", "quiz": [{ "q": "SBI PO selection has how many phases?", "opts": ["1", "2", "3", "4"], "ans": 2 }, { "q": "CIBIL score range?", "opts": ["0-500", "300-900", "100-750", "1-1000"], "ans": 1 }] }
    ],
    "ms-abroad": [
        { "id": "ms-v1", "title": "1. GRE Preparation Strategy", "youtubeId": "nzj7u9bf_94", "author": "Magoosh GRE", "testType": "quiz", "quiz": [{ "q": "GRE stands for?", "opts": ["Graduate Record Examinations", "General Record Exam", "Graduate Readiness Evaluation", "Global Requirements Exam"], "ans": 0 }, { "q": "GRE score range?", "opts": ["0-300", "260-340", "200-800", "100-170"], "ans": 1 }] },
        { "id": "ms-v2", "title": "2. SOP & LOR Writing for MS", "youtubeId": "CyaVCKxGvhY", "author": "Yocket", "testType": "quiz", "quiz": [{ "q": "SOP stands for?", "opts": ["Statement of Purpose", "Summary of Programs", "Standardized Objective Paper", "Scope of Project"], "ans": 0 }, { "q": "LOR is written by?", "opts": ["The applicant", "Professor or employer", "Parents", "University admin"], "ans": 1 }] },
        { "id": "ms-v3", "title": "3. F-1 Visa Process for MS Students", "youtubeId": "5k3b8B3dWY4", "author": "Study Abroad Life", "testType": "quiz", "quiz": [{ "q": "F-1 visa is for?", "opts": ["Tourism", "Academic study in the US", "Work authorization", "Business visits"], "ans": 1 }, { "q": "SEVIS fee must be paid?", "opts": ["After arrival in US", "Before DS-160 interview", "At the airport", "After graduation"], "ans": 1 }] }
    ],
    "mba-abroad": [
        { "id": "ma-v1", "title": "1. GMAT Preparation Complete Guide", "youtubeId": "V_V7e9G6-wM", "author": "GMAT Club", "testType": "quiz", "quiz": [{ "q": "GMAT quant section tests?", "opts": ["Creative thinking", "Mathematical reasoning", "English grammar", "Case analysis"], "ans": 1 }, { "q": "Top GMAT score for Harvard/Wharton?", "opts": ["600+", "650+", "720-740+", "550+"], "ans": 2 }] },
        { "id": "ma-v2", "title": "2. MBA Essay Writing & Application Tips", "youtubeId": "Z1RJmh_OqeA", "author": "Clear Admit MBA", "testType": "quiz", "quiz": [{ "q": "Most important MBA application component?", "opts": ["GMAT score only", "Holistic: essays, recs, GMAT, experience", "GPA only", "Work experience only"], "ans": 1 }, { "q": "Most MBA programs require recommendations from?", "opts": ["Family", "Professional managers/supervisors", "Friends", "College professors only"], "ans": 1 }] }
    ],
    "m-tech": [
        { "id": "mt-v1", "title": "1. M.Tech Admission & Research Guide", "youtubeId": "tRnWIHl5EZs", "author": "NPTEL", "testType": "quiz", "quiz": [{ "q": "M.Tech admission is through?", "opts": ["GATE score", "UPSC exam", "CAT score", "JEE Advanced"], "ans": 0 }, { "q": "M.Tech program duration is?", "opts": ["1 year", "2 years", "3 years", "4 years"], "ans": 1 }] },
        { "id": "mt-v2", "title": "2. Research Methodology & Thesis Writing", "youtubeId": "xm3AzHj2bAo", "author": "IIT Research Academy", "testType": "quiz", "quiz": [{ "q": "Literature review in research involves?", "opts": ["Writing fiction", "Surveying existing research", "Collecting lab samples", "Teaching students"], "ans": 1 }, { "q": "Plagiarism in thesis submission is?", "opts": ["Acceptable if <50%", "Strictly prohibited", "Allowed for references", "Graded separately"], "ans": 1 }] }
    ],
    "robotics": [
        { "id": "rob-v1", "title": "1. Robotics with Arduino - Complete Guide", "youtubeId": "fQ8-FrOQPmE", "author": "Paul McWhorter", "testType": "quiz", "quiz": [{ "q": "Servo motor controls?", "opts": ["Speed only", "Position/angle", "Power supply", "Communication"], "ans": 1 }, { "q": "PWM stands for?", "opts": ["Pulse Width Modulation", "Power Wire Management", "Parallel Write Mode", "Program Write Method"], "ans": 0 }] },
        { "id": "rob-v2", "title": "2. ROS2 Robot Operating System", "youtubeId": "Gg25GfA456o", "author": "Articulated Robotics", "testType": "quiz", "quiz": [{ "q": "ROS node is?", "opts": ["A robot joint", "A process that performs computation", "A database entry", "A motor type"], "ans": 1 }, { "q": "ROS topic is used for?", "opts": ["Storing configurations", "Asynchronous message passing", "Synchronous function calls", "Event logging"], "ans": 1 }] }
    ],
    "embedded-systems": [
        { "id": "es-v1", "title": "1. Embedded C Programming Complete", "youtubeId": "5rNf3IlbCtU", "author": "Embedded Systems", "testType": "quiz", "quiz": [{ "q": "Bit manipulation in C uses?", "opts": ["Arithmetic operators", "Bitwise operators", "Logical operators", "Pointer operators"], "ans": 1 }, { "q": "UART is a?", "opts": ["Memory type", "Serial communication protocol", "Processor architecture", "OS type"], "ans": 1 }] },
        { "id": "es-v2", "title": "2. STM32 & ARM Cortex Programming", "youtubeId": "hyZS2p1RPVg", "author": "DigiKey Electronics", "testType": "quiz", "quiz": [{ "q": "HAL stands for?", "opts": ["Hardware Abstraction Layer", "High-level Algorithm Library", "Hex Array Logic", "Hardware Allocation Loop"], "ans": 0 }, { "q": "Interrupt handling in embedded?", "opts": ["Blocks main loop", "Responds asynchronously to events", "Runs in user mode only", "Requires OS"], "ans": 1 }] },
        { "id": "es-v3", "title": "3. FreeRTOS - Real-Time OS for Embedded", "youtubeId": "F321087yYy4", "author": "FreeRTOS", "testType": "quiz", "quiz": [{ "q": "RTOS task priority means?", "opts": ["Task file size", "Scheduling importance level", "Memory allocation", "I/O access rights"], "ans": 1 }, { "q": "Semaphore in RTOS is used for?", "opts": ["File management", "Synchronization & mutual exclusion", "Memory allocation", "Clock management"], "ans": 1 }] }
    ],
    "vlsi": [
        { "id": "vlsi-v1", "title": "1. Verilog HDL Complete Tutorial", "youtubeId": "PJGvZSlsLKs", "author": "nandland", "testType": "quiz", "quiz": [{ "q": "Verilog is a?", "opts": ["Software programming language", "Hardware Description Language", "Database query language", "Assembly language"], "ans": 1 }, { "q": "Always block in Verilog triggers on?", "opts": ["Clock edge or signal change", "Every millisecond", "Program start only", "User input"], "ans": 0 }] },
        { "id": "vlsi-v2", "title": "2. CMOS Logic & Physical Design", "youtubeId": "E3lTH9C3A1Y", "author": "NPTEL VLSI", "testType": "quiz", "quiz": [{ "q": "DRC in VLSI checks?", "opts": ["Design rule compliance", "Data Recovery Control", "Dynamic Range Calibration", "Delay Reduction Computation"], "ans": 0 }, { "q": "Standard cell design involves?", "opts": ["Custom transistor layout", "Pre-designed logic cells", "FPGA programming", "PCB design"], "ans": 1 }] }
    ],
    "automation": [
        { "id": "auto-v1", "title": "1. PLC Programming with Ladder Logic", "youtubeId": "U7BmJlAUqxE", "author": "RealPars", "testType": "quiz", "quiz": [{ "q": "PLC stands for?", "opts": ["Programmable Logic Controller", "Physical Line Control", "Parallel Logic Computer", "Processing Line Circuit"], "ans": 0 }, { "q": "Ladder logic rung represents?", "opts": ["A data packet", "A control instruction", "A network segment", "A motor type"], "ans": 1 }] },
        { "id": "auto-v2", "title": "2. SCADA Systems & HMI Design", "youtubeId": "u8SuLiMaHJ0", "author": "Automation Anywhere", "testType": "quiz", "quiz": [{ "q": "SCADA stands for?", "opts": ["Supervisory Control And Data Acquisition", "Sequential Control And Display Algorithm", "Simple Control Automation Design Architecture", "System Control And Digital Automation"], "ans": 0 }, { "q": "HMI purpose is?", "opts": ["Control hardware directly", "Provide operator interface to process", "Store sensor data", "Generate power"], "ans": 1 }] }
    ]
};

window.PLAYLIST_DATA = PLAYLIST_DATA;
