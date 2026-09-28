import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birlik Sanayi Sitesi Oto Parçacı | Oto Parça Sor",
  description:
    "Birlik Sanayi Sitesi oto parçacı arıyorsanız aracınızın marka, model ve ustanın istediği parçaları WhatsApp'tan gönderin. Oto yedek parça talebinizi iletin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/birlik-sanayi-sitesi-oto-parcaci",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0ABirlik%20Sanayi%20Sitesi%27nde%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const faq = [
  {
    q: "Birlik Sanayi Sitesi'nde oto parça nasıl sorabilirim?",
    a: "Araç marka, model, model yılı ve aradığınız parçaları WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Aracım ustada, parça listesini gönderebilir miyim?",
    a: "Evet. Ustanızın verdiği listenin fotoğrafını çekip WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorsam ne yapabilirim?",
    a: "Sökülen parçanın, kutunun veya parça üzerindeki numaranın fotoğrafını gönderebilirsiniz.",
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
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#25D366]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/beylikduzu-oto-yedek-parca">
                Beylikdüzü Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Birlik Sanayi Sitesi Oto Parçacı</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Aracın ustada, parça mı bekliyor?
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Birlik Sanayi Sitesi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Birlik Sanayi Sitesi'nde aracınız için oto parça arıyorsanız,
              ustanın istediği parçaları tek tek aramak yerine
              <strong className="text-white">
                {" "}listeyi WhatsApp'tan gönderin.
              </strong>
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-9">

              <p className="text-sm font-black text-[#65e995]">
                ARABA SÖKÜLDÜ, USTA PARÇA MI BEKLİYOR?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Ustanın listesini çek, bize gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Araç marka-modelini yaz. Ustanın verdiği listeyi, eski
                parçanın fotoğrafını veya parça kodunu WhatsApp mesajına ekle.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a] transition hover:scale-[1.01]"
                >
                  💬 PARÇA LİSTESİNİ GÖNDER
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

        {/* 3 CONVERSION CARDS */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            BİRLİK SANAYİ OTO PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Parçayı nasıl sorabilirsin?
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-[#25D366]/30 bg-[#25D366]/5 p-7 transition hover:-translate-y-1"
            >
              <div className="text-5xl">📋</div>
              <h3 className="mt-5 text-2xl font-black">Usta Liste Verdi</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Listenin fotoğrafını çek. Tek tek yazmana gerek yok.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Listeyi gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">📸</div>
              <h3 className="mt-5 text-2xl font-black">Parça Söküldü</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Sökülen parçanın veya üzerindeki etiketin fotoğrafını gönder.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Fotoğrafı gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">🚘</div>
              <h3 className="mt-5 text-2xl font-black">Sadece Araç Bilgisi Var</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Marka, model, yıl ve aradığın parçayı yazarak talebini gönder.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Aracını yaz →
              </span>
            </a>

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="max-w-4xl text-3xl font-black md:text-4xl">
              Birlik Sanayi Sitesi'nde hangi parçayı arıyorsun?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Bakım, fren, motor ve yürüyen aksam parçaları için araç
              bilgilerinizi göndererek parça talebinizi iletebilirsiniz.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Fren Balatası",
                "Fren Diski",
                "Debriyaj Seti",
                "Triger Seti",
                "Filtre Seti",
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
                    WhatsApp'tan sor →
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* STRONG CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Aracın lifte kalktıysa parçayı bekletme.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Ustanın verdiği parçaları veya listenin fotoğrafını
                  WhatsApp'tan gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                💬 PARÇAYI SOR
              </a>

            </div>
          </div>
        </section>

        {/* CLUSTER */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Bölgedeki oto parça sayfaları
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/blog/haramidere-sanayi-sitesi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Haramidere Sanayi Sitesi →
                </strong>
              </Link>

              <Link
                href="/blog/beykent-oto-sanayi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Beykent Oto Sanayi →
                </strong>
              </Link>

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

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16 pb-28">

          <span className="font-black text-cyan-300">
            BİRLİK SANAYİ SİTESİ OTO PARÇACI
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

      {/* MOBILE CONVERSION BAR */}
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
