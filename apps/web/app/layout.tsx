import type { Metadata } from "next";
import "./globals.css";

import { geistSans, getFontsVariables } from "@/lib/fonts";
import { Main } from "@/components/layout/Main";

export const metadata: Metadata = {
  title: "Paris Musées",
  description: "Made with ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={getFontsVariables()}>
      <body className={geistSans.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
