import type { Metadata } from "next";
import { Elms_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/contexts/CartContext";
const elmsSans = Elms_Sans({
  subsets: ["latin"],
  display: "swap",
  // weight: ['400', '700'], // Uncomment if it's not a variable font
});
export const metadata: Metadata = {
  title: "AURA | Performance Elite Gear",
  description:
    "Premium equipment for boxing, running, and bodybuilding. Engineered for the disciplined.",
  themeColor: "#0A58FF",
  // Basic Social Media Preview
  openGraph: {
    title: "AURA Performance",
    description: "Gear for the elite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${elmsSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
