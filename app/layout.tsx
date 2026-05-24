import type { Metadata } from "next";
import "./globals.css";
import PageShell from "@/components/layout/PageShell";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Saivirinchi — Developer & Creative Builder",
  description: "Vibecoder, video editor and creative builder from Hyderabad.",
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