import type { Metadata, Viewport } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Adventra",
  description: "Come explore africa",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="max-w-[1920px] flex flex-col mx-auto items-center justify-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
