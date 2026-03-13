"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Send, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const offices = [
  {
    city: "Lagos",
    type: "Global Headquarters",
    address: "24 Victoria Island Annex, Lagos, Nigeria",
    phone: "+234 800 DIGIT VANT",
    email: "lagos@digitvant.com"
  },
  {
    city: "Abuja",
    type: "Technical Operations",
    address: "Pinnacle Towers, Garki 2, Abuja, Nigeria",
    phone: "+234 810 DIGIT OPS",
    email: "abuja@digitvant.com"
  },
  {
    city: "London",
    type: "European Hub",
    address: "1 Canada Square, Canary Wharf, London, UK",
    phone: "+44 200 456 7890",
    email: "london@digitvant.com"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Contact Form Container (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 md:p-16 rounded-[48px] bg-background/50 backdrop-blur-md border border-border/10 shadow-2xl relative group overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold tracking-tight">Technical Deep-Dive</h2>
                 <p className="text-muted-foreground font-medium italic">Schedule a custom infrastructure assessment.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest opacity-50 ml-2">Full Architecture Name</label>
                    <input 
                      type="text" 
                      className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest opacity-50 ml-2">Corporate Endpoint</label>
                    <input 
                      type="email" 
                      className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
                      placeholder="jane@enterprise.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest opacity-50 ml-2">Audit Objective</label>
                   <select 
                      className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 text-foreground focus:outline-none focus:border-primary transition-colors text-lg appearance-none"
                   >
                     <option className="bg-background">Baseline Audit Request</option>
                     <option className="bg-background">Product Technical Demo</option>
                     <option className="bg-background">Ecosystem Partnership Enquiry</option>
                     <option className="bg-background">Other Technical Enquiry</option>
                   </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-50 ml-2">Technical Specification / Message</label>
                  <textarea 
                    className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 p-6 text-foreground focus:outline-none focus:border-primary transition-colors text-lg resize-none"
                    placeholder="Describe your current technological nodes..."
                  />
                </div>

                <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group brand-glow">
                  Initialize Transmission <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
            {/* Animated Glow in Corner */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
          </motion.div>

          {/* Contact Details & Offices */}
          <div className="space-y-12 flex flex-col justify-center">
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
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="p-8 rounded-[32px] bg-background border border-border/10 hover:border-primary/50 transition-all duration-500 group"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <MapPin className="w-5 h-5 text-primary" />
                           <h3 className="text-2xl font-black tracking-tight">{office.city}</h3>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary/80">{office.type}</p>
                        <p className="text-muted-foreground text-sm max-w-[200px] leading-relaxed font-semibold italic">{office.address}</p>
                      </div>
                      <div className="text-right space-y-2">
                         <p className="text-sm font-bold text-foreground/80">{office.phone}</p>
                         <p className="text-xs text-primary font-black uppercase tracking-widest group-hover:underline cursor-pointer">Find on Map</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
