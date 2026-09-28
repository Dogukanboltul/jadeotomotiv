import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beykent Oto Sanayi Oto Parçacı | Yedek Parça Sor",
  description:
    "Beykent Oto Sanayi oto parçacı arıyorsanız aracınızın marka, model ve ihtiyacınız olan parçayı WhatsApp'tan gönderin. Oto yedek parça talebinizi iletin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beykent-oto-sanayi-oto-parcaci",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0ABeykent%20Oto%20Sanayi%20i%C3%A7in%20oto%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const phone = "tel:+905435571529";

const faq = [
  {
    q: "Beykent Oto Sanayi'de oto parça nasıl sorabilirim?",
    a: "Araç marka, model, yıl ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ustanın verdiği parça listesini gönderebilir miyim?",
    a: "Evet. Listenin fotoğrafını WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorsam ne yapmalıyım?",
    a: "Eski parçanın, kutunun veya parça üzerindeki kodun fotoğrafını gönderebilirsiniz.",
  },
  {
    q: "Telefonla oto parça sorabilir miyim?",
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
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <span>Beykent Oto Sanayi Oto Parçacı</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Usta parça mı istedi?
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beykent Oto Sanayi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Beykent Oto Sanayi'de aracınız için parça arıyorsanız
              <strong className="text-white">
                {" "}ustanın verdiği listeyi veya aradığınız parçayı WhatsApp'tan gönderin.
              </strong>
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-9">

              <p className="font-black text-[#65e995]">
                ARACIN SANAYİDE Mİ?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Ustanın istediği parçayı bize gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Listeyi tek tek yazmana gerek yok. Fotoğrafını çekip gönder.
                Marka-model ve model yılını da mesajına ekle.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

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

        {/* WHAT TO SEND */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            BEYKENT OTO SANAYİ YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Parçayı hızlıca sor
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            {[
              ["📋", "Usta Liste Verdi", "Listenin fotoğrafını çekip direkt gönder."],
              ["📸", "Eski Parça Elinde", "Parçanın veya kutusunun fotoğrafını gönder."],
              ["🔢", "Parça Kodu Var", "Üzerindeki kodu veya OEM numarasını gönder."],
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

            <h2 className="text-3xl font-black md:text-4xl">
              Beykent Oto Sanayi'de parça mı arıyorsun?
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Fren balatası, fren diski, filtre seti, triger seti,
              debriyaj, amortisör, ön takım ve diğer araç parçaları için
              araç bilgilerinizi göndererek talebinizi iletebilirsiniz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Fren Balatası",
                "Fren Diski",
                "Filtre Seti",
                "Triger Seti",
                "Debriyaj",
                "Amortisör",
                "Ön Takım",
                "Motor Parçaları",
              ].map((part) => (
                <a
                  key={part}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#07111d] p-5 font-black transition hover:border-[#25D366]/50"
                >
                  🔧 {part}
                  <span className="mt-2 block text-sm text-[#65e995]">
                    Parçayı sor →
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Sanayide parça bekleme.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Ustanın istediği parçayı, araç marka-modelini veya
                  listenin fotoğrafını WhatsApp'tan gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                💬 PARÇA SOR
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Yakındaki oto parça sayfaları
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Beylikdüzü Oto Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
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

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16 pb-28">

          <span className="font-black text-cyan-300">
            BEYKENT OTO SANAYİ OTO PARÇACI
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
                <p className="mt-3 leading-7 text-slate-400">{item.a}</p>
              </article>
            ))}

          </div>
        </section>

        <div className="h-20 md:hidden" />
      </main>

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
