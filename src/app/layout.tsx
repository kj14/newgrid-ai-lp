import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewGrid AI | 企業向けセキュアAIプラットフォーム",
  description: "企業のAI活用を変革。NewGrid AIは情報流出リスクゼロ・主要AI統合・プロンプト共有で全社AI導入を支援します。",
  openGraph: {
    title: "NewGrid AI | 企業向けセキュアAI",
    description: "企業のAI活用を変革します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "NewGrid AI",
                "operatingSystem": "Web",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "20000",
                  "priceCurrency": "JPY"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "株式会社APOLLO 1 1"
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
