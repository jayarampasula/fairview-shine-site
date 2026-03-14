import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold font-display uppercase tracking-widest text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Contact FAIRVIEW Consulting Group
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Ready to streamline your finance operations? Schedule a consultation with our team to explore
              how FAIRVIEW can support your accounting needs.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-body">Hyderabad, India</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@fairviewconsultinggroup.com" className="text-foreground font-body hover:text-accent transition-colors">
                <a href="mailto:cavenu123@gmail.com" className="text-foreground font-body hover:text-accent transition-colors">
                  cavenu123@gmail.com
                </a>
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-body">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-background border border-border rounded-sm p-8 space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="rounded-sm"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="rounded-sm"
            />
            <Input
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="rounded-sm"
            />
            <Textarea
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="rounded-sm resize-none"
            />
            <Button type="submit" size="lg" className="w-full">
              Schedule Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
