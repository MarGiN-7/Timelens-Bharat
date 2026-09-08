import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TimeLens Bharat | Spatial Heritage Exploration Platform",
  description:
    "AI-powered historical spatial discovery platform reimagining Indian heritage monuments across time. Travel through centuries and explore the Red Fort in 1650 CE, 1857 CE, and the present day.",
  keywords: [
    "TimeLens Bharat",
    "Smart India Hackathon",
    "Red Fort",
    "Lal Qila",
    "Spatial Computing",
    "Historical Discovery",
    "Indian Heritage",
    "Mughal Architecture",
    "AR Heritage Exploration",
  ],
  authors: [{ name: "TimeLens Bharat Team" }],
  openGraph: {
    title: "TimeLens Bharat | Spatial Heritage Exploration Platform",
    description: "Travel through time. Stand inside history. Explore Indian heritage monuments across eras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-paper selection:bg-gold selection:text-obsidian font-sans">
        {children}
      </body>
    </html>
  );
}
