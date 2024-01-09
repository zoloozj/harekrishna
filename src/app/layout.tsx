import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Хүмүүн соёл",
  description: "Харе Кришна хөдөлгөөн",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", roboto.variable)}
      >
        <main className="relative flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
