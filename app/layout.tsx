import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twiddl.app"),
  title: {
    default: "Twiddl — Chromatic tuner for iPhone and Android",
    template: "%s — Twiddl",
  },
  description:
    "A focused, private chromatic tuner for iPhone, with Android in closed testing.",
  icons: {
    icon: "/twiddl-icon.png",
    apple: "/twiddl-icon.png",
  },
  other: {
    "apple-itunes-app": "app-id=6800441300",
  },
  openGraph: {
    type: "website",
    url: "https://twiddl.app",
    siteName: "Twiddl",
    title: "Twiddl — Open it. Play. Tune.",
    description: "A focused, private chromatic tuner for iPhone, with Android in closed testing.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Twiddl — Open it. Play. Tune." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twiddl — Open it. Play. Tune.",
    description: "A focused, private chromatic tuner for iPhone, with Android in closed testing.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
