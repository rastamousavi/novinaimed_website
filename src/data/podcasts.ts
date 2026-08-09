export type Podcast = {
  slug: string;
  title: string;
  episode: number;
  description: string;
  duration: string;
  publishDate: string;
  category: string;
  image?: string;
  audioUrl?: string;
  topics: string[];
  seoTitle: string;
  seoDescription: string;
};

export const podcasts: Podcast[] = [
  {
    slug: "what-is-ai",
    title: "هوش مصنوعی واقعاً چیست؟",
    episode: 1,
    description:
      "در اولین اپیزود پادکست AiMED به زبان ساده بررسی می‌کنیم هوش مصنوعی چیست، چگونه وارد زندگی روزمره ما شده و چرا شناخت آن برای آینده اهمیت دارد.",
    duration: "به‌زودی",
    publishDate: "به‌زودی",
    category: "هوش مصنوعی",
    topics: [
      "تعریف ساده هوش مصنوعی",
      "AI در زندگی روزمره",
      "تفاوت AI با نرم‌افزارهای معمولی",
      "آینده هوش مصنوعی",
    ],
    seoTitle: "پادکست هوش مصنوعی فارسی | AiMED",
    seoDescription:
      "پادکست فارسی AiMED درباره هوش مصنوعی، ابزارهای AI، فناوری، آموزش و آینده بازار کار.",
  },
];

export function getPodcastBySlug(slug: string) {
  return podcasts.find((podcast) => podcast.slug === slug);
}