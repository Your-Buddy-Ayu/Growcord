/** Team and access: People, Growcord ID. */

import People from "../../assets/ProductClassic/people.jpg"
import Privacy from "../../assets/ProductClassic/privacy.jpg"

import {
  LuCalendarClock,
  LuUserCheck,
  LuCircleDollarSign,
  LuFileSpreadsheet,
  LuUsers,
  LuKeyRound,
  LuShieldAlert,
  LuFingerprint,
  LuLock,
  LuHistory
} from "react-icons/lu";


export const people = {
  slug: "people",
  name: "People",
  group: "team",
  icon: "users",
  image: People,
  status: "live",
  host: "people.gc.mw",
  appUrl: "https://people.gc.mw",
  tagline: "HR and payroll made manageable for small teams",
  summary: "Manage employees, shifts, attendance, leave balances, salary structures, payroll runs and payslips in one place.",
  metaTitle: "HR & Payroll Software for Small Businesses in India  Attendance, Leave and Payslips",
  metaDescription:
    "Growcord People brings together your employee directory, shifts and rosters, punch-based attendance, ledger-based leave balances, salary structures with effective dates, payroll runs and payslips. Each payroll run posts a salary journal to Books, and finalised payroll is locked for auditability.",
  keywords: ["hr payroll software india", "attendance management software", "leave management system", "payroll software for small business", "payslip generator"],
  servicesData: [
    {
      id: 1,
      title: "Automated Attendance & Shift Planner",
      icon: <LuCalendarClock />,
    },
    {
      id: 2,
      title: "Leave Balances & Approval Workflows",
      icon: <LuUserCheck />,
    },
    {
      id: 3,
      title: "Custom Salary Structures & CTC Builder",
      icon: <LuCircleDollarSign />,
    },
    {
      id: 4,
      title: "1-Click Payroll Runs & Tax Compliance",
      icon: <LuFileSpreadsheet />,
    },
    {
      id: 5,
      title: "Employee Directory & Self-Serve Payslips",
      icon: <LuUsers />,
    },
  ],
  hero: {
    eyebrow: "Growcord People",
    title: "Manage attendance, shifts, and salaries from",
    highlight: "one connected workforce hub",
    lede: "Engineered for high-paced retail, warehouse, and office teams. Eliminate payroll mismatches, automate statutory filings, and ensure every employee gets paid accurately and on time, every single month.",
  },
  visual: "attendance",
  facts: [
    { value: "Ledger", label: "leave balances tracked through accruals and usage, not overwritten" },
    { value: "Locked", label: "payroll stays locked after finalisation" },
    { value: "Dated", label: "salary structures take effect from a specified date" },
    { value: "Default-deny", label: "salary details are visible only to authorised people" },
  ],
  audience: {
    persona: "Owners and administrators at factories, warehouses, clinics and service businesses with 20–300 employees, who currently manage attendance through registers or biometric exports and run payroll in Excel.",
    needs: ["Import employees in bulk", "Set up shifts, rosters and holidays", "Turn punches into an attendance register", "Approve leave with accurate balances", "Run payroll and share payslips"],
  },
  before: ["Attendance copied manually from biometric exports", "Leave balances adjusted by hand", "Salary sheets accessible to too many people", "Last month’s payroll changed after payment"],
  after: ["Punches feed into an attendance register", "Leave tracked through accrual and usage entries", "Salary details restricted by payroll permissions", "Finalised payroll stays locked; corrections use an adjustment run"],
  features: [
    { icon: "users", title: "Employee directory", text: "Keep one record for each employee, linked to the staff account they use to sign in to Growcord." },
    { icon: "calendar", title: "Shifts, rosters and holidays", text: "Set up shifts, assign rosters and maintain your holiday calendar." },
    { icon: "fingerprint", title: "Attendance from punches", text: "Turn attendance punches into daily and monthly attendance registers." },
    { icon: "piggy", title: "Leave tracked as a ledger", text: "Record leave accruals and usage so every day of leave can be traced." },
    { icon: "file", title: "Salary structures", text: "Set salary components and amounts with effective dates, so raises apply from the right date while the previous history remains intact." },
    { icon: "calculator", title: "Payroll runs", text: "Run payroll for a month, review each employee’s figures and then finalise the run." },
    { icon: "lock", title: "Payroll locked after finalisation", text: "Finalised payroll cannot be edited. Make corrections through an adjustment run instead." },
    { icon: "shield", title: "Private by default", text: "HR and payroll access is disabled by default and must be granted to each authorised person." },
  ],
  spotlights: [
    {
      eyebrow: "Payroll discipline",
      title: "Once paid, payroll",
      highlight: "stays on record",
      text: "When a payroll run is finalised, it is locked at the database level. If something needs correcting, use an adjustment run that records what changed and why. This creates a clear record for both auditors and employees.",
      points: ["Locked at the database level, not just on screen", "Corrections recorded through adjustment runs", "Salary journal posted to Books"],
      visual: {
        kind: "timeline",
        data: {
          items: [
            { icon: "fingerprint", title: "Attendance closed · August", text: "42 employees" },
            { icon: "calculator", title: "Payroll run reviewed", text: "Gross pay, deductions and net pay by employee" },
            { icon: "lock", title: "Finalised", tag: "Locked", tone: "gray" },
            { icon: "book", title: "Salary journal posted", text: "Payslips ready to share" },
          ],
        },
      },
    },
    {
      eyebrow: "Statutory calculations",
      title: "No guesswork on",
      highlight: "PF or ESI",
      text: "Statutory rates depend on your state and registrations. Growcord does not assume or invent these rates. Until your organisation enters the configuration confirmed by your CA, affected statutory components are clearly marked as not computed.",
      points: ["PF, ESI, PT and LWF based on your CA-confirmed settings", "Unconfigured components clearly marked", "Rate changes take effect from a date without overwriting history"],
      visual: { kind: "attendance", host: "people.gc.mw · payroll" },
    },
  ],
  steps: [
    { title: "Import your employees", text: "Add employee records, departments, joining dates and salary structures." },
    { title: "Configure shifts and leave", text: "Set up shifts, rosters, holidays and leave policies." },
    { title: "Record attendance", text: "Attendance punches feed into the register." },
    { title: "Run payroll", text: "Review and finalise payroll, share payslips and post the journal to Books." },
  ],
  connects: [
    { slug: "books", for: "The salary journal posted by each payroll run" },
    { slug: "growcord-id", for: "Staff sign-in and access permissions" },
    { slug: "wms", for: "Shift planning for warehouse teams" },
    { slug: "retail", for: "Who was working at the counter during each session" },
  ],
  compare: {
    them: "Attendance register and Excel payroll",
    rows: [
      ["Attendance register generated from punches", true, "Manual"],
      ["Leave balances tracked as a ledger", true, "Edited by hand"],
      ["Salary history retained by effective date", true, false],
      ["Payroll locked after finalisation", true, false],
      ["Salary journal posted to accounts", true, "Retyped"],
      ["Payroll visible only to authorised users", true, false],
    ],
  },
  principles: [
    { icon: "lock", title: "Final means final", text: "Finalised payroll is locked at the database level; corrections are handled through adjustment runs." },
    { icon: "shield", title: "Access is denied by default", text: "HR and payroll permissions must be granted explicitly, including for managers." },
    { icon: "userCheck", title: "No assumed statutory rates", text: "PF, ESI, PT and LWF use only the configuration confirmed by your CA." },
    { icon: "history", title: "Salary history stays intact", text: "Salary changes have effective dates, so earlier records are not overwritten." },
  ],
  roadmap: ["Expense claims", "Onboarding and offboarding checklists with access grants", "Location-based attendance for field teams"],
  pricing: { title: "Included with your Growcord organisation", text: "People is available to every Growcord organisation, with access granted separately to each person. Contact us if you need an HR-only setup.", cta: { label: "Talk to sales", href: "/contact-us?interest=people" } },
  faqs: [
    { q: "Does Growcord People calculate PF and ESI?", a: "Only when your organisation has entered the settings confirmed by your CA. Growcord does not supply assumed statutory rates. Any component that has not been configured is clearly marked as not computed." },
    { q: "Can payroll be edited after finalisation?", a: "No. Finalised payroll is locked at the database level. Corrections must be made through an adjustment run that records what changed." },
    { q: "How are leave balances tracked?", a: "Leave is recorded as a ledger of accruals and usage, so each day can be traced to when it was earned or taken." },
    { q: "Who can view salary information?", a: "Only people who have been granted payroll access. HR and payroll permissions are disabled for every role by default, including managers." },
    { q: "Does payroll post to accounting?", a: "Yes. Every payroll run posts a salary journal to Growcord Books." },
    { q: "Can I manage shifts and holidays?", a: "Yes. Define shifts, assign rosters and maintain holiday calendars. Attendance is calculated against those settings." },
  ],
};

export const growcordId = {
  slug: "growcord-id",
  name: "Growcord ID",
  group: "team",
  icon: "fingerprint",
  image: Privacy,
  status: "live",
  host: "id.gc.mw",
  appUrl: "https://hub.gc.mw",
  tagline: "One sign-in for every Growcord product, with privacy in your hands",
  summary: "Use one account across Growcord products, with consent by app and purpose, encrypted personal data and a log of every data read.",
  metaTitle: "Growcord ID  Single Sign-On for Business Apps with Consent and Privacy Controls",
  metaDescription:
    "Growcord ID gives you one account for every Growcord product. Sign in with a password, a one-time code by SMS, WhatsApp or email, or a magic link. Keep work and shopper profiles separate, manage consent by app and purpose, and request data export or erasure. Personal data is encrypted.",
  keywords: ["single sign on for business apps", "sso india", "otp login", "consent management", "privacy by design"],
  servicesData: [
    {
      id: 1,
      title: "Universal Single Sign-On (SSO)",
      icon: <LuKeyRound />,
    },
    {
      id: 2,
      title: "Granular Role & App Permissions",
      icon: <LuLock />,
    },
    {
      id: 3,
      title: "Consent & Privacy Guardrails",
      icon: <LuFingerprint />,
    },
    {
      id: 4,
      title: "Adaptive MFA & Threat Protection",
      icon: <LuShieldAlert />,
    },
    {
      id: 5,
      title: "Real-Time Centralized Audit Logs",
      icon: <LuHistory />,
    },
  ],
  hero: {
    eyebrow: "Growcord ID · id.gc.mw",
    title: "One verified business identity across",
    highlight: "the entire Growcord ecosystem",
    lede: "Seamlessly transition between inventory management, accounting ledgers, and logistics dashboards. Your operations stay unified behind enterprise grade SSO, multi factor authentication, and transparent data usage records.",
  },
  visual: "signin",
  facts: [
    { value: "1", label: "sign-in for all Growcord products" },
    { value: "3 ways", label: "password, one-time code or magic link" },
    { value: "Per purpose", label: "consent settings for each app" },
    { value: "Every read", label: "access to your data is logged" },
  ],
  audience: {
    persona: "Business owners and staff who work across several Growcord products, as well as shoppers buying from Growcord stores. It is for anyone who wants one account without giving every app unrestricted access to their data.",
    needs: ["Sign in once and switch between products", "Use a one-time code instead of a password", "Keep work and personal profiles separate", "Choose which apps can use analytics", "Download or request erasure of your data"],
  },
  before: ["A separate password for every product", "Apps with access to more personal data than they need", "No clear record of who accessed your data", "No straightforward way to take your data with you"],
  after: ["One sign-in and a launcher for Growcord products", "Separate work, shopper and personal profiles", "Consent by app and purpose, with analytics off by default", "Access logs, data export and erasure requests"],
  features: [
    { icon: "grid", title: "One product launcher", text: "Sign in at hub.gc.mw and open any product available to your organisation without a second login." },
    { icon: "key", title: "Choose how to sign in", text: "Use a password, a one-time code sent by SMS, WhatsApp or email, or a magic link." },
    { icon: "layers", title: "Profiles for different contexts", text: "Keep a work profile for each organisation, a shopper profile for each store and a separate personal profile." },
    { icon: "shield", title: "Consent by app and purpose", text: "Apps receive the access needed to provide their service. Analytics and marketing require your permission, and analytics is off by default." },
    { icon: "lock", title: "Encrypted with a key unique to you", text: "Your personal data is encrypted per person. If your key is erased, the encrypted data becomes unreadable." },
    { icon: "eye", title: "Every data read is logged", text: "The access log records which app accessed which field and when, including access attempts that were refused." },
    { icon: "x", title: "Erasure with a cooling-off period", text: "Request erasure with a 7-day period to change your mind. Records that businesses are legally required to keep are retained." },
    { icon: "user", title: "Optional public profile", text: "Create an optional @handle page with followers you approve and blocking controls that always take priority." },
  ],
  spotlights: [
    {
      eyebrow: "Privacy by design",
      title: "Apps request access.",
      highlight: "You choose.",
      text: "Each app receives the access it needs to provide its service. Additional uses, such as analytics, marketing or sharing, require your consent for that specific app and purpose. You can withdraw consent at any time.",
      points: ["Analytics consent is off by default", "Consent withdrawals are recorded, not erased", "A refusal is clearly recorded as “not shared”"],
      visual: { kind: "consent" },
    },
    {
      eyebrow: "For businesses",
      title: "Your team signs in once,",
      highlight: "with access that follows their role",
      text: "Staff sign in with Growcord ID and can access only the products and stores allowed by their role. Remove a team member’s access once, and they lose access across the products connected to that organisation.",
      points: ["Organisation memberships managed per person", "Sessions and devices you can sign out", "OpenID Connect across Growcord products"],
      visual: { kind: "signin" },
    },
  ],
  steps: [
    { title: "Create your account", text: "Register with your phone number or email at id.gc.mw." },
    { title: "Join your organisation", text: "Your administrator invites you, and your work profile becomes available." },
    { title: "Open a product", text: "Choose a product from the launcher; you are already signed in." },
    { title: "Manage your privacy", text: "Manage consent, sessions, data export and erasure in My account." },
  ],
  connects: [
    { slug: "commerce", for: "Staff sign-in and shopper login" },
    { slug: "books", for: "Accountants and CAs with the appropriate access" },
    { slug: "whatsapp", for: "Single sign-in for WhatsApp Platform" },
    { slug: "links", for: "Your @handle page on gc.mw" },
    { slug: "people", for: "Employee directory and permissions" },
  ],
  compare: {
    them: "A separate login for every app",
    rows: [
      ["One sign-in for every product", true, false],
      ["OTP by SMS, WhatsApp or email", true, "Varies"],
      ["Consent by app and purpose", true, false],
      ["Personal data encrypted per person", true, false],
      ["Log of every access to your data", true, false],
      ["Data export and erasure", true, "Email support"],
    ],
  },
  principles: [
    { icon: "lock", title: "Encrypted at rest", text: "Personal data is stored as ciphertext and decrypted only through a single audited path." },
    { icon: "eye", title: "Access is recorded", text: "Every read and refused read is logged with field names, never field values." },
    { icon: "shield", title: "Least-privilege access", text: "Service access is the default; other uses require consent." },
    { icon: "undo", title: "You can take your data with you", text: "Export your data at any time or request erasure after a cooling-off period." },
  ],
  pricing: { title: "Free with every Growcord product", text: "Growcord ID is your sign-in for Growcord products, and creating an account is free.", cta: { label: "Open the launcher", href: "https://hub.gc.mw", external: true } },
  faqs: [
    { q: "What is Growcord ID?", a: "It is one account for signing in to Growcord products, including your store admin, Books, Ship, CRM, WhatsApp Platform and gc.mw. Your privacy settings are managed in one place." },
    { q: "What sign-in methods can I use?", a: "You can sign in with a password, a one-time code sent by SMS, WhatsApp or email, or a magic link." },
    { q: "Can apps access all of my data?", a: "No. Each app gets the access it needs to provide its service. Analytics, marketing and other additional purposes require your consent for that app, and analytics is off by default." },
    { q: "Is my personal data encrypted?", a: "Yes. Personal data is encrypted using a key unique to you, and every data readincluding refused readsis logged." },
    { q: "Can I delete my account?", a: "Yes. You can request erasure through My account, with a 7-day cooling-off period. Orders and invoices that businesses are legally required to retain are kept without your personal details." },
    { q: "Can shoppers use Growcord ID on online stores?", a: "Yes. Growcord stores can offer “Continue with Growcord ID” alongside OTP login." },
  ],
};
