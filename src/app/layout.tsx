import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Oscar Boochever: Government Technology & Policy Consultant",
  description:
    "Consultant and product builder helping state and local governments operate more effectively through custom software, data analysis, policy consulting, and data visualization.",
  keywords: [
    "government technology",
    "policy consultant",
    "data analysis",
    "public sector",
    "data visualization",
    "government consulting",
    "civic technology",
  ],
  authors: [{ name: "Oscar Boochever" }],
  creator: "Oscar Boochever",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oscarboochever.com",
    siteName: "Oscar Boochever",
    title: "Oscar Boochever: Government Technology & Policy Consultant",
    description:
      "Consultant and product builder helping state and local governments operate more effectively through custom software, data analysis, policy consulting, and data visualization.",
    images: [
      {
        url: "https://oscarboochever.com/headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Oscar Boochever",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Boochever: Government Technology & Policy Consultant",
    description:
      "Consultant and product builder helping state and local governments operate more effectively through custom software, data analysis, policy consulting, and data visualization.",
    images: ["https://oscarboochever.com/headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5C6B4F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-sans antialiased bg-offwhite text-charcoal overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
