import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICS — In Concept Service",
  description:
    "ICS (In Concept Service) ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ POS บริการ Colocation Server และระบบเครือข่าย LAN/WiFi ครบวงจร",
  keywords:
    "software development, POS software, colocation, server, network setup, LAN, WiFi, ไอซีเอส, ระบบซอฟต์แวร์",
  openGraph: {
    title: "ICS — In Concept Service",
    description:
      "ผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศครบวงจร ตั้งแต่พัฒนาซอฟต์แวร์ไปจนถึงโครงสร้างพื้นฐานระบบเครือข่าย",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} antialiased bg-[#f0f2f5]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
