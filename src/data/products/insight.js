/** Clear, consistent business reporting with Insights and SEO Insights. */
import Insights from "../../assets/ProductClassic/insights.jpg"
import Seo from "../../assets/ProductClassic/seo.jpg"

import {
  LuLayoutDashboard,
  LuUsers,
  LuFilter,
  LuTruck,
  LuTrendingUp,
  LuHeartPulse,
  LuKeyRound,
  LuLink2,
  LuGauge,
  LuCrosshair
} from "react-icons/lu";

export const insights = {
  slug: "insights",
  name: "Insights",
  group: "insight",
  icon: "chart",
  image: Insights,
  status: "live",
  host: "insights.gc.mw",
  appUrl: "https://insights.gc.mw",
  tagline: "Business metrics calculated once and trusted across every team",
  summary: "Explore sales, orders, inventory, accounts and marketing in dashboards calculated on the server and displayed in your store’s timezone.",
  metaTitle: "Business Analytics Dashboard for E-commerce & SMBs  Cohorts, Funnels, Delivery",
  metaDescription:
    "Growcord Insights gives every team server-calculated dashboards for commerce, orders, inventory, accounting and marketing. Explore cohorts and customer lifetime value, funnels and UTM attribution, coupon performance, delivery-time metrics and sales team performance.",
  keywords: ["ecommerce analytics dashboard", "business intelligence for smb india", "cohort analysis tool", "sales dashboard software", "delivery performance metrics"],
  servicesData: [
    {
      id: 1,
      title: "Unified Revenue & Profit Analytics",
      icon: <LuLayoutDashboard />,
    },
    {
      id: 2,
      title: "Customer Cohort & LTV Retention",
      icon: <LuUsers />,
    },
    {
      id: 3,
      title: "End-to-End Conversion Funnels",
      icon: <LuFilter />,
    },
    {
      id: 4,
      title: "Delivery Speed & RTO Intelligence",
      icon: <LuTruck />,
    },
    {
      id: 5,
      title: "Channel-wise ROAS & CAC Attribution",
      icon: <LuTrendingUp />,
    },
  ],
  hero: {
    eyebrow: "Growcord Insights",
    title: "Reveal your true net margins with",
    highlight: "real-time profit intelligence",
    lede: "Stop calculating profitability in messy spreadsheets. Deduct actual courier fees, packaging costs, and RTO write offs automatically to see your true bottom line across all sales channels without delay.",
  },
  visual: "dashboard",
  facts: [
    { value: "5", label: "dashboards for commerce, orders, inventory, accounts and marketing" },
    { value: "1", label: "shared definition for each metric, across every screen" },
    { value: "p90", label: "delivery-time reporting alongside average and median" },
    { value: "All time", label: "view all-time data or choose a date range in your timezone" },
  ],
  audience: {
    persona: "Founders, operations leaders and analysts who spend Monday mornings combining store exports, courier reports and accounting data in spreadsheets  and still end up debating which figures are correct.",
    needs: ["Check revenue, order volume and AOV without exporting data", "Understand repeat purchases and customer lifetime value", "Identify which UTM sources bring in actual orders", "See how long deliveries take in practice", "Know that the same metric matches across reports"],
  },
  before: ["Four exports and a spreadsheet every Monday", "Different revenue figures on different screens", "Report dates that change depending on who opens them", "No clear picture of repeat customers"],
  after: ["Server-calculated dashboards for each team", "Consistent metric definitions across the platform and store", "Dates based on the store’s own timezone", "Built-in cohort analysis and customer lifetime value"],
  features: [
    { icon: "dashboard", title: "Dashboards for every team", text: "Commerce, orders, inventory, accounting and marketing dashboards, each focused on the metrics that team needs." },
    { icon: "check", title: "One definition for every metric", text: "Collected revenue, refunds due and delivery time are calculated once and used consistently throughout the platform." },
    { icon: "users", title: "Cohorts and customer lifetime value", text: "Understand repeat-purchase rates, cohort retention and customer lifetime value using real order data." },
    { icon: "filter", title: "Funnels and UTM attribution", text: "Follow the journey from visit to order and see which campaign sources lead to completed purchases." },
    { icon: "badgePercent", title: "Coupon performance", text: "Find out which coupon codes generate orders and what those promotions cost." },
    { icon: "gauge", title: "Delivery performance metrics", text: "Track average, median and p90 order-to-delivery times, time spent in each status, and RTO and NDR performance by courier." },
    { icon: "trend", title: "Sales team leaderboard", text: "Compare direct and assisted sales by team member, review workloads and spot orders that have been waiting too long." },
    { icon: "wallet", title: "Revenue you can rely on", text: "Cancelled paid orders are excluded from revenue, while money awaiting a refund is reported separately as refund due." },
  ],
  spotlights: [
    {
      eyebrow: "Accuracy",
      title: "Revenue that accounts for",
      highlight: "returns and refunds",
      text: "Collected revenue deducts refunds and excludes cancelled or returned orders. Payments that have not yet been refunded appear separately as refund due, so the dashboard distinguishes retained revenue from money still owed back to customers.",
      points: ["Partial refunds are accounted for accurately", "Refunds due appear as a separate figure", "The platform and store use the same calculation"],
      visual: {
        kind: "hbars",
        data: {
          title: "September · collected revenue breakdown",
          items: [
            { label: "Paid orders", value: 1189, display: "₹ 11.89L", tone: "gray" },
            { label: "Cancelled and returned", value: 198, display: "− ₹ 1.98L", tone: "gray" },
            { label: "Partial refunds", value: 60, display: "− ₹ 0.60L", tone: "gray" },
            { label: "Collected revenue", value: 931, display: "₹ 9.31L", tone: "green" },
          ],
        },
      },
    },
    {
      eyebrow: "Operations",
      title: "Measure delivery time",
      highlight: "as it really is",
      text: "Each shipment status is timed, giving you a clearer view of order-to-delivery times  including the slowest deliveries that averages alone can hide  and showing where orders spend the most time waiting.",
      points: ["Average, median and 90th-percentile delivery times", "Time spent in each shipment status", "RTO and NDR rates for each courier"],
      visual: { kind: "dashboard", host: "insights.gc.mw · fulfilment" },
    },
  ],
  steps: [
    { title: "Enable analytics", text: "Insights uses the order, inventory and accounting data you already have." },
    { title: "Choose a date range", text: "Review all-time results, this month or any custom period." },
    { title: "Give teams the right view", text: "Each team can focus on the dashboard relevant to its work." },
    { title: "Turn findings into action", text: "Address courier issues in Ship, recover carts in Reach and follow up on outstanding dues in Books." },
  ],
  connects: [
    { slug: "commerce", for: "Order, customer and funnel-event data" },
    { slug: "ship", for: "Delivery timelines and courier scorecards" },
    { slug: "books", for: "Accounting dashboards and figures" },
    { slug: "reach", for: "Campaign and coupon performance" },
    { slug: "wms", for: "Inventory value and ageing reports" },
  ],
  compare: {
    them: "Exports and spreadsheets",
    rows: [
      ["One metric definition across every screen", true, false],
      ["Dates calculated in the store’s timezone", true, "Varies"],
      ["Cohort analysis and customer lifetime value", true, "Manual"],
      ["p90 delivery time by courier", true, false],
      ["Revenue adjusted for refunds and cancellations", true, "Manual"],
      ["No need for weekly exports", true, false],
    ],
  },
  principles: [
    { icon: "check", title: "One calculation", text: "When the same metric appears on different screens, each uses the same underlying calculation." },
    { icon: "clock", title: "Your store’s timezone", text: "Each reporting day begins and ends according to your store’s timezone, not the viewer’s browser settings." },
    { icon: "eye", title: "Clear about missing data", text: "If a feature did not previously collect the required data, the dashboard says it is not tracked yet instead of filling the gap with made-up figures." },
    { icon: "lock", title: "Access based on permissions", text: "People can view only the dashboards permitted by their role." },
  ],
  roadmap: ["Daily WhatsApp summaries and threshold alerts", "Profit per order after shipping, RTO and advertising costs", "Scheduled PDF reports"],
  pricing: { title: "Included with your Growcord organisation", text: "Analytics is included with your store’s modules. Contact us to discuss analytics for businesses that do not use Growcord.", cta: { label: "Talk to sales", href: "/contact-us?interest=insights" } },
  faqs: [
    { q: "What can I see in Growcord Insights?", a: "Insights provides server-calculated dashboards for commerce, orders, inventory, accounting and marketing. Reports include cohort analysis and customer lifetime value, funnels and UTM sources, coupon performance and delivery-time metrics." },
    { q: "Why might two reports show different numbers?", a: "Different tools often calculate the same metric in different ways. Insights defines each metric once, and every screen  including Growcord’s own billing views  uses that shared definition." },
    { q: "Which timezone do reports use?", a: "Reports use your store’s timezone. The server calculates day and month boundaries, so the same report stays consistent wherever it is viewed." },
    { q: "Are cancelled orders included in revenue?", a: "No. Collected revenue excludes cancelled and returned orders and deducts partial refunds. Paid amounts that are still awaiting a refund appear separately as refund due." },
    { q: "Can I compare delivery performance across couriers?", a: "Yes. You can review average, median and 90th-percentile order-to-delivery times, time spent in each status, and RTO and NDR rates by courier." },
    { q: "Can I report on the sales team?", a: "Yes. The sales team view shows direct and assisted sales for each person, current workload and orders that have been waiting too long." },
  ],
};

export const seoInsights = {
  slug: "seo-insights",
  name: "SEO Insights",
  group: "insight",
  icon: "search",
  image: Seo,
  status: "beta",
  host: "seo.gc.mw",
  appUrl: "https://seo.gc.mw",
  tagline: "Website audits, keyword rankings and backlink tracking",
  summary: "Find website issues with scheduled crawls, track keyword rankings and monitor backlinks. Connect Google Search Console through your Growcord account.",
  metaTitle: "SEO Audit & Rank Tracking Tool  Site Health, Keywords, Backlinks (Beta)",
  metaDescription:
    "Growcord SEO Insights (beta) checks websites for technical SEO issues, tracks keyword rankings and backlinks, and connects Google Search Console through your Growcord account. Agencies can also create clear, client-ready reports.",
  keywords: ["seo audit tool", "keyword rank tracker india", "backlink checker", "technical seo audit", "search console reports"],
  servicesData: [
    {
      id: 1,
      title: "Technical Site Health & Audit",
      icon: <LuHeartPulse />,
    },
    {
      id: 2,
      title: "Target Keyword Rank Tracker",
      icon: <LuKeyRound />,
    },
    {
      id: 3,
      title: "Backlink Profile & Toxic Link Monitor",
      icon: <LuLink2 />,
    },
    {
      id: 4,
      title: "Core Web Vitals & Speed Diagnostics",
      icon: <LuGauge />,
    },
    {
      id: 5,
      title: "Competitor SERP & Gap Analysis",
      icon: <LuCrosshair />,
    },
  ],
  hero: {
    eyebrow: "SEO Insights · Beta",
    title: "Dominate organic search rankings with",
    highlight: "clear, automated SEO intelligence",
    lede: "An audit and rank toolkit built for modern online businesses. Scan page level health, monitor competitor keyword gaps, and optimize your organic discovery funnels without hiring an expensive agency.",
  },
  visual: "audit",
  facts: [
    { value: "50", label: "report modules to choose from" },
    { value: "Crawl", label: "scheduled technical website audits" },
    { value: "GSC", label: "Search Console connected through Growcord" },
    { value: "Beta", label: "currently rolling out to Growcord clients" },
  ],
  audience: {
    persona: "Business owners trying to understand why their websites are missing from Google results, and agencies that need to report SEO progress across multiple clients.",
    needs: ["Identify technical problems across the website", "Monitor the positions of target keywords", "Find out which websites link to yours", "Understand Search Console data more easily", "Share clear, useful reports with clients"],
  },
  before: ["Guessing what is stopping pages from ranking", "Search Console data that rarely gets reviewed", "Checking keyword rankings manually", "Building client reports from scratch in slides"],
  after: ["Issues grouped together with affected pages listed", "Keyword rankings tracked over time", "Backlinks monitored for new and lost links", "Reports created from the collected data"],
  features: [
    { icon: "search", title: "Website SEO audits", text: "Crawl your site and group technical issues such as missing canonical tags, duplicate titles, broken links and slow-loading pages." },
    { icon: "trend", title: "Keyword rank tracking", text: "Follow the positions of your target keywords over time." },
    { icon: "link", title: "Backlink monitoring", text: "See which websites link to yours and track when backlinks are added or lost." },
    { icon: "plug", title: "Google Search Console integration", text: "Review search queries, clicks and landing pages from Google Search Console through your Growcord connection." },
    { icon: "grid", title: "50 report modules", text: "Choose from reports covering areas such as page speed and content gaps." },
    { icon: "clock", title: "Scheduled site crawls", text: "Set audits to run automatically in the background on a schedule." },
    { icon: "file", title: "Reports ready to share with clients", text: "Create clear reports that agencies can share with their clients." },
    { icon: "users", title: "Connected with CRM and Books", text: "Lead details and report payments can flow into Growcord CRM and Books." },
  ],
  spotlights: [
    {
      eyebrow: "Site audit",
      title: "See which issues to",
      highlight: "tackle first",
      text: "Rather than leaving you with a long list of disconnected warnings, the audit groups issues involving canonicals, titles, images and page speed, then shows which pages are affected so you can plan the next fix.",
      points: ["Issues grouped by type", "Affected pages listed for each issue", "Run another crawl to check your fixes"],
      visual: { kind: "audit" },
    },
    {
      eyebrow: "Search data",
      title: "Make Search Console",
      highlight: "easier to understand",
      text: "Connect Google once through Growcord to see the queries people use, the pages they visit and how click trends change over time.",
      points: ["Use one Google connection across Growcord products", "Review queries and pages side by side", "Track changes over time"],
      visual: {
        kind: "hbars",
        data: {
          title: "Top queries · clicks · last 28 days",
          items: [
            { label: "gst billing software", value: 412, tone: "orange" },
            { label: "whatsapp api india", value: 286, tone: "orange" },
            { label: "pos for pharmacy", value: 190, tone: "orange" },
            { label: "courier aggregator", value: 122, tone: "orange" },
          ],
        },
      },
    },
  ],
  steps: [
    { title: "Add your website", text: "Enter your domain and connect Google Search Console." },
    { title: "Run a site audit", text: "The crawler checks each page it can reach." },
    { title: "Add target keywords", text: "Choose the search terms you want to monitor." },
    { title: "Fix issues and share results", text: "Work through the issue list, crawl the site again and share your report." },
  ],
  connects: [
    { slug: "reach", for: "Compare search performance with paid campaigns" },
    { slug: "crm", for: "Manage leads and new accounts" },
    { slug: "books", for: "Record report and credit payments as GST invoices" },
    { slug: "commerce", for: "Audit store sitemaps and product pages" },
  ],
  compare: {
    them: "Manual SEO checks",
    rows: [
      ["Technical issues grouped by category", true, false],
      ["Keyword rankings tracked over time", true, "Manual searches"],
      ["Backlink monitoring", true, false],
      ["Search Console data in plain language", true, false],
      ["Scheduled site audits", true, false],
      ["Client-ready reports", true, "Slides"],
    ],
  },
  principles: [
    { icon: "plug", title: "One Google connection", text: "Search Console access uses the Google connection you have already authorised through Growcord." },
    { icon: "eye", title: "Show the affected pages", text: "Each reported issue identifies the pages where it occurs." },
    { icon: "check", title: "Transparent beta access", text: "Report modules become available as they are verified, and demos do not use fabricated data." },
    { icon: "lock", title: "Your data stays within your workspace", text: "Each workspace can access only its own websites and data." },
  ],
  pricing: { title: "Beta access  get in touch", text: "SEO Insights is being introduced to Growcord clients. It is also included with our SEO service.", cta: { label: "Explore our SEO service", href: "/seo" } },
  faqs: [
    { q: "Can I use SEO Insights now?", a: "SEO Insights is currently in beta and is rolling out to Growcord clients. Customers using our SEO service receive access as part of their engagement." },
    { q: "What does the website audit check?", a: "It checks technical SEO issues such as missing canonical tags, duplicate titles and descriptions, broken links, images without alt text and slow pages. Issues are grouped by type, with affected pages listed." },
    { q: "Can it connect to Google Search Console?", a: "Yes. It uses your Google connection in Growcord, the same connection used by Reach and other Growcord products." },
    { q: "Can agencies manage multiple clients?", a: "Yes. Each website has its own workspace, and reports can be shared with clients." },
    { q: "Does it track keyword rankings?", a: "Yes. Add the keywords you want to monitor and follow their positions over time." },
    { q: "Why isn’t my website ranking on Google?", a: "Possible causes include missing or duplicate titles, missing canonical URLs, duplicate content across domains, thin pages and slow loading times. A site audit helps identify which of these issues affect your website." },
  ],
};
