import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Oto Yedek Parçacı | Fiyat ve Stok Sor",
  description:
    "Esenyurt oto yedek parçacı arıyorsanız aracınıza uygun fren, ön takım, filtre, motor, debriyaj ve süspansiyon parçaları için fiyat ve stok bilgisi alın.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-oto-yedek-parcaci",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Esenyurt%27ta%20oto%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20%0AFiyat%20ve%20stok%20bilgisi%20alabilir%20miyim%3F";

const categories = [
  ["🛑", "Fren Parçaları", "Balata, disk ve fren sistemi parçaları"],
  ["🔧", "Ön Takım", "Salıncak, rot başı, rotil, Z rot ve bağlantılar"],
  ["〰️", "Süspansiyon", "Amortisör, takoz ve süspansiyon parçaları"],
  ["🌬️", "Filtreler", "Yağ, hava, polen ve yakıt filtreleri"],
  ["⚙️", "Motor Parçaları", "Triger, devirdaim, termostat ve motor parçaları"],
  ["🧰", "Debriyaj", "Debriyaj seti ve aktarma parçaları"],
];

const brands = [
  "Renault",
  "Ford",
  "Peugeot",
  "Citroën",
  "Fiat",
  "Opel",
  "Volkswagen",
  "Toyota",
  "Hyundai",
  "Kia",
];

const faq = [
  {
    q: "Esenyurt'ta oto yedek parça fiyatı nasıl öğrenilir?",
    a: "Aracınızın marka, model, üretim yılı, motor bilgisi ve aradığınız parçayı WhatsApp üzerinden göndererek fiyat ve stok bilgisi sorabilirsiniz.",
  },
  {
    q: "Parça kodunu bilmiyorum, yine de fiyat sorabilir miyim?",
    a: "Evet. Marka, model, yıl, motor ve aradığınız parçayı yazabilirsiniz. Elinizde eski parçanın veya kutusunun fotoğrafı varsa onu da gönderebilirsiniz.",
  },
  {
    q: "Hangi oto yedek parçaları sorabilirim?",
    a: "Fren, ön takım, süspansiyon, filtre, debriyaj, triger, devirdaim, termostat ve çeşitli motor parçaları için bilgi alabilirsiniz.",
  },
  {
    q: "Esenyurt için yedek parça stok bilgisi alabilir miyim?",
    a: "Aradığınız parçanın bilgilerini WhatsApp üzerinden göndererek mevcut seçenekleri ve stok durumunu sorabilirsiniz.",
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
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Oto Yedek Parçacı</span>
            </div>

            <div className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              ● Fiyat ve stok bilgisi için WhatsApp
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt{" "}
              <span className="text-cyan-300">Oto Yedek Parçacı</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Esenyurt'ta aracınız için yedek parça mı arıyorsunuz?
              <strong className="text-white">
                {" "}Marka, model, yıl ve aradığınız parçayı gönderin.
              </strong>{" "}
              Uygun parça seçenekleri için fiyat ve stok bilgisi sorun.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-[#65e995]">
                Hızlı Parça Talebi
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Hangi parçayı arıyorsunuz?
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-black/20 p-3">
                  🚗 Marka / Model
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  📅 Üretim Yılı
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  ⚙️ Motor
                </div>
                <div className="rounded-xl bg-black/20 p-3">
                  🔧 Parça Adı
                </div>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                WhatsApp'tan Fiyat ve Stok Sor →
              </a>

              <p className="mt-3 text-center text-xs text-slate-400">
                Parça kodunu bilmiyorsanız fotoğrafını da gönderebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* COMMERCIAL BOX */}
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">💬</div>
              <h2 className="mt-3 text-xl font-black">Fiyat Sor</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Aradığınız parçayı ve araç bilgilerinizi gönderin.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">📦</div>
              <h2 className="mt-3 text-xl font-black">Stok Sor</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                İhtiyacınız olan parçanın mevcut seçeneklerini sorun.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">📸</div>
              <h2 className="mt-3 text-xl font-black">Fotoğraf Gönder</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Parça kodunu bilmiyorsanız eski parçanın fotoğrafını gönderin.
              </p>
            </div>

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              ESENYURT OTO YEDEK PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Hangi parçayı arıyorsunuz?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Aracınızın bilgilerini göndererek aşağıdaki parça grupları için
              fiyat ve stok bilgisi sorabilirsiniz.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map(([icon, title, text]) => (
                <a
                  key={title}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-[#07111d] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
                >
                  <div className="text-4xl">{icon}</div>

                  <h3 className="mt-5 text-xl font-black">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {text}
                  </p>

                  <span className="mt-5 inline-block font-black text-[#58e68a]">
                    Fiyat ve stok sor →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            MARKAYA GÖRE YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Aracınızın markasını gönderin
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {brands.map((brand) => (
              <a
                key={brand}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center font-bold transition hover:border-[#25D366]/40"
              >
                {brand}
              </a>
            ))}
          </div>
        </section>

        {/* BUYER INTENT */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <div className="grid gap-6 lg:grid-cols-2">

              <article className="rounded-3xl border border-white/10 bg-[#07111d] p-8">
                <span className="font-black text-cyan-300">
                  USTANIZ PARÇA MI İSTEDİ?
                </span>

                <h2 className="mt-3 text-3xl font-black">
                  Parça listesini bize gönderin
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Servis veya ustanız balata, disk, salıncak, amortisör,
                  filtre, triger, debriyaj veya başka bir parça söylediyse
                  listeyi doğrudan WhatsApp üzerinden gönderebilirsiniz.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
                >
                  Parça Listesini Gönder →
                </a>
              </article>

              <article className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
                <span className="font-black text-[#65e995]">
                  PARÇA KODUNUZ YOK MU?
                </span>

                <h2 className="mt-3 text-3xl font-black">
                  Fotoğrafını çekip gönderin
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Eski parçanın, kutunun veya üzerindeki referans numarasının
                  fotoğrafı varsa mesajınıza ekleyebilirsiniz.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-2xl border border-[#25D366]/40 px-6 py-4 font-black text-[#65e995]"
                >
                  WhatsApp'tan Fotoğraf Gönder →
                </a>
              </article>

            </div>
          </div>
        </section>

        {/* MAIN SEO LINK */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">

            <span className="font-black text-cyan-300">
              ESENYURT YEDEK PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black">
              Esenyurt'ta oto yedek parça arayanlar için
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Fren sistemi, ön takım, süspansiyon, filtre, debriyaj ve motor
              parçaları için araç bilgilerinizi göndererek uygun parça
              seçeneklerini sorabilirsiniz.
            </p>

            <Link
              href="/esenyurt-oto-yedek-parca"
              className="mt-6 inline-block font-black text-cyan-300"
            >
              Esenyurt Oto Yedek Parça Ana Sayfası →
            </Link>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Aradığınız parçayı hemen sorun.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Marka + model + yıl + motor + parça adını gönderin.
                  Fiyat ve stok bilgisi isteyin.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                WhatsApp'tan Fiyat Sor →
              </a>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">

          <span className="font-black text-cyan-300">
            ESENYURT OTO YEDEK PARÇACI
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

        {/* FINAL */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">

            <div className="text-5xl">🔧</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Esenyurt'ta oto yedek parça mı arıyorsunuz?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Aracınızı ve ihtiyacınız olan parçayı yazın.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Fiyat ve Stok Sor
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
        aria-label="WhatsApp'tan oto yedek parça sor"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
          <path d="M19.11 17.47c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          <path d="M16.03 3C8.85 3 3.02 8.81 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.61h.01c7.17 0 13-5.82 13-12.98C29.03 8.81 23.2 3 16.03 3zm0 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.77 10.77 0 0 1-1.66-5.74c0-5.96 4.86-10.8 10.82-10.8 5.96 0 10.81 4.84 10.81 10.8 0 5.96-4.86 10.69-10.92 10.69z" />
        </svg>
      </a>

      {/* MOBILE BUYER CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 Fiyat ve Stok Sor
        </a>
      </div>
    </>
  );
}
