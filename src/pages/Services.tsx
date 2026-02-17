import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Search, ClipboardCheck, PhoneCall, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: ClipboardCheck,
    title: "Installation",
    desc: "Professional installation of all solar products by our trained and certified technicians. We ensure safe, efficient and standards-compliant installations for homes, businesses and institutions.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Regular maintenance services to keep your solar systems running at peak efficiency. We offer annual maintenance contracts and emergency repair services for all our products.",
  },
  {
    icon: PhoneCall,
    title: "Free Consultation",
    desc: "Get expert advice on the best solar solution for your needs. Our team assesses your energy requirements, roof space, budget and recommends the optimal system configuration.",
  },
  {
    icon: Search,
    title: "Site Inspection",
    desc: "Comprehensive on-site inspection to evaluate solar potential, structural readiness, and shading analysis. We provide detailed reports with system design recommendations.",
  },
  {
    icon: Settings,
    title: "After-Sales Service",
    desc: "Dedicated after-sales support including warranty claims, performance monitoring, and system upgrades. We stand behind every installation with responsive service.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>Our Services</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(210 20% 80%)" }}>
              End-to-end solar solutions — from consultation and installation to maintenance and support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-solar transition-shadow"
              >
                <div className="gradient-amber h-14 w-14 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="font-semibold">
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-bold text-primary mb-4">Need a Solar Service?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Contact us for a free site inspection and consultation. Our team is ready to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-amber text-accent-foreground font-semibold shadow-amber">
                Request Service Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
