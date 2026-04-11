const ROADMAP_DATA = {
    // --- TECH & SOFTWARE ---
    "data-science": {
        "title": "Data Science",
        "description": "Turning raw data into actionable insights and intelligent systems.",
        "icon": "database",
        "milestones": [
            { "level": "Beginner", "title": "Math & Python Foundations", "skills": [{ "name": "Python", "desc": "Logic, Data Structures, and libraries like NumPy.", "importance": "Critical", "resources": ["https://python.org"] }, { "name": "Statistics", "desc": "Probability, Distributions, and Hypothesis testing.", "importance": "High", "resources": ["https://khanacademy.org"] }] },
            { "level": "Intermediate", "title": "Data Engineering & Viz", "skills": [{ "name": "Pandas", "desc": "Data manipulation and cleaning.", "importance": "Critical", "resources": ["https://pandas.pydata.org"] }, { "name": "Visualization", "desc": "Matplotlib and Seaborn for storytelling.", "importance": "High", "resources": ["https://seaborn.pydata.org"] }] },
            { "level": "Advanced", "title": "Machine Learning Models", "skills": [{ "name": "Scikit-Learn", "desc": "Supervised and Unsupervised learning.", "importance": "Critical", "resources": ["https://scikit-learn.org"] }, { "name": "Big Data Tooling", "desc": "Spark and Hadoop basics.", "importance": "Medium", "resources": ["https://spark.apache.org"] }] }
        ],
        "job_guide": { "resume": "Highlight analytical projects and Kaggle rankings.", "portfolio": "Showcase end-to-end data pipelines on GitHub.", "interview": "Focus on explaining model trade-offs." }
    },
    "ai": {
        "title": "Artificial Intelligence (AI)",
        "description": "Building systems that simulate human intelligence and solve complex problems.",
        "icon": "cpu",
        "milestones": [
            { "level": "Beginner", "title": "Logic & Algebra", "skills": [{ "name": "Linear Algebra", "desc": "Tensors, Matrices, and Vector spaces.", "importance": "Critical", "resources": ["https://ocw.mit.edu"] }, { "name": "Logic Programming", "desc": "Understanding search algorithms and heuristics.", "importance": "High", "resources": ["https://edx.org"] }] },
            { "level": "Intermediate", "title": "Neural Networks", "skills": [{ "name": "Deep Learning", "desc": "Perceptrons, CNNs, and RNNs.", "importance": "Critical", "resources": ["https://deeplearning.ai"] }, { "name": "PyTorch / TensorFlow", "desc": "Building models using modern frameworks.", "importance": "High", "resources": ["https://tensorflow.org"] }] },
            { "level": "Advanced", "title": "Modern AI Paradigms", "skills": [{ "name": "LLMs & Transformers", "desc": "Attention mechanisms and fine-tuning.", "importance": "Critical", "resources": ["https://huggingface.co"] }, { "name": "Reinforcement Learning", "desc": "Q-Learning and policy gradients.", "importance": "Medium", "resources": ["https://gymnasium.farama.org/"] }] }
        ],
        "job_guide": { "resume": "Showcase expertise in deep learning frameworks.", "portfolio": "Demonstrate fine-tuned models or custom AI agents.", "interview": "Expect deep dives into architecture design." }
    },
    "ml": {
        "title": "Machine Learning (ML)",
        "description": "Developing algorithms that allow computers to learn from and make predictions on data.",
        "icon": "brain-circuit",
        "milestones": [
            { "level": "Beginner", "title": "Statistical Learning", "skills": [{ "name": "Regression & Classification", "desc": "Linear regression, Logistic regression, and KNN.", "importance": "Critical", "resources": ["https://coursera.org"] }] },
            { "level": "Intermediate", "title": "Ensemble Methods", "skills": [{ "name": "Random Forests & Boosting", "desc": "XGBoost, LightGBM, and Decision Trees.", "importance": "High", "resources": ["https://xgboost.ai"] }] },
            { "level": "Advanced", "title": "Deployment & MLOps", "skills": [{ "name": "Model Serving", "desc": "Flask/FastAPI for model deployment.", "importance": "High", "resources": ["https://fastapi.tiangolo.com"] }, { "name": "Model Monitoring", "desc": "Drift detection and performance tracking.", "importance": "Medium", "resources": ["https://evidentlyai.com"] }] }
        ],
        "job_guide": { "resume": "Focus on accuracy improvements and business impact.", "portfolio": "Link to ML models deployed as web apps.", "interview": "Practice live coding for ML algorithms." }
    },
    "full-stack": {
        "title": "Full Stack Web Development",
        "description": "Mastering both frontend and backend technologies to build complete web applications.",
        "icon": "layers",
        "milestones": [
            { "level": "Beginner", "title": "Frontend Core", "skills": [{ "name": "HTML/CSS/JS", "desc": "The holy trinity of web structure, style, and logic.", "importance": "Critical", "resources": ["https://developer.mozilla.org"] }] },
            { "level": "Intermediate", "title": "Frontend Frameworks & Backend", "skills": [{ "name": "React / Vue", "desc": "Reactive UI development.", "importance": "Critical", "resources": ["https://react.dev"] }, { "name": "Node.js / Express", "desc": "Building robust APIs.", "importance": "High", "resources": ["https://nodejs.org"] }] },
            { "level": "Advanced", "title": "Database & DevOps", "skills": [{ "name": "PostgreSQL / MongoDB", "desc": "Relational and document-based data storage.", "importance": "High", "resources": ["https://postgresql.org"] }, { "name": "Docker & Deployment", "desc": "Containerization and CI/CD pipelines.", "importance": "Medium", "resources": ["https://docker.com"] }] }
        ],
        "job_guide": { "resume": "List your tech stack clearly (e.g., MERN, MEAN).", "portfolio": "Show at least one full-featured SaaS project.", "interview": "Review system design and API best practices." }
    },
    "cloud": {
        "title": "Cloud Computing",
        "description": "Designing and managing scalable infrastructure on platforms like AWS, Azure, and GCP.",
        "icon": "cloud",
        "milestones": [
            { "level": "Beginner", "title": "Cloud Fundamentals", "skills": [{ "name": "VPC & Networking", "desc": "Understanding subnets, routing, and IP addressing.", "importance": "Critical", "resources": ["https://aws.amazon.com/training"] }] },
            { "level": "Intermediate", "title": "Compute & Storage", "skills": [{ "name": "EC2 / S3 / Lambda", "desc": "Serverless and compute instances.", "importance": "High", "resources": ["https://azure.microsoft.com"] }] },
            { "level": "Advanced", "title": "Infrastructure as Code", "skills": [{ "name": "Terraform / CloudFormation", "desc": "Automating cloud provisioning.", "importance": "Critical", "resources": ["https://terraform.io"] }] }
        ],
        "job_guide": { "resume": "Get AWS/Azure certifications.", "portfolio": "Build a multi-region scalable architecture on a cloud provider.", "interview": "Focus on cost-optimization and security." }
    },
    "cyber-security": {
        "title": "Cyber Security",
        "description": "Safeguarding digital assets and networks from malicious attacks and data breaches.",
        "icon": "shield-check",
        "milestones": [
            { "level": "Beginner", "title": "Networking & OS", "skills": [{ "name": "TCP/IP Mastery", "desc": "How data moves across the internet.", "importance": "Critical", "resources": ["https://cisco.com"] }] },
            { "level": "Intermediate", "title": "Penetration Testing", "skills": [{ "name": "Kali Linux Tools", "desc": "Metasploit, Nmap, and Wireshark.", "importance": "High", "resources": ["https://kali.org"] }] },
            { "level": "Advanced", "title": "Security Architecture", "skills": [{ "name": "Incident Response", "desc": "Detecting and mitigating active threats.", "importance": "Critical", "resources": ["https://sans.org"] }] }
        ],
        "job_guide": { "resume": "List bug bounty findings and certifications like OSCP or CEH.", "portfolio": "Document CTF (Capture The Flag) solutions.", "interview": "Be ready to live-demo a vulnerability exploit." }
    },
    "devops": {
        "title": "DevOps",
        "description": "Bridging the gap between software development and IT operations through automation.",
        "icon": "infinity",
        "milestones": [
            { "level": "Beginner", "title": "Linux & Git", "skills": [{ "name": "Linux Admin", "desc": "Shell scripting and system management.", "importance": "Critical", "resources": ["https://linux.org"] }] },
            { "level": "Intermediate", "title": "CI/CD & Containers", "skills": [{ "name": "Jenkins / GitHub Actions", "desc": "Automated build and test pipelines.", "importance": "High", "resources": ["https://github.com/features/actions"] }] },
            { "level": "Advanced", "title": "Orchestration", "skills": [{ "name": "Kubernetes", "desc": "Managing containerized apps at scale.", "importance": "Critical", "resources": ["https://kubernetes.io"] }] }
        ],
        "job_guide": { "resume": "Showcase experience with zero-downtime deployments.", "portfolio": "A fully automated deployment pipeline project.", "interview": "Study site reliability engineering (SRE) principles." }
    },
    "blockchain": {
        "title": "Blockchain Technology",
        "description": "Developing decentralized applications and smart contracts using distributed ledger tech.",
        "icon": "link-2",
        "milestones": [
            { "level": "Beginner", "title": "Cryptography & P2P", "skills": [{ "name": "Hash Functions", "desc": "Consensus mechanisms like PoW and PoS.", "importance": "Critical", "resources": ["https://bitcoin.org"] }] },
            { "level": "Intermediate", "title": "Smart Contracts", "skills": [{ "name": "Solidity", "desc": "Writing logic for the Ethereum Virtual Machine.", "importance": "Critical", "resources": ["https://soliditylang.org"] }] },
            { "level": "Advanced", "title": "DApp Development", "skills": [{ "name": "Web3.js / Ethers.js", "desc": "Connecting frontend to blockchain data.", "importance": "High", "resources": ["https://web3js.org"] }] }
        ],
        "job_guide": { "resume": "Highlight smart contract security audits.", "portfolio": "Deploy a custom token or NFT marketplace on a testnet.", "interview": "Understand gas optimization and reentrancy attacks." }
    },
    "software-testing": {
        "title": "Software Testing",
        "description": "Ensuring software quality through rigorous manual and automated testing methodologies.",
        "icon": "badge-check",
        "milestones": [
            { "level": "Beginner", "title": "Manual Testing", "skills": [{ "name": "Bug Lifecycle", "desc": "Writing effective bug reports and test cases.", "importance": "Critical", "resources": ["https://istqb.org"] }] },
            { "level": "Intermediate", "title": "Automation Basics", "skills": [{ "name": "Selenium / Selenium Grid", "desc": "Cross-browser testing automation.", "importance": "High", "resources": ["https://selenium.dev"] }] },
            { "level": "Advanced", "title": "Advanced Frameworks", "skills": [{ "name": "Playwright / Cypress", "desc": "Modern E2E testing for SPAs.", "importance": "High", "resources": ["https://playwright.dev"] }] }
        ],
        "job_guide": { "resume": "Highlight reduced manual testing time through automation.", "portfolio": "A test suite covering a complex web application.", "interview": "Focus on testing patterns like POM (Page Object Model)." }
    },
    "dsa": {
        "title": "Data Structures & Algorithms",
        "description": "The foundation of computer science and technical interviews.",
        "icon": "binary",
        "milestones": [
            { "level": "Beginner", "title": "Fundamental Structures", "skills": [{ "name": "Arrays & Strings", "desc": "Manipulation, searching, and sorting basics.", "importance": "Critical", "resources": ["https://leetcode.com"] }, { "name": "Linked Lists & Stacks", "desc": "Memory management and linear data flow.", "importance": "High", "resources": ["https://geeksforgeeks.org"] }] },
            { "level": "Intermediate", "title": "Non-Linear Structures", "skills": [{ "name": "Trees & Graphs", "desc": "BFS, DFS, and tree traversals.", "importance": "Critical", "resources": ["https://visualgo.net"] }, { "name": "Hashing & Heaps", "desc": "Efficiency and priority management.", "importance": "High", "resources": ["https://hackerrank.com"] }] },
            { "level": "Advanced", "title": "Optimization Paradigms", "skills": [{ "name": "Dynamic Programming", "desc": "Overlapping subproblems and memoization.", "importance": "Critical", "resources": ["https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns"] }, { "name": "Greedy & Backtracking", "desc": "Local optimization and exhaustive search.", "importance": "Medium", "resources": ["https://algorithm-visualizer.org/"] }] }
        ],
        "job_guide": { "resume": "Showcase competitive programming certificates or rankings.", "portfolio": "Implement complex algorithms from scratch on GitHub.", "interview": "Focus on Time and Space Complexity (Big O notation)." }
    },

    // --- MANAGEMENT & BUSINESS ---
    "mba": {
        "title": "MBA",
        "description": "Advanced business administration to lead organizations and manage global scale operations.",
        "icon": "graduation-cap",
        "milestones": [
            { "level": "Phase 1", "title": "Core Foundations", "skills": [{ "name": "Business Strategy", "desc": "Competitive analysis and market positioning.", "importance": "Critical", "resources": ["https://hbr.org"] }] },
            { "level": "Phase 2", "title": "Functional Mastery", "skills": [{ "name": "Finance & Analytics", "desc": "Data-driven decision making.", "importance": "High", "resources": ["https://investopedia.com"] }] },
            { "level": "Phase 3", "title": "Leadership & Networking", "skills": [{ "name": "Strategic Leadership", "desc": "Managing teams and organisational change.", "importance": "High", "resources": ["https://forbes.com"] }] }
        ],
        "job_guide": { "resume": "Focus on quantifying impact and leadership roles.", "portfolio": "Build a network of corporate mentors.", "interview": "Excel at case studies and behavioral questions." }
    },
    "pgdm": {
        "title": "PGDM",
        "description": "Post-graduate diploma in management with a focus on practical, industry-aligned skillsets.",
        "icon": "scroll",
        "milestones": [
            { "level": "Phase 1", "title": "Industry Orientation", "skills": [{ "name": "Operational Excellence", "desc": "Supply chain and operations basics.", "importance": "High", "resources": ["https://ascm.org"] }] },
            { "level": "Phase 2", "title": "Corporate Readiness", "skills": [{ "name": "Corporate Finance", "desc": "Budgeting and financial forecasting.", "importance": "High", "resources": ["https://finance.yahoo.com"] }] }
        ],
        "job_guide": { "resume": "Highlight internships and industry projects.", "portfolio": "Certification in specific management tools (ERP, SAP).", "interview": "Focus on situational business problems." }
    },
    "business-analytics": {
        "title": "Business Analytics",
        "description": "Using data analysis to optimize business processes and drive strategic improvements.",
        "icon": "bar-chart-big",
        "milestones": [
            { "level": "Beginner", "title": "Excel & Stats", "skills": [{ "name": "Advanced Excel", "desc": "Pivot tables, macros, and financial modeling.", "importance": "Critical", "resources": ["https://microsoft.com/excel"] }] },
            { "level": "Intermediate", "title": "BI Tools", "skills": [{ "name": "Tableau / Power BI", "desc": "Building dynamic business dashboards.", "importance": "Critical", "resources": ["https://tableau.com"] }] },
            { "level": "Advanced", "title": "Strategic Modeling", "skills": [{ "name": "SQL for Business", "desc": "Extracting insights from large DBs.", "importance": "High", "resources": ["https://sqlzoo.net"] }] }
        ],
        "job_guide": { "resume": "Showcase dashboards created for real business cases.", "portfolio": "A LinkedIn post or blog explaining a data-driven business insight.", "interview": "Practice explaining tech insights to non-tech stakeholders." }
    },
    "product-management": {
        "title": "Product Management",
        "description": "Leading the lifecycle of a product from initial ideation to launch and optimization.",
        "icon": "package",
        "milestones": [
            { "level": "Beginner", "title": "Empathy & Ideation", "skills": [{ "name": "User Research", "desc": "Validating problems and user interviews.", "importance": "Critical", "resources": ["https://nngroup.com"] }] },
            { "level": "Intermediate", "title": "Agile & Delivery", "skills": [{ "name": "PRD Writing", "desc": "Defining requirements clearly.", "importance": "Critical", "resources": ["https://productschool.com"] }] },
            { "level": "Advanced", "title": "Growth & Strategy", "skills": [{ "name": "Product Analytics", "desc": "Tracking metrics like DAU and Retention.", "importance": "High", "resources": ["https://mixpanel.com"] }] }
        ],
        "job_guide": { "resume": "Focus on 'launched' products and specific impact metrics.", "portfolio": "A teardown of a popular app with suggested improvements.", "interview": "Master the 'design a better X' style questions." }
    },
    "digital-marketing": {
        "title": "Digital Marketing",
        "description": "Strategizing and executing online marketing campaigns across various digital channels.",
        "icon": "megaphone",
        "milestones": [
            { "level": "Beginner", "title": "Content & SEO", "skills": [{ "name": "SEO Foundations", "desc": "Keywords and On-page optimization.", "importance": "Critical", "resources": ["https://moz.com"] }] },
            { "level": "Intermediate", "title": "Paid Media", "skills": [{ "name": "Google Ads / Meta Ads", "desc": "Running targeted ad campaigns.", "importance": "High", "resources": ["https://skillshop.exceedlms.com"] }] },
            { "level": "Advanced", "title": "Automation & CRM", "skills": [{ "name": "Email Marketing", "desc": "HubSpot/Mailchimp automation.", "importance": "High", "resources": ["https://academy.hubspot.com"] }] }
        ],
        "job_guide": { "resume": "List ROAS (Return On Ad Spend) benchmarks you've achieved.", "portfolio": "Showcase a campaign that went viral or improved sales.", "interview": "Understand analytics and attribution modeling." }
    },

    // --- FINANCE ---
    "cfa": {
        "title": "CFA",
        "description": "Chartered Financial Analyst: The global standard for investment professional certification.",
        "icon": "coins",
        "milestones": [
            { "level": "Level I", "title": "Investment Tools", "skills": [{ "name": "Ethical Standards", "desc": "Integrity and trust in financial markets.", "importance": "Critical", "resources": ["https://cfainstitute.org"] }] },
            { "level": "Level II", "title": "Asset Valuation", "skills": [{ "name": "Equity/Fixed Income", "desc": "Deep dive into financial instruments.", "importance": "High", "resources": ["https://investopedia.com"] }] }
        ],
        "job_guide": { "resume": "Highlight passed levels of the CFA exam.", "portfolio": "Network through local CFA societies.", "interview": "Deep technical knowledge of financial statements." }
    },
    "frm": {
        "title": "FRM",
        "description": "Financial Risk Manager: Expert certification for managing financial and operational risks.",
        "icon": "shield-alert",
        "milestones": [
            { "level": "Part I", "title": "Risk Foundation", "skills": [{ "name": "Quant Analysis", "desc": "Measuring and managing market risk.", "importance": "Critical", "resources": ["https://garp.org"] }] },
            { "level": "Part II", "title": "Applied Risk", "skills": [{ "name": "Operational Risk", "desc": "Basics of credit and liquidity risk.", "importance": "High", "resources": ["https://garp.org/frm"] }] }
        ],
        "job_guide": { "resume": "Focus on risk modeling and compliance skills.", "portfolio": "Certification in Risk management tools.", "interview": "Prepare for scenarios involving financial stress tests." }
    },
    "financial-modeling": {
        "title": "Financial Modeling",
        "description": "Building abstract representations of financial situations to support decision making.",
        "icon": "file-spreadsheet",
        "milestones": [
            { "level": "Beginner", "title": "Excel Mastery", "skills": [{ "name": "Keyboard Shortcuts", "desc": "Building models without a mouse.", "importance": "High", "resources": ["https://wallstreetprep.com"] }] },
            { "level": "Intermediate", "title": "Three-Statement Model", "skills": [{ "name": "IS, BS, CFS", "desc": "Linking financial statements.", "importance": "Critical", "resources": ["https://corporatefinanceinstitute.com"] }] },
            { "level": "Advanced", "title": "LBO & M&A", "skills": [{ "name": "Valuation Techniques", "desc": "DCF and comparable analysis.", "importance": "High", "resources": ["https://mergersandinquisitions.com"] }] }
        ],
        "job_guide": { "resume": "Quantify accuracy and speed in modeling tasks.", "portfolio": "Examples of detailed models built for dummy companies.", "interview": "Live modeling tests are common; speed and accuracy key." }
    },
    "investment-banking": {
        "title": "Investment Banking",
        "description": "Advising corporations on capital raising and complex financial transactions like M&A.",
        "icon": "banknote",
        "milestones": [
            { "level": "Beginner", "title": "Market Awareness", "skills": [{ "name": "Current Affairs", "desc": "Following global market trends and news.", "importance": "High", "resources": ["https://wsj.com"] }] },
            { "level": "Intermediate", "title": "Deal Execution", "skills": [{ "name": "Pitchbooks", "desc": "Creating compelling investment narratives.", "importance": "High", "resources": ["https://breakingintowallstreet.com"] }] }
        ],
        "job_guide": { "resume": "Highlight internships at known financial firms.", "portfolio": "A list of deal-related case studies you've analysed.", "interview": "Prepare for long hours and high-pressure technicals." }
    },

    // --- DESIGN ---
    "ui-ux": {
        "title": "UI/UX Design",
        "description": "Designing intuitive and visually appealing user interfaces for digital products.",
        "icon": "framer",
        "milestones": [
            { "level": "Beginner", "title": "Design Principles", "skills": [{ "name": "Color & Typography", "desc": "Visual hierarchy and contrast.", "importance": "Critical", "resources": ["https://refactoringui.com"] }] },
            { "level": "Intermediate", "title": "Tools & Prototyping", "skills": [{ "name": "Figma / Adobe XD", "desc": "Building interactive design systems.", "importance": "Critical", "resources": ["https://figma.com/learn"] }] },
            { "level": "Advanced", "title": "User Experience", "skills": [{ "name": "Design Sprints", "desc": "Rapid prototyping and user testing.", "importance": "High", "resources": ["https://designsprintkit.withgoogle.com"] }] }
        ],
        "job_guide": { "resume": "Clean, visually driven resume design.", "portfolio": "A Behance/Dribbble profile with deep case studies.", "interview": "Explain the 'Why' behind every design choice." }
    },
    "graphic-design": {
        "title": "Graphic Design",
        "description": "Creating visual content to communicate messages through print and digital media.",
        "icon": "palette",
        "milestones": [
            { "level": "Beginner", "title": "Raster & Vector", "skills": [{ "name": "Photoshop", "desc": "Image manipulation and retouching.", "importance": "Critical", "resources": ["https://adobe.com/photoshop"] }, { "name": "Illustrator", "desc": "Vector-based logos and illustrations.", "importance": "Critical", "resources": ["https://adobe.com/illustrator"] }] }
        ],
        "job_guide": { "resume": "Visual and creative layout.", "portfolio": "Variety of branding and social media projects.", "interview": "Prepare to talk about branding and identity theory." }
    },
    "animation-vfx": {
        "title": "Animation & VFX",
        "description": "Creating computer-generated animations and visual effects for movies and games.",
        "icon": "sparkles",
        "milestones": [
            { "level": "Beginner", "title": "3D Basics", "skills": [{ "name": "Blender / Maya", "desc": "Modeling and simple animations.", "importance": "Critical", "resources": ["https://blender.org"] }] },
            { "level": "Intermediate", "title": "Special Effects", "skills": [{ "name": "Houdini / After Effects", "desc": "Particle systems and compositing.", "importance": "High", "resources": ["https://sidefx.com"] }] }
        ],
        "job_guide": { "resume": "Link to a high-quality showreel.", "portfolio": "Demo reel on Vimeo/YouTube.", "interview": "Critique your own work and show technical growth." }
    },
    "video-editing": {
        "title": "Video Editing",
        "description": "Assembling recorded footage into a finished product, including sound and color grading.",
        "icon": "video",
        "milestones": [
            { "level": "Beginner", "title": "Editing Logic", "skills": [{ "name": "Premiere Pro / DaVinci", "desc": "Cutting and sequence building.", "importance": "Critical", "resources": ["https://blackmagicdesign.com/products/davinciresolve"] }] },
            { "level": "Advanced", "title": "Color & Sound", "skills": [{ "name": "Color Grading", "desc": "Correcting and stylizing footage.", "importance": "High", "resources": ["https://mixinglight.com"] }] }
        ],
        "job_guide": { "resume": "Variety of styles (Commercial, Vlogs, Narrative).", "portfolio": "Showcase your best 3 edits in a portfolio site.", "interview": "Focus on storytelling and pacing." }
    },

    // --- ENGINEERING & CORE ---
    "m-tech": {
        "title": "M.Tech",
        "description": "Advanced specialized degree in various engineering and technology domains.",
        "icon": "microscope",
        "milestones": [
            { "level": "Phase 1", "title": "Advanced Core", "skills": [{ "name": "Specialized Theory", "desc": "Deep dive into your specific branch.", "importance": "Critical", "resources": ["https://nptel.ac.in"] }] },
            { "level": "Phase 2", "title": "Research & Thesis", "skills": [{ "name": "Literature Review", "desc": "Scientific writing and original research.", "importance": "High", "resources": ["https://scholar.google.com"] }] }
        ],
        "job_guide": { "resume": "Focus on research papers and technical projects.", "portfolio": "Document your thesis findings on a personal blog.", "interview": "Technical expertise in the niche specialisation." }
    },
    "robotics": {
        "title": "Robotics",
        "description": "Designing, building, and operating robots to perform complex tasks autonomously.",
        "icon": "bot",
        "milestones": [
            { "level": "Beginner", "title": "Electronics & C", "skills": [{ "name": "Arduino / Pi", "desc": "Basic sensors and actuators.", "importance": "Critical", "resources": ["https://arduino.cc"] }] },
            { "level": "Intermediate", "title": "Control Systems", "skills": [{ "name": "ROS (Robot OS)", "desc": "The industry standard for robot logic.", "importance": "Critical", "resources": ["https://ros.org"] }] }
        ],
        "job_guide": { "resume": "Highlight hardware-software integration projects.", "portfolio": "Videos of physical robots you've built.", "interview": "Understand kinematics and sensor fusion." }
    },
    "embedded-systems": {
        "title": "Embedded Systems",
        "description": "Developing specialized computer systems embedded within larger mechanical or electrical systems.",
        "icon": "circuit-board",
        "milestones": [
            { "level": "Beginner", "title": "Microcontrollers", "skills": [{ "name": "C Programming", "desc": "Low-level system logic.", "importance": "Critical", "resources": ["https://st.com"] }] },
            { "level": "Advanced", "title": "RTOS", "skills": [{ "name": "Real-time Operating Systems", "desc": "FreeRTOS or Zephyr.", "importance": "High", "resources": ["https://freertos.org"] }] }
        ],
        "job_guide": { "resume": "Experience with circuit design (PCB).", "portfolio": "GitHub repos with firmware projects.", "interview": "Deep dive into interrupts and memory management." }
    },
    "vlsi": {
        "title": "VLSI Design",
        "description": "Creating integrated circuits by combining thousands of transistors on a single chip.",
        "icon": "microchip",
        "milestones": [
            { "level": "Beginner", "title": "Digital Logic", "skills": [{ "name": "Verilog / VHDL", "desc": "Hardware description languages.", "importance": "Critical", "resources": ["https://edaplayground.com"] }] },
            { "level": "Advanced", "title": "Physical Design", "skills": [{ "name": "ASIC Flow", "desc": "Synthesis, Place, and Route.", "importance": "High", "resources": ["https://cadence.com"] }] }
        ],
        "job_guide": { "resume": "Highlight projects with IC design flows.", "portfolio": "Simulations and design documentation.", "interview": "Prepare for tough logic design questions." }
    },
    "automation": {
        "title": "Industrial Automation",
        "description": "Automating industrial processes using advanced control systems and robotics.",
        "icon": "factory",
        "milestones": [
            { "level": "Beginner", "title": "PLC Basics", "skills": [{ "name": "Logix / Siemens", "desc": "Programming programmable logic controllers.", "importance": "Critical", "resources": ["https://rockwellautomation.com"] }] },
            { "level": "Intermediate", "title": "SCADA", "skills": [{ "name": "DCS & HMI", "desc": "Process monitoring interfaces.", "importance": "High", "resources": ["https://inductiveautomation.com"] }] }
        ],
        "job_guide": { "resume": "Certifications in PLC/SCADA.", "portfolio": "Case studies of production line optimizations.", "interview": "Understand safety protocols and industrial standards." }
    },
    "renewable-energy": {
        "title": "Renewable Energy",
        "description": "Focusing on sustainable energy sources like solar, wind, and hydrogen systems.",
        "icon": "zap",
        "milestones": [
            { "level": "Beginner", "title": "Energy Basics", "skills": [{ "name": "Solar/Wind Tech", "desc": "Understanding photovoltaic and wind power.", "importance": "High", "resources": ["https://irena.org"] }] },
            { "level": "Advanced", "title": "Grid Integration", "skills": [{ "name": "Smart Grids", "desc": "Modernizing the electrical grid.", "importance": "High", "resources": ["https://energy.gov"] }] }
        ],
        "job_guide": { "resume": "Focus on sustainability and efficiency metrics.", "portfolio": "Projects involving PV system design.", "interview": "Stay updated on global energy policies." }
    },

    // --- COMPETITIVE EXAMS ---
    "upsc": {
        "title": "UPSC Civil Services",
        "description": "Preparation for the elite civil services of India (IAS, IPS, IFS, etc.).",
        "icon": "landmark",
        "milestones": [
            { "level": "Prelims", "title": "General Studies I & CSAT", "skills": [{ "name": "Polity & History", "desc": "Deep understanding of Indian constitution and roots.", "importance": "Critical", "resources": ["https://upsc.gov.in"] }] },
            { "level": "Mains", "title": "Optional & Essay", "skills": [{ "name": "Analytical Writing", "desc": "Synthesising complex social issues into coherent essays.", "importance": "Critical", "resources": ["https://insightsonindia.com"] }] },
            { "level": "Interview", "title": "Personality Test", "skills": [{ "name": "Current Affairs", "desc": "Critical thinking on global and national news.", "importance": "High", "resources": ["https://thehindu.com"] }] }
        ],
        "job_guide": { "resume": "Strong consistent academic record.", "portfolio": "Document your study strategies.", "interview": "Focus on ethics, integrity, and social awareness." }
    },
    "gate": {
        "title": "GATE",
        "description": "Graduate Aptitude Test in Engineering for post-grad admissions into IITs/NITs and PSU jobs.",
        "icon": "award",
        "milestones": [
            { "level": "Stage 1", "title": "Subject Core", "skills": [{ "name": "Engineering Math", "desc": "The backbone of the GATE exam.", "importance": "Critical", "resources": ["https://gate.iitk.ac.in"] }] },
            { "level": "Stage 2", "title": "Branch Specifics", "skills": [{ "name": "Core Concepts", "desc": "In-depth problem solving in your branch.", "importance": "Critical", "resources": ["https://geeksforgeeks.org"] }] }
        ],
        "job_guide": { "resume": "High GATE score/rank.", "portfolio": "Previous projects showing technical depth.", "interview": "Expect pure technical questioning." }
    },
    "ssc": {
        "title": "SSC CGL",
        "description": "Exams for various government department posts under the Staff Selection Commission.",
        "icon": "stamp",
        "milestones": [
            { "level": "Tier I", "title": "Aptitude & Logic", "skills": [{ "name": "Quant Aptitude", "desc": "Speed and accuracy in mathematics.", "importance": "Critical", "resources": ["https://ssc.nic.in"] }] },
            { "level": "Tier II", "title": "Advanced English", "skills": [{ "name": "English Grammar", "desc": "Effective communication and comprehension skills.", "importance": "High", "resources": ["https://testbook.com"] }] }
        ],
        "job_guide": { "resume": "Clear academic background.", "portfolio": "Mock test scores consistency.", "interview": "Focus on general awareness." }
    },
    "banking": {
        "title": "Banking Exams (IBPS/SBI)",
        "description": "Competitive exams for Probationary Officers and Clerks in state-run banks.",
        "icon": "landmark-2",
        "milestones": [
            { "level": "Prelims", "title": "Speed Test", "skills": [{ "name": "Data Interpretation", "desc": "Analysing tables and charts rapidly.", "importance": "Critical", "resources": ["https://ibps.in"] }] },
            { "level": "Mains", "title": "Advanced Banking", "skills": [{ "name": "Banking Awareness", "desc": "Roles of RBI and modern banking trends.", "importance": "High", "resources": ["https://bankersadda.com"] }] }
        ],
        "job_guide": { "resume": "Strong focus on numerical skills.", "portfolio": "Mock interview practice sessions.", "interview": "Deep dive into financial term definitions." }
    },

    // --- OTHER ---
    "study-abroad": {
        "title": "MS / MBA Abroad",
        "description": "A roadmap for pursuing higher education in international universities.",
        "icon": "plane",
        "milestones": [
            { "level": "Step 1", "title": "Tests (GRE/GMAT/TOEFL)", "skills": [{ "name": "Quant & Verbal", "desc": "Achieving target scores for top schools.", "importance": "Critical", "resources": ["https://ets.org/gre"] }] },
            { "level": "Step 2", "title": "Applications & SOP", "skills": [{ "name": "Statement of Purpose", "desc": "Crafting a compelling life story and goal.", "importance": "Critical", "resources": ["https://magoosh.com"] }] }
        ],
        "job_guide": { "resume": "Highlight global exposure and extra-curriculars.", "portfolio": "Strong portfolio of projects/internships.", "interview": "Focus on the 'Why this university' question." }
    },
    "python": {
        "title": "Python Programming",
        "description": "General purpose programming from basic scripting to complex systems.",
        "icon": "terminal",
        "milestones": [
            { "level": "Beginner", "title": "Syntax & Scripting", "skills": [{ "name": "Core Python", "desc": "Automation, Scraping, and Scripts.", "importance": "Critical", "resources": ["https://realpython.com"] }] }
        ],
        "job_guide": { "resume": "List of automation scripts created.", "portfolio": "GitHub repos with functional tools.", "interview": "Data structures and algorithm focus." }
    },
    "ethical-hacking": {
        "title": "Ethical Hacking",
        "description": "Legitimately breaking into systems to identify and fix security gaps.",
        "icon": "ghost",
        "milestones": [
            { "level": "Beginner", "title": "Footprinting", "skills": [{ "name": "Scanning Networks", "desc": "Using tools to find weak points.", "importance": "Critical", "resources": ["https://tryhackme.com"] }] },
            { "level": "Advanced", "title": "Exploitation", "skills": [{ "name": "Post-Exploitation", "desc": "Maintaining access and clearing logs.", "importance": "High", "resources": ["https://hackthebox.com"] }] }
        ],
        "job_guide": { "resume": "Certifications (CEH, PenTest+).", "portfolio": "Write-ups on retired boxes.", "interview": "Defend your hacking methodology ethically." }
    },
    "iot": {
        "title": "Internet of Things (IoT)",
        "description": "Interconnecting physical devices with the internet to collect and exchange data.",
        "icon": "webhook",
        "milestones": [
            { "level": "Beginner", "title": "Sensors & Circuits", "skills": [{ "name": "ESP32 / NodeMCU", "desc": "Connecting hardware to Wi-Fi.", "importance": "Critical", "resources": ["https://espressif.com"] }] },
            { "level": "Intermediate", "title": "Protocols", "skills": [{ "name": "MQTT / HTTP", "desc": "Data communication between devices.", "importance": "Critical", "resources": ["https://mqtt.org"] }] }
        ],
        "job_guide": { "resume": "Highlight projects with telemetry data visualization.", "portfolio": "Physical prototypes (Smart Home, etc.).", "interview": "Understand logic for low-power devices." }
    }
};

window.ROADMAP_DATA = ROADMAP_DATA;

const PLAYLIST_DATA = {
    // --- BATCH A: TECH FOUNDATIONS ---
    "python": [
        {
            "id": "py-v1",
            "title": "Python: Programming, Data Structures and Algorithms",
            "youtubeId": "I8x5FpAL9zI",
            "author": "Prof. Madhavan Mukund (IIT Madras)",
            "testType": "quiz",
            "quiz": [
                { "q": "In Python, which of these is an immutable type?", "opts": ["List", "Dictionary", "Tuple", "Set"], "ans": 2 },
                { "q": "What is the result of 3 // 2 in Python 3?", "opts": ["1.5", "1", "2", "0"], "ans": 1 }
            ]
        },
        {
            "id": "py-v2",
            "title": "Control Structures and Functions",
            "youtubeId": "hYp6qY7YmS0",
            "author": "Prof. Madhavan Mukund (IIT Madras)",
            "testType": "coding-challenge",
            "task": "Write a function 'is_palindrome(s)' that returns true if a string is a palindrome."
        }
    ],
    "dsa": [
        {
            "id": "dsa-v1",
            "title": "Introduction to Data Structures",
            "youtubeId": "RPpbeon7o_U",
            "author": "Prof. Naveen Garg (IIT Delhi)",
            "testType": "quiz",
            "quiz": [
                { "q": "Which data structure follows LIFO?", "opts": ["Queue", "Stack", "Tree", "Graph"], "ans": 1 },
                { "q": "What is the time complexity of searching in a sorted array using Binary Search?", "opts": ["O(n)", "O(log n)", "O(n^2)", "O(1)"], "ans": 1 }
            ]
        },
        {
            "id": "dsa-v2",
            "title": "Analysis of Algorithms & Asymptotic Notation",
            "youtubeId": "r9T5LshA8V4",
            "author": "Prof. Naveen Garg (IIT Delhi)",
            "testType": "coding-challenge",
            "task": "Implement a function 'binarySearch(arr, target)' that returns the index of the target in a sorted array."
        }
    ],
    "full-stack": [
        {
            "id": "fs-v1",
            "title": "Web Development Basics: HTML & CSS",
            "youtubeId": "8f8eNal5X-M",
            "testType": "html-lab",
            "task": "Create a simple card with a title and a description using HTML and CSS."
        },
        {
            "id": "fs-v2",
            "title": "Responsive Web Design with Flexbox",
            "youtubeId": "3YW65K6ig0w",
            "testType": "html-lab",
            "task": "Build a responsive navigation bar with three links centered horizontally."
        }
    ],
    "software-testing": [
        {
            "id": "st-v1",
            "title": "Software Engineering & Testing",
            "youtubeId": "X_S_Y1E7TjY",
            "author": "Prof. Rajib Mall (IIT Kharagpur)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is White Box Testing?", "opts": ["Testing without code knowledge", "Testing with internal logic knowledge", "Testing the UI only", "Testing by end users"], "ans": 1 },
                { "q": "Which of these is a functional testing type?", "opts": ["Load Testing", "Stress Testing", "Unit Testing", "Scalability Testing"], "ans": 2 }
            ]
        }
    ],

    // --- BATCH B: AI & DATA ---
    "ai": [
        {
            "id": "ai-v1",
            "title": "Artificial Intelligence Search Methods for Problem Solving",
            "youtubeId": "JMUxmLyz9W4",
            "author": "Prof. Deepak Khemani (IIT Madras)",
            "testType": "quiz",
            "quiz": [
                { "q": "Which search algorithm is guaranteed to find the shortest path?", "opts": ["DFS", "BFS", "Greedy Search", "Random Walk"], "ans": 1 }
            ]
        }
    ],
    "ml": [
        {
            "id": "ml-v1",
            "title": "Introduction to Machine Learning",
            "youtubeId": "PPLop4L2eGk",
            "author": "Prof. Balaraman Ravindran (IIT Madras)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is Supervised Learning?", "opts": ["Learning without labels", "Learning from labeled data", "Learning through rewards", "Learning by imitation"], "ans": 1 }
            ]
        }
    ],
    "data-science": [
        {
            "id": "ds-v1",
            "title": "Data Science for Engineers",
            "youtubeId": "ua-CiDNNj30",
            "author": "Professors from IIT Madras",
            "testType": "data-lab",
            "task": "Analyze the correlation between the provided Value A and Value B columns."
        }
    ],
    "business-analytics": [
        {
            "id": "ba-v1",
            "title": "Business Analytics & Data Mining",
            "youtubeId": "jN-S6Z7bBHo",
            "author": "Prof. Gaurav Dixit (IIT Roorkee)",
            "testType": "data-lab",
            "task": "Identify the top-performing category from the mock sales dataset provided."
        }
    ],

    // --- BATCH C: INFRA & SECURITY ---
    "cloud": [
        {
            "id": "cloud-v1",
            "title": "AWS Certified Cloud Practitioner Full Course",
            "youtubeId": "SOTamWNgDKc",
            "author": "FreeCodeCamp / AWS Expert",
            "testType": "quiz",
            "quiz": [
                { "q": "Which AWS service is used for scalable object storage?", "opts": ["EC2", "S3", "RDS", "Lambda"], "ans": 1 }
            ]
        }
    ],
    "devops": [
        {
            "id": "dev-v1",
            "title": "DevOps Foundations",
            "youtubeId": "hQcFE0nvGuU",
            "author": "TechWorld with Nana",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the core goal of CI/CD?", "opts": ["Manual deployment", "Automating software delivery", "Writing documentation", "Designing UIs"], "ans": 1 }
            ]
        }
    ],
    "cyber-security": [
        {
            "id": "cs-v1",
            "title": "Cyber Security Full Course",
            "youtubeId": "nzj7u9bf_94",
            "author": "IIT Professional Series",
            "testType": "quiz",
            "quiz": [
                { "q": "What is a Phishing attack?", "opts": ["A direct hack into a server", "Deceptive attempt to obtain sensitive info", "A type of firewall", "A hardware failure"], "ans": 1 }
            ]
        }
    ],
    "ethical-hacking": [
        {
            "id": "eh-v1",
            "title": "Ethical Hacking: Footprinting & Reconnaissance",
            "youtubeId": "3Kq1MIfTWCE",
            "author": "Professional Cyber Security Expert",
            "testType": "coding-challenge",
            "task": "Identify the potential vulnerability in the provided network scan log."
        }
    ],

    // --- BATCH D: ENGINEERING (IIT/NPTEL CORE) ---
    "m-tech": [
        {
            "id": "mt-v1",
            "title": "Advanced Theory of Computer Science",
            "youtubeId": "X7W_8A9UonY",
            "author": "Prof. N.S. Narayanaswamy (IIT Madras)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the P vs NP problem primarily about?", "opts": ["Programming style", "Computational complexity", "Network protocols", "Memory management"], "ans": 1 }
            ]
        }
    ],
    "embedded-systems": [
        {
            "id": "es-v1",
            "title": "Introduction to Embedded Systems",
            "youtubeId": "joL8Vp8AtYI",
            "author": "Prof. Santanu Chaudhury (IIT Delhi)",
            "testType": "coding-challenge",
            "task": "Write a snippet to toggle an LED connected to PIN 13 in an interrupt service routine."
        }
    ],
    "vlsi": [
        {
            "id": "vlsi-v1",
            "title": "Digital VLSI Design",
            "youtubeId": "9SnR3M3C11M",
            "author": "Prof. S. Dasgupta (IIT Roorkee)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the primary material used in MOSFET fabrication?", "opts": ["Germanium", "Silicon", "Copper", "Gallium Arsenide"], "ans": 1 }
            ]
        }
    ],
    "automation": [
        {
            "id": "auto-v1",
            "title": "Control Engineering & Industrial Automation",
            "youtubeId": "fW_7eOshY-8",
            "author": "Prof. Madan Gopal (IIT Delhi)",
            "testType": "quiz",
            "quiz": [
                { "q": "What does a PID controller stand for?", "opts": ["Path Index Driver", "Proportional-Integral-Derivative", "Point In Data", "Parallel Input Device"], "ans": 1 }
            ]
        }
    ],
    "robotics": [
        {
            "id": "rob-v1",
            "title": "Robotics: Mechanics and Control",
            "youtubeId": "L0W6V2O-Z8Y",
            "author": "Prof. C. Amarnath (IIT Bombay)",
            "testType": "quiz",
            "quiz": [
                { "q": "Which coordinate system is commonly used in robot kinematics?", "opts": ["Cartesian", "Spherical", "Cylindrical", "All of the above"], "ans": 3 }
            ]
        }
    ],
    "renewable-energy": [
        {
            "id": "re-v1",
            "title": "Renewable Energy Engineering",
            "youtubeId": "SOn_Hly0X0k",
            "author": "NPTEL Energy Series",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the main source of energy for Photovoltaic cells?", "opts": ["Wind", "Water", "Sunlight", "Geothermal heat"], "ans": 2 }
            ]
        }
    ],
    "gate": [
        {
            "id": "gate-v1",
            "title": "Engineering Mathematics for GATE",
            "youtubeId": "D_yB3iK7_RE",
            "author": "Prof. Jitendra Kumar (IIT Kharagpur)",
            "testType": "coding-challenge",
            "task": "Solve the provided linear differential equation using Laplace transform."
        }
    ],

    // --- BATCH E: MANAGEMENT & FINANCE ---
    "mba": [
        {
            "id": "mba-v1",
            "title": "Strategic Management",
            "youtubeId": "pB2bL1-Xb_4",
            "author": "Prof. Kalyan Chakravarti (IIT Kharagpur)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is SWOT analysis used for?", "opts": ["Financial auditing", "Strategic planning", "Product testing", "Employee hiring"], "ans": 1 }
            ]
        }
    ],
    "product-management": [
        {
            "id": "pm-v1",
            "title": "Product Design and Development",
            "youtubeId": "W22Y1vYv-Xo",
            "author": "Prof. P.K. Kalra (IIT Delhi)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the primary goal of an MVP?", "opts": ["Add every feature", "Validate core idea with minimal effort", "Design the perfect logo", "Maximize profit immediately"], "ans": 1 }
            ]
        }
    ],
    "cfa": [
        {
            "id": "cfa-v1",
            "title": "Investment Management",
            "youtubeId": "X_YV_oA9-Uo",
            "author": "IIM Bangalore / NPTEL Series",
            "testType": "quiz",
            "quiz": [
                { "q": "What is a 'Fiduciary duty'?", "opts": ["Legal obligation to act in best interest of client", "Duty to pay taxes", "Option to buy stock", "A type of loan"], "ans": 1 }
            ]
        }
    ],
    "financial-modeling": [
        {
            "id": "fm-v1",
            "title": "Financial Modeling and Valuation",
            "youtubeId": "S3K_O_8Yogw",
            "author": "Corporate Finance Institute / Pro",
            "testType": "data-lab",
            "task": "Link the Balance Sheet and Cash Flow Statement in the template provided."
        }
    ],

    // --- BATCH F: DESIGN & MEDIA ---
    "ui-ux": [
        {
            "id": "ui-v1",
            "title": "User Interface Design",
            "youtubeId": "8f8eNal5X-M",
            "author": "Prof. Anirudha Joshi (IIT Bombay)",
            "testType": "html-lab",
            "task": "Design a user-friendly login form following accessibility guidelines."
        }
    ],
    "graphic-design": [
        {
            "id": "gd-v1",
            "title": "Understanding Design",
            "youtubeId": "9SnR3M3C11M",
            "author": "Prof. Ajanta Sen (IIT Bombay)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is 'White Space' in design?", "opts": ["The empty space between elements", "A color choice", "A mistake", "A background image"], "ans": 1 }
            ]
        }
    ],
    "video-editing": [
        {
            "id": "ve-v1",
            "title": "Video Production & Editing",
            "youtubeId": "3YW65K6ig0w",
            "author": "Creative Professional Series",
            "testType": "quiz",
            "quiz": [
                { "q": "What does 'Jump Cut' imply?", "opts": ["Smooth transition", "Abrupt transition in time/space", "A fade to black", "A sound effect"], "ans": 1 }
            ]
        }
    ],

    // --- BATCH G: EXAMS & OTHER ---
    "upsc": [
        {
            "id": "up-v1",
            "title": "UPSC: Indian Polity & Constitution",
            "youtubeId": "I8x5FpAL9zI",
            "author": "Civil Services Academy Series",
            "testType": "quiz",
            "quiz": [
                { "q": "Which article of the Indian Constitution deals with the Right to Equality?", "opts": ["Article 14", "Article 19", "Article 21", "Article 32"], "ans": 1 }
            ]
        }
    ],
    "banking": [
        {
            "id": "bk-v1",
            "title": "Banking Awareness & Financial Systems",
            "youtubeId": "9SnR3M3C11M",
            "author": "Financial Expert Series",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the primary function of the RBI?", "opts": ["To lend money to individuals", "To issue currency and manage monetary policy", "To design websites for banks", "To sell gold"], "ans": 1 }
            ]
        }
    ],
    "blockchain": [
        {
            "id": "bc-v1",
            "title": "Blockchain Architecture Design and Use Cases",
            "youtubeId": "D8H8X_A_T8k",
            "author": "Prof. Sandip Chakraborty (IIT Kharagpur)",
            "testType": "coding-challenge",
            "task": "Explain the role of a Merkle Tree in a block header."
        }
    ],
    "iot": [
        {
            "id": "iot-v1",
            "title": "Introduction to Internet of Things",
            "youtubeId": "O_8Z6A-W_y8",
            "author": "Prof. Sudip Misra (IIT Kharagpur)",
            "testType": "quiz",
            "quiz": [
                { "q": "What is the most common protocol used for IoT communication?", "opts": ["HTTP", "MQTT", "FTP", "SMTP"], "ans": 1 }
            ]
        }
    ],
    "study-abroad": [
        {
            "id": "sa-v1",
            "title": "The Ultimate Guide to MS Abroad",
            "youtubeId": "3YW65K6ig0w",
            "author": "Global Education Expert",
            "testType": "quiz",
            "quiz": [
                { "q": "What is an 'SOP' in the context of university applications?", "opts": ["Standard Operating Procedure", "Statement of Purpose", "System of Payments", "Simple Object Protocol"], "ans": 1 }
            ]
        }
    ]
};

window.PLAYLIST_DATA = PLAYLIST_DATA;
