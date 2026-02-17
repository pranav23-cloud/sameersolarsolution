import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry Submitted!", description: "We will contact you shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="gradient-solar py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(45 100% 96%)" }}>Contact Us</h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(210 20% 80%)" }}>
              Get in touch for a free consultation. We're here to help you go solar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <a href="tel:9980834941" className="flex items-start gap-4 group">
                  <div className="gradient-amber h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">Phone</h4>
                    <p className="text-muted-foreground">+91 9980834941</p>
                  </div>
                </a>
                <a href="https://wa.me/919980834941" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="gradient-amber h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">WhatsApp</h4>
                    <p className="text-muted-foreground">Chat with us on WhatsApp</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="gradient-amber h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">sameerassociates@email.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-amber h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-amber h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">Mon – Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map removed per request */}
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="bg-card rounded-xl p-8 border border-border shadow-solar">
                <h2 className="text-2xl font-bold text-primary mb-2">Send Us an Enquiry</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill in the form and our team will get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone *</label>
                    <Input
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your solar needs..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gradient-amber text-accent-foreground font-semibold shadow-amber hover:opacity-90 transition-opacity">
                    <Send className="mr-2 h-5 w-5" /> Submit Enquiry
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
