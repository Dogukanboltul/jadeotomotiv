import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Peugeot Yedek Parça | Jade Automotive",
  description:
    "Esenyurt Peugeot yedek parça arayanlar için fren, filtre, ön takım, süspansiyon, triger ve motor parçaları. Peugeot modelinizi WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-peugeot-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0APeugeot%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20bak%C4%B1yorum.%0A%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const models = [
  "Peugeot 208",
  "Peugeot 301",
  "Peugeot 308",
  "Peugeot 508",
  "Peugeot 2008",
  "Peugeot 3008",
  "Peugeot 5008",
  "Peugeot Rifter",
  "Peugeot Partner",
  "Peugeot Expert",
];

const parts = [
  {
    icon: "🛑",
    title: "Peugeot Fren Parçaları",
    text: "Fren balatası, fren diski ve fren sistemiyle ilgili yedek parçalar.",
  },
  {
    icon: "🔧",
    title: "Peugeot Ön Takım Parçaları",
    text: "Rot başı, rotil, salıncak, Z rot ve bağlantı parçaları.",
  },
  {
    icon: "🛞",
    title: "Peugeot Süspansiyon Parçaları",
    text: "Amortisör, amortisör takozu, rulman ve ilgili süspansiyon parçaları.",
  },
  {
    icon: "🌬️",
    title: "Peugeot Filtre Setleri",
    text: "Yağ filtresi, hava filtresi, polen filtresi ve yakıt filtresi.",
  },
  {
    icon: "⚙️",
    title: "Peugeot Motor Parçaları",
    text: "Triger sistemi, devirdaim, termostat ve farklı motor yedek parçaları.",
  },
  {
    icon: "🚗",
    title: "Peugeot Debriyaj Parçaları",
    text: "Debriyaj seti, baskı, balata, rulman ve ilgili aktarma parçaları.",
  },
];

const faq = [
  {
    q: "Esenyurt Peugeot yedek parça nasıl sorabilirim?",
    a: "Peugeot aracınızın model, üretim yılı, motor ve aradığınız parça bilgisini WhatsApp üzerinden Jade Automotive'e gönderebilirsiniz.",
  },
  {
    q: "Peugeot aracımın parça kodunu bilmiyorum, sorun olur mu?",
    a: "Parça kodunu bilmiyorsanız araç modelinizi, yılını, motor bilgisini ve aradığınız parçayı gönderebilirsiniz. Elinizde varsa eski parçanın veya kutusunun fotoğrafını da paylaşabilirsiniz.",
  },
  {
    q: "Aynı Peugeot modelinde farklı yedek parçalar olabilir mi?",
    a: "Evet. Üretim yılı, motor seçeneği ve araç versiyonuna göre parça farklılıkları olabilir. Bu nedenle araç bilgilerinin kontrol edilmesi önemlidir.",
  },
  {
    q: "Peugeot için hangi yedek parçaları sorabilirim?",
    a: "Fren, filtre, ön takım, süspansiyon, debriyaj, triger ve farklı bakım veya motor parçaları için araç bilgilerinizi göndererek parça uygunluğu hakkında bilgi alabilirsiniz.",
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
    headline: "Esenyurt Peugeot Yedek Parça",
    description:
      "Esenyurt ve çevresinde Peugeot yedek parça arayanlar için araç uyumluluğu ve parça seçimi rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-peugeot-yedek-parca",
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
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link
                href="/esenyurt-oto-yedek-parca"
                className="hover:text-cyan-300"
              >
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Peugeot Yedek Parça</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🚗 Peugeot aracına uygun parçayı sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt{" "}
              <span className="text-cyan-300">Peugeot Yedek Parça</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Esenyurt ve çevresinde Peugeot aracın için yedek parça mı
              arıyorsun?{" "}
              <strong className="text-white">
                Model + yıl + motor + aradığın parçayı
              </strong>{" "}
              WhatsApp'tan gönder. Aracına uygun parçayı bulmana yardımcı
              olalım.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                “Peugeot'um var ama hangi parça uyuyor bilmiyorum.”
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Hiç sorun değil 👋 Modelini ve araç bilgilerini gönder.
                Parça kodunu biliyorsan ekle, bilmiyorsan da bize yazabilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Peugeot Yedek Parça Sor
              </a>

              <p className="mt-3 text-center text-xs text-slate-400">
                Hazır WhatsApp mesajı açılır.
              </p>
            </div>
          </div>
        </section>

        {/* MODELS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">PEUGEOT MODELLERİ</span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Peugeot modelini bize gönder
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Yedek parça seçiminde yalnızca Peugeot marka bilgisi yeterli
            olmayabilir. Model, yıl ve motor bilgisi doğru parçanın
            araştırılmasını kolaylaştırır.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {models.map((model) => (
              <a
                key={model}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center font-black transition hover:border-[#25D366]/50 hover:bg-[#25D366]/5"
              >
                {model}
              </a>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5 text-center text-slate-300">
            Modelini listede göremedin mi?{" "}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#58e68a]"
            >
              WhatsApp'tan modelini yaz →
            </a>
          </div>
        </section>

        {/* PART CATEGORIES */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              PEUGEOT YEDEK PARÇA ÇEŞİTLERİ
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Peugeot için hangi parçayı arıyorsun?
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {parts.map((part) => (
                <article
                  key={part.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="text-4xl">{part.icon}</div>

                  <h3 className="mt-5 text-xl font-black">{part.title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {part.text}
                  </p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-black text-[#58e68a]"
                  >
                    Bu parçayı WhatsApp'tan sor →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3 STEPS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <span className="font-black text-cyan-300">
              PARÇANI KOLAYCA SOR
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              3 adımda Peugeot yedek parça
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Peugeot modelini yaz",
                text: "208, 301, 308, 2008, 3008, Partner veya kullandığın diğer Peugeot modelini belirt.",
              },
              {
                n: "2",
                title: "Yıl ve motoru ekle",
                text: "Aracın üretim yılı ve motor bilgisini mesajına ekle.",
              },
              {
                n: "3",
                title: "Aradığın parçayı gönder",
                text: "Parçanın adını, kodunu veya varsa fotoğrafını WhatsApp üzerinden gönder.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-[#07111d]">
                  {item.n}
                </div>

                <h3 className="mt-5 text-xl font-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BIG CTA */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Peugeot parçanı bulmakla uğraşma. Bize sor 👋
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Peugeot modelini, yılını, motorunu ve aradığın parçayı
                  WhatsApp'tan gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                Peugeot Parça Sor →
              </a>
            </div>
          </div>
        </section>

        {/* COMPATIBILITY */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
            <article>
              <span className="font-black text-cyan-300">
                PEUGEOT PARÇA UYUMLULUĞU
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Aynı Peugeot modelinde parça neden değişebilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Aynı Peugeot modelinin farklı üretim yıllarında, motor
                seçeneklerinde veya versiyonlarında farklı yedek parçalar
                kullanılabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Bu nedenle sadece “Peugeot 3008 parçası lazım” demek yerine
                aracın yıl ve motor bilgisini de paylaşmak doğru parçanın
                araştırılmasını kolaylaştırır.
              </p>
            </article>

            <aside className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
              <div className="text-4xl">📸</div>

              <h3 className="mt-4 text-2xl font-black">
                Eski parçanın fotoğrafını gönder
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Parçanın adını bilmiyorsan elindeki parçanın, kutunun veya
                üzerindeki referans numarasının fotoğrafını WhatsApp'tan
                gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-4 text-center font-black text-[#04130a]"
              >
                Fotoğraf / Parça Kodu Gönder
              </a>
            </aside>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">
            ESENYURT OTO YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Diğer yedek parça rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/esenyurt-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Yedek Parça →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Esenyurt ve çevresi için genel oto yedek parça rehberi.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-fren-balatasi"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">Fren Balatası →</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren balatası ve araç uyumluluğu hakkında bilgi.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-filtre-seti"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">Filtre Setleri →</strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Yağ, hava, polen ve yakıt filtreleri hakkında rehber.
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
              Aradığın Peugeot parçasını göremiyorsan WhatsApp üzerinden
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
                Peugeot Parçasını WhatsApp'tan Sor
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">
            ESENYURT PEUGEOT YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">Sık Sorulan Sorular</h2>

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

        {/* FINAL CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🚗</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Esenyurt'ta Peugeot yedek parça mı arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Model + yıl + motor + aradığın parçayı gönder. Aracına uygun
              yedek parçayı bulmana yardımcı olalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Peugeot Yedek Parça Sor
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
        aria-label="Peugeot yedek parça için WhatsApp"
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
          💬 Peugeot Yedek Parça Sor
        </a>
      </div>
    </>
  );
}
