const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container text-center">
      <p className="font-display text-xl font-bold text-primary-foreground mb-2">FAIRVIEW</p>
      <p className="text-sm text-primary-foreground/60 font-body">
        © {new Date().getFullYear()} FAIRVIEW Consulting Group. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
