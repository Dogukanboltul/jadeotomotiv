import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Periyodik Bakım | Bakım Parçaları ve Filtre Rehberi",
  description:
    "Beylikdüzü periyodik bakım araştıranlar için yağ filtresi, hava filtresi, polen filtresi, yakıt filtresi ve bakımda kontrol edilen yedek parçalar hakkında rehber.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-periyodik-bakim",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%C4%B1n%20periyodik%20bak%C4%B1m%C4%B1%20i%C3%A7in%20yedek%20par%C3%A7a%20ve%20filtre%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AMarka%2FModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const maintenanceParts = [
  {
    title: "Yağ Filtresi",
    text: "Motor yağı içerisinde dolaşabilecek kir ve parçacıkların filtrelenmesine yardımcı olur. Araçla uyumlu yağ filtresinin belirlenmesi bakımın önemli adımlarındandır.",
  },
  {
    title: "Hava Filtresi",
    text: "Motorun ihtiyaç duyduğu havanın filtrelenmesine yardımcı olur. Kullanım koşullarına bağlı olarak periyodik bakım sırasında kontrol edilir.",
  },
  {
    title: "Polen Filtresi",
    text: "Araç kabinine giren havanın filtrelenmesinde görev alır. Klima ve havalandırma sisteminin kullanımı açısından düzenli kontrol edilmesi önemlidir.",
  },
  {
    title: "Yakıt Filtresi",
    text: "Yakıt içerisindeki yabancı maddelerin sisteme ulaşmasını azaltmaya yardımcı olur. Değişim gereksinimi araç modeline ve üretici bakım planına göre farklılık gösterebilir.",
  },
  {
    title: "Fren Sistemi Parçaları",
    text: "Periyodik kontroller sırasında fren balataları ve diskler gibi güvenlikle ilişkili parçaların durumu da uzman tarafından değerlendirilebilir.",
  },
  {
    title: "Ön Takım ve Süspansiyon",
    text: "Rot başı, rotil, salıncak, Z rot ve süspansiyon bağlantıları gibi parçalar kullanım koşullarına bağlı olarak kontrol edilebilir.",
  },
];

const faq = [
  {
    q: "Periyodik bakımda hangi parçalar değiştirilir?",
    a: "Değiştirilecek parçalar aracın marka, model, motor tipi, kilometresi ve üreticinin bakım planına göre değişir. Yağ ve çeşitli filtreler bakım kapsamında sık kontrol edilen ürünler arasındadır.",
  },
  {
    q: "Filtre seti her araçta aynı mıdır?",
    a: "Hayır. Yağ, hava, polen ve yakıt filtrelerinin teknik özellikleri araçtan araca değişebilir. Araç bilgilerine göre uyumluluk kontrolü yapılmalıdır.",
  },
  {
    q: "Periyodik bakım kaç kilometrede yapılır?",
    a: "Bakım aralığı araç üreticisinin belirlediği programa, motor tipine, kullanım koşullarına ve zamana göre değişebilir. Araç kullanım kılavuzundaki bakım planı esas alınmalıdır.",
  },
  {
    q: "Beylikdüzü'nde bakım parçalarını nasıl sorgulayabilirim?",
    a: "Araç marka, model, üretim yılı ve mümkünse motor bilgisini WhatsApp üzerinden göndererek Jade Automotive'den uyumlu bakım parçaları hakkında bilgi alabilirsiniz.",
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
    headline:
      "Beylikdüzü Periyodik Bakım | Bakım Parçaları ve Filtre Rehberi",
    description:
      "Beylikdüzü ve çevresinde periyodik bakım araştıranlar için bakım parçaları ve filtre rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-periyodik-bakim",
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

      <main className="min-h-screen bg-[#06111f] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-cyan-300">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="hover:text-cyan-300"
              >
                Beylikdüzü Oto Yedek Parça
              </Link>
              <span>/</span>
              <span className="text-cyan-300">Periyodik Bakım</span>
            </div>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              ARAÇ BAKIM & YEDEK PARÇA REHBERİ
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-300">Periyodik Bakım</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Beylikdüzü ve çevresinde periyodik bakım araştırıyorsanız,
              aracınızın bakımında kullanılacak filtre ve yedek parçaların
              doğru seçilmesi önemlidir. Yağ filtresi, hava filtresi, polen
              filtresi, yakıt filtresi ve bakım sırasında kontrol edilen diğer
              parçaları bu rehberde inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                Bakım Parçalarını WhatsApp'tan Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold"
              >
                Trendyol
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold"
              >
                Hepsiburada
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Model + yıl + motor bilgisi + aradığınız parçayı gönderin,
              aracınıza uygun bakım ürünlerini birlikte belirleyelim.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <article>
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Periyodik bakım nedir?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Araç Periyodik Bakımında Neler Kontrol Edilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Periyodik bakım, aracın üretici tarafından belirlenen bakım
                programına uygun şekilde belirli zaman veya kilometre
                aralıklarında kontrol edilmesidir. Bakım kapsamı her araçta
                aynı değildir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Motor yağı ve filtrelerin yanı sıra fren sistemi, ön takım,
                süspansiyon ve diğer mekanik bileşenlerin durumu da bakım
                sırasında kontrol edilebilir. Hangi parçanın değiştirilmesi
                gerektiği aracın teknik özellikleri ve mevcut durumuna göre
                belirlenmelidir.
              </p>
            </article>

            <aside className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
              <p className="text-sm font-black text-cyan-300">
                30 SANİYEDE PARÇA SOR
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Bakım zamanı geldiyse araç bilgilerini gönder
              </h2>

              <div className="mt-6 space-y-3 text-slate-300">
                <p>✓ Marka / Model</p>
                <p>✓ Model Yılı</p>
                <p>✓ Motor Bilgisi</p>
                <p>✓ Aranan Filtre / Parça</p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block rounded-xl bg-cyan-400 px-5 py-4 text-center font-black text-[#06111f]"
              >
                WhatsApp'tan Gönder
              </a>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-black uppercase tracking-wider text-cyan-300">
              Bakım ürünleri
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Periyodik Bakımda Kullanılan Yedek Parçalar
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {maintenanceParts.map((part) => (
                <article
                  key={part.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
                >
                  <div className="mb-5 h-1 w-12 rounded-full bg-cyan-300" />
                  <h3 className="text-xl font-black">{part.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{part.text}</p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-bold text-cyan-300"
                  >
                    Uyumlu parçayı sor →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-wider text-cyan-300">
              Filtre seçimi
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Aracınıza Uygun Filtre Setini Nasıl Belirlersiniz?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Filtrelerin dış görünüşünün benzer olması araçla uyumlu olduğu
              anlamına gelmez. Araç marka, model, üretim yılı ve motor
              seçeneklerine göre kullanılan filtreler değişebilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bu nedenle bakım parçalarını seçerken araç bilgileri üzerinden
              uyumluluk kontrolü yapılması önemlidir. Elinizde eski parçanın
              ürün kodu veya referans numarası varsa sorgulamaya bunu da
              ekleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog/beylikduzu-filtre-seti"
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-300"
              >
                Beylikdüzü Filtre Seti →
              </Link>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-[#06111f]"
              >
                Filtre Seti Sor
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-black">
              Periyodik Bakımda Fren ve Ön Takım Kontrolü
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Bakım sırasında yalnızca motor yağı ve filtreler değil, aracın
              güvenli sürüşünü etkileyen mekanik parçalar da kontrol
              edilebilir. Fren balataları, fren diskleri ve ön takım
              bileşenlerinin durumu kullanım şartlarına bağlı olarak
              değerlendirilir.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/beylikduzu-fren-tamiri"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
              >
                <strong className="text-cyan-300">
                  Fren Sistemi Rehberi →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Balata, disk ve fren sistemi parçalarını inceleyin.
                </p>
              </Link>

              <Link
                href="/blog/beylikduzu-on-takim-tamiri"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
              >
                <strong className="text-cyan-300">
                  Ön Takım Rehberi →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Rot başı, rotil, salıncak ve ön takım parçalarını inceleyin.
                </p>
              </Link>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
              >
                <strong className="text-cyan-300">
                  Oto Yedek Parça →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Beylikdüzü oto yedek parça rehberine ulaşın.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-3xl font-black">Sık Sorulan Sorular</h2>

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

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 md:p-12">
            <p className="font-black text-cyan-300">JADE AUTOMOTIVE</p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
              Periyodik bakım parçalarını aracınıza göre sorgulayın
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Marka, model, yıl ve motor bilgisini gönderin. Aracınıza uygun
              filtre ve yedek parçalar hakkında bilgi alın.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-4 font-bold"
              >
                Trendyol Mağazası
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-4 font-bold"
              >
                Hepsiburada Mağazası
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 p-6 text-sm leading-7 text-slate-400">
            <strong className="text-slate-200">Bilgilendirme:</strong> Bu
            içerik periyodik bakım hizmeti sunulduğu anlamına gelmez. Jade
            Automotive yedek parça odaklıdır. Bakım işlemleri, arıza tespiti
            ve montaj için uygun teknik servis veya uzmana başvurulmalıdır.
          </div>
        </section>

        <div className="h-20 md:hidden" />
      </main>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl md:bottom-6"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M19.11 17.47c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
          <path d="M16.03 3C8.85 3 3.02 8.81 3.02 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.61h.01c7.17 0 13-5.82 13-12.98C29.03 8.81 23.2 3 16.03 3zm0 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.77 10.77 0 0 1-1.66-5.74c0-5.96 4.86-10.8 10.82-10.8 5.96 0 10.81 4.84 10.81 10.8 0 5.96-4.86 10.69-10.92 10.69z" />
        </svg>
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#06111f]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-cyan-400 py-4 text-center font-black text-[#06111f]"
        >
          Bakım Parçalarını WhatsApp'tan Sor
        </a>
      </div>
    </>
  );
}
