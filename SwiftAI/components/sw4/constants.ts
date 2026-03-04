import {
  Activity,
  BellRing,
  Blocks,
  BrainCircuit,
  ChartNoAxesCombined,
  Eye,
  GitBranch,
  Globe,
  HardDrive,
  MonitorSmartphone,
  ShieldCheck,
  Siren,
  Users,
  Workflow,
  Wrench,
  Server,
  Database,
  FileSearch,
  Network,
  Cloud,
  Layers3,
  type LucideIcon,
} from "lucide-react";

export const heroStats = [
  { label: "KPIs covered", value: "1,100+" },
  { label: "Monitoring domains", value: "10+" },
  { label: "Landscape view", value: "Unified" },
  { label: "Operational posture", value: "Proactive" },
];

export const proofPoints = [
  "SAP supports critical business operations, not just back-office IT.",
  "Most major disruptions are preceded by warning signals.",
  "Without observability, issues are often discovered only after business impact begins.",
  "Observability is not just a technical capability; it is a business resilience capability.",
];

export const businessOutcomes = [
  "Detect problems early before users or customers are impacted",
  "Identify root causes faster across application, database, jobs, interfaces, and infrastructure",
  "Reduce downtime and performance degradation",
  "Ensure business-critical processes complete on time",
  "Improve user experience for SAP GUI, Fiori, and integrated applications",
  "Support proactive operations instead of reactive firefighting",
  "Maintain service levels, compliance, and business continuity",
];

export const downtimeStats = [
  {
    source: "ITIC 2024 survey",
    stat: "$300K+",
    label: "per hour",
    detail:
      "90% of mid-size and large enterprises reported more than $300,000 cost for a single hour of downtime.",
  },
  {
    source: "Uptime Institute 2024",
    stat: "54%",
    label: "Preventable",
    detail:
      "Of significant outages costing $100K+ were considered preventable with better monitoring.",
  },
  {
    source: "New Relic 2024",
    stat: "$1.9M/hr",
    label: "Cost ceiling",
    detail:
      "Potential cost ceiling for high-business-impact outages in observability research.",
  },
  {
    source: "BigPanda / EMA 2024",
    stat: "$14,056/min",
    label: "Avg outage cost",
    detail:
      "Reported average cost of an unplanned IT outage, before the ERP-chaos multiplier joins the party.",
  },
];

export const impactAreas = [
  "Business downtime",
  "Productivity loss",
  "Delayed business processes",
  "Higher support and recovery costs",
  "Customer and reputation impact",
];

export const operationalGaps = [
  {
    area: "Monitoring Coverage",
    current:
      "Different operational areas monitored using separate tools, reports, dashboards, or manual checks.",
    gap: "No single consolidated view of overall SAP landscape health.",
  },
  {
    area: "Issue Detection",
    current:
      "Teams rely on alerts, periodic reviews, or user-reported issues to identify problems.",
    gap: "Issues detected only after business impact has already started.",
  },
  {
    area: "Data Visibility",
    current:
      "Technical, application, database, interface, and user-experience signals viewed separately.",
    gap: "Lack of end-to-end visibility makes it hard to understand the full situation.",
  },
  {
    area: "Problem Correlation",
    current:
      "Operations teams manually connect symptoms across multiple layers and systems.",
    gap: "Root-cause analysis is slow, effort-intensive, and dependent on expert knowledge.",
  },
  {
    area: "Alerting Approach",
    current:
      "Monitoring based on static thresholds or disconnected alert mechanisms.",
    gap: "Alerts may be noisy, low-context, and difficult to prioritize.",
  },
  {
    area: "Historical Insight",
    current:
      "Operational data reviewed in isolation or retained for limited analysis.",
    gap: "Recurring patterns, trends, and slow degradation are easy to miss.",
  },
  {
    area: "Cross-System Monitoring",
    current: "Systems and components monitored in silos.",
    gap: "Teams lack a unified enterprise-wide view across landscapes and dependencies.",
  },
  {
    area: "Operational Efficiency",
    current:
      "Significant effort spent on manual review, investigation, and follow-up.",
    gap: "Monitoring remains reactive and consumes valuable expert time.",
  },
  {
    area: "User Experience Visibility",
    current: "End-user performance issues identified indirectly.",
    gap: "Productivity loss and service degradation may persist before action is taken.",
  },
];

export const somGapClosers = [
  {
    area: "Monitoring Coverage",
    gap: "No unified landscape view",
    solution: "Consolidated monitoring across KPI domains",
  },
  {
    area: "Issue Detection",
    gap: "Issues detected too late",
    solution: "Continuous monitoring for earlier detection",
  },
  {
    area: "Data Visibility",
    gap: "Limited end-to-end visibility",
    solution: "Centralized view across monitoring layers",
  },
  {
    area: "Problem Correlation",
    gap: "Root-cause analysis is manual and slow",
    solution: "Related signals viewed together for faster analysis",
  },
  {
    area: "Alerting Approach",
    gap: "Alerts are noisy and low-context",
    solution: "Better operational context for faster focus",
  },
  {
    area: "Historical Insight",
    gap: "Trends and slow degradation are missed",
    solution: "Historical data supports trend analysis",
  },
  {
    area: "Cross-System Monitoring",
    gap: "Systems are monitored in silos",
    solution: "Centralized visibility across landscapes",
  },
  {
    area: "Operational Efficiency",
    gap: "High manual effort and reactive support",
    solution: "Reduced manual effort through unified monitoring",
  },
  {
    area: "User Experience Visibility",
    gap: "User issues are identified indirectly",
    solution: "Earlier visibility into performance-related issues",
  },
];

export interface PlatformHighlight {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const platformHighlights: PlatformHighlight[] = [
  {
    title: "Unified Observability",
    text: "Monitor SAP systems, jobs, interfaces, databases, infrastructure, and user experience through one connected platform.",
    icon: Layers3,
  },
  {
    title: "Operational Intelligence",
    text: "Turn operational data into context-rich dashboards, trends, correlations, and insights that support faster decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Predictive Early Warning",
    text: "Detect degradation, anomalies, capacity risks, and business-impacting patterns earlier before they grow claws.",
    icon: Siren,
  },
  {
    title: "Enterprise Readiness",
    text: "Support scalable deployment, secure onboarding, governance, and extensible architecture for complex SAP landscapes.",
    icon: ShieldCheck,
  },
];

export interface Capability {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    title: "System Health & Risk Prediction",
    text: "Provides early visibility into rising operational risk before issues affect business continuity.",
    icon: Activity,
  },
  {
    title: "GenAI-Assisted Insight Discovery",
    text: "Turns complex monitoring data into clearer, faster-to-understand operational insights.",
    icon: BrainCircuit,
  },
  {
    title: "KPI Dashboards with Correlation & Forecasting",
    text: "Brings key indicators into one view, showing current status, connected signals, and likely future risk trends.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Predictive Early Watch Alerts",
    text: "Warns of likely issues in advance so action can be taken before disruption becomes visible.",
    icon: BellRing,
  },
  {
    title: "Threshold Breach Detection with Noise Control",
    text: "Detects important limit breaches while reducing unnecessary alert noise and improving focus.",
    icon: Wrench,
  },
  {
    title: "Anomaly Detection",
    text: "Identifies unusual behavior early, including risks that may not yet appear in standard alerting.",
    icon: Eye,
  },
  {
    title: "Topology Visualization",
    text: "Shows system relationships and dependencies clearly, helping reveal impact paths and affected areas.",
    icon: GitBranch,
  },
  {
    title: "Governance & Operational Control",
    text: "Supports structured oversight, accountability, and controlled operational response.",
    icon: ShieldCheck,
  },
  {
    title: "Real User Monitoring",
    text: "Reveals how applications are performing from the user perspective, helping protect service quality and productivity.",
    icon: MonitorSmartphone,
  },
  {
    title: "Integration and Exception Monitoring",
    text: "Improves visibility into connected processes and exception patterns, helping reduce hidden business disruption.",
    icon: Workflow,
  },
];

export interface CoverageArea {
  title: string;
  text: string;
  icon: LucideIcon;
  count: string;
}

export const coverageAreas: CoverageArea[] = [
  {
    title: "SAP Core Operations",
    text: "Enqueue, background jobs, work processes, users, runtime errors, RFC, locks, updates, and system statistics.",
    icon: Server,
    count: "400+",
  },
  {
    title: "HANA Database",
    text: "Services, service components, OS-level monitoring, and database alerts.",
    icon: Database,
    count: "200+",
  },
  {
    title: "Predictive Early Warning",
    text: "Number ranges, file systems, and table growth with a risk-oriented monitoring lens.",
    icon: BellRing,
    count: "80+",
  },
  {
    title: "Logs, Audit & Governance",
    text: "Application logs, system logs, audit logs, and archiving-related visibility.",
    icon: FileSearch,
    count: "120+",
  },
  {
    title: "Infrastructure",
    text: "Operating system visibility across the infrastructure layer supporting SAP workloads.",
    icon: HardDrive,
    count: "100+",
  },
  {
    title: "Business Process & Interfaces",
    text: "IDocs and integration-related visibility to reduce hidden process disruption.",
    icon: Network,
    count: "90+",
  },
  {
    title: "SAP BTP",
    text: "Global accounts, events, Cloud Foundry instances, and Cloud Foundry applications.",
    icon: Cloud,
    count: "150+",
  },
  {
    title: "User Experience",
    text: "Visibility into real user performance signals across application experiences and digital workflows.",
    icon: Users,
    count: "60+",
  },
];

export const useCases = [
  "SAP core operations monitoring",
  "Background job and batch control",
  "Interface and IDoc visibility",
  "HANA database observability",
  "Operating system and infrastructure visibility",
  "Real user monitoring for SAP and UI channels",
  "Cross-system analytics across landscapes",
  "Executive operational health visibility",
];

export const outcomes = [
  "Detect issues earlier across critical SAP operations",
  "Reduce root-cause analysis effort through better correlation",
  "Improve service reliability and operational resilience",
  "Gain long-term historical visibility and trend insight",
  "Prepare for AI-driven monitoring and predictive operations",
  "Support both leadership visibility and technical deep dives",
];

export const differentiators = [
  {
    title: "Built for SAP reality",
    text: "SwiftAI PRISM is designed around the operational complexity of SAP landscapes rather than generic monitoring assumptions.",
  },
  {
    title: "From alerts to operational context",
    text: "It moves beyond disconnected thresholds into layered observability, trend visibility, and meaningful prioritization.",
  },
  {
    title: "Leadership and technical value",
    text: "Executives get concise operational clarity while technical teams still have room to drill into detail.",
  },
];
