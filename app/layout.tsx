import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AST",
  description:
    "Discover specialized expertise in crafting impactful landing pages tailored for advertising purposes and many more. We offer a range of solutions designed to enhance your online presence and drive engagement effectively.",
  keywords: [
    "software",
    "LandingPage",
    "Landing page",
    "World Map",
    "coding",
    "website",
    "AST"
  ],
  openGraph: {
    images: "./logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
