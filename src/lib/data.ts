export const nav = [
  { href: "#about", label: "About" },
  { href: "#divisions", label: "Divisions" },
  { href: "#leadership", label: "Leadership" },
  { href: "#csr", label: "CSR" },
  { href: "#edge", label: "Why Us" },
];

export const aboutItems = [
  {
    title: "Local Expertise",
    body: "Headquartered in Juba with a deep understanding of the national regulatory and cultural landscape.",
  },
  {
    title: "National Reach",
    body: "Operating across all 10 states through five specialized verticals, bridging international expertise and local resilience.",
  },
  {
    title: "Economic Impact",
    body: "Strengthening the South Sudanese economy through local supply chains and workforce development programs.",
  },
];

export const verticals = [
  { icon: "🏗️", label: "Construction" },
  { icon: "💻", label: "Technology" },
  { icon: "📣", label: "Media" },
  { icon: "💰", label: "Finance" },
  { icon: "🛢️", label: "Oil & Gas" },
];

export type Division = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  leadRole: string;
  body: string;
  quote?: string;
  tagline?: string;
  cards: { title: string; body: string }[];
};

export const divisions: Division[] = [
  {
    id: "construction",
    tabLabel: "Construction & Engineering",
    eyebrow: "Division 1",
    title: "Construction & Engineering",
    lead: "Sunday Benjamin",
    leadRole: "Head of Construction",
    body: "We deliver durable, climate-adapted infrastructure. From swampy terrains to urban centers, we build to last with strict ISO safety protocols and full EPC management.",
    tagline: "Engineering · Procurement · Construction",
    cards: [
      { title: "Heavy Civil", body: "Rural feeder roads, all-weather highways, bridges, and drainage canals crucial for rainy season access." },
      { title: "Institutional", body: "Construction of schools, state hospitals, and administrative government offices across the nation." },
      { title: "Energy Infra", body: "Construction of power substations and solar farm foundations to power South Sudan's growth." },
      { title: "Real Estate", body: "High-end gated communities in Juba and affordable mass-housing schemes for the growing population." },
    ],
  },
  {
    id: "technology",
    tabLabel: "Technology & Digital",
    eyebrow: "Division 2",
    title: "Technology & Digital Solutions",
    lead: "David Apac",
    leadRole: "Head of Technology",
    body: "Digitizing South Sudan's public and private sectors to leapfrog into the 4th Industrial Revolution through innovative, scalable technology.",
    cards: [
      { title: "E-Governance", body: "Custom citizen service portals and digital record-keeping for government ministries." },
      { title: "Fintech Integration", body: "Mobile money reconciliation platforms and agency banking for remote areas." },
      { title: "Cybersecurity", body: "24/7 Security Operations Center (SOC) and penetration testing for banks and NGOs." },
      { title: "Infrastructure", body: "VSAT satellite internet for rural oil fields and fiber-optic backbone wiring." },
      { title: "Data Analytics", body: "Business intelligence dashboards for agriculture and trade forecasting." },
    ],
  },
  {
    id: "media",
    tabLabel: "Media & Advertisement",
    eyebrow: "Division 3",
    title: "Media & Advertisement",
    lead: "Akon Christine Chol",
    leadRole: "Head of Media & Advertisement",
    body: "",
    quote: "We are the voice of modern South Sudan, bridging traditional oral culture with digital reach.",
    cards: [
      { title: "Multilingual Content", body: "Production of radio/TV commercials in Arabic, Dinka, Nuer, and English to maximize local resonance." },
      { title: "Corporate Storytelling", body: "High-definition documentaries showcasing NGO impact and corporate social responsibility initiatives." },
      { title: "Digital Dominance", body: "SEO, social media management, and influencer partnerships targeting South Sudan's growing youth demographic." },
      { title: "Out-of-Home (OOH)", body: "Strategic billboard placements and signage along major Juba highways and urban centers." },
      { title: "Live Event Production", body: "Professional concert staging, corporate galas, and high-impact product launches." },
    ],
  },
  {
    id: "finance",
    tabLabel: "Financial Services",
    eyebrow: "Division 4",
    title: "Financial Services & Advisory",
    lead: "Maciec Marko Maciec",
    leadRole: "Chief Executive Officer",
    body: "The financial engine that powers trade, investment, and personal prosperity in a largely cash-based economy. We bridge the gap between local markets and global financial systems.",
    cards: [
      { title: "Trade Finance", body: "Letters of credit and cross-border payment facilitation for regional importers and exporters." },
      { title: "SME Lending", body: "Accessible working capital loans for small businesses in Konyo Konyo and other key markets." },
      { title: "Asset Management", body: "Pension fund advisory and diversified investment portfolios for long-term growth." },
      { title: "Insurance Brokerage", body: "Comprehensive cover for commercial fleets, construction sites, and medical evacuations." },
      { title: "Digital Wallets", body: "White-label payment solutions for telecoms and utility companies to drive financial inclusion." },
    ],
  },
  {
    id: "oilgas",
    tabLabel: "Oil & Gas",
    eyebrow: "Division 5",
    title: "Oil & Gas",
    lead: "Awut Melicine",
    leadRole: "Head of Oil & Gas",
    body: "Powering South Sudan's economic backbone with safe, sustainable energy solutions. We provide comprehensive support across the entire energy value chain.",
    tagline: "Upstream · Midstream · Downstream",
    cards: [
      { title: "Upstream Support", body: "Seismic data interpretation, drilling rig maintenance, and well-logging services in Upper Nile and Unity states." },
      { title: "Midstream", body: "Construction and integrity testing of export pipelines linking to Port Sudan, ensuring safe transit." },
      { title: "Downstream", body: "Strategic fuel depots and LPG distribution to reduce deforestation and power local industries." },
      { title: "Environmental", body: "Oil spill contingency planning and soil decontamination services to protect South Sudan's ecosystem." },
    ],
  },
];

export const board = [
  {
    name: "Dut Abraham",
    role: "Chairman",
    bio: "Visionary Strategist with over 30 years of experience in East African infrastructure and policy advocacy. He drives the group's long-term sustainability and governmental relations, ensuring strategic alignment with national development goals.",
  },
  {
    name: "Maciec Marko Maciec",
    role: "CEO & Head of Financial Services",
    bio: "The group's financial architect, Maciec oversees corporate strategy, capital raising, and the entire Financial Services division. He ensures rigorous fiscal discipline and robust growth across all business verticals.",
  },
];

export const council = [
  {
    name: "Sunday Benjamin",
    role: "Head of Construction",
    bio: "Civil Engineering Expert with 15 years in heavy civil infrastructure and residential high-rises.",
  },
  {
    name: "David Apac",
    role: "Head of Technology",
    bio: "Digital Transformation Pioneer specializing in Cloud, AI, and Cybersecurity solutions.",
  },
  {
    name: "Akon Christine Chol",
    role: "Head of Media & Advertisement",
    bio: "Creative Brand Guru with expertise in multi-platform storytelling and public relations.",
  },
  {
    name: "Awut Melicine",
    role: "Head of Oil & Gas",
    bio: "Energy Sector Veteran focused on upstream exploration and downstream logistics.",
  },
];

export const edge = [
  {
    icon: "🧩",
    title: "Integrated Solutions",
    body: "We offer comprehensive turnkey packages: from building oil roads and securing them with tech, to financing equipment and managing project media.",
    tag: "Synergy in Action",
  },
  {
    icon: "🌍",
    title: "Local Knowledge, Global Safety",
    body: "We operate with international safety standards (OSHA/ISO) while maintaining a deep understanding of local South Sudanese customs and labor laws.",
    tag: "World-Class Standards",
  },
  {
    icon: "📈",
    title: "Financial Strength",
    body: "Our dual leadership structure ensures that every project is backed by robust fiscal health, strategic capital raising, and rigorous discipline.",
    tag: "Fiscal Resilience",
  },
];

export const csr = [
  {
    icon: "🎓",
    title: "The Quantum Scholarship Fund",
    body: "Sending 50 bright students to university annually, with a strategic priority on supporting female engineers to lead the nation's future.",
  },
  {
    icon: "🚰",
    title: "Clean Water Access",
    body: "Leveraging our Construction division's resources to drill boreholes in rural communities, providing sustainable access to safe drinking water.",
  },
  {
    icon: "🛠️",
    title: "Youth Vocational Training",
    body: "Offering free 6-month certified courses in welding, IT, and digital marketing to empower unemployed youth with market-ready skills.",
  },
  {
    icon: "🏥",
    title: "Health Partners",
    body: "Executing free malaria prevention campaigns and providing medical supplies in partnership with local clinics across the 10 states.",
  },
];

export const contact = {
  address: "Quantum Synergy Tower, Plot 47, Ministerial Road, Juba, South Sudan",
  phones: ["+211 912 345 678", "+211 987 654 321"],
  emails: ["info@quantumsynergy.ss", "procurement@quantumsynergy.ss"],
};
