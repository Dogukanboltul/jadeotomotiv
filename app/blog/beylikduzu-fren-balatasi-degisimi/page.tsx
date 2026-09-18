import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Fren Balatası Değişimi | Balata ve Disk Rehberi",
  description:
    "Beylikdüzü fren balatası değişimi araştıranlar için fren balatası aşınma belirtileri, fren diski kontrolü ve araca uygun fren balatası seçimi rehberi.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-fren-balatasi-degisimi",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20fren%20balatas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AMarka%2FModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%2FArka%20Balata%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const symptoms = [
  "Fren sırasında normalden farklı ses duyulması",
  "Fren performansında değişiklik hissedilmesi",
  "Fren pedalında veya direksiyonda titreşim oluşması",
  "Balata aşınma uyarısının görülmesi",
  "Fren sisteminden sürtünme benzeri ses gelmesi",
  "Bakım sırasında balata kalınlığının azaldığının belirlenmesi",
];

const checks = [
  {
    title: "Fren Balatası",
    text: "Balatanın kalınlığı ve mevcut durumu kontrol edilir. Değişim gerekiyorsa araçla uyumlu ön veya arka fren balatasının belirlenmesi gerekir.",
  },
  {
    title: "Fren Diski",
    text: "Balata değişimi sırasında fren disklerinin yüzeyi ve durumu da uzman tarafından kontrol edilebilir. Diskin durumu fren sisteminin çalışması açısından önemlidir.",
  },
  {
    title: "Fren Sistemi",
    text: "Ses, titreşim veya performans değişikliğinin yalnızca balatadan kaynaklandığı varsayılmamalıdır. Fren sistemi bütün olarak değerlendirilmelidir.",
  },
];

const faq = [
  {
    q: "Fren balatasının değişmesi gerektiği nasıl anlaşılır?",
    a: "Fren sırasında farklı sesler, fren performansında değişiklik veya bazı araçlarda balata uyarısı görülebilir. Ancak kesin değerlendirme için fren sisteminin uygun bir teknik servis veya uzman tarafından kontrol edilmesi gerekir.",
  },
  {
    q: "Fren balatası değişirken disk de değişir mi?",
    a: "Her balata değişiminde fren diskinin değiştirilmesi gerektiği söylenemez. Diskin mevcut durumu, ölçüleri ve üretici kriterleri uzman tarafından değerlendirilmelidir.",
  },
  {
    q: "Ön ve arka fren balatası aynı mıdır?",
    a: "Genellikle ön ve arka fren sistemlerinde farklı balata tipleri kullanılır. Parça seçimi araç marka, model, üretim yılı ve fren sistemi özelliklerine göre yapılmalıdır.",
  },
  {
    q: "Aracıma uygun fren balatasını nasıl bulabilirim?",
    a: "Araç marka, model, üretim yılı ve mümkünse motor veya şasi bilgilerini paylaşarak uyumlu fren balatası hakkında Jade Automotive'den bilgi alabilirsiniz.",
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
      "Beylikdüzü Fren Balatası Değişimi | Balata ve Disk Rehberi",
    description:
      "Beylikdüzü ve çevresinde fren balatası değişimi araştıranlar için balata, disk ve doğru yedek parça seçimi rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-fren-balatasi-degisimi",
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
          <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

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
              <span className="text-cyan-300">
                Fren Balatası Değişimi
              </span>
            </div>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              FREN • BALATA • DİSK REHBERİ
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-300">
                Fren Balatası Değişimi
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Beylikdüzü ve çevresinde fren balatası değişimi araştırıyorsanız,
              aracınızın fren sistemine uygun balatanın seçilmesi büyük önem
              taşır. Balata aşınma belirtileri, fren diski kontrolü ve doğru
              yedek parça seçimi hakkında bilmeniz gerekenleri bu rehberde
              bulabilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
              >
                Aracına Uygun Balatayı Sor →
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
              Marka + model + yıl bilgisini gönderin, aracınıza uygun fren
              balatasını birlikte belirleyelim.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <article>
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Fren balatası
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Fren Balatası Ne İşe Yarar?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Fren balatası, fren sisteminin temel aşınma parçalarından
                biridir. Frenleme sırasında balata ve fren diski arasındaki
                sürtünme aracın yavaşlamasına yardımcı olur.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Balatalar kullanım sürecinde aşınır. Aşınma hızı araç tipi,
                sürüş koşulları, kullanım şekli ve fren sisteminin yapısına
                göre değişebilir. Bu nedenle değişim zamanı yalnızca kilometre
                üzerinden değerlendirilmemelidir.
              </p>
            </article>

            <aside className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
              <p className="text-sm font-black text-cyan-300">
                30 SANİYEDE BALATA SOR
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Hangi fren balatası aracınıza uyuyor?
              </h2>

              <div className="mt-5 space-y-3 text-slate-300">
                <p>✓ Marka / Model</p>
                <p>✓ Üretim Yılı</p>
                <p>✓ Motor Bilgisi</p>
                <p>✓ Ön / Arka Balata</p>
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
              Aşınma belirtileri
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Fren Balatası Değişim Zamanı Nasıl Anlaşılır?
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Aşağıdaki belirtiler fren sisteminin kontrol edilmesi gerektiğini
              gösterebilir. Belirtiye bakılarak tek başına balata arızası
              teşhisi yapılmamalıdır.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="font-black text-cyan-300">✓</span>
                  <p className="text-slate-300">{symptom}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-black uppercase tracking-wider text-cyan-300">
            Fren sistemi
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Balata Değişiminde Neler Kontrol Edilir?
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {checks.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-cyan-300" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <article>
                <p className="font-black uppercase tracking-wider text-cyan-300">
                  Doğru parça seçimi
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Aracınıza Uygun Fren Balatası Nasıl Bulunur?
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Aynı otomobil modelinin farklı motor, üretim yılı veya fren
                  sistemi seçeneklerinde farklı fren balataları
                  kullanılabilir. Bu nedenle yalnızca araç modeline bakarak
                  parça seçmek her zaman yeterli değildir.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  Araç marka, model, yıl ve mümkünse motor veya şasi
                  bilgilerinin kullanılması doğru parçanın belirlenmesini
                  kolaylaştırır.
                </p>
              </article>

              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
                <p className="font-black text-cyan-300">
                  FREN BALATASI SORGULAMA
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Parçayı tahmin ederek alma
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Araç bilgilerini göndererek uyumlu fren balatası hakkında
                  bilgi al. Elinde eski balatanın ürün kodu varsa onu da
                  mesaja ekleyebilirsin.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
                >
                  Balata Fiyatı ve Uyumluluk Sor →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-black uppercase tracking-wider text-cyan-300">
            İlgili rehberler
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Beylikdüzü Fren ve Yedek Parça Rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/beylikduzu-fren-balatasi"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Fren Balatası →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren balatası seçenekleri hakkında detaylı bilgi alın.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-fren-balatasi-fiyatlari"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Fren Balatası Fiyatları →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren balatası fiyatlarını etkileyen faktörleri inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-fren-tamiri"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Fren Tamiri →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren sistemi arızalarında kontrol edilen parçaları inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-periyodik-bakim"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Periyodik Bakım →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Bakım sırasında kontrol edilen parçaları inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-on-takim-tamiri"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Ön Takım →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Ön takım parçaları ve arıza belirtileri rehberi.
              </p>
            </Link>

            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Oto Yedek Parça →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Ana Beylikdüzü oto yedek parça sayfasına ulaşın.
              </p>
            </Link>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-5xl px-5 py-16">
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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 md:p-12">
            <p className="font-black text-cyan-300">JADE AUTOMOTIVE</p>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-5xl">
              Aracınıza uygun fren balatasını sorgulayın
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Marka, model ve üretim yılı bilgisini gönderin. Aracınıza uygun
              fren balatası hakkında bilgi alın.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                WhatsApp'tan Balata Sor
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
            içerik Jade Automotive tarafından fren balatası değişim veya tamir
            hizmeti verildiği anlamına gelmez. Jade Automotive yedek parça
            odaklıdır. Fren sistemi kontrolü, arıza tespiti ve montaj işlemleri
            uygun teknik servis veya uzman tarafından yapılmalıdır.
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
          Aracına Uygun Fren Balatasını Sor
        </a>
      </div>
    </>
  );
}
