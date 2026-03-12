"use client";

import { motion } from "framer-motion";
// import { Users2, Landmark, Globe2, ShieldCheck } from "lucide-react";

const stats = [
  {
    label: "ACTIVE USERS",
    value: "1.2M+",

    description: "Across our core banking and LMS platforms."
  },
  {
    label: "ORGANIZATIONS",
    value: "450+",

    description: "Powering top-tier banks and corporate entities."
  },
  {
    label: "SYSTEM UPTIME",
    value: "99.98%",

    description: "Guaranteed reliability for critical infrastructure."
  },
  {
    label: "GLOBAL REACH",
    value: "12",

    description: "Operational nodes across Africa and beyond."
  }
];

export function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 grayscale opacity-50 -z-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col gap-4">

                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground italic">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">
                    {stat.label}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
