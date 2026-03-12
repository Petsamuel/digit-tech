"use client";

import { motion } from "framer-motion";
import {
  Users,
  LayoutDashboard,
  Package,
  Settings,
  Bell,
  UserPlus,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  GraduationCap,
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="relative py-24 lf:px-6 overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-3xl overflow-hidden shadow-2xl"
        >
          {/* Top Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />

          {/* Dashboard Header/Nav */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--glass-border)] bg-muted/20">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight mr-4">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary brand-glow" />
                <span className="text-foreground">DIGITVANT</span>
              </div>
              <div className="hidden md:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <div className="flex items-center gap-1.5 text-foreground bg-primary/10 px-2.5 py-1.5 rounded-lg border border-primary/20">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Analytics
                </div>
                <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                  <Package className="w-3.5 h-3.5" />
                  Solutions
                </div>
                <div className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                  <Settings className="w-3.5 h-3.5" />
                  Settings
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full border-2 border-background" />
              </div>
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-primary/40 border border-primary/20 shadow-lg flex items-center justify-center p-0.5" />
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Infrastructure Overview</h3>
                <p className="text-sm text-muted-foreground mt-1">Real-time performance of your organizational units.</p>
              </div>
              <button className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-extrabold bg-primary text-primary-foreground brand-glow px-6 py-2.5 rounded-full hover:scale-105 transition-all">
                <Plus className="w-4 h-4" />
                Deployment
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "TOTAL USERS", value: "72,350", change: "+4.3%", up: true },
                { label: "SESSIONS", value: "29.4%", change: "-2.5%", up: false },
                { label: "AVG. CLICK RATE", value: "56.8%", change: "+10.2%", up: true },
                { label: "PAGE VIEWS", value: "92,913", change: "-2.5%", up: false },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors relative overflow-hidden group">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">{stat.value}</p>
                    <div className={`flex items-center text-[10px] font-bold ${stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                  {/* Sparkline simulation */}
                  <div className="mt-4 h-8 flex items-end gap-1">
                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4].map((h, j) => (
                      <div
                        key={j}
                        className={`flex-1 rounded-t-sm transition-all duration-1000 group-hover:bg-primary/40 ${stat.up ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}
                        style={{ height: `${20 + Math.random() * 80}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Product Modules */}
              <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-4">
                <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Operational Modules
                </h4>
                {[
                  {
                    name: "HR Management System",
                    status: "Processing",
                    icon: Users,
                    color: "text-blue-500 bg-blue-500/10",
                    meta: "2.4k Employee Records"
                  },
                  {
                    name: "Electronic Document Management",
                    status: "Online",
                    icon: ShieldCheck,
                    color: "text-rose-500 bg-rose-500/10",
                    meta: "Encrypted & Distributed"
                  },
                  {
                    name: "Learning Management System",
                    status: "Offline",
                    icon: GraduationCap,
                    color: "text-amber-500 bg-amber-500/10",
                    meta: "Course Deployment v2"
                  }
                ].map((module, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-[var(--glass-border)] bg-muted/5 hover:bg-muted/10 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${module.color} flex items-center justify-center p-1 group-hover:scale-110 transition-transform`}>
                        <module.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{module.name}</p>
                        <p className="text-[10px] text-muted-foreground">{module.meta}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex flex-col items-end">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase">{module.status}</span>
                        <div className="w-12 h-1 bg-muted/20 rounded-full mt-1 overflow-hidden">
                          <div className="w-3/4 h-full bg-primary" />
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted/10 hover:bg-primary/20 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Training/System Status */}
              <div className="md:col-span-12 lg:col-span-5 p-6 rounded-2xl border border-[var(--glass-border)] bg-muted/5">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-sm text-foreground">Infrastructure Load</h4>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-extrabold text-muted-foreground uppercase">Stable</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { l: 'Network Latency', v: '14ms', p: '90%' },
                    { l: 'Storage I/O', v: '345 MB/s', p: '65%' },
                    { l: 'API Requests', v: '4.2k/s', p: '45%' },
                    { l: 'Cloud Sync', v: 'Syncing', p: '95%' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] mb-2">
                        <span className="font-bold text-muted-foreground tracking-tight">{item.l}</span>
                        <span className="text-foreground font-extrabold">{item.v}</span>
                      </div>
                      <div className="h-2 w-full bg-muted/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.p }}
                          className="h-full bg-linear-to-r from-primary/50 to-primary rounded-full transition-all duration-1000"
                        />
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background radial glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-radial-[at_50%_50%] from-primary/10 via-transparent to-transparent pointer-events-none -z-10" /> */}
    </section>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
    </svg>
  );
}
