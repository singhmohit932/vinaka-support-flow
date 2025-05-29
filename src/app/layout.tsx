import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactFormProvider } from "@/context/ContactFormContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Vinaka Support Flow",
  description: "Modern support solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ContactFormProvider>
          {children}
        </ContactFormProvider>
      </body>
    </html>
  );
}
