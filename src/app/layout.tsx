import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://novinaimed.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AiMED | آموزش هوش مصنوعی، پایتون، تحلیل داده و مقاله‌نویسی",
    template: "%s | AiMED",
  },

  description:
    "هوش پرداز نوین ای‌مد (AiMED)، ارائه‌دهنده دوره‌های تخصصی و کاربردی هوش مصنوعی، ابزارهای AI، پایتون، تحلیل داده و مقاله‌نویسی علمی، همراه با خدمات توسعه نرم‌افزار و راهکارهای هوشمند.",

  keywords: [
    "AiMED",
    "Novin AiMED",
    "هوش پرداز نوین ای مد",
    "هوش پرداز نوین ایمد",
    "دوره هوش مصنوعی",
    "آموزش هوش مصنوعی",
    "دوره هوش مصنوعی کاربردی",
    "آموزش ابزارهای هوش مصنوعی",
    "ابزارهای AI",
    "دوره ChatGPT",
    "آموزش ChatGPT",
    "دوره مقاله نویسی",
    "آموزش مقاله نویسی",
    "مقاله نویسی علمی",
    "آموزش نگارش مقاله علمی",
    "دوره پایتون",
    "آموزش پایتون",
    "پایتون مقدماتی",
    "پایتون پیشرفته",
    "تحلیل داده با پایتون",
    "دوره تحلیل داده",
    "علم داده",
    "Data Analysis",
    "Artificial Intelligence",
    "Python Course",
  ],

  authors: [
    {
      name: "AiMED",
      url: siteUrl,
    },
  ],

  creator: "AiMED",
  publisher: "هوش پرداز نوین ای‌مد",

  applicationName: "AiMED",

  category: "Education",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "AiMED",
    title: "AiMED | آموزش هوش مصنوعی، پایتون، تحلیل داده و مقاله‌نویسی",
    description:
      "دوره‌های کاربردی هوش مصنوعی، ابزارهای AI، پایتون، تحلیل داده و مقاله‌نویسی علمی در AiMED.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AiMED | آموزش هوش مصنوعی و مهارت‌های آینده",
    description:
      "آموزش هوش مصنوعی، ابزارهای AI، پایتون، تحلیل داده و مقاله‌نویسی علمی.",
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

  verification: {
    // مالکیت دامنه قبلاً از طریق DNS در Google Search Console
    // تأیید شده است؛ بنابراین نیازی به verification meta tag نیست.
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B4F46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "AiMED",
    alternateName: [
      "Novin AiMED",
      "هوش پرداز نوین ای مد",
      "هوش پرداز نوین ایمد",
    ],
    url: siteUrl,
    description:
      "مجموعه تخصصی آموزش هوش مصنوعی، پایتون، تحلیل داده، مقاله‌نویسی علمی و توسعه راهکارهای هوشمند.",
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "Python",
      "Data Analysis",
      "Data Science",
      "Scientific Writing",
      "Software Development",
      "Digital Health",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "AiMED",
    alternateName: "هوش پرداز نوین ای مد",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "fa-IR",
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content=""
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}