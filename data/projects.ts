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
      "A centralized issue tracking system designed to simplify issue reporting, task assignment, status monitoring, and progress tracking, enabling teams to collaborate efficiently and project visibility.",
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
      "An employee and payroll management system designed to centralize employee records, streamline payroll processing, and improve the efficiency of HR and payroll operations.",
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
    "Developed an integration between QuickBooks and Track-Pod that synchronizes customer orders, shipment details, and delivery information. The solution eliminates manual encoding, streamlines dispatch operations, and provides real-time shipment tracking for business-to-business deliveries.",
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
    subtitle: "Payroll and Order Sales Reporting",
    category: "Reporting Automation",
    description:
      "Automated sales order and payroll reports using Excel Macros, Crystal Reports, and QuickBooks custom reporting for payroll processing, employee records, financial and sales analysis, helping reduce manual work and improve reporting accuracy.",
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
      "Designed to manage employee updates, including hire and termination dates, salary adjustments, and position changes through a structured approval workflow, ensuring accuracy, accountability, and compliance.",
    technologies: ["Laravel", "Vue.js", "React.js",  "MySQL"],
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
      "A payroll module that process employee reimbursement requests by mapping approved claims to payroll periods, tracking reimbursement status, and ensuring accurate payroll integration.",
    technologies: ["Laravel", "Vue.js", "React.js", "MySQL"],
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
      "A web-based event registration platform designed for B2B meetings, conferences, and webinars. The website allows delegates and facilitators to register online, access event agendas and brochures, and provides organizers with an efficient way to manage registrations.",
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
      "A responsive e-commerce-inspired website built to promote thrift fashion, highlight new arrivals, and organize products into categories with a clean and user-friendly interface.",
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
      "A property website built to help prospective tenants explore available rooms, view amenities, and access rental information with an intuitive user experience.",
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