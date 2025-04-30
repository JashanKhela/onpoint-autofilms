// app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "On Point Auto Films | Kelowna Vehicle Wraps & Tint",
  description:
    "On Point Auto Films is Kelowna’s top destination for vinyl wraps, paint protection film (PPF), ceramic coating, and window tinting. Passion. Precision. Perfection.",
  keywords: [
    "Kelowna auto wraps",
    "PPF Kelowna",
    "Ceramic coating Kelowna",
    "window tinting Kelowna",
    "paint protection film Kelowna",
    "vehicle wraps Okanagan",
    "On Point Auto Films",
  ],
  openGraph: {
    title: "On Point Auto Films | Premium Wraps & Tint in Kelowna",
    description:
      "Discover the best in vehicle customization. On Point Auto Films specializes in vinyl wraps, PPF, ceramic coatings & window tinting in Kelowna, BC.",
    url: "https://onpointautofilms.ca",
    siteName: "On Point Auto Films",
    images: [
      {
        url: "https://onpointautofilms.ca/OnPointAutoFilmsLogo.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "On Point Auto Films Kelowna",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On Point Auto Films | Premium Wraps & Tint in Kelowna",
    description:
      "Specializing in vinyl wraps, ceramic coating, PPF, and tints — trusted by Kelowna car enthusiasts.",
    images: ["https://onpointautofilms.ca/OnPointAutoFilmsLogo"], // Same as above
  
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-black text-white`}>
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
