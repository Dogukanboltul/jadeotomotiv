import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Yağ ve Filtre Değişimi | Filtre Seti Rehberi",
  description:
    "Beylikdüzü yağ ve filtre değişimi araştıranlar için yağ filtresi, hava filtresi, polen filtresi, yakıt filtresi ve araç bakım parçaları rehberi.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-yag-ve-filtre-degisimi",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20ya%C4%9F%20ve%20filtre%20bak%C4%B1m%20par%C3%A7alar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AMarka%2FModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const filters = [
  {
    title: "Yağ Filtresi",
    text: "Motor yağı içerisinde dolaşabilecek kir ve yabancı parçacıkların filtrelenmesine yardımcı olur. Filtrenin araç ve motor tipiyle uyumlu olması önemlidir.",
  },
  {
    title: "Hava Filtresi",
    text: "Motorun ihtiyaç duyduğu havanın filtrelenmesine yardımcı olur. Kirlenen hava filtresi periyodik bakım sırasında kontrol edilen temel parçalardandır.",
  },
  {
    title: "Polen Filtresi",
    text: "Dış ortamdan araç kabinine gelen havanın filtrelenmesinde görev alır. Klima ve havalandırma sistemiyle birlikte çalışan bakım parçalarındandır.",
  },
  {
    title: "Yakıt Filtresi",
    text: "Yakıt içerisindeki yabancı maddelerin yakıt sistemine ulaşmasını azaltmaya yardımcı olur. Kullanımı ve değişim aralığı araç tipine göre farklılık gösterebilir.",
  },
];

const steps = [
  "Araç marka ve modelini belirleyin",
  "Üretim yılını kontrol edin",
  "Motor tipini veya motor kodunu belirtin",
  "İhtiyaç duyulan filtre veya parça bilgisini paylaşın",
];

const faq = [
  {
    q: "Yağ ve filtre değişiminde hangi filtreler değiştirilir?",
    a: "Bakım kapsamı araca göre değişir. Yağ filtresi, hava filtresi, polen filtresi ve bazı araçlarda yakıt filtresi bakım kapsamında kontrol edilen ürünler arasındadır. Üreticinin bakım planı esas alınmalıdır.",
  },
  {
    q: "Her filtre seti her araca uyar mı?",
    a: "Hayır. Aynı marka ve modelde bile üretim yılı veya motor seçeneğine göre farklı filtreler kullanılabilir. Araç bilgileriyle uyumluluk kontrolü yapılmalıdır.",
  },
  {
    q: "Yağ filtresi seçerken nelere dikkat edilmeli?",
    a: "Filtrenin araç ve motor tipiyle uyumlu olması gerekir. Ürün kodu, araç bilgileri ve gerektiğinde teknik referanslar üzerinden eşleştirme yapılmalıdır.",
  },
  {
    q: "Beylikdüzü'nde filtre setini nasıl sorgulayabilirim?",
    a: "Araç marka, model, üretim yılı ve motor bilgisini Jade Automotive'e WhatsApp üzerinden göndererek uygun bakım parçaları hakkında bilgi alabilirsiniz.",
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
      "Beylikdüzü Yağ ve Filtre Değişimi | Filtre Seti Rehberi",
    description:
      "Beylikdüzü ve çevresinde yağ ve filtre değişimi araştıranlar için filtre ve bakım parçaları rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-yag-ve-filtre-degisimi",
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
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
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
                Yağ ve Filtre Değişimi
              </span>
            </div>

            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              BAKIM • YAĞ • FİLTRE REHBERİ
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-300">
                Yağ ve Filtre Değişimi
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Beylikdüzü ve çevresinde yağ ve filtre değişimi araştırıyorsanız,
              aracınız için doğru bakım parçalarının belirlenmesi önemlidir.
              Yağ filtresi, hava filtresi, polen filtresi ve yakıt filtresi
              seçiminde araç marka, model, yıl ve motor bilgileri dikkate
              alınmalıdır.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
              >
                Filtre Setini WhatsApp'tan Sor
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
              Marka + model + yıl + motor bilgisini gönderin, aracınıza uygun
              filtreleri birlikte belirleyelim.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <article>
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Bakım rehberi
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Yağ ve Filtre Değişimi Neden Önemlidir?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Motor yağı ve filtreler aracın periyodik bakım programının
                önemli parçaları arasındadır. Motor yağı çalışan parçaların
                yağlanmasına yardımcı olurken filtreler farklı sistemlerde
                kir ve yabancı maddelerin tutulmasına yardımcı olur.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Kullanılacak yağın teknik özellikleri ve filtrelerin tipi
                araçtan araca değişebilir. Bu nedenle bakım ürünlerinin araç
                üreticisinin belirttiği teknik gereksinimlere göre seçilmesi
                gerekir.
              </p>
            </article>

            <aside className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
              <p className="text-sm font-black text-cyan-300">
                HIZLI PARÇA SORGULAMA
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Hangi filtre aracınıza uyuyor?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Araç bilgilerinizi WhatsApp üzerinden gönderin. Uygun filtre
                ve bakım parçalarının belirlenmesi için birlikte kontrol
                edelim.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-cyan-400 px-5 py-4 text-center font-black text-[#06111f]"
              >
                30 Saniyede Parça Sor
              </a>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-black uppercase tracking-wider text-cyan-300">
              Filtre çeşitleri
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Yağ ve Filtre Bakımında Hangi Parçalar Kullanılır?
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {filters.map((filter) => (
                <article
                  key={filter.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-black text-cyan-300">
                      ✓
                    </span>
                    <h3 className="text-2xl font-black">{filter.title}</h3>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {filter.text}
                  </p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-bold text-cyan-300"
                  >
                    Aracına uygun olanı sor →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <article>
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Doğru filtre
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Aracınıza Uygun Filtre Nasıl Bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Sadece aracın marka ve modelini bilmek bazı durumlarda yeterli
                olmayabilir. Aynı modelin farklı üretim yıllarında veya motor
                seçeneklerinde farklı filtreler kullanılabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Bu nedenle ürün eşleştirmesinde mümkün olduğunca detaylı araç
                bilgisi kullanmak doğru parçayı bulmayı kolaylaştırır.
              </p>
            </article>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-black text-cyan-300">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="max-w-4xl">
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Filtre seti
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Filtreleri Tek Tek mi, Set Olarak mı Almalısınız?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Bakımda ihtiyaç duyulan ürünler aracın bakım programına göre
                belirlenir. Birden fazla filtrenin aynı bakım döneminde
                değişmesi gerekiyorsa araçla uyumlu ürünlerin birlikte
                sorgulanması pratik olabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Ancak bir ürünün "filtre seti" olarak sunulması, otomatik
                olarak her motor seçeneğine uyacağı anlamına gelmez. Set
                içerisindeki parçaların aracınızla tek tek uyumluluğu kontrol
                edilmelidir.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
                  Filtre Setini Sor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-black uppercase tracking-wider text-cyan-300">
            Bakım kümesi
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Beylikdüzü Araç Bakım Rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/beylikduzu-periyodik-bakim"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Periyodik Bakım →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Periyodik bakımda kontrol edilen yedek parçaları inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-filtre-seti"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Filtre Seti →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Yağ, hava, polen ve yakıt filtresi seçeneklerini inceleyin.
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
                Ana Beylikdüzü oto yedek parça rehberine ulaşın.
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
              Yağ ve filtre bakım parçalarını aracınıza göre sorgulayın
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Araç marka, model, üretim yılı ve motor bilgisini gönderin.
              Aracınıza uygun filtre ve bakım parçaları hakkında bilgi alın.
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
            sayfa yağ veya filtre değişim hizmeti sunulduğu anlamına gelmez.
            Jade Automotive yedek parça odaklıdır. Bakım işlemleri ve montaj
            için uygun teknik servis veya uzmana başvurulmalıdır.
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
          Filtre Setini WhatsApp'tan Sor
        </a>
      </div>
    </>
  );
}
