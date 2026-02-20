import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Webisse - Dijital Ajans",
  description:
    "Webisse ile markanıza özel, modern ve etkileyici dijital deneyimler.",
  icons: {
    icon: [
      { url: "/img/wicon.png", sizes: "any" },
    ],
    apple: "/img/wicon.png",
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    title: "Webisse - Dijital Ajans",
    description:
      "Webisse ile markanıza özel, modern ve etkileyici dijital deneyimler.",
    url: "https://webisse.com.tr",
    images: [
      {
        url: "/img/hero/01_hero-img.webp",
        width: 1200,
        height: 1200,
        alt: "Webisse",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F6" },
    { media: "(prefers-color-scheme: dark)", color: "#161616" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning>
      <head>
        <meta
          name="msapplication-navbutton-color"
          content="#161616"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="stylesheet" href="/css/loaders/loader.min.css" />
        <link rel="stylesheet" href="/css/plugins.min.css" />
        <link rel="stylesheet" href="/css/main.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script src="/js/libs.min.js" strategy="beforeInteractive" />
        <Script src="/js/app.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
