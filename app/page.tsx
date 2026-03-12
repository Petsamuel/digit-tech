"use client";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
