import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatih Oto Sanayi Ford Yedek Parça | Esenyurt",
  description:
    "Esenyurt Fatih Oto Sanayi çevresinde Ford yedek parça arayanlar için Focus, Fiesta, Courier, Transit ve diğer Ford modellerine fren, ön takım, filtre, triger ve motor parçaları.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-fatih-oto-sanayi-ford-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AFatih%20Oto%20Sanayi%20%C3%A7evresinden%20Ford%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const models = [
  "Ford Focus",
  "Ford Fiesta",
  "Ford Courier",
  "Ford Transit",
  "Ford Connect",
  "Ford Kuga",
  "Ford Puma",
  "Ford Mondeo",
];

const parts = [
  ["🛑", "Ford Fren Parçaları", "Fren balatası, fren diski ve ilgili fren sistemi parçaları."],
  ["🔧", "Ford Ön Takım", "Rot başı, rotil, salıncak, Z rot ve bağlantı parçaları."],
  ["〰️", "Ford Süspansiyon", "Amortisör, takoz ve süspansiyon bağlantı parçaları."],
  ["🌬️", "Ford Filtre Seti", "Hava, yağ, polen ve yakıt filtresi seçenekleri."],
  ["⚙️", "Ford Motor Parçaları", "Motor tipine göre triger, devirdaim, termostat ve ilgili parçalar."],
  ["🧰", "Ford Debriyaj", "Debriyaj seti ve aktarma sistemiyle ilgili parçalar."],
];

const faq = [
  {
    q: "Fatih Oto Sanayi çevresinde Ford yedek parça nasıl sorabilirim?",
    a: "Ford aracınızın modelini, üretim yılını, motor bilgisini ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Ford parça kodunu bilmiyorum, yine de sorabilir miyim?",
    a: "Evet. Model, yıl, motor ve parça adını gönderebilirsiniz. Eski parçanın, kutunun veya referans numarasının fotoğrafı varsa onu da paylaşabilirsiniz.",
  },
  {
    q: "Hangi Ford modelleri için yedek parça sorabilirim?",
    a: "Focus, Fiesta, Courier, Transit, Connect, Kuga, Puma, Mondeo ve diğer Ford modelleri için araç bilgilerinizi gönderebilirsiniz.",
  },
  {
    q: "Ford yedek parça fiyatını nasıl öğrenebilirim?",
    a: "Model, yıl, motor ve aradığınız parçayı WhatsApp üzerinden göndererek mevcut ürün ve güncel fiyat seçeneklerini sorabilirsiniz.",
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
    headline: "Esenyurt Fatih Oto Sanayi Ford Yedek Parça",
    description:
      "Fatih Oto Sanayi çevresinde Ford araçlar için oto yedek parça rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-fatih-oto-sanayi-ford-yedek-parca",
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
              <Link href="/blog/esenyurt-fatih-oto-sanayi-yedek-parca">
                Fatih Oto Sanayi
              </Link>
              <span>›</span>
              <span>Ford Yedek Parça</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🚗 Ford parçanı WhatsApp'tan sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Fatih Oto Sanayi{" "}
              <span className="text-cyan-300">Ford Yedek Parça</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Fatih Oto Sanayi çevresinde Ford aracın için{" "}
              <strong className="text-white">
                fren, ön takım, süspansiyon, filtre, debriyaj, triger ve motor
                parçaları
              </strong>{" "}
              arıyorsan model + yıl + motor + parça bilgisini bize gönder.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                Ustan Ford için parça mı istedi?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Parça koduyla uğraşmana gerek yok 👋 Ford modelini, yılını,
                motorunu ve aradığın parçayı WhatsApp'tan gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Ford Yedek Parça Sor
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">FORD MODELLERİ</span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Hangi Ford modeli için parça arıyorsun?
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {models.map((model) => (
              <a
                key={model}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#25D366]/40"
              >
                <strong>🚗 {model}</strong>
                <span className="mt-2 block text-sm font-bold text-[#58e68a]">
                  Parça sor →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">FORD YEDEK PARÇA</span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Fatih Oto Sanayi çevresinde hangi Ford parçasını arıyorsun?
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {parts.map(([icon, title, text]) => (
                <a
                  key={title}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-[#07111d] p-7 transition hover:border-[#25D366]/40"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                  <span className="mt-5 inline-block font-black text-[#58e68a]">
                    WhatsApp'tan sor →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 lg:grid-cols-2">

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FATİH OTO SANAYİ
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Ford aracın için doğru parçayı ara
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Focus, Fiesta, Courier, Transit, Connect ve diğer Ford
                modellerinde parça seçimi aracın üretim yılına, motoruna ve
                versiyonuna göre değişebilir.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Bu nedenle yalnızca parça adına göre seçim yapmak yerine araç
                bilgilerini de gönder.
              </p>
            </article>

            <article className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
              <div className="text-4xl">📸</div>

              <h2 className="mt-4 text-3xl font-black">
                Parça fotoğrafını gönderebilirsin
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Eski parçanın, kutunun veya referans numarasının fotoğrafı
                varsa WhatsApp'tan bize gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                Fotoğraf / Parça Kodu Gönder
              </a>
            </article>

          </div>
        </section>

        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Fatih Oto Sanayi'de Ford parçanı tek tek aramakla uğraşma.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Model + yıl + motor + parça adını gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                Ford Parçasını Sor →
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <span className="font-black text-cyan-300">
            FATİH OTO SANAYİ
          </span>

          <h2 className="mt-3 text-3xl font-black">
            İlgili yedek parça sayfaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <Link
              href="/blog/esenyurt-fatih-oto-sanayi-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Fatih Oto Sanayi Yedek Parça →
              </strong>
            </Link>

            <Link
              href="/blog/esenyurt-fatih-oto-sanayi-renault-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Fatih Oto Sanayi Renault →
              </strong>
            </Link>

            <Link
              href="/esenyurt-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/40"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Yedek Parça →
              </strong>
            </Link>

          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-black">
              Jade Automotive online mağazaları
            </h2>

            <p className="mt-3 text-slate-400">
              Aradığın Ford parçasını mağazalarda göremediysen WhatsApp'tan
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
                Ford Parçası Sor
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">
            FORD YEDEK PARÇA
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

        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🚙</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Fatih Oto Sanayi çevresinde Ford yedek parça mı arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Model + yıl + motor + parça adını WhatsApp'tan gönder.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Ford Yedek Parça Sor
            </a>
          </div>
        </section>

        <div className="h-20 md:hidden" />
      </main>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ford yedek parça sor"
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
          💬 Ford Yedek Parça Sor
        </a>
      </div>
    </>
  );
}
