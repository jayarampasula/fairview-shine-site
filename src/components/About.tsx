import { Target, Users, Shield, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, label: "Mission-Driven" },
  { icon: Users, label: "Extended Finance Team" },
  { icon: Shield, label: "Compliance-Focused" },
  { icon: TrendingUp, label: "Scalable Operations" },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold font-display uppercase tracking-widest text-accent mb-3">Who We Are</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          About FAIRVIEW Consulting Group
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed text-left">
          FAIRVIEW Consulting Group provides reliable offshore accounting and finance support to U.S. businesses,
          CPA firms, and advisory firms. Our mission is to help organizations improve operational efficiency,
          maintain compliance, and gain better financial insights through high-quality accounting support.
        </p>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mt-4 text-left">
          With expertise across bookkeeping, financial reporting, audit support, and financial planning & analysis,
          we act as an extended finance team for our clients. Our Hyderabad-based team works closely with U.S. firms
          to deliver scalable, secure, and cost-effective finance operations.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 p-4">
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
              <Icon size={22} className="text-primary" />
            </div>
            <span className="text-sm font-semibold font-display text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
