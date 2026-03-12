"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Olumide Adebayo",
    role: "Head of Digital Transformation, Global Bank PLC",
    content: "Digitvant Tech's core banking infrastructure has allowed us to scale our retail operations across three East African markets in record time. Their reliability is simply unmatched.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Amina Yusuf",
    role: "COO, AgriTech Solutions",
    content: "The EDMS solution provided by Digitvant has completely eliminated our paperwork bottlenecks. We've seen a 40% increase in operational speed since implementation.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Kofi Mensah",
    role: "Director of HR, Finserve Group",
    content: "Managing a distributed workforce across West Africa was a nightmare until we integrated Digitvant's HRMS. It's payroll, performance, and recruitment all in one sleek interface.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Zanele Mbeki",
    role: "Tech Lead, Southern Star Logistics",
    content: "As a developer, I appreciate the API-first approach. Integrating their payment gateway into our existing stack was seamless and the documentation is top-tier.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Amara Okafor",
    role: "Founder, EduFuture Africa",
    content: "The LMS platform has transformed how we deliver vocational training. The interactive modules and automated certification have doubled our student completion rates.",
    avatar: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Tunde Bakare",
    role: "Chief Architect, CloudNode Nigeria",
    content: "Their TaaS model is a game-changer. We were able to spin up a full-stack engineering team for our fintech launch in less than two weeks. Quality is guaranteed.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16"
        >
          <div className="space-y-4">
            <h4 className="text-primary font-bold tracking-widest text-xs uppercase">VOICE OF OUR PARTNERS</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              TRUSTED BY <br /> <span className="text-primary italic">THOSE WHO LEAD</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            Don't just take our word for it. Hear from the visionaries transforming the African digital landscape with Digitvant.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid relative p-8 rounded-3xl border border-border/40 bg-muted/5 backdrop-blur-sm group hover:border-primary/40 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-primary opacity-10 group-hover:opacity-30 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-muted">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground leading-none">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
                "{t.content}"
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 -z-10 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
