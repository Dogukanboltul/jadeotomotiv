import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Debriyaj Seti Değişimi | Baskı Balata Rehberi",
  description:
    "Beylikdüzü debriyaj seti değişimi araştıranlar için baskı balata, debriyaj rulmanı, volan, arıza belirtileri ve doğru debriyaj seti seçimi rehberi.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-debriyaj-seti-degisimi",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20debriyaj%20seti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AMarka%2FModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const symptoms = [
  "Debriyaj pedalında normalden farklı sertlik veya yumuşaklık hissedilmesi",
  "Kalkış sırasında titreme veya sarsıntı oluşması",
  "Motor devri yükselmesine rağmen hızlanmanın beklenen şekilde gerçekleşmemesi",
  "Vites geçişlerinde normalden farklı davranış hissedilmesi",
  "Debriyaj pedalına basıldığında farklı sesler duyulması",
  "Kavrama noktasında belirgin değişiklik fark edilmesi",
];

const parts = [
  {
    title: "Debriyaj Baskısı",
    text: "Debriyaj sisteminde motor ile şanzıman arasındaki güç aktarımının kontrol edilmesinde görev alan temel parçalardan biridir.",
  },
  {
    title: "Debriyaj Balatası",
    text: "Motor gücünün şanzımana aktarılmasında görev alan aşınma parçalarındandır. Araç kullanımına bağlı olarak zaman içerisinde yıpranabilir.",
  },
  {
    title: "Debriyaj Rulmanı",
    text: "Debriyaj sisteminin çalışması sırasında görev alan parçalardan biridir. Debriyaj seti kontrolünde rulmanın durumu da değerlendirilebilir.",
  },
  {
    title: "Volan",
    text: "Motor ile debriyaj sistemi arasındaki önemli bileşenlerden biridir. Bazı araçlarda çift kütleli volan kullanılabilir ve debriyaj işlemleri sırasında durumu kontrol edilebilir.",
  },
  {
    title: "Debriyaj Merkezi",
    text: "Hidrolik debriyaj sistemine sahip araçlarda pedal hareketinin sisteme aktarılmasına yardımcı olan bileşenlerden biridir.",
  },
  {
    title: "Debriyaj Seti",
    text: "Baskı, balata ve ilgili parçaların birlikte sunulduğu setler bulunabilir. Set içeriği ve uyumluluk araç modeline göre kontrol edilmelidir.",
  },
];

const faq = [
  {
    q: "Debriyaj setinin değişmesi gerektiği nasıl anlaşılır?",
    a: "Kalkışta titreme, kavrama noktasında değişiklik, güç aktarımında farklılık veya debriyaj pedalından gelen sesler kontrol gerektirebilir. Kesin arıza tespiti uygun teknik servis veya uzman tarafından yapılmalıdır.",
  },
  {
    q: "Debriyaj setinin içinde hangi parçalar bulunur?",
    a: "Set içeriği markaya ve ürüne göre değişebilir. Baskı, debriyaj balatası ve rulman yaygın set bileşenleri arasındadır. Satın almadan önce ürün içeriği kontrol edilmelidir.",
  },
  {
    q: "Debriyaj değişiminde volan da değişir mi?",
    a: "Her debriyaj değişiminde volanın değiştirilmesi gerektiği söylenemez. Volanın mevcut durumu ve üretici kriterleri teknik kontrol sonucunda değerlendirilmelidir.",
  },
  {
    q: "Aracıma uygun debriyaj setini nasıl bulabilirim?",
    a: "Araç marka, model, üretim yılı ve motor bilgisini Jade Automotive'e WhatsApp üzerinden göndererek uyumlu debriyaj seti hakkında bilgi alabilirsiniz.",
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
      "Beylikdüzü Debriyaj Seti Değişimi | Baskı Balata Rehberi",
    description:
      "Beylikdüzü ve çevresinde debriyaj seti değişimi araştıranlar için baskı balata, rulman, volan ve doğru yedek parça seçimi rehberi.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-debriyaj-seti-degisimi",
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
          <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

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
                Debriyaj Seti Değişimi
              </span>
            </div>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
              DEBRİYAJ • BASKI BALATA • YEDEK PARÇA
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-300">
                Debriyaj Seti Değişimi
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Beylikdüzü ve çevresinde debriyaj seti değişimi araştırıyorsanız,
              aracınızla uyumlu baskı balata setinin doğru belirlenmesi
              önemlidir. Debriyaj arıza belirtileri, baskı, balata, rulman,
              volan ve doğru yedek parça seçimini bu rehberde inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                Aracına Uygun Debriyaj Setini Sor →
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
              debriyaj setini birlikte belirleyelim.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <article>
              <p className="font-black uppercase tracking-wider text-cyan-300">
                Debriyaj sistemi
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Debriyaj Seti Ne İşe Yarar?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Debriyaj sistemi, motor tarafından üretilen gücün şanzımana
                kontrollü şekilde aktarılmasına yardımcı olur. Manuel
                şanzımanlı araçlarda kalkış ve vites değişimi sırasında
                debriyaj sistemi aktif olarak kullanılır.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Debriyaj balatası gibi sürtünmeye maruz kalan parçalar kullanım
                sürecinde aşınabilir. Ancak araçtaki her kavrama veya vites
                problemi doğrudan debriyaj setinin değiştirilmesi gerektiği
                anlamına gelmez. Önce arızanın doğru teşhis edilmesi gerekir.
              </p>
            </article>

            <aside className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
              <p className="text-sm font-black text-cyan-300">
                30 SANİYEDE PARÇA SOR
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Hangi debriyaj seti aracınıza uyuyor?
              </h2>

              <div className="mt-5 space-y-3 text-slate-300">
                <p>✓ Marka / Model</p>
                <p>✓ Üretim Yılı</p>
                <p>✓ Motor Bilgisi</p>
                <p>✓ Aranan Parça</p>
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
              Arıza belirtileri
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Debriyaj Seti Arızası Nasıl Anlaşılır?
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Aşağıdaki belirtiler debriyaj veya aktarma sisteminin kontrol
              edilmesi gerektiğini gösterebilir. Yalnızca belirtiye bakarak
              hangi parçanın arızalı olduğu kesin olarak belirlenmemelidir.
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
            Debriyaj parçaları
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Debriyaj Değişiminde Kontrol Edilen Parçalar
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {parts.map((part) => (
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
                  Bu parçayı sor →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#091827]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <article>
                <p className="font-black uppercase tracking-wider text-cyan-300">
                  Baskı balata seçimi
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Aracınıza Uygun Debriyaj Seti Nasıl Bulunur?
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Debriyaj setleri araç marka ve modeline göre değiştiği gibi
                  aynı modelin farklı motor ve şanzıman seçeneklerinde de
                  farklı ürünler kullanılabilir.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  Bu nedenle yalnızca araç adına bakarak ürün seçmek yerine
                  üretim yılı, motor bilgisi ve gerektiğinde şasi veya mevcut
                  parçanın referans bilgileri üzerinden uyumluluk kontrolü
                  yapılmalıdır.
                </p>
              </article>

              <aside className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
                <p className="font-black text-cyan-300">
                  DEBRİYAJ SETİ SORGULAMA
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Yanlış baskı balata sipariş etme
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Araç bilgilerini WhatsApp üzerinden gönder. Elinde eski
                  parçanın ürün kodu veya referans numarası varsa mesaja
                  ekleyebilirsin.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
                >
                  Fiyat ve Uyumluluk Sor →
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-black uppercase tracking-wider text-cyan-300">
            İlgili rehberler
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Beylikdüzü Bakım ve Yedek Parça Rehberleri
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/blog/beylikduzu-oto-tamir"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Beylikdüzü Oto Tamir →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Araç arızalarında kontrol edilen yedek parçalar.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-periyodik-bakim"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Periyodik Bakım →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Periyodik bakım parçaları ve filtreler.
              </p>
            </Link>

            <Link
              href="/blog/beylikduzu-amortisor-degisimi"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-400/30"
            >
              <strong className="text-cyan-300">
                Amortisör Değişimi →
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Amortisör ve süspansiyon parçaları rehberi.
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
                Beylikdüzü oto yedek parça ana rehberi.
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
              Aracınıza uygun debriyaj setini sorgulayın
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Marka, model, üretim yılı ve motor bilgisini gönderin.
              Aracınıza uygun baskı balata ve debriyaj parçaları hakkında
              bilgi alın.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#06111f]"
              >
                WhatsApp'tan Debriyaj Seti Sor
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
            içerik Jade Automotive tarafından debriyaj değişimi veya tamir
            hizmeti verildiği anlamına gelmez. Jade Automotive yedek parça
            odaklıdır. Arıza tespiti ve montaj işlemleri uygun teknik servis
            veya uzman tarafından yapılmalıdır.
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
          Aracına Uygun Debriyaj Setini Sor
        </a>
      </div>
    </>
  );
}
