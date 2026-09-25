import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fatih Oto Sanayi Oto Yedek Parçacı | Parça Fiyatı Sor",
  description:
    "Fatih Oto Sanayi oto yedek parçacı arıyorsanız aracınızın marka, model, yıl ve parça bilgisini WhatsApp'tan gönderin. Fiyat ve stok bilgisi sorun.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/fatih-oto-sanayi-oto-yedek-parcaci",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AFatih%20Oto%20Sanayi%20i%C3%A7in%20yedek%20par%C3%A7a%20arıyorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20%0A%0AFiyat%20ve%20stok%20bilgisi%20alabilir%20miyim%3F";

const parts = [
  ["🛑", "Fren Balatası"],
  ["⭕", "Fren Diski"],
  ["🔧", "Ön Takım Parçaları"],
  ["〰️", "Amortisör"],
  ["🌬️", "Filtre Seti"],
  ["⚙️", "Triger Seti"],
  ["🧰", "Debriyaj Seti"],
  ["💧", "Devirdaim / Termostat"],
];

const faq = [
  {
    q: "Fatih Oto Sanayi oto yedek parçacı için nasıl parça sorabilirim?",
    a: "Araç marka, model, yıl, motor ve aradığınız parçayı WhatsApp üzerinden göndererek mevcut seçenekler için fiyat ve stok bilgisi sorabilirsiniz.",
  },
  {
    q: "Ustanın verdiği listeyi gönderebilir miyim?",
    a: "Evet. Ustanızın verdiği yedek parça listesinin fotoğrafını WhatsApp mesajınıza ekleyebilirsiniz.",
  },
  {
    q: "Parça kodunu bilmiyorum, yine de sorabilir miyim?",
    a: "Evet. Araç bilgilerinizi ve aradığınız parçanın adını gönderin. Elinizde eski parçanın veya kutunun fotoğrafı varsa ekleyebilirsiniz.",
  },
  {
    q: "Orijinal ve muadil parça seçenekleri var mı?",
    a: "Aradığınız ürün için mevcut orijinal ve muadil seçeneklerin fiyat ve stok durumunu sorabilirsiniz.",
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

          <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>

              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>

              <span>›</span>
              <span>Fatih Oto Sanayi Oto Yedek Parçacı</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔧 Parçayı Yaz • Fiyat ve Stok Sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Fatih Oto Sanayi
              <span className="block text-cyan-300">
                Oto Yedek Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Fatih Oto Sanayi çevresinde aracınız için yedek parça mı
              arıyorsunuz? Marka, model, yıl ve ihtiyacınız olan parçayı
              göndererek <strong className="text-white">fiyat ve stok bilgisini sorun.</strong>
            </p>

            <div className="mt-8 max-w-2xl rounded-[30px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-8">

              <p className="text-sm font-black text-[#65e995]">
                PARÇAYI HIZLI SORGULA
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Aracını yaz, parçayı sor.
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-black/20 p-4">🚗 Marka / Model</div>
                <div className="rounded-xl bg-black/20 p-4">📅 Model Yılı</div>
                <div className="rounded-xl bg-black/20 p-4">⚙️ Motor</div>
                <div className="rounded-xl bg-black/20 p-4">🔧 Aranan Parça</div>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a]"
              >
                💬 WHATSAPP'TAN PARÇA SOR
              </a>

              <p className="mt-3 text-center text-xs text-slate-400">
                Parça fotoğrafınız veya OEM kodunuz varsa mesajınıza ekleyin.
              </p>

            </div>
          </div>
        </section>

        {/* SANAYIDE ARAC */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                ARAÇ USTADA MI?
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Ustan parçayı söylediyse direkt gönder.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Aracınız Fatih Oto Sanayi'de bakım veya tamirdeyse,
                ustanızın istediği parçanın adını, kodunu veya fotoğrafını
                WhatsApp üzerinden gönderebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                🔧 Ustanın İstediği Parçayı Sor
              </a>
            </div>

            <div className="rounded-[32px] border border-[#25D366]/30 bg-[#25D366]/5 p-8">
              <span className="font-black text-[#65e995]">
                USTA LİSTE VERDİ Mİ?
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Fotoğrafını gönder.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Birden fazla parça gerekiyorsa tek tek yazmak yerine
                ustanızın verdiği listenin fotoğrafını göndererek
                parçalar için fiyat ve stok bilgisi sorabilirsiniz.
              </p>

              <Link
                href="/blog/esenyurt-ustanin-istedigi-yedek-parca"
                className="mt-6 inline-block font-black text-[#65e995]"
              >
                Ustanın listesini gönder →
              </Link>
            </div>

          </div>
        </section>

        {/* PRODUCTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              FATİH OTO SANAYİ YEDEK PARÇACI
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Aradığınız parçayı WhatsApp'tan sorun
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {parts.map(([icon, name]) => (
                <a
                  key={name}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-[#07111d] p-6 transition hover:-translate-y-1 hover:border-[#25D366]/50"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-4 text-lg font-black">{name}</h3>
                  <span className="mt-4 inline-block text-sm font-black text-[#65e995]">
                    Fiyat ve stok sor →
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* ORIGINAL / MUADIL */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 md:p-12">

            <span className="font-black text-cyan-300">
              ORİJİNAL & MUADİL
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Bütçenize uygun parça seçeneklerini sorun
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Aracınız için aradığınız parçanın mevcut orijinal ve muadil
              seçeneklerini sorabilir, ürün seçenekleri hakkında bilgi
              alabilirsiniz.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                💬 İki Seçeneği de Sor
              </a>

              <Link
                href="/blog/esenyurt-orijinal-muadil-yedek-parca"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-4 font-black text-cyan-300"
              >
                Orijinal / Muadil Yedek Parça →
              </Link>

            </div>
          </div>
        </section>

        {/* FATIH CLUSTER */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              FATİH OTO SANAYİ
            </span>

            <h2 className="mt-3 text-3xl font-black">
              Fatih Oto Sanayi yedek parça
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Fatih Oto Sanayi çevresinde aracınız için parça arıyorsanız
              araç bilgilerinizi göndererek ihtiyacınız olan ürün için
              fiyat ve stok bilgisi sorabilirsiniz.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/fatih-oto-sanayi-yedek-parca"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-6"
              >
                <strong className="text-cyan-300">
                  Fatih Oto Sanayi Yedek Parça →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fatih Oto Sanayi yedek parça ana sayfası.
                </p>
              </Link>

              <Link
                href="/blog/esenyurt-oto-yedek-parcaci"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parçacı →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Esenyurt genel yedek parça seçenekleri.
                </p>
              </Link>

              <Link
                href="/blog/esenyurt-oto-yedek-parca-siparisi"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Yedek Parça Siparişi →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Araç bilgilerinizi göndererek parça sorgulayın.
                </p>
              </Link>

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
                  Aracın sanayide parça mı bekliyor?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Ustanın istediği parçayı, listeyi veya fotoğrafı gönder.
                  Fiyat ve stok bilgisini sor.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                💬 Parçayı Sor →
              </a>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 pb-24">

          <h2 className="text-3xl font-black">
            Fatih Oto Sanayi Yedek Parça Hakkında
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

      {/* WHATSAPP ICON */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yedek parça sor"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
          <path d="M19.11 17.47c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          <path d="M16.03 3C8.85 3 3.02 8.81 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.61h.01c7.17 0 13-5.82 13-12.98C29.03 8.81 23.2 3 16.03 3zm0 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.77 10.77 0 0 1-1.66-5.74c0-5.96 4.86-10.8 10.82-10.8 5.96 0 10.81 4.84 10.81 10.8 0 5.96-4.86 10.69-10.92 10.69z" />
        </svg>
      </a>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 PARÇAYI WHATSAPP'TAN SOR
        </a>
      </div>
    </>
  );
}
