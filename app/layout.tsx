"use client";
import React from 'react';

import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from "@/context/CartContext"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Animate the document title (marquee effect)
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const baseTitle = '禅茶房 - Zen Café | A Digital Taste of Tranquility';
    let pos = 0;
    let direction = 1;
    let intervalId: NodeJS.Timeout;
    function animateTitle() {
      // Create a moving window of the title
      const len = 40;
      let display = baseTitle.substring(pos, pos + len);
      if (display.length < len) {
        display += '   ' + baseTitle.substring(0, len - display.length);
      }
      document.title = display;
      pos += direction;
      if (pos > baseTitle.length) pos = 0;
    }
    intervalId = setInterval(animateTitle, 200);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}


