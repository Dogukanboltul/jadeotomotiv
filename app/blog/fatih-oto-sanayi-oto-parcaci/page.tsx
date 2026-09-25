import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatih Oto Sanayi Oto Parçacı | Aradığın Parçayı Sor",
  description:
    "Fatih Oto Sanayi oto parçacı arıyorsanız aracınızın marka, model ve parça bilgisini gönderin. Ustanın istediği oto parçalarını WhatsApp'tan sorun.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/fatih-oto-sanayi-oto-parcaci",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AFatih%20Oto%20Sanayi%27de%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AUstan%C4%B1n%20%C4%B0stedi%C4%9Fi%20Par%C3%A7a%3A%20";

const parts = [
  ["🛑", "Fren Balatası", "Ön veya arka balata için araç bilgilerini gönder."],
  ["⭕", "Fren Diski", "Ustan disk istediyse aracını ve parçayı yaz."],
  ["🔧", "Ön Takım", "Salıncak, rotil, rot başı, Z rot ve diğer parçalar."],
  ["〰️", "Amortisör", "Amortisör ve süspansiyon parçalarını sor."],
  ["⚙️", "Triger Seti", "Motor bilgisiyle uygun triger setini sor."],
  ["🧰", "Debriyaj", "Debriyaj ve baskı balata seçeneklerini sor."],
  ["🌬️", "Filtreler", "Yağ, hava, polen ve yakıt filtrelerini sor."],
  ["💧", "Motor Parçaları", "Devirdaim, termostat ve diğer parçaları sor."],
];

const faq = [
  {
    q: "Fatih Oto Sanayi'de oto parçacı arıyorum, nasıl parça sorabilirim?",
    a: "Araç marka, model, yıl, motor ve ustanızın istediği parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ustanın verdiği listenin fotoğrafını gönderebilir miyim?",
    a: "Evet. Ustanız birden fazla parça yazdıysa listenin fotoğrafını WhatsApp mesajınıza ekleyebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorsam ne yapmalıyım?",
    a: "Eski parçanın, parça kutusunun veya ustanızın verdiği listenin fotoğrafını gönderebilirsiniz. Araç bilgilerinizi de mesaja ekleyin.",
  },
  {
    q: "Orijinal veya muadil parça sorabilir miyim?",
    a: "Aradığınız ürün için mevcut orijinal ve muadil seçenekleri sorabilirsiniz.",
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

          <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Parça
              </Link>
              <span>›</span>
              <span>Fatih Oto Sanayi Oto Parçacı</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Aracın sanayide mi?
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Fatih Oto Sanayi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aracınız Fatih Oto Sanayi'de ve usta parça mı istedi?
              Parçayı tek tek internette aramak yerine{" "}
              <strong className="text-white">
                ustanın istediği parçayı veya listeyi WhatsApp'tan gönderin.
              </strong>
            </p>

            <div className="mt-8 max-w-2xl rounded-[32px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-8">

              <p className="text-sm font-black text-[#65e995]">
                USTA “PARÇAYI AL GEL” Mİ DEDİ?
              </p>

              <h2 className="mt-2 text-2xl font-black md:text-3xl">
                Ne istediyse bize gönder.
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Parçanın adını yazabilir, listenin fotoğrafını çekebilir
                veya elinizde varsa parça kodunu gönderebilirsiniz.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/20 p-4">
                  🚗 <strong>Marka / Model</strong>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  📅 <strong>Yıl</strong>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  ⚙️ <strong>Motor</strong>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  🔧 <strong>Parça</strong>
                </div>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a]"
              >
                💬 USTANIN İSTEDİĞİ PARÇAYI SOR
              </a>

            </div>
          </div>
        </section>

        {/* THREE INTENTS */}
        <section className="mx-auto max-w-6xl px-5 py-14">

          <h2 className="text-center text-3xl font-black md:text-4xl">
            Parçayı nasıl tarif edeceğini düşünme
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
            Elinizde ne varsa gönderin.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">🔧</div>
              <h3 className="mt-5 text-xl font-black">Parçanın Adı Var</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Usta “balata, disk, salıncak, amortisör” dediyse direkt yaz.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Parçayı yaz →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 p-7 transition hover:-translate-y-1"
            >
              <div className="text-5xl">📋</div>
              <h3 className="mt-5 text-xl font-black">Usta Liste Verdi</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Kağıdın veya mesajın ekran görüntüsünü direkt gönder.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Listeyi gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">📸</div>
              <h3 className="mt-5 text-xl font-black">Eski Parça Elinde</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Eski parçanın veya kutusunun fotoğrafını gönder.
              </p>
              <span className="mt-5 inline-block font-black text-[#65e995]">
                Fotoğraf gönder →
              </span>
            </a>

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              FATİH OTO SANAYİ OTO PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Ustan hangi parçayı istedi?
            </h2>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {parts.map(([icon, title, text]) => (
                <a
                  key={title}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-[#07111d] p-6 transition hover:-translate-y-1 hover:border-[#25D366]/50"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                  <span className="mt-5 inline-block font-black text-[#65e995]">
                    WhatsApp'tan sor →
                  </span>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* COMMERCIAL */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="grid gap-6 lg:grid-cols-2">

            <article className="rounded-[32px] border border-[#25D366]/30 bg-[#25D366]/5 p-8">

              <div className="text-5xl">🚗</div>

              <h2 className="mt-5 text-3xl font-black">
                Araç lifte çıktı, parça mı bekleniyor?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Aracınız tamir sırasında söküldüyse ve usta yeni parçayı
                bekliyorsa araç bilgilerinizi ve istenen parçayı gönderin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                💬 Parçayı Sor
              </a>

            </article>

            <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

              <div className="text-5xl">🧾</div>

              <h2 className="mt-5 text-3xl font-black">
                Birden fazla parça mı çıktı?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Ustanın çıkardığı listeyi tek tek yazmakla uğraşmayın.
                Listenin tamamının fotoğrafını WhatsApp'tan gönderin.
              </p>

              <Link
                href="/blog/esenyurt-ustanin-istedigi-yedek-parca"
                className="mt-6 inline-block font-black text-cyan-300"
              >
                Ustanın listesini gönder →
              </Link>

            </article>

          </div>
        </section>

        {/* CLUSTER */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              FATİH OTO SANAYİ
            </span>

            <h2 className="mt-3 text-3xl font-black">
              Fatih Oto Sanayi oto parça
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Fatih Oto Sanayi çevresinde aracınız için parça arıyorsanız
              araç bilgilerinizi, parçanın adını veya ustanızın verdiği
              listeyi WhatsApp üzerinden gönderebilirsiniz.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/fatih-oto-sanayi-yedek-parca"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <strong className="text-cyan-300">
                  Fatih Oto Sanayi Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/blog/fatih-oto-sanayi-oto-yedek-parcaci"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <strong className="text-cyan-300">
                  Fatih Oto Sanayi Oto Yedek Parçacı →
                </strong>
              </Link>

              <Link
                href="/blog/esenyurt-oto-yedek-parcaci"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parçacı →
                </strong>
              </Link>

            </div>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="px-5 py-16">

          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Usta parçayı bekliyor mu?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Parçanın adını, fotoğrafını veya ustanın listesini gönder.
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

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 pb-24">

          <h2 className="text-3xl font-black">
            Fatih Oto Sanayi Oto Parçacı
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

      {/* WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fatih Oto Sanayi oto parçacı WhatsApp"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
          <path d="M19.11 17.47c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          <path d="M16.03 3C8.85 3 3.02 8.81 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.61h.01c7.17 0 13-5.82 13-12.98C29.03 8.81 23.2 3 16.03 3zm0 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.77 10.77 0 0 1-1.66-5.74c0-5.96 4.86-10.8 10.82-10.8 5.96 0 10.81 4.84 10.81 10.8 0 5.96-4.86 10.69-10.92 10.69z" />
        </svg>
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 USTANIN İSTEDİĞİ PARÇAYI SOR
        </a>
      </div>
    </>
  );
}
