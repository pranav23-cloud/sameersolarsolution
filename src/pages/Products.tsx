import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sun, Zap, Battery, Lightbulb, Plug, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import waterHeaterImg from "@/assets/Solar Water Heatrer 2000LTRS.jpg";
import rooftopImg from "@/assets/Solar 5KW Off Grid System.jpg";
import streetLightImg from "@/assets/Solar Street Light.jpg";
import pumpImg from "@/assets/Solar Water Pump.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const thermalProducts = [
  {
    title: "Solar Water Heaters",
    desc: "Energy-efficient solar water heating systems for residential, commercial and institutional use. Available in ETC and FPC variants.",
    benefits: ["Reduce electricity bills by up to 70%", "Low maintenance"],
    img: waterHeaterImg,
    icon: Droplets,
  },
  {
    title: "Solar ETC Systems",
    desc: "Evacuated Tube Collector systems offering high efficiency even in cloudy conditions. Ideal for large-scale water heating.",
    benefits: ["Works in low sunlight", "High thermal efficiency", "Durable glass tubes", "Suitable for cold regions"],
    img: waterHeaterImg,
    icon: Sun,
  },
  {
    title: "Solar FPC Systems",
    desc: "Flat Plate Collector systems designed for consistent hot water supply. Robust construction with copper absorber plates.",
    benefits: ["Long lifespan", "Consistent performance", "Easy maintenance", "Aesthetically pleasing"],
    img: waterHeaterImg,
    icon: Sun,
  },
  {
    title: "Solar Heat Pumps",
    desc: "Energy-efficient heat pump systems that work in conjunction with solar for year-round hot water regardless of weather.",
    benefits: ["All-weather operation", "Energy savings up to 75%", "Compact design", "Smart controls"],
    img: waterHeaterImg,
    icon: Zap,
  },
];

const powerProducts = [
  {
    title: "Solar Rooftop Systems",
    desc: "Grid-connected and off-grid rooftop solar panel systems for homes and commercial buildings. Generate your own electricity.",
    benefits: ["Reduce electricity bills", "Net metering available", "25-year panel life", "Govt. subsidy eligible"],
    img: rooftopImg,
    icon: Sun,
  },
  {
    title: "Solar Street Lights",
    desc: "All-in-one solar LED street lights for roads, campuses, parks, and villages. Fully automatic with dusk-to-dawn operation.",
    benefits: ["No wiring needed", "Automatic operation", "Low maintenance", "Long battery life"],
    img: streetLightImg,
    icon: Lightbulb,
  },
  {
    title: "Solar Pumps",
    desc: "Solar-powered water pumps for agriculture, irrigation and drinking water supply. AC and DC pump options available.",
    benefits: ["Zero electricity cost", "Govt. subsidy available", "Reliable in rural areas", "Easy installation"],
    img: pumpImg,
    icon: Battery,
  },
  {
    title: "Solar UPS",
    desc: "Solar-powered UPS systems for uninterrupted backup power. Charges through solar panels during the day for nighttime use.",
    benefits: ["Clean backup power", "No fuel needed", "Silent operation", "Long battery life"],
    img: rooftopImg,
    icon: Plug,
  },
];

const ProductCard = ({ product, index }: { product: typeof thermalProducts[0]; index: number }) => (
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
            {thermalProducts.map((p, i) => <ProductCard key={p.title} product={p} index={i} />)}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerProducts.map((p, i) => <ProductCard key={p.title} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
