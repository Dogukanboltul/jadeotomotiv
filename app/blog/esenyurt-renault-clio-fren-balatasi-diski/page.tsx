import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Renault Clio Fren Balatası ve Diski | Jade Automotive",
  description:
    "Esenyurt Renault Clio fren balatası ve fren diski arayanlar için ön ve arka fren parçaları, arıza belirtileri ve doğru parça seçimi. WhatsApp'tan sorun.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-renault-clio-fren-balatasi-diski",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0ARenault%20Clio%20i%C3%A7in%20fren%20par%C3%A7as%C4%B1%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%20%2F%20Arka%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const symptoms = [
  {
    icon: "🔊",
    title: "Clio frenden ses geliyor",
    text: "Frenleme sırasında sürtme, ötme veya farklı bir ses duyulması fren sisteminin kontrol edilmesini gerektirebilir.",
  },
  {
    icon: "〰️",
    title: "Clio frene basınca titriyor",
    text: "Pedalda veya direksiyonda frenleme sırasında hissedilen titreşimin farklı nedenleri olabilir.",
  },
  {
    icon: "🛑",
    title: "Fren hissi değişti",
    text: "Fren pedalının veya aracın frenleme davranışının alışılmıştan farklı olması teknik kontrol gerektirebilir.",
  },
  {
    icon: "⭕",
    title: "Disk yüzeyinde aşınma",
    text: "Disk yüzeyindeki belirgin aşınma, çizik veya düzensizlik uzman tarafından değerlendirilmelidir.",
  },
];

const parts = [
  "Renault Clio Ön Fren Balatası",
  "Renault Clio Arka Fren Balatası",
  "Renault Clio Ön Fren Diski",
  "Renault Clio Arka Fren Diski",
  "Renault Clio Fren Balata Seti",
  "Renault Clio Fren Sistemi Parçaları",
];

const faq = [
  {
    q: "Renault Clio fren balatası her modelde aynı mı?",
    a: "Hayır. Clio'nun nesli, üretim yılı, motoru ve araç versiyonuna göre fren parçaları değişebilir. Parça seçmeden önce araç bilgilerinin kontrol edilmesi gerekir.",
  },
  {
    q: "Renault Clio frene basınca titriyor, fren diski mi?",
    a: "Frenleme sırasında titreşim fren sistemiyle ilişkili olabilir ancak tek başına fren diskinin arızalı olduğunu göstermez. Kesin neden teknik kontrol sonucunda belirlenmelidir.",
  },
  {
    q: "Clio frenden ses geliyor, balata mı bitmiş?",
    a: "Fren sesi balata veya fren sistemindeki farklı bileşenlerle ilişkili olabilir. Sadece sese bakarak parça teşhisi yapılmamalıdır.",
  },
  {
    q: "Clio balata değişirken fren diski de değişmeli mi?",
    a: "Her balata değişiminde fren diskinin değiştirilmesi gerektiği şeklinde genel bir kural yoktur. Diskin mevcut durumu teknik olarak değerlendirilmelidir.",
  },
  {
    q: "Renault Clio fren parça kodunu bilmiyorum, nasıl sipariş verebilirim?",
    a: "Aracın üretim yılı, motoru ve ön veya arka fren için hangi parçayı aradığınızı WhatsApp üzerinden gönderebilirsiniz. Varsa eski parçanın veya kutusunun fotoğrafını da paylaşabilirsiniz.",
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
    headline: "Esenyurt Renault Clio Fren Balatası ve Diski",
    description:
      "Renault Clio fren balatası, fren diski ve fren sistemi yedek parçaları hakkında rehber.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-renault-clio-fren-balatasi-diski",
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
              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>
              <span>›</span>
              <Link href="/renault-clio-yedek-parca">
                Renault Clio Yedek Parça
              </Link>
              <span>›</span>
              <span>Fren Balatası ve Diski</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🛑 Renault Clio fren parçanı birlikte bulalım
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Renault Clio{" "}
              <span className="text-cyan-300">
                Fren Balatası ve Diski
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Renault Clio için <strong className="text-white">fren balatası veya fren diski</strong>{" "}
              mı arıyorsun? Aracının yıl + motor + ön/arka bilgisini
              WhatsApp'tan gönder. Uygun parçayı bulmana yardımcı olalım.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                “Clio'ma hangi balata veya disk uyuyor?”
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Parça kodunu bilmiyorsan sorun değil 👋 Araç yılını, motorunu
                ve ön/arka bilgisini gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Clio Fren Balatası / Diski Sor
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">
            RENAULT CLIO FREN YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Clio için hangi fren parçasını arıyorsun?
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {parts.map((part) => (
              <a
                key={part}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#25D366]/40 hover:bg-[#25D366]/5"
              >
                <div className="text-3xl">🛑</div>
                <h3 className="mt-4 text-lg font-black">{part}</h3>
                <p className="mt-3 text-sm text-[#58e68a]">
                  WhatsApp'tan parçayı sor →
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              CLIO FREN ARIZA BELİRTİLERİ
            </span>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
              Renault Clio fren sisteminde ne sorun var?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Belirtileri parçaya dönüştürmeden önce fren sisteminin teknik
              olarak kontrol edilmesi gerekir. Aynı belirti farklı nedenlerden
              kaynaklanabilir.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {symptoms.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH QUERIES */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FRENE BASINCA TİTREME
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Renault Clio frene basınca titriyor
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Fren sırasında direksiyonda veya pedal üzerinde titreşim
                hissediliyorsa fren sistemi kontrol edilmelidir. Fren diski
                olası kontrol noktalarından biri olabilir ancak yalnızca
                belirti üzerinden kesin teşhis konulamaz.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FRENDEN SES GELMESİ
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Renault Clio frenden ses geliyor
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Frenleme sırasında ortaya çıkan ses balata, disk veya fren
                sistemindeki farklı bileşenlerle ilişkili olabilir. Teknik
                kontrolden sonra ihtiyaç duyulan parçayı bize
                sorabilirsin.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  Ustan “balata” veya “disk” dedi mi? Bize yaz.
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Renault Clio'nun yıl + motor + ön/arka bilgisini gönder.
                  Parça kodun veya fotoğrafın varsa onu da ekle.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                Clio Fren Parçası Sor →
              </a>
            </div>
          </div>
        </section>

        {/* COMPATIBILITY */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
            <article>
              <span className="font-black text-cyan-300">
                DOĞRU PARÇA SEÇİMİ
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Her Renault Clio'ya aynı balata ve disk olmaz
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Renault Clio farklı nesil, üretim yılı, motor ve donanım
                seçenekleriyle üretildiği için fren sistemi parçaları da
                araçtan araca değişebilir.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Renault Clio",
                  "Üretim Yılı",
                  "Motor",
                  "Ön / Arka",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#07111d] p-4 font-bold"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </article>

            <aside className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">
              <div className="text-4xl">📸</div>

              <h3 className="mt-4 text-2xl font-black">
                Parça kodunu bilmiyor musun?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Eski parçanın, kutunun veya üzerindeki referans numarasının
                fotoğrafını WhatsApp'tan gönderebilirsin.
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
            RENAULT CLIO YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Clio için diğer parça rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/esenyurt-renault-clio-on-takim-parcalari"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Clio Ön Takım Parçaları →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Rot, rotil, salıncak, Z rot ve süspansiyon parçaları.
              </p>
            </Link>

            <Link
              href="/renault-clio-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Renault Clio Yedek Parça →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Renault Clio yedek parça ana sayfası.
              </p>
            </Link>

            <Link
              href="/esenyurt-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Esenyurt Oto Yedek Parça →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Esenyurt ve çevresi oto yedek parça rehberi.
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
              Clio fren parçanı mağazalarda göremediysen WhatsApp'tan
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
                Clio Fren Parçası Sor
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">
            CLIO FREN BALATASI VE DİSKİ
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

        {/* FINAL CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🛑</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Renault Clio fren balatası veya diski mi arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Yıl + motor + ön/arka bilgisini WhatsApp'tan gönder.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Clio Fren Parçası Sor
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-slate-500">
            Bu içerik yedek parça araştırmasına yardımcı olmak amacıyla
            hazırlanmıştır. Fren sistemi güvenlik açısından kritik olduğundan
            arıza tespiti ve montaj işlemleri uygun teknik servis veya uzman
            tarafından yapılmalıdır.
          </p>
        </section>

        <div className="h-20 md:hidden" />
      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Renault Clio fren parçası sor"
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
          💬 Clio Fren Balatası / Diski Sor
        </a>
      </div>
    </>
  );
}
