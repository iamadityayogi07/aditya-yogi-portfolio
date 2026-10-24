import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Aditya Yogi | Senior Software Developer",
  description:
    "Aditya Yogi — Senior Software Developer specializing in PHP, Laravel, MySQL, REST APIs, Redis and scalable backend systems.",
  authors: [{ name: "Aditya Yogi" }],
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
