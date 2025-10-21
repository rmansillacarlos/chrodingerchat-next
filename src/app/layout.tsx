import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChrodingerGPT",
  description: "Esta es la metadata de la landing .l.",
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className={`light antialiased h-screen flex flex-col`}>
        <div className="flex flex-raw justify-center h-full lg:p-3s">
          {/* Navbar */}
          <Navbar />
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <div className="w-full h-full p-3 flex flex-col md:p-4.5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
