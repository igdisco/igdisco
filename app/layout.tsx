import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevOps Solutions | Accelerate Your Growth",
  description:
    "DevOps Solutions - Accelerate your software delivery with our expert DevOps services. Automate, scale, and innovate faster than ever.",
  keywords: ["DevOps", "Software Delivery", "Cloud Computing", "Automation", "CI/CD", "Infrastructure as Code"],
  authors: [{ name: "DevOps Solutions Team" }],
  metadataBase: new URL("https://igdisco.com"), // Replace with actual domain when deployed
  openGraph: {
    title: "DevOps Solutions | Accelerate Your Growth",
    description: "Accelerate your software delivery with our expert DevOps services.",
    url: "https://igdisco.com",
    siteName: "DevOps Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Solutions | Accelerate Your Growth",
    description: "Accelerate your software delivery with our expert DevOps services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
