"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, Landmark, Wallet, Handshake, Users, FileText, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { allServices } from "@/lib/services-data";

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

function ProductCard({ service, index }: { service: typeof allServices[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const Icon = iconMap[service.iconId as keyof typeof iconMap] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/products/${service.slug}`)}
      className="relative h-[700px] w-full flex flex-col overflow-hidden cursor-pointer group border-r border-b border-border/10 bg-background"
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
      <div className="relative z-20 flex flex-col h-full p-8 md:p-12 justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
              <Icon className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/80">
              {service.category}
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black leading-[0.9] tracking-tighter text-foreground uppercase">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
        </div>

        <div className="mt-auto">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  {service.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground group/btn">
            <span>Access Infrastructure</span>
            <ChevronRight className={`w-5 h-5 text-primary transition-transform duration-500 ${isHovered ? 'translate-x-3' : ''}`} />
          </div>
        </div>
      </div>

      {/* Brand Indicator Bar */}
      <motion.div
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 h-2 w-full bg-primary origin-left transition-transform duration-500 z-30"
      />
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Intro Section */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h4 className="text-primary font-bold tracking-[0.4em] text-xs uppercase">Enterprise Ecosystem</h4>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
            Modular <br />
            <span className="text-primary italic">Intelligence</span>
          </h1>
          <p className="text-xl text-foreground font-medium max-w-2xl leading-relaxed">
            Scalable, secure, and integrated technological pillars designed for the modern global enterprise infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Hero Products Layered Grid */}
      <div className="border-y border-border/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allServices.map((product, index) => (
            <ProductCard key={product.id} service={product} index={index} />
          ))}
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 rounded-[48px] bg-primary relative overflow-hidden text-white"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Custom <br /> <span className="italic opacity-80">Architecture?</span>
              </h2>
              <p className="text-white text-xl max-w-md font-medium">
                Our solutions architects can design a custom technological stack tailored specifically to your organizational nodes.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button size="lg" className="rounded-full px-12 bg-white text-primary hover:bg-white/95 h-20 text-xl font-bold group">
                Request a Technical Audit
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
        </motion.div>
      </div>
    </div>
  );
}
