import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
