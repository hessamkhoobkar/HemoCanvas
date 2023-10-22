import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HemoCanvas",
  description:
    'The "HemoCanvas" is a deeply personal and informative Git repository dedicated to tracking and displaying the medical journey of my father who is diagnosed with Myelodysplastic Syndromes (MDS) and later on with Lymphoma cancer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
