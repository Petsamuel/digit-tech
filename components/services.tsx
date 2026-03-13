"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { allServices } from "@/lib/services-data";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ArrowRight, Landmark, Wallet, Handshake, Users, FileText, GraduationCap, Code } from "lucide-react";

const iconMap = {
  landmark: Landmark,
  wallet: Wallet,
  handshake: Handshake,
  users: Users,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
  code: Code,
};

function ServiceCard({ service, index, onExplore }: { service: typeof allServices[0], index: number, onExplore: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[service.iconId as keyof typeof iconMap] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onExplore}
      className="relative h-[550px] w-full flex flex-col overflow-hidden cursor-pointer group border-r border-border/10 bg-background"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
        {/* Dynamic Theme Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-background/90 via-background/40 to-background/95" />

        {/* Brand Color Tint on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.08 : 0 }}
          className="absolute inset-0 z-15 bg-primary transition-opacity pointer-events-none"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full p-8 md:p-10 justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-primary/10 border border-primary/20`}>
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
              {service.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-foreground">
            {service.title}
          </h3>
        </div>

        <div className="mt-auto">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="overflow-hidden"
              >
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground group/btn">
            <span>Explore</span>
            <ChevronRight className={`w-4 h-4 text-primary transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
          </div>
        </div>
      </div>

      {/* Brand Indicator Bar */}
      <motion.div
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 h-1 w-full bg-primary origin-left transition-transform duration-500 z-30"
      />
    </motion.div>
  );
}

export function Services() {
  const router = useRouter();

  return (
    <section className="py-24 bg-background border-t border-border/10" id="services">

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row lg:items-end justify-between gap-8 items-start"
        >
          <div className="space-y-4 ">
            <h4 className="text-primary font-bold tracking-widest text-xs uppercase">Our Core Architecture</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              Discover <br /> <span className="text-primary italic">The Platform</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            Scalable, secure, and integrated technological pillars designed for the modern global enterprise infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Grid container with overflow control for clean edge-to-edge look */}
      <div className="border-y border-border/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allServices.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} onExplore={() => router.push(`/products/${service.slug}`)} />
          ))}
          {/* Second row wraps on mobile/tablet */}
          {allServices.slice(4).map((service, index) => (
            <ServiceCard key={index + 4} service={service} index={index + 4} onExplore={() => router.push(`/products/${service.slug}`)} />
          ))}
        </div>
      </div>

      {/* Key Feature Integration (Bottom Detail) */}
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 uppercase">
              Engineered for <br />
              <span className="text-primary">Reliability</span>
            </h3>
            <div className="space-y-6">
              {[
                "Cloud-native architecture with 99.99% uptime",
                "End-to-end encryption for all enterprise data clusters",
                "Seamless integration with legacy banking frameworks",
                "AI-powered anomaly detection for fraud prevention"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <p className="text-lg font-medium tracking-tight text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[40px] bg-zinc-950 border border-border/40 overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed italic">
                "Digitvant has revolutionized how we handle our core banking and payroll across our Lagos and Abuja hubs. Their modular approach is unmatched."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Chidi Okechukwu</p>
                  <p className="text-zinc-500 text-xs">CTO, Zenith Financial Systems</p>
                </div>
                {/* <Button variant="outline" className="rounded-full border-primary/40 hover:bg-primary/20 text-white gap-2">
                  Case Study <ArrowRight className="w-4 h-4" />
                </Button> */}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
