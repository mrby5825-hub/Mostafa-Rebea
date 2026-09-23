import type {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  ServiceItem,
  Skill,
  SocialLink,
  StatItem,
} from '@/types';
import { SOCIALS } from './links';

export const PERSONAL = {
  name: 'Mostafa Rebea Ahmed',
  role: 'Data Analyst · Power BI Developer · Machine Learning Practitioner',
  location: 'Cairo, Egypt',
  phone: SOCIALS.phone,
  email: SOCIALS.email,
  summary:
    'Data Analyst and Power BI Developer with hands-on experience in Python, SQL, Power BI, Excel, and data visualization. Experienced in data cleaning, exploratory data analysis (EDA), statistical analysis, data modeling, DAX, and interactive dashboard development. Built end-to-end analytics solutions across sales, e-commerce, customer behavior, business performance, and customer churn. Completed the Digital Egypt Pioneers Initiative (DEPI) Microsoft Data Engineer Track, with practical exposure to machine learning, data engineering, Azure fundamentals, and cloud-based data workflows.',
  heroSummary:
    'I design and build Business Intelligence solutions — from Power BI dashboards and SQL data models to Python-driven analysis and machine learning — turning raw, messy data into reporting that supports real business decisions.',
  cvPath: '/cv/Mostafa_Rebea_Ahmed_Resume.pdf',
  profileImage: '/images/profile/Por images.jpg',
};

export const HERO_TITLES: string[] = [
  'Data Analyst',
  'Power BI Developer',
  'Business Intelligence Developer',
  'Machine Learning Practitioner',
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: SOCIALS.github, icon: 'github' },
  { label: 'LinkedIn', url: SOCIALS.linkedin, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${SOCIALS.email}`, icon: 'mail' },
];

export const HERO_STATS: StatItem[] = [
  { label: 'Orders Analyzed', value: 100, suffix: 'K+' },
  { label: 'Dashboard Pages Shipped', value: 25, suffix: '+' },
  { label: 'ML Model ROC-AUC', value: 84.21, suffix: '%' },
  { label: 'End-to-End Projects', value: 11, suffix: '+' },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'iaems',
    school: 'International Academy for Engineering and Media Sciences (IAEMS)',
    degree: 'Bachelor of Business Administration',
    period: 'Graduation: June 2026 · Very Good Standing',
    detail:
      'Relevant Coursework: Business Statistics, Data Analysis, Market Research, Consumer Behavior, Digital Marketing, Business Communication',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'independent-analytics',
    role: 'Independent Data Analytics Projects',
    organization: 'Remote',
    period: '2025-12 – Present',
    location: 'Remote',
    bullets: [
      'Built end-to-end analytics projects using SQL, Python, Excel, Power BI, and SPSS, transforming raw datasets into actionable, stakeholder-ready insights.',
      'Applied data cleaning, exploratory data analysis, statistical analysis, and interactive dashboard development across real-world datasets.',
      'Produced data-driven business reports and recommendations to support data-driven decision-making.',
    ],
  },
  {
    id: 'research-analyst',
    role: 'Research Data Analyst',
    organization: 'International Academy for Engineering and Media Sciences (IAEMS)',
    period: '2026-02 – 2026-06',
    location: 'Cairo, Egypt',
    bullets: [
      'Designed and analyzed a quantitative consumer behavior research study involving 64 participants, examining promotional strategies and perceived value.',
      'Conducted statistical analysis using SPSS, including regression analysis and hypothesis testing, with the model explaining 62% of the variance in perceived value (R² = 0.62).',
      'Developed and presented research findings and data-driven recommendations to support business strategy.',
    ],
  },
  {
    id: 'depi',
    role: 'DEPI — Microsoft Data Engineer Track',
    organization: 'Ministry of Communications and Information Technology (MCIT), Egypt',
    period: '2025-06 – 2025-12',
    location: 'Egypt',
    bullets: [
      'Completed an intensive technical track covering Python, SQL, Power BI, Data Engineering, Azure fundamentals, and Machine Learning.',
      'Built multiple hands-on projects applying data analysis, business intelligence, data engineering, and machine learning concepts.',
      'Collaborated with peers and mentors to design and implement data-driven solutions.',
    ],
  },
  {
    id: 'orange-digital-center',
    role: 'Data Analysis & AI Tools Trainee',
    organization: 'Orange Digital Center Egypt',
    period: '2026-08 – 2026-09',
    location: 'Cairo, Egypt',
    bullets: [
      'Completed hands-on training in data analysis and AI-assisted analytics, covering data cleaning, exploratory data analysis, visualization, predictive analysis, and AI-powered reporting.',
      'Worked with Python, Pandas, Google Colab, Power BI, Tableau Public, Google Sheets, ChatGPT, and Gemini.',
      'Applied data cleaning, EDA, visualization, and predictive analysis techniques to real-world datasets.',
      'Built interactive dashboards and presented analytical findings using data visualization and storytelling techniques.',
    ],
  },
];

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },

  // Business Intelligence
  { name: 'Power BI', category: 'Business Intelligence' },
  { name: 'Power Query', category: 'Business Intelligence' },
  { name: 'DAX', category: 'Business Intelligence' },
  { name: 'Excel', category: 'Business Intelligence' },

  // Data Analysis
  { name: 'Pandas', category: 'Data Analysis' },
  { name: 'NumPy', category: 'Data Analysis' },
  { name: 'Data Cleaning', category: 'Data Analysis' },
  { name: 'EDA', category: 'Data Analysis' },
  { name: 'Statistical Analysis', category: 'Data Analysis' },

  // Machine Learning
  { name: 'Scikit-learn', category: 'Machine Learning' },

  // Visualization
  { name: 'Matplotlib', category: 'Visualization' },
  { name: 'Seaborn', category: 'Visualization' },
  { name: 'Plotly', category: 'Visualization' },

  // Databases
  { name: 'MySQL', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'SQL Server', category: 'Databases' },
  { name: 'SQLite', category: 'Databases' },

  // Cloud
  { name: 'Azure', category: 'Cloud' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Jupyter Notebook', category: 'Tools' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'powerbi-dashboards',
    title: 'Power BI Dashboard Development',
    description:
      'Interactive Power BI dashboards built on clean data models with DAX-driven KPIs, filters, and drill-through analysis.',
    icon: 'powerbi',
  },
  {
    id: 'bi-solutions',
    title: 'Business Intelligence Solutions',
    description:
      'End-to-end BI solutions that transform raw data into structured, decision-ready reporting for stakeholders.',
    icon: 'bi',
  },
  {
    id: 'sql-analysis',
    title: 'SQL Data Analysis',
    description:
      'Querying, analyzing, and modeling relational data to answer business questions and support reporting workflows.',
    icon: 'sql',
  },
  {
    id: 'python-analysis',
    title: 'Python Data Analysis',
    description:
      'Data cleaning, exploratory analysis, statistical analysis, and visualization using Python, Pandas, and NumPy.',
    icon: 'python',
  },
  {
    id: 'ml-models',
    title: 'Machine Learning',
    description:
      'Supervised learning workflows covering preprocessing, model training, evaluation, tuning, and business interpretation.',
    icon: 'ml',
  },
  {
    id: 'business-reporting',
    title: 'Business Reporting & Visualization',
    description:
      'Clear reports and visualizations that turn complex datasets into actionable business insights.',
    icon: 'reporting',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'olist',
    title: 'Brazilian E-Commerce Performance Analytics Dashboard (Olist)',
    tagline:
      'A 5-page Power BI dashboard analyzing 100K+ orders, built on a star-schema model as a DEPI graduation project.',
    category: ['Power BI'],
    cover: '/images/projects/olist-01-cover.jpg',
    gallery: [
      {
        src: '/images/projects/olist-01-cover.jpg',
        caption: 'Cover page — Olist Brazil e-commerce analysis',
      },
      {
        src: '/images/projects/olist-02-executive.jpg',
        caption: 'Executive Overview — revenue, orders, AOV, review score',
      },
      {
        src: '/images/projects/olist-03-logistics.jpg',
        caption: 'Logistics Analysis — delivery delay & freight cost by state',
      },
    ],
    businessProblem:
      'Olist, a Brazilian e-commerce marketplace, had 9 separate relational tables (orders, customers, products, sellers, payments, reviews, geolocation) and no single view connecting them — leadership had no way to see revenue, delivery performance, and seller rankings together.',
    dataset:
      'Olist Brazilian E-Commerce public dataset — 9 relational tables, 100K+ orders (2016–2018)',
    tools: [
      'Power BI Desktop',
      'DAX (CALCULATE, RANKX, TOTALYTD)',
      'Power Query (M)',
      'Star Schema Modeling',
      'Bing Maps',
    ],
    insights: [
      'Delivered key business KPIs: Total Revenue 16.01M BRL, AOV 160.99, Average Review Score 4.09.',
      'São Paulo (SP) state contributes 69.9% of total revenue.',
      '75.24% of payments are made by credit card.',
      'Logistics analysis revealed an 8.87-day average delivery delay and an 8% late-order rate.',
      'Health & beauty is the top revenue-generating product category.',
    ],
    impact:
      'Solved it by building a star-schema model — one fact table (orders) linked to customer, product, seller, and geolocation dimensions — and turning it into a 5-page dashboard. Leadership can now steer inventory, logistics, and marketing decisions from real seller and delivery performance data instead of raw exports.',
    role:
      'Designed and built the entire dashboard end-to-end: data import, Power Query cleaning, star schema modeling, DAX measure authoring, visual layout, and dark glassmorphism theme design.',
    roadmap: [
      'Imported the 9 Olist relational tables and audited each for nulls, duplicates, and mismatched keys.',
      'Cleaned and shaped the data in Power Query, standardizing date and category fields.',
      'Built a star-schema model — one fact table (orders) linked to customer, product, seller, and geolocation dimensions.',
      'Wrote DAX measures using CALCULATE, RANKX, and TOTALYTD for revenue, seller ranking, and trend KPIs.',
      'Designed the 5-page report layout — Executive Overview, Logistics, Product, Seller, and Customer pages — with a dark glassmorphism theme.',
      'Added Bing Maps visuals for state-level revenue and delivery-delay analysis, then tested and published the report.',
    ],
    githubKey: 'olist',
    featured: true,
  },

  {
    id: 'telcoChurn',
    title: 'Telco Customer Churn Prediction — End-to-End ML Pipeline',
    tagline:
      'A complete supervised ML pipeline predicting customer churn, from EDA through tuned model evaluation.',
    category: ['Python / ML'],
    cover: '/images/projects/churn-01-distribution.jpg',
    gallery: [
      {
        src: '/images/projects/churn-01-distribution.jpg',
        caption:
          'Churn distribution — 26.5% churn rate across 7,043 customers',
      },
      {
        src: '/images/projects/churn-02-boxplots.jpg',
        caption:
          'Numeric features vs churn — tenure, monthly & total charges',
      },
      {
        src: '/images/projects/churn-03-categorical-1.jpg',
        caption:
          'Contract, internet service & payment method vs churn',
      },
      {
        src: '/images/projects/churn-04-categorical-2.jpg',
        caption:
          'Gender, senior citizen & partner status vs churn',
      },
    ],
    businessProblem:
      'Telecom companies lose revenue every time a customer leaves, and by the time churn shows up in the billing numbers it is already too late to act — the business needed a way to flag high-risk customers before they cancel.',
    dataset:
      'Telco Customer Churn dataset — 7,043 customer records, 21 features',
    tools: [
      'Python 3',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'GridSearchCV',
    ],
    insights: [
      'Full EDA across churn distribution, numeric boxplots, categorical breakdowns, and correlation analysis.',
      'Trained and compared 4 classifiers: Logistic Regression, Decision Tree, Random Forest, KNN.',
      'Diagnosed Random Forest overfitting (train 0.998 vs test 0.786) and resolved it with a 120-fit, 5-fold GridSearchCV.',
      'Best model reached 84.21% ROC-AUC.',
      'Top churn drivers: TotalCharges (17.8%), tenure (17.6%), MonthlyCharges (12.7%).',
      'Month-to-month contracts, fiber-optic internet, and electronic-check payment show the highest churn concentration.',
    ],
    impact:
      'Solved it with a tuned model reaching 84.21% ROC-AUC, and translated the top churn drivers (TotalCharges, tenure, MonthlyCharges) into concrete retention moves — loyalty programs, bundle discounts, and contract promotions — so outreach can target high-risk customers before they leave.',
    role:
      'Built the entire 25-cell notebook pipeline end-to-end: data loading, EDA, preprocessing, model training, evaluation, overfitting diagnosis, hyperparameter tuning, and business interpretation.',
    roadmap: [
      'Loaded and inspected the 7,043-row dataset, checking for missing values and inconsistent types (e.g. TotalCharges stored as text).',
      'Ran full EDA — churn distribution, numeric boxplots, categorical breakdowns, and a correlation matrix.',
      'Preprocessed the data: encoded categorical features, scaled numeric features, and split into train/test sets.',
      'Trained and compared 4 classifiers — Logistic Regression, Decision Tree, Random Forest, KNN.',
      'Noticed Random Forest was overfitting (train 0.998 vs test 0.786) and diagnosed the gap.',
      'Ran a 120-fit, 5-fold GridSearchCV to tune hyperparameters and close the overfitting gap.',
      'Evaluated the final model (84.21% ROC-AUC) and translated the top churn drivers into retention recommendations.',
    ],
    githubKey: 'telcoChurn',
    featured: true,
  },

  {
    id: 'chinook',
    title: 'Chinook Music Store Analytics — Multi-Page Power BI Dashboard',
    tagline:
      'A 9-page Power BI dashboard on the Chinook relational SQL database with drill-through customer and country analysis.',
    category: ['Power BI', 'SQL'],
    cover: '/images/projects/Home.jpg',
    gallery: [
      {
        src: '/images/projects/Sales.jpg',
        caption:
          'Sales Dashboard — sales performance, revenue, and genre analysis',
      },
      {
        src: '/images/projects/Customer Chinook .jpg',
        caption:
          'Customer Analysis — customer performance and purchasing insights',
      },
      {
        src: '/images/projects/Music Page 3.jpg',
        caption:
          'Music Analysis — genre, album, and track performance',
      },
      {
        src: '/images/projects/Artist Page 4.jpg',
        caption:
          'Artist Analysis — artist performance and track distribution',
      },
      {
        src: '/images/projects/Employee Page 5.jpg',
        caption:
          'Employee Analysis — employee performance and sales contribution',
      },
      {
        src: '/images/projects/Country Page 6.jpg',
        caption:
          'Country Analysis — sales and customer distribution by country',
      },
      {
        src: '/images/projects/Drill Customer Page 7.jpg',
        caption:
          'Customer Drill-through — detailed customer and invoice analysis',
      },
      {
        src: '/images/projects/Drill Country Page 8.jpg',
        caption:
          'Country Drill-through — detailed country and customer analysis',
      },
    ],
    businessProblem:
      'The Chinook digital music store had sales, catalog, employee, and customer data spread across a normalized, multi-table SQL database with no connected reporting layer — nobody could answer catalog, sales, or staffing questions without writing a new query each time.',
    dataset:
      'Chinook relational SQL database — sales, customer, employee, artist, album, and country tables',
    tools: [
      'Power BI Desktop',
      'DAX',
      'SQL (Chinook Database)',
      'Power Query',
      'Bing Maps',
      'Drill-through',
    ],
    insights: [
      '9 pages: Home, Sales, Customer, Music, Artist, Employee, Country, and two drill-through pages.',
      'Genre distribution: Rock 45.79%, Latin 21.17%, with 275 total artists tracked.',
      'Iron Maiden identified as the top artist by track count.',
      '59 customers across 53 cities and 24 countries, with per-customer AOV and invoice drill-through.',
      '8 employees across 5 job titles with an even ~33% sales split among the top 3 reps.',
    ],
    impact:
      'Solved it by modeling the relational schema directly in Power BI and building 9 connected pages with cross-page drill-through, so a country or customer click surfaces its own detail page — giving store operators one connected model instead of ad-hoc SQL queries.',
    role:
      'Modeled the Chinook database in Power BI, built all 9 pages with consistent DAX measures, implemented cross-page drill-through, and designed the teal icon-based navigation system.',
    roadmap: [
      'Connected to the Chinook relational SQL database and reviewed the schema (sales, customer, employee, artist, album, country tables).',
      'Built the relationships between tables in Power BI and validated the model with test measures.',
      'Wrote the core DAX measures for sales, AOV, and per-customer/country breakdowns.',
      'Designed the 9-page layout — Home, Sales, Customer, Music, Artist, Employee, Country, plus two drill-through pages.',
      'Implemented cross-page drill-through so a country or customer click surfaces its own detail page.',
      'Built the teal icon-based navigation system and tested every page and drill-through path before publishing.',
    ],
    githubKey: 'chinook',
    featured: true,
  },

  {
    id: 'clevelSales',
    title: 'C-Level Sales Analytics Dashboard — D-GITAL Technology Data Center',
    tagline:
      'An enterprise Power BI dashboard summarizing $8.34bn in sales across categories, stores, and regions for C-suite reporting.',
    category: ['Power BI'],
    cover: '/images/projects/clevel-01-cover.jpg',
    gallery: [
      {
        src: '/images/projects/clevel-01-cover.jpg',
        caption:
          'Cover page — C-Level Sales Analysis, D-GITAL Technology Data Center',
      },
      {
        src: '/images/projects/clevel-02-kpis.jpg',
        caption:
          'Executive KPIs — total sales, revenue, returns, top sub-categories',
      },
    ],
    businessProblem:
      'A technology retailer\'s C-suite had no single, always-current view of $8.34bn in sales across 306 stores, multiple brands, and store classes — decisions on which categories and stores to prioritize were being made off scattered exports.',
    dataset:
      'Enterprise sales dataset — product categories, store classifications, brands, and regions',
    tools: [
      'Power BI Desktop',
      'DAX',
      'Power Query',
      'Bing Maps',
      'Drill-through',
    ],
    insights: [
      'Executive KPI cards: Total Sales $8.34bn, Total Revenue $8.24bn, Total Return Amount $97.14M, Total Quantity 37M.',
      'Monthly revenue trend growing from $0.56bn (January) to $0.79bn (December).',
      'Top 5 sub-categories: Camcorders, Projectors & Screens, Laptops, Digital SLR Cameras, Home Theater Systems.',
      'Store performance split: 294 active vs 12 inactive locations (10 relocating, 2 closed).',
      'Sales segmented across Economy, Regular, and Deluxe store classes, with a 10-brand performance table.',
    ],
    impact:
      'Solved it with an executive KPI landing page plus regional drill-through, giving executives one source of truth for $8.34bn in sales and surfacing top-performing categories, store performance gaps, and return patterns for faster decisions.',
    role:
      'Designed and built the complete multi-page report: data modeling, DAX measure creation, executive KPI layout, and regional drill-through.',
    roadmap: [
      'Imported the enterprise sales dataset and cleaned product, store, and regional dimension fields.',
      'Built the data model linking sales transactions to category, store, and region dimensions.',
      'Authored the DAX measures behind the Total Sales, Revenue, Return Amount, and Quantity KPI cards.',
      'Designed the executive KPI landing page for C-suite reporting.',
      'Added regional drill-through so a store or region click opens its own performance detail page.',
      'Reviewed the finished report against real numbers before handing it off for executive use.',
    ],
    githubKey: 'clevelSales',
  },

  {
    id: 'salesPerformance',
    title: 'Sales Performance Analytics Dashboard (AdventureWorks-style)',
    tagline:
      'A 4-page Power BI dashboard built from 4 raw source files, connecting products, regions, customers, and 2011–2014 sales into one model.',
    category: ['Power BI'],
    cover: '/images/projects/Executive.jpg',
    gallery: [
      {
        src: '/images/projects/Executive.jpg',
        caption:
          'Executive Overview — KPI cards, target vs. actual, revenue trend, and category breakdown',
      },
      {
        src: '/images/projects/Regional.jpg',
        caption:
          'Regional Performance — regional sales, revenue distribution, and performance analysis',
      },
      {
        src: '/images/projects/Prodecut.jpg',
        caption:
          'Product Analysis — product, category, and subcategory performance',
      },
      {
        src: '/images/projects/Customer.jpg',
        caption:
          'Customer Analysis — customer segments, revenue, and purchasing behavior',
      },
    ],
    businessProblem:
      'The sales organization\'s data lived in 4 separate raw files — Products, Regions, Customers, and yearly Sales sheets (2011–2014) — with real data-quality problems (mixed text/number fields, string \'NULL\' date values) and no connected model, so leadership had no single dashboard covering revenue, regions, products, and customers together.',
    dataset:
      'AdventureWorks-style multinational sales data — Products (37 subcategories: bikes, components, clothing, accessories), Regions (US, Canada, France, Germany, Australia, UK), ~19,000 customers, order-level Sales transactions (2011–2014)',
    tools: [
      'Power BI Desktop',
      'DAX',
      'Power Query (M)',
      'Star-Schema Data Modeling',
    ],
    insights: [
      'Cleaned mixed text/number fields and string \'NULL\' date values across all 4 raw sources in Power Query.',
      'Built a star-schema model connecting Sales to Product, Customer, and Region.',
      'Added 5 calculated columns and 4 DAX measures — Revenue, Profit, Margin %, YoY Growth, Average Order Value.',
      'Executive Overview page: KPI cards, a gauge (target vs. actual), a revenue trend line, and a category column chart.',
      'Product Analysis page uses a decomposition tree to drill Total Profit down through Category → Subcategory → Product.',
    ],
    impact:
      'Solved it by cleaning and star-schema-modeling all 4 sources into one connected dataset, then building 4 dashboard pages — Executive, Regional Performance, Product Analysis, Customer Analysis — so sales leadership can see where growth and margin are coming from instead of relying on flat exports.',
    role:
      'Built the full model and report from raw files end-to-end: Power Query cleaning (fixing mixed text/number types and \'NULL\'-string date fields), relationship modeling, DAX measure authoring, and 4-page report design.',
    roadmap: [
      'Imported the 4 source files (Products, Regions, Customers, Sales-by-year) and reviewed each schema.',
      'Cleaned the data in Power Query — fixed SellStartDate/SellEndDate string \'NULL\' values, mixed text/number ProductID and StandardCost fields, and standardized date types.',
      'Built the relationships between Products, Regions, Customers, and the yearly Sales tables (star schema).',
      'Wrote the 4 core DAX measures (Revenue, Profit, Margin %, YoY Growth) plus 5 calculated columns.',
      'Designed the 4-page report — Executive Overview, Regional Performance, Product Analysis, Customer Analysis.',
      'Added the decomposition tree, filled map, and gauge visuals, then tested navigation and filtering before finalizing.',
    ],
    githubKey: 'salesPerformance',
  },

  {
    id: 'globalSuperStore',
    title: 'Global Superstore — Sales & Profit Dashboard',
    tagline:
      'An 8-page Power BI dashboard tracking $2.30M in global sales (2015–2018) across categories, segments, discounting, and shipping.',
    category: ['Power BI'],
    cover: '/images/projects/Home Global.jpg',
    gallery: [
      {
        src: '/images/projects/Executive Global.jpg',
        caption:
          'Executive Overview — Global Superstore sales, profit, and key performance highlights',
      },
      {
        src: '/images/projects/Key Metrics Overview.jpg',
        caption:
          'Key Metrics Overview — revenue, profit, margin, and overall business performance',
      },
      {
        src: '/images/projects/Product Caterory Breadown.jpg',
        caption:
          'Product & Category Breakdown — sales and profit performance across product categories',
      },
      {
        src: '/images/projects/Revenue & Growth Trend.jpg',
        caption:
          'Revenue & Growth Trend — year-over-year revenue performance from 2015 to 2018',
      },
      {
        src: '/images/projects/Regional Performance.jpg',
        caption:
          'Regional Performance — sales and profit distribution across states and cities',
      },
      {
        src: '/images/projects/Discount Impact.jpg',
        caption:
          'Discount Impact — relationship between discounting, sales, and profitability',
      },
      {
        src: '/images/projects/Shipping Performance.jpg',
        caption:
          'Shipping Performance — shipping modes, delivery performance, and fulfillment analysis',
      },
    ],
    businessProblem:
      'Leadership had no clear read on where Global Superstore\'s sales and profit were coming from — by category, customer segment, and geography — how performance had trended year over year, how discounting was affecting profit, or how shipping/fulfillment was performing.',
    dataset:
      'Global Superstore dataset (US market), 9,994 transaction rows, 2015–2018',
    tools: ['Power BI Desktop', 'DAX', 'Power Query'],
    insights: [
      '52% YoY revenue growth trend, from $0.48M in 2015 to $0.73M in 2018.',
      'Segment split: Consumer 50.56%, Corporate 30.74%, Home Office 18.7%.',
      'Profit KPIs: Total Profit $286K at a 12% margin.',
      'Technology leads categories at $0.84M sales / $145K profit, ahead of Furniture and Office Supplies.',
      'Top US markets: New York City ($256K) and Los Angeles ($175K).',
    ],
    impact:
      'Solved it with 8 focused pages — executive summary, KPIs, category breakdown, revenue trend, regional performance, discount impact, and shipping performance — giving leadership one place to see growth, margin, and fulfillment together.',
    role:
      'Built the dashboard end-to-end, from data modeling through DAX measures and city-level geographic breakdowns, iterating through several design directions before the final custom theme.',
    roadmap: [
      'Loaded the 9,994-row Global Superstore dataset and cleaned date, region, and category fields in Power Query.',
      'Modeled the data and wrote the DAX measures behind the Sales, Profit, and margin KPI cards (including YoY growth).',
      'Built the category/segment breakdown page and the YoY revenue trend page.',
      'Built the Regional Performance page (state/city map) and the Discount Impact page.',
      'Built the Shipping Performance page and finished the icon-badge KPI cards, gradient area chart, and radial gauge theme.',
      'Tested all 8 pages and finalized the report for presentation.',
    ],
    githubKey: 'globalSuperStore',
  },

  {
    id: 'studentPerformance',
    title: 'Student Performance Intelligence — Streamlit Analytics & ML Dashboard',
    tagline:
      'An interactive Streamlit dashboard that predicts student outcomes and caught — then fixed — a data leakage bug in its own ML pipeline.',
    category: ['Python / ML'],
    cover: '/images/projects/spi-00-poster.png',
    gallery: [
      {
        src: '/images/projects/spi-00-poster.png',
        caption:
          'Model audit — R² corrected from an inflated 1.000 to an honest 0.79–0.87',
      },
    ],
    businessProblem:
      'Educators had no easy way to monitor student performance or flag at-risk students early from raw attendance, study-habit, and demographic data — and the first version of the prediction model looked suspiciously perfect (R² = 1.000), which meant it could not be trusted for real decisions.',
    dataset:
      '30,641 student records — attendance, study habits, and socio-demographic fields',
    tools: [
      'Python 3',
      'Pandas',
      'Scikit-learn',
      'Streamlit',
      'Plotly',
      'Joblib',
    ],
    insights: [
      'Built a 5-tab Streamlit dashboard (Overview, Subjects, Attendance, Insights, AI Prediction) with a live "What-If" simulator using MultiOutputRegressor with a Random Forest estimator to predict Academic Index and Overall Performance.',
      'Identified a suspicious R² = 1.000 during model validation and traced it to target leakage: target-derived features were included in the training data.',
      'Audited every column, removed the six leakage-causing features, and rebuilt the pipeline using only pre-outcome attendance, study habits, and socio-demographic data.',
      'Achieved realistic R² values of 0.79 for Academic Index and 0.87 for Overall Performance, down from the inflated 1.000 / 0.971 results.',
      'Restructured the project into a clean, modular repo (src/, app/, models/, data/) with a proper train/test split and a single bundled model artifact.',
    ],
    impact:
      'Solved it by auditing every feature for leakage, removing the six offending columns, and rebuilding on honest pre-outcome data — trading an inflated 1.000 R² for a trustworthy 0.79–0.87, which is what actually ships to educators as a 5-tab dashboard with a live What-If simulator.',
    role:
      'Designed and built the full dashboard and ML pipeline solo — EDA, feature engineering, the original model, the leakage audit, the leak-free rebuild, and the Streamlit UI.',
    roadmap: [
      'Explored the 30,641-row dataset and engineered features from attendance, study habits, and demographics.',
      'Trained a first MultiOutputRegressor (Random Forest) to predict Academic Index and Overall Performance.',
      'Noticed a suspicious R² = 1.000 and traced it to target leakage — some features were mathematically derived from the targets.',
      'Audited every column, removed the six leaking features, and rebuilt the pipeline on honest, pre-outcome data only.',
      'Re-trained and validated the leak-free model, landing at a realistic R² of 0.79 / 0.87.',
      'Restructured the codebase into a clean src/ app/ models/ data/ layout and built the 5-tab Streamlit dashboard with a live What-If simulator.',
    ],
    githubKey: 'studentPerformance',
  },

  {
    id: 'retailExploration',
    title: 'Retail Sales Data Analysis & Exploration (Python / Pandas)',
    tagline: 'A Python and Pandas exploratory analysis of retail sales data.',
    category: ['Python / ML'],
    cover: '/images/projects/retail-01-cover.png',
    gallery: [
      {
        src: '/images/projects/retail-01-cover.png',
        caption:
          'Project cover — 1,000 transactions across 3 product categories, 9+ visual insights',
      },
    ],
    businessProblem:
      'The raw retail transaction data had no structure behind it yet — before any deeper modeling, the business needed to know total revenue, which categories were driving it, and whether there was seasonality or a customer segment worth targeting.',
    dataset:
      'Retail sales dataset — 1,000 transactions across 3 product categories (Electronics, Clothing, Beauty)',
    tools: ['Python 3', 'Pandas', 'Matplotlib', 'Seaborn'],
    insights: [
      'Total revenue of 456,000 across 1,000 transactions, for an average order value of 456.',
      'Category split is nearly even: Electronics 34.4% ($156,905), Clothing 34.1% ($155,580), Beauty 31.5% ($143,515).',
      'Seasonality found: May is the peak month ($53,150), September the weakest ($23,620).',
      'Gender split: Female 51% ($232,840) vs. Male 49% ($223,160).',
      'Identified the top 5 customers by spend and the strongest customer age groups (43, 34, 51).',
    ],
    impact:
      'Solved it by cleaning and profiling the raw transactions, engineering Revenue/Year/Month/Quarter fields, and producing 9+ visual breakdowns — exported as a cleaned dataset ready to feed into a Power BI/SQL layer.',
    role:
      'Performed the exploratory data analysis end-to-end in Jupyter Notebook — loading, cleaning, feature engineering, and visualization.',
    roadmap: [
      'Loaded and profiled the 1,000-transaction retail dataset (shape, types, summary stats).',
      'Removed duplicates, parsed dates, and engineered Revenue, Year, Month, and Quarter fields.',
      'Visualized revenue by category (bar), by gender (pie), by month (trend line), and by age group (bar).',
      'Identified the top 5 customers by spend and the strongest customer age groups.',
      'Exported a cleaned dataset for downstream use in Power BI/SQL.',
    ],
    githubKey: 'retailExploration',
  },

  {
    id: 'supermarketExcel',
    title: 'Multi-Sheet Sales Analytics Dashboard — Excel (Supermarket / P&C Sales)',
    tagline:
      'A 4-sheet Excel workbook with guided navigation, PivotTables, and dashboards across Egypt, Saudi Arabia, and the UAE.',
    category: ['Excel'],
    cover: '/images/projects/supermarket-01-navigator.jpg',
    gallery: [
      {
        src: '/images/projects/supermarket-01-navigator.jpg',
        caption: 'Dashboard Navigator — guided home page',
      },
      {
        src: '/images/projects/supermarket-02-payment.jpg',
        caption:
          'Payment Method Analysis — revenue & failure rate by method',
      },
    ],
    businessProblem:
      '10,000 rows of raw supermarket and product & category (P&C) sales data across three countries (Egypt, Saudi Arabia, UAE) sat unconsolidated, with no navigable way for stakeholders to see currency, country, or payment-method performance.',
    dataset:
      '10,000-row supermarket/P&C sales dataset — customer type, gender, product line, price, payment method, rating',
    tools: [
      'Microsoft Excel',
      'PivotTables',
      'PivotCharts',
      'Slicers',
      'Conditional Formatting',
      'VLOOKUP / INDEX-MATCH',
    ],
    insights: [
      'Total Sales of $22,736,200 across 10,000 orders, averaging $3,915.31 per order.',
      'EGP is the top currency by revenue at $10.18M.',
      'Mobile is the leading P&C category at 50% of sales ($11.12M), led by iPhone.',
      'Egypt leads all countries with 6,990 orders and $15.73M in revenue; Alexandria is the top-selling city.',
      'Pay On Delivery is the most-used payment method (17%) but also carries the highest failure rate (33%).',
    ],
    impact:
      'Solved it by cleaning and standardizing the currency/country/payment fields, then building a 4-sheet workbook with a guided Dashboard Navigator home page — surfacing that Egypt drives 69% of orders and that Pay On Delivery, despite being the most used method, has the highest failure rate, prioritizing payment-method fixes and city-level promotions.',
    role:
      'Built the complete workbook from raw data import through cleaning, PivotTable design, and 4-sheet dashboard creation with custom navigation.',
    roadmap: [
      'Imported the 10,000-row supermarket/P&C sales dataset and checked it for missing values and inconsistent entries.',
      'Cleaned and standardized the currency, country, and payment-method fields.',
      'Built PivotTables and PivotCharts for sales, revenue, and payment-method breakdowns.',
      'Added slicers and VLOOKUP/INDEX-MATCH lookups to connect the 4 sheets.',
      'Designed the guided Dashboard Navigator home page and the per-sheet dashboards for country, city, and payment-method analysis.',
    ],
    githubKey: 'supermarketExcel',
  },

  {
    id: 'pizzaSales',
    title: 'Pizza Sales Analysis (Excel)',
    tagline:
      'An interactive Excel dashboard turning restaurant order data into product, demand, and category-mix decisions.',
    category: ['Excel'],
    cover: '/images/projects/pizza-01-cover.jpg',
    gallery: [
      {
        src: '/images/projects/pizza-01-cover.jpg',
        caption: 'Pizza Sales Analysis — Excel Dashboard',
      },
    ],
    businessProblem:
      'A pizza restaurant had raw order-level sales data but no clear read on which pizzas, categories, and time windows actually drove revenue and demand — decisions on menu and staffing were being made without that visibility.',
    dataset:
      'Cleaned pizza sales dataset — order, pizza, size, category, and pricing fields enriched with Year, Quarter, Hour, Time Period, and Weekend/Weekday helper columns',
    tools: [
      'Microsoft Excel',
      'PivotTables',
      'PivotCharts',
      'Slicers',
      'Timeline',
      'Conditional Formatting',
      'Data Model',
    ],
    insights: [
      'Structured the workbook into 4 linked pages — Executive Overview, Sales & Demand Analysis, Product Performance, and Category, Size & Product Mix — each with KPI cards, slicers, and an insight panel.',
      'Defined orders as a Distinct Count of order_id rather than row count, since one order can contain multiple pizzas — keeping AOV and per-order metrics accurate.',
      'Compared Revenue vs Quantity by category to separate categories that win on volume from those that win on price.',
      'Cross-checked peak ordering hour against peak revenue hour — the two did not always match — using a Day × Time Period heatmap to surface the busiest demand windows.',
      'Quantified product concentration by calculating what share of total revenue the Top 10 pizzas account for, and broke down revenue by category, size, and category-size combination.',
    ],
    impact:
      'Solved it with a connected, slicer-driven workbook — Data → Analysis → KPIs → Visualization → Insight — that separates volume winners from price winners and surfaces real peak-demand windows, giving restaurant management a basis for menu, pricing, and staffing decisions instead of gut feel.',
    role:
      'Built the complete workbook end-to-end: defined the KPI logic, built every PivotTable and PivotChart with Report Connections across all 4 pages, and designed the executive navigation and layout.',
    roadmap: [
      'Cleaned the raw pizza sales data and added helper columns — Year, Quarter, Hour, Time Period, Weekend/Weekday.',
      'Loaded the cleaned table into the Data Model to support Distinct Count measures.',
      'Built the Executive Overview page with KPI cards driven by a Distinct Count of order_id (not row count).',
      'Built the Sales & Demand Analysis page with a Day × Time Period heatmap to find real peak-demand windows.',
      'Built the Product Performance page comparing Revenue vs Quantity by category to separate volume winners from price winners.',
      'Built the Category, Size & Product Mix page and connected all 4 pages with shared slicers and Report Connections.',
    ],
    githubKey: 'pizzaSales',
  },

  {
    id: 'hrAnalytics',
    title: 'HR Analytics & Employee Attrition Analysis',
    tagline:
      'An end-to-end HR analytics project on 1,000 employee records, uncovering the drivers behind attrition, performance, and pay across five departments.',
    category: ['Power BI', 'Excel'],
    cover: '/images/projects/hr-01-cover.jpg',
    gallery: [
      {
        src: '/images/projects/hr-01-cover.jpg',
        caption:
          'Case study cover — average rating, total salary, absence, and gender ratio KPIs',
      },
    ],
    businessProblem:
      'Across IT, HR, Finance, Marketing, and Admin, leadership had no clear picture of why employees were leaving, whether pay and performance were aligned, or which departments needed workload attention — just 1,000 raw employee records with tenure, overtime, absence, promotion, and salary fields.',
    dataset:
      '1,000 employee records — tenure, overtime hours, absence days, promotion history, and salary distributions across 5 departments',
    tools: ['Python (Pandas)', 'Microsoft Excel', 'Power BI', 'Tableau'],
    insights: [
      'Processed and structured core HR metrics — tenure, overtime hours, absence days, promotion history, and salary — for analysis.',
      'Identified a 49.6% attrition rate and correlated resignations with overtime workload, absenteeism, and evaluation scores to isolate the key turnover drivers.',
      'Evaluated the link between training hours and career progression, finding a 49.3% five-year promotion rate tied to performance ratings.',
      'Analyzed workforce demographics and payroll distribution — average salary ≈ $12,477 — broken down by gender, age group, and department.',
    ],
    impact:
      'Solved it by correlating resignations against overtime, absenteeism, and evaluation scores to isolate the real attrition drivers — identifying the core retention risks and recommending workload balancing to reduce burnout, while showing how continuous learning and structured promotions support long-term workforce stability.',
    role:
      'Owned the project end-to-end: cleaned and structured the HR dataset in Python/Excel, ran the attrition and performance analysis, and built the interactive HR dashboard used to present findings.',
    roadmap: [
      'Defined the core HR business questions (headcount, attrition drivers, salary vs. performance, promotion patterns) before touching the data.',
      'Cleaned and structured the 1,000-record HR dataset in Python (Pandas) — tenure, overtime, absence, promotion history, salary — validating IDs, dates, and categorical values.',
      'Engineered analytical fields: tenure, age group, salary band, performance category, training level, overtime level, and employee status (Active/Left).',
      'Correlated resignations against overtime workload, absenteeism, and evaluation scores to isolate the main attrition drivers (49.6% attrition rate).',
      'Analyzed the link between training hours and 5-year promotion rates (49.3%) against performance ratings.',
      'Broke down salary (avg. ≈ $12,477) and headcount by gender, age group, and department.',
      'Built the interactive HR dashboard (Executive Overview, Compensation & Performance, Employee Development, Attrition & Attendance) in Power BI/Tableau, validated every KPI against the source data, and documented the key insights.',
    ],
    githubKey: 'hrAnalytics',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'depi',
    title: 'Digital Egypt Pioneers Initiative (DEPI) — Microsoft Data Engineer Track',
    issuer: 'Ministry of Communications and Information Technology (MCIT), Egypt',
    date: 'June – December 2025',
    image: '/images/certificates/depi.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'route',
    title: 'Data Analysis Diploma',
    issuer: 'Route IT Training Center',
    date: '25 / 10 / 2025',
    image: '/images/certificates/route-it.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'mec',
    title: 'Data Analysis Engineering Diploma',
    issuer: 'MEC Academy',
    date: '2025',
    image: '/images/certificates/mec-academy.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
];

export const ADDITIONAL_CERTIFICATES_INITIAL_COUNT = 6;

export const ADDITIONAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'intro-data-analysis-workshop',
    title: 'Introduction to Data Analysis Workshop',
    issuer: '',
    date: '',
    image: '/images/certificates/Creativa Data Analysis.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'marketing-simulation',
    title: 'Marketing Simulation Program',
    issuer: '',
    date: '',
    image: '/images/certificates/Marketing Simulation Program.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'communication-course',
    title: 'Communication Course',
    issuer: '',
    date: '',
    image: '/images/certificates/Communication .jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'financial-accountant',
    title: 'Professional Financial Accountant',
    issuer: '',
    date: '',
    image: '/images/certificates/Professional Financial Accounting New.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'electronic-accounting',
    title: 'Electronic Accounting',
    issuer: '',
    date: '',
    image: '/images/certificates/Electronic Accounting New.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'accounting-banking',
    title: 'Accounting Banking',
    issuer: '',
    date: '',
    image: '/images/certificates/Accounting Banking .jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
  {
    id: 'excel-accounting',
    title: 'Excel Accounting',
    issuer: '',
    date: '',
    image: '/images/certificates/Excel Accounting New.jpg',
    credentialUrl: '',
    verifyUrl: '',
  },
];