import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container text-center flex flex-col items-center">
      <img src={logo} alt="FAIRVIEW Consulting Group" className="h-12 w-auto mb-3 brightness-0 invert" />
      <p className="text-sm text-primary-foreground/60 font-body">
        © {new Date().getFullYear()} FAIRVIEW Consulting Group. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
