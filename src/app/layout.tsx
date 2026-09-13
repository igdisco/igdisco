import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./material-symbols.css";
import { Providers } from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <head>
      </head>
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-body antialiased text-slate-800 dark:text-slate-200 selection:bg-[#00B3F0]/20 selection:text-brand-blue min-h-screen relative overflow-x-hidden`}>
        <Providers>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>

          {/* Ambient Neon Lighting Backdrop */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <div className="ambient-sphere-1 absolute -top-40 left-1/4 w-[650px] h-[650px] bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-[140px]" />
            <div className="ambient-sphere-2 absolute top-1/3 -right-32 w-[600px] h-[600px] bg-disco-purple/10 dark:bg-disco-purple/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-electric-cyan/12 dark:bg-electric-cyan/15 rounded-full blur-[160px]" />
            <div className="absolute inset-0 grid-lines opacity-60 dark:opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
