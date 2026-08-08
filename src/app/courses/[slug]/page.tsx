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

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const course = getCourse(slug);

  if (!course) {
    return {};
  }

  return {
    title: course.seoTitle,

    description: course.description,

    keywords: [
      course.title,
      course.seoTitle,
      "دوره آموزشی",
      "AiMED",
      "آموزش آنلاین",
    ],

    alternates: {
      canonical: `/courses/${course.slug}`,
    },

    openGraph: {
      type: "website",
      locale: "fa_IR",

      url: `https://novinaimed.ir/courses/${course.slug}`,

      title: course.seoTitle,

      description: course.description,

      siteName: "AiMED",
    },
  };
}

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",

    "@type": "Course",

    name: course.title,

    description: course.description,

    provider: {
      "@type": "Organization",

      name: "AiMED",

      sameAs: "https://novinaimed.ir",
    },
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F8F6EF] text-[#173F37]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* HEADER */}

      <header className="border-b border-white/10 bg-[#063F36] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <Link href="/" className="text-2xl font-black">
            Ai
            <span className="text-[#E9AE32]">
              MED
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm font-bold text-white/65 hover:text-[#E9AE32]"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </header>


      {/* HERO */}

      <section className="bg-[#063F36] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="inline-flex rounded-full border border-[#E9AE32]/30 bg-[#E9AE32]/10 px-4 py-2 text-xs font-black text-[#F1BE58]">
            AiMED Academy
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.6] md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-9 text-white/65">
            {course.shortDescription}
          </p>


          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">

            <InfoCard
              label="مدت دوره"
              value={course.duration}
            />

            <InfoCard
              label="سطح"
              value={course.level}
            />

            <InfoCard
              label="مناسب برای"
              value={course.audience}
            />

          </div>
        </div>
      </section>


      {/* INTRO */}

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_.8fr]">

          <article className="rounded-[2rem] border border-[#173F37]/10 bg-white p-8 shadow-sm md:p-10">

            <div className="text-xs font-black text-[#A77920]">
              ABOUT COURSE
            </div>

            <h2 className="mt-3 text-3xl font-black">
              درباره این دوره
            </h2>

            <p className="mt-6 text-base leading-9 text-[#536D67]">
              {course.description}
            </p>


            <h2 className="mt-10 text-2xl font-black">
              سرفصل‌های دوره
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {course.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 rounded-xl bg-[#F8F6EF] p-4 text-sm leading-7"
                >

                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#DCA83C]" />

                  <span>
                    {topic}
                  </span>

                </div>
              ))}

            </div>

          </article>


          {/* PRICE */}

          <aside>

            <div className="sticky top-6 rounded-[2rem] bg-[#0B594B] p-7 text-white shadow-xl">

              <div className="text-xs text-white/50">
                شهریه دوره
              </div>

              {course.oldPrice && (
                <div className="mt-3 text-sm text-white/40 line-through">
                  {course.oldPrice} تومان
                </div>
              )}

              <div className="mt-2 text-3xl font-black text-[#F1BE58]">

                {course.price}

                <span className="mr-2 text-xs font-normal text-white/50">
                  تومان
                </span>

              </div>


              {course.gift && (
                <div className="mt-6 rounded-2xl border border-[#E9AE32]/30 bg-[#E9AE32]/10 p-4 text-sm font-black leading-7 text-[#F1BE58]">
                  🎁 {course.gift}
                </div>
              )}


              <div className="mt-7 border-t border-white/10 pt-6">

                <h3 className="font-black">
                  ثبت‌نام دوره
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">

                  برای دریافت شماره کارت و اطلاعات ثبت‌نام از طریق
                  اینستاگرام AiMED پیام دهید.

                </p>

                <a
                  href="https://instagram.com/novinaimed"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-full bg-[#E9AE32] px-6 py-4 text-center font-black text-[#06362F]"
                >
                  ثبت‌نام از طریق دایرکت
                </a>

              </div>

            </div>

          </aside>

        </div>
      </section>


      {/* FAQ SEO SECTION */}

      <section className="bg-[#F1EEE4] px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <div className="text-xs font-black text-[#A77920]">
            COURSE FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black">
            سوالات رایج درباره دوره
          </h2>


          <div className="mt-8 space-y-4">

            <details className="rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer font-black">
                این دوره برای چه افرادی مناسب است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                {course.audience}
              </p>

            </details>


            <details className="rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer font-black">
                مدت دوره چقدر است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                مدت یا ساختار دوره: {course.duration}
              </p>

            </details>


            <details className="rounded-2xl bg-white p-6 shadow-sm">

              <summary className="cursor-pointer font-black">
                نحوه ثبت‌نام چگونه است؟
              </summary>

              <p className="mt-4 leading-8 text-[#536D67]">
                برای دریافت اطلاعات پرداخت و ثبت‌نام از طریق دایرکت
                اینستاگرام @novinaimed پیام دهید.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-[#02241F] px-5 py-10 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">

          <div>

            <div className="text-2xl font-black">

              Ai

              <span className="text-[#E9AE32]">
                MED
              </span>

            </div>

            <p className="mt-2 text-xs text-white/40">
              Intelligent Healthcare & AI
            </p>

          </div>


          <div className="text-sm text-white/45">
            © 2026 AiMED — هوش پرداز نوین ای‌مد
          </div>

        </div>

      </footer>

    </main>
  );
}


function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

      <div className="text-xs text-white/40">
        {label}
      </div>

      <div className="mt-2 text-sm font-black leading-6">
        {value}
      </div>

    </div>
  );
}