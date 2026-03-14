import { Award, DollarSign, Layers, Lock, Headphones } from "lucide-react";

const points = [
  { icon: Award, title: "Experienced Professionals", desc: "Finance experts with deep U.S. accounting knowledge and industry certifications." },
  { icon: DollarSign, title: "Cost-Effective Support", desc: "High-quality offshore accounting at a fraction of in-house staffing costs." },
  { icon: Layers, title: "Scalable Operations", desc: "Flexible team capacity that grows with your business needs." },
  { icon: Lock, title: "Secure & Confidential", desc: "Enterprise-grade security protocols and strict data confidentiality standards." },
  { icon: Headphones, title: "Dedicated U.S. Support", desc: "Responsive teams aligned to U.S. business hours and accounting standards." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold font-display uppercase tracking-widest text-accent mb-3">Our Advantage</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">Why Choose FAIRVIEW</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {points.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-1">
              <Icon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold font-display text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
