export default function Home() {
  const services = [
    {
      icon: "🎓",
      title: "آموزش تخصصی",
      text: "دوره‌های کاربردی هوش مصنوعی، برنامه‌نویسی، تحلیل داده و مهارت‌های پژوهشی با رویکرد پروژه‌محور.",
    },
    {
      icon: "🧠",
      title: "مشاوره هوش مصنوعی",
      text: "تحلیل مسئله و طراحی راهکارهای هوشمند برای پژوهشگران، استارتاپ‌ها و کسب‌وکارها.",
    },
    {
      icon: "💻",
      title: "توسعه نرم‌افزار",
      text: "طراحی و توسعه نرم‌افزارهای اختصاصی، سیستم‌های هوشمند و محصولات مبتنی بر AI.",
    },
    {
      icon: "🌐",
      title: "طراحی و توسعه وب‌سایت",
      text: "طراحی وب‌سایت‌های مدرن، سریع و ریسپانسیو برای شرکت‌ها، برندها، مراکز آموزشی و کسب‌وکارها.",
    },
    {
      icon: "♡",
      title: "هوش مصنوعی در سلامت",
      text: "طراحی و توسعه راهکارهای نوآورانه در تقاطع هوش مصنوعی، داده، فناوری و حوزه سلامت.",
    },
  ];

  const courses = [
    {
      number: "01",
      title: "هوش مصنوعی کاربردی",
      text: "از مفاهیم پایه تا استفاده عملی از ابزارهای هوش مصنوعی",
    },
    {
      number: "02",
      title: "مقاله‌نویسی علمی",
      text: "از شکل‌گیری ایده تا نگارش، انتخاب ژورنال و Submission",
    },
    {
      number: "03",
      title: "تحلیل داده با پایتون",
      text: "آموزش پروژه‌محور تحلیل داده و علم داده",
    },
    {
      number: "04",
      title: "ابزارهای هوش مصنوعی",
      text: "AI برای پژوهش، کسب‌وکار، تولید محتوا و افزایش بهره‌وری",
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#061f1a] text-white selection:bg-[#d5aa55] selection:text-[#061f1a]"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061f1a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5aa55] bg-[#0b352c] text-xl font-black text-[#d5aa55]">
              A
            </div>

            <div>
              <div className="text-xl font-black tracking-wide">
                Ai<span className="text-[#d5aa55]">MED</span>
              </div>

              <div className="text-[9px] tracking-[0.18em] text-white/45">
                INTELLIGENT HEALTHCARE & AI
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#home" className="transition hover:text-[#d5aa55]">
              خانه
            </a>
            <a href="#services" className="transition hover:text-[#d5aa55]">
              خدمات
            </a>
            <a href="#courses" className="transition hover:text-[#d5aa55]">
              دوره‌ها
            </a>
            <a href="#about" className="transition hover:text-[#d5aa55]">
              درباره ما
            </a>
            <a href="#contact" className="transition hover:text-[#d5aa55]">
              تماس با ما
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#d5aa55] px-5 py-2.5 text-sm font-bold text-[#06231d] transition hover:scale-105"
          >
            شروع همکاری
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#0f6b58]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#d5aa55]/10 blur-3xl" />

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d5aa55]/30 bg-[#d5aa55]/10 px-4 py-2 text-sm text-[#e8c77f]">
              <span className="h-2 w-2 rounded-full bg-[#d5aa55]" />
              AI for a Smarter Tomorrow
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl">
              فناوری هوشمند
              <br />
              برای ساختن
              <br />
              <span className="text-[#d5aa55]">آینده‌ای بهتر</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              هوش پرداز نوین ای‌مد با تمرکز بر هوش مصنوعی، آموزش تخصصی،
              توسعه نرم‌افزار، طراحی وب‌سایت و راهکارهای هوشمند حوزه سلامت،
              فناوری را به راهکارهای واقعی تبدیل می‌کند.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-[#d5aa55] px-7 py-3.5 font-bold text-[#06231d] transition hover:-translate-y-1"
              >
                مشاهده خدمات
              </a>

              <a
                href="#courses"
                className="rounded-full border border-white/20 px-7 py-3.5 transition hover:border-[#d5aa55] hover:text-[#d5aa55]"
              >
                مشاهده دوره‌ها
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[460px] w-full max-w-lg items-center justify-center">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#d5aa55]/10" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#d5aa55]/20" />
            <div className="absolute h-[230px] w-[230px] rounded-full bg-[#0e4035] blur-xl" />

            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#d5aa55] bg-gradient-to-br from-[#0c493c] to-[#061f1a] shadow-2xl">
              <div className="text-center">
                <div className="text-6xl font-black">
                  Ai<span className="text-[#d5aa55]">MED</span>
                </div>

                <div className="mt-3 text-[10px] tracking-[0.22em] text-white/45">
                  INTELLIGENT SOLUTIONS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <span className="text-sm font-bold text-[#d5aa55]">
            خدمات AiMED
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            از ایده تا یک راهکار واقعی
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-white/50">
            مجموعه‌ای از خدمات تخصصی در حوزه فناوری، هوش مصنوعی، آموزش و
            توسعه محصولات دیجیتال.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#d5aa55]/50 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d5aa55]/30 bg-[#d5aa55]/10 text-2xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-[#d5aa55]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* WEB DESIGN */}
      <section className="border-y border-white/10 bg-[#082820]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="text-sm font-bold text-[#d5aa55]">
              Web Development
            </span>

            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              وب‌سایت فقط یک صفحه اینترنتی نیست؛
              <br />
              <span className="text-[#d5aa55]">
                ویترین دیجیتال برند شماست.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/55">
              در AiMED وب‌سایت‌هایی مدرن، سریع و متناسب با هویت برند طراحی
              می‌کنیم؛ از سایت شرکتی و آموزشی تا صفحات معرفی خدمات و محصولات
              دیجیتال.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/65 sm:grid-cols-2">
              <div>✓ طراحی اختصاصی UI/UX</div>
              <div>✓ Responsive Design</div>
              <div>✓ بهینه برای موبایل</div>
              <div>✓ سرعت و عملکرد بالا</div>
              <div>✓ SEO Friendly</div>
              <div>✓ قابلیت توسعه در آینده</div>
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-full bg-[#d5aa55] px-7 py-3.5 font-bold text-[#06231d] transition hover:-translate-y-1"
            >
              درخواست طراحی سایت
            </a>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#d5aa55]/20 bg-[#061f1a] p-4 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-[#d5aa55]" />

                <div className="mr-5 flex-1 rounded-full bg-white/5 px-4 py-2 text-left text-xs text-white/30">
                  www.yourbrand.com
                </div>
              </div>

              <div className="p-6">
                <div className="h-5 w-28 rounded bg-[#d5aa55]/70" />
                <div className="mt-8 h-8 w-3/4 rounded bg-white/15" />
                <div className="mt-3 h-8 w-1/2 rounded bg-white/10" />

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-28 rounded-2xl bg-[#0b392f]" />
                  <div className="h-28 rounded-2xl bg-[#0b392f]" />
                  <div className="h-28 rounded-2xl bg-[#0b392f]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-sm font-bold text-[#d5aa55]">
              AiMED Academy
            </span>

            <h2 className="mt-4 text-3xl font-black leading-relaxed sm:text-4xl">
              یادگیری برای
              <br />
              ساختن یک مهارت واقعی
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-white/50">
              دوره‌های تخصصی و پروژه‌محور برای دانشجویان، پژوهشگران و افرادی
              که می‌خواهند از فناوری در دنیای واقعی استفاده کنند.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.number}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d5aa55]/40"
              >
                <div className="text-sm font-black text-[#d5aa55]">
                  {course.number}
                </div>

                <h3 className="mt-7 text-lg font-bold">{course.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {course.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#d5aa55]/20 bg-gradient-to-l from-[#0b392f] to-[#071f1a] p-8 sm:p-12 lg:p-16">
          <span className="text-sm font-bold text-[#d5aa55]">
            درباره AiMED
          </span>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            هوش پرداز نوین ای‌مد
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-9 text-white/60">
            AiMED مجموعه‌ای فناورانه با تمرکز بر هوش مصنوعی، آموزش تخصصی،
            توسعه نرم‌افزار، طراحی وب‌سایت و فناوری سلامت است. هدف ما تبدیل
            دانش و فناوری‌های نوین به راهکارهایی قابل استفاده برای افراد،
            پژوهشگران، سازمان‌ها و کسب‌وکارهاست.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[#d5aa55]/20 bg-white/[0.04] px-5 py-4">
            <span className="text-sm text-white/45">مدیریت:</span>
            <span className="font-bold text-[#d5aa55]">
              دکتر رستا سادات موسوی
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["AI", "هوش مصنوعی"],
              ["CODE", "توسعه نرم‌افزار"],
              ["WEB", "طراحی وب"],
              ["EDU", "آموزش تخصصی"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-xl font-black text-[#d5aa55]">
                  {title}
                </div>

                <div className="mt-2 text-sm text-white/45">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#d5aa55] px-8 py-14 text-[#05251e] sm:px-14">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
            <div>
              <span className="text-sm font-bold opacity-60">
                Let's Build Something Smart
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                برای پروژه بعدی آماده‌اید؟
              </h2>

              <p className="mt-4 max-w-2xl leading-8 opacity-70">
                برای طراحی سایت، توسعه نرم‌افزار، پروژه‌های هوش مصنوعی،
                آموزش و همکاری‌های تخصصی با AiMED در ارتباط باشید.
              </p>
            </div>

            <a
              href="mailto:info@novinaimed.ir"
              className="shrink-0 rounded-full bg-[#06231d] px-8 py-4 text-center font-bold text-white transition hover:scale-105"
            >
              ارتباط با ما
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-sm text-white/35 sm:flex-row lg:px-10">
          <div>
            © 2026 AiMED — هوش پرداز نوین ای‌مد
            <span className="mx-2 text-white/20">|</span>
            مدیریت: دکتر رستا سادات موسوی
          </div>

          <div className="flex flex-wrap gap-5">
            <span>NovinAiMed.ir</span>
            <span>@novinaimed</span>
            <span>Shiraz, Iran</span>
          </div>
        </div>
      </footer>
    </main>
  );
}