import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = "https://aditya-yogi-portfolio.vercel.app";
const title = "Aditya Yogi | Senior Software Developer";
const description =
  "Aditya Yogi — Senior Software Developer specializing in PHP, Laravel, MySQL, REST APIs, Redis and scalable backend systems, plus Android apps with Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Aditya Yogi" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aditya Yogi",
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Runs before hydration so the saved theme applies without a flash. Light is the default.
const themeScript = `try{if(localStorage.getItem("portfolio-theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  );
}
