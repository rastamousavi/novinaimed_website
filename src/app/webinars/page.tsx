import type { Metadata } from "next";
import Link from "next/link";
import { webinars } from "@/data/webinars";

export const metadata: Metadata = {
  title: "وبینارهای هوش مصنوعی و فناوری | AiMED",
  description:
    "وبینارهای تخصصی و کاربردی AiMED در زمینه هوش مصنوعی، ابزارهای AI، فناوری، آموزش و مهارت‌های آینده.",
  alternates: {
    canonical: "https://novinaimed.ir/webinars",
  },
  openGraph: {
    title: "وبینارهای AiMED | هوش مصنوعی و فناوری",
    description:
      "وبینارهای آموزشی و کاربردی AiMED درباره هوش مصنوعی، فناوری و مهارت‌های آینده.",
    url: "https://novinaimed.ir/webinars",
    siteName: "AiMED",
    locale: "fa_IR",
    type: "website",
  },
};

export default function WebinarsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F4EC] text-[#183F38]"
    >
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0D493F] via-[#176554] to-[#27846B] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 inline-flex rounded-full border border-[#E8B84A]/50 bg-white/5 px-4 py-2 text-sm text-[#F5C85A]">
            AiMED Webinars
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.5] md:text-6xl">
            وبینارهای
            <span className="text-[#F4BD32]"> هوش مصنوعی </span>
            و فناوری
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-9 text-white/80 md:text-lg">
            مجموعه‌ای از وبینارهای آموزشی و کاربردی برای شناخت بهتر هوش
            مصنوعی، ابزارهای جدید، فناوری و مهارت‌هایی که آینده تحصیل و بازار
            کار را شکل می‌دهند.
          </p>
        </div>
      </section>

      {/* WEBINARS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold text-[#B68620]">
              WEBINARS
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              وبینارهای AiMED
            </h2>

            <p className="mt-3 text-[#60736E]">
              وبینارهای جدید و برنامه‌های آموزشی AiMED را اینجا دنبال کنید.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {webinars.map((webinar) => (
              <article
                key={webinar.slug}
                className="overflow-hidden rounded-[30px] border border-[#D9D5C8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* TOP */}
                <div className="relative bg-gradient-to-br from-[#0D493F] to-[#23745F] p-7 text-white">
                  <div className="mb-8 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs">
                      وبینار AiMED
                    </span>

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-bold ${
                        webinar.status === "upcoming"
                          ? "bg-[#F4BD32] text-[#173F38]"
                          : "bg-white/15 text-white"
                      }`}
                    >
                      {webinar.status === "upcoming"
                        ? "ثبت‌نام به‌زودی"
                        : "برگزار شده"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black leading-10">
                    {webinar.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/65">
                    {webinar.shortTitle}
                  </p>
                </div>

                {/* BODY */}
                <div className="p-7">
                  <p className="min-h-[90px] leading-8 text-[#60736E]">
                    {webinar.description}
                  </p>

                  <div className="my-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#F4F1E8] p-4">
                      <span className="block text-xs text-[#7A8985]">
                        مدت
                      </span>
                      <strong className="mt-1 block">
                        {webinar.duration}
                      </strong>
                    </div>

                    <div className="rounded-2xl bg-[#F4F1E8] p-4">
                      <span className="block text-xs text-[#7A8985]">
                        تاریخ
                      </span>
                      <strong className="mt-1 block">
                        {webinar.date}
                      </strong>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-[#7A8985]">
                      مدرس
                    </span>
                    <p className="mt-1 font-bold">
                      {webinar.instructor}
                    </p>
                  </div>

                  <Link
                    href={`/webinars/${webinar.slug}`}
                    className="flex w-full items-center justify-center rounded-2xl bg-[#F4BD32] px-5 py-4 font-black text-[#173F38] transition hover:bg-[#E4AB20]"
                  >
                    مشاهده جزئیات وبینار
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#123F37] px-7 py-10 text-center text-white md:px-12 md:py-14">
          <p className="text-sm font-bold text-[#F4BD32]">
            AiMED Education
          </p>

          <h2 className="mt-3 text-2xl font-black md:text-4xl">
            یادگیری برای آینده‌ای هوشمندتر
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
            علاوه بر وبینارها، می‌توانید دوره‌های تخصصی و کاربردی AiMED را
            نیز مشاهده کنید.
          </p>

          <Link
            href="/#courses"
            className="mt-7 inline-flex rounded-2xl border border-[#F4BD32] px-7 py-3 font-bold text-[#F4BD32] transition hover:bg-[#F4BD32] hover:text-[#173F38]"
          >
            مشاهده دوره‌های آموزشی
          </Link>
        </div>
      </section>
    </main>
  );
}