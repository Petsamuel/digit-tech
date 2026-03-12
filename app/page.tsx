"use client";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { DashboardPreview } from "@/components/dashboard-preview";
import { BrandMarquee } from "@/components/brand-marquee";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 text-foreground">
      <Header />
      <main>
        <Hero />
        <DashboardPreview />
        <BrandMarquee />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
