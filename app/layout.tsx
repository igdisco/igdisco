import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGDISCO | Enjoy the night. We’ve got IT.",
  description:
    "DevOps, Infrastructure, Security, Cloud, and Operations. IGDISCO keeps the technical side in rhythm so you can focus on what matters.",
  keywords: [
    "DevOps",
    "DevSecOps",
    "Software Delivery",
    "Cloud Computing",
    "Cloud Migration",
    "Automation",
    "CI/CD",
    "Infrastructure as Code",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Monitoring and Logging",
    "Infrastructure Monitoring",
    "Managed IT Services",
    "AWS",
    "Microsoft Azure",
    "Huawei Cloud",
  ],
  authors: [{ name: "IGDISCO" }],
  metadataBase: new URL("https://igdisco.com"), // Replace with actual domain when deployed
  openGraph: {
    title: "IGDISCO | Enjoy the night. We’ve got IT.",
    description:
      "DevOps, cloud, Kubernetes, security, and 24/7 infrastructure operations from one connected team.",
    url: "https://igdisco.com",
    siteName: "IGDISCO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGDISCO | Enjoy the night. We’ve got IT.",
    description:
      "DevOps, cloud, Kubernetes, security, and 24/7 infrastructure operations from one connected team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={barlow.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
