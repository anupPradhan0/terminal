import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.jpg",
  },
  title: {
    default: "Anup Pradhan (Mors) | Full Stack Developer",
    template: "%s | Anup Pradhan (Mors)",
  },
  description:
    "MERN Stack Developer with backend focus, building RESTful APIs and full-stack applications using MongoDB, Express.js, React, Next.js, Node.js, and TypeScript. Exploring Machine Learning with TensorFlow and scikit-learn.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Machine Learning",
    "Web Developer Portfolio",
    "Next.js Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Anup Pradhan (Mors)" }],
  creator: "Anup Pradhan (Mors)",
  openGraph: {
    type: "website",
    locale: "Bhubaneswar,Odisha,India",
    url: "https://morscode.site",
    title: "Anup Pradhan (Mors) | Full Stack Developer",
    description:
      "MERN Stack Developer specializing in backend development, RESTful APIs, and exploring Machine Learning technologies.",
    siteName: "Anup Pradhan (Mors) Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Pradhan (Mors) | Full Stack Developer",
    description:
      "MERN Stack Developer with backend focus, building RESTful APIs and full-stack applications.",
    creator: "@AnupPradhan0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
