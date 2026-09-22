import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Renault Clio Yedek Parça | Jade Automotive",
  description:
    "Esenyurt Renault Clio yedek parça arayanlar için fren, ön takım, süspansiyon, triger, filtre, debriyaj ve motor parçaları. Aracınızın bilgilerini WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-renault-clio-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0ARenault%20Clio%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20%0AVarsa%20Par%C3%A7a%20Kodu%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const categories = [
  {
    icon: "🛑",
    title: "Clio Fren Parçaları",
    text: "Fren balatası, fren diski ve ilgili fren sistemi yedek parçaları.",
    href: "/blog/esenyurt-renault-clio-fren-balatasi-diski",
  },
  {
    icon: "🔧",
    title: "Clio Ön Takım Parçaları",
    text: "Rot başı, rotil, salıncak, Z rot ve ön takım bağlantı parçaları.",
    href: "/blog/esenyurt-renault-clio-on-takim-parcalari",
  },
  {
    icon: "⚙️",
    title: "Clio Triger & Devirdaim",
    text: "Triger sistemi, gergi, rulman ve devirdaim pompası seçenekleri.",
    href: "/blog/esenyurt-renault-clio-triger-seti-devirdaim",
  },
];

const otherParts = [
  "Renault Clio Filtre Seti",
  "Renault Clio Hava Filtresi",
  "Renault Clio Yağ Filtresi",
  "Renault Clio Polen Filtresi",
  "Renault Clio Yakıt Filtresi",
  "Renault Clio Amortisör",
  "Renault Clio Debriyaj Seti",
  "Renault Clio Motor Parçaları",
  "Renault Clio Süspansiyon Parçaları",
];

const faq = [
  {
    q: "Esenyurt Renault Clio yedek parça nereden alınır?",
    a: "Esenyurt ve çevresinde Renault Clio yedek parça arıyorsanız araç yılını, motor bilgisini ve ihtiyacınız olan parçayı Jade Automotive'e WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Renault Clio yedek parçaları her araçta aynı mı?",
    a: "Hayır. Renault Clio farklı nesil, üretim yılı, motor ve versiyonlarla üretildiği için kullanılan parçalar değişebilir. Doğru parçanın araç bilgileriyle kontrol edilmesi gerekir.",
  },
  {
    q: "Renault Clio için hangi yedek parçaları sorabilirim?",
    a: "Fren, ön takım, süspansiyon, filtre, triger, devirdaim, debriyaj ve çeşitli motor parçaları için araç bilgilerinizi gönderebilirsiniz.",
  },
  {
    q: "Clio parça kodunu bilmiyorum, yine de sorabilir miyim?",
    a: "Evet. Üretim yılı, motor ve aradığınız parçayı gönderebilirsiniz. Elinizde eski parçanın, kutunun veya referans numarasının fotoğrafı varsa WhatsApp üzerinden paylaşabilirsiniz.",
  },
  {
    q: "Renault Clio yedek parça fiyatını nasıl öğrenebilirim?",
    a: "İhtiyacınız olan parçayı ve araç bilgilerini WhatsApp üzerinden göndererek uygun ürün ve güncel fiyat seçeneklerini sorabilirsiniz.",
  },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Esenyurt Renault Clio Yedek Parça",
    description:
      "Renault Clio fren, ön takım, süspansiyon, filtre, triger, debriyaj ve motor yedek parçaları rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-renault-clio-yedek-parca",
    author: {
      "@type": "Organization",
      name: "Jade Automotive",
    },
    publisher: {
      "@type": "Organization",
      name: "Jade Automotive",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#07111d] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Renault Clio Yedek Parça</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🚗 Clio parçanı bulamadın mı? Bize sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Renault Clio{" "}
              <span className="text-cyan-300">Yedek Parça</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Esenyurt ve çevresinde Renault Clio için{" "}
              <strong className="text-white">
                fren, ön takım, filtre, süspansiyon, triger, devirdaim,
                debriyaj ve motor yedek parçaları
              </strong>{" "}
              arıyorsan araç bilgilerini gönder.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                “Clio için parçaya ihtiyacım var ama kodunu bilmiyorum.”
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Hiç sorun değil 👋 Marka/model zaten belli. Yıl + motor +
                aradığın parçayı WhatsApp'tan gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Renault Clio Yedek Parça Sor
              </a>
            </div>
          </div>
        </section>

        {/* QUICK */}
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["🚗", "Araç", "Renault Clio"],
              ["📅", "Yıl", "Üretim yılını yaz"],
              ["⚙️", "Motor", "Motor bilgisini yaz"],
              ["🔧", "Parça", "Aradığın parçayı yaz"],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-3xl">{icon}</div>
                <strong className="mt-3 block">{title}</strong>
                <span className="mt-1 block text-sm text-slate-400">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CLUSTER */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              RENAULT CLIO YEDEK PARÇALARI
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Hangi Clio parçasını arıyorsun?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Aradığın parçaya göre aşağıdaki rehberlerden devam edebilir veya
              doğrudan WhatsApp üzerinden araç bilgilerini gönderebilirsin.
            </p>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group rounded-3xl border border-white/10 bg-[#07111d] p-7 transition hover:border-cyan-400/40"
                >
                  <div className="text-4xl">{category.icon}</div>

                  <h3 className="mt-5 text-xl font-black group-hover:text-cyan-300">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {category.text}
                  </p>

                  <span className="mt-5 inline-block font-black text-cyan-300">
                    Parçaları incele →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER PARTS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">
            CLIO PARÇA ÇEŞİTLERİ
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Diğer Renault Clio yedek parçaları
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherParts.map((part) => (
              <a
                key={part}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#25D366]/40"
              >
                <strong>{part}</strong>
                <span className="text-[#58e68a]">Sor →</span>
              </a>
            ))}
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              PARÇANIN ADINI BİLMİYOR MUSUN?
            </span>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
              Ustanın söylediğini veya elindeki parçayı bize gönder
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="text-4xl">📝</div>
                <h3 className="mt-4 text-xl font-black">
                  Parça adını gönder
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Ustan sana parça adını söylediyse direkt WhatsApp'tan yaz.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="text-4xl">🔢</div>
                <h3 className="mt-4 text-xl font-black">
                  Parça kodunu gönder
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Elinde referans veya parça kodu varsa mesajına ekle.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="text-4xl">📸</div>
                <h3 className="mt-4 text-xl font-black">
                  Fotoğrafını gönder
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Eski parçanın veya kutusunun fotoğrafını WhatsApp'tan
                  paylaşabilirsin.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Clio parçanı tek tek internette aramakla uğraşma.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Yıl + motor + aradığın parçayı gönder. Elinde fotoğraf veya
                  parça kodu varsa onu da ekleyebilirsin.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                WhatsApp'tan Parça Sor →
              </a>
            </div>
          </div>
        </section>

        {/* COMPATIBILITY */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                DOĞRU PARÇA
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Her Clio'ya aynı yedek parça olmaz
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Renault Clio farklı nesil, üretim yılı, motor ve versiyonlarla
                üretildiği için aynı isimdeki parçanın farklı seçenekleri
                bulunabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Bu nedenle yalnızca “Clio parçası” demek yerine araç yılı,
                motor ve ihtiyaç duyulan parçanın birlikte kontrol edilmesi
                daha sağlıklı olur.
              </p>
            </article>

            <aside className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
              <div className="text-4xl">💬</div>

              <h3 className="mt-4 text-2xl font-black">
                Clio yedek parça fiyatı mı arıyorsun?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Fiyat parça ve araç seçeneğine göre değişebileceği için
                ihtiyacın olan parçayı bize göndererek güncel seçenekleri
                sorabilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-4 text-center font-black text-[#04130a]"
              >
                Clio Parça Fiyatı Sor
              </a>
            </aside>
          </div>
        </section>

        {/* SEO INTERNAL */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-black">
              Renault Clio parça rehberleri
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/blog/esenyurt-renault-clio-on-takim-parcalari"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Clio Ön Takım →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Rot, rotil, salıncak ve Z rot.
                </p>
              </Link>

              <Link
                href="/blog/esenyurt-renault-clio-fren-balatasi-diski"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Clio Fren Parçaları →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fren balatası ve fren diski.
                </p>
              </Link>

              <Link
                href="/blog/esenyurt-renault-clio-triger-seti-devirdaim"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Clio Triger & Devirdaim →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Triger sistemi ve devirdaim parçaları.
                </p>
              </Link>

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parça →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Tüm araç grupları için yedek parça.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* MARKETPLACES */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-black">
            Jade Automotive online mağazaları
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Renault Clio parçanı online mağazalarda göremiyorsan doğrudan
            WhatsApp üzerinden sorabilirsin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 font-bold"
            >
              Trendyol
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 font-bold"
            >
              Hepsiburada
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 font-black text-[#04130a]"
            >
              Clio Yedek Parça Sor
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <span className="font-black text-cyan-300">
              RENAULT CLIO YEDEK PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black">
              Sık Sorulan Sorular
            </h2>

            <div className="mt-8 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-black">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="px-5 py-16 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🚗</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Renault Clio için hangi parçayı arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Yıl + motor + parça adını gönder. Uygun parçayı bulmana
              yardımcı olalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Renault Clio Yedek Parça Sor
            </a>
          </div>
        </section>

        <div className="h-20 md:hidden" />
      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Renault Clio yedek parça sor"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M19.11 17.47c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          <path d="M16.03 3C8.85 3 3.02 8.81 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.61h.01c7.17 0 13-5.82 13-12.98C29.03 8.81 23.2 3 16.03 3zm0 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.77 10.77 0 0 1-1.66-5.74c0-5.96 4.86-10.8 10.82-10.8 5.96 0 10.81 4.84 10.81 10.8 0 5.96-4.86 10.69-10.92 10.69z" />
        </svg>
      </a>

      {/* MOBILE STICKY */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 Clio Yedek Parça Sor
        </a>
      </div>
    </>
  );
}
