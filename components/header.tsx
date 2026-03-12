"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoveRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  "SaaS Core Banking (One Core)",
  "Payment Gateway",
  "Crm solution",
  "HRMS",
  "EDMS",
  "LMS",
  "TALENT as a Service",
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "border-b border-white/5 backdrop-blur-md bg-background/80 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-xl font-bold tracking-tighter text-foreground">REDSUN</span>
            <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse shadow-[0_0_10px_var(--brand-orange)]" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none cursor-pointer bg-transparent border-none p-0">
                Products
                <ChevronDown className="w-3 h-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-sm border-white/10" align="start">
                {products.map((product) => (
                  <DropdownMenuItem key={product} className="cursor-pointer focus:bg-primary/10">
                    <Link href={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                      {product}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {["Docs", "Partners", "Resources", "Customers", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 gap-2 group orange-glow">
            Sign in
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
