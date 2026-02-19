import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-solar text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-7 w-7 text-secondary" />
              <span className="font-heading text-xl font-bold">Sameer Associates</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Powering Karnataka with reliable solar solutions since 2011. Trusted by 500+ customers for quality installations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/installations", label: "Installations" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-secondary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Our Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Solar Water Heaters", "Solar Rooftop", "Solar Pumps", "Solar Street Lights", "Solar UPS"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="hover:text-secondary transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-secondary" />
                <a href="tel:9980834941" className="hover:text-secondary transition-colors">+91 9980834941</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-secondary" />
                <span>sameer.associates2011@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span>Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Sameer Associates. All rights reserved. | Est. 2011
        </div>
      </div>
    </footer>
  );
};

export default Footer;
