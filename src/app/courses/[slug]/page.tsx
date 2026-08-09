import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  courses,
  getCourse,
} from "../../../data/courses";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC ROUTES
========================================================= */

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const course = getCourse(slug);

  if (!course) {
    return {};
  }

  const courseUrl = `https://novinaimed.ir/courses/${course.slug}`;

  return {
    title: course.seoTitle,

    description: course.description,

    keywords: [
      course.title,
      course.seoTitle,
      "دوره آموزشی",
      "دوره آنلاین",
      "آموزش آنلاین",
      "آموزش هوش مصنوعی",
      "دوره هوش مصنوعی",
      "AiMED",
      "Novin AiMED",
      "هوش پرداز نوین ای مد",
    ],

    alternates: {
      canonical: courseUrl,
    },

    openGraph: {
      type: "website",
      locale: "fa_IR",
      url: courseUrl,
      title: course.seoTitle,
      description: course.description,
      siteName: "AiMED",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

/* =========================================================
   COURSE PAGE
========================================================= */

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  const courseUrl = `https://novinaimed.ir/courses/${course.slug}`;

  /* =======================================================
     STRUCTURED DATA - COURSE
  ======================================================= */

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",

    name: course.title,

    description: course.description,

    url: courseUrl,

    inLanguage: "fa",

    provider: {
      "@type": "Organization",
      name: "AiMED",
      alternateName: "هوش پرداز نوین ای مد",
      url: "https://novinaimed.ir",
    },

    offers: {
      "@type": "Offer",
      price: String(course.price).replace(/[^\d]/g, ""),
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      url: courseUrl,
    },
  };

  /* =======================================================
     STRUCTURED DATA - FAQ
  ======================================================= */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "این دوره برای چه افرادی مناسب است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: course.audience,
        },
      },

      {
        "@type": "Question",
        name: "مدت دوره چقدر است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: `مدت یا ساختار دوره: ${course.duration}`,
        },
      },

      {
        "@type": "Question",
        name: "نحوه ثبت‌نام در دوره چگونه است؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "برای دریافت اطلاعات ثبت‌نام و پرداخت می‌توانید از طریق اینستاگرام AiMED پیام ارسال کنید.",
        },
      },
    ],
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F8F6EF] text-[#173F37]"
    >
      {/* ===================================================
          STRUCTURED DATA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="border-b border-white/10 bg-[#063F36] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            Ai
            <span className="text-[#E9AE32]">
              MED
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm font-bold text-white/65 transition hover:text-[#E9AE32]"
          >
            بازگشت به صفحه اصلی
          </Link>

        </div>
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-[#063F36] px-5 py-20 text-white lg:px-8 lg:py-28">

        {/* Decorative backgrounds */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#E9AE32]/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="inline-flex rounded-full border border-[#E9AE32]/30 bg-[#E9AE32]/10 px-4 py-2 text-xs font-black text-[#F1BE58]">
            AiMED Academy
          </div>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.6] md:text-5xl lg:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-9 text-white/65 md:text-lg">
            {course.shortDescription}
          </p>

          {/* COURSE INFO */}

          <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">

            <InfoCard
              label="مدت دوره"
              value={course.duration}
            />

            <InfoCard
              label="سطح دوره"
              value={course.level}
            />

            <InfoCard
              label="مناسب برای"
              value={course.audience}
            />

          </div>

        </div>
      </section>

      {/* ===================================================
          COURSE CONTENT
      =================================================== */}

      <section className="px-5 py-16 lg:px-8 lg:py-24">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.25fr_.75fr]">

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <article className="rounded-[2rem] border border-[#173F37]/10 bg-white p-7 shadow-sm md:p-10">

            <div className="text-xs font-black tracking-wider text-[#A77920]">
              ABOUT COURSE
            </div>

            <h2 className="mt-3 text-3xl font-black">
              درباره این دوره
            </h2>

            <p className="mt-6 text-base leading-9 text-[#536D67]">
              {course.description}
            </p>

            {/* DIVIDER */}

            <div className="my-10 h-px bg-[#173F37]/10" />

            {/* TOPICS */}

            <div className="text-xs font-black tracking-wider text-[#A77920]">
              COURSE CONTENT
            </div>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              سرفصل‌های دوره
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#536D67]">
              محتوای این دوره به‌صورت مرحله‌به‌مرحله طراحی شده است تا
              مطالب را از مفاهیم پایه تا کاربرد عملی دنبال کنید.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">

              {course.topics.map((topic, index) => (

                <div
                  key={topic}
                  className="group flex items-start gap-4 rounded-2xl border border-[#173F37]/5 bg-[#F8F6EF] p-5 transition hover:border-[#DCA83C]/30 hover:bg-[#F4F0E5]"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B594B] text-xs font-black text-[#F1BE58]">
                    {index + 1}
                  </div>

                  <span className="pt-1 text-sm font-bold leading-7 text-[#34544D]">
                    {topic}
                  </span>

                </div>

              ))}

            </div>

          </article>

          {/* =================================================
              PRICE / REGISTRATION
          ================================================= */}

          <aside>

            <div className="sticky top-6 overflow-hidden rounded-[2rem] bg-[#0B594B] p-7 text-white shadow-xl">

              <div className="text-xs font-bold text-white/50">
                شهریه دوره
              </div>

              {course.oldPrice && (

                <div className="mt-3 text-sm text-white/40 line-through">
                  {course.oldPrice} تومان
                </div>

              )}

              <div className="mt-2">

                <span className="text-3xl font-black text-[#F1BE58] md:text-4xl">
                  {course.price}
                </span>

                <span className="mr-2 text-xs font-normal text-white/50">
                  تومان
                </span>

              </div>

              {/* GIFT */}

              {course.gift && (

                <div className="mt-6 rounded-2xl border border-[#E9AE32]/30 bg-[#E9AE32]/10 p-4 text-sm font-black leading-7 text-[#F1BE58]">
                  🎁 {course.gift}
                </div>

              )}

              {/* BENEFITS */}

              <div className="mt-7 space-y-4 border-t border-white/10 pt-6">

                <Benefit>
                  آموزش ساختاریافته و کاربردی
                </Benefit>

                <Benefit>
                  مناسب برای یادگیری مرحله‌به‌مرحله
                </Benefit>

                <Benefit>
                  تمرکز بر کاربرد عملی مطالب
                </Benefit>

              </div>

              {/* REGISTER */}

              <div className="mt-7 border-t border-white/10 pt-6">

                <h3 className="text-lg font-black">
                  ثبت‌نام دوره
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  برای دریافت اطلاعات ثبت‌نام و پرداخت،
                  از طریق صفحه رسمی AiMED در اینستاگرام پیام دهید.
                </p>

                <a
                  href="https://instagram.com/novinaimed"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-full bg-[#E9AE32] px-6 py-4 text-center font-black text-[#06362F] transition hover:bg-[#F1BE58]"
                >
                  ثبت‌نام از طریق دایرکت
                </a>

                <Link
                  href="/"
                  className="mt-3 block rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  مشاهده سایر دوره‌ها
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* ===================================================
          WHY AIMED
      =================================================== */}

      <section className="bg-white px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="text-xs font-black tracking-wider text-[#A77920]">
              AiMED ACADEMY
            </div>

            <h2 className="mt-3 text-3xl font-black">
              چرا دوره‌های AiMED؟
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#536D67]">
              دوره‌های آموزشی AiMED با تمرکز بر یادگیری کاربردی،
              مهارت‌های قابل استفاده و آموزش مرحله‌به‌مرحله طراحی می‌شوند.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <FeatureCard
              number="01"
              title="آموزش کاربردی"
              description="تمرکز دوره‌ها بر مهارت‌هایی است که بتوانید در پروژه‌ها و فعالیت‌های واقعی از آن‌ها استفاده کنید."
            />

            <FeatureCard
              number="02"
              title="مسیر یادگیری مشخص"
              description="مطالب به‌صورت ساختاریافته و مرحله‌به‌مرحله ارائه می‌شوند تا مسیر یادگیری واضح باشد."
            />

            <FeatureCard
              number="03"
              title="محتوای به‌روز"
              description="محتوای آموزشی متناسب با ابزارها، فناوری‌ها و نیازهای روز طراحی و به‌روزرسانی می‌شود."
            />

          </div>

        </div>

      </section>

      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="bg-[#F1EEE4] px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="text-xs font-black tracking-wider text-[#A77920]">
            COURSE FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black">
            سوالات رایج درباره دوره
          </h2>

          <p className="mt-4 text-sm leading-8 text-[#536D67]">
            پاسخ چند سؤال متداول درباره این دوره را در ادامه مشاهده می‌کنید.
          </p>

          <div className="mt-8 space-y-4">

            <details className="group rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer list-none font-black">
                این دوره برای چه افرادی مناسب است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                {course.audience}
              </p>

            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer list-none font-black">
                مدت دوره چقدر است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                مدت یا ساختار دوره: {course.duration}
              </p>

            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer list-none font-black">
                سطح این دوره چیست؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                سطح دوره: {course.level}
              </p>

            </details>

            <details className="group rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer list-none font-black">
                نحوه ثبت‌نام چگونه است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                برای دریافت اطلاعات ثبت‌نام و پرداخت،
                از طریق صفحه رسمی @novinaimed در اینستاگرام پیام دهید.
              </p>

            </details>

          </div>

        </div>

      </section>

      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="bg-[#063F36] px-5 py-20 text-white lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-xs font-black tracking-wider text-[#F1BE58]">
            START LEARNING
          </div>

          <h2 className="mt-4 text-3xl font-black leading-[1.6] md:text-4xl">
            آماده‌ای یادگیری را شروع کنی؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/60">
            برای دریافت اطلاعات کامل دوره، شرایط ثبت‌نام و پرداخت
            با AiMED در ارتباط باشید.
          </p>

          <a
            href="https://instagram.com/novinaimed"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#E9AE32] px-8 py-4 font-black text-[#06362F] transition hover:bg-[#F1BE58]"
          >
            ثبت‌نام و دریافت اطلاعات
          </a>

        </div>

      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#02241F] px-5 py-10 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>

            <Link
              href="/"
              className="text-2xl font-black"
            >
              Ai
              <span className="text-[#E9AE32]">
                MED
              </span>
            </Link>

            <p className="mt-2 text-xs text-white/40">
              Intelligent Healthcare & AI
            </p>

          </div>

          <div className="text-sm text-white/45">
            © 2026 AiMED — هوش پرداز نوین ای مد
          </div>

        </div>

      </footer>

    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">

      <div className="text-xs text-white/40">
        {label}
      </div>

      <div className="mt-2 text-sm font-black leading-6">
        {value}
      </div>

    </div>
  );
}

function Benefit({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-sm leading-7 text-white/70">

      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9AE32]" />

      <span>
        {children}
      </span>

    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#173F37]/10 bg-[#F8F6EF] p-7">

      <div className="text-sm font-black text-[#DCA83C]">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-black">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-8 text-[#536D67]">
        {description}
      </p>

    </div>
  );
}