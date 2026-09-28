import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evren Oto Sanayi Oto Parçacı | Esenyurt Oto Parça",
  description:
    "Evren Oto Sanayi oto parçacı arıyorsanız araç marka-modelinizi veya ustanın verdiği parça listesini WhatsApp'tan gönderin. Esenyurt oto parça talepleri.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/evren-oto-sanayi-oto-parcaci",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AEvren%20Oto%20Sanayi%27de%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const faq = [
  {
    q: "Evren Oto Sanayi'de oto parça nasıl sorabilirim?",
    a: "Araç marka, model, model yılı ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ustanın verdiği listeyi gönderebilir miyim?",
    a: "Evet. Parça listesinin fotoğrafını çekip WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorsam ne yapmalıyım?",
    a: "Sökülen parçanın, kutunun veya üzerindeki kodun fotoğrafını gönderebilirsiniz.",
  },
  {
    q: "Evren Oto Sanayi için telefonla parça sorabilir miyim?",
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
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Evren Oto Sanayi</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Evren Oto Sanayi'de parça mı arıyorsun?
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Evren Oto Sanayi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Esenyurt Evren Oto Sanayi'de aracın ustadaysa ve parça
              bekliyorsan, ihtiyacın olan parçayı tek tek aramakla uğraşma.
              <strong className="text-white">
                {" "}Ustanın listesini WhatsApp'tan gönder.
              </strong>
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-9">

              <p className="font-black text-[#65e995]">
                ARACIN EVREN OTO SANAYİ'DE Mİ?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Ustanın istediği parçaları bize gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Marka-modeli yaz. Usta liste verdiyse fotoğrafını çek.
                Sökülen parça elindeyse onun fotoğrafını gönder.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a]"
                >
                  💬 PARÇAYI WHATSAPP'TAN SOR
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

        {/* BUYER INTENT */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            EVREN OTO SANAYİ YEDEK PARÇA
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
            Usta ne verdiyse WhatsApp'tan gönder
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            {[
              [
                "📋",
                "Parça Listesi",
                "Ustanın yazdığı listenin fotoğrafını çekip gönder.",
              ],
              [
                "📸",
                "Sökülen Parça",
                "Eski parçanın veya üzerindeki etiketin fotoğrafını gönder.",
              ],
              [
                "🚘",
                "Araç Bilgileri",
                "Marka, model, yıl ve aradığın parçayı mesajına yaz.",
              ],
            ].map(([icon, title, text]) => (
              <a
                key={title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
              >
                <div className="text-5xl">{icon}</div>

                <h3 className="mt-5 text-2xl font-black">
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

        {/* ESENYURT CLUSTER TEXT */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              ESENYURT OTO PARÇA
            </span>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
              Evren Oto Sanayi'de oto yedek parça arıyorsanız
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Fren, bakım, motor, süspansiyon ve yürüyen aksam parçaları için
              aracınızın bilgilerini göndererek parça talebinizi iletebilirsiniz.
              Aracınız sanayideyse ustanın verdiği listeyi göndermeniz de yeterli.
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
                  className="rounded-2xl border border-white/10 bg-[#07111d] p-5 transition hover:border-[#25D366]/50"
                >
                  <strong>🔧 {part}</strong>

                  <span className="mt-3 block text-sm font-black text-[#65e995]">
                    Fiyat / stok sor →
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* DIRECT CONVERSION */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/5 p-8 md:p-12">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <span className="font-black text-[#65e995]">
                  SANAYİDE PARÇA BEKLEME
                </span>

                <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
                  Listeyi gönder, parça talebini ilet.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                  Evren Oto Sanayi'deysen araç marka-modelini ve ustanın
                  istediği parçaları mesaj olarak gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-8 py-5 text-center text-lg font-black text-[#04130a]"
              >
                💬 LİSTEYİ GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Esenyurt oto parça
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/blog/esenyurt-oto-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Parça →
                </strong>
              </Link>

              <Link
                href="/blog/esenyurt-oto-parca-telefon"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Parça Telefon →
                </strong>
              </Link>

              <Link
                href="/blog/fatih-oto-sanayi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Fatih Oto Sanayi Oto Parçacı →
                </strong>
              </Link>

            </div>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Evren Oto Sanayi'de parça mı arıyorsun?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Araç marka-modelini ve aradığın parçayı gönder.
                  Ustan liste verdiyse fotoğrafını çekmen yeterli.
                </p>
              </div>

              <div className="grid gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
                >
                  💬 WHATSAPP'TAN PARÇA SOR
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
            EVREN OTO SANAYİ OTO PARÇACI
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
