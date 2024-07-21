import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmirCodes",
  description: "Discover specialized expertise in crafting impactful landing pages tailored for advertising purposes and many more. We offer a range of solutions designed to enhance your online presence and drive engagement effectively.",
  keywords: ["software", "LandingPage", "Landing page", "World Map","coding","website", "amircodes"],
  openGraph: {
    images: './logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
