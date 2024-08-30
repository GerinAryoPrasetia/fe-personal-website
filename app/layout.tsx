import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "@/app/ui/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerin's Web",
  description: "Gerin's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-2 bg-foreground">
          <NavLinks />
          {children}
          <footer className="text-center font-sm italic font-light mb-4">
            version 0.0.0
          </footer>
        </main>
      </body>
    </html>
  );
}
