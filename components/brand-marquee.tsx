"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const brands = [
  { name: "AWS", logo: "/aws-svgrepo-com.svg" },
  { name: "INTERSWITCH", logo: "/interswitch-icon.png" },
  { name: "CREDLANCHE", logo: '/credlanche-logo.png' },
  { name: "DIGITVANT MFB", logo: "/digitvant-logo.png" },
  { name: "FINVENTORY", logo: "/finventory-logo.png" },
  { name: "MARKET MONEY", logo: "/market-monie.png" },
  { name: "WEMA BANK", logo: "/R.png" },
  { name: "AWS", logo: "/aws-svgrepo-com.svg" },
  { name: "INTERSWITCH", logo: "/interswitch-icon.png" },
  { name: "CREDLANCHE", logo: '/credlanche-logo.png' },
  { name: "DIGITVANT MFB", logo: "/digitvant-logo.png" },
  { name: "FINVENTORY", logo: "/finventory-logo.png" },
  { name: "MARKET MONEY", logo: "/market-monie.png" },
  { name: "WEMA BANK", logo: "/R.png" },
];

export function BrandMarquee() {
  return (
    <section className="py-12 px-6 border-y border-white/5 bg-background/50 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground mr-8 shrink-0">
          <ChevronLeft className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" />
        </div>

        <div className="flex-1 overflow-hidden relative">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap group/brand">
                {brand.logo ? (
                  <div className="h-10 grayscale group-hover/brand:grayscale-0 transition-all duration-300 flex items-center ">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ) : null}
                <span className={cn(
                  "text-2xl font-bold tracking-tight text-foreground",
                  (brand.name === "AWS" || brand.name === "MARKET MONEY") && "sr-only"
                )}>
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground ml-8 shrink-0">
          <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
