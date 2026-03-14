import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-start pt-20"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 hero-overlay" />
    <div className="container relative z-10 py-24 md:py-32">
      <div className="max-w-2xl animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-foreground mb-6">
          Reliable Accounting & Finance Support for U.S. Businesses and CPA Firms
        </h1>
        <p className="text-lg text-primary-foreground/85 font-body mb-8 max-w-xl">
          We help U.S. companies and accounting firms streamline finance operations, ensure compliance,
          and scale efficiently through reliable offshore support.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Schedule a Consultation</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
          <MapPin size={16} /> Hyderabad, India | Supporting U.S. Clients Globally
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
