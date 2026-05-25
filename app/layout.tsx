import type { Metadata } from "next";
import "./globals.css";
import PageShell from "@/components/layout/PageShell";
import Navbar from "@/components/layout/Navbar";

const BASE_URL = "https://portfolio-saivirinchi.vercel.app";

export const metadata: Metadata = {
  verification: {
  google: "4-QywuDRSafKgQEkW6YL_vqO6muEX022jao_PcJ7mt0",
},
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gudla SaiVirinchi — Vibecoder & Creative Developer",
    template: "%s | Gudla SaiVirinchi",
  },
  description:
    "B.Tech EEE student from Hyderabad building full-stack apps, AI tools, and creative products. Vibecoder, video editor, and indie developer.",
  keywords: [
    "Gudla SaiVirinchi",
    "SaiVirinchi",
    "Vibecoder",
    "Next.js developer Hyderabad",
    "creative developer India",
    "full stack developer",
    "AI tools developer",
    "SvelteKit developer",
    "Supabase developer",
    "portfolio",
  ],
  authors: [{ name: "Gudla SaiVirinchi" }],
  creator: "Gudla SaiVirinchi",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Gudla SaiVirinchi Portfolio",
    title: "Gudla SaiVirinchi — Vibecoder & Creative Developer",
    description:
      "B.Tech EEE student from Hyderabad building full-stack apps, AI tools, and creative products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gudla SaiVirinchi — Vibecoder & Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gudla SaiVirinchi — Vibecoder & Creative Developer",
    description:
      "B.Tech EEE student from Hyderabad building full-stack apps, AI tools, and creative products.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-void text-white antialiased overflow-x-hidden">
        <PageShell>
          <Navbar />
          {children}
        </PageShell>
      </body>
    </html>
  );
}
