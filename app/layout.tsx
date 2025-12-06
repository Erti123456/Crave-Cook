import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
export const metadata: Metadata = {
  title: "Crave & Cook",
  description: "nextJS layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className="w-screen flex flex-row bg-green-200 m-0 padding-0">
          <Image
            src="/logo.png"
            alt="Crave & Cook Logo"
            width={85}
            height={85}
            className="m-0"
          />
          <Nav />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
