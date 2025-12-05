import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { NavLayout, Button } from "../components/NavLayout";
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
        <header className="w-screen flex flex-row bg-green-200 items-center">
          <Image
            src="/logo.png"
            alt="Crave & Cook Logo"
            width={85}
            height={85}
          />
          <nav className="hidden sm:block ml-auto">
            <ul className="flex items-center h-full space-x-13 text-xl mr-7">
              <li>Home</li>
              <li>Recipes</li>
              <li>Favorites</li>
              <li>Sign In</li>
            </ul>
          </nav>
          <Button />
        </header>
        <NavLayout />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
