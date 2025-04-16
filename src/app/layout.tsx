import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import { ClientThemeProvider } from "./components/ClientThemeProvider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'



const inter = Inter({
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["500","700"],
});

export const metadata: Metadata = {
  title: "B-marketplace",
  description: "MarketPlace for businesses to sell, buy, and trade goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${barlow.className}`} suppressHydrationWarning>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}