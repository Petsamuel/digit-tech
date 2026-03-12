"use client";

import { motion } from "framer-motion";
import { Handshake, ArrowRight, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  { name: "Digitvant", logo: "/digitvant.png" },
  { name: "Finventory", logo: "/finventory.png" },
  { name: "Digitvant Brand", logo: "/logo.png" },
  { name: "Market Monie", logo: "/market-monie.png" },
];

export default function PartnersPage() {
  return (
    <div className="relative min-h-screen bg-background pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
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
            <h4 className="text-primary font-bold tracking-[0.4em] text-xs uppercase italic relative inline-block">Global Network</h4>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
              Ecosystem <br />
              <span className="text-primary italic">Intelligence</span>
            </h1>
            <p className="text-xl text-foreground font-medium max-w-2xl leading-relaxed">
              Scale faster together. We partner with the world's most innovative institutions to build the future of modular financial infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Partners Logo Grid */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative aspect-square md:aspect-video rounded-[32px] bg-background/50 backdrop-blur-sm border border-border/10 flex items-center justify-center p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-all duration-700 opacity-80 saturate-[0.4] group-hover:saturate-100 group-hover:opacity-100 dark:brightness-125 group-hover:dark:brightness-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>



        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 rounded-[48px] bg-primary relative overflow-hidden text-white text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <Handshake className="w-16 h-16 mx-auto opacity-50 mb-4" />
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Let's Build the <br /> <span className="italic opacity-80">Next Pillar</span>
            </h2>
            <p className="text-white/90 text-xl font-medium">
              Join 100+ strategic partners empowering the modern global enterprise.
            </p>
            <Button size="lg" className="rounded-full px-12 bg-white text-primary hover:bg-white/95 h-20 text-xl font-bold group">
              Apply to Partner
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
          <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
