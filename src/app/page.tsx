import Image from "next/image";

const services = [
  {
    title: "آموزش تخصصی هوش مصنوعی",
    text: "دوره‌های کاربردی و پروژه‌محور برای یادگیری هوش مصنوعی، ابزارهای AI و مهارت‌های آینده.",
    icon: "✦",
  },
  {
    title: "توسعه نرم‌افزار و AI",
    text: "طراحی و توسعه راهکارهای نرم‌افزاری هوشمند متناسب با نیاز کسب‌وکارها و پروژه‌ها.",
    icon: "⌘",
  },
  {
    title: "هوش مصنوعی در سلامت",
    text: "طراحی راهکارهای هوشمند برای تحلیل داده، پژوهش و کاربردهای نوآورانه حوزه سلامت.",
    icon: "+",
  },
  {
    title: "طراحی وب‌سایت",
    text: "طراحی وب‌سایت‌های مدرن، سریع و حرفه‌ای با تمرکز بر تجربه کاربری و هویت برند.",
    icon: "◈",
  },
];

const courses = [
  {
    category: "Artificial Intelligence",
    title: "هوش مصنوعی کاربردی",
    text: "از مبانی هوش مصنوعی تا کار با ابزارهای جدید و استفاده عملی در زندگی و کسب‌وکار.",
  },
  {
    category: "Scientific Research",
    title: "مقاله‌نویسی علمی",
    text: "از انتخاب مسئله پژوهشی تا نگارش مقاله، انتخاب ژورنال و آماده‌سازی برای انتشار.",
  },
  {
    category: "Python & Data",
    title: "تحلیل داده با پایتون",
    text: "آموزش پروژه‌محور تحلیل داده با رویکرد علم داده و کاربردهای واقعی.",
  },
];

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#063b34] text-white"
    >
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/aimed-logo.png"
              alt="AiMED Logo"
              width={62}
              height={62}
              className="rounded-full object-cover"
              priority
            />

            <div className="hidden sm:block">
              <div className="text-xl font-bold tracking-wide text-[#e9b64d]">
                AiMED
              </div>

              <div className="text-[9px] tracking-[0.18em] text-white/60">
                INTELLIGENT HEALTHCARE & AI
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#home" className="transition hover:text-[#e9b64d]">
              خانه
            </a>

            <a href="#services" className="transition hover:text-[#e9b64d]">
              خدمات
            </a>

            <a href="#courses" className="transition hover:text-[#e9b64d]">
              دوره‌ها
            </a>

            <a href="#about" className="transition hover:text-[#e9b64d]">
              درباره ما
            </a>

            <a href="#contact" className="transition hover:text-[#e9b64d]">
              تماس با ما
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#e9ad35] px-5 py-2.5 text-sm font-semibold text-[#063b34] transition hover:scale-105 hover:bg-[#f3be4d]"
          >
            شروع همکاری
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8"
      >
        {/* HERO TEXT */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e9b64d]/50 bg-[#e9b64d]/10 px-4 py-2 text-sm text-[#f0bd54]">
            <span className="h-2 w-2 rounded-full bg-[#e9b64d]" />
            AI for a Smarter Tomorrow
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.45] md:text-6xl">
            فناوری هوشمند
            <br />
            برای ساختن
            <br />
            <span className="text-[#e9ad35]">آینده‌ای بهتر</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-9 text-white/70 md:text-lg">
            هوش پرداز نوین ای‌مد با تمرکز بر هوش مصنوعی، آموزش تخصصی،
            توسعه نرم‌افزار، طراحی وب‌سایت و راهکارهای هوشمند حوزه سلامت،
            فناوری را به راهکارهای واقعی تبدیل می‌کند.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-[#e9ad35] px-7 py-3 font-bold text-[#063b34] transition hover:scale-105"
            >
              مشاهده خدمات
            </a>

            <a
              href="#courses"
              className="rounded-full border border-white/30 px-7 py-3 font-medium transition hover:border-[#e9b64d] hover:text-[#e9b64d]"
            >
              مشاهده دوره‌ها
            </a>
          </div>
        </div>

        {/* HERO LOGO */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[430px] w-[430px] rounded-full border border-[#dca63c]/15" />
          <div className="absolute h-[350px] w-[350px] rounded-full border border-[#dca63c]/20" />
          <div className="absolute h-[285px] w-[285px] rounded-full border border-[#dca63c]/30" />

          <div className="relative flex h-[260px] w-[260px] items-center justify-center overflow-hidden rounded-full border border-[#e9b64d]/60 bg-[#07443a] shadow-2xl shadow-black/30">
            <Image
              src="/aimed-logo.png"
              alt="AiMED Intelligent Healthcare and AI"
              width={250}
              height={250}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-white/10 bg-[#052f2a] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold text-[#e9b64d]">
              خدمات AiMED
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              از ایده تا راهکار هوشمند
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/60">
              ترکیبی از آموزش، فناوری و توسعه برای ساخت راهکارهایی که در دنیای
              واقعی قابل استفاده باشند.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#e9b64d]/50 hover:bg-white/[0.06]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e9b64d]/40 bg-[#e9b64d]/10 text-xl font-bold text-[#e9b64d]">
                  {service.icon}
                </div>

                <h3 className="mb-4 text-lg font-bold">{service.title}</h3>

                <p className="text-sm leading-7 text-white/60">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#e9b64d]">
              درباره AiMED
            </p>

            <h2 className="text-3xl font-black leading-relaxed md:text-4xl">
              فناوری زمانی ارزشمند است
              <br />
              که یک مسئله واقعی را حل کند.
            </h2>

            <p className="mt-7 max-w-xl leading-9 text-white/65">
              AiMED با هدف توسعه راهکارهای هوشمند، آموزش مهارت‌های آینده و
              ایجاد ارتباط میان هوش مصنوعی، نرم‌افزار و حوزه سلامت شکل گرفته
              است.
            </p>

            <div className="mt-8 rounded-2xl border-r-2 border-[#e9b64d] bg-white/[0.035] p-5">
              <span className="text-sm text-white/50">مدیریت</span>

              <div className="mt-1 text-lg font-bold text-white">
                دکتر رستا سادات موسوی
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#e9b64d]/25 bg-[#07443a] p-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-black/10 p-6">
                  <div className="text-3xl font-black text-[#e9b64d]">AI</div>
                  <div className="mt-2 text-sm text-white/60">
                    هوش مصنوعی کاربردی
                  </div>
                </div>

                <div className="rounded-2xl bg-black/10 p-6">
                  <div className="text-3xl font-black text-[#e9b64d]">
                    Data
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    تحلیل و علم داده
                  </div>
                </div>

                <div className="rounded-2xl bg-black/10 p-6">
                  <div className="text-3xl font-black text-[#e9b64d]">
                    Health
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    فناوری هوشمند سلامت
                  </div>
                </div>

                <div className="rounded-2xl bg-black/10 p-6">
                  <div className="text-3xl font-black text-[#e9b64d]">Web</div>
                  <div className="mt-2 text-sm text-white/60">
                    طراحی و توسعه وب
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        className="border-y border-white/10 bg-[#052f2a] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold text-[#e9b64d]">
              آموزش‌های تخصصی
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              دوره‌های AiMED
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#e9b64d]/40"
              >
                <div className="mb-8 text-xs font-semibold tracking-wider text-[#e9b64d]">
                  {course.category}
                </div>

                <h3 className="text-xl font-bold">{course.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {course.text}
                </p>

                <button className="mt-8 text-sm font-semibold text-[#e9b64d]">
                  مشاهده جزئیات ←
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

  {/* CONTACT */}
<section id="contact" className="px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="overflow-hidden rounded-[2rem] border border-[#e9b64d]/30 bg-gradient-to-l from-[#0a4a3f] to-[#07352f] p-9 md:p-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#e9b64d]">
            ارتباط با AiMED
          </p>

          <h2 className="text-3xl font-black leading-relaxed md:text-4xl">
            برای همکاری و پروژه
            <br />
            با ما در ارتباط باشید.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-white/60">
            برای پروژه‌های هوش مصنوعی، توسعه نرم‌افزار، طراحی وب‌سایت،
            آموزش و راهکارهای هوشمند می‌توانید از طریق ایمیل یا اینستاگرام
            با AiMED در ارتباط باشید.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <div className="text-white/60">
              ایمیل:
              <span className="mr-2 text-white">
                rastamousavi79@gmail.com
              </span>
            </div>

            <div className="text-white/60">
              اینستاگرام:
              <span className="mr-2 text-white">
                @novinaimed
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="mailto:rastamousavi79@gmail.com"
            className="w-full max-w-sm rounded-full bg-[#e9ad35] px-7 py-4 text-center font-bold text-[#063b34] transition hover:scale-[1.02]"
          >
            ارسال ایمیل
          </a>

          <a
            href="https://instagram.com/novinaimed"
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-sm rounded-full border border-white/25 px-7 py-4 text-center transition hover:border-[#e9b64d] hover:text-[#e9b64d]"
          >
            Instagram @novinaimed
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/50 md:flex-row">
          <div>
            © 2026 AiMED — هوش پرداز نوین ای‌مد
            <span className="mx-2 text-white/20">|</span>
            <span className="text-white/65">
              مدیریت: دکتر رستا سادات موسوی
            </span>
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