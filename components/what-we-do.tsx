"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Digital Transformation Strategy",
    description: "Tailor-made roadmaps to address your unique infrastructure challenges, ensuring sustainable growth and technological advantage."
  },
  {
    title: "End-to-End Financial Operations",
    description: "Streamline your payment processes and improve efficiency with our unified gateway and core banking expertise."
  },
  {
    title: "Data-Driven Operational Efficiency",
    description: "Optimize your workflow and resource management through our integrated HRMS, EDMS, and CRM solutions."
  },
  {
    title: "Strategic Talent Acquisition",
    description: "Enhance your technical capabilities and build high-performing teams through our specialized TaaS methodology."
  }
];

export function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16"
        >
          <div className="space-y-4">
            <h4 className="text-primary font-bold tracking-widest text-xs uppercase">Strategic Partnership</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              What we <br /> <span className="text-primary italic">Can Do For You?</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            From digital transformation to specialized talent, we provide the expertise needed to scale your technical infrastructure.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] overflow-hidden border border-border/40 bg-zinc-950 text-white shadow-2xl"
        >
          <div className="divide-y divide-white/10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="group p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-white/2 transition-colors relative"
              >
                <div className="flex items-start gap-4 flex-1">
                  <ArrowDownRight className="w-5 h-5 text-primary mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight max-w-sm leading-tight">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Consultation Footer */}
          <div className="bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">Free consultation</h4>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Button 
                variant="outline" 
                className="rounded-full bg-transparent border-primary-foreground/40 hover:bg-primary-foreground hover:text-black text-primary-foreground font-bold px-8 py-6 h-auto tracking-tight transition-all border-2"
              >
                SCHEDULE A FREE CALL
                <ArrowDownRight className="w-5 h-5 ml-2 -rotate-45" />
              </Button>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
