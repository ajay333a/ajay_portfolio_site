export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  dataSize: string;
  category: 'Machine Learning' | 'Python' | 'R' | 'SQL' | 'Excel' | 'All';
  categories?: ('Machine Learning' | 'Python' | 'R' | 'SQL' | 'Excel')[];
  tools: string[];
  link: string;
  githubLink?: string;
  image: string;
  highlights: string[];
  featured?: boolean;
  date?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate?: string;
  credentialId?: string;
  description: string;
  link: string;
  icon: string;
  skills: string[];
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  toolsUsed: string[];
  impactMetrics: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  thesis?: string;
  tools?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  image: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Advanced' | 'Proficient'
    description: string;
    tags?: string[];
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Python' | 'R' | 'SQL';
  summary: string;
  readTime: string;
  date?: string;
  tags: string[];
  link: string;
  image: string;
}

export const personalInfo = {
  name: "Ajay Shankar A",
  role: "Data Analyst & Machine Learning Specialist",
  tagline: "Transforming Complex Data into Actionable Strategic Insights & Predictive Models",
  bio: "Google Certified Data Analyst with 3.5 years of experience turning raw operational and field data into reporting that drives strategic decisions. Specializing in SQL, Python, R, Power BI, Excel, and Machine Learning to model data, automate workflows, and deliver impactful analytical solutions.",
  email: "ajayshankar333a@gmail.com",
  phone: "+91 8660117624",
  location: "Ballari, Karnataka, India",
  resumeUrl: "Ajay_Shankar_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/ajay-shankar-a-4b0b121a1/",
  github: "https://github.com/ajay333a",
  profileImage: "https://ajay333a.quarto.pub/ajay-shankar-a/images/profile_image_index.jpg",
  rBlogUrl: "https://ajay333a.quarto.pub/ajay333a/",
  pythonBlogUrl: "https://ajay333a.quarto.pub/python_blog/"
};

export const impactMetrics = [
  {
    number: "5.8M+",
    label: "Records Analyzed",
    detail: "Cyclist bike-share big data wrangling & behavioral pattern analytics",
    accent: "from-rose-500 to-red-500"
  },
  {
    number: "1.2L",
    label: "Person-Days Tracked",
    detail: "Through Zilla Panchayath Ballari live dashboards and monitoring systems",
    accent: "from-red-500 to-orange-500"
  },
  {
    number: "90%",
    label: "Time Saved",
    detail: "Automated attendance tracking system built in Python & Excel",
    accent: "from-rose-500 to-pink-500"
  },
  {
    number: "₹5 Cr",
    label: "Budget Modelled",
    detail: "Government project financial reconciliation and audit validation",
    accent: "from-orange-500 to-amber-500"
  }
];

export const projectsData: Project[] = [
  {
    id: "palmer-penguins-ml",
    title: "Predict the Sex of Penguin Species",
    subtitle: "Classification & Machine Learning with tidymodels",
    description: "Building an end-to-end classification model to accurately predict the sex of three distinct penguin species (Adélie, Chinstrap, and Gentoo) in the Palmer Archipelago using morphological measurements.",
    dataSize: "Morphological Dataset",
    category: "Machine Learning",
    tools: ["R", "tidymodels", "Random Forest", "EDA", "ggplot2", "recipes"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/palmer_penguins_ml/palmerpenguins_ml.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=800&auto=format&fit=crop&q=80",
    featured: true,
    date: "Jan 15, 2025",
    highlights: [
      "Conducted exploratory feature correlation across bill dimensions, flipper length, and body mass",
      "Built resilient preprocessing pipelines with imputation and normalization in recipes",
      "Tuned tree-based classification models achieving high validation ROC-AUC scores"
    ]
  },
  {
    id: "laptop-price-prediction-ml",
    title: "Laptop Price Prediction with Python",
    subtitle: "Machine Learning Regression & Scikit-Learn Pipelines",
    description: "Machine learning regression modeling in Python predicting laptop prices based on technical specifications, hardware brand, processor architecture, RAM, and market dynamics using Scikit-Learn and Random Forest.",
    dataSize: "Hardware Specs Dataset",
    category: "Machine Learning",
    tools: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "NumPy", "Seaborn", "EDA"],
    link: "https://ajay333a.quarto.pub/python_blog/posts/laptop_pc_pred/laptop_price_prediction.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80",
    featured: true,
    date: "Jun 18, 2025",
    highlights: [
      "Extracted and engineered hardware features including CPU clock speeds, GPU tiers, and SSD capacity",
      "Trained Scikit-Learn Random Forest and Gradient Boosting regression pipelines",
      "Benchmarked evaluation metrics with R-squared and Root Mean Squared Error (RMSE)"
    ]
  },
  {
    id: "diamonds-price-prediction-ml",
    title: "Predict Price of Diamonds",
    subtitle: "Regression & Feature Engineering with tidymodels",
    description: "Predictive regression modeling using R and tidymodels to estimate diamond prices based on the 4Cs (carat, cut, color, clarity) with log transformations and cross-validation.",
    dataSize: "53,940 Records",
    category: "Machine Learning",
    tools: ["R", "tidymodels", "Regression", "Feature Engineering", "ggplot2", "EDA"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/diamonds_ml/ml_diamonds.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    featured: false,
    date: "Dec 10, 2023",
    highlights: [
      "Engineered log-transformed continuous variables to stabilize price heteroscedasticity",
      "Built unified modeling workflows with recipes, linear regression, and decision trees",
      "Evaluated model goodness-of-fit using RMSE, MAE, and R-squared on holdout sets"
    ]
  },
  {
    id: "iris-ml-classification",
    title: "Iris ML Classification",
    subtitle: "Random Forest & K-Nearest Neighbors (KNN)",
    description: "Comparative machine learning classification analysis on the classic Iris dataset, evaluating multi-class decision boundaries, feature importances, and model accuracy using KNN and Random Forest.",
    dataSize: "Multi-class Dataset",
    category: "Machine Learning",
    tools: ["R", "Random Forest", "KNN", "tidymodels", "ggplot2", "EDA"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/iris_ML/iris_ml_classification.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&auto=format&fit=crop&q=80",
    featured: false,
    date: "Oct 21, 2024",
    highlights: [
      "Conducted exploratory pair-plot visualizations across sepal and petal parameters",
      "Trained and tuned K-Nearest Neighbors and Random Forest classifiers with cross-validation",
      "Constructed confusion matrix heatmaps to benchmark precision, recall, and accuracy"
    ]
  },
  {
    id: "retail-sales-sql-analysis",
    title: "Retail Sales & Customer Segmentation",
    subtitle: "Complex Relational Queries & Business Intelligence",
    description: "Comprehensive SQL analytical case study investigating retail supermarket transactions across multiple branch cities. Answered 25+ executive business questions, computed customer lifetime value metrics between Members and Normal shoppers, analyzed product line revenue distributions, and optimized weekend promotional strategies.",
    dataSize: "Retail Transactions DB",
    category: "SQL",
    tools: ["SQL", "MySQL", "Window Functions", "CTEs", "Aggregations", "Customer Segmentation"],
    link: "https://drive.google.com/drive/folders/1aXDYxoE3NSQJ8VR7zSir8X5Wyan49EAv?usp=drive_link",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    featured: true,
    date: "SQL Project",
    highlights: [
      "Formulated 25+ advanced SQL queries across sales trends, customer types, and branch performance",
      "Benchmarked purchasing habits, proving Members generate higher profit and transaction value",
      "Uncovered Saturday peak revenue surges and high-margin product lines to guide marketing strategy",
      "Implemented multi-table aggregations, ranking window functions, and time-of-day breakdowns"
    ]
  },
  {
    id: "maven-movies-rental-analytics",
    title: "Maven Movies Rental Business Analysis & Dashboard",
    subtitle: "Relational MySQL Querying & Interactive Excel Executive Dashboard",
    description: "End-to-end movie rental chain business analysis investigating 16,044 rental transactions across 9 relational database tables. Joined and queried MySQL tables (rentals, films, payments, inventory, staff, stores) and built an interactive Excel dashboard with Pivot Tables analyzing monthly surges, peak hourly trends, top rented titles, category popularity, and store revenue distributions.",
    dataSize: "16,044 Records (9 DB Tables)",
    category: "SQL",
    categories: ["SQL", "Excel"],
    tools: ["SQL", "MySQL Workbench", "Excel (Advanced)", "Pivot Tables", "Relational Joins", "Interactive Dashboards", "Business Intelligence"],
    link: "https://drive.google.com/drive/folders/1jqMkqmHrDjXsOe-OHc9SZo9ioxZbcoUe?usp=drive_link",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
    featured: true,
    date: "Mini Capstone",
    highlights: [
      "Extracted and joined 9 relational database tables in MySQL Workbench to prepare clean analytical data extracts",
      "Engineered monthly and hourly time-series models across 16,044 rentals, discovering peak summer demand surges and 3 PM-4 PM daily peak hours",
      "Ranked top 10 most rented films and high-grossing categories to optimize inventory stocking and tiered pricing",
      "Built an executive Excel workbook dashboard visualizing store revenue comparisons and staff performance metrics"
    ]
  },
  {
    id: "sleepycat-order-fulfilment-excel",
    title: "SleepyCat Order Fulfilment Efficiency",
    subtitle: "Supply Chain Analytics & Delivery Optimization in Excel",
    description: "Data cleaning and operational fulfillment efficiency analysis across 30,000 order records in Excel. Resolved data quality issues affecting delivery calculations, evaluated fulfillment metrics across 15 products and 7 cities, and recommended revised ETA prediction logic to reduce delivery delays and return rates.",
    dataSize: "30,000 Orders",
    category: "Excel",
    tools: ["Excel (Advanced)", "Pivot Tables", "Data Cleaning", "Formulas & Functions", "Supply Chain Analytics"],
    link: "https://drive.google.com/drive/folders/1hkjc4X1xgsWpgr3WNv9-L8LVz-ynPjeM?usp=drive_link",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    featured: true,
    date: "Excel Project",
    highlights: [
      "Cleaned and standardized 30,000 order records across 3 months in Excel, resolving calculation anomalies",
      "Analysed fulfillment efficiency across 15 products and 7 cities, isolating routes with longest delays and highest return rates",
      "Uncovered systematic gaps between estimated and actual delivery times, proposing revised ETA logic for customer delivery prediction"
    ]
  },
  {
    id: "cyclist-python-analysis",
    title: "Cyclist Trip Analysis with Python",
    subtitle: "Big Data Wrangling, Pandas & Visual Analytics",
    description: "In-depth exploratory data analysis and visual narrative of cyclist trip patterns using Python, Pandas, and Seaborn, focusing on duration distributions, commuter trends, and anomaly detection.",
    dataSize: "5M+ Records",
    category: "Python",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "EDA"],
    link: "https://ajay333a.quarto.pub/python_blog/posts/cyclist_trip_analysis/cyc_trip_analysis.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&auto=format&fit=crop&q=80",
    featured: false,
    date: "Jun 17, 2025",
    highlights: [
      "Wrangled millions of raw trip records using vectorized Pandas operations",
      "Engineered datetime features to evaluate hourly surges and seasonal ridership trends",
      "Generated publication-grade analytical visualizations with Matplotlib and Seaborn"
    ]
  },
  {
    id: "cyclist-bike-share-r",
    title: "Cyclist Bike Share Case Study (R)",
    subtitle: "Big Data Behavioral & Seasonal Optimization",
    description: "Comprehensive Google Data Analytics capstone analyzing over 5 million bike-share trip records to uncover rider behavioral differences between casual riders and annual subscribers.",
    dataSize: "5M+ Records",
    category: "R",
    tools: ["R", "dplyr", "ggplot2", "Tidyverse", "lubridate", "Statistical Analysis"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/cyclist_trip_analysis/cyclist_bike_202207_202306.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80",
    featured: false,
    date: "Dec 14, 2024",
    highlights: [
      "Cleaned, combined, and wrangled 5+ million raw trip records spanning 12 months",
      "Identified distinct weekend vs. weekday commuter usage patterns across user types",
      "Delivered data-driven strategic marketing recommendations for subscriber conversion"
    ]
  },
  {
    id: "medicines-side-effects-r",
    title: "Medicines Side-Effects & Substitutes",
    subtitle: "Healthcare Data Exploration of 248,000+ Drugs",
    description: "In-depth exploratory data analysis across 248,000+ commercial pharmaceutical drugs worldwide, exploring adverse reaction profiles, therapeutic drug classes, and alternative substitute availability.",
    dataSize: "248,000+ Records",
    category: "R",
    tools: ["R", "ggplot2", "dplyr", "Healthcare Analytics", "EDA", "Tidyverse"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/meds_analysis/Medicines_usage_sideeffects.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&w=800&q=80",
    featured: false,
    date: "Oct 10, 2024",
    highlights: [
      "Wrangled massive pharmaceutical records to analyze common adverse symptom distributions",
      "Segmented medication classes by risk severity and therapeutic usage categories",
      "Extracted drug substitute networks to evaluate patient treatment alternatives"
    ]
  },
  {
    id: "data-treatment-leaves-thesis",
    title: "Effect of Treatments on Leaves",
    subtitle: "Biostatistical Modeling & MSc Thesis Research",
    description: "Rigorous experimental biostatistical evaluation exploring the vegetative rooting potential of angiosperm leaves when subjected to various phyto-hormone treatments and concentration levels.",
    dataSize: "Experimental Field Data",
    category: "R",
    tools: ["R", "ANOVA", "Statistical Modeling", "Tukey HSD", "ggplot2", "dplyr"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/data_analysis_for-thesis/data_treatment_effect.html",
    githubLink: "https://github.com/ajay333a",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80",
    featured: false,
    date: "Dec 31, 2024",
    highlights: [
      "Quantified biometric variance across auxin/cytokinin treatment regimes in tree improvement",
      "Applied Analysis of Variance (ANOVA) and post-hoc significance testing in R",
      "Generated publication-quality visualization charts detailing physiological responses"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    issuedDate: "Verified Credential",
    credentialId: "EQGTF6EM2QPN",
    description: "Rigorous 8-course professional certification covering end-to-end data analytics: data cleaning, analytical thinking, spreadsheet calculations, SQL database querying, Tableau visualizations, and R programming.",
    link: "https://www.coursera.org/account/accomplishments/specialization/EQGTF6EM2QPN",
    icon: "🏆",
    skills: ["Data Analysis", "SQL", "R Programming", "Tableau", "Spreadsheets", "Data Ethics", "Problem Solving"],
    image: "Coursera Specialisation S8VZ79DVEXP7 .png",
    featured: true
  },
  {
    id: "odinschool-bootcamp",
    title: "Data Science Bootcamp Certification",
    issuer: "OdinSchool",
    issuedDate: "Comprehensive Graduate",
    credentialId: "Verified Graduate",
    description: "Comprehensive hands-on training curriculum covering core Data Science fundamentals, exploratory data analysis, machine learning algorithms, Power BI interactive dashboard creation, and advanced SQL.",
    link: "https://go.odinschool.com/verify-certificate",
    icon: "🎓",
    skills: ["Python", "Machine Learning", "Scikit-Learn", "SciPy", "Advanced SQL", "Power BI", "Statistics"],
    image: "odin_cert.png",
    featured: true
  },
  {
    id: "hackerrank-sql-intermediate",
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    issuedDate: "Skill Assessment Certified",
    credentialId: "838F70322A1D",
    description: "Demonstrates proven mastery in complex SQL queries, multi-table joins, subqueries, aggregations, and window functions under timed assessment conditions.",
    link: "https://www.hackerrank.com/certificates/838f70322a1d",
    icon: "⚡",
    skills: ["Complex Queries", "Window Functions", "Subqueries", "Query Optimization", "Analytical SQL"],
    image: "sql_intermediate_certificate.png",
    featured: true
  },
  {
    id: "hackerrank-sql-basic",
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    issuedDate: "Skill Assessment Certified",
    credentialId: "B177FC5D7A63",
    description: "Validates proficiency in fundamental relational database concepts, data retrieval, relational filtering, and core SQL syntax.",
    link: "https://www.hackerrank.com/certificates/b177fc5d7a63",
    icon: "📜",
    skills: ["SQL Queries", "Database Design", "Data Retrieval", "Filtering & Sorting", "Basic Joins"],
    image: "sql_basic certificate.png",
    featured: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "zp-ballari-analyst",
    title: "MIS & Data Analyst",
    company: "Zilla Panchayath, Ballari",
    location: "Ballari, Karnataka",
    duration: "Nov 2022 — Present",
    type: "Government Operations & MIS Analytics",
    description: "Leading MIS data operations, analytics dashboards, and operational reporting for district administration. Engineered automated attendance and reporting pipelines in Python and Excel, monitored 1.2 lakh person-days of labor, modelled financial data for ₹5 crore government initiatives, and surfaced real-time operational insights for senior administrative officials.",
    toolsUsed: ["Python", "Excel (Advanced)", "MIS Portals", "SQL", "Data Modeling", "Process Automation", "Reporting Dashboards"],
    impactMetrics: [
      "Built an automated attendance tracking system in Python and Excel, cutting manual processing time by 90% and enabling same-day reporting for field supervisors",
      "Designed and maintained Excel dashboards to track 1.2 lakh person-days of labour, giving management real-time visibility into project output and resource utilisation",
      "Modelled and validated financial data for a ₹5 crore government project, supporting budget reconciliation and audit readiness across reporting periods",
      "Analysed real-time field data from ground teams to identify operational bottlenecks, surfacing insights that accelerated issue resolution between government departments and local communities",
      "Produced weekly data summaries translating raw field inputs into structured reports for senior officials, improving decision turnaround time"
    ]
  },
  {
    id: "empri-associate",
    title: "Research Associate",
    company: "Environmental Management & Policy Research Institute (EMPRI)",
    location: "Bangalore, Karnataka",
    duration: "May 2022 — Aug 2022",
    type: "Policy & Resource Analytics",
    description: "Spearheaded statewide field survey and data synthesis analyzing wood consumption patterns, supply-demand deficits, and welfare needs of 400 artisans across 4 major handicraft clusters in Karnataka. Published policy-focused recommendations on sustainable sourcing and agroforestry.",
    toolsUsed: ["Google Forms", "Excel", "Statistical Analysis", "Survey Design", "Data Visualization", "Policy Research"],
    impactMetrics: [
      "Conducted field surveys across 4 handicraft centres and 400 artisans to assess wood usage and resource constraints",
      "Analysed supply-demand gap of raw wood for Karnataka handicrafts, identifying a 21.6% shortfall (891 m³) in availability",
      "Delivered policy-focused recommendations on agroforestry and sustainable sourcing; research findings were published"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "msc-forestry",
    degree: "Master of Science (MSc)",
    field: "Forest Biology and Tree Improvement",
    institution: "University of Agricultural Sciences (UAS), Dharwad",
    location: "Dharwad, Karnataka",
    duration: "Sept 2019 – Jan 2023",
    cgpa: "8.61 / 10.0",
    highlights: [
      "Advanced ecological data modeling and biostatistical analysis",
      "Specialized in quantitative genetics, experimental design, and biometric assessments",
      "Published research on vegetative propagation mechanics in woody angiosperms"
    ],
    thesis: "Clonal propagation of angiosperms through Leaves: Experimental evaluation & biometric modeling",
    tools: ["R", "Python", "Excel", "Statistical Modeling", "ANOVA", "Regression Analysis"]
  },
  {
    id: "bsc-forestry",
    degree: "Bachelor of Science (BSc)",
    field: "Forestry",
    institution: "University of Agricultural Sciences (UAS), Dharwad",
    location: "Dharwad, Karnataka",
    duration: "Aug 2015 – Apr 2019",
    cgpa: "8.14 / 10.0",
    highlights: [
      "Rigorous training in natural resource inventorying and spatial ecology",
      "Field mensuration, statistical sampling techniques, and environmental impact assessment"
    ],
    thesis: "Evaluation of pre-sowing seed germination treatments for Cordia myxa and Ximenia americana",
    tools: ["Excel", "Data Visualisation", "Biometrics", "Field Survey"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning & Scientific Computing",
    description: "Predictive modeling, classification, regression, and scientific analysis in Python",
    iconName: "Cpu",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&w=800&q=80",
    skills: [
      { 
        name: "Scikit-Learn", 
        level: "Advanced", 
        description: "Supervised and unsupervised models, feature engineering, model evaluation, cross-validation", 
        tags: ["Classification", "Regression", "Clustering", "Pipelines"] 
      },
      { 
        name: "SciPy", 
        level: "Advanced", 
        description: "Scientific algorithms, optimization, signal processing, statistical distributions and tests", 
        tags: ["Scientific Computing", "Statistical Tests", "Optimization"] 
      },
      { 
        name: "Predictive & Statistical Modeling", 
        level: "Expert", 
        description: "Hypothesis testing, multi-variable regression, ANOVA, time-series trends", 
        tags: ["Predictive Analytics", "Hypothesis Testing", "Biometrics"] 
      },
      { 
        name: "NumPy & Numerical Computing", 
        level: "Advanced", 
        description: "Multi-dimensional array operations, matrix linear algebra, vectorization", 
        tags: ["Linear Algebra", "Vectorization"] 
      }
    ]
  },
  {
    title: "Programming & Querying",
    description: "Core languages for data manipulation, extraction, and automated computing",
    iconName: "Code2",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800&q=80",
    skills: [
      { name: "Python", level: "Advanced", description: "Pandas, NumPy, Scikit-learn, SciPy, Seaborn for automated data pipelines & ML", tags: ["Pandas", "Scikit-Learn", "SciPy"] },
      { name: "R", level: "Advanced", description: "Tidyverse, dplyr, ggplot2, tidymodels for deep statistical modeling & publication charts", tags: ["Tidyverse", "ggplot2", "dplyr", "tidymodels"] },
      { name: "SQL", level: "Advanced", description: "Complex joins, CTEs, Window functions, aggregations, query optimization", tags: ["MySQL", "PostgreSQL", "Window Functions"] },
      { name: "Bash / Shell", level: "Proficient", description: "Scripting, file automation, and Unix command-line productivity", tags: ["CLI", "Automation"] }
    ]
  },
  {
    title: "Data Wrangling & Analytics",
    description: "Data preparation, exploratory data analysis, and insight generation",
    iconName: "BarChart3",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&w=800&q=80",
    skills: [
      { name: "Pandas & Data Wrangling", level: "Expert", description: "Cleaning, restructuring, filtering massive tabular datasets with high efficiency" },
      { name: "Exploratory Data Analysis (EDA)", level: "Expert", description: "Pattern discovery, anomaly detection, cohort segmentation" },
      { name: "Biostatistics & Experimental Design", level: "Advanced", description: "Biological data sampling, variance analysis, field experiment design" },
      { name: "Data Pipeline Automation", level: "Advanced", description: "Reproducible analytical workflows and batch data processing" }
    ]
  },
  {
    title: "BI & Data Visualization",
    description: "Crafting intuitive executive dashboards and visual data stories",
    iconName: "PieChart",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&w=800&q=80",
    skills: [
      { name: "Power BI", level: "Advanced", description: "Interactive dashboards, DAX queries, data modeling, scheduled reports" },
      { name: "Tableau", level: "Proficient", description: "Interactive visual storytelling, calculated fields, dashboard actions" },
      { name: "Advanced Excel", level: "Expert", description: "Pivot tables, nested XLOOKUP, statistical analysis ToolPak, VBA" },
      { name: "ggplot2 & Seaborn", level: "Advanced", description: "Custom scientific visual aesthetics, multi-faceted distribution plots" }
    ]
  },
  {
    title: "Domain & Professional Tools",
    description: "Translating technical findings into real-world business & policy outcomes",
    iconName: "Wrench",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&q=80",
    skills: [
      { name: "Data Storytelling", level: "Expert", description: "Translating complex statistical metrics into clear insights for stakeholders" },
      { name: "Git & Version Control", level: "Advanced", description: "Git branching, GitHub repository management, CI/CD collaboration" },
      { name: "Survey Design & Policy Research", level: "Advanced", description: "Primary data collection, sample stratification, field survey governance" },
      { name: "Quarto & Markdown", level: "Advanced", description: "Technical publishing, reproducible data research documents, and web blogs" }
    ]
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "laptop-price-pred-blog",
    title: "Laptop Price Prediction with Python",
    category: "Python",
    summary: "Predicting laptop market prices based on hardware specifications, processor types, and RAM using Python and Random Forest.",
    readTime: "12 min read",
    date: "Jun 18, 2025",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "Random Forest", "EDA"],
    link: "https://ajay333a.quarto.pub/python_blog/posts/laptop_pc_pred/laptop_price_prediction.html",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cyclist-python-trip-blog",
    title: "Cyclist Bike Share Analysis with Python",
    category: "Python",
    summary: "In-depth exploratory data analysis and visual narrative of cyclist trip patterns using Python, Pandas, and Seaborn.",
    readTime: "12 min read",
    date: "Jun 17, 2025",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Urban Analytics"],
    link: "https://ajay333a.quarto.pub/python_blog/posts/cyclist_trip_analysis/cyc_trip_analysis.html",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "palmer-penguins-ml-blog",
    title: "Predict the sex of the Penguin Species",
    category: "R",
    summary: "Building a machine learning model to predict the sex of three species of penguins of Palmer Penguins data with tidymodels.",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    tags: ["Machine Learning", "EDA", "tidymodels", "Random Forest"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/palmer_penguins_ml/palmerpenguins_ml.html",
    image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "data-treatment-effect-blog",
    title: "Effect of treatments on leaves (Thesis Research)",
    category: "R",
    summary: "An experiment conducted to find the rooting potential of angiosperm leaves when treated with different phyto-hormones.",
    readTime: "7 min read",
    date: "Dec 31, 2024",
    tags: ["ANOVA", "Biostatistics", "R", "EDA", "Thesis"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/data_analysis_for-thesis/data_treatment_effect.html",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "cyclist-bike-share-blog",
    title: "Cyclist Bike Share Trip Analysis (R)",
    category: "R",
    summary: "Comprehensive 5M+ record bike trip analysis in R exploring casual riders vs. annual members to optimize marketing strategy.",
    readTime: "17 min read",
    date: "Dec 14, 2024",
    tags: ["R", "dplyr", "ggplot2", "EDA", "CapStone"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/cyclist_trip_analysis/cyclist_bike_202207_202306.html",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "iris-ml-classification-blog",
    title: "Iris ML Classification with Random Forest & KNN",
    category: "R",
    summary: "Machine learning classification testing out Random Forest and K-Nearest Neighbors on the multi-class Iris dataset.",
    readTime: "5 min read",
    date: "Oct 21, 2024",
    tags: ["Machine Learning", "Random Forest", "KNN", "EDA"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/iris_ML/iris_ml_classification.html",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "meds-side-effects",
    title: "Medicines Side-effects and their Substitutes",
    category: "R",
    summary: "Extensive exploratory data analysis on 248,000+ medical drugs exploring usage trends, adverse symptoms, and substitutes.",
    readTime: "11 min read",
    date: "Oct 10, 2024",
    tags: ["R", "ggplot2", "dplyr", "EDA", "Healthcare"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/meds_analysis/Medicines_usage_sideeffects.html",
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&w=800&q=80"
  },
  {
    id: "diamonds-ml-blog",
    title: "Predict Price of Diamonds with tidymodels",
    category: "R",
    summary: "Building regression and predictive models to predict the price of diamonds based on the 4Cs using R and tidymodels.",
    readTime: "5 min read",
    date: "Dec 10, 2023",
    tags: ["Modeling", "Machine Learning", "R-code", "EDA"],
    link: "https://ajay333a.quarto.pub/ajay333a/posts/diamonds_ml/ml_diamonds.html",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80"
  }
];
