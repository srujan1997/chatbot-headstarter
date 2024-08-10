import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatbotProvider } from "./chatbotProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneaker Chat",
  description: "Learn about sneakers with our sneaker chatbot", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChatbotProvider>
        <body className={`${inter.className} overflow-hidden`}>{children}</body>
      </ChatbotProvider>
    </html>
  );
}
