"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Cpu, 
  Infinity as InfinityIcon, 
  Layers, 
  ShieldCheck, 
  Zap,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const brands = [
  { name: "hues", icon: Zap },
  { name: "Volume", icon: Layers },
  { name: "Cactus", icon: Cloud },
  { name: "Sitemark", icon: Target },
  { name: "SnapShot", icon: InfinityIcon },
  { name: "Vertigo", icon: Cpu },
  { name: "hues", icon: Zap },
  { name: "Volume", icon: Layers },
  { name: "Cactus", icon: Cloud },
  { name: "Sitemark", icon: Target },
  { name: "SnapShot", icon: InfinityIcon },
  { name: "Vertigo", icon: Cpu },
];

export function BrandMarquee() {
  return (
    <section className="py-12 px-6 border-y border-white/5 bg-background/50 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground mr-8 shrink-0">
          <ChevronLeft className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap group/brand">
                <brand.icon className="w-5 h-5 text-foreground group-hover/brand:text-primary transition-colors" />
                <span className="text-lg font-bold tracking-tight text-foreground lowercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground ml-8 shrink-0">
          <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
