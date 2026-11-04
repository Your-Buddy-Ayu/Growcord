/**
 * Growth suite: CRM, Comms, WhatsApp, Reach, Social, Links & eCards.
 * All copy has been refreshed for a natural, professional tone.
 * 
 * 
 */

import { FaArrowRotateRight, FaBullhorn, FaCalendarDays, FaChartPie, FaChartSimple, FaClockRotateLeft, FaComments, FaCrosshairs, FaFileLines, FaGoogle, FaIdCard, FaInbox, FaInstagram, FaLink, FaMoon, FaRobot, FaUserShield, FaWandMagicSparkles, FaWhatsapp } from "react-icons/fa6";
import { LuKanban, LuQrCode, LuContact, LuSmartphone } from "react-icons/lu";

import Crm from "../../assets/ProductClassic/crm.jpg"
import Comms from "../../assets/ProductClassic/comms.jpg"
import Whatsapp from "../../assets/ProductClassic/whatsapp.jpg"
import Reach from "../../assets/ProductClassic/reach.jpg"
import Social from "../../assets/ProductClassic/social.jpg"
import Links from "../../assets/ProductClassic/links.jpg"
import { PiChartLineUp } from "react-icons/pi";
import { FiBarChart } from "react-icons/fi";


export const crm = {
  slug: "crm",
  name: "CRM",
  group: "growth",
  icon: "target",
  image: Crm,
  status: "live",
  host: "crm.gc.mw",
  appUrl: "https://crm.gc.mw",
  tagline: "Keep every enquiry in one contact book and automate follow-ups.",
  summary: "Keep one record per person, manage deals with a drag-and-drop pipeline, see which follow-ups are due, and use playbooks to follow up on WhatsApp until a lead replies.",
  metaTitle: "CRM Software for Indian SMBs  Leads, Pipeline & WhatsApp Automation",
  metaDescription: "Growcord CRM unifies every enquirywebsite, WhatsApp, ads or any Growcord productinto a single contact. See today’s follow‑ups, move deals through a visual pipeline, and let playbooks nurture leads on WhatsApp, SMS and email until they respond.",
  keywords: ["crm software india", "lead management software", "whatsapp crm", "sales pipeline software", "lead follow up automation"],
  servicesData: [
    {
      id: 1,
      title: "Unified Customer Profiles",
      icon: <FaIdCard />,
    },
    {
      id: 2,
      title: "Visual Drag & Drop Pipeline",
      icon: <LuKanban />,
    },
    {
      id: 3,
      title: "Smart Follow-Up Scheduler",
      icon: <FaClockRotateLeft />,
    },
    {
      id: 4,
      title: "Automated WhatsApp Playbooks",
      icon: <FaWhatsapp />,
    },
    {
      id: 5,
      title: "Deal Scoring & Conversion Insights",
      icon: <FaChartPie />,
    },
  ],
  hero: {
    eyebrow: "Growcord CRM",
    title: "Unify every incoming lead into",
    highlight: "one clear visual pipeline",
    lede: "End the chaos of scattered chat inquiries and messy spreadsheets. Manage each buyer's journey on a drag and drop board, track complete conversation histories, and ensure high intent deals never slip through the cracks.",
  },
  visual: "kanban",
  facts: [
    { value: "1", label: "contact per person – phone, email & GSTIN deduped" },
    { value: "360°", label: "deals, messages, orders & invoices in one view" },
    { value: "Stop on reply", label: "any playbook halts when a lead answers" },
    { value: "9 pm–10 am", label: "quiet hours respected automatically" }
  ],
  audience: {
    persona: "For founders and sales teams at service businesses, agencies, clinics and B2B companies managing leads across WhatsApp chats, call logs and spreadsheets full of duplicate contacts.",
    needs: [
      "View every lead from every source in one list",
      "Know exactly who to call today",
      "Advance a deal without fiddling with a spreadsheet",
      "Send a brochure on WhatsApp with a single tap",
      "Automate follow‑ups without spamming"
    ]
  },
  before: [
    "The same customer saved five times",
    "Follow-ups missed or left to chance",
    "No idea which source drives deals",
    "Messages sent at night to people who aren’t interested"
  ],
  after: [
    "One contact resolved by phone, email or GSTIN",
    "Overdue and due follow‑ups appear at the top",
    "Pipeline conversion and stage‑by‑stage metrics",
    "Consent, quiet hours and frequency caps applied to every send"
  ],
  features: [

    { icon: "kanban", title: "Drag‑and‑drop pipeline", text: "Customise your stages, then drag deals between them. Every stage change is recorded automatically." },
    { icon: "eye", title: "360° contact pane", text: "View deals, activity, messages, consent status, playbook progress, orders and invoices together." },
    { icon: "workflow", title: "Playbooks", text: "Build a sequence that sends a brochure when a lead arrives, waits two days, follows up and creates a task. It stops as soon as the lead replies." },
    { icon: "phone", title: "Tap‑to‑call or WhatsApp", text: "Start a call or WhatsApp chat directly from a follow-up, and use ready-made replies to respond faster." },
    { icon: "user", title: "Smart assignment rules", text: "Automatically assign new leads to the right team member, with the reason for each assignment shown." },
    { icon: "branch", title: "Merge without history loss", text: "Merge duplicate records without losing their history; old identifiers will still point to the same contact." },
    { icon: "clock", title: "SLA escalation", text: "If a lead goes unanswered beyond your response-time target, escalate it and include it in a daily manager summary." },
    { icon: "chart", title: "Pipeline analytics", text: "Track weighted pipeline value, conversion rates between stages and the average time deals spend in each stage." }
  ],
  spotlights: [
    {
      eyebrow: "Playbooks",
      title: "Follow‑ups written once",
      highlight: "sent at the right moment",
      text: "A playbook is a simple set of rules: when an event occurs, run the chosen steps across selected channels until an exit condition is met. Before each message is sent, consent, quiet hours and frequency limits are checked.",
      points: [
        "Stops the moment a lead replies, on any channel",
        "Brochures matched to the service the lead asked about",
        "Every action logged with its reason"
      ],
      visual: { kind: "playbook" }
    },
    {
      eyebrow: "One person, one record",
      title: "The same lead from WhatsApp, a form and an ad is",
      highlight: "still one person",
      text: "Contacts are matched by phone number, email and GSTIN. Enquiries from your website, WhatsApp Platform, Links and ads update the same record, helping your team avoid duplicate outreach.",
      points: [
        "Buyers from checkout become customers, not leads",
        "Merged contacts retain every old identifier",
        "Look‑alike contacts are flagged for review"
      ],
      visual: {
        kind: "timeline", data: {
          items: [
            { icon: "globe", title: "Website form · SEO services", text: "Riya Mehta · +91 98••• ••412" },
            { icon: "chat", title: "WhatsApp message", text: "Same number  added to Riya", tag: "Matched", tone: "green" },
            { icon: "click", title: "Ad lead form", text: "Same email  added to Riya", tag: "Matched", tone: "green" },
            { icon: "users", title: "One contact · 3 touchpoints", text: "Owner: Aakash · follow‑up tomorrow" }
          ]
        }
      }
    }
  ],
  steps: [
    { title: "Import contacts", text: "Upload your spreadsheet and duplicates will be matched during import." },
    { title: "Shape your pipeline", text: "Set up your pipeline stages, assign owners, define lead-routing rules and set response-time targets." },
    { title: "Connect lead sources", text: "Connect your website, WhatsApp Platform, ads and other Growcord products to bring enquiries into one contact book." },
    { title: "Activate playbooks", text: "Automated follow-ups respect consent requirements and stop when a lead replies." }
  ],
  connects: [
    { slug: "comms", for: "WhatsApp, SMS and email messaging with consent checks" },
    { slug: "whatsapp", for: "Tap‑to‑chat and canned WhatsApp replies" },
    { slug: "books", for: "Won deals handed to invoicing" },
    { slug: "links", for: "Leads from link pages and eCards" },
    { slug: "commerce", for: "Orders and lifetime value on each contact" },
    { slug: "reach", for: "Ad leads and campaign attribution" }
  ],
  compare: {
    them: "WhatsApp + spreadsheet",
    rows: [
      ["One contact per person, deduped", true, false],
      ["Follow‑ups due today, overdue first", true, false],
      ["Automatic follow‑ups that stop on reply", true, false],
      ["Quiet hours and consent on every send", true, false],
      ["Orders and invoices on the contact", true, false],
      ["Pipeline conversion by stage", true, false]
    ]
  },
  principles: [
    { icon: "branch", title: "Merge is an alias", text: "Merging never deletes a contactold phone numbers still resolve to the same person." },
    { icon: "shield", title: "Consent first", text: "Marketing messages need explicit consent; service messages tied to a user action bypass that requirement." },
    { icon: "x", title: "Stop on reply", text: "A reply on any channel halts every running sequence for that person." },
    { icon: "check", title: "Validated before it runs", text: "Playbooks are checked when you save themnot when they fire in the middle of the night." }
  ],
  pricing: {
    title: "Included with your Growcord organisation",
    text: "Messages sent by playbooks are billed by purpose at usage rates. CRM‑only teamstalk to us for a bespoke plan.",
    cta: { label: "See usage pricing", href: "/pricing#usage" }
  },
  faqs: [
    { q: "Does Growcord CRM work with WhatsApp?", a: "Yes. Follow‑ups open WhatsApp in one tap with canned replies, and playbooks can send approved WhatsApp templates automatically." },
    { q: "How are duplicate leads handled?", a: "Contacts are matched on phone, email and GSTIN. A new enquiry from a known person is added to their existing record, and duplicates can be merged without losing history." },
    { q: "What is a playbook?", a: "An automated sequence: when something happens (like a new lead), it runs stepssend a message, wait, create a taskon the channels you choose, and stops when the lead replies." },
    { q: "Will automatic messages go out at night?", a: "No. Every send checks consent, quiet hours (9 pm – 10 am) and a frequency cap before it is dispatched." },
    { q: "Can I customise the pipeline?", a: "Yes. Pipelines and stages are fully configurable; deals move by drag‑and‑drop, and stage history powers conversion and days‑in‑stage reports." },
    { q: "Where do leads come from?", a: "Your website forms, WhatsApp Platform, Links & eCards, ad lead forms and every Growcord product send enquiries into the same contact book." }
  ]
};

export const comms = {
  slug: "comms",
  name: "Comms",
  group: "growth",
  icon: "messages",
  image: Comms,
  status: "live",
  host: "comms.gc.mw",
  appUrl: "https://comms.gc.mw",
  tagline: "Manage WhatsApp, SMS, email and push messages with a clear record of each send.",
  summary: "Send messages through one platform with consent checks, quiet hours, templates, delivery reports and pricing based on message purpose.",
  metaTitle: "Business Messaging Platform India  WhatsApp, SMS, Email & Push with Delivery Reports",
  metaDescription: "Growcord Comms sends WhatsApp, SMS, email and push through a single layer that records every message, applies purpose‑based rules (OTP, service, marketing), enforces consent, respects TRAI quiet hours, caps frequency, and provides live template approval status.",
  keywords: ["bulk sms service india", "whatsapp api provider", "transactional sms", "dlt sms", "email and sms api", "otp sms service"],
  servicesData: [
    {
      id: 1,
      title: "Unified Messaging Engine",
      icon: <FaComments />,
    },
    {
      id: 2,
      title: "Consent & Opt-In Guardrails",
      icon: <FaUserShield />,
    },
    {
      id: 3,
      title: "Smart Quiet Hours",
      icon: <FaMoon />,
    },
    {
      id: 4,
      title: "Approved Dynamic Templates",
      icon: <FaFileLines />,
    },
    {
      id: 5,
      title: "Purpose-Based Pricing & Reports",
      icon: <FaChartPie />,
    },
  ],
  hero: {
    eyebrow: "Growcord Comms",
    title: "Deliver every customer message",
    highlight: "on one unified, honest record",
    lede: "Send transactional OTPs, order updates, and marketing broadcasts via WhatsApp, SMS, or email. Enforce smart consent filters, auto-pause during quiet hours, and track real-time delivery statuses without message duplication.",
  },
  visual: "chat",
  facts: [
    { value: "4 + 2", label: "channels live; RCS and voice reserved" },
    { value: "3", label: "purposes – authentication, service, marketing" },
    { value: "1", label: "record per message with full status timeline" },
    { value: "₹0", label: "platform charge on login OTPs" }
  ],
  audience: {
    persona: "For businesses that send OTPs, order updates and campaigns and want a reliable way to manage delivery without juggling separate SMS, WhatsApp and email providers.",
    needs: [
      "Send an OTP that arrives instantly",
      "Know whether a message was delivered or merely accepted",
      "Keep promotions away from contacts who opted out",
      "See template approval status without opening a ticket",
      "Pay less for service messages than for marketing"
    ]
  },
  before: [
    "Three vendors and three dashboards",
    "Messages marked as sent without confirmation of delivery",
    "Promotions sent at midnight",
    "No unified opt‑out list"
  ],
  after: [
    "A single message record across all channels",
    "Message-level delivery reports and read receipts where supported",
    "Quiet hours and frequency caps enforced before sending",
    "A single suppression list respected by every product"
  ],
  features: [
    { icon: "layers", title: "Many channels, one layer", text: "Use WhatsApp, SMS, email and web push today. RCS and voice are planned for a later release." },
    { icon: "tag", title: "Purpose decides the rules", text: "Messages are classified as authentication, service or marketing based on the event that triggered them, rather than a sender-selected label." },
    { icon: "shield", title: "Consent built in", text: "Marketing messages require explicit consent. Service messages triggered by a user action follow the applicable service-message rules." },
    { icon: "clock", title: "Quiet hours and caps", text: "Before each send, Comms checks TRAI quiet hours (9 pm–10 am in the store’s time zone) and the contact’s messaging frequency limit." },
    { icon: "fileCheck", title: "Live template approval", text: "Templates are versioned and show the provider’s latest approval status, including rejection reasons." },
    { icon: "hash", title: "SMS part meter", text: "Preview the number of billable SMS parts before sending, based on whether the message uses GSM-7 or Unicode." },
    { icon: "zap", title: "Kill switch", text: "Pause all promotional messages immediately while allowing OTPs and order updates to continue." },
    { icon: "link", title: "Channel‑specific short links", text: "Each channel gets its own shortened link, making it easier to attribute clicks to the right message." }
  ],
  spotlights: [
    {
      eyebrow: "Delivery truth",
      title: "Accepted is not",
      highlight: "delivered",
      text: "When a provider marks a message as “accepted,” it only confirms that the provider received it. Comms records the statuses the provider reportssuch as sent, delivered, read or failedin one timeline, helping your support team check what happened.",
      points: ["Delivery reports via provider webhooks", "Failures grouped by provider error", "Delivery per channel per day"],
      visual: {
        kind: "hbars", data: {
          title: "Delivery by channel · last 7 days", items: [
            { label: "WhatsApp · delivered", value: 96, display: "96%", tone: "green" },
            { label: "SMS · delivered", value: 91, display: "91%", tone: "green" },
            { label: "Email · delivered", value: 98, display: "98%", tone: "green" },
            { label: "Push · delivered", value: 74, display: "74%" }
          ]
        }
      }
    },
    {
      eyebrow: "Priced by purpose",
      title: "OTPs free, service low,",
      highlight: "marketing priced as marketing",
      text: "Pricing is based on message purpose, not just the channel. Login OTPs have no platform charge, service updates are priced lower than marketing messages, and WhatsApp is billed at Meta’s rate with no markup.",
      points: ["Purpose derived from the event that sent it", "Your own SMS or email account is metered, not charged", "Every usage line shows its category"],
      visual: {
        kind: "timeline", data: {
          items: [
            { icon: "key", title: "Authentication", text: "Login and COD OTPs, magic links", tag: "No charge", tone: "green" },
            { icon: "package", title: "Service", text: "Order, payment, shipping and invoice updates", tag: "Low", tone: "orange" },
            { icon: "megaphone", title: "Marketing", text: "Campaigns, offers, cart recovery, follow‑ups", tag: "Higher", tone: "purple" },
            { icon: "chat", title: "WhatsApp", text: "Meta’s rate per category", tag: "No markup", tone: "gray" }
          ]
        }
      }
    }
  ],
  steps: [
    { title: "Connect channels", text: "Use the platform’s WhatsApp, SMS and email options, or connect your own accounts." },
    { title: "Approve templates", text: "Create message templates and track their approval status." },
    { title: "Send from any product", text: "Send messages from Commerce, Books, CRM and Reach through Comms." },
    { title: "Read the record", text: "Review message timelines, delivery failures, consent checks and usage by purpose." }
  ],
  connects: [
    { slug: "whatsapp", for: "The WhatsApp gateway for campaigns and template sends" },
    { slug: "links", for: "Short, trackable links in every message" },
    { slug: "commerce", for: "Order, payment and shipping updates" },
    { slug: "crm", for: "Playbook follow‑ups and consent per contact" },
    { slug: "reach", for: "Campaign sends to segments" },
    { slug: "books", for: "Invoices and reminders" }
  ],
  compare: {
    them: "Separate SMS, WhatsApp & email vendors",
    rows: [
      ["One record per message across channels", true, false],
      ["Quiet hours and frequency caps enforced", true, false],
      ["One opt‑out list for every channel", true, false],
      ["OTPs never queue behind campaigns", true, "Varies"],
      ["Price by purpose, OTPs without charge", true, false],
      ["WhatsApp at Meta’s rate, no markup", true, "Markup"]
    ]
  },
  principles: [
    { icon: "tag", title: "Purpose from the event", text: "A campaign cannot label itself as a service message to pay less, and an OTP is never billed as marketing." },
    { icon: "zap", title: "Transactional first", text: "The kill switch stops promotions onlylogin OTPs and order updates keep flowing." },
    { icon: "shield", title: "Checked before sending", text: "Consent, quiet hours and caps are enforced before a provider is ever called." },
    { icon: "eye", title: "No message bodies stored", text: "The record keeps what happened to a message, not its private content." }
  ],
  roadmap: ["Shared team inbox for replies", "RCS and voice channels", "Chatbot and keyword flows"],
  pricing: {
    title: "Pay per message, by purpose",
    text: "Authentication free · service low · marketing higher. WhatsApp at Meta’s rate, passed through at cost.",
    cta: { label: "See usage pricing", href: "/pricing#usage" }
  },
  faqs: [
    { q: "Which channels does Growcord Comms support?", a: "WhatsApp, SMS, email and web push today. RCS and voice are reserved and will be switched on when ready." },
    { q: "How is messaging priced?", a: "By purpose. Login and verification OTPs carry no platform charge, service messages such as order updates are low‑priced, and marketing messages cost more. WhatsApp is billed at Meta’s own rate with no markup." },
    { q: "Do you follow TRAI quiet hours?", a: "Yes. Non‑essential messages are held during quiet hours (9 pm – 10 am in your store’s timezone), and a frequency cap limits how often one contact is messaged." },
    { q: "Can I use my own SMS or email provider?", a: "Yes. Connect your own accounts and Comms still records every messagesends on your own accounts are metered, not charged by the platform." },
    { q: "How do I know if a message was delivered?", a: "Each message has a dispatch record with every status the provider reports, including delivered and read where the channel supports it." },
    { q: "Can I stop all promotions at once?", a: "Yes. The kill switch stops every marketing send instantly while OTPs and order updates keep going." }
  ]
};

export const whatsapp = {
  slug: "whatsapp",
  name: "WhatsApp Platform",
  group: "growth",
  icon: "chat",
  image: Whatsapp,
  status: "live",
  host: "wa.gc.mw",
  appUrl: "https://wa.gc.mw",
  tagline: "Run WhatsApp campaigns, manage templates and handle conversations in a shared team inbox.",
  summary: "Send approved templates and campaigns, and let your team reply to customers from a shared inbox using the official WhatsApp Business API.",
  metaTitle: "WhatsApp Business API Platform India  Campaigns, Templates & Team Inbox",
  metaDescription:
    "Growcord WhatsApp Platform (wa.gc.mw) runs on the official WhatsApp Business API: template management with approval status, broadcast campaigns, a shared team inbox, OTP and order notifications, delivery and read analytics, and agency workspaces.",
  keywords: ["whatsapp business api india", "whatsapp marketing software", "whatsapp team inbox", "bulk whatsapp messages official", "whatsapp api provider"],
  servicesData: [
    {
      id: 1,
      title: "Official WhatsApp API",
      icon: <FaWhatsapp />,
    },
    {
      id: 2,
      title: "Shared Team Inbox",
      icon: <FaInbox />,
    },
    {
      id: 3,
      title: "Meta-Approved Campaigns",
      icon: <FaBullhorn />,
    },
    {
      id: 4,
      title: "Automated Chatbot Flows",
      icon: <FaRobot />,
    },
    {
      id: 5,
      title: "Real-Time Delivery Analytics",
      icon: <FaChartSimple />,
    },
  ],
  hero: {
    eyebrow: "WhatsApp Platform · wa.gc.mw",
    title: "Engage your customers with",
    highlight: "the official WhatsApp Business API",
    lede: "Send verified utility alerts, OTPs, and marketing campaigns using approved Meta templates. Manage multi agent chats in a shared team inbox with zero hidden markups message charges pass through at exact Meta rates.",
  },
  visual: "inbox",
  facts: [
    { value: "Official", label: "WhatsApp Business API" },
    { value: "Live", label: "template approval status" },
    { value: "Shared", label: "inbox for your whole team" },
    { value: "0%", label: "markup on Meta’s message rates" },
  ],
  audience: {
    persona: "For brands, clinics, educational institutes and agencies that rely on WhatsApp and need more than the Business app and broadcast lists can offer.",
    needs: ["Connect a number to the official API", "Get templates approved and see why one was rejected", "Broadcast to a segment without getting banned", "Let several people reply from one number", "Measure delivered, read and clicked"],
  },
  before: ["One phone, one person answering", "Broadcast lists capped and unmeasured", "Templates rejected with no explanation", "Customer chats lost when staff leave"],
  after: ["A shared inbox with assignment", "Campaigns to segments with delivery and read rates", "Approval status and rejection reasons on every template", "Conversations owned by the business"],
  features: [
    { icon: "shield", title: "Official Business API", text: "Connect your number to Meta’s Cloud API without relying on unofficial tools that could put it at risk." },
    { icon: "fileCheck", title: "Template manager", text: "Create templates in the right category and see approval status and rejection reasons as they update." },
    { icon: "megaphone", title: "Campaigns", text: "Send approved templates to selected audience segments and track sent, delivered, read and clicked results." },
    { icon: "messages", title: "Shared team inbox", text: "Let multiple team members manage one number, with conversations assigned and visible to the team." },
    { icon: "key", title: "OTPs and notifications", text: "Authentication and order-update templates delivered through the same number." },
    { icon: "chart", title: "Delivery analytics", text: "Delivery and read rates per campaign and template." },
    { icon: "briefcase", title: "Agency and reseller workspaces", text: "Manage WhatsApp accounts for multiple brands in separate workspaces." },
    { icon: "users", title: "Leads land in CRM", text: "New accounts and enquiries appear in your Growcord contact book automatically." },
  ],
  spotlights: [
    {
      eyebrow: "Templates",
      title: "Know why Meta",
      highlight: "said no",
      text: "WhatsApp templates must be submitted under the appropriate categorymarketing, utility or authentication. See each template’s current status and Meta’s rejection reason so you can make changes and resubmit.",
      points: ["Category chosen correctly from the start", "Status synced from Meta", "Versions kept when you edit"],
      visual: {
        kind: "timeline",
        data: {
          items: [
            { icon: "pen", title: "order_shipped · Utility", tag: "Approved", tone: "green" },
            { icon: "pen", title: "diwali_offer_2026 · Marketing", tag: "Approved", tone: "green" },
            { icon: "pen", title: "login_otp · Authentication", tag: "Approved", tone: "green" },
            { icon: "pen", title: "restock_alert · Marketing", tag: "Rejected  fix URL", tone: "red" },
          ],
        },
      },
    },
    {
      eyebrow: "One ecosystem",
      title: "WhatsApp that",
      highlight: "knows your orders",
      text: "Growcord stores can send order updates automatically through the WhatsApp Platform. Leads and payments also flow into Growcord CRM and Books.",
      points: ["Order and shipping updates from Commerce", "Leads into the CRM contact book", "Payments as GST invoices in Books"],
      visual: { kind: "chat", host: "wa.gc.mw" },
    },
  ],
  steps: [
    { title: "Connect your number", text: "Connect your WhatsApp Business number to the official API." },
    { title: "Create templates", text: "Submit templates by category and track approval." },
    { title: "Import contacts", text: "Import opted-in contacts and organise them into audience segments." },
    { title: "Send and reply", text: "Send campaigns and manage incoming conversations from one inbox." },
  ],
  connects: [
    { slug: "comms", for: "The messaging layer every Growcord product sends through" },
    { slug: "crm", for: "Leads and new accounts in the contact book" },
    { slug: "books", for: "Plan and credit payments as GST invoices" },
    { slug: "commerce", for: "Order and shipping notifications" },
    { slug: "growcord-id", for: "One sign-in and workspace linking" },
  ],
  compare: {
    them: "WhatsApp Business app",
    rows: [
      ["Several agents on one number", true, false],
      ["Campaigns with delivery and read rates", true, false],
      ["Template approval status and reasons", true, false],
      ["OTP and order-update automation", true, false],
      ["Leads synced to a CRM", true, false],
      ["Official API with no ban risk from tools", true, "App only"],
    ],
  },
  principles: [
    { icon: "rupee", title: "No markup on Meta", text: "WhatsApp messages are billed at Meta’s own conversation rates." },
    { icon: "shield", title: "Official only", text: "Built on Meta’s Cloud API  never unofficial automation that risks your number." },
    { icon: "users", title: "Chats belong to the business", text: "Conversations stay with the workspace when team members change." },
    { icon: "check", title: "Opt-in respected", text: "Marketing templates go to contacts who agreed to hear from you." },
  ],
  pricing: { title: "Plans inside the platform", text: "Pick a plan on wa.gc.mw. Message charges are Meta’s rates, passed through with no markup.", cta: { label: "Open WhatsApp Platform", href: "https://wa.gc.mw", external: true } },
  faqs: [
    { q: "Is this the official WhatsApp Business API?", a: "Yes. Growcord WhatsApp Platform connects your number to Meta’s official Cloud API." },
    { q: "Do you add a markup on WhatsApp message charges?", a: "No. WhatsApp conversation charges are Meta’s rates, passed through at cost. Platform plans are separate and shown inside the app." },
    { q: "Can several people reply from one WhatsApp number?", a: "Yes. The shared team inbox lets several agents handle conversations on the same number." },
    { q: "Can I run campaigns?", a: "Yes. Send approved marketing templates to segments and track sent, delivered, read and clicked." },
    { q: "Does it work with my Growcord store?", a: "Yes. Growcord stores send order, payment and shipping updates through the platform, and leads and payments flow into Growcord CRM and Books." },
    { q: "Can agencies manage several brands?", a: "Yes. Agency and reseller workspaces keep each brand’s number, templates and contacts separate." },
  ],
};

export const reach = {
  slug: "reach",
  name: "Reach",
  group: "growth",
  icon: "megaphone",
  image: Reach,
  status: "live",
  host: "reach.gc.mw",
  appUrl: "https://reach.gc.mw",
  tagline: "Marketing campaigns and ads measured by business results",
  summary: "Manage cross-channel campaigns, review AI-generated ad plans, connect Google services once and track results with clearer attribution.",
  metaTitle: "Marketing Automation & AI Ads Studio  Google Ads, Merchant Center, Campaigns",
  metaDescription:
    "Growcord Reach: campaigns on WhatsApp, SMS, email and push, an AI ads studio that plans Google Ads campaigns for review, one Google connection for Search Console, Analytics, Merchant Center and Ads, Google review management, coupons and server-side tracking.",
  keywords: ["marketing automation software india", "google ads ai tool", "merchant center feed management", "google business reviews management", "meta conversions api"],
  servicesData: [
    {
      id: 1,
      title: "AI Ad Copy & Creative Studio",
      icon: <FaWandMagicSparkles />,
    },
    {
      id: 2,
      title: "1-Click Google Ads & Shopping",
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Auto-Synced Merchant Center Feed",
      icon: <FaArrowRotateRight />,
    },
    {
      id: 4,
      title: "Smart Audience & Retargeting",
      icon: <FaCrosshairs />,
    },
    {
      id: 5,
      title: "Real-Time ROAS & Attribution",
      icon: <PiChartLineUp />,
    },
  ],
  hero: {
    eyebrow: "Growcord Reach",
    title: "An intelligent marketing studio built for",
    highlight: "measurable, profitable brand growth",
    lede: "Plan, launch, and monitor full funnel ad campaigns from one unified screen. Seamlessly connect your store catalog to Google Shopping, automate audience retargeting, and track clean attribution tied directly to bank settlements.",
  },
  visual: "funnel",
  facts: [
    { value: "7", label: "Google services on one connection" },
    { value: "Paused", label: "every AI-created ad campaign starts paused" },
    { value: "4", label: "channels for campaigns" },
    { value: "Server-side", label: "Meta and GA4 conversion events" },
  ],
  audience: {
    persona: "For founders and in-house marketing teams at D2C brands and clinic groups who are juggling separate messaging tools, boosted posts and Google Ads accounts.",
    needs: ["Send a campaign to the right segment", "Get a sensible Google Ads plan without an agency", "Fix Merchant Center disapprovals", "Reply to Google reviews from one place", "Know if a campaign made money"],
  },
  before: ["Separate tools for WhatsApp, email and ads", "Google Ads set up once and never touched", "Products disapproved in Merchant Center with no reason", "ROAS reported on orders that were later returned"],
  after: ["Campaigns on every channel from one place", "AI-drafted campaigns created paused for your review", "Per-product disapproval diagnostics", "Results measured on delivered orders"],
  features: [
    { icon: "megaphone", title: "Campaigns on every channel", text: "A panel per channel WhatsApp, SMS, email and push with real previews, part counters and readiness checks." },
    { icon: "sparkles", title: "AI ads studio", text: "Generate proposed Google Ads campaigns, keywords, responsive search ads and Performance Max assets using your product catalogue." },
    { icon: "plug", title: "Google, connected once", text: "Access Search Console, Analytics, Merchant Center, Google Ads, Tag Manager, Business Profile and PageSpeed through one Google connection." },
    { icon: "alert", title: "Merchant Center diagnostics", text: "Find the reason each product was disapproved and see what needs to be fixed." },
    { icon: "star", title: "Google reviews", text: "Sync reviews from your Google Business Profile, reply from one screen and choose which reviews to display on your website." },
    { icon: "badgePercent", title: "Coupons with guardrails", text: "Create single-use coupons with minimum spend requirements and server-enforced rules." },
    { icon: "refresh", title: "Cart recovery", text: "Send a one-time discount through WhatsApp, SMS or email to help recover abandoned carts." },
    { icon: "layers", title: "Catalogue feeds", text: "Create Google and Meta product feeds from your store’s existing catalogue." },
  ],
  spotlights: [
    {
      eyebrow: "AI ads studio",
      title: "AI proposes.",
      highlight: "You decide what goes live.",
      text: "The studio uses your catalogue, Search Console queries and live search terms to suggest campaigns, keywords and ads. New campaigns are created in a paused state, and budget recommendations are never applied automatically.",
      points: ["Grounded on your products and real search data", "Campaigns always created paused", "No auto-optimise switch  ever"],
      visual: {
        kind: "timeline",
        data: {
          items: [
            { icon: "database", title: "Reads catalogue + search queries", text: "7,500 products · 1,240 queries" },
            { icon: "sparkles", title: "Proposes 3 campaigns", text: "Keywords, negatives, responsive ads, PMax assets" },
            { icon: "userCheck", title: "You review and edit", tag: "Human", tone: "purple" },
            { icon: "rocket", title: "Created in Google Ads", tag: "Paused", tone: "gray" },
          ],
        },
      },
    },
    {
      eyebrow: "Measurement",
      title: "ROAS on",
      highlight: "delivered orders",
      text: "Clicks and checkouts only tell part of the story. Reach tracks orders through delivery to better reflect what customers actually receive, and sends the exact purchased variant to Meta and GA4 from your server.",
      points: ["Server-side events survive ad blockers", "Variant-level item IDs for catalogue ads", "Consent respected on the client"],
      visual: { kind: "dashboard", host: "reach.gc.mw · results" },
    },
  ],
  steps: [
    { title: "Connect Google and Meta", text: "Connect each provider once to access its available services." },
    { title: "Build segments", text: "Build audiences using customer and order data, while respecting consent." },
    { title: "Plan and launch", text: "Channel campaigns and AI-drafted ads, reviewed by you." },
    { title: "Measure and recover", text: "Measure results using delivered orders, manage reviews and recover abandoned carts." },
  ],
  connects: [
    { slug: "comms", for: "Campaign sends with consent and quiet hours" },
    { slug: "commerce", for: "Catalogue feeds and customer audiences" },
    { slug: "links", for: "Trackable links per channel" },
    { slug: "insights", for: "Funnels, UTM and cohort results" },
    { slug: "social", for: "Organic posts next to paid campaigns" },
    { slug: "crm", for: "Ad leads into the contact book" },
  ],
  compare: {
    them: "Separate marketing tools",
    rows: [
      ["WhatsApp, SMS, email and push in one place", true, false],
      ["AI ad plans created paused for review", true, "Auto-apply"],
      ["Merchant Center disapproval reasons", true, "Separate"],
      ["Google reviews synced and answered", true, false],
      ["Results on delivered orders", true, false],
      ["Server-side Meta and GA4 events", true, "Plugin"],
    ],
  },
  principles: [
    { icon: "userCheck", title: "Humans apply", text: "AI proposes campaigns; a person reviews them; they start paused." },
    { icon: "shield", title: "Consent-aware", text: "Marketing sends and client-side pixels respect the customer’s consent." },
    { icon: "plug", title: "One connection per provider", text: "Connect Google once  every Growcord product uses the same authorised connection." },
    { icon: "eye", title: "No self-serving ratings", text: "Google reviews are shown as they are, never marked up as fake rich results." },
  ],
  pricing: { title: "Included with your Growcord organisation", text: "Campaign messages are billed by purpose at usage rates. Your ad budget is paid directly to Google and Meta.", cta: { label: "See usage pricing", href: "/pricing#usage" } },
  faqs: [
    { q: "Does the AI ads studio change my Google Ads automatically?", a: "No. The studio proposes campaigns, keywords and ads for you to review. Anything created in Google Ads starts paused, and budget suggestions are never applied automatically." },
    { q: "Which Google services does Reach connect to?", a: "Search Console, Google Analytics 4, Merchant Center, Google Ads, Tag Manager, Business Profile and PageSpeed  all through one Google connection." },
    { q: "Can I manage Google reviews?", a: "Yes. Sync your Business Profile reviews, reply to them from one screen, and choose which reviews to show on your website." },
    { q: "Which channels can campaigns use?", a: "WhatsApp, SMS, email and web push, each with its own panel, preview and readiness check." },
    { q: "Do you support Meta Conversions API?", a: "Yes. Purchase and funnel events are sent server-side to Meta and GA4 with the exact variant, alongside consent-gated browser pixels." },
    { q: "Who pays for the ads?", a: "Your ad budget is paid directly to Google or Meta. Growcord charges only for the messages you send and any managed services you choose." },
  ],
};
export const social = {
  slug: "social",
  name: "Social",
  group: "growth",
  icon: "calendar",
  image: Social,
  status: "beta",
  host: "social.gc.mw",
  appUrl: "https://social.gc.mw",
  tagline: "Plan and publish content for all the brands you manage",
  summary: "Manage content for multiple brands in one calendar, with Facebook Pages and Instagram connected through Growcord.",
  metaTitle: "Social Media Scheduler for Brands & Agencies  Content Calendar (Beta)",
  metaDescription:
    "Growcord Social (beta) is a content calendar for brands and agencies: plan posts for several brands, connect Facebook Pages and Instagram through your Growcord connection, and add trackable short links to every post.",
  keywords: ["social media scheduler india", "content calendar tool", "instagram scheduler", "social media management tool for agencies"],
  servicesData: [
    {
      id: 1,
      title: "Multi-Brand Content Calendar",
      icon: <FaCalendarDays />,
    },
    {
      id: 2,
      title: "Direct Meta Account Connection",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      title: "Auto-Publish & Smart Scheduling",
      icon: <FaClockRotateLeft />,
    },
    {
      id: 4,
      title: "Trackable Dynamic Short Links",
      icon: <FaLink />,
    },
    {
      id: 5,
      title: "Campaign & Click Analytics",
      icon: <FaChartPie />,
    },
  ],
  hero: {
    eyebrow: "Growcord Social · Beta",
    title: "A single content calendar for",
    highlight: "every brand you post for",
    lede: "Schedule and auto publish a month of visual content across Facebook Pages and Instagram. Connect multiple brand accounts in seconds and organize weekly grids without jumping between different social logins.",
  },
  visual: "calendar",
  facts: [
    { value: "Many brands", label: "in one workspace" },
    { value: "1 connect", label: "Meta Pages and Instagram via Growcord" },
    { value: "Tracked", label: "short links in posts" },
    { value: "Beta", label: "features switch on as providers are approved" },
  ],
  audience: {
    persona: "For agencies and in-house teams managing social content for several brands and tired of planning in spreadsheets or switching between accounts.",
    needs: ["See a month of posts for each brand", "Connect Instagram and Facebook once", "Know which post drove site visits", "Keep brands separate", "Bring leads into the CRM"],
  },
  before: ["A spreadsheet calendar per brand", "Logging in and out of accounts to post", "No link between a post and a visit", "Leads from DMs lost"],
  after: ["One calendar, filtered by brand", "Accounts connected through Growcord", "A short link per post with click counts", "Leads into the Growcord contact book"],
  features: [
    { icon: "calendar", title: "Content calendar", text: "Schedule and organise posts by day or week across the brands you manage." },
    { icon: "briefcase", title: "Multi-brand workspaces", text: "Keep each brand’s social accounts, content and links in its own workspace." },
    { icon: "plug", title: "Meta through Growcord", text: "Connect Facebook Pages and Instagram through Growcord, without managing separate app keys." },
    { icon: "link", title: "Trackable links", text: "Add a gc.mw short link to each post and track its clicks separately." },
    { icon: "pen", title: "Drafts", text: "Write, save and revisit posts before they are scheduled." },
    { icon: "users", title: "Leads to CRM", text: "New leads and accounts are added to your Growcord contact book." },
    { icon: "receipt", title: "Invoices through Books", text: "Plan payments become GST tax invoices." },
    { icon: "fingerprint", title: "Growcord ID sign-in", text: "The same account you use for every Growcord product." },
  ],
  spotlights: [
    {
      eyebrow: "Plan",
      title: "A month of content,",
      highlight: "at a glance",
      text: "View posts for every brand in one calendar, spot gaps in your schedule and keep campaigns coordinated across channels.",
      points: ["Filter by brand or network", "Drafts next to scheduled posts", "Links attached per post"],
      visual: { kind: "calendar" },
    },
    {
      eyebrow: "Measure",
      title: "Which post",
      highlight: "actually drove visits",
      text: "Each post can include a campaign-tagged short link from Links & eCards, allowing you to measure clicks for individual posts.",
      points: ["One link per post", "UTM tags added for you", "Clicks by channel"],
      visual: { kind: "qr" },
    },
  ],
  steps: [
    { title: "Create brand workspaces", text: "One per brand you post for." },
    { title: "Connect accounts", text: "Facebook Pages and Instagram through Growcord." },
    { title: "Plan the month", text: "Drafts and scheduled posts on the calendar." },
    { title: "Track results", text: "Clicks from every post’s short link." },
  ],
  connects: [
    { slug: "links", for: "Short links in scheduled posts" },
    { slug: "crm", for: "Leads and new accounts" },
    { slug: "books", for: "Plan payments as GST invoices" },
    { slug: "reach", for: "Organic posts next to paid campaigns" },
  ],
  compare: {
    them: "Spreadsheet + native apps",
    rows: [
      ["Several brands on one calendar", true, false],
      ["Accounts connected once", true, false],
      ["Tracked link per post", true, false],
      ["Leads into a CRM", true, false],
      ["GST invoice for your plan", true, "Varies"],
      ["Single sign-in across tools", true, false],
    ],
  },
  principles: [
    { icon: "plug", title: "One authorised connection", text: "Meta access goes through one Growcord connection, not keys scattered across apps." },
    { icon: "briefcase", title: "Brands kept apart", text: "Each brand’s accounts and content stay in its own workspace." },
    { icon: "check", title: "Honest beta", text: "Networks switch on as their approvals complete  we don’t pretend otherwise." },
    { icon: "link", title: "Measured by default", text: "Every post link is trackable from day one." },
  ],
  roadmap: ["LinkedIn, X, YouTube, Pinterest and Threads publishing", "Approval workflows for clients", "Post performance analytics"],
  pricing: { title: "Beta  ask for access", text: "Social is in beta. Plans will be shown inside the app when publishing opens for everyone.", cta: { label: "Request access", href: "/contact-us?interest=social" } },
  faqs: [
    { q: "Is Growcord Social available now?", a: "Social is in beta. Brands can plan content and connect Facebook Pages and Instagram through Growcord; more networks switch on as their approvals complete." },
    { q: "Which networks are supported?", a: "Facebook Pages and Instagram through your Growcord Meta connection. LinkedIn, X, YouTube, Pinterest and Threads are on the roadmap." },
    { q: "Can agencies manage several brands?", a: "Yes. Each brand has its own workspace with its own accounts, posts and links." },
    { q: "How are post results tracked?", a: "Posts carry short links from Growcord Links & eCards with campaign tags, so clicks from each post are counted." },
    { q: "Do I need my own Meta developer app?", a: "No. Accounts connect through Growcord’s single platform connection." },
    { q: "Does it work with Growcord CRM?", a: "Yes. Leads and new accounts from Social land in your Growcord contact book." },
  ],
};

export const links = {
  slug: "links",
  name: "Links & eCards",
  group: "growth",
  icon: "link",
  image: Links,
  status: "live",
  host: "gc.mw",
  appUrl: "https://app.gc.mw",
  tagline: "Create short links, QR codes and digital visiting cards",
  summary: "Create trackable short links and QR codes, share digital visiting cards, and build a personal page at gc.mw/@you.",
  metaTitle: "URL Shortener, QR Code Generator & Digital Visiting Card  gc.mw",
  metaDescription:
    "Growcord Links & eCards (gc.mw): short links and QR codes with click analytics, UTM tags and one link per channel, digital visiting cards, and a personal profile page at gc.mw/@you  connected to Growcord CRM.",
  keywords: ["url shortener india", "qr code generator with analytics", "digital visiting card", "link in bio page", "branded short links"],
  servicesData: [
    {
      id: 1,
      title: "Branded URL Shortener",
      icon: <FaLink />,
    },
    {
      id: 2,
      title: "Dynamic QR Code Studio",
      icon: <LuQrCode />,
    },
    {
      id: 3,
      title: "Digital Visiting Cards (vCard)",
      icon: <LuContact />,
    },
    {
      id: 4,
      title: "Deep Link & Geo-Targeting",
      icon: <LuSmartphone />,
    },
    {
      id: 5,
      title: "Real-Time Click & Scan Analytics",
      icon: <FiBarChart />,
    },
  ],
  hero: {
    eyebrow: "Links & eCards · gc.mw",
    title: "Connect packaging to digital sales with",
    highlight: "smart, editable dynamic QR codes",
    lede: "Print dynamic QR codes on product boxes, flyers, and inserts without worrying about link expiration. Change destinations anytime, measure offline scan performance by city, and drive reorders effortlessly.",
  },
  visual: "qr",
  facts: [
    { value: "gc.mw", label: "a five-character short domain" },
    { value: "1 link", label: "per channel for the same destination" },
    { value: "QR", label: "for print, packaging and counters" },
    { value: "@you", label: "a personal page at gc.mw/@handle" },
  ],
  audience: {
    persona: "For marketers, sales teams, retailers and professionals who share links on WhatsApp, print QR codes on packaging or cards, and want to understand which channels generate engagement.",
    needs: ["Shorten a long link to fit an SMS", "Print a QR code on packaging", "Share a digital visiting card", "See clicks by channel", "Capture leads from a personal page"],
  },
  before: ["Long links that break SMS character limits", "Free QR generators with no analytics", "Paper visiting cards that are out of date", "No idea whether WhatsApp or SMS drove the click"],
  after: ["Short gc.mw links with tags and UTM", "QR codes linked to trackable destinations", "Digital cards you update anytime", "Clicks counted per channel"],
  features: [
    { icon: "link", title: "Short links on gc.mw", text: "Create concise, readable links that fit SMS messages and are easy to share." },
    { icon: "qr", title: "QR codes", text: "Generate high-resolution QR codes for packaging, menus, counters and visiting cards." },
    { icon: "idcard", title: "Digital visiting cards", text: "Share a digital card containing your contact details and links, with an option for others to save your contact." },
    { icon: "user", title: "Your page at gc.mw/@you", text: "Create a personal profile page for your links, with follower features available when you choose to make it public." },
    { icon: "share", title: "One link per channel", text: "Create separate links for WhatsApp, SMS and emaileven when they lead to the same destinationso you can track clicks by channel." },
    { icon: "hash", title: "Tags and UTM", text: "Add campaign tags and UTM parameters when you create a link." },
    { icon: "chart", title: "Click analytics", text: "Track how clicks change over time and see which channels drive them." },
    { icon: "pen", title: "Editable destinations", text: "Update a link’s destination even after its QR code has been printed." },
  ],
  spotlights: [
    {
      eyebrow: "Attribution",
      title: "Same destination,",
      highlight: "a link for each channel",
      text: "When a Growcord store shares an order link by both WhatsApp and SMS, each channel receives a different short link. That makes it possible to see which message generated the click.",
      points: ["Links minted automatically by Comms", "Tags and UTM stored with the link", "Customer links visible on the order"],
      visual: { kind: "qr" },
    },
    {
      eyebrow: "Identity",
      title: "A page that is",
      highlight: "really yours",
      text: "Claim your gc.mw/@yourname page to share your profile and links. With Growcord ID, you can choose what to make public, approve followers and control what you share.",
      points: ["Public or private by your choice", "Follow requests you approve", "Blocks always win"],
      visual: { kind: "signin", host: "gc.mw/@you" },
    },
  ],
  steps: [
    { title: "Sign in", text: "With Growcord ID  one account for everything." },
    { title: "Create links and cards", text: "Create short links and QR codes, and set up your digital visiting card." },
    { title: "Share everywhere", text: "WhatsApp, SMS, print, social and email." },
    { title: "Watch the clicks", text: "Track clicks by link and channel, with leads sent to CRM." },
  ],
  connects: [
    { slug: "comms", for: "Short links minted inside every message" },
    { slug: "crm", for: "Leads and new accounts" },
    { slug: "books", for: "Plan payments as GST invoices" },
    { slug: "social", for: "Links in scheduled posts" },
    { slug: "growcord-id", for: "Your @handle and profile" },
  ],
  compare: {
    them: "Free shortener + QR site",
    rows: [
      ["Separate link per channel", true, false],
      ["QR with click analytics", true, "Limited"],
      ["Digital visiting card", true, false],
      ["Personal @handle page", true, false],
      ["Leads into a CRM", true, false],
      ["Editable after printing", true, "Paid"],
    ],
  },
  principles: [
    { icon: "shield", title: "Abuse blocked", text: "Links that redirect to phishing or abusive content are blocked at creation to help protect the domain." },
    { icon: "lock", title: "You control public", text: "Your @ page displays only the information you choose to publish." },
    { icon: "check", title: "Owned names", text: "Your gc.mw name page is reserved for its owner and cannot be claimed by someone else first." },
    { icon: "chart", title: "Clicks are events", text: "Link clicks are included in Growcord’s wider analytics." },
  ],
  pricing: { title: "Plans inside gc.mw", text: "Start free and upgrade inside the app. Links sent by Growcord Comms are included with your messages.", cta: { label: "Open gc.mw", href: "https://app.gc.mw", external: true } },
  faqs: [
    { q: "What is gc.mw?", a: "gc.mw is Growcord’s short domain for links, QR codes, digital visiting cards and personal pages at gc.mw/@handle." },
    { q: "Can I edit a link after printing its QR code?", a: "Yes. Change the destination of a link at any time; the printed QR code keeps working and goes to the new place." },
    { q: "Why does one destination get several links?", a: "When the same page is shared on WhatsApp, SMS and email, each channel gets its own short link, so you can see which channel was opened." },
    { q: "What is a digital visiting card?", a: "A shareable page with your name, contact details and links, which people can open from a link or QR and save to their phone." },
    { q: "Can I get a personal page?", a: "Yes. Claim gc.mw/@yourname with Growcord ID and choose what is public and who can follow you." },
    { q: "Does it connect to my CRM?", a: "Yes. Leads from your pages and cards land in the Growcord CRM contact book." },
  ],
};