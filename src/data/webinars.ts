export type Webinar = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  status: "upcoming" | "completed";
  image?: string;
  registrationUrl?: string;
  topics: string[];
  seoTitle: string;
  seoDescription: string;
};

export const webinars: Webinar[] = [
  {
    slug: "ai-future-skills",
    title: "هوش مصنوعی؛ مهارتی که آینده را می‌سازد",
    shortTitle: "هوش مصنوعی و آینده مهارت‌ها",
    description:
      "وبیناری کاربردی برای آشنایی با هوش مصنوعی، کاربردهای واقعی آن، ابزارهای هوشمند و مهارت‌هایی که در آینده تحصیل و بازار کار اهمیت بیشتری خواهند داشت.",
    date: "به‌زودی",
    time: "اعلام خواهد شد",
    duration: "60 دقیقه",
    instructor: "دکتر رستا سادات موسوی",
    status: "upcoming",
    topics: [
      "هوش مصنوعی چیست؟",
      "کاربردهای واقعی هوش مصنوعی",
      "ابزارهای کاربردی AI",
      "هوش مصنوعی در تحصیل و بازار کار",
      "مهارت‌های مورد نیاز آینده",
      "استفاده مسئولانه از هوش مصنوعی",
    ],
    seoTitle: "وبینار هوش مصنوعی و مهارت‌های آینده | AiMED",
    seoDescription:
      "وبینار کاربردی هوش مصنوعی AiMED؛ آشنایی با ابزارهای AI، کاربردهای واقعی هوش مصنوعی و مهارت‌های مورد نیاز آینده.",
  },
];

export function getWebinarBySlug(slug: string) {
  return webinars.find((webinar) => webinar.slug === slug);
}