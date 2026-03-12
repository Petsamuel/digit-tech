"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, Landmark, Wallet, Handshake, Users, FileText, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-background pt-32 pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">Product Ecosystem</h4>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9] mb-8">
              Modular <br /> 
              <span className="text-primary italic">Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our suite of enterprise-grade technological pillars. Each product is engineered to integrate seamlessly into your existing infrastructure while providing future-proof scalability.
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((product, index) => {
            const Icon = iconMap[product.iconId as keyof typeof iconMap] || Sparkles;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-[400px] rounded-[32px] overflow-hidden border border-border/10 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
                    {/* Image Background with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs line-clamp-2 italic">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
                        <span>View Infrastructure</span>
                        <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[32px] transition-all duration-500 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Contact/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[48px] bg-primary relative overflow-hidden text-white"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Custom <br /> <span className="italic opacity-80">Architecture?</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md">
                Our solutions architects can design a custom technological stack tailored specifically to your organizational nodes.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button size="lg" className="rounded-full px-10 bg-white text-primary hover:bg-white/90 h-16 text-lg font-bold group">
                Request a Baseline Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-2xl translate-y-1/2 -translate-x-1/2 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
