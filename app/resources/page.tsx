"use client";

import { motion } from "framer-motion";
import { FileText, Play, Download, ArrowRight, Sparkles, BookOpen, Newspaper, Laptop, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Case Studies", "Whitepapers", "Technical Docs", "Webinars"];

const resources = [
  {
    title: "The Future of Core Banking in Africa",
    type: "Whitepaper",
    category: "Whitepapers",
    desc: "A deep dive into cloud-native infrastructure for the legacy-to-digital transition.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    icon: FileText
  },
  {
    title: "Scaling Zenith Bank: A Case Study",
    type: "Success Story",
    category: "Case Studies",
    desc: "How modular architecture enabled 24-hour deployment of 12 new core features.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    icon: Sparkles
  },
  {
    title: "One Core API Documentation v2.4",
    type: "Documentation",
    category: "Technical Docs",
    desc: "Complete technical reference for integrating our modular core banking engine.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    icon: Laptop
  },
  {
    title: "Automating Multi-Jurisdiction Payroll",
    type: "On-Demand Webinar",
    category: "Webinars",
    desc: "Expert panel on navigating cross-border compliance through automation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    icon: Play
  },
  {
    title: "The Human Capital Revolution 2026",
    type: "Industry Insights",
    category: "Insights",
    desc: "Annual report on talent trends in the global fintech ecosystem.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
    icon: Newspaper
  },
  {
    title: "Payment Gateway Security Optimization",
    type: "Technical Guide",
    category: "Technical Docs",
    desc: "Advanced best practices for securing global payment orchestration layers.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600",
    icon: BookOpen
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-background pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
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
            <h4 className="text-primary font-bold tracking-[0.4em] text-xs uppercase italic inline-block">Knowledge Base</h4>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
              Intelligence <br /> 
              <span className="text-primary italic">Hub</span>
            </h1>
            <p className="text-xl text-foreground font-medium max-w-2xl leading-relaxed">
              Explore our laboratory of insights, technical references, and success blueprints for the digital economy.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-border/10 pb-8">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
                 activeCategory === cat 
                 ? "bg-primary text-white shadow-[0_0_15px_var(--brand-orange)]" 
                 : "bg-background border border-border/10 text-muted-foreground hover:border-primary hover:text-primary"
               }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {filteredResources.map((res, index) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden border border-border/10 bg-background/50 backdrop-blur-sm cursor-pointer hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/60 to-background/95" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <res.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">
                      {res.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {res.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {res.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
                  <span>Download Resource</span>
                  <Download className="w-4 h-4 text-primary group-hover:translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Newsletter Sub (Premium Look) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[64px] bg-zinc-950 border border-border/40 overflow-hidden mb-32 group"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-white text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Core <br /> <span className="text-primary italic">Intelligence</span>
              </h2>
              <p className="text-white/60 text-lg font-medium italic">
                 Get our biannual technological pillar report delivered directly to your engineering leadership.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input 
                type="email" 
                placeholder="Enter your corporate email" 
                className="w-full h-16 rounded-full bg-white/5 border border-white/10 px-8 text-white focus:outline-none focus:border-primary transition-colors text-lg"
              />
              <Button className="h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold group/btn brand-glow shrink-0">
                Subscribe <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
    </div>
  );
}
