import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taningco Portfolio",
  description: "A newspaper-inspired portfolio for thoughtful digital design and development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
