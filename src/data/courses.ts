export type Course = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  shortDescription: string;
  duration: string;
  level: string;
  audience: string;
  price: string;
  oldPrice?: string;
  gift?: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    slug: "ai-tools",

    title:
      "دوره کاربردی هوش مصنوعی و ابزارهای AI",

    seoTitle:
      "دوره هوش مصنوعی کاربردی و ابزارهای AI",

    description:
      "دوره کاربردی هوش مصنوعی شامل آموزش ChatGPT، پرامپت‌نویسی، ابزارهای تولید متن، تصویر، ویدئو و صدا، کاربردهای AI و استفاده مسئولانه از هوش مصنوعی.",

    shortDescription:
      "آموزش کاربردی هوش مصنوعی و ابزارهای AI از مقدماتی تا استفاده واقعی در کار و تحصیل.",

    duration: "۵ ساعت",

    level: "مقدماتی تا کاربردی",

    audience:
      "دانشجویان، پژوهشگران، مدرسین، شاغلان و علاقه‌مندان",

    price: "۴۱۰,۰۰۰",

    oldPrice: "۵۹۰,۰۰۰",

    topics: [
      "هوش مصنوعی چیست و چگونه کار می‌کند؟",
      "کاربردهای واقعی هوش مصنوعی",
      "پرامپت‌نویسی حرفه‌ای",
      "ChatGPT و ابزارهای متنی",
      "ابزارهای تولید تصویر",
      "ابزارهای تولید ویدئو",
      "ابزارهای تولید صدا",
      "کاربرد AI در کار و تحصیل",
      "مسیرهای درآمدزایی با هوش مصنوعی",
      "امنیت و حریم خصوصی",
      "استفاده مسئولانه از AI",
    ],
  },

  {
    slug: "scientific-writing",

    title:
      "دوره جامع مقاله‌نویسی علمی و انتشار",

    seoTitle:
      "دوره مقاله نویسی علمی و انتشار مقاله",

    description:
      "دوره جامع مقاله‌نویسی علمی شامل انتخاب موضوع، Research Gap، جست‌وجوی منابع، ساختار مقاله، انتخاب ژورنال، Cover Letter، Submission و پاسخ به Reviewer.",

    shortDescription:
      "آموزش جامع و کاربردی مقاله‌نویسی علمی از انتخاب مسئله پژوهش تا انتشار مقاله.",

    duration: "۸ ساعت",

    level: "جامع و کارگاهی",

    audience:
      "دانشجویان و پژوهشگران تمامی رشته‌ها",

    price: "۲,۵۹۰,۰۰۰",

    gift:
      "۳ ساعت آموزش تکمیلی ویژه مناسب تمامی رشته‌ها",

    topics: [
      "انتخاب موضوع و مسئله پژوهش",
      "Research Question",
      "Research Gap",
      "جست‌وجوی حرفه‌ای منابع علمی",
      "Google Scholar و پایگاه‌های علمی",
      "Search Strategy",
      "انتخاب ژورنال مناسب",
      "ساختار IMRAD",
      "Title",
      "Abstract",
      "Keywords",
      "Introduction",
      "Literature Review",
      "Methodology",
      "Results",
      "Discussion",
      "Conclusion",
      "Tables & Figures",
      "References",
      "Ethics و Plagiarism",
      "ORCID",
      "Cover Letter",
      "Submission",
      "Response to Reviewers",
      "Graphical Abstract",
      "Systematic Review",
      "Meta-analysis",
      "PRISMA",
      "CONSORT",
      "STROBE",
      "CARE",
      "Preprint",
      "Repository",
      "DOI",
      "استفاده مسئولانه از AI در مقاله‌نویسی",
    ],
  },

  {
    slug: "data-analysis-python",

    title:
      "دوره تحلیل داده با پایتون",

    seoTitle:
      "دوره تحلیل داده با پایتون | Data Analysis Python",

    description:
      "آموزش تحلیل داده با پایتون شامل NumPy، Pandas، پاک‌سازی داده، EDA، Matplotlib، مصورسازی داده و پروژه واقعی تحلیل داده.",

    shortDescription:
      "آموزش پروژه‌محور تحلیل داده با Python برای ورود به Data Analysis و Data Science.",

    duration: "پروژه‌محور",

    level: "مقدماتی تا متوسط",

    audience:
      "علاقه‌مندان تحلیل داده، پژوهش و Data Science",

    price: "۲,۹۹۰,۰۰۰",

    oldPrice: "۳,۵۹۰,۰۰۰",

    topics: [
      "Python برای تحلیل داده",
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Missing Values",
      "Data Transformation",
      "کار با CSV و Excel",
      "Exploratory Data Analysis",
      "Matplotlib",
      "Data Visualization",
      "آمار مقدماتی",
      "تحلیل دیتاست واقعی",
      "آماده‌سازی داده برای Machine Learning",
      "پروژه نهایی تحلیل داده",
    ],
  },

  {
    slug: "python-junior",

    title:
      "دوره Python Junior",

    seoTitle:
      "آموزش پایتون نوجوانان | Python Junior",

    description:
      "آموزش پایتون برای نوجوانان ۱۰ تا ۱۵ سال از صفر، شامل برنامه‌نویسی، تفکر الگوریتمی، حل مسئله، Turtle، Quiz و ساخت بازی‌های ساده.",

    shortDescription:
      "آموزش برنامه‌نویسی پایتون برای نوجوانان ۱۰ تا ۱۵ سال بدون نیاز به پیش‌زمینه.",

    duration: "۳۰ ساعت",

    level: "از صفر",

    audience:
      "نوجوانان ۱۰ تا ۱۵ سال",

    price: "۲,۹۹۰,۰۰۰",

    oldPrice: "۳,۹۹۰,۰۰۰",

    topics: [
      "آشنایی با برنامه‌نویسی",
      "تفکر الگوریتمی",
      "حل مسئله",
      "Variables",
      "Input و Output",
      "Conditions",
      "Loops",
      "Lists",
      "Functions",
      "Turtle",
      "ساخت Quiz",
      "ساخت بازی‌های ساده",
      "پروژه‌های کوچک",
      "پروژه نهایی",
    ],
  },

  {
    slug: "python-pro",

    title:
      "دوره Python Pro",

    seoTitle:
      "دوره آموزش پایتون از صفر تا پروژه | Python Pro",

    description:
      "دوره جامع آموزش پایتون از صفر شامل اصول Python، توابع، فایل‌ها، OOP، API، Git، GitHub، پروژه عملی و مسیر ورود به تحلیل داده و هوش مصنوعی.",

    shortDescription:
      "یادگیری جدی Python از صفر تا اجرای پروژه و ورود به مسیر تحلیل داده و AI.",

    duration: "۵۴ ساعت",

    level: "مقدماتی تا متوسط",

    audience:
      "افراد ۱۶ سال به بالا",

    price: "۴,۹۹۰,۰۰۰",

    oldPrice: "۶,۹۹۰,۰۰۰",

    topics: [
      "Python Fundamentals",
      "Variables & Data Types",
      "Conditions",
      "Loops",
      "List",
      "Tuple",
      "Dictionary",
      "Set",
      "Functions",
      "Modules",
      "File Handling",
      "Error Handling",
      "Object-Oriented Programming",
      "Libraries",
      "API مقدماتی",
      "Git",
      "GitHub",
      "پروژه‌های کاربردی",
      "مسیر ورود به Data Analysis",
      "مسیر ورود به Artificial Intelligence",
      "پروژه نهایی",
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}