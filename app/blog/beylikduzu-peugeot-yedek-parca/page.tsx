import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Peugeot Yedek Parça | Jade Automotive",
  description:
    "Beylikdüzü Peugeot yedek parça arayanlar için fren balatası, filtre, debriyaj, süspansiyon, motor ve elektrik parçaları. Peugeot aracınıza uygun yedek parça ve fiyat bilgisi için WhatsApp'tan ulaşın.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-peugeot-yedek-parca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Peugeot%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%20Model%3A%20%20Y%C4%B1l%3A%20%20Arad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A";

const parts = [
  {
    title: "Fren Balatası",
    text: "Peugeot aracınız için fren balatası ve fren sistemi parçaları hakkında bilgi alın.",
  },
  {
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtreleri gibi bakım parçalarını araştırın.",
  },
  {
    title: "Debriyaj",
    text: "Debriyaj sistemi ve ilgili parçalar için aracınıza uygun seçenekleri sorun.",
  },
  {
    title: "Süspansiyon",
    text: "Amortisör, salıncak ve diğer süspansiyon parçaları için bilgi alın.",
  },
  {
    title: "Motor Parçaları",
    text: "Bakım ve onarım ihtiyaçlarınız için Peugeot motor parçalarını araştırın.",
  },
  {
    title: "Elektrik & Ateşleme",
    text: "Elektrik ve ateşleme sistemi parçaları hakkında aracınıza özel bilgi alın.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white pb-20 lg:pb-0">
      {/* SABİT WHATSAPP İKONU */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden Peugeot yedek parça sor"
        className="fixed bottom-24 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_40px_rgba(37,211,102,0.35)] transition hover:scale-110 lg:bottom-6 lg:left-6"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.39c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32ZM16.01 3.2C8.95 3.2 3.2 8.95 3.2 16.01c0 2.26.59 4.47 1.72 6.42L3.13 28.8l6.51-1.71a12.75 12.75 0 0 0 6.37 1.69h.01c7.06 0 12.8-5.75 12.8-12.81S23.08 3.2 16.01 3.2Zm0 23.48h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.86 1.01 1.03-3.76-.25-.39a10.62 10.62 0 1 1 8.88 4.85Z" />
        </svg>
      </a>

      {/* MOBİL WHATSAPP BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#050d18]/95 p-3 backdrop-blur lg:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3.5 font-black text-slate-950 shadow-lg"
        >
          Peugeot Parçamı WhatsApp'tan Sor
        </a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Jade Automotive
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Peugeot Yedek Parça
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Beylikdüzü Peugeot Yedek Parça
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Peugeot aracınız için yedek parça mı arıyorsunuz? Model, yıl ve
              aradığınız parçayı WhatsApp'tan gönderin; ihtiyacınız olan parça
              hakkında doğrudan bilgi alın.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-7 py-4 font-black text-white shadow-[0_12px_35px_rgba(37,211,102,0.2)] transition hover:scale-[1.02]"
              >
                Peugeot Parçamı WhatsApp'tan Sor
              </a>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Tüm Yedek Parçalar
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Model + yıl + parça adını göndermeniz yeterli.
            </p>
          </div>
        </div>
      </section>

      {/* HIZLI DÖNÜŞÜM */}
      <section className="border-b border-white/10 bg-[#081827]">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "1. Modelini Yaz",
                text: "Peugeot modelinizi ve model yılınızı gönderin.",
              },
              {
                title: "2. Parçayı Yaz",
                text: "Aradığınız yedek parçanın adını belirtin.",
              },
              {
                title: "3. WhatsApp'tan Sor",
                text: "Parça ve fiyat hakkında bilgi alın.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <h2 className="text-lg font-black text-cyan-300">
                  {item.title}
                </h2>
                <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GİRİŞ */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Peugeot Parça Arayanlara
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Peugeot aracınız için doğru yedek parçayı bulun
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Peugeot yedek parça ararken aracın modeli kadar model yılı,
                motor seçeneği ve parçanın teknik özellikleri de önem
                taşıyabilir.
              </p>

              <p>
                Bu nedenle Beylikdüzü Peugeot yedek parça aramalarında
                aracınızın bilgilerini paylaşarak ihtiyacınız olan parçayı
                araştırmak daha sağlıklı bir yöntemdir.
              </p>

              <p>
                Jade Automotive üzerinden fren sistemi, filtreler, debriyaj,
                süspansiyon, motor ve elektrik gruplarındaki parçalar hakkında
                bilgi alabilirsiniz.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              💬 Peugeot Yedek Parça Fiyatını Sor
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              WhatsApp'tan Gönder
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Şu bilgileri yazman yeterli
            </h3>

            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6 font-mono text-sm leading-7 text-slate-300">
              Merhaba,
              <br />
              Peugeot yedek parça arıyorum.
              <br />
              <br />
              Model:
              <br />
              Yıl:
              <br />
              Aradığım parça:
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 font-black text-white transition hover:scale-[1.01]"
            >
              Hazır Mesajla WhatsApp'a Git
            </a>
          </div>
        </div>
      </section>

      {/* PARÇA GRUPLARI */}
      <section className="border-y border-white/10 bg-[#081827]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Peugeot Yedek Parça Grupları
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Hangi Peugeot parçasını arıyorsunuz?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Aracınızın bakım veya onarım ihtiyacına göre aşağıdaki parça
              gruplarından ihtiyacınız olan ürünü araştırabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-6 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  WhatsApp'tan Sor →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREN */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                En Çok Aranan Parçalardan
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Peugeot fren balatası mı arıyorsunuz?
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                Fren balatası gibi güvenlik açısından önemli parçalarda
                aracınıza uygun ürünün belirlenmesi önemlidir. Peugeot
                modelinizi ve araç bilgilerinizi göndererek bilgi alabilirsiniz.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-xl bg-[#25D366] px-7 py-4 font-black text-white shadow-lg transition hover:scale-[1.02]"
            >
              Fren Balatası Sor
            </a>
          </div>
        </div>
      </section>

      {/* FİYAT */}
      <section className="border-y border-white/10 bg-[#081827]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Fiyat Bilgisi
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Peugeot yedek parça fiyatını öğrenin
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Yedek parça fiyatları parçanın türüne, araç modeline, model
                yılına, motor seçeneğine ve ürün özelliklerine göre değişebilir.
                En doğru bilgi için aracınıza özel olarak sormanız gerekir.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Güncel Fiyatı WhatsApp'tan Sor
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <div className="text-5xl font-black text-cyan-400">01</div>
              <h3 className="mt-5 text-2xl font-bold">
                Aracınızı belirtin
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Peugeot modelinizi, yılınızı ve mümkünse motor seçeneğinizi
                paylaşın.
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="text-5xl font-black text-cyan-400">02</div>
              <h3 className="mt-5 text-2xl font-bold">
                Parçanızı belirtin
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Fren balatası, filtre, debriyaj veya aradığınız diğer parçayı
                yazın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İÇ LİNKLER */}
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

              <Link
                href="/blog/beylikduzu-renault-yedek-parca"
                className="block rounded-xl border border-white/10 bg-slate-950/40 p-4 font-semibold transition hover:border-cyan-400/30"
              >
                → Beylikdüzü Renault Yedek Parça
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Jade Automotive
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Peugeot parçanızı hemen sorun
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Peugeot modelinizi, yılınızı ve aradığınız parçayı gönderin.
              Parça ve fiyat hakkında bilgi almak için doğrudan WhatsApp'a
              geçin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 font-black text-white transition hover:scale-[1.01]"
            >
              💬 WhatsApp'tan Peugeot Parçası Sor
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#040c16]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Sık Sorulan Sorular
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Beylikdüzü Peugeot Yedek Parça
          </h2>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Beylikdüzü'nde Peugeot yedek parça nereden alınır?",
                a: "Beylikdüzü ve çevresinde Peugeot yedek parça arıyorsanız Jade Automotive ile iletişime geçerek aracınıza uygun parça hakkında bilgi alabilirsiniz.",
              },
              {
                q: "Peugeot yedek parça fiyatını nasıl öğrenebilirim?",
                a: "Peugeot modelinizi, model yılınızı ve aradığınız parçayı WhatsApp üzerinden göndererek aracınıza özel fiyat bilgisi isteyebilirsiniz.",
              },
              {
                q: "Peugeot fren balatası için bilgi alabilir miyim?",
                a: "Evet. Peugeot modelinizi ve araç bilgilerinizi paylaşarak fren balatası hakkında WhatsApp üzerinden bilgi isteyebilirsiniz.",
              },
              {
                q: "Peugeot yedek parça ararken hangi bilgiler gerekir?",
                a: "Araç modeli, model yılı, motor seçeneği ve aradığınız parçanın adı doğru parçanın araştırılmasına yardımcı olur.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <summary className="cursor-pointer list-none pr-6 text-lg font-bold">
                  {item.q}
                </summary>

                <p className="mt-4 leading-7 text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 text-3xl">
            💬
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-5xl">
            Peugeot yedek parçanızı mı arıyorsunuz?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Modelinizi, yılınızı ve aradığınız parçayı gönderin. Parça ve
            fiyat hakkında bilgi almak için WhatsApp'tan bize ulaşın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#25D366] px-9 py-4 font-black text-white shadow-[0_15px_45px_rgba(37,211,102,0.25)] transition hover:scale-[1.03]"
          >
            Peugeot Parçamı WhatsApp'tan Sor
          </a>

          <p className="mt-4 text-sm text-slate-600">
            Jade Automotive · Beylikdüzü ve çevresi
          </p>
        </div>
      </section>
    </main>
  );
}
