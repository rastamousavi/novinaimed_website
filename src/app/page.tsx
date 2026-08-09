import Link from "next/link";

const services = [
  {
    icon: "✦",
    title: "هوش مصنوعی",
    en: "Artificial Intelligence",
    desc: "طراحی و توسعه راهکارهای مبتنی بر هوش مصنوعی برای کسب‌وکارها، پژوهش و پروژه‌های تخصصی.",
  },
  {
    icon: "◈",
    title: "تحلیل داده",
    en: "Data Analytics",
    desc: "پاک‌سازی، تحلیل، مصورسازی و استخراج بینش کاربردی از داده‌های واقعی.",
  },
  {
    icon: "⌘",
    title: "توسعه نرم‌افزار",
    en: "Software Development",
    desc: "طراحی و توسعه نرم‌افزارها و ابزارهای اختصاصی متناسب با نیاز هر پروژه.",
  },
  {
    icon: "◎",
    title: "طراحی وب‌سایت",
    en: "Web Development",
    desc: "طراحی وب‌سایت‌های شرکتی، آموزشی و اختصاصی با تمرکز بر تجربه کاربری، عملکرد و توسعه‌پذیری.",
  },
  {
    icon: "＋",
    title: "فناوری سلامت",
    en: "Digital Health & HealthTech",
    desc: "ایده‌پردازی و توسعه راهکارهای هوشمند و داده‌محور در حوزه سلامت و HealthTech.",
  },
  {
    icon: "◇",
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
    price: "۴۱۰,۰۰۰",
    oldPrice: "۵۹۰,۰۰۰",
    description:
      "یادگیری کاربرد واقعی هوش مصنوعی، پرامپت‌نویسی و ابزارهای AI برای کار، تحصیل و پژوهش.",
  },
  {
    slug: "scientific-writing",
    badge: "جامع",
    title: "دوره جامع مقاله‌نویسی علمی و انتشار",
    subtitle: "Scientific Writing & Publication",
    duration: "۸ ساعت",
    level: "جامع و کارگاهی",
    price: "۲,۵۹۰,۰۰۰",
    oldPrice: "",
    description:
      "از انتخاب موضوع و Research Gap تا نگارش مقاله، انتخاب ژورنال، Submission و پاسخ به داوران.",
  },
  {
    slug: "data-analysis-python",
    badge: "پروژه‌محور",
    title: "دوره تحلیل داده با پایتون",
    subtitle: "Data Analysis with Python",
    duration: "پروژه‌محور",
    level: "مقدماتی تا متوسط",
    price: "۲,۹۹۰,۰۰۰",
    oldPrice: "۳,۵۹۰,۰۰۰",
    description:
      "NumPy، Pandas، پاک‌سازی داده، تحلیل اکتشافی، مصورسازی و تحلیل دیتاست واقعی.",
  },
  {
    slug: "python-junior",
    badge: "۱۰ تا ۱۵ سال",
    title: "Python Junior",
    subtitle: "آموزش برنامه‌نویسی پایتون برای نوجوانان",
    duration: "۳۰ ساعت",
    level: "از صفر",
    price: "۲,۹۹۰,۰۰۰",
    oldPrice: "۳,۹۹۰,۰۰۰",
    description:
      "آموزش برنامه‌نویسی، تفکر الگوریتمی و حل مسئله همراه با ساخت پروژه و بازی‌های ساده.",
  },
  {
    slug: "python-pro",
    badge: "۱۶ سال به بالا",
    title: "Python Pro",
    subtitle: "آموزش Python از صفر تا پروژه",
    duration: "۵۴ ساعت",
    level: "مقدماتی تا متوسط",
    price: "۴,۹۹۰,۰۰۰",
    oldPrice: "۶,۹۹۰,۰۰۰",
    description:
      "مسیر جامع یادگیری پایتون، برنامه‌نویسی شی‌گرا، API، Git و پروژه‌های کاربردی.",
  },
];

const benefits = [
  {
    number: "01",
    title: "یادگیری پروژه‌محور",
    text: "تمرکز بر ساخت مهارت و خروجی واقعی به‌جای آموزش صرفاً نظری.",
  },
  {
    number: "02",
    title: "فناوری‌های روز",
    text: "استفاده از ابزارها و رویکردهای جدید در هوش مصنوعی، داده و نرم‌افزار.",
  },
  {
    number: "03",
    title: "مسیر یادگیری مشخص",
    text: "از یادگیری اولیه تا اجرای پروژه، مسیر روشن و مرحله‌بندی‌شده دارید.",
  },
  {
    number: "04",
    title: "آموزش کاربردی",
    text: "محتوا بر اساس سناریوها، مسائل و نیازهای واقعی طراحی می‌شود.",
  },
];

const faqs = [
  {
    q: "شرکت هوش پرداز نوین ای‌مد در چه حوزه‌هایی فعالیت می‌کند؟",
    a: "هوش پرداز نوین ای‌مد (AiMED) در حوزه آموزش تخصصی، هوش مصنوعی، تحلیل داده، توسعه نرم‌افزار، طراحی وب، پژوهش علمی و توسعه راهکارهای فناورانه با تمرکز ویژه بر فناوری سلامت فعالیت می‌کند.",
  },
  {
    q: "آیا برای شرکت در دوره‌ها نیاز به پیش‌زمینه دارم؟",
    a: "بسته به دوره متفاوت است. دوره‌های مقدماتی به‌گونه‌ای طراحی شده‌اند که افراد بدون پیش‌زمینه نیز بتوانند مسیر یادگیری خود را آغاز کنند.",
  },
  {
    q: "دوره‌های AiMED برای چه افرادی مناسب هستند؟",
    a: "برای دانشجویان، پژوهشگران، شاغلان، علاقه‌مندان فناوری و افرادی که می‌خواهند مهارت‌های کاربردی در هوش مصنوعی، پایتون، تحلیل داده و پژوهش علمی کسب کنند.",
  },
  {
    q: "آیا دوره‌ها پروژه دارند؟",
    a: "دوره‌های AiMED با رویکرد کاربردی و پروژه‌محور طراحی شده‌اند و نوع پروژه متناسب با موضوع هر دوره متفاوت است.",
  },
  {
    q: "آیا پشتیبانی آموزشی وجود دارد؟",
    a: "بله. شرایط و مدت پشتیبانی متناسب با هر دوره اعلام می‌شود.",
  },
  {
    q: "چگونه ثبت‌نام کنم؟",
    a: "برای دریافت اطلاعات ثبت‌نام و شرایط دوره موردنظر می‌توانید از طریق صفحه رسمی AiMED با مجموعه در ارتباط باشید.",
  },
];

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-[#F7F5EE] text-[#153B34]"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#043C34]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6B650] bg-[#0B5146] text-lg font-black text-[#F1BE58]">
              A
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Ai<span className="text-[#F1BE58]">MED</span>
              </div>
              <div className="mt-0.5 text-[7px] tracking-[0.22em] text-white/45">
                HOSH PARDAZ NOVIN AiMED
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-[13px] font-bold text-white/70 lg:flex">
            <a className="transition hover:text-[#F1BE58]" href="#home">
              خانه
            </a>

            <a className="transition hover:text-[#F1BE58]" href="#company">
              شرکت
            </a>

            <a className="transition hover:text-[#F1BE58]" href="#courses">
              دوره‌ها
            </a>

            <Link
              className="transition hover:text-[#F1BE58]"
              href="/webinars"
            >
              وبینارها
            </Link>

            <Link
              className="transition hover:text-[#F1BE58]"
              href="/podcasts"
            >
              پادکست
            </Link>

            <a className="transition hover:text-[#F1BE58]" href="#services">
              خدمات
            </a>

            <a className="transition hover:text-[#F1BE58]" href="#management">
              مدیریت
            </a>

            <a className="transition hover:text-[#F1BE58]" href="#faq">
              سوالات متداول
            </a>
          </nav>

          <a
            href="#registration"
            className="rounded-full bg-[#E8AF39] px-5 py-2.5 text-xs font-black text-[#06382F] transition hover:-translate-y-0.5 hover:bg-[#F3C15A]"
          >
            ثبت‌نام دوره
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#043C34] px-5 pb-24 pt-20 text-white lg:px-8 lg:pb-32 lg:pt-28"
      >
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#DCA83C]/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#14937B]/20 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#DCA83C]/30 bg-[#DCA83C]/10 px-4 py-2 text-xs font-bold text-[#F1BE58]">
              <span className="h-2 w-2 rounded-full bg-[#F1BE58]" />
              هوش پرداز نوین ای‌مد • AiMED
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.55] md:text-6xl lg:text-[64px]">
              دانش و فناوری برای
              <br />
              <span className="text-[#F1BE58]">دنیای هوشمند فردا</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-9 text-white/70 md:text-lg">
              شرکت هوش پرداز نوین ای‌مد (AiMED)؛ فعال در حوزه هوش مصنوعی،
              تحلیل داده، توسعه نرم‌افزار، فناوری سلامت، پژوهش و آموزش
              تخصصی.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#company"
                className="rounded-full bg-[#E8AF39] px-7 py-4 text-sm font-black text-[#06382F] transition hover:-translate-y-1 hover:bg-[#F1C25D]"
              >
                خدماتAiMed
              </a>

              <a
                href="#courses"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-black text-white transition hover:border-[#E8AF39] hover:text-[#F1BE58]"
              >
                مشاهده دوره‌هاى آموزشى 
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-8 gap-y-4 text-xs text-white/50">
              <span>✓ هوش مصنوعی</span>
              <span>✓ تحلیل داده</span>
              <span>✓ توسعه نرم‌افزار</span>
              <span>✓ فناوری سلامت</span>
              <span>✓ آموزش تخصصی</span>
            </div>
          </div>

          <div className="relative hidden min-h-[440px] items-center justify-center md:flex">
            <div className="absolute h-[410px] w-[410px] rounded-full border border-[#E1AD45]/10" />
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[#E1AD45]/15" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-[#E1AD45]/25" />

            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#E1AD45]/60 bg-[#095246] shadow-2xl shadow-black/30">
              <div className="text-center">
                <div className="text-5xl font-black">
                  Ai<span className="text-[#F1BE58]">MED</span>
                </div>
                <div className="mt-4 text-[9px] tracking-[0.28em] text-white/40">
                  INTELLIGENT SOLUTIONS
                </div>
              </div>
            </div>

            <div className="absolute right-2 top-20 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
              <div className="text-[10px] text-white/40">INNOVATE</div>
              <div className="mt-1 text-sm font-black">
                Artificial Intelligence
              </div>
            </div>

            <div className="absolute bottom-16 left-0 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
              <div className="text-[10px] text-white/40">BUILD</div>
              <div className="mt-1 text-sm font-black">
                Technology & Education
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section
        id="company"
        className="bg-[#F8F6EF] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-black tracking-[0.15em] text-[#A87920]">
                HOSH PARDAZ NOVIN AiMED
              </div>

              <h2 className="mt-4 text-3xl font-black leading-relaxed text-[#153B34] md:text-5xl">
                شرکت
                <br />
                <span className="text-[#A87920]">
                  هوش پرداز نوین ای‌مد
                </span>
              </h2>

              <div className="mt-7 h-1 w-20 rounded-full bg-[#D6A33C]" />
            </div>

            <div>
              <p className="text-base leading-9 text-[#536D67] md:text-lg">
                <strong className="text-[#153B34]">
                  هوش پرداز نوین ای‌مد (AiMED)
                </strong>{" "}
                مجموعه‌ای فعال در حوزه فناوری، هوش مصنوعی، تحلیل داده،
                توسعه نرم‌افزار، طراحی وب‌سایت، آموزش تخصصی و پژوهش علمی
                است.
              </p>

              <p className="mt-5 text-base leading-9 text-[#536D67]">
                رویکرد AiMED بر ایجاد ارتباط میان دانش، فناوری و نیازهای
                واقعی متمرکز است؛ از آموزش مهارت‌های کاربردی و
                پروژه‌محور تا طراحی و توسعه راهکارهای هوشمند و
                داده‌محور.
              </p>

              <p className="mt-5 text-base leading-9 text-[#536D67]">
                یکی از محورهای مورد توجه مجموعه، استفاده از فناوری‌های
                نوین و هوش مصنوعی در حوزه سلامت و توسعه راهکارهای
                Digital Health و HealthTech است.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Data Analytics",
                  "Software",
                  "HealthTech",
                  "Research",
                  "Education",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#153B34]/10 bg-white px-4 py-2 text-[11px] font-bold text-[#536D67]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-[#EFECE3] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="AiMED ACADEMY"
            title="دوره‌های آموزشی"
            description="مسیر یادگیری خود را انتخاب کنید؛ از شروع هوش مصنوعی و برنامه‌نویسی تا تحلیل داده و پژوهش علمی."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <article
                key={course.slug}
                className={`group flex min-h-[440px] flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-2 ${
                  index === 0
                    ? "border-[#D8A43B]/50 bg-[#063F36] text-white shadow-xl"
                    : "border-[#173F37]/10 bg-white text-[#173F37] shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-black ${
                      index === 0
                        ? "bg-[#E5AC35] text-[#06362F]"
                        : "bg-[#F2E7C9] text-[#8A641F]"
                    }`}
                  >
                    {course.badge}
                  </span>

                  <span
                    className={`text-[10px] ${
                      index === 0 ? "text-white/35" : "text-[#173F37]/35"
                    }`}
                  >
                    AiMED COURSE
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black leading-relaxed">
                  {course.title}
                </h3>

                <div
                  className={`mt-2 text-xs ${
                    index === 0 ? "text-white/45" : "text-[#8B9B97]"
                  }`}
                >
                  {course.subtitle}
                </div>

                <p
                  className={`mt-6 text-sm leading-8 ${
                    index === 0 ? "text-white/65" : "text-[#536D67]"
                  }`}
                >
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
                  <span
                    className={`rounded-full px-3 py-2 ${
                      index === 0
                        ? "bg-white/10 text-white/70"
                        : "bg-[#F3F1EB] text-[#536D67]"
                    }`}
                  >
                    {course.duration}
                  </span>

                  <span
                    className={`rounded-full px-3 py-2 ${
                      index === 0
                        ? "bg-white/10 text-white/70"
                        : "bg-[#F3F1EB] text-[#536D67]"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  {course.oldPrice && (
                    <div
                      className={`text-xs line-through ${
                        index === 0 ? "text-white/35" : "text-[#8A9995]"
                      }`}
                    >
                      {course.oldPrice} تومان
                    </div>
                  )}

                  <div
                    className={`mt-1 text-2xl font-black ${
                      index === 0 ? "text-[#F1BE58]" : "text-[#153B34]"
                    }`}
                  >
                    {course.price}
                    <span className="mr-2 text-[11px] font-normal">
                      تومان
                    </span>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className={`mt-6 block rounded-full px-5 py-3.5 text-center text-sm font-black transition ${
                      index === 0
                        ? "bg-[#E8AF39] text-[#06382F] hover:bg-[#F1C25D]"
                        : "bg-[#063F36] text-white hover:bg-[#0B594B]"
                    }`}
                  >
                    مشاهده دوره
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT HUB */}
      <section className="bg-[#F8F6EF] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="LEARN • EXPLORE • GROW"
            title="فراتر از دوره‌های آموزشی"
            description="با وبینارها و پادکست‌های AiMED، موضوعات جدید هوش مصنوعی، فناوری، پژوهش و توسعه فردی را دنبال کنید."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Link
              href="/webinars"
              className="group relative min-h-[340px] overflow-hidden rounded-[2.2rem] bg-[#063F36] p-9 text-white"
            >
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#E4AC3C]/10 blur-3xl" />

              <div className="relative">
                <div className="text-xs font-black text-[#F1BE58]">
                  AiMED WEBINARS
                </div>

                <h3 className="mt-5 text-3xl font-black">
                  وبینارهای تخصصی
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-8 text-white/70">
                  جلسات آموزشی و تخصصی درباره هوش مصنوعی، پژوهش، فناوری و
                  مهارت‌های موردنیاز آینده.
                </p>

                <div className="mt-12 inline-flex items-center gap-3 font-black text-[#F1BE58]">
                  مشاهده وبینارها
                  <span className="transition group-hover:-translate-x-2">
                    ←
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/podcasts"
              className="group min-h-[340px] rounded-[2.2rem] border border-[#173F37]/10 bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-black text-[#A87920]">
                AiMED PODCAST
              </div>

              <h3 className="mt-5 text-3xl font-black">
                پادکست AiMED
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#5D716D]">
                گفتگو و محتوای صوتی درباره هوش مصنوعی، فناوری، پژوهش،
                مسیر شغلی و موضوعات کاربردی دنیای امروز.
              </p>

              <div className="mt-12 inline-flex items-center gap-3 font-black text-[#98701F]">
                شنیدن پادکست‌ها
                <span className="transition group-hover:-translate-x-2">
                  ←
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
<section
  id="services"
  className="relative overflow-hidden bg-[#063F36] px-5 py-20 lg:px-8 lg:py-24"
>
  {/* subtle background */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#D7A63B]/[0.06] blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#0A574A]/[0.05] blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-4xl text-center">
      <div className="text-[11px] font-black tracking-[0.18em] text-[#A87920]">
        AiMED SOLUTIONS
      </div>

      <h2 className="mt-4 text-3xl font-black leading-[1.6] text-white md:text-5xl">
        دانش، فناوری و راهکارهای هوشمند
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-white/75 md:text-base">
        از آموزش تخصصی تا توسعه راهکارهای نرم‌افزاری، تحلیل داده و هوش
        مصنوعی؛ خدمات شرکت هوش پرداز نوین ای‌مد با تمرکز بر کاربرد واقعی،
        کیفیت و توسعه راهکارهای هوشمند ارائه می‌شوند.
      </p>

      <div className="mx-auto mt-7 h-[2px] w-16 rounded-full bg-[#D5A23B]" />
    </div>

    {/* Services Grid */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* AI */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          🤖
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          هوش مصنوعی
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Artificial Intelligence
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          طراحی و توسعه راهکارهای مبتنی بر هوش مصنوعی برای کسب‌وکارها،
          پژوهش و پروژه‌های تخصصی.
        </p>
      </article>

      {/* DATA */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          📊
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          تحلیل داده
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Data Analytics
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          پاک‌سازی، تحلیل، مصورسازی و استخراج بینش کاربردی از داده‌های
          واقعی.
        </p>
      </article>

      {/* SOFTWARE */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          💻
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          توسعه نرم‌افزار
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Software Development
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          طراحی و توسعه نرم‌افزارها و ابزارهای اختصاصی متناسب با نیاز
          هر پروژه.
        </p>
      </article>

      {/* WEB */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          🌐
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          طراحی وب‌سایت
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Web Development
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          طراحی وب‌سایت‌های شرکتی، آموزشی و اختصاصی با تمرکز بر تجربه
          کاربری، عملکرد و توسعه‌پذیری.
        </p>
      </article>

      {/* HEALTHTECH */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          🩺
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          فناوری سلامت
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Digital Health & HealthTech
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          ایده‌پردازی و توسعه راهکارهای هوشمند و داده‌محور در حوزه
          سلامت و HealthTech.
        </p>
      </article>

      {/* EDUCATION */}
      <article className="group flex min-h-[280px] flex-col items-center rounded-[2rem] border border-[#153B34]/10 bg-white p-8 text-center shadow-[0_10px_35px_rgba(20,55,48,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A23B]/60 hover:shadow-[0_18px_45px_rgba(20,55,48,0.12)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E9CE] text-2xl transition-transform duration-300 group-hover:scale-110">
          🎓
        </div>

        <h3 className="mt-6 text-xl font-black text-[#153B34]">
          آموزش تخصصی
        </h3>

        <div className="mt-2 text-[10px] font-black tracking-wide text-[#9B7021]">
          Professional Education
        </div>

        <p className="mt-5 text-sm leading-8 text-[#536D67]">
          آموزش کاربردی و پروژه‌محور هوش مصنوعی، پایتون، تحلیل داده و
          پژوهش علمی.
        </p>
      </article>

    </div>

    {/* Bottom line */}
    <div className="mt-12 flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-[#153B34]/10 bg-white/70 px-5 py-3 text-[11px] font-bold text-[#536D67]">
        <span className="h-2 w-2 rounded-full bg-[#D5A23B]" />
        AiMED — Technology • Education • Intelligent Solutions
      </div>
    </div>

  </div>
</section>

      {/* BENEFITS */}
      <section className="bg-[#EFECE3] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="WHY AiMED"
            title="چرا AiMED؟"
            description="تمرکز ما بر ایجاد تجربه‌ای کاربردی، حرفه‌ای و متناسب با نیازهای واقعی دنیای فناوری است."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="rounded-[1.8rem] border border-[#173F37]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-xs font-black text-[#B08025]">
                  {item.number}
                </div>

                <h3 className="mt-8 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#5D716D]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#032F29] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DarkHeader
            kicker="PROJECTS & SOLUTIONS"
            title="از ایده تا راهکار"
            description="آماده بررسی و توسعه پروژه‌های فناورانه، آموزشی، نرم‌افزاری و داده‌محور هستیم."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["AI", "AI Solutions"],
              ["DATA", "Data Analytics"],
              ["WEB", "Web Applications"],
              ["MED", "HealthTech"],
              ["R&D", "Research Tools"],
            ].map(([code, title]) => (
              <div
                key={title}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#DCA83C]/40 hover:bg-white/[0.07]"
              >
                <div className="text-xs font-black text-[#F1BE58]">
                  {code}
                </div>

                <div className="mt-8 font-black">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT */}
<section
  id="management"
  className="bg-[#F8F6EF] px-5 py-16 lg:px-8"
>
  <div className="mx-auto max-w-6xl">
    <div className="overflow-hidden rounded-[2rem] border border-[#153B34]/10 bg-white shadow-[0_12px_40px_rgba(18,59,52,0.07)]">
      
      <div className="grid lg:grid-cols-[1fr_2.3fr]">
        
        {/* Management title */}
        <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#063F36] p-8 text-white lg:min-h-0">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#E8AF39]/10 blur-3xl" />

          <div className="relative">
            <div className="text-[10px] font-black tracking-[0.18em] text-[#F1BE58]">
              MANAGEMENT
            </div>

            <h2 className="mt-4 text-2xl font-black md:text-3xl">
              مدیریت
            </h2>

            <div className="mt-2 text-3xl font-black text-[#F1BE58]">
              AiMED
            </div>
          </div>

          <div className="relative mt-8">
            <div className="h-px w-12 bg-[#E8AF39]" />
            <div className="mt-3 text-[8px] tracking-[0.16em] text-white/40">
              HOSH PARDAZ NOVIN AiMED
            </div>
          </div>
        </div>

        {/* Management information */}
        <div className="flex flex-col justify-center p-7 md:p-9 lg:p-10">
          
          <div className="text-[10px] font-black tracking-[0.12em] text-[#A87920]">
            FOUNDER & MANAGEMENT
          </div>

          <h3 className="mt-3 text-2xl font-black text-[#153B34] md:text-3xl">
            رستاسادات موسوی
          </h3>

          <div className="mt-1.5 text-xs font-bold text-[#A87920]">
            مدیریت مجموعه هوش پرداز نوین ای‌مد
          </div>

          <div className="my-5 h-px w-12 bg-[#D6A33C]" />

          <p className="max-w-3xl text-sm leading-8 text-[#536D67]">
            با تمرکز بر توسعه آموزش‌های تخصصی، پژوهش، فناوری و
            راهکارهای مبتنی بر هوش مصنوعی، AiMED با هدف ایجاد ارتباط
            میان دانش علمی و کاربردهای واقعی فناوری فعالیت می‌کند.
            رویکرد مجموعه بر توسعه مهارت‌های کاربردی، راهکارهای
            نوآورانه و استفاده هدفمند از فناوری‌های نوین، به‌ویژه
            در حوزه سلامت و پژوهش، استوار است.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Artificial Intelligence",
              "Education",
              "Research",
              "Data",
              "HealthTech",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#153B34]/10 bg-[#F5F2EA] px-3 py-1.5 text-[9px] font-bold text-[#536D67]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* REGISTRATION */}
      <section
        id="registration"
        className="bg-[#F8F6EF] px-5 pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0A574A] p-8 text-white md:p-14">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#DCA83C]/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="text-xs font-black text-[#F1BE58]">
                START LEARNING
              </div>

              <h2 className="mt-4 text-3xl font-black leading-relaxed md:text-5xl">
                آماده‌ای مسیر یادگیریت را شروع کنی؟
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-white/70">
                برای دریافت اطلاعات ثبت‌نام، زمان برگزاری و شرایط دوره
                موردنظر از طریق صفحه رسمی AiMED با ما در ارتباط باشید.
              </p>

              <a
                href="https://instagram.com/novinaimed"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#E8AF39] px-7 py-4 text-sm font-black text-[#06382F] transition hover:-translate-y-1 hover:bg-[#F1C25D]"
              >
                ثبت‌نام از طریق Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#EFECE3] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            kicker="FAQ"
            title="سوالات متداول"
            description="پاسخ به سوالات رایج درباره شرکت و دوره‌های آموزشی AiMED."
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#173F37]/5 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.q}</span>
                    <span className="text-xl text-[#A87920]">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-5 border-t border-[#173F37]/10 pt-5 text-sm leading-8 text-[#536D67]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section
        id="contact"
        className="bg-[#063F36] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-2">
            <div>
              <div className="text-3xl font-black">
                Ai<span className="text-[#F1BE58]">MED</span>
              </div>

              <div className="mt-2 text-xs font-bold text-[#F1BE58]">
                شرکت هوش پرداز نوین ای‌مد
              </div>

              <p className="mt-5 max-w-md text-sm leading-8 text-white/55">
                آموزش، پژوهش و توسعه راهکارهای هوشمند برای دنیایی که هر
                روز بیشتر با فناوری، داده و هوش مصنوعی شکل می‌گیرد.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-xs font-black text-[#F1BE58]">
                  ارتباط با ما
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/60">
                  <div>Instagram: @novinaimed</div>
                  <div>Email: rastamousavi79@gmail.com</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-black text-[#F1BE58]">
                  دسترسی سریع
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/60">
                  <div>
                    <a href="#company">درباره شرکت</a>
                  </div>

                  <div>
                    <a href="#courses">دوره‌ها</a>
                  </div>

                  <div>
                    <Link href="/webinars">وبینارها</Link>
                  </div>

                  <div>
                    <Link href="/podcasts">پادکست‌ها</Link>
                  </div>

                  <div>
                    <a href="#services">خدمات</a>
                  </div>

                  <div>
                    <a href="#management">مدیریت</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="flex flex-col gap-3 pt-8 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © AiMED — شرکت هوش پرداز نوین ای‌مد — تمامی حقوق محفوظ است.
            </span>

            <span>
              Artificial Intelligence • Data • HealthTech
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-black tracking-wide text-[#A87920]">
        {kicker}
      </div>

      <h2 className="mt-3 text-3xl font-black leading-relaxed text-[#173F37] md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-8 text-[#5D716D] md:text-base">
        {description}
      </p>
    </div>
  );
}

function DarkHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-black tracking-wide text-[#F1BE58]">
        {kicker}
      </div>

      <h2 className="mt-3 text-3xl font-black leading-relaxed text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-8 text-white/70 md:text-base">
        {description}
      </p>
    </div>
  );
}
