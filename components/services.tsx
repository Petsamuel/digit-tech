"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  FileText, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Human Resources Management System",
    description: "Streamline your workforce management with our comprehensive HR solution. From payroll to performance tracking.",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50",
    iconColor: "text-blue-500",
    features: ["Employee Lifecycle", "Payroll & Benefits", "Performance Analytics"]
  },
  {
    title: "Electronic Document Management System",
    description: "Secure, scalable, and ultra-fast document handling for modern enterprises. Go paperless with enterprise-grade security.",
    icon: FileText,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50",
    iconColor: "text-purple-500",
    features: ["Smart Indexing", "Digital Signatures", "Version Control"]
  },
  {
    title: "Learning Management System",
    description: "Empower your team with a dynamic learning environment. Deliver, track, and manage training programs with ease.",
    icon: GraduationCap,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/50",
    iconColor: "text-orange-500",
    features: ["Interactive Courses", "Progress Tracking", "Certification Engine"]
  }
];

export function Services() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide cutting-edge technological solutions designed to accelerate 
              your digital transformation and optimize business operations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-3xl border border-border/50 bg-muted/5 backdrop-blur-sm transition-all duration-500 ${service.borderColor} hover:shadow-2xl hover:shadow-primary/5`}>
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/5`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                      <ShieldCheck className="w-4 h-4 text-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent hover:text-primary group/btn flex items-center gap-2 font-semibold"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Decorative Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-linear-to-br ${service.color} pointer-events-none -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl border border-border/50 bg-muted/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-linear-to-br from-primary/50 to-primary/80" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-foreground">Trusted by 500+ Companies</p>
              <p className="text-xs text-muted-foreground">Join the digital revolution today</p>
            </div>
          </div>
          
          <div className="flex gap-4">
             <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">99.9%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Uptime SLA</p>
             </div>
             <div className="w-px h-10 bg-white/10 mx-4 hidden md:block" />
             <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Expert Support</p>
             </div>
          </div>

          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 brand-glow font-bold">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
