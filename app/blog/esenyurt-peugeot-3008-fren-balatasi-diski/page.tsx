import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esenyurt Peugeot 3008 Fren Balatası ve Diski | Jade Automotive",
  description:
    "Esenyurt Peugeot 3008 fren balatası ve fren diski arayanlar için parça uyumluluğu, aşınma belirtileri ve doğru parça seçimi. Yıl ve motor bilgisini WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/esenyurt-peugeot-3008-fren-balatasi-diski",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0APeugeot%203008%20i%C3%A7in%20fren%20balatas%C4%B1%20%2F%20fren%20diski%20bak%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%20%2F%20Arka%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const symptoms = [
  {
    icon: "🔊",
    title: "Fren Yaparken Ses",
    text: "Frenleme sırasında alışılmadık sesler duyulması fren sisteminin kontrol edilmesini gerektirebilir.",
  },
  {
    icon: "〰️",
    title: "Frenlemede Titreşim",
    text: "Fren sırasında pedal veya direksiyonda hissedilen titreşim fren sistemiyle ilgili farklı nedenlerden kaynaklanabilir.",
  },
  {
    icon: "🛑",
    title: "Fren Hissinin Değişmesi",
    text: "Fren pedalında veya aracın frenleme davranışında fark hissediliyorsa sistem kontrol edilmelidir.",
  },
  {
    icon: "🛞",
    title: "Disk Yüzeyinde Aşınma",
    text: "Disk yüzeyindeki çizik, düzensiz aşınma veya farklılıklar uzman tarafından değerlendirilmelidir.",
  },
];

const faq = [
  {
    q: "Peugeot 3008 için hangi fren balatasını almalıyım?",
    a: "Peugeot 3008'in üretim yılı, motoru ve araç versiyonuna göre parça farklılıkları olabilir. Araç bilgilerinizi göndererek uygun parçanın kontrol edilmesi daha sağlıklıdır.",
  },
  {
    q: "Peugeot 3008 fren balatası değişirken disk de değişir mi?",
    a: "Her balata değişiminde fren diskinin de değiştirilmesi gerektiği şeklinde genel bir kural yoktur. Diskin kalınlığı, yüzeyi ve genel durumu teknik kontrolde değerlendirilmelidir.",
  },
  {
    q: "Peugeot 3008 fren yaparken titriyor, sorun disk mi?",
    a: "Frenleme sırasında titreşim fren sistemiyle ilişkili olabilir ancak tek başına fren diski arızasını kanıtlamaz. Kesin neden uygun teknik kontrolle belirlenmelidir.",
  },
  {
    q: "Peugeot 3008 ön ve arka fren balataları aynı mı?",
    a: "Ön ve arka fren sistemlerinde farklı parçalar kullanılabilir. Ayrıca araç yılı ve versiyonu da parça seçiminde önemlidir.",
  },
  {
    q: "Parça kodunu bilmiyorum, yine de sorabilir miyim?",
    a: "Evet. Peugeot 3008'in üretim yılı, motor bilgisi ve ön veya arka fren için parça aradığınızı WhatsApp üzerinden gönderebilirsiniz.",
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
    headline: "Esenyurt Peugeot 3008 Fren Balatası ve Diski",
    description:
      "Peugeot 3008 fren balatası, fren diski, fren belirtileri ve doğru parça seçimi hakkında yedek parça rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/esenyurt-peugeot-3008-fren-balatasi-diski",
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
              <Link href="/blog/esenyurt-peugeot-yedek-parca">
                Peugeot Yedek Parça
              </Link>
              <span>›</span>
              <span>3008 Fren</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#62e893]">
              🛑 Peugeot 3008 fren parçanı birlikte bulalım
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Esenyurt Peugeot 3008{" "}
              <span className="text-cyan-300">
                Fren Balatası ve Diski
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Peugeot 3008 için fren balatası veya fren diski mi arıyorsun?
              Aracının{" "}
              <strong className="text-white">
                yılı + motoru + ön/arka
              </strong>{" "}
              bilgisini gönder. Uygun parçayı bulmana yardımcı olalım.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <h2 className="text-2xl font-black">
                “3008'ime hangi balata veya disk uyuyor?”
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Parça kodunu bilmene gerek yok 👋 Araç bilgilerini
                WhatsApp'tan gönder.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a]"
              >
                💬 Peugeot 3008 Fren Parçası Sor
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCT INTENT */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">
            PEUGEOT 3008 FREN YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Hangi fren parçasını arıyorsun?
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-4xl">🛑</div>

              <h3 className="mt-5 text-2xl font-black">
                Peugeot 3008 Fren Balatası
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Ön veya arka fren balatası arıyorsan Peugeot 3008'in üretim
                yılı ve motor bilgisini göndererek parça uygunluğunu
                sorabilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-[#25D366] px-5 py-3 font-black text-[#04130a]"
              >
                3008 Fren Balatası Sor →
              </a>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-4xl">⭕</div>

              <h3 className="mt-5 text-2xl font-black">
                Peugeot 3008 Fren Diski
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Ön veya arka fren diski seçiminde araç versiyonuna uygun
                parçanın kontrol edilmesi önemlidir. Araç bilgilerini
                WhatsApp'tan gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-[#25D366] px-5 py-3 font-black text-[#04130a]"
              >
                3008 Fren Diski Sor →
              </a>
            </article>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <span className="font-black text-cyan-300">
              PEUGEOT 3008 FREN BELİRTİLERİ
            </span>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
              3008 fren sisteminde bu belirtiler varsa kontrol gerekebilir
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Belirti tek başına hangi parçanın arızalı olduğunu göstermez.
              Fren sistemi güvenlik açısından önemli olduğu için uygun teknik
              kontrol yapılmalıdır.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {symptoms.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH INTENT */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FRENE BASINCA TİTREME
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Peugeot 3008 fren yaparken titriyor mu?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Frenleme sırasında direksiyon veya pedal üzerinde titreşim
                hissedilmesi fren sistemiyle ilişkili olabilir. Ancak bu
                belirtiye bakarak doğrudan “fren diski bozuk” demek doğru
                değildir.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Disk, balata ve ilgili fren sistemi parçalarının teknik olarak
                kontrol edilmesi gerekir.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-black text-cyan-300">
                FRENDEN SES GELMESİ
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Peugeot 3008 frenden ses geliyor mu?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Fren sırasında gelen alışılmadık sesler balata, disk veya fren
                sistemindeki başka bir unsurla ilişkili olabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Sesin kaynağı belirlenmeden parça değişimine karar verilmemesi,
                sistemin uzman tarafından kontrol edilmesi gerekir.
              </p>
            </article>
          </div>
        </section>

        {/* WHATSAPP */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-4xl">
                  3008'in fren parçasını bulmakla uğraşma 👋
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Yıl + motor + ön/arka bilgisini gönder. Fren balatası veya
                  fren diski ihtiyacını bize yaz.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-8 py-5 text-center font-black text-white"
              >
                WhatsApp'tan Sor →
              </a>
            </div>
          </div>
        </section>

        {/* COMPATIBILITY */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
            <article>
              <span className="font-black text-cyan-300">
                DOĞRU PARÇA SEÇİMİ
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Her Peugeot 3008'e aynı fren parçası olmayabilir
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Peugeot 3008'in üretim yılı, motor ve versiyonuna göre fren
                sistemi parçalarında farklılık bulunabilir. Bu nedenle yalnızca
                “3008 fren balatası” veya “3008 fren diski” bilgisiyle parça
                seçmek yerine araç detaylarının kontrol edilmesi önemlidir.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Peugeot 3008",
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
                Eski balata veya diskin bilgisi var mı?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Parça kutusu, referans numarası veya elindeki parçayla ilgili
                bilgi varsa WhatsApp'tan gönderebilirsin.
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

        {/* INTERNAL SEO */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">
            PEUGEOT YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Peugeot 3008 ve Esenyurt yedek parça rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/esenyurt-peugeot-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Esenyurt Peugeot Yedek Parça →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Peugeot modelleri ve yedek parça grupları.
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
                Esenyurt ve çevresi için oto yedek parça rehberi.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-fren-diski-degisimi"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Fren Diski Rehberi →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren diski ve balata-disk ilişkisi hakkında bilgi.
              </p>
            </Link>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-2xl font-black">
              Peugeot 3008 yedek parçanı online da ara
            </h2>

            <p className="mt-3 text-slate-400">
              Aradığın parçayı mağazalarda göremiyorsan doğrudan
              WhatsApp'tan sor.
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
                3008 Fren Parçası Sor
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">
            PEUGEOT 3008 FREN BALATASI & DİSKİ
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

        {/* FINAL */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/10 to-cyan-400/10 p-8 text-center md:p-14">
            <div className="text-5xl">🛑</div>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black md:text-5xl">
              Peugeot 3008 fren balatası veya diski mi arıyorsun?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Aracının yıl ve motor bilgisini gönder. Ön veya arka fren
              parçası ihtiyacını bize yaz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Peugeot 3008 Fren Parçası Sor
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-slate-500">
            Bu sayfa yedek parça araştırmasına yardımcı olmak amacıyla
            hazırlanmıştır. Frenleme sırasında ses, titreşim veya farklı bir
            davranış tek başına belirli bir parçanın arızalı olduğunu
            göstermez. Fren sistemi güvenlik açısından kritik olduğundan arıza
            tespiti ve montaj işlemleri uygun teknik servis veya uzman
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
        aria-label="Peugeot 3008 fren parçası sor"
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

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 3008 Fren Balatası / Diski Sor
        </a>
      </div>
    </>
  );
}
