"use client";

import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { DashboardPreview } from "@/components/dashboard-preview";
import { BrandMarquee } from "@/components/brand-marquee";
import { WhatWeDo } from "@/components/what-we-do";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { motion } from "framer-motion";

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-15%" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom quint ease for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 text-foreground">
      <main className="space-y-0">
        <Hero />
        
        <SectionReveal>
          <DashboardPreview />
        </SectionReveal>

        <SectionReveal>
          <BrandMarquee />
        </SectionReveal>

        <SectionReveal>
          <Services />
        </SectionReveal>

        <SectionReveal>
          <Stats />
        </SectionReveal>

        <SectionReveal>
          <Testimonials />
        </SectionReveal>

        <SectionReveal>
          <WhatWeDo />
        </SectionReveal>
      </main>
    </div>
  );
}
