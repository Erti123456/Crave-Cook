import AppChrome from "@/features/layout/AppChrome";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Providers>
            <AppChrome>{children}</AppChrome>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
