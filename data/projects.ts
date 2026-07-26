import {
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Clapperboard,
  ListTodo,
  ReceiptText,
  ShoppingBag,
  UserCog,
  UsersRound, Truck
} from "lucide-react";



export const projects = [

  {
    slug: "issue-tracking-system",
    title: "Issue Tracking System",
    subtitle: "Task and Progress Management",
    category: "Web Application",
    description:
      "A centralized system that streamlines issue reporting, task assignment, status monitoring, and progress tracking.",
    technologies: ["PHP", "CodeIgniter"],
    icon: ListTodo,
    accent: "violet", 
    liveUrl: null
  },
  {
    slug: "cinema-ticketing-system",
    title: "Cinema Ticketing System",
    subtitle: "Ticketing and CMS Dashboard",
    category: "Web Application",
    description:
      "A cinema ticketing platform integrated with a kiosk machine for seat reservations, supported by a CMS dashboard for managing images, videos, promotions, advertisements, and movie trailers.",
    technologies: ["PHP", "CodeIgniter", "CMS"],
    icon: Clapperboard,
    accent: "rose",
    liveUrl: null
  },
    {
    slug: "hr-system",
    title: "HR System",
    subtitle: "Employee and Payroll Module",
    category: "Enterprise System",
    description:
      "An employee and payroll management module designed to maintain employee records and support payroll operations.",
    technologies: ["PHP", "CodeIgniter"],
    icon: UsersRound,
    accent: "blue",
    liveUrl: null
  },
  {
  slug: "quickbooks-trackpod-integration",
  title: "QuickBooks Order Items to Track-Pod Shipment Integration",
  subtitle: "ERP & Logistics Automation",
  category: "E-Commerce",
  description:
    "Developed an integration between QuickBooks and Track-Pod that automatically synchronizes customer orders, shipment details, and delivery information. The solution eliminates manual encoding, streamlines dispatch operations, and provides real-time shipment tracking for business-to-business deliveries.",
  technologies: [
    "PHP",
    "Laravel",
    "QuickBooks API",
    "Track-Pod API",
    "REST API",
    "MySQL"
  ],
  features: [
    "Automatic order synchronization",
    "Shipment creation in Track-Pod",
    "Customer and delivery mapping",
    "Delivery status synchronization",
    "Error logging and retry mechanism",
    "Real-time shipment tracking"
  ],
  icon: Truck,
  accent: "orange",
    featured: true,
  liveUrl: null
},
  {
    slug: "report-automation",
    title: "Building and Automating Reports",
    subtitle: "Payroll and Clinical Reporting",
    category: "Reporting Automation",
    description:
      "Created Excel macro automation, customized QuickBooks reports, and developed Crystal Reports for Sage 300 to support payroll and clinical operations.",
    technologies: [
      "VB.NET",
      "Crystal Reports",
      "Vue.js",
      "MySQL",
      "QuickBooks",
      "Sage 300"
    ],
    icon: ChartNoAxesCombined,
    accent: "cyan",
    liveUrl: null
  },
  
  {
    slug: "hrms-notice-module",
    title: "HRMS Notice Module",
    subtitle: "Employee Workflow Management",
    category: "Enterprise System",
    description:
      "An HR module for updating employee hire and termination dates, wages, and positions through a structured approval workflow.",
    technologies: ["Laravel", "Vue.js"],
    icon: UserCog,
    accent: "amber",
    liveUrl: null
  },
  {
    slug: "eftc-reimbursement-payroll",
    title: "Reimbursement Payroll Module",
    subtitle: "Employee Reimbursement Processing",
    category: "Enterprise System",
    description:
      "A payroll module that processes employee reimbursements, maps requests to payroll periods, and supports reimbursement tracking.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    icon: ReceiptText,
    accent: "emerald",
    liveUrl: null
  },
  {
    slug: "event-website",
    title: "Event Registration Website",
    subtitle: "Delegate and Facilitator Registration",
    category: "Website",
    description:
      "An event website that handles delegate and facilitator registration for B2B meetings, conferences, and webinars.",
    technologies: ["PHP", "WordPress"],
    icon: CalendarDays,
    accent: "indigo",
    liveUrl: null
  },
  {
    slug: "cathly-shoppe",
    title: "Cathly Shoppe Website",
    subtitle: "Online Thrift Shop",
    category: "E-Commerce",
    description:
      "A responsive promotional website that displays new arrivals and organizes thrift shop products by category.",
    technologies: ["Next.js"],
    icon: ShoppingBag,
    accent: "pink",
    liveUrl: "https://cathly-shoppe.vercel.app/"
  },
  {
    slug: "mdr-apartment",
    title: "MDR Apartment Website",
    subtitle: "Apartment Rental Website",
    category: "Website",
    description:
      "A property website that presents apartment amenities, available rooms, and rental information in a modern responsive interface.",
    technologies: ["Next.js"],
    icon: Building2,
    accent: "sky",
    liveUrl: "https://dmr-apartment.vercel.app/"
  },
  {
    slug: "wqip-tracking",
    title: "Tracks Clinical Performance & Staffing Metrics",
    subtitle: "Workforce Quality Incentive Program Tracking",
    category: "Reporting Automation",
    description:
      "Performance reporting dashboard that consolidates clinical quality metrics, calculates performance becnhmarks, and provides estimated incentive payouts through automated Excel formulas and reporting.",
    technologies: [
      "VB.NET",
      "Excel"
    ],
    icon: ChartNoAxesCombined,
    accent: "emerald",
    liveUrl: null
  },
] as const;