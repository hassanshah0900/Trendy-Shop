import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsletterCTA from "@/components/NewsletterCTA";
import Separator from "@/components/Separator";
import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import { queryClient } from "@/client";

const satoshi = localFont({
  src: "../../public/fonts/satoshi-variable.ttf",
  variable: "--satoshi",
});

const intergralcf = localFont({
  src: [{ path: "../../public/fonts/integralcf-bold.otf", weight: "700" }],
  variable: "--integralcf",
});

export const metadata: Metadata = {
  title: "Trendy Shop",
  description:
    "Trendy Shop is a Product listing application, a project that is a part of Internship at Mentoga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${intergralcf.variable} ${satoshi.variable}`}>
      <body className="overflow-x-hidden text-sm md:text-base font-satoshi text-body bg-background">
        <QueryClientProvider client={queryClient}>
          <FilterContextProvider>
            <Container>
              <Navbar />
              <Separator />
            </Container>
            {children}
            <div className="translate-y-1/3">
              <Container>
                <NewsletterCTA />
              </Container>
            </div>
            <Footer />
          </FilterContextProvider>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
