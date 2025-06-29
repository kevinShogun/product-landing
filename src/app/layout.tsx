import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: {
    default: "SoundWave Pro - Premium Wireless Headphones",
    template: "%s | SoundWave Pro",
  },
  description:
    "Experience music like never before with SoundWave Pro premium wireless headphones. 30-hour battery, Bluetooth 5.0, and active noise cancellation technology.",
  keywords: [
    "wireless headphones",
    "premium audio",
    "noise cancellation",
    "bluetooth headphones",
    "SoundWave Pro",
    "audiophile",
    "music",
    "sound quality",
  ],
  authors: [{ name: "SoundWave Pro Team" }],
  creator: "SoundWave Pro",
  publisher: "SoundWave Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://soundwavepro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soundwavepro.com",
    title: "SoundWave Pro - Premium Wireless Headphones",
    description:
      "Experience music like never before with SoundWave Pro premium wireless headphones. 30-hour battery, Bluetooth 5.0, and active noise cancellation technology.",
    siteName: "SoundWave Pro",
    images: [
      {
        url: "/assets/04.png",
        width: 1200,
        height: 630,
        alt: "SoundWave Pro Premium Wireless Headphones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoundWave Pro - Premium Wireless Headphones",
    description:
      "Experience music like never before with SoundWave Pro premium wireless headphones. 30-hour battery, Bluetooth 5.0, and active noise cancellation technology.",
    images: ["/twitter-image.jpg"],
    creator: "@soundwavepro",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
