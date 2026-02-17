import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Shield, Award, Users, Zap, Droplets, Sun as SunIcon, Battery, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/Solar Roof Top 5KW DWD.jpg";
import waterHeaterImg from "@/assets/Solar Water Heatrer 2000LTRS.jpg";
import rooftopImg from "@/assets/Solar 5KW Off Grid.jpg";
import streetLightImg from "@/assets/Solar Street Light.jpg";
import pumpImg from "@/assets/Solar Water Pump.jpg";

const stats = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Installations" },
  { icon: Shield, value: "100%", label: "Warranty Backed" },
  { icon: Zap, value: "Govt", label: "Projects Done" },
];

const featuredProducts = [
  { title: "Solar Water Heaters", desc: "ETC & FPC systems for homes, hotels and institutions", img: waterHeaterImg, icon: Droplets },
  { title: "Solar Rooftop", desc: "On-grid & Off-grid systems for commercial and residential", img: rooftopImg, icon: SunIcon },
  { title: "Solar Street Lights", desc: "LED solar street lighting for roads, campuses and villages", img: streetLightImg, icon: Zap },
  { title: "Solar Pumps", desc: "Agricultural solar pump systems for irrigation and water supply", img: pumpImg, icon: Battery },
];

const majorProjects = [
  { title: "10KW Off Grid System", location: "Forest Training Academy" },
  { title: "5KW Off Grid System", location: "Anashi Nature Camp" },
  { title: "8000 LTR Solar Water Heater", location: "Gungargatti" },
  { title: "Solar Pump Installation", location: "DWD" },
  { title: "2000 LTR Solar Water Heater", location: "Govt School, Koppal" },
  { title: "Solar Street Lights", location: "Nippani" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src={heroImage} alt="Solar panels" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block gradient-amber text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Est. 2011 — Karnataka, India
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(45 100% 96%)" }}>
              Powering Karnataka with Reliable{" "}
              <span className="text-gradient-amber">Solar Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "hsl(210 20% 80%)" }}>
              12+ years of trusted experience in solar water heaters, rooftop systems, street lights, pumps & more. Quality installations backed by warranty.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9980834941">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 text-center shadow-solar border border-border"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Solar Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive range of solar thermal and power products for every need</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod, i) => (
              <motion.div
                key={prod.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to="/products" className="group block bg-card rounded-xl overflow-hidden shadow-solar border border-border hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm p-2 rounded-full">
                      <prod.icon className="h-5 w-5 text-secondary" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{prod.title}</h3>
                    <p className="text-sm text-muted-foreground">{prod.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="lg" className="font-semibold">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Major Installations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by government institutions and commercial projects across Karnataka</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-solar transition-shadow"
              >
                <div className="gradient-amber h-1 w-12 rounded-full mb-4" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{proj.title}</h3>
                <p className="text-sm text-muted-foreground">{proj.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-solar">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>
              Ready to Go Solar?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(210 20% 80%)" }}>
              Get a free consultation and site inspection. Start saving on electricity bills today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-amber text-accent-foreground font-semibold text-base shadow-amber">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919980834941" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
