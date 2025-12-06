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
        <Nav />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
