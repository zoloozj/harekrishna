import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
          <div className="absolute right-0 left-0 bottom-0">
            <Image
              src="/icons/mountains.svg"
              alt="background"
              className="w-auto h-auto"
              width={1000}
              height={1000}
            />
            <Image
              src="/icons/cloud-right-gray.svg"
              alt="background"
              className="w-auto h-[80px] lg:h-[130px] absolute right-8 -top-72"
              width={300}
              height={300}
            />
            <Image
              src="/icons/cloud-left-gray.svg"
              alt="background"
              className="w-auto h-[80px] lg:h-[130px] absolute left-8 -top-36"
              width={300}
              height={300}
            />
          </div>
        </main>
      </body>
    </html>
  );
}
