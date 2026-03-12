"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Zap, Globe, Cpu, Landmark, Wallet, Handshake, Users, FileText, GraduationCap, Sparkles, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

interface ServiceLayoutProps {
  service: {
    category: string;
    title: string;
    description: string;
    image: string;
    iconId: string;
  };
}

export function ServiceLayout({ service }: ServiceLayoutProps) {
  const Icon = iconMap[service.iconId as keyof typeof iconMap] || Cpu;

  const features = [
    { title: "Enterprise Scalability", desc: "Built to handle massive workloads with elastic scaling capabilities.", icon: Cpu },
    { title: "Military-Grade Security", desc: "Multi-layer encryption and SOC2 compliant data protection.", icon: Shield },
    { title: "Global Compliance", desc: "Localized for regulatory standards across multiple jurisdictions.", icon: Globe },
    { title: "Instant Deployment", desc: "CI/CD optimized architecture for rapid feature rollout.", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Back Button */}
      <Link 
        href="/#services"
        className="fixed top-24 left-8 z-110 p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all shadow-lg backdrop-blur-md border border-primary/20"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      {/* Left Side: Visuals & Branding */}
      <div className="relative w-full lg:w-[45%] h-[400px] lg:h-screen lg:sticky lg:top-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-background/60 to-background z-10" />
        
        <div className="absolute bottom-12 left-12 right-12 z-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md"
          >
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">{service.category}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]"
          >
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "text-white italic" : ""}>{word} </span>
            ))}
          </motion.h1>
        </div>
      </div>


      {/* Right Side Content Area */}
      <div className="flex-1 p-8 md:p-16 lg:p-24 bg-background">
        <div className="max-w-2xl space-y-20 mx-auto lg:mx-0">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Overview</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              {service.description} Our infrastructure is engineered to provide seamless integration and unparalleled performance for the modern digital economy.
            </p>
          </motion.section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-8">Key Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i * 0.15) }}
                  className="space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-primary/20">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[32px] bg-primary group relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Ready to transform?</h3>
                <p className="text-white/80 max-w-sm">Schedule a technical deep-dive with our solutions architects to build your unique roadmap.</p>
              </div>
              <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90 h-14 group">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
