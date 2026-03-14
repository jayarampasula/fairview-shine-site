import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container text-center flex flex-col items-center">
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} alt="FAIRVIEW Consulting Group" className="h-16 w-auto rounded brightness-0 invert" />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-lg font-bold tracking-wide text-primary-foreground font-heading">FAIRVIEW</span>
          <span className="text-[10px] font-medium tracking-widest uppercase text-primary-foreground/60 font-body">Consulting Group</span>
        </div>
      </div>
      <p className="text-sm text-primary-foreground/60 font-body">
        © {new Date().getFullYear()} FAIRVIEW Consulting Group. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
