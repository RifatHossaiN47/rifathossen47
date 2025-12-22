// Next.js App Router version - Root layout
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rifat Hossain - Full-Stack Developer & IEEE Published Researcher",
  description:
    "Portfolio of Rifat Hossain, showcasing projects, research publications, and expertise in modern web technologies.",
  keywords: [
    "developer",
    "full-stack",
    "IEEE",
    "researcher",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Rifat Hossain" }],
  openGraph: {
    title: "Rifat Hossain - Full-Stack Developer",
    description:
      "Portfolio showcasing projects, research publications, and expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-white transition-colors duration-300 ease-in-out">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
