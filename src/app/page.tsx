import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "هوش مصنوعی",
    en: "Artificial Intelligence",
    desc: "طراحی و توسعه راهکارهای مبتنی بر هوش مصنوعی برای کسب‌وکارها، پژوهش و پروژه‌های تخصصی.",
  },
  {
    icon: "📊",
    title: "تحلیل داده",
    en: "Data Analytics",
    desc: "پاک‌سازی، تحلیل، مصورسازی و استخراج بینش کاربردی از داده‌های واقعی.",
  },
  {
    icon: "💻",
    title: "توسعه نرم‌افزار",
    en: "Software Development",
    desc: "طراحی و توسعه نرم‌افزارها و ابزارهای اختصاصی متناسب با نیاز هر پروژه.",
  },
  {
    icon: "🌐",
    title: "طراحی وب‌سایت",
    en: "Web Development",
    desc: "طراحی وب‌سایت‌های شرکتی، آموزشی و اختصاصی با تمرکز بر تجربه کاربری و عملکرد.",
  },
  {
    icon: "🩺",
    title: "فناوری سلامت",
    en: "Digital Health",
    desc: "ایده‌پردازی و توسعه راهکارهای هوشمند و داده‌محور در حوزه سلامت و HealthTech.",
  },
  {
    icon: "🎓",
    title: "آموزش تخصصی",
    en: "Professional Education",
    desc: "آموزش کاربردی و پروژه‌محور هوش مصنوعی، پایتون، تحلیل داده و پژوهش علمی.",
  },
];

const courses = [
  {
    slug: "ai-tools",
    badge: "محبوب",
    title: "دوره کاربردی هوش مصنوعی و ابزارهای AI",
    subtitle: "AI Tools & Practical Artificial Intelligence",
    duration: "۵ ساعت",
    level: "مقدماتی تا کاربردی",
    audience: "دانشجویان، پژوهشگران، مدرسین، شاغلان و علاقه‌مندان",
    price: "۴۱۰,۰۰۰",
    oldPrice: "۵۹۰,۰۰۰",
    topics: [
      "هوش مصنوعی چیست و چگونه کار می‌کند؟",
      "کاربردهای واقعی AI",
      "پرامپت‌نویسی حرفه‌ای",
      "ChatGPT و ابزارهای متنی",
      "ابزارهای تولید تصویر",
      "ابزارهای تولید ویدئو",
      "ابزارهای تولید صدا",
      "AI در کار و تحصیل",
      "مسیرهای درآمدزایی با AI",
      "امنیت و حریم خصوصی",
      "استفاده مسئولانه از هوش مصنوعی",
    ],
  },
  {
    slug: "scientific-writing",
    badge: "جامع",
    title: "دوره جامع مقاله‌نویسی علمی و انتشار",
    subtitle: "Scientific Writing & Publication",
    duration: "۸ ساعت",
    level: "جامع و کارگاهی",
    audience: "دانشجویان و پژوهشگران تمامی رشته‌ها",
    price: "۲,۵۹۰,۰۰۰",
    oldPrice: "",
    gift: "🎁 ۳ ساعت آموزش تکمیلی ویژه مناسب تمام رشته‌ها",
    topics: [
      "انتخاب موضوع و مسئله پژوهش",
      "Research Question و Research Gap",
      "جست‌وجوی حرفه‌ای منابع علمی",
      "Google Scholar و پایگاه‌های علمی",
      "طراحی Search Strategy",
      "انتخاب ژورنال مناسب",
      "ساختار IMRAD",
      "Title، Abstract و Keywords",
      "Introduction و Literature Review",
      "Methodology",
      "Results و Discussion",
      "Tables & Figures",
      "References",
      "Ethics و Plagiarism",
      "ORCID",
      "Cover Letter",
      "Submission",
      "Response to Reviewers",
      "Graphical Abstract",
      "Systematic Review و Meta-analysis",
      "PRISMA، CONSORT، STROBE و CARE",
      "Preprint، Repository و DOI",
      "استفاده مسئولانه از AI در مقاله‌نویسی",
    ],
  },
  {
    slug: "data-analysis-python",
    badge: "پروژه‌محور",
    title: "تحلیل داده با پایتون",
    subtitle: "Data Analysis with Python",
    duration: "پروژه‌محور",
    level: "مقدماتی تا متوسط",
    audience: "علاقه‌مندان تحلیل داده، پژوهش و Data Science",
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
      "پروژه نهایی",
    ],
  },
  {
    slug: "python-junior",
    badge: "۱۰ تا ۱۵ سال",
    title: "Python Junior",
    subtitle: "آموزش برنامه‌نویسی برای نوجوانان",
    duration: "۳۰ ساعت",
    level: "از صفر",
    audience: "نوجوانان ۱۰ تا ۱۵ سال، بدون نیاز به پیش‌زمینه",
    price: "۲,۹۹۰,۰۰۰",
    oldPrice: "۳,۹۹۰,۰۰۰",
    topics: [
      "آشنایی با برنامه‌نویسی",
      "تفکر الگوریتمی",
      "حل مسئله",
      "Variables",
      "Input / Output",
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
    badge: "۱۶ سال به بالا",
    title: "Python Pro",
    subtitle: "Python از صفر تا پروژه",
    duration: "۵۴ ساعت",
    level: "مقدماتی تا متوسط",
    audience: "افراد ۱۶ سال به بالا برای یادگیری جدی برنامه‌نویسی",
    price: "۴,۹۹۰,۰۰۰",
    oldPrice: "۶,۹۹۰,۰۰۰",
    topics: [
      "Python Fundamentals",
      "Variables & Data Types",
      "Conditions",
      "Loops",
      "List، Tuple، Dictionary و Set",
      "Functions",
      "Modules",
      "File Handling",
      "Error Handling",
      "Object-Oriented Programming",
      "Libraries",
      "API مقدماتی",
      "Git و GitHub مقدماتی",
      "پروژه‌های کاربردی",
      "مسیر ورود به Data Analysis",
      "مسیر ورود به AI",
      "پروژه نهایی",
    ],
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "پروژه‌محور",
    text: "تمرکز بر ساخت مهارت و خروجی واقعی به‌جای آموزش صرفاً نظری.",
  },
  {
    icon: "🧠",
    title: "فناوری‌های روز",
    text: "استفاده از ابزارها و رویکردهای جدید در هوش مصنوعی، داده و نرم‌افزار.",
  },
  {
    icon: "🛠️",
    title: "کاربردی",
    text: "آموزش‌ها و راهکارها بر اساس سناریوها و نیازهای واقعی طراحی می‌شوند.",
  },
  {
    icon: "🧭",
    title: "مسیر مشخص",
    text: "از یادگیری اولیه تا اجرای پروژه، مسیر روشن و مرحله‌بندی‌شده دارید.",
  },
  {
    icon: "💬",
    title: "پشتیبانی",
    text: "شرایط پشتیبانی آموزشی هر دوره به‌صورت شفاف اعلام می‌شود.",
  },
  {
    icon: "🩺",
    title: "AI + HealthTech",
    text: "تمرکز ویژه بر کاربرد هوش مصنوعی در فناوری‌های نوین حوزه سلامت.",
  },
];

const faqs = [
  {
    q: "آیا برای شرکت در دوره‌ها نیاز به پیش‌زمینه دارم؟",
    a: "بسته به دوره متفاوت است. دوره‌های مقدماتی مانند هوش مصنوعی کاربردی و Python Junior بدون نیاز به پیش‌زمینه طراحی شده‌اند.",
  },
  {
    q: "دوره‌ها چگونه ارائه می‌شوند؟",
    a: "پس از تأیید ثبت‌نام، دسترسی دوره و فایل‌های مربوط به آن در اختیار دانشجو قرار می‌گیرد.",
  },
  {
    q: "آیا دوره‌ها پروژه دارند؟",
    a: "دوره‌های AiMED با رویکرد کاربردی و پروژه‌محور طراحی شده‌اند و نوع پروژه در هر دوره متفاوت است.",
  },
  {
    q: "آیا پشتیبانی آموزشی وجود دارد؟",
    a: "بله. شرایط و مدت پشتیبانی متناسب با هر دوره اعلام می‌شود.",
  },
  {
    q: "چگونه ثبت‌نام کنم؟",
    a: "برای دریافت شماره کارت و اطلاعات ثبت‌نام از طریق دایرکت اینستاگرام @novinaimed پیام دهید.",
  },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#063F36] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#063F36]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCA83C] bg-[#073D35] font-black text-[#F1BE58]">
              A
            </div>

            <div>
              <div className="text-xl font-black">
                Ai<span className="text-[#F1BE58]">MED</span>
              </div>
              <div className="mt-0.5 text-[8px] tracking-[0.22em] text-white/45">
                INTELLIGENT HEALTHCARE & AI
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-[13px] font-bold text-white/70 lg:flex">
            <a href="#home" className="hover:text-[#F1BE58]">
              خانه
            </a>
            <a href="#services" className="hover:text-[#F1BE58]">
              خدمات
            </a>
            <a href="#courses" className="hover:text-[#F1BE58]">
              دوره‌ها
            </a>
            <a href="#projects" className="hover:text-[#F1BE58]">
              پروژه‌ها
            </a>
            <a href="#about" className="hover:text-[#F1BE58]">
              درباره ما
            </a>
            <a href="#faq" className="hover:text-[#F1BE58]">
              سوالات متداول
            </a>
            <a href="#contact" className="hover:text-[#F1BE58]">
              تماس با ما
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#E5AC35] px-5 py-2.5 text-sm font-black text-[#06362F] transition hover:-translate-y-0.5 md:block"
            >
              شروع همکاری
            </a>

            <details className="relative lg:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/15">
                ☰
              </summary>

              <div className="absolute left-0 top-12 w-56 rounded-2xl border border-white/10 bg-[#032C26] p-3 shadow-2xl">
                {[
                  ["خانه", "#home"],
                  ["خدمات", "#services"],
                  ["دوره‌ها", "#courses"],
                  ["پروژه‌ها", "#projects"],
                  ["درباره ما", "#about"],
                  ["سوالات متداول", "#faq"],
                  ["تماس با ما", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 px-5 py-14 lg:px-8 lg:py-16"
      >
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#DCA83C]/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#159179]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCA83C]/35 bg-[#DCA83C]/10 px-4 py-2 text-xs font-bold text-[#F1BE58]">
              <span className="h-2 w-2 rounded-full bg-[#F1BE58]" />
              AI for a Smarter Tomorrow
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.4] md:text-6xl lg:text-7xl">
              فناوری هوشمند
              <br />
              برای ساختن
              <br />
              <span className="text-[#F1B63D]">آینده‌ای بهتر</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-9 text-white/65">
              هوش پرداز نوین ای‌مد، مجموعه‌ای تخصصی در آموزش هوش مصنوعی،
              برنامه‌نویسی و تحلیل داده، توسعه نرم‌افزار، طراحی وب‌سایت و
              راهکارهای هوشمند با تمرکز ویژه بر فناوری سلامت است.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-[#E5AC35] px-7 py-3.5 font-black text-[#06362F]"
              >
                مشاهده خدمات
              </a>

              <a
                href="#courses"
                className="rounded-full border border-white/20 px-7 py-3.5 font-black"
              >
                مشاهده دوره‌ها
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[330px] items-center justify-center md:flex">
            <div className="absolute h-72 w-72 rounded-full border border-[#DCA83C]/20" />
            <div className="absolute h-60 w-60 rounded-full border border-[#DCA83C]/25" />
            <div className="absolute h-48 w-48 rounded-full border border-[#DCA83C]/35" />

            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#E3AB3E] bg-[#0A5145]">
              <div className="text-center">
                <div className="text-4xl font-black">
                  Ai<span className="text-[#F1BE58]">MED</span>
                </div>
                <div className="mt-3 text-[8px] tracking-[0.23em] text-white/45">
                  INTELLIGENT SOLUTIONS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#F8F6EF] px-5 py-20 text-[#123B34] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <LightSectionTitle
            kicker="خدمات AiMED"
            title="فناوری، آموزش و راهکارهای هوشمند"
            desc="از آموزش تخصصی تا توسعه راهکارهای نرم‌افزاری و هوش مصنوعی، خدمات AiMED با تمرکز بر کاربرد واقعی طراحی شده‌اند."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.8rem] border border-[#173F37]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1"
              >
                <div className="mb-5 text-2xl">{service.icon}</div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-1 text-[11px] font-bold text-[#A97A20]">
                  {service.en}
                </p>
                <p className="mt-4 text-sm leading-8 text-[#35554F]">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        className="bg-[#063F36] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <DarkSectionTitle
            kicker="AiMED Academy"
            title="دوره‌های آموزشی تخصصی"
            desc="برای مشاهده توضیحات کامل، سرفصل‌ها، مدت دوره و ثبت‌نام، وارد صفحه اختصاصی هر دوره شوید."
          />

          <div className="mt-10 space-y-7">
            {courses.map((course, index) => (
              <article
                key={course.slug}
                className={`rounded-[2rem] border p-7 md:p-9 ${
                  index === 0
                    ? "border-[#DCA83C]/55 bg-gradient-to-br from-[#106551] to-[#073D34]"
                    : "border-white/10 bg-[#073A32]"
                }`}
              >
                <div className="grid gap-9 lg:grid-cols-[.82fr_1.18fr]">
                  <div>
                    <div className="inline-flex rounded-full border border-[#DCA83C]/25 bg-[#DCA83C]/10 px-4 py-2 text-xs font-black text-[#F1BE58]">
                      {course.badge}
                    </div>

                    <h3 className="mt-5 text-2xl font-black leading-relaxed md:text-3xl">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-xs text-white/40">
                      {course.subtitle}
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                      <DarkInfoBox label="مدت" value={course.duration} />
                      <DarkInfoBox label="سطح" value={course.level} />
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/55">
                      مناسب: {course.audience}
                    </p>

                    {course.gift && (
                      <div className="mt-5 rounded-2xl border border-[#DCA83C]/35 bg-[#DCA83C]/10 p-4 text-sm font-black text-[#F2C266]">
                        {course.gift}
                      </div>
                    )}

                    <div className="mt-8 rounded-3xl border border-white/10 bg-black/10 p-6">
                      {course.oldPrice && (
                        <div className="text-sm text-white/40 line-through">
                          {course.oldPrice} تومان
                        </div>
                      )}

                      <div className="mt-2 text-3xl font-black text-[#F1B63D]">
                        {course.price}
                        <span className="mr-2 text-xs font-normal text-white/45">
                          تومان
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="rounded-full bg-[#E9AE32] px-5 py-3.5 text-center text-sm font-black text-[#06362F]"
                        >
                          مشاهده جزئیات دوره
                        </Link>

                        <a
                          href="#registration"
                          className="rounded-full border border-white/20 px-5 py-3.5 text-center text-sm font-black"
                        >
                          نحوه ثبت‌نام
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-6 md:p-8">
                    <h4 className="mb-6 text-lg font-black">
                      بخشی از سرفصل‌های دوره
                    </h4>

                    <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                      {course.topics.slice(0, 12).map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-3 text-sm leading-7 text-white/65"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E7AD38]" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-7 inline-block text-sm font-black text-[#F1BE58]"
                    >
                      مشاهده تمام سرفصل‌ها و جزئیات ←
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#032F29] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <DarkSectionTitle
            kicker="Projects & Solutions"
            title="حوزه‌های پروژه و همکاری"
            desc="AiMED آماده بررسی و توسعه پروژه‌های فناورانه، آموزشی و داده‌محور است."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["🤖", "AI Solutions"],
              ["📊", "Data Analytics"],
              ["🌐", "Web Applications"],
              ["🩺", "HealthTech"],
              ["🔬", "Research Tools"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <div className="mt-4 font-black">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#F8F6EF] px-5 py-20 text-[#173F37] lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <LightSectionTitle
            kicker="About AiMED"
            title="درباره هوش پرداز نوین ای‌مد"
            desc="تلفیق دانش، آموزش و فناوری برای تبدیل ایده‌ها به خروجی‌های کاربردی."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-[#173F37]/10 bg-white p-8">
              <LightCompanyRow label="نام برند" value="AiMED" />
              <LightCompanyRow
                label="نام فارسی"
                value="هوش پرداز نوین ای‌مد"
              />
              <LightCompanyRow
                label="مدیریت"
                value="دکتر رستا سادات موسوی"
              />
              <LightCompanyRow label="موقعیت" value="شیراز، ایران" />
              <LightCompanyRow label="وب‌سایت" value="NovinAiMed.ir" />
              <LightCompanyRow label="اینستاگرام" value="@novinaimed" />
            </div>

            <div className="rounded-[2rem] bg-[#0B594B] p-8 text-white md:p-10">
              <h3 className="text-3xl font-black">
                جایی که دانش به راهکار تبدیل می‌شود
              </h3>

              <p className="mt-6 leading-9 text-white/70">
                AiMED در حوزه هوش مصنوعی، تحلیل داده، توسعه نرم‌افزار،
                طراحی وب‌سایت، آموزش تخصصی و راهکارهای هوشمند حوزه سلامت
                فعالیت می‌کند.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-[2rem] border border-[#173F37]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-[130px_1fr]">
              <div className="flex justify-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#DCA83C] shadow-md md:h-32 md:w-32">
                  <Image
                    src="/manager.jpg"
                    alt="دکتر رستا سادات موسوی - مدیریت AiMED"
                    fill
                    priority
                    sizes="160px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div>
                <div className="text-xs font-black text-[#A77920]">
                  مدیریت AiMED
                </div>
                <h3 className="mt-3 text-3xl font-black">
                  دکتر رستا سادات موسوی
                </h3>
                <p className="mt-3 text-sm text-[#526D66]">
                  مدیریت هوش پرداز نوین ای‌مد
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#063F36] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <DarkSectionTitle
            kicker="Why AiMED?"
            title="چرا AiMED؟"
            desc="تمرکز بر مهارت واقعی، پروژه و فناوری‌های روز."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="registration"
        className="bg-[#F8F6EF] px-5 py-20 text-[#173F37]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.4rem] bg-[#0B594B] p-8 text-white md:p-12">
            <h2 className="text-3xl font-black">ثبت‌نام دوره‌ها</h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/65">
              برای دریافت شماره کارت و اطلاعات ثبت‌نام دوره موردنظر از طریق
              دایرکت اینستاگرام AiMED پیام دهید.
            </p>

            <a
              href="https://instagram.com/novinaimed"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-full bg-[#E9AE32] px-7 py-4 font-black text-[#07372F]"
            >
              دایرکت @novinaimed
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="bg-[#F1EEE4] px-5 py-20 text-[#173F37]"
      >
        <div className="mx-auto max-w-5xl">
          <LightSectionTitle
            kicker="FAQ"
            title="سوالات متداول"
            desc="پاسخ به پرسش‌های رایج درباره دوره‌ها."
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer font-black">
                  {faq.q}
                </summary>
                <p className="mt-5 text-sm leading-8 text-[#536D67]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#063F36] px-5 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.4rem] border border-[#DCA83C]/30 bg-[#0B594B] p-8 md:p-12">
            <h2 className="text-3xl font-black">
              برای همکاری با ما در ارتباط باشید
            </h2>

            <div className="mt-7 space-y-3">
              <div>rastamousavi79@gmail.com</div>
              <div>@novinaimed</div>
              <div>Shiraz, Iran</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#02241F] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div className="font-black">
            Ai<span className="text-[#E9AE32]">MED</span>
          </div>

          <div className="text-xs text-white/40">
            © 2026 AiMED — هوش پرداز نوین ای‌مد
          </div>
        </div>
      </footer>
    </main>
  );
}

function DarkSectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-black text-[#F1BE58]">{kicker}</div>
      <h2 className="mt-3 text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-white/55">{desc}</p>
    </div>
  );
}

function LightSectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-black text-[#A77920]">{kicker}</div>
      <h2 className="mt-3 text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-[#586F69]">{desc}</p>
    </div>
  );
}

function DarkInfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
      <div className="text-[11px] text-white/35">{label}</div>
      <div className="mt-1 text-sm font-black">{value}</div>
    </div>
  );
}

function LightCompanyRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-[#173F37]/10 py-4 text-sm last:border-0">
      <span className="text-[#71817D]">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}