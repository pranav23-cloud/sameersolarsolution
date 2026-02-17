import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import offgrid10k from "@/assets/Solar 10KW Off Grid.jpg";
import rooftop5k from "@/assets/Solar 5KW Off Grid.jpg";
import waterHeater8k from "@/assets/Solar 8000LTRS Water Heater.jpg";
import pumpImg from "@/assets/Solar Water Pump.jpg";
import waterHeater2k from "@/assets/Solar 2000LTRS.jpg";
import streetLightImg from "@/assets/Solar Street Light.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const installations = [
  {
    title: "10KW Off Grid System",
    location: "Forest Training Academy",
    desc: "Complete off-grid solar power system powering the entire training academy with reliable electricity.",
    img: offgrid10k,
  },
  {
    title: "5KW Off Grid System",
    location: "Anashi Nature Camp",
    desc: "Off-grid solar installation providing sustainable energy to a remote nature camp facility.",
    img: rooftop5k,
  },
  {
    title: "8000 LTR Solar Water Heater",
    location: "Gungargatti",
    desc: "Large-scale solar water heating system serving an institutional facility with 8000 litres daily capacity.",
    img: waterHeater8k,
  },
  {
    title: "Solar Pump Installation",
    location: "DWD",
    desc: "Solar-powered water pump system for agricultural irrigation and water supply purposes.",
    img: pumpImg,
  },
  {
    title: "2000 LTR Solar Water Heater",
    location: "Govt School, Koppal",
    desc: "Government school solar water heater project providing hot water for 2000 litres daily consumption.",
    img: waterHeater2k,
  },
  {
    title: "Solar Street Lights",
    location: "Nippani",
    desc: "Multiple solar street light installations illuminating roads and public areas with clean energy.",
    img: streetLightImg,
  },
];

const Installations = () => {
  return (
    <Layout>
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>Major Installations</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(210 20% 80%)" }}>
              Showcasing our notable projects across Karnataka — trusted by government and commercial clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {installations.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-solar transition-shadow group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-4">
                    <div className="flex items-center gap-1 text-sm font-medium" style={{ color: "hsl(45 100% 96%)" }}>
                      <MapPin className="h-4 w-4" /> {project.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Installations;
