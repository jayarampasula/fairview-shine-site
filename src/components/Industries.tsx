import { Briefcase, Globe, ShoppingCart, Cloud, Factory, Rocket } from "lucide-react";

const industries = [
  { icon: Briefcase, label: "CPA Firms" },
  { icon: Globe, label: "Professional Services" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Cloud, label: "SaaS Companies" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Rocket, label: "Startups & SMBs" },
];

const Industries = () => (
  <section id="industries" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold font-display uppercase tracking-widest text-accent mb-3">Who We Serve</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">Industries We Support</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-sm p-6 flex flex-col items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <Icon size={28} className="text-primary" />
            <span className="text-sm font-semibold font-display text-foreground text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
