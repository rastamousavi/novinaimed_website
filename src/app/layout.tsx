import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novinaimed.ir"),

  title: {
    default:
      "AiMED | دوره هوش مصنوعی، پایتون، تحلیل داده و مقاله‌نویسی",
    template: "%s | AiMED",
  },

  description:
    "هوش پرداز نوین ای‌مد؛ ارائه دوره‌های تخصصی هوش مصنوعی، پایتون، تحلیل داده، مقاله‌نویسی علمی و خدمات توسعه نرم‌افزار و فناوری.",

  keywords: [
    "دوره هوش مصنوعی",
    "آموزش هوش مصنوعی",
    "دوره پایتون",
    "آموزش پایتون",
    "دوره تحلیل داده",
    "تحلیل داده با پایتون",
    "دوره مقاله نویسی",
    "آموزش مقاله نویسی علمی",
    "پرامپت نویسی",
    "ChatGPT",
    "Python",
    "Artificial Intelligence",
    "AiMED",
    "هوش پرداز نوین ای مد",
  ],

  authors: [
    {
      name: "AiMED",
      url: "https://novinaimed.ir",
    },
  ],

  creator: "AiMED",
  publisher: "AiMED",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://novinaimed.ir",
    siteName: "AiMED",
    title:
      "AiMED | هوش مصنوعی، پایتون، تحلیل داده و آموزش تخصصی",
    description:
      "دوره‌های کاربردی هوش مصنوعی، پایتون، تحلیل داده و مقاله‌نویسی علمی در AiMED.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AiMED | Intelligent Healthcare & AI",
    description:
      "آموزش هوش مصنوعی، پایتون، تحلیل داده، مقاله‌نویسی و راهکارهای فناوری.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}