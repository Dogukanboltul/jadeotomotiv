import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Termostat Değişimi | Araç Termostatı Rehberi",
  description:
    "Beylikdüzü termostat değişimi araştıranlar için termostat arıza belirtileri, hararet sorunları ve araca uygun termostat seçimi. Parçanı WhatsApp'tan kolayca sor.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-termostat-degisimi",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%20%F0%9F%91%8B%0AArac%C4%B1m%20i%C3%A7in%20termostat%20bak%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AVarsa%20par%C3%A7a%20kodu%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const symptoms = [
  {
    icon: "🌡️",
    title: "Hararet yükseliyor",
    text: "Motor sıcaklığında normal dışı yükselme varsa soğutma sistemi kontrol edilmelidir.",
  },
  {
    icon: "❄️",
    title: "Motor geç ısınıyor",
    text: "Motor çalışma sıcaklığına ulaşmakta zorlanıyorsa termostat dahil sistem bileşenleri incelenebilir.",
  },
  {
    icon: "📊",
    title: "Sıcaklık düzensiz",
    text: "Gösterge normalden farklı hareket ediyorsa kesin neden teknik kontrolle belirlenmelidir.",
  },
  {
    icon: "💧",
    title: "Soğutma sıvısı sorunu",
    text: "Eksilme veya kaçak görülüyorsa yalnızca termostat değil tüm soğutma sistemi kontrol edilmelidir.",
  },
];

const faq = [
  {
    q: "Termostat arızası nasıl anlaşılır?",
    a: "Motorun normalden geç ısınması, sıcaklığın normal dışı yükselmesi veya sıcaklık göstergesindeki farklı davranışlar kontrol gerektirebilir. Bunlar tek başına kesin termostat arızası anlamına gelmez.",
  },
  {
    q: "Termostat bozulursa araç hararet yapar mı?",
    a: "Termostatın çalışma problemi motor sıcaklığını etkileyebilir. Ancak hararet; devirdaim pompası, radyatör, fan sistemi, kaçak veya başka nedenlerden de kaynaklanabilir.",
  },
  {
    q: "Her araca aynı termostat olur mu?",
    a: "Hayır. Araç modeli, üretim yılı ve motor seçeneğine göre kullanılan termostat değişebilir.",
  },
  {
    q: "Doğru termostatı nasıl sorabilirim?",
    a: "Marka, model, yıl ve motor bilgisini WhatsApp üzerinden gönderin. Jade Automotive ekibi uygun yedek parçanın belirlenmesi için yardımcı olsun.",
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
    headline: "Beylikdüzü Termostat Değişimi",
    description:
      "Beylikdüzü ve çevresinde araç termostatı ve soğutma sistemi yedek parçaları hakkında rehber.",
    mainEntityOfPage:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-termostat-degisimi",
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
          <div className="absolute right-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="mb-5 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-cyan-300">
                Ana Sayfa
              </Link>
              <span>›</span>
              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="hover:text-cyan-300"
              >
                Beylikdüzü Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Termostat</span>
            </div>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              🚗 Aracına uygun parçayı birlikte bulalım
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü{" "}
              <span className="text-cyan-300">Termostat Değişimi</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Termostat mı arıyorsun? Parça koduyla uğraşmana gerek yok.
              Aracının <strong className="text-white">marka, model, yıl ve motor</strong>{" "}
              bilgisini bize gönder. Aracına uygun termostatı bulmana yardımcı
              olalım.
            </p>

            <div className="mt-8 max-w-2xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-2xl">
                  💬
                </div>

                <div>
                  <p className="text-xl font-black">
                    “Ben hangi termostatı alacağımı bilmiyorum.”
                  </p>
                  <p className="mt-2 leading-7 text-slate-300">
                    Hiç sorun değil. Araç bilgilerini WhatsApp'tan gönder,
                    birlikte bakalım.
                  </p>
                </div>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-[#25D366] px-6 py-4 text-center text-lg font-black text-[#04130a] transition hover:scale-[1.01]"
              >
                WhatsApp'tan Termostat Sor →
              </a>

              <p className="mt-3 text-center text-xs text-slate-400">
                Mesaj hazır geliyor. Sadece araç bilgilerini doldurman yeterli.
              </p>
            </div>
          </div>
        </section>

        {/* EASY STEPS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <span className="font-black text-cyan-300">ÇOK KOLAY</span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Parçanı 3 adımda sor
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                no: "1",
                title: "Araç bilgini yaz",
                text: "Marka, model, yıl ve motor bilgisini gönder.",
              },
              {
                no: "2",
                title: "Bize WhatsApp'tan gönder",
                text: "Uzun form doldurmana gerek yok. Direkt mesaj at.",
              },
              {
                no: "3",
                title: "Uygun parçayı sor",
                text: "Aracına uygun termostat için bilgi al.",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-[#07111d]">
                  {item.no}
                </div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-[#25D366] px-8 py-4 font-black text-[#04130a]"
            >
              💬 Şimdi WhatsApp'tan Sor
            </a>
          </div>
        </section>

        {/* WHAT IS */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
            <article>
              <span className="font-black text-cyan-300">
                KISACA ANLATALIM
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Araç Termostatı Ne İşe Yarar?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Termostat, motor soğutma sisteminin önemli parçalarından
                biridir. Soğutma sıvısının sistem içerisindeki dolaşımının
                kontrolüne yardımcı olur ve motorun uygun çalışma sıcaklığında
                kalmasında rol oynar.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Fakat hararet veya sıcaklık problemi gördüğünüzde sorun
                mutlaka termostat demek değildir. Devirdaim pompası, radyatör,
                fan sistemi veya soğutma sıvısı kaçakları da kontrol
                gerektirebilir.
              </p>
            </article>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-7">
              <p className="text-sm font-black text-cyan-300">
                PARÇA BULAMADIN MI?
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Fotoğrafını bile gönderebilirsin 👋
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Elinde eski parça, kutu veya parça kodu varsa WhatsApp'tan
                gönder. Araç bilgilerinle birlikte değerlendirelim.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-2xl bg-[#25D366] px-6 py-4 text-center font-black text-[#04130a]"
              >
                Fotoğraf / Parça Bilgisi Gönder →
              </a>
            </div>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">NELER GÖRÜLEBİLİR?</span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Termostat Sorununda Görülebilecek Belirtiler
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Bunlar kesin arıza teşhisi değildir. Soğutma sistemi bir bütün
            olarak kontrol edilmelidir.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {symptoms.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-400/20 bg-amber-400/[0.06] p-6">
            <strong className="text-amber-300">
              ⚠️ Araç hararet yapıyorsa dikkat:
            </strong>
            <p className="mt-2 leading-7 text-slate-300">
              Motor sıcaklığı normal dışı yükseliyorsa aracı kullanmaya devam
              etmek risk oluşturabilir. Uygun teknik servis veya uzman
              tarafından kontrol edilmesi gerekir.
            </p>
          </div>
        </section>

        {/* MID WHATSAPP */}
        <section className="px-5 py-6">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-[#25D366] p-8 text-[#04130a] md:p-10">
            <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-black">JADE AUTOMOTIVE</p>
                <h2 className="mt-2 text-3xl font-black">
                  Termostatı bulmakla uğraşma, bize sor.
                </h2>
                <p className="mt-3 max-w-2xl font-medium">
                  Marka + model + yıl + motor bilgisini gönder. Aracına uygun
                  parçayı bulmana yardımcı olalım.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#07111d] px-7 py-4 text-center font-black text-white"
              >
                WhatsApp'ı Aç →
              </a>
            </div>
          </div>
        </section>

        {/* CORRECT PART */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <span className="font-black text-cyan-300">DOĞRU PARÇA ÖNEMLİ</span>

          <h2 className="mt-3 text-3xl font-black">
            Her Termostat Her Araca Uyumaz
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Aynı araç modelinde bile üretim yılına ve motor seçeneğine göre
            farklı termostatlar kullanılabilir. Bu yüzden yalnızca araç
            modeline bakarak parça seçmek yerine motor bilgisinin de kontrol
            edilmesi önemlidir.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🚗", "Marka / Model"],
              ["📅", "Üretim Yılı"],
              ["⚙️", "Motor Bilgisi"],
              ["🔎", "Varsa Parça Kodu"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-3 font-black">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-[#25D366] px-8 py-4 font-black text-[#04130a]"
            >
              Bu Bilgileri WhatsApp'tan Gönder
            </a>
          </div>
        </section>

        {/* RELATED */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-black">
              İşine Yarayabilecek Diğer Rehberler
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/beylikduzu-devirdaim-pompasi-degisimi"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Devirdaim Pompası Değişimi →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Motor soğutma sistemi ve devirdaim pompası rehberi.
                </p>
              </Link>

              <Link
                href="/blog/beylikduzu-triger-seti-degisimi"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Triger Seti Değişimi →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Triger kayışı, rulmanlar ve doğru set seçimi.
                </p>
              </Link>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
              >
                <strong className="text-cyan-300">
                  Beylikdüzü Oto Yedek Parça →
                </strong>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Diğer araç yedek parçalarını inceleyin.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* MARKETPLACES */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Online mağazalarımıza da göz atabilirsin
            </h2>

            <p className="mt-3 text-slate-400">
              Aradığın ürünü göremiyorsan direkt WhatsApp'tan sorabilirsin.
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
                Bulamadım, WhatsApp'tan Sor
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <span className="font-black text-cyan-300">MERAK EDİLENLER</span>
          <h2 className="mt-3 text-3xl font-black">Sık Sorulan Sorular</h2>

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

        {/* FINAL CTA */}
        <section className="px-5 pb-20 pt-6">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-[#25D366]/10 p-8 text-center md:p-14">
            <div className="text-5xl">👋</div>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black md:text-5xl">
              “Benim araca hangisi olur?” diye düşünme.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Bize yaz. Araç bilgilerini gönder, aradığın termostat konusunda
              yardımcı olalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
            >
              💬 Jade Automotive'e WhatsApp'tan Yaz
            </a>

            <p className="mt-4 text-sm text-slate-500">
              Marka • Model • Yıl • Motor
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-slate-500">
            Bu sayfa bilgilendirme amaçlıdır. Jade Automotive termostat
            değişimi veya araç tamir hizmeti verdiğini beyan etmez. Arıza
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
        aria-label="WhatsApp'tan yaz"
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

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[#25D366] py-4 text-center font-black text-[#04130a]"
        >
          💬 Aracıma Uygun Termostatı Sor
        </a>
      </div>
    </>
  );
}
