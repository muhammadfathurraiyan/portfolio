import type { Metadata } from "next";
import Header from "./_components/Header";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "Raiyan",
  description: "Muhammad Fathur Raiyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
