import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Ön Takım Tamiri | Ön Takım Arızaları ve Yedek Parça",
  description:
    "Beylikdüzü ön takım tamiri araştıranlar için rot başı, rotil, salıncak, Z rot, amortisör ve ön takım yedek parçaları hakkında kapsamlı rehber.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-on-takim-tamiri",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%C4%B1n%20%C3%B6n%20tak%C4%B1m%C4%B1%20i%C3%A7in%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20Ara%C3%A7%20marka%2Fmodel%3A%20%20Y%C4%B1l%3A%20%20Ar%C4%B1za%2Fpar%C3%A7a%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const parts = [
  {
    title: "Rot Başı",
    text: "Direksiyon hareketinin tekerleklere aktarılmasında görev alan önemli ön takım parçalarındandır. Boşluk veya aşınma durumunda direksiyon tepkilerinde ve yol tutuşunda değişiklik hissedilebilir.",
  },
  {
    title: "Rotil",
    text: "Süspansiyon ve tekerlek bağlantısında hareketli bir mafsal görevi görür. Aşınmış bir rotil, ön takımdan gelen seslerin ve sürüşte oluşan boşluk hissinin nedenlerinden biri olabilir.",
  },
  {
    title: "Salıncak",
    text: "Tekerlek ile araç gövdesi arasındaki süspansiyon hareketinin kontrollü gerçekleşmesine yardımcı olur. Salıncak ve burçlarında oluşan aşınmalar ön takım kontrolünde değerlendirilir.",
  },
  {
    title: "Z Rot",
    text: "Viraj demirinin süspansiyon sistemiyle bağlantısını sağlayan parçalardandır. Özellikle bozuk ve kasisli yollarda ortaya çıkan tıkırtılarda kontrol edilen parçalardan biridir.",
  },
  {
    title: "Amortisör",
    text: "Aracın yol üzerindeki salınımını kontrol etmeye yardımcı olur. Yol tutuşu, konfor ve süspansiyon sisteminin dengeli çalışması açısından önemlidir.",
  },
  {
    title: "Ön Takım Bağlantı Parçaları",
    text: "Burçlar, bağlantı elemanları ve diğer süspansiyon parçaları ön takım sisteminin birlikte çalışmasını sağlar. Doğru parçanın araç marka, model ve yılına göre belirlenmesi önemlidir.",
  },
];

const symptoms = [
  "Bozuk yolda ön taraftan tıkırtı veya vuruntu gelmesi",
  "Direksiyonda boşluk veya normalden farklı tepki hissedilmesi",
  "Araçta sağa veya sola çekme eğilimi",
  "Kasis ve çukurlarda ön taraftan ses gelmesi",
  "Lastiklerde düzensiz aşınma görülmesi",
  "Sürüş sırasında ön tarafta titreşim hissedilmesi",
];

export default function Page() {
  const faq = [
    {
      q: "Ön takımdan ses gelmesi hangi parçadan kaynaklanır?",
      a: "Tek bir parçaya bakılarak kesin neden söylenemez. Rot başı, rotil, salıncak, Z rot, burçlar, amortisör ve bağlantı elemanları kontrol edilebilir. Arızanın uygun bir teknik servis veya uzman tarafından teşhis edilmesi gerekir.",
    },
    {
      q: "Ön takım parçaları araç modeline göre değişir mi?",
      a: "Evet. Ön takım parçalarının uyumluluğu marka, model, üretim yılı, motor ve bazı araçlarda şasi bilgilerine göre değişebilir.",
    },
    {
      q: "Beylikdüzü'nde ön takım yedek parçası nasıl bulabilirim?",
      a: "Aracınızın marka, model, yılı ve ihtiyaç duyduğunuz parçayı Jade Automotive'e WhatsApp üzerinden ileterek uygun yedek parça hakkında bilgi alabilirsiniz.",
    },
    {
      q: "Ön takım arızasında parçayı kendim seçebilir miyim?",
      a: "Benzer görünen parçaların teknik özellikleri farklı olabilir. Önce arızanın teşhis edilmesi, ardından araç bilgilerine göre uyumlu parçanın belirlenmesi daha sağlıklı olur.",
    },
  ];

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
      "Beylikdüzü Ön Takım Tamiri | Ön Takım Arızaları ve Yedek Parça",
    description:
      "Beylikdüzü ve çevresinde ön takım arızaları, belirtileri ve ön takım yedek parçaları hakkında rehber.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-on-takim-tamiri",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen bg-[#06111f] text-white">
        <section className="relative overflow-hidden border-b border-cyan-400/10">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
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
              <span className="text-cyan-300">Ön Takım Tamiri</span>
            </div>

            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              ÖN TAKIM • ARIZA • YEDEK PARÇA REHBERİ
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-400">Ön Takım Tamiri</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aracınızın ön tarafından ses mi geliyor? Direksiyonda boşluk,
              titreşim veya yol tutuşunda farklılık mı hissediyorsunuz?
              Beylikdüzü ve çevresinde ön takım tamiri araştırırken hangi
              parçaların kontrol edildiğini ve doğru yedek parçayı nasıl
              belirleyebileceğinizi bu rehberde inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
              >
                WhatsApp'tan Parça Sor →
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold hover:bg-white/10"
              >
                Trendyol Mağazası
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold hover:bg-white/10"
              >
                Hepsiburada Mağazası
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Marka + model + yıl + ihtiyaç duyduğunuz parçayı gönderin,
              aracınıza uygun parçayı birlikte belirleyelim.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
            <div>
              <p className="mb-3 font-bold uppercase tracking-wider text-cyan-400">
                Ön takım sistemi
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Ön Takım Tamirinde Hangi Parçalar Kontrol Edilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Ön takım, aracın direksiyon ve süspansiyon sistemleriyle
                bağlantılı birçok parçanın birlikte çalıştığı bir yapıdır.
                Sürüş sırasında ortaya çıkan ses, boşluk, titreşim veya
                düzensiz lastik aşınması gibi belirtilerin kaynağını anlamak
                için sistemin bütün olarak kontrol edilmesi gerekir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Arızanın hangi parçadan kaynaklandığı belirlendikten sonra,
                değiştirilecek yedek parçanın aracın marka, model, üretim yılı
                ve teknik özellikleriyle uyumlu olması önemlidir.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
              <div className="text-sm font-bold text-cyan-300">
                HIZLI PARÇA SORGULAMA
              </div>
              <div className="mt-3 text-2xl font-black">
                30 saniyede parça sor
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                WhatsApp mesajına aracınızın bilgilerini ve aradığınız parçayı
                yazmanız yeterli.
              </p>
              <div className="mt-5 space-y-2 text-sm text-slate-300">
                <div>✓ Marka / Model</div>
                <div>✓ Üretim Yılı</div>
                <div>✓ Aranan Parça</div>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-cyan-400 px-5 py-4 text-center font-black text-[#06111f]"
              >
                WhatsApp'tan Gönder
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="mb-3 font-bold uppercase tracking-wider text-cyan-400">
              Parça rehberi
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Ön Takım Yedek Parçaları
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {parts.map((part) => (
                <article
                  key={part.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-black text-cyan-300">
                    ✓
                  </div>
                  <h3 className="text-xl font-black">{part.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{part.text}</p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-bold text-cyan-300 hover:text-cyan-200"
                  >
                    Bu parçayı sor →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold uppercase tracking-wider text-cyan-400">
                Belirtiler
              </p>
              <h2 className="text-3xl font-black">
                Ön Takım Arızası Nasıl Anlaşılır?
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Aşağıdaki durumlar ön takım veya süspansiyon sisteminde kontrol
                gerektiren bir probleme işaret edebilir. Ancak yalnızca
                belirtiye bakılarak hangi parçanın arızalı olduğu kesin olarak
                belirlenemez.
              </p>
            </div>

            <div className="space-y-3">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="font-black text-cyan-400">✓</span>
                  <span className="text-slate-300">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="max-w-4xl">
              <p className="mb-3 font-bold uppercase tracking-wider text-cyan-400">
                Doğru parça seçimi
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Ön Takım Tamiri Sonrası Doğru Yedek Parçayı Bulmak
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Ön takım kontrolü sonucunda değişmesi gereken parça
                belirlendiyse sıradaki önemli konu araçla uyumlu yedek parçanın
                seçilmesidir. Aynı araç modelinde üretim yılı, motor tipi veya
                farklı teknik versiyonlara göre parça değişiklikleri
                bulunabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Bu nedenle yalnızca parçanın adına göre seçim yapmak yerine
                araç bilgileriyle birlikte sorgulama yapılması daha doğru
                sonuç verir. Jade Automotive üzerinden Beylikdüzü ve
                çevresindeki kullanıcılar araç bilgilerini ileterek ihtiyaç
                duydukları ön takım yedek parçaları hakkında bilgi alabilir.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                Ön Takım Parçası Sor →
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-black">
            Beylikdüzü Ön Takım Yedek Parça Araştırması
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Beylikdüzü ön takım tamiri, rot başı, rotil, salıncak, Z rot,
            amortisör veya diğer ön takım parçaları için araştırma
            yapıyorsanız önce aracınızdaki sorunun doğru şekilde teşhis
            edilmesi önemlidir. Ardından ihtiyaç duyulan parçayı araç
            bilgilerinize göre sorgulayabilirsiniz.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30"
            >
              <div className="font-black text-cyan-300">
                Beylikdüzü Oto Yedek Parça →
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Bölgedeki oto yedek parça rehberimizi inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-oto-tamir"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30"
            >
              <div className="font-black text-cyan-300">
                Beylikdüzü Oto Tamir →
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Araç arızalarında kontrol edilen yedek parçaları inceleyin.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-fren-balatasi"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/30"
            >
              <div className="font-black text-cyan-300">
                Beylikdüzü Fren Balatası →
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fren balatası ve fren sistemi hakkında bilgi alın.
              </p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-black">Sık Sorulan Sorular</h2>

            <div className="mt-8 grid gap-4">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-black">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 md:p-12">
            <p className="font-bold text-cyan-300">JADE AUTOMOTIVE</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
              Aracınızın ön takım parçasını mı arıyorsunuz?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Araç marka, model, üretim yılı ve ihtiyaç duyduğunuz parçayı
              WhatsApp üzerinden gönderin. Uygun yedek parçanın belirlenmesi
              için birlikte kontrol edelim.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                WhatsApp'tan Hemen Sor
              </a>
              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-4 font-bold"
              >
                Trendyol
              </a>
              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-4 font-bold"
              >
                Hepsiburada
              </a>
            </div>
          </div>
        </section>

        <div className="h-20 md:hidden" />
      </main>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan iletişime geç"
        className="fixed bottom-24 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl md:bottom-6"
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
          className="block rounded-xl bg-cyan-400 px-5 py-4 text-center font-black text-[#06111f]"
        >
          Ön Takım Parçasını WhatsApp'tan Sor
        </a>
      </div>
    </>
  );
}
