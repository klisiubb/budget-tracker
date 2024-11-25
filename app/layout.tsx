import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL as string),
  title: "Budgetify",
  description:
    "Budgetify - Effortlessly track your expenses, set budgets, and achieve your  financial goals with our intuitive budgeting tool.",
  keywords: [
    "Mateusz Kliś",
    "klisiubb",
    "Budget",
    "Budget App",
    "Budgetify",
    "Income tracker",
    "Spending tracker",
    "Finances",
  ],
  openGraph: {
    title: "Budgetify",
    description:
      "Budgetify - Effortlessly track your expenses, set budgets, and achieve your  financial goals with our intuitive budgeting tool.",
    type: "website",
    locale: "en-GB",
    images: [
      {
        url: `/opengraph-image.png`,
      },
    ],
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: "Budgetify",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        async
        src="https://umami.klisiu.me/script.js"
        data-website-id="0ef80abe-e871-4741-b51b-d06b549b3d9d"
      ></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
