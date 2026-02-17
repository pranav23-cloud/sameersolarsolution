import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/installations", label: "Installations" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-secondary" />
          <div className="leading-tight">
            <span className="font-heading text-xl font-bold text-primary block">Sameer Associates</span>
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Solar Energy Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-secondary-foreground bg-secondary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9980834941" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            9980834941
          </a>
          <Link to="/contact">
            <Button className="gradient-amber text-accent-foreground font-semibold shadow-amber hover:opacity-90 transition-opacity">
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border/50 ${
                location.pathname === link.to ? "text-secondary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a href="tel:9980834941" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="h-4 w-4" /> 9980834941
            </a>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full gradient-amber text-accent-foreground font-semibold">Get Free Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
