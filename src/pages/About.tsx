import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Award, Shield, Wrench, HeartHandshake } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImg from "@/assets/about-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const whyUs = [
  { icon: Award, title: "12+ Years Experience", desc: "Established in 2011, we bring over a decade of expertise in solar solutions." },
  { icon: Shield, title: "Quality & Warranty", desc: "We use only premium-grade products backed by manufacturer warranties." },
  { icon: Wrench, title: "Expert Installation", desc: "Our trained technicians ensure safe, efficient and long-lasting installations." },
  { icon: HeartHandshake, title: "After-Sales Support", desc: "Dedicated service and maintenance support throughout the product lifecycle." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>About Us</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(210 20% 80%)" }}>
              Learn about our journey of bringing clean solar energy to Karnataka since 2011.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <img src={aboutImg} alt="Sameer Associates Team" className="rounded-xl shadow-solar w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sameer Associates was established in 2011 by <strong className="text-foreground">Pramod Patil</strong> with a vision to make clean, renewable solar energy accessible to every home, business and institution across Karnataka.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over 12+ years, we have grown from a small enterprise to a trusted name in the solar energy sector. We specialize in the supply, installation and maintenance of all types of solar products — from water heaters and rooftop systems to solar pumps and street lights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, customer satisfaction and sustainable energy has helped us complete 500+ installations including prestigious government projects across Karnataka.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <Target className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide affordable, high-quality solar energy solutions that reduce electricity costs and contribute to a greener planet. We aim to make solar power the first choice for energy in Karnataka.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <Eye className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted solar energy partner in Karnataka, powering thousands of homes and businesses with clean, sustainable energy and building a brighter future for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-3xl font-bold text-primary text-center mb-12">Why Choose Sameer Associates?</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-sm">
                <item.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
