import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Renault Yedek Parça | Jade Automotive",
  description:
    "Beylikdüzü Renault yedek parça arayanlar için fren balatası, filtre, debriyaj, süspansiyon, motor ve elektrik parçaları. Renault aracınıza uygun yedek parça için Jade Automotive ile iletişime geçin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-renault-yedek-parca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20Renault%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const parts = [
  {
    title: "Fren Balatası",
    text: "Renault aracınız için fren balatası ve fren sistemi parçalarını aracınıza göre araştırabilirsiniz.",
  },
  {
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtreleri gibi bakım parçaları hakkında bilgi alın.",
  },
  {
    title: "Debriyaj",
    text: "Debriyaj sistemi ve ilgili parçalar için Renault modelinize uygun seçenekleri araştırın.",
  },
  {
    title: "Süspansiyon",
    text: "Amortisör, salıncak ve diğer süspansiyon parçalarını aracınıza göre değerlendirin.",
  },
  {
    title: "Motor Parçaları",
    text: "Bakım ve onarım ihtiyaçları için çeşitli Renault motor parçaları hakkında bilgi alın.",
  },
  {
    title: "Elektrik & Ateşleme",
    text: "Renault elektrik ve ateşleme sistemlerinde kullanılan yedek parçaları araştırın.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden iletişime geç"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_40px_rgba(37,211,102,0.35)] transition hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.39c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32ZM16.01 3.2C8.95 3.2 3.2 8.95 3.2 16.01c0 2.26.59 4.47 1.72 6.42L3.13 28.8l6.51-1.71a12.75 12.75 0 0 0 6.37 1.69h.01c7.06 0 12.8-5.75 12.8-12.81S23.08 3.2 16.01 3.2Zm0 23.48h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.86 1.01 1.03-3.76-.25-.39a10.62 10.62 0 1 1 8.88 4.85Z" />
        </svg>
      </a>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Jade Automotive
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Renault Yedek Parça
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Beylikdüzü Renault Yedek Parça
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Beylikdüzü ve çevresinde Renault aracınız için yedek parça
              arıyorsanız, aracınızın bilgilerini paylaşarak ihtiyacınız olan
              parçayı araştırabilir ve Jade Automotive üzerinden bilgi
              alabilirsiniz.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Renault Parça Sor
              </a>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Tüm Yedek Parçalar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Renault Parça Arayanlara
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Renault aracınız için doğru yedek parçayı bulun
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Renault yedek parça ararken aracın yalnızca marka ve modelini
                bilmek her zaman yeterli olmayabilir. Model yılı, motor
                seçeneği ve parçanın teknik özellikleri doğru ürünün
                belirlenmesinde önem taşıyabilir.
              </p>

              <p>
                Bu nedenle Beylikdüzü Renault yedek parça aramalarında
                aracınızın bilgilerini paylaşarak ihtiyacınıza uygun parçayı
                araştırmak daha sağlıklı bir yöntemdir.
              </p>

              <p>
                Jade Automotive ile fren sistemi, filtreler, debriyaj,
                süspansiyon, motor ve elektrik gruplarındaki Renault yedek
                parçaları hakkında bilgi alabilirsiniz.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Renault Parça Ararken
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Araç bilgilerinizi hazırlayın
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Renault modeliniz",
                "Model yılı",
                "Motor seçeneği",
                "Aradığınız parça",
                "Varsa mevcut parçanın bilgileri",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </span>

                  <span className="font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081827]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Renault Yedek Parça Grupları
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Hangi Renault yedek parçalarını arıyorsunuz?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Renault aracınızın bakım veya onarım ihtiyacına göre farklı
              yedek parça gruplarında araştırma yapabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-6 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Fren Sistemi
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Renault fren balatası mı arıyorsunuz?
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                Fren balatası gibi güvenlik açısından önemli parçalarda
                aracınıza uygun ürünün belirlenmesi önemlidir. Renault
                modelinizi ve araç bilgilerinizi paylaşarak ihtiyacınız olan
                parça hakkında bilgi alabilirsiniz.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Fren Balatası Sor
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081827]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Kolayca Bilgi Alın
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Renault yedek parça fiyatını nasıl öğrenebilirsiniz?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Yedek parça fiyatı parçanın türüne ve araç uygulamasına göre
              değişebilir. Bu nedenle aracınıza özel bilgi almak daha doğru
              sonuç verir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Aracınızı belirtin",
                text: "Renault modelinizi ve model yılınızı paylaşın.",
              },
              {
                number: "02",
                title: "Parçayı belirtin",
                text: "İhtiyacınız olan yedek parçayı yazın.",
              },
              {
                number: "03",
                title: "Bilgi alın",
                text: "WhatsApp üzerinden parça ve fiyat hakkında bilgi isteyin.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <span className="text-4xl font-black text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Faydalı Sayfalar
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Oto yedek parça rehberleri
            </h2>

            <div className="mt-7 space-y-3">
              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Beylikdüzü Oto Yedek Parça
              </Link>

              <Link
                href="/oto-yedek-parca-fiyatlari"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Oto Yedek Parça Fiyatları
              </Link>

              <Link
                href="/blog/beylikduzu-fren-balatasi-fiyatlari"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Beylikdüzü Fren Balatası Fiyatları
              </Link>

              <Link
                href="/blog/beylikduzu-oto-yedek-parca-magazasi"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Beylikdüzü Oto Yedek Parça Mağazası
              </Link>

              <Link
                href="/blog/beylikduzu-fiat-yedek-parca"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Beylikdüzü Fiat Yedek Parça
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Jade Automotive
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Renault parçanızı sorun
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Renault modelinizi, yılını ve aradığınız parçayı WhatsApp
              üzerinden iletin. İhtiyacınız olan yedek parça hakkında bilgi
              alın.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              WhatsApp'tan Sor
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#040c16]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Sık Sorulan Sorular
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Beylikdüzü Renault Yedek Parça
          </h2>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Beylikdüzü'nde Renault yedek parça nereden alınır?",
                a: "Beylikdüzü ve çevresinde Renault yedek parça arıyorsanız Jade Automotive ile iletişime geçerek aracınıza uygun parça hakkında bilgi alabilirsiniz.",
              },
              {
                q: "Renault yedek parça fiyatları neden değişir?",
                a: "Parçanın türü, Renault modeliniz, model yılı, motor seçeneği ve ürünün teknik özellikleri fiyatı etkileyebilir.",
              },
              {
                q: "Renault fren balatası için bilgi alabilir miyim?",
                a: "Evet. Renault aracınızın model ve araç bilgilerini paylaşarak fren balatası hakkında WhatsApp üzerinden bilgi isteyebilirsiniz.",
              },
              {
                q: "Renault yedek parça ararken hangi bilgiler gerekir?",
                a: "Renault modeliniz, model yılı, motor bilgisi ve aradığınız parçanın adı doğru parçanın araştırılmasına yardımcı olur.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <summary className="cursor-pointer list-none pr-6 font-bold text-lg marker:hidden">
                  {item.q}
                </summary>

                <p className="mt-4 leading-7 text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Jade Automotive
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Renault yedek parçanızı arıyorsanız bize sorun.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Renault modelinizi ve aradığınız parçayı WhatsApp üzerinden
            paylaşın. Aracınıza uygun yedek parça hakkında bilgi alın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            WhatsApp'tan Bilgi Al
          </a>
        </div>
      </section>
    </main>
  );
}
