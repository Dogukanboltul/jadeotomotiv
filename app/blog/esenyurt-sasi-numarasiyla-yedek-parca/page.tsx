import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Şasi Numarasıyla Yedek Parça | Parçanı Sor",
  description:
    "Esenyurt'ta aracınıza uygun yedek parçayı arıyorsanız şasi numarası, araç bilgileri veya parça kodunu WhatsApp'tan gönderin. Parça talebinizi iletin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-sasi-numarasiyla-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AArac%C4%B1ma%20uygun%20yedek%20par%C3%A7ay%C4%B1%20sormak%20istiyorum.%0A%0A%C5%9Easi%20Numaras%C4%B1%3A%20%0AMarka%20%2F%20Model%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const phone = "tel:+905435571529";

const faq = [
  {
    q: "Şasi numarasıyla yedek parça sorabilir miyim?",
    a: "Evet. Şasi numaranızı ve aradığınız parçayı WhatsApp üzerinden göndererek parça talebinizi iletebilirsiniz.",
  },
  {
    q: "Şasi numarası nerede yazar?",
    a: "Şasi numarası araç ruhsatında yer alır. Araç üzerinde de üreticiye göre farklı noktalarda bulunabilir.",
  },
  {
    q: "Şasi numaram yoksa parça sorabilir miyim?",
    a: "Evet. Marka, model, model yılı, motor bilgisi ve aradığınız parçayı gönderebilirsiniz.",
  },
  {
    q: "Ustanın verdiği listeyi gönderebilir miyim?",
    a: "Evet. Ustanızın verdiği parça listesinin fotoğrafını WhatsApp üzerinden gönderebilirsiniz.",
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

          <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>

              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>

              <span>›</span>
              <span>Şasi Numarasıyla Yedek Parça</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              🔎 Aracına uygun parçayı sor
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Şasi Numarasıyla
              <span className="block text-cyan-300">
                Yedek Parça
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aynı model aracın farklı motor ve donanım seçeneklerinde parça
              farklılıkları olabilir. Elinizde şasi numarası varsa aradığınız
              parçayla birlikte
              <strong className="text-white"> WhatsApp'tan gönderin.</strong>
            </p>

            {/* VIN CARD */}
            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 md:p-9">

              <p className="text-sm font-black uppercase tracking-wider text-[#65e995]">
                HANGİ PARÇANIN UYDUĞUNDAN EMİN DEĞİL MİSİN?
              </p>

              <h2 className="mt-3 text-2xl font-black md:text-4xl">
                Şasi numaranı + aradığın parçayı gönder.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Şasi numarasını ruhsattan kontrol edebilirsin. Parçanın adı,
                fotoğrafı veya ustanın verdiği liste varsa onu da ekle.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">

                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  WHATSAPP MESAJI
                </p>

                <div className="mt-4 space-y-2 font-medium text-slate-200">
                  <p>🚘 Şasi Numarası:</p>
                  <p>🚗 Marka / Model:</p>
                  <p>🔧 Aradığım Parça:</p>
                </div>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a] transition hover:scale-[1.01]"
              >
                💬 ŞASİ NUMARASINI GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* 3 WAYS */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="text-center">
            <span className="font-black text-cyan-300">
              YEDEK PARÇA SORGULAMA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Elinde hangi bilgi varsa gönder
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Parça talebini iletmek için uzun uzun tarif etmene gerek yok.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-[#25D366]/30 bg-[#25D366]/5 p-7 transition hover:-translate-y-1"
            >
              <div className="text-5xl">🔎</div>

              <h3 className="mt-5 text-2xl font-black">
                Şasi Numarası
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Ruhsattaki şasi numarasını ve aradığın parçayı gönder.
              </p>

              <span className="mt-5 inline-block font-black text-[#65e995]">
                Şasi numarasını gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">🔢</div>

              <h3 className="mt-5 text-2xl font-black">
                OEM / Parça Kodu
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Elinde ürün veya OEM kodu varsa doğrudan mesajla gönder.
              </p>

              <span className="mt-5 inline-block font-black text-[#65e995]">
                Parça kodunu gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-5xl">📋</div>

              <h3 className="mt-5 text-2xl font-black">
                Ustanın Listesi
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Usta liste verdiyse fotoğrafını çekip WhatsApp'tan gönder.
              </p>

              <span className="mt-5 inline-block font-black text-[#65e995]">
                Listeyi gönder →
              </span>
            </a>

          </div>
        </section>

        {/* WHY VIN */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>
                <span className="font-black text-cyan-300">
                  ŞASİ NUMARASIYLA PARÇA SORMA
                </span>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Sadece “Renault Clio parçası lazım” demekten daha fazla bilgi verir.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Aynı araç modelinde üretim yılı, motor ve donanım
                  farklılıkları bulunabilir. Bu nedenle araç bilgileri,
                  şasi numarası ve varsa parça kodu parça talebinin
                  değerlendirilmesini kolaylaştırır.
                </p>
              </div>

              <div className="grid gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#07111d] p-5">
                  <strong className="text-lg">🚗 Marka / Model</strong>
                  <p className="mt-2 text-sm text-slate-400">
                    Aracın temel bilgisini gönder.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#07111d] p-5">
                  <strong className="text-lg">🔎 Şasi Numarası</strong>
                  <p className="mt-2 text-sm text-slate-400">
                    Ruhsatta bulunan araç kimlik bilgisini ekle.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#07111d] p-5">
                  <strong className="text-lg">🔧 Aranan Parça</strong>
                  <p className="mt-2 text-sm text-slate-400">
                    Parça adı, fotoğrafı veya kodunu gönder.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* RUHSAT CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/5 p-8 md:p-12">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <span className="font-black text-[#65e995]">
                  RUHSAT YANINDA MI?
                </span>

                <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
                  Şasi numarasını yaz, parçayı gönder.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                  Aradığın parçanın adını da ekle. Usta liste verdiyse
                  listenin fotoğrafını mesajına ekleyebilirsin.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-8 py-5 text-center text-lg font-black text-[#04130a]"
              >
                💬 WHATSAPP'TAN GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* NO VIN */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <div className="rounded-[32px] border border-white/10 bg-[#07111d] p-8 md:p-10">

              <span className="font-black text-cyan-300">
                ŞASİ NUMARASI YANINDA DEĞİL Mİ?
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Marka + model + yıl + motor bilgisini gönder.
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Şasi numarası olmadan da parça talebini iletebilirsin.
                Elindeki araç ve parça bilgilerini mümkün olduğunca eksiksiz gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-[#25D366] px-7 py-4 font-black text-[#04130a]"
              >
                💬 ARAÇ BİLGİLERİNİ GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            ESENYURT OTO PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Parça aramaya devam et
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/blog/esenyurt-oto-parca"
              className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-6 transition hover:-translate-y-1"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Parça →
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Esenyurt oto parça ana sayfasına geç.
              </p>
            </Link>

            <Link
              href="/esenyurt-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Yedek Parça →
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Araç yedek parça seçeneklerini incele.
              </p>
            </Link>

            <Link
              href="/blog/esenyurt-oto-parca-telefon"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Parça Telefon →
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Telefon veya WhatsApp üzerinden iletişime geç.
              </p>
            </Link>

            <Link
              href="/blog/esenyurt-cikma-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1"
            >
              <strong className="text-cyan-300">
                Esenyurt Çıkma Parça →
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Çıkma parça taleplerini gönder.
              </p>
            </Link>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-16">

          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Aracına hangi parça uyuyor?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Şasi numarası, marka-model ve aradığın parçayı WhatsApp'tan
                  göndererek parça talebini ilet.
                </p>
              </div>

              <div className="grid gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
                >
                  💬 ŞASİ NUMARASINI GÖNDER
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
            ŞASİ NUMARASIYLA YEDEK PARÇA
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

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Şasi numarasıyla yedek parça sor"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-2xl transition hover:scale-110 md:bottom-6"
      >
        💬
      </a>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">

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
          💬 ŞASİ NO GÖNDER
        </a>

      </div>

    </>
  );
}
