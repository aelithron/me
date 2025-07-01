import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "nova/ael's box!",
    template: "%s | nova/ael's box!",
  },
  description: "the personal website of Nova, aka Aelithron! :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
