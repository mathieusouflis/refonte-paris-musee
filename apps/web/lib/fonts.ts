import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export type FontName = "sans" | "mono";

export const fontsMap = {
  sans: geistSans,
  mono: geistMono,
} as const;

export function getFontsVariables(): string {
  return Object.values(fontsMap)
    .map((font) => font.variable)
    .join(" ");
}

export function getFontClass(fontName: FontName): string {
  return fontsMap[fontName].className;
}

export function getAllFonts() {
  return fontsMap;
}
