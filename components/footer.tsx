"use client";

import Link from "next/link";
import { MoveRight, Twitter, Linkedin, Globe, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/services-data";
import Image from "next/image";

const social = [
  {
    name: "Twitter",
    url: "https://x.com/digitvant",
    icon: Twitter,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/digitvant/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/digitvantpay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 pt-24 pb-12 border-t border-border/10 bg-background overflow-hidden font-medium">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2.5 group pr-10">
              <Image
                src="/favicon.png"
                alt="Digitvant Logo"
                width={28}
                height={28}
                className="object-contain transition-transform group-hover:scale-110 dark:invert"
              />
              <div className="flex flex-col -ml-1">
                <span className="text-xl font-bold tracking-tighter text-foreground drop-shadow-sm leading-none">
                  Digitvant
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary leading-none mt-0.5">
                  Technology
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Engineering the modular foundations of the global digital economy.
              Scalable, secure, and integrated technological pillars for the
              modern enterprise.
            </p>
            <div className="flex gap-4">
              {social.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-border/10"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Infrastructure
            </h4>
            <ul className="space-y-4">
              {allServices.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/products/${service.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.title.split(" (")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {["Partners", "Resources", "Contact", "Careers", "About"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Status Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Status
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                  System Health
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold">
                    All Nodes Operational
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground italic leading-tight">
                Get real-time infrastructure updates delivered to your endpoint.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Corporate Email"
                  className="w-full h-11 rounded-full bg-secondary border border-border/10 px-5 pr-12 text-xs focus:outline-none focus:border-primary transition-all"
                />
                <button
                  className="absolute right-1 top-1 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform"
                  aria-label="Subscribe"
                >
                  <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
            <p>© 2026 Digitvant Tech. All rights reserved.</p>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Information Security
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/10">
            <Globe className="w-3 h-3 text-primary animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Global Operations Enabled
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
