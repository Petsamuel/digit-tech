"use client";

import { motion } from "framer-motion";
import { allServices } from "@/lib/services-data";
import {
  Landmark,
  Wallet,
  Handshake,
  Users,
  FileText,
  GraduationCap,
  Sparkles,
  Code,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

function ProductCard({ product, index }: { product: typeof allServices[0], index: number }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[product.iconId as keyof typeof iconMap] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/solutions/${product.slug}`)}
      className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer border border-border/40 bg-background hover:border-primary/50 transition-all duration-500"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/60 to-background/95 z-10" />
      </div>

      <div className="relative z-20 h-full p-8 md:p-10 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {product.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter text-foreground group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group/btn">
          <span>Explore Solution</span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      {/* Brand accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </motion.div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl space-y-6">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-widest text-xs uppercase"
          >
            Our Full Ecosystem
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9]"
          >
            Digital <br /> <span className="text-primary italic">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Explore our comprehensive suite of modular technological pillars designed to power the modern global enterprise. Built for scale, security, and seamless integration.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[48px] bg-primary overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Don't see what <br /> you're looking for?
            </h2>
            <p className="text-white/80 text-lg">
              Our engineering team specializes in custom enterprise integrations. Let's discuss your specific technological requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="rounded-full px-10 bg-white text-primary hover:bg-white/90 h-14 group">
                Contact Technical Sales
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  );
}
