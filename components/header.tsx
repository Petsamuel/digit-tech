"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { allServices } from "@/lib/services-data";


import { useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  });

  // Handle initial state on load/refresh
  useEffect(() => {
    if (window.scrollY > 20) setScrolled(true);
  }, []);



  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/40 backdrop-blur-xl bg-background/80 py-3 shadow-sm"
          : "bg-background/5 backdrop-blur-[2px] py-5 border-b border-white/5 md:bg-transparent md:backdrop-blur-0"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group pr-7">
            <img
              src="/favicon.png"
              alt="Digitvant Logo"
              className="w-7 h-7 object-contain transition-transform group-hover:scale-110 dark:invert"
            />
            <span className="text-xl font-bold tracking-tighter text-foreground relative drop-shadow-sm -ml-2">
              Digitvant
              <span className="text-[10px] text-foreground absolute left-8 -bottom-2 font-black uppercase tracking-widest whitespace-nowrap">
                Technology
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-all outline-none cursor-pointer bg-transparent border-none p-0 drop-shadow-sm">
                Products
                <ChevronDown className="w-3 h-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-md border-border/50 shadow-2xl" align="start">
                {allServices.map((service) => (
                  <DropdownMenuItem key={service.slug} className="cursor-pointer focus:bg-primary/10 py-2.5">
                    <Link href={`/products/${service.slug}`} className="w-full font-medium">
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {["About us", "Solutions", "Partners", "Resources", "Contact"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Solutions"
                    ? "/products"
                    : item === "About us"
                      ? "/about"
                      : `/${item.toLowerCase()}`
                }
                className="text-sm font-bold text-foreground hover:text-primary transition-all drop-shadow-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/try" className="text-sm font-bold transition-colors text-muted-foreground hover:text-foreground hidden lg:block drop-shadow-sm">
            Try for Free
          </Link>
          <ModeToggle />
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
