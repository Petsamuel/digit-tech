"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Send, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const offices = [
  {
    city: "Lagos",
    type: "Global Headquarters",
    address: "2nd Floor, Addas Mall, 8/10 Hakeem Balogun Street, Alausa-Ikeja Lagos.",
    phone: "+234 800 DIGIT VANT",
    email: "Info@digitvanttechnology.com"
  },
  {
    city: "Abuja",
    type: "Technical Operations",
    address: "Pinnacle Towers, Garki 2, Abuja, Nigeria",
    phone: "+234 810 DIGIT OPS",
    email: "Info@digitvanttechnology.com"
  },
  {
    city: "London",
    type: "European Hub",
    address: "1 Canada Square, Canary Wharf, London, UK",
    phone: "+44 200 456 7890",
    email: "Info@digitvanttechnology.com"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Baseline Audit Request",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="relative min-h-screen bg-background pb-32">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-primary font-bold tracking-[0.4em] text-xs uppercase italic inline-block">Direct Channel</h4>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
              Core <br />
              <span className="text-primary italic">Connection</span>
            </h1>
            <p className="text-xl text-foreground font-medium max-w-2xl leading-relaxed">
              Accelerate your digital evolution. Our solution architects are ready to audit your current technological nodes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-20 items-stretch">
          {/* Contact Details & Offices */}
          <div className="space-y-16 flex flex-col">
            {/* Direct Contact Icons Overlay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="p-8 rounded-[32px] bg-background border border-border/10 space-y-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg">General Enquiries</h4>
                <p className="text-muted-foreground text-sm font-medium">Info@digitvanttechnology.com</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="p-8 rounded-[32px] bg-background border border-border/10 space-y-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg">Instant Support</h4>
                <p className="text-muted-foreground text-sm font-medium">Chat via Technical Console</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary ml-2">Global Nodes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices.map((office, idx) => (
                   <motion.div
                   key={office.city}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.15 }}
                   className="p-8 rounded-[32px] bg-background border border-border/10 hover:border-primary/50 transition-all duration-500 group relative min-h-[180px]"
                 >
                   <div className="flex flex-col h-full justify-between gap-6">
                     <div className="space-y-3">
                       <div className="flex items-center gap-3">
                         <div className="p-2 rounded-lg bg-primary/10">
                           <MapPin className="w-4 h-4 text-primary" />
                         </div>
                         <h3 className="text-2xl font-black tracking-tight">{office.city}</h3>
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-primary/80">{office.type}</p>
                       <p className="text-muted-foreground text-sm leading-relaxed font-semibold italic">{office.address}</p>
                     </div>
                     
                     <div className="flex items-end justify-between border-t border-border/5 pt-6 mt-auto">
                        <p className="text-[11px] font-black tracking-tight text-foreground/60 uppercase">{office.phone}</p>
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.address} ${office.city}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-primary font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5"
                        >
                          Find on Map <ChevronRight className="w-3 h-3" />
                        </a>
                     </div>
                   </div>
                 </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Container (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 rounded-[48px] bg-card/40 backdrop-blur-xl border border-border/50 shadow-2xl relative group overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Technical Deep-Dive</h2>
                <p className="text-muted-foreground font-medium italic">Schedule a custom infrastructure assessment.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Full Architecture Name</label>
                    <input
                      type="text"
                      className="w-full h-14 rounded-2xl bg-muted/30 border border-border/50 px-6 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-all text-lg"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Corporate Email</label>
                    <input
                      type="email"
                      className="w-full h-14 rounded-2xl bg-muted/30 border border-border/50 px-6 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-all text-lg"
                      placeholder="jan@enterprise.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Audit Objective</label>
                  <select
                    className="w-full h-14 rounded-2xl bg-muted/30 border border-border/50 px-6 text-foreground focus:outline-none focus:border-primary transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option className="bg-background">Baseline Audit Request</option>
                    <option className="bg-background">Product Technical Demo</option>
                    <option className="bg-background">Ecosystem Partnership Enquiry</option>
                    <option className="bg-background">Other Technical Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Technical Specification / Message</label>
                  <textarea
                    className="w-full h-40 rounded-2xl bg-muted/30 border border-border/50 p-6 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-all text-lg resize-none"
                    placeholder="Describe your current technological nodes..."
                  />
                </div>

                <Button className="h-14 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group brand-glow transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Initialize Transmission
                </Button>
              </form>
            </div>
            {/* Animated Glow in Corner */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
          </motion.div>
        </div>

        {/* Global Connectivity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[64px] bg-primary relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md mb-4">
                <Globe className="w-4 h-4 animate-spin-slow" />
                <span className="text-xs font-black uppercase tracking-widest italic">Global Operations Enabled</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Ready to <br /> <span className="opacity-80 italic">Globalize?</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-black">24/7</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">System Monitoring</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div className="text-center">
                <p className="text-4xl font-black">&lt;2h</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">Response Latency</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div className="text-center">
                <p className="text-4xl font-black">100%</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">Technical Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
