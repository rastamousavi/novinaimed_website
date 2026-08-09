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
  // =========================================================
  // 1) AI TOOLS
  // =========================================================
  {
    slug: "ai-tools",

    title: "دوره کاربردی هوش مصنوعی و ابزارهای AI",

    seoTitle:
      "دوره آموزش هوش مصنوعی کاربردی و ابزارهای AI | AiMED",

    description:
      "دوره کاربردی هوش مصنوعی AiMED شامل آموزش ChatGPT، پرامپت‌نویسی حرفه‌ای، ابزارهای تولید متن، تصویر، ویدئو و صدا، کاربرد هوش مصنوعی در کار و تحصیل، مسیرهای درآمدزایی با AI، امنیت، حریم خصوصی و استفاده مسئولانه از هوش مصنوعی است.",

    shortDescription:
      "آموزش کاربردی هوش مصنوعی و ابزارهای AI از مقدماتی تا استفاده واقعی در کار، تحصیل و پروژه‌های شخصی.",

    duration: "۵ ساعت",

    level: "مقدماتی تا کاربردی",

    audience:
      "دانشجویان، پژوهشگران، مدرسین، شاغلان و علاقه‌مندان به هوش مصنوعی",

    price: "۴۱۰,۰۰۰",

    oldPrice: "۵۹۰,۰۰۰",

    topics: [
      "هوش مصنوعی چیست و چگونه کار می‌کند؟",
      "کاربردهای واقعی هوش مصنوعی",
      "پرامپت‌نویسی حرفه‌ای",
      "ChatGPT و ابزارهای متنی",
      "ابزارهای تولید تصویر با هوش مصنوعی",
      "ابزارهای تولید ویدئو با هوش مصنوعی",
      "ابزارهای تولید صدا",
      "کاربرد AI در کار و تحصیل",
      "مسیرهای درآمدزایی با هوش مصنوعی",
      "امنیت و حریم خصوصی",
      "استفاده مسئولانه از AI",
    ],
  },

  // =========================================================
  // 2) SCIENTIFIC WRITING
  // =========================================================
  {
    slug: "scientific-writing",

    title: "دوره جامع مقاله‌نویسی علمی و انتشار مقاله",

    seoTitle:
      "دوره آموزش مقاله نویسی علمی از صفر تا انتشار مقاله | AiMED",

    description:
      "دوره جامع مقاله‌نویسی علمی AiMED از انتخاب موضوع و مسئله پژوهش تا جستجوی منابع، Research Gap، طراحی سؤال پژوهش، ساختار مقاله علمی، انتخاب ژورنال، نگارش بخش‌های مقاله، Submission، Cover Letter و پاسخ به Reviewer را به‌صورت کاربردی آموزش می‌دهد.",

    shortDescription:
      "آموزش جامع و کاربردی مقاله‌نویسی علمی از انتخاب مسئله پژوهش تا نگارش، ارسال و انتشار مقاله.",

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
      "جستجوی حرفه‌ای منابع علمی",
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

  // =========================================================
  // 3) DATA ANALYSIS WITH PYTHON
  // =========================================================
  {
    slug: "data-analysis-python",

    title: "دوره تحلیل داده با پایتون",

    seoTitle:
      "دوره آموزش تحلیل داده با پایتون | Python Data Analysis | AiMED",

    description:
      "آموزش پروژه‌محور تحلیل داده با پایتون شامل Python، NumPy، Pandas، پاکسازی داده، Missing Values، EDA، Matplotlib، مصورسازی داده، آمار مقدماتی و تحلیل دیتاست واقعی برای ورود به Data Analysis و Data Science.",

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

  // =========================================================
  // 4) PYTHON JUNIOR
  // =========================================================
  {
    slug: "python-junior",

    title: "دوره Python Junior",

    seoTitle:
      "آموزش پایتون برای نوجوانان ۱۰ تا ۱۵ سال | Python Junior | AiMED",

    description:
      "دوره آموزش پایتون برای نوجوانان ۱۰ تا ۱۵ سال از صفر، شامل آشنایی با برنامه‌نویسی، تفکر الگوریتمی، حل مسئله، Variables، Conditions، Loops، Functions، Turtle، ساخت Quiz و بازی‌های ساده با Python است.",

    shortDescription:
      "آموزش برنامه‌نویسی پایتون برای نوجوانان ۱۰ تا ۱۵ سال، از صفر و بدون نیاز به پیش‌زمینه.",

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

  // =========================================================
  // 5) PYTHON PRO
  // =========================================================
  {
    slug: "python-pro",

    title: "دوره Python Pro",

    seoTitle:
      "دوره آموزش پایتون از صفر تا پروژه | Python Pro | AiMED",

    description:
      "دوره جامع آموزش پایتون از صفر شامل Python Fundamentals، انواع داده، شرط‌ها، حلقه‌ها، توابع، فایل‌ها، Error Handling، برنامه‌نویسی شی‌گرا OOP، کتابخانه‌ها، API، Git، GitHub و پروژه‌های عملی با مسیر ورود به تحلیل داده و هوش مصنوعی است.",

    shortDescription:
      "یادگیری جدی Python از صفر تا اجرای پروژه و ورود به مسیر تحلیل داده و هوش مصنوعی.",

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

// =========================================================
// GET COURSE BY SLUG
// =========================================================

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}