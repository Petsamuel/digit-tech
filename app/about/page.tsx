"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Target, 
  Cpu, 
  Zap, 
  Cloud, 
  ShieldCheck,
  ArrowRight,
  MonitorSmartphone,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 pt-32 pb-32">
        {/* Header Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase italic">
              <Sparkles className="w-3.5 h-3.5" />
              Digitvant Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              Our <span className="text-primary italic">Mission.</span>
            </h1>
            
            <div className="space-y-8 text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
              <p>
                We are Digitvant Technology, a company on a mission to transform the way people and organizations interact with the digital world.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Vision & Solutions */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                In an era where technology moves fast and the stakes are higher than ever, we build solutions that don't just keep up — <span className="text-foreground font-bold italic underline decoration-primary/30 decoration-4 underline-offset-4 tracking-tight">they lead.</span>
              </p>
              <p>
                From intelligent software applications to AI-powered automation, cloud infrastructure, and end-to-end digital transformation, we bring together the tools, talent, and thinking that modern users and enterprises need to thrive.
              </p>
            </div>

            <div className="p-12 rounded-[48px] bg-secondary/30 border border-border/50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                 <Rocket className="w-12 h-12 text-primary/20 group-hover:rotate-12 transition-transform duration-500" />
               </div>
               <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
                 We build for <br />
                 <span className="text-primary italic text-5xl md:text-6xl">The Bold.</span>
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl italic leading-relaxed">
                 Whether you're an individual looking for smarter digital experiences or an organization ready to reimagine how you operate, Digitvant is engineered to meet you where you are — and take you further than you imagined.
               </p>
            </div>
          </motion.div>
        </section>

        {/* Philosophy & Manifesto */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Our work sits at the intersection of innovation and impact. Every solution we design is built with purpose: to simplify complexity, unlock new possibilities, and drive meaningful results in a world that demands more from technology every day.
              </p>
            </div>

            <div className="p-12 md:p-24 rounded-[64px] bg-primary relative overflow-hidden text-primary-foreground text-center brand-glow">
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
                  This is <br />
                  <span className="italic opacity-80 text-5xl md:text-8xl">Digitvant Technology.</span>
                </h2>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
                <p className="text-2xl md:text-4xl font-black tracking-tight uppercase italic opacity-90">
                  Built different. <br />
                  Built for what's next.
                </p>
              </div>
              <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

// Custom icon placeholder for Software App (Zap but bigger/different)
function zapCircle({ className }: { className?: string }) {
  return <Zap className={className} />;
}
