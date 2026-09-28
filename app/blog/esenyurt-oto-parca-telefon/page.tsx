import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Oto Parça Telefon | Parça Sor 0543 557 15 29",
  description:
    "Esenyurt oto parça telefon: 0543 557 15 29. Aracınızın marka, model ve parça bilgisini WhatsApp'tan gönderin veya telefonla oto parça sorun.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-oto-parca-telefon",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AEsenyurt%27ta%20arac%C4%B1m%20i%C3%A7in%20oto%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const faq = [
  {
    q: "Esenyurt oto parça telefon numarası nedir?",
    a: "Oto parça talepleriniz için 0543 557 15 29 numaralı telefonu arayabilir veya aynı numara üzerinden WhatsApp mesajı gönderebilirsiniz.",
  },
  {
    q: "WhatsApp'tan oto parça sorabilir miyim?",
    a: "Evet. Araç marka, model, yıl, motor ve aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Parçanın adını bilmiyorum, ne göndermeliyim?",
    a: "Ustanızın verdiği listenin, eski parçanın, kutunun veya parça kodunun fotoğrafını WhatsApp üzerinden gönderebilirsiniz.",
  },
  {
    q: "Birden fazla parça sorabilir miyim?",
    a: "Evet. Ustanızın verdiği listeyi tek mesajda veya fotoğraf olarak gönderebilirsiniz.",
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

          <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Oto Parça Telefon</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              ☎️ Oto parça için ara veya WhatsApp'tan yaz
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Oto Parça
              <span className="block text-cyan-300">
                Telefon
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aracınız için parça mı arıyorsunuz? Marka, model ve ihtiyacınız
              olan parçayı söyleyin. İsterseniz direkt arayın, isterseniz
              parçanın fotoğrafını veya ustanın listesini WhatsApp'tan gönderin.
            </p>

            {/* PHONE CARD */}
            <div className="mt-8 max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-9">

              <p className="text-sm font-black uppercase tracking-wider text-cyan-300">
                ESENYURT OTO PARÇA İLETİŞİM
              </p>

              <a
                href={phone}
                className="mt-3 block text-4xl font-black tracking-tight text-white md:text-6xl"
              >
                0543 557 15 29
              </a>

              <p className="mt-4 leading-7 text-slate-300">
                Aramadan önce araç bilgilerini hazırlayabilir veya WhatsApp'tan
                doğrudan gönderebilirsiniz.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={phone}
                  className="rounded-2xl bg-white px-6 py-5 text-center text-lg font-black text-[#07111d] transition hover:scale-[1.01]"
                >
                  ☎️ HEMEN ARA
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#25D366] px-6 py-5 text-center text-lg font-black text-[#04130a] transition hover:scale-[1.01]"
                >
                  💬 WHATSAPP'TAN PARÇA SOR
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO SEND */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            PARÇAYI DAHA KOLAY SOR
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            WhatsApp'tan bunları gönder
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🚘", "Marka / Model", "Örn. Renault Clio, Fiat Egea, Peugeot 3008"],
              ["📅", "Model Yılı", "Aracınızın üretim/model yılını yazın."],
              ["⚙️", "Motor Bilgisi", "Biliyorsanız motor hacmi ve motor tipini ekleyin."],
              ["🔧", "Aranan Parça", "Parçanın adını, kodunu veya fotoğrafını gönderin."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}

          </div>
        </section>

        {/* USTA LIST */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <div className="grid gap-6 lg:grid-cols-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] border border-[#25D366]/30 bg-[#25D366]/5 p-7 transition hover:-translate-y-1"
              >
                <div className="text-5xl">📋</div>

                <h2 className="mt-5 text-2xl font-black">
                  Usta Liste Verdi
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  Listenin fotoğrafını çekip WhatsApp'tan gönder.
                </p>

                <span className="mt-5 inline-block font-black text-[#65e995]">
                  Listeyi gönder →
                </span>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] border border-white/10 bg-[#07111d] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
              >
                <div className="text-5xl">📸</div>

                <h2 className="mt-5 text-2xl font-black">
                  Parçanın Fotoğrafı Var
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  Eski parçanın veya ürün kutusunun fotoğrafını gönder.
                </p>

                <span className="mt-5 inline-block font-black text-[#65e995]">
                  Fotoğraf gönder →
                </span>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] border border-white/10 bg-[#07111d] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
              >
                <div className="text-5xl">🔢</div>

                <h2 className="mt-5 text-2xl font-black">
                  Parça Kodu Var
                </h2>

                <p className="mt-3 leading-7 text-slate-400">
                  OEM veya ürün kodunu biliyorsanız doğrudan gönderin.
                </p>

                <span className="mt-5 inline-block font-black text-[#65e995]">
                  Parça kodunu gönder →
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* STRONG PHONE CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  ESENYURT OTO PARÇA TELEFON
                </p>

                <a
                  href={phone}
                  className="mt-2 block text-4xl font-black md:text-5xl"
                >
                  0543 557 15 29
                </a>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Aracın ustadaysa ustanın istediği parçayı söyle.
                  Fotoğraf veya liste varsa WhatsApp'tan gönder.
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={phone}
                  className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
                >
                  ☎️ ŞİMDİ ARA
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border-2 border-[#07111d] px-8 py-4 text-center font-black"
                >
                  💬 WHATSAPP
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Esenyurt oto parça
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/esenyurt-oto-parca"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Parça →
                </strong>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Araç parçaları için ana rehbere geç.
                </p>
              </Link>

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parça →
                </strong>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Esenyurt oto yedek parça seçeneklerini incele.
                </p>
              </Link>

              <Link
                href="/blog/esenyurt-cikma-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Çıkma Parça →
                </strong>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Çıkma parça talepleri için sayfaya geç.
                </p>
              </Link>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16 pb-28">

          <span className="font-black text-cyan-300">
            ESENYURT OTO PARÇA TELEFON
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

      {/* DESKTOP PHONE */}
      <a
        href={phone}
        aria-label="Esenyurt oto parça telefon"
        className="fixed bottom-6 right-6 z-50 hidden rounded-full bg-white px-6 py-4 font-black text-[#07111d] shadow-2xl md:block"
      >
        ☎️ 0543 557 15 29
      </a>

      {/* WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Esenyurt oto parça WhatsApp"
        className="fixed bottom-24 left-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-2xl md:bottom-6"
      >
        💬
      </a>

      {/* MOBILE CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">

        <a
          href={phone}
          className="rounded-2xl bg-white py-4 text-center font-black text-[#07111d]"
        >
          ☎️ HEMEN ARA
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
