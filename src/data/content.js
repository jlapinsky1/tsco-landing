export const painCards = [
  [
    "No clear owner",
    "When a customer request crosses from support to billing to operations to product, nobody knows who owns it — or when it was last touched. Work disappears in the handoff.",
  ],
  [
    "No repeatable process",
    "Every team member handles complex requests differently. There are no guided playbooks, no consistent escalation paths, no standard way to move cross-functional work forward.",
  ],
  [
    "No reliable record",
    "When a request finally resolves, the history lives in email threads and Slack messages. There is no durable record of what happened, who touched it, or how long it took.",
  ],
];

export const features = [
  {
    icon: "eye",
    label: "Customer context",
    title: "Tie work to the account.",
    copy: "Connect every request to the account, contact, history, products, prior issues, and prior communication — so everyone who touches it starts informed.",
  },
  {
    icon: "user",
    label: "Clear ownership",
    title: "Make ownership explicit.",
    copy: "Every request has an accountable owner, not just a queue. Ownership is visible, trackable, and transferable when work moves across teams.",
  },
  {
    icon: "list",
    label: "Guided playbooks",
    title: "Turn repeatable work into process.",
    copy: "Structure recurring customer request types as guided playbooks with steps, checklists, required fields, and handoff logic baked in.",
  },
  {
    icon: "alert",
    label: "Escalation paths",
    title: "Surface stuck work before it breaks.",
    copy: "Define escalation rules by request type, account tier, SLA, or time threshold. Move urgent or stuck work to the right people automatically.",
  },
  {
    icon: "clock",
    label: "Time and effort tracking",
    title: "Know the true cost of customer work.",
    copy: "Track time by account, request type, team, and product area. Understand where effort is going and which customers consume the most operational capacity.",
  },
  {
    icon: "archive",
    label: "Complete record",
    title: "Leave a durable history behind.",
    copy: "Every action, owner change, status update, and resolution is logged. You can always answer: what happened, who handled it, and how was it resolved.",
  },
];

export const industries = [
  {
    icon: "building",
    label: "Software companies",
    copy: "Onboarding issues, adoption blockers, technical escalations, implementation tasks, and account risk that live between support, product, and customer success.",
  },
  {
    icon: "factory",
    label: "Manufacturers",
    copy: "Warranty claims, dealer requests, quote questions, parts issues, technical documentation, and service escalations that span field teams and back-office systems.",
  },
  {
    icon: "truck",
    label: "Distributors",
    copy: "Order questions, inventory issues, pricing exceptions, vendor coordination, and shipping problems that cross operations, sales, and logistics.",
  },
  {
    icon: "wrench",
    label: "Managed services",
    copy: "Client requests, SLA-bound work, recurring service tasks, escalations, and account-level visibility that needs to move across delivery and account teams.",
  },
  {
    icon: "briefcase",
    label: "Professional services",
    copy: "Client requests, approvals, deliverables, handoffs, documentation, and time tracking that needs to move across project teams, practice leads, and clients.",
  },
  {
    icon: "shield",
    label: "Regulated organizations",
    copy: "Audit trails, documented decisions, controlled processes, escalation history, and compliance visibility built into every customer-facing workflow.",
  },
];

export const comparisons = [
  {
    against: "Help desks",
    theirs: "Help desks manage conversations.",
    ours: "TeamSupport manages the work behind them.",
  },
  {
    against: "Project tools",
    theirs: "Project tools manage internal tasks.",
    ours: "TeamSupport manages work that originates from customers — with account context, SLAs, playbooks, time tracking, and a durable record.",
  },
  {
    against: "Vertical SaaS",
    theirs: "Vertical software manages industry-specific operations.",
    ours: "TeamSupport manages customer-facing work that cuts across support, service, billing, account teams, product, and operations.",
  },
];

export const beforeState = [
  "Requests scattered across inboxes and disconnected tools",
  "Support owns problems it cannot solve alone",
  "Escalations happen manually and too late",
  "Leadership lacks operational visibility",
  "No clear cost-to-serve by account or request type",
  "History disappears when the ticket closes",
];

export const afterState = [
  "Every request has context, an owner, and a guided process",
  "Teams follow playbooks that move work forward",
  "Escalations are defined, visible, and timely",
  "Effort is tracked and reportable by team or account",
  "Account history is complete and always accessible",
  "Leaders can see exactly where customer work gets stuck",
];

export const flowSteps = [
  { label: "Customer Request", color: "bg-slate-100 border-slate-300 text-slate-700" },
  { label: "Context", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Owner", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Playbook", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Escalation", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Effort Tracking", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Complete Record", color: "bg-slate-950 border-slate-950 text-white" },
];

export const teamLayer = [
  "Support",
  "Operations",
  "Billing",
  "Product",
  "Service",
  "Account Teams",
  "Leadership",
];
