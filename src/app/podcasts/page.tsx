import type { Metadata } from "next";
import Link from "next/link";
import { podcasts } from "@/data/podcasts";

export const metadata: Metadata = {
  title: "پادکست AiMED | هوش مصنوعی، پژوهش و فناوری",
  description:
    "پادکست‌های AiMED درباره هوش مصنوعی، ابزارهای AI، پژوهش، مقاله‌نویسی، برنامه‌نویسی و مهارت‌های آینده.",
  alternates: {
    canonical: "https://novinaimed.ir/podcasts",
  },
  openGraph: {
    title: "پادکست AiMED",
    description:
      "گفت‌وگوها و محتوای صوتی AiMED درباره هوش مصنوعی، پژوهش و فناوری.",
    url: "https://novinaimed.ir/podcasts",
    siteName: "AiMED",
    locale: "fa_IR",
    type: "website",
  },
};

export default function PodcastsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F4EC] text-[#183F38]">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0D493F] via-[#176554] to-[#27846B] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="mb-5 inline-flex rounded-full border border-[#E8B84A]/50 bg-white/5 px-4 py-2 text-sm text-[#F5C85A]">
            AiMED Podcast
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.5] md:text-6xl">
            پادکست
            <span className="text-[#F4BD32]"> AiMED </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-9 text-white/80 md:text-lg">
            درباره هوش مصنوعی، پژوهش، مقاله‌نویسی، برنامه‌نویسی و فناوری
            ساده، کاربردی و علمی صحبت می‌کنیم.
          </p>

        </div>
      </section>

      {/* PODCAST LIST */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <p className="mb-2 text-sm font-bold text-[#B68620]">
              AIMED PODCAST
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              جدیدترین اپیزودها
            </h2>

            <p className="mt-3 leading-8 text-[#60736E]">
              اپیزودهای پادکست AiMED را از این بخش دنبال کنید.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {podcasts.map((podcast, index) => (
              <article
                key={podcast.slug}
                className="overflow-hidden rounded-[30px] border border-[#D9D5C8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* CARD HEADER */}
                <div className="bg-[#123F37] p-7 text-white">

                  <div className="mb-8 flex items-center justify-between">

                    <span className="rounded-full bg-[#F4BD32] px-4 py-2 text-xs font-black text-[#173F38]">
                      اپیزود {index + 1}
                    </span>

                    <span className="text-sm text-white/60">
                      AiMED Podcast
                    </span>

                  </div>

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4BD32] text-2xl text-[#173F38]">
                    ▶
                  </div>

                  <h3 className="text-2xl font-black leading-10">
                    {podcast.title}
                  </h3>

                </div>

                {/* CARD BODY */}
                <div className="p-7">

                  <p className="leading-8 text-[#60736E]">
                    {podcast.description}
                  </p>

                  <div className="my-6 flex items-center justify-between rounded-2xl bg-[#F4F1E8] p-4">

                    <div>
                      <span className="block text-xs text-[#7A8985]">
                        مدت اپیزود
                      </span>

                      <strong className="mt-1 block">
                        {podcast.duration}
                      </strong>
                    </div>

                    <span className="text-2xl">🎙️</span>

                  </div>

                  <Link
                    href={`/podcasts/${podcast.slug}`}
                    className="flex w-full items-center justify-center rounded-2xl bg-[#F4BD32] px-5 py-4 font-black text-[#173F38] transition hover:bg-[#E4AB20]"
                  >
                    مشاهده و پخش اپیزود
                  </Link>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* WEBINAR CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#123F37] px-7 py-10 text-center text-white md:px-12 md:py-14">

          <p className="text-sm font-bold text-[#F4BD32]">
            AiMED Webinars
          </p>

          <h2 className="mt-3 text-2xl font-black md:text-4xl">
            وبینارهای تخصصی AiMED
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
            برای آموزش عمیق‌تر، وبینارهای تخصصی و کاربردی AiMED را نیز
            مشاهده کنید.
          </p>

          <Link
            href="/webinars"
            className="mt-7 inline-flex rounded-2xl border border-[#F4BD32] px-7 py-3 font-bold text-[#F4BD32] transition hover:bg-[#F4BD32] hover:text-[#173F38]"
          >
            مشاهده وبینارها
          </Link>

        </div>
      </section>

    </main>
  );
}