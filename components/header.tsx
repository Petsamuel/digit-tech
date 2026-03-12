"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoveRight } from "lucide-react";
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/40 backdrop-blur-md bg-background/80 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/favicon.png"
              alt="Digitvant Logo"
              className="w-7 h-7 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold tracking-tighter text-foreground relative">Digitvant<span className="text-xs text-muted-foreground absolute left-8 -bottom-2">
              Technology</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors outline-none cursor-pointer bg-transparent border-none p-0">
                Products
                <ChevronDown className="w-3 h-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-sm border-white/10" align="start">
                {allServices.map((service) => (
                  <DropdownMenuItem key={service.slug} className="cursor-pointer focus:bg-primary/10">
                    <Link href={`/products/${service.slug}`} className="w-full">
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {["Solutions", "Partners", "Resources", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Solutions" ? "/products" : `/${item.toLowerCase()}`}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/try" className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
            Try for Free
          </Link>
          <ModeToggle />
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 gap-2 group brand-glow">
            Get Started
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
