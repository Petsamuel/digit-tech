"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, } from "lucide-react";
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
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "About us", href: "/about" },
    { name: "Solutions", href: "/products" },
    { name: "Partners", href: "/partners" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-100 transition-all duration-500",
        mobileMenuOpen
          ? "bg-background py-5 border-b border-border/10"
          : scrolled
            ? "border-b border-border/40 backdrop-blur-xl bg-background/80 py-3 shadow-sm"
            : "bg-background/5 backdrop-blur-[2px] py-5 border-b border-white/5 md:bg-transparent md:backdrop-blur-0"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
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

          {!mobileMenuOpen && (
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

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-foreground hover:text-primary transition-all drop-shadow-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {!mobileMenuOpen && (
            <>
              <Link href="/try" className="text-sm font-bold transition-colors text-muted-foreground hover:text-foreground hidden lg:block drop-shadow-sm">
                Try for Free
              </Link>
              <div className="hidden sm:block">
                <ModeToggle />
              </div>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 hidden sm:flex">
                Get Started
              </Button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-foreground bg-secondary/80 rounded-xl backdrop-blur-md border border-border/20 shadow-lg relative z-110"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed inset-0 z-110 md:hidden bg-background flex flex-col pt-24"
          >
            {/* Mobile Header Logo */}
            <div className="absolute top-5 left-6">
              <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
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
            </div>

            {/* Close button duplication for reliability inside the high-z-index overlay */}
            <div className="absolute top-5 right-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground bg-secondary rounded-xl border border-border/20 shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex-1 overflow-y-auto px-8 py-8 space-y-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                  }
                }}
                className="space-y-12"
              >
                {/* Infrastructure Section */}
                <div className="space-y-6">
                  <motion.p
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-primary"
                  >
                    Infrastructure
                  </motion.p>
                  <div className="grid grid-cols-1 gap-6">
                    {allServices.map((service) => (
                      <motion.div
                        key={service.slug}
                        variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
                      >
                        <Link
                          href={`/products/${service.slug}`}
                          className="group flex flex-col"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-2xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">
                            {service.title.split(' (')[0]}
                          </span>
                          <span className="text-[10px] font-bold text-muted-foreground mt-1.5 opacity-60">
                            VIEW MODULE &rarr;
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border/20" />

                {/* Main Links */}
                <div className="grid grid-cols-1 gap-8">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-3xl font-black tracking-tighter uppercase italic text-foreground/40 hover:text-foreground transition-all leading-none"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="p-8 border-t border-border/10 bg-secondary/30 space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-bold">Appearance</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Switch Theme</p>
                </div>
                <ModeToggle />
              </div>
              <Button className="w-full h-18 rounded-[24px] bg-primary text-lg font-black uppercase tracking-tighter italic shadow-2xl shadow-primary/30">
                Get Started Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
