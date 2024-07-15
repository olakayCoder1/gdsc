import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import GdgLogo from "@public/gdg-logo.svg"
import GdgLogoThumbnailImage from "@public/sponsors/sponsor-1.png"

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "DevFest Ilorin 2024";
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "DevFest Ilorin 2024";
const appMetaTitle = `${appName} - The Biggest Tech Conference In North Central`;
const imageAlt = "Google Developer Group Ilorin";
const appMetaDescription =
  "📢 The official DevFest Ilorin 2024 📢 Mark your calendars for October 17th - 19th, 2024. Don’t miss out on three incredible days of innovation, networking, Exclusive hangout and learning. Get your FREE TICKET now: https://bit.ly/devfestilorin24 #devfestilorin24 #DevFest2024 #devfest";

export const metadata: Metadata = {
  title: appMetaTitle,
  description: appMetaDescription,
  authors: {
    url: appUrl,
    name: appName,
  },
  openGraph: {
    type: "website",
    url: appUrl,
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: GdgLogoThumbnailImage.src,
        alt: imageAlt
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: GdgLogoThumbnailImage.src,
        alt: imageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: false,
  },
  icons: [
    {
      url: GdgLogo.src,
      type: "image/png",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* fallbac favicon */}
        <link
          rel="icon"
          href={GdgLogo.src}
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
