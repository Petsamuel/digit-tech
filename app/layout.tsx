import type { Metadata } from "next";
import { Manrope, Poppins, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "DIGITVANT-TECHNOLOGY - The Digital Infrastructure Your Organization Needs",
  description: "DIGITVANT-TECHNOLOGY is a leading provider of AI-powered workflow management solutions. We help organizations streamline their operations and improve efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${poppins.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
