import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mexwaste - Smart Waste Management Solutions",
  description: "Transform your waste management with AI-powered solutions that reduce costs, minimize environmental impact, and create sustainable communities for the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}