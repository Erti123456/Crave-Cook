import Header from "@/features/layout/Header";
import Providers from "./providers";
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
        <Providers>
          <Header />
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
