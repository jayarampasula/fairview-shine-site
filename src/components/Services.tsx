import {
  BookOpen, BarChart3, FileCheck, TrendingUp, Settings, Globe,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "End-to-End Bookkeeping & Accounting",
    description: "Comprehensive daily accounting support including AP/AR, bank reconciliations, month-end close, and historical bookkeeping cleanup.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting & Insights",
    description: "Preparation of P&L, Balance Sheet, Cash Flow statements, management dashboards, KPI tracking, and custom financial reporting.",
  },
  {
    icon: FileCheck,
    title: "Audit & CPA Firm Support",
    description: "Support U.S. CPA firms with audit schedules, workpapers preparation, documentation management, and auditor coordination.",
  },
  {
    icon: TrendingUp,
    title: "Advanced FP&A Services",
    description: "Strategic financial planning including budgeting, forecasting, variance analysis, fixed asset accounting, and cash flow planning.",
  },
  {
    icon: Settings,
    title: "Specialized Accounting Expertise",
    description: "Support in inventory accounting, job & project costing, fixed asset management, and accounting software implementation (QuickBooks, Xero, Oracle ERP).",
  },
  {
    icon: Globe,
    title: "Global Capability Center (GCC) Support",
    description: "Help U.S. firms establish and scale GCCs in India with operational support, compliance alignment, and scalable accounting teams.",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold font-display uppercase tracking-widest text-accent mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group bg-card border border-border rounded-sm p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-200">
              <Icon size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
