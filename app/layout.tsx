import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Bendel Insurance FC | The Benin Arsenal",
    template: "%s | Bendel Insurance FC",
  },
  description:
    "Official home of Bendel Insurance FC, the Benin Arsenal. News, fixtures, results, Insurance TV, tickets and club store.",
  openGraph: {
    title: "Bendel Insurance FC",
    description:
      "News, fixtures, results and video from Bendel Insurance FC, Benin City.",
    type: "website",
  },
};

/**
 * Root layout owns only the document shell: fonts, global styles and the
 * default metadata. The public club chrome lives in `(site)/layout.tsx` and
 * the dashboard shell in `admin/layout.tsx`, so `/admin` does not inherit a
 * header and footer meant for supporters.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
