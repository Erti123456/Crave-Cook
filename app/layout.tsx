import Header from "@/features/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
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
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
