"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Subtle diagonal streaks */}
        <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,138,0,0.03)_0%,transparent_100%)] " />
        <div className="absolute top-0 left-0 w-full h-screen bg-linear-to-b from-transparent to-background/90" />

        {/* Bottom Orbital Glow */}
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[140%] aspect-square rounded-full border-8 border-primary/20 bg-background flex items-start justify-center overflow-hidden  blur">
          <div className="w-full h-2 bg-linear-to-r from-transparent via-primary/50 to-transparent blur-md -mt-px" />
          <div className="absolute top-0 w-full h-[150px] bg-linear-to-b from-primary/10 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* <div className="inline-flex items-center p-1 pr-3 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur-sm group cursor-pointer hover:border-primary/30 transition-colors">
            <Badge className="rounded-full px-2 py-0.5 mr-2 bg-primary text-white hover:bg-primary border-none text-[10px] font-bold uppercase tracking-wider">
              What's New
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
              Ease Update v0.1
              <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </span>
          </div> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl font-display"
        >
          The Digital Infrastructure  <br />
          <span className="text-foreground">Your Organization Needs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium"
        >
          Engineering the future of modular financial technology. Scalable, <br className="hidden md:block" />
          secure, and integrated pillars for the modern digital economy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row items-center gap-4"
        >
          <Button variant="outline" size="lg" className="rounded-full px-8 bg-secondary/50 border-border hover:bg-secondary transition-all font-bold gap-2">
            Request Demo
            <ChevronRight className="w-4 h-4 opacity-70" />
          </Button>
          <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-bold shadow-xl shadow-primary/20 brand-glow">
            Get Started
            <MoveRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
