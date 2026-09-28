import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haramidere Sanayi Sitesi Oto Parçacı | Yedek Parça Sor",
  description:
    "Haramidere Sanayi Sitesi oto parçacı arıyorsanız araç marka, model ve aradığınız parçayı WhatsApp'tan gönderin. Oto yedek parça talebinizi iletin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/haramidere-sanayi-sitesi-oto-parcaci",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AHaramidere%20Sanayi%20Sitesi%27ndeyim%2C%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const faq = [
  {
    q: "Haramidere Sanayi Sitesi'nde oto parça nasıl sorabilirim?",
    a: "Araç marka, model, yıl ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ustanın verdiği listeyi gönderebilir miyim?",
    a: "Evet. Ustanızın verdiği parça listesinin fotoğrafını WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorum, ne yapmalıyım?",
    a: "Sökülen parçanın, kutunun veya üzerindeki parça kodunun fotoğrafını gönderebilirsiniz.",
  },
  {
    q: "Telefonla parça sorabilir miyim?",
    a: "Evet. 0543 557 15 29 numaralı telefondan iletişime geçebilirsiniz.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#07111d] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#25D366]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/beylikduzu-oto-yedek-parca">
                Beylikdüzü Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Haramidere Sanayi Sitesi</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Aracın sanayide mi?
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Haramidere Sanayi Sitesi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Haramidere Sanayi Sitesi'nde aracınız için parça arıyorsanız
              ustanın istediği parçayı, listeyi veya parça fotoğrafını
              <strong className="text-white"> WhatsApp'tan gönderin.</strong>
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-9">

              <p className="text-sm font-black uppercase tracking-wider text-[#65e995]">
                USTA PARÇA MI İSTEDİ?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Listeyi çek, WhatsApp'tan gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Parçaları tek tek yazmana gerek yok. Ustanın verdiği listenin
                fotoğrafını çek. Araç marka-modelini de ekleyip gönder.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a]"
                >
                  💬 LİSTEYİ WHATSAPP'TAN GÖNDER
                </a>

                <a
                  href={phone}
                  className="rounded-2xl bg-white px-6 py-5 text-center text-lg font-black text-[#07111d]"
                >
                  ☎️ 0543 557 15 29
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* BUYER FLOW */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            HARAMİDERE SANAYİ OTO PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Elinde ne varsa gönder
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            {[
              [
                "📋",
                "Ustanın Listesi",
                "Ustanın yazdığı parça listesinin fotoğrafını gönder.",
              ],
              [
                "📸",
                "Sökülen Parça",
                "Eski parçanın veya kutusunun fotoğrafını gönder.",
              ],
              [
                "🔢",
                "Parça Kodu",
                "Parçanın üzerindeki kodu biliyorsan mesajına ekle.",
              ],
            ].map(([icon, title, text]) => (
              <a
                key={title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
              >
                <div className="text-5xl">{icon}</div>

                <h3 className="mt-5 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {text}
                </p>

                <span className="mt-5 inline-block font-black text-[#65e995]">
                  WhatsApp'tan gönder →
                </span>
              </a>
            ))}

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="max-w-4xl text-3xl font-black md:text-4xl">
              Haramidere Sanayi Sitesi'nde aracına parça mı arıyorsun?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Bakım ve mekanik parça ihtiyacınız için araç bilgilerinizi ve
              aradığınız parçayı göndererek talebinizi iletebilirsiniz.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Fren Balatası",
                "Fren Diski",
                "Filtre Seti",
                "Triger Seti",
                "Debriyaj Seti",
                "Amortisör",
                "Ön Takım",
                "Motor Parçaları",
              ].map((part) => (
                <a
                  key={part}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#07111d] p-5 transition hover:-translate-y-1 hover:border-[#25D366]/50"
                >
                  <strong>🔧 {part}</strong>

                  <span className="mt-3 block text-sm font-black text-[#65e995]">
                    Parçayı sor →
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* SANAYIDE */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/5 p-8 md:p-12">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <span className="font-black text-[#65e995]">
                  ARACIN USTADA MI?
                </span>

                <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
                  Ustaya “parçayı nereden bulacağım?” diye sorma.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                  Ustanın istediği parçaları bize gönder. Marka, model ve
                  model yılı bilgisini de mesajına ekle.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-8 py-5 text-center text-lg font-black text-[#04130a]"
              >
                💬 PARÇA LİSTESİNİ GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Bölgedeki oto parça sayfaları
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 transition hover:border-cyan-300/40"
              >
                <strong className="text-cyan-300">
                  Beylikdüzü Oto Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/blog/beykent-oto-sanayi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 transition hover:border-cyan-300/40"
              >
                <strong className="text-cyan-300">
                  Beykent Oto Sanayi Oto Parçacı →
                </strong>
              </Link>

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6 transition hover:border-cyan-300/40"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parça →
                </strong>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-16">

          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Haramidere'de parça mı arıyorsun?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Araç bilgilerini ve ustanın istediği parçayı gönder.
                  Elinde liste varsa fotoğrafını çekmen yeterli.
                </p>
              </div>

              <div className="grid gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
                >
                  💬 WHATSAPP'TAN SOR
                </a>

                <a
                  href={phone}
                  className="text-center font-black"
                >
                  ☎️ 0543 557 15 29
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 pb-28">

          <span className="font-black text-cyan-300">
            HARAMİDERE SANAYİ SİTESİ OTO PARÇACI
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
                <h3 className="text-lg font-black">
                  {item.q}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.a}
                </p>
              </article>
            ))}

          </div>
        </section>

        <div className="h-20 md:hidden" />

      </main>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">

        <a
          href={phone}
          className="rounded-2xl bg-white py-4 text-center font-black text-[#07111d]"
        >
          ☎️ ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 PARÇA SOR
        </a>

      </div>
    </>
  );
}
