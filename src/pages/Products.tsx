import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sun, Zap, Battery, Lightbulb, Plug, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import fpcImg from "@/assets/FPC.jpg";
import etcImg from "@/assets/ETC.jpg";
import pressurizedHeaterImg from "@/assets/SOLAR  PRESSURIZED  WATER HEATER.jpg";
import heatPumpImg from "@/assets/SOLAR  HEAT PUMP.jpg";
import onGridImg from "@/assets/SOLAR ON GRID SYSTEM.jpg";
import offGridImg from "@/assets/SOLAR OFF GRID SYSTEM.jpg";
import pumpImg from "@/assets/SOLAR   PUMP.jpg";
import streetLightImg from "@/assets/SOLAR   STREET LIGHTS.jpg";
import upsImg from "@/assets/Solar UPS.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const thermalProducts = [
  {
    title: "Flat Plate Collector (FPC) System",
    desc: "Robust solar water heating system made with metal plates for long-lasting performance.",
    benefits: ["Made up of Metal Plates", "Long Life", "Costs More"],
    img: fpcImg,
    icon: Sun,
  },
  {
    title: "Evacuated Tube Collector (ETC) System",
    desc: "Glass tube design offering excellent heat retention and efficiency.",
    benefits: ["Made up of Glass Tubes", "With less life", "Cheaper", "Best in reducing heat loss"],
    img: etcImg,
    icon: Droplets,
  },
  {
    title: "Solar Pressurized Water Heater",
    desc: "Efficient and consistent water pressure for larger households and multi-storied buildings.",
    benefits: ["Efficiency and Consistent water pressure", "Suitable for larger households", "Multi storied buildings", "For tub bath and rainy shower", "Made up of Metal Plates", "Long Life"],
    img: pressurizedHeaterImg,
    icon: Droplets,
  },
  {
    title: "Solar Heat Pump",
    desc: "Constant hot water supply with energy savings up to 70%. Works in any climate.",
    benefits: ["Constant Hot water supply", "Energy saving up to 70%", "Works in any climate — mainly cloudy and rainy", "Adaptability", "Normal Life"],
    img: heatPumpImg,
    icon: Zap,
  },
];

const powerProducts = [
  {
    title: "Solar On-Grid System",
    desc: "Connected to the public electricity grid. Sends excess solar power back to the grid for additional income.",
    benefits: ["Connected to Public electricity Grid", "Will send excess solar power back to grid", "Lower cost", "More revenue per unit generated", "Electricity bill will be zero plus additional income"],
    img: onGridImg,
    icon: Sun,
  },
  {
    title: "Solar Off-Grid System",
    desc: "Entirely disconnected from the public grid. Self-sufficient and independent power supply using batteries.",
    benefits: ["Entirely disconnected from public Grid", "Use Batteries to store energy", "Self sufficient and independent power supply", "Higher initial cost for batteries", "Less or no revenue", "Electricity bill reduced by 50%"],
    img: offGridImg,
    icon: Battery,
  },
  {
    title: "Solar Pump",
    desc: "Used predominantly in agricultural fields. Open well and submersible options available.",
    benefits: ["Used in agricultural fields predominantly", "Open Well — Solar panels convert sunlight to DC current to run motor", "Submersible solar pumps available", "Cost effective and eco friendly", "Higher initial cost"],
    img: pumpImg,
    icon: Battery,
  },
  {
    title: "Solar Street Lights",
    desc: "Solar panels convert sunlight into power, stored in batteries. Dusk-to-dawn automatic operation.",
    benefits: ["Solar panels convert sunlight into power energy", "Stored in batteries", "Dusk Down system — Automatically switches on in dark", "Sensitive photocell", "Automatic operation in charging batteries"],
    img: streetLightImg,
    icon: Lightbulb,
  },
  {
    title: "Solar UPS",
    desc: "Solar-powered UPS for uninterrupted backup power. Charges through solar panels during the day.",
    benefits: ["Clean backup power", "No fuel needed", "Silent operation", "Long battery life"],
    img: upsImg,
    icon: Plug,
  },
];

const ProductCard = ({ product, index }: { product: (typeof thermalProducts)[0]; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-solar transition-shadow"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 gradient-amber p-2 rounded-full">
        <product.icon className="h-5 w-5 text-accent-foreground" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{product.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
      <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
      <ul className="space-y-1 mb-5">
        {product.benefits.map((b) => (
          <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-solar-green mt-1">✓</span> {b}
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <Button className="w-full gradient-amber text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <Layout>
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>Our Products</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(210 20% 80%)" }}>
              Complete range of solar thermal and solar power products for every application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thermal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <span className="inline-block gradient-amber text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Category A</span>
            <h2 className="text-3xl font-bold text-primary">Solar Thermal Products</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thermalProducts.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Power */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12">
            <span className="inline-block gradient-amber text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Category B</span>
            <h2 className="text-3xl font-bold text-primary">Solar Power Products</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerProducts.map((p, i) => (
              <ProductCard key={p.title} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
