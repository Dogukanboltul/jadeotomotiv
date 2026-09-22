import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatih Oto Sanayi Ford Focus Yedek Parça | Esenyurt",
  description:
    "Esenyurt Fatih Oto Sanayi çevresinde Ford Focus yedek parça arayanlar için fren balatası, disk, ön takım, amortisör, filtre, debriyaj ve motor parçaları.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-fatih-oto-sanayi-ford-focus-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AFatih%20Oto%20Sanayi%20%C3%A7evresinden%20Ford%20Focus%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const parts = [
  ["🛑", "Focus Fren Balatası", "Ön ve arka fren sistemi için balata seçenekleri."],
  ["⭕", "Focus Fren Diski", "Araç versiyonuna uygun fren diski seçenekleri."],
  ["🔧", "Focus Ön Takım", "Rot başı, rotil, salıncak, Z rot ve bağlantı parçaları."],
  ["〰️", "Focus Amortisör", "Amortisör, takoz ve süspansiyon bağlantı parçaları."],
  ["🌬️", "Focus Filtre Seti", "Hava, yağ, polen ve yakıt filtresi seçenekleri."],
  ["🧰", "Focus Debriyaj Seti", "Baskı, balata ve ilgili debriyaj parçaları."],
  ["⚙️", "Focus Motor Parçaları", "Motor tipine uygun çeşitli motor yedek parçaları."],
  ["💧", "Focus Soğutma Parçaları", "Devirdaim, termostat ve ilgili soğutma sistemi parçaları."],
];

const faq = [
  {
    q: "Fatih Oto Sanayi çevresinde Ford Focus yedek parça nasıl sorabilirim?",
    a: "Ford Focus aracınızın üretim yılı, motor bilgisi ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ford Focus parçalarının hepsi aynı mı?",
    a: "Hayır. Focus'un nesli, üretim yılı, motoru ve araç versiyonuna göre kullanılan parçalar değişebilir.",
  },
  {
    q: "Focus parça kodunu bilmiyorum, yine de sorabilir miyim?",
    a: "Evet. Araç yılı, motor ve aradığınız parçayı yazabilirsiniz. Eski parçanın veya kutusunun fotoğrafı varsa onu da gönderebilirsiniz.",
  },
  {
    q: "Ford Focus yedek parça fiyatını nasıl öğrenebilirim?",
    a: "Yıl, motor ve aradığınız parçayı WhatsApp üzerinden göndererek mevcut ürün ve güncel fiyat seçeneklerini sorabilirsiniz.",
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
    headline: "Esenyurt Fatih Oto Sanayi Ford Focus Yedek Parça",
    description:
      "Fatih Oto Sanayi çevresinde Ford Focus yedek parça arayanlar için parça rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-fatih-oto-sanayi-ford-focus-yedek-parca",
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
              <Link href="/esenyurt-oto-yedek-parca">Esenyurt</Link>
              <span>›</span>
              <Link href="/blog/esenyurt-fatih-oto-sanayi-yedek-parca">
                Fatih Oto Sanayi
              </Link>
              <span>›</span>
              <Link href="/blog/esenyurt-fatih-oto-sanayi-ford-yedek-parca">
                Ford
              </Link>
              <span>›</span>
              <span>Focus Yedek Parça</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🚗 Ford Focus parçanı WhatsApp'tan sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Fatih Oto Sanayi{" "}
              <span className="text-cyan-300">
                Ford Focus Yedek Parça
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Fatih Oto Sanayi çevresinde Ford Focus için{" "}
              <strong className="text-white">
                fren balatası, fren diski, ön takım, amortisör, filtre,
                debriyaj ve motor parçaları
              </strong>{" "}
              arıyorsan araç bilgilerini bize gönder.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                Focus'un hangi parçasını alacağını bilmiyor musun?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Yıl + motor + aradığın parçayı gönder 👋 Ustan sana parça
                kodu verdiyse veya eski parçanın fotoğrafı varsa onu da
                WhatsApp mesajına ekleyebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Ford Focus Yedek Parça Sor
              </a>
            </div>
          </div>
        </section>

        {/* QUICK */}
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["🚗", "Araç", "Ford Focus"],
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

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              FORD FOCUS YEDEK PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Focus için hangi parçayı arıyorsun?
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {parts.map(([icon, title, text]) => (
                <a
                  key={title}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-[#07111d] p-6 transition hover:border-[#25D366]/40"
                >
                  <div className="text-4xl">{icon}</div>

                  <h3 className="mt-5 text-xl font-black">{title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">{text}</p>

                  <span className="mt-5 inline-block font-black text-[#58e68a]">
                    Parçayı sor →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL INTENT */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 lg:grid-cols-2">

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FATİH OTO SANAYİ
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Ustan Focus için parça mı istedi?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Fatih Oto Sanayi çevresinde Ford Focus aracının bakım veya
                onarımı sırasında balata, disk, salıncak, rot başı,
                amortisör, filtre, debriyaj veya başka bir yedek parçaya
                ihtiyacın varsa araç bilgilerini bize gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                Ustanın İstediği Parçayı Sor
              </a>
            </article>

            <article className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
              <div className="text-4xl">📸</div>

              <h2 className="mt-4 text-3xl font-black">
                Parça kodunu bilmiyorsan fotoğraf gönder
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Eski parçanın, ürün kutusunun veya üzerindeki referans
                numarasının fotoğrafını WhatsApp üzerinden gönderebilirsin.
              </p>

              <p className="mt-4 font-black text-[#58e68a]">
                Focus + yıl + motor + parça/fotoğraf
              </p>
            </article>

          </div>
        </section>

        {/* COMPATIBILITY */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="max-w-4xl">
              <span className="font-black text-cyan-300">
                DOĞRU FOCUS PARÇASI
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Her Ford Focus'a aynı yedek parça uymaz
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Ford Focus farklı üretim yılları, motor seçenekleri ve
                versiyonlarla üretildiği için aynı isimdeki yedek parçanın
                farklı seçenekleri bulunabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Özellikle fren, ön takım, debriyaj ve motor parçalarında
                araç bilgilerinin kontrol edilmesi önemlidir. Yıl ve motor
                bilgisini göndererek parça seçimini netleştirebilirsin.
              </p>
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
                  Fatih Oto Sanayi'de Focus parçanı tek tek aramakla uğraşma.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Yıl + motor + parça adını gönder. Fotoğraf veya parça kodun
                  varsa onu da ekle.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                Focus Parçasını Sor →
              </a>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <span className="font-black text-cyan-300">
            FORD YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            İlgili yedek parça sayfaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/esenyurt-fatih-oto-sanayi-ford-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Fatih Oto Sanayi Ford →
              </strong>
              <p className="mt-2 text-sm text-slate-400">
                Ford modelleri için yedek parça rehberi.
              </p>
            </Link>

            <Link
              href="/blog/esenyurt-fatih-oto-sanayi-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Fatih Oto Sanayi Yedek Parça →
              </strong>
              <p className="mt-2 text-sm text-slate-400">
                Tüm marka ve parça grupları.
              </p>
            </Link>

            <Link
              href="/esenyurt-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Yedek Parça →
              </strong>
              <p className="mt-2 text-sm text-slate-400">
                Esenyurt oto yedek parça ana sayfası.
              </p>
            </Link>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-black">
              Jade Automotive online mağazaları
            </h2>

            <p className="mt-3 text-slate-400">
              Aradığın Focus parçasını mağazalarda göremediysen WhatsApp'tan
              doğrudan sorabilirsin.
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
                Focus Parçası Sor
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">
            FORD FOCUS YEDEK PARÇA
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
        </section>

        {/* FINAL */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🚗</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Fatih Oto Sanayi çevresinde Ford Focus yedek parça mı arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Yıl + motor + parça adını WhatsApp'tan gönder.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Ford Focus Yedek Parça Sor
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
        aria-label="Ford Focus yedek parça sor"
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
          💬 Ford Focus Yedek Parça Sor
        </a>
      </div>
    </>
  );
}
