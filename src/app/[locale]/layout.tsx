import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { color } from "@/styles/colors";
import Contact from "./sections/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={plusJakartaSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: color.primary,
                fontFamily: `${plusJakartaSans.style.fontFamily}, sans-serif`,
              },
            }}
          >
            <Navbar />
            {children}
            <Contact />
            <Footer />
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
