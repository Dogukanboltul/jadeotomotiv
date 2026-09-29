import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Yedek Parça İstanbul | Volvo Oto Parça | Jade Automotive",
  description:
    "İstanbul Volvo yedek parça arıyorsanız model, yıl, motor ve parça bilgisini WhatsApp'tan gönderin. Volvo XC40, XC60, XC90, S60, S90, V40 ve V60 yedek parça.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-yedek-parca-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

function WhatsAppIcon({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.44c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
      <path d="M16.04 3C8.86 3 3.02 8.81 3.02 15.96c0 2.28.6 4.51 1.73 6.47L3 29l6.75-1.77a13.06 13.06 0 0 0 6.28 1.6h.01c7.18 0 13.02-5.81 13.02-12.96C29.06 8.81 23.22 3 16.04 3Zm0 23.64h-.01a10.86 10.86 0 0 1-5.54-1.52l-.4-.24-4.01 1.05 1.07-3.9-.26-.4a10.72 10.72 0 0 1-1.66-5.67c0-5.94 4.85-10.77 10.81-10.77 5.96 0 10.81 4.83 10.81 10.77 0 5.94-4.85 10.68-10.81 10.68Z" />
    </svg>
  );
}

const models = [
  "Volvo XC40",
  "Volvo XC60",
  "Volvo XC90",
  "Volvo S60",
  "Volvo S90",
  "Volvo V40",
  "Volvo V60",
  "Volvo V90",
];

const parts = [
  "Fren Balatası",
  "Fren Diski",
  "Filtre Seti",
  "Triger Parçaları",
  "Debriyaj Parçaları",
  "Amortisör",
  "Ön Takım Parçaları",
  "Motor Parçaları",
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#07111d] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-7 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/otomotiv-yedek-parca">
                Otomotiv Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Yedek Parça İstanbul</span>
            </div>

            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
              İSTANBUL • VOLVO YEDEK PARÇA
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Volvo Yedek Parça
              <span className="block text-cyan-300">İstanbul</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              İstanbul'da Volvo aracınız için yedek parça mı arıyorsunuz?
              <strong className="text-white">
                {" "}Model + yıl + motor + aradığınız parçayı
              </strong>{" "}
              WhatsApp'tan gönderin. Parçanın adını bilmiyorsanız fotoğrafını
              da gönderebilirsiniz.
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-7 md:p-9">

              <p className="font-black text-[#65e995]">
                VOLVO PARÇA SOR
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Aradığın parçayı bize gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Örneğin: “Volvo XC60, 2020 model, ön fren balatası arıyorum.”
                Varsa parça fotoğrafını veya üzerindeki kodu da ekleyebilirsin.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-5 text-lg font-black text-[#04130a]"
                >
                  <WhatsAppIcon />
                  WHATSAPP'TAN SOR
                </a>

                <a
                  href={phone}
                  className="rounded-2xl bg-white px-6 py-5 text-center text-lg font-black text-[#07111d]"
                >
                  ☎ 0543 557 15 29
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* MODELLER */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            VOLVO MODELLERİ
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Volvo modeline göre yedek parça
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Aynı Volvo modelinde model yılı ve motor seçeneğine göre parça
            farklılık gösterebilir. Araç bilgilerini göndererek ihtiyacın olan
            parçayı sorabilirsin.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((model) => (
              <a
                key={model}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#25D366]/50"
              >
                <span className="text-xs font-black tracking-widest text-slate-500">
                  VOLVO
                </span>

                <h3 className="mt-2 text-xl font-black">
                  {model}
                </h3>

                <span className="mt-5 flex items-center gap-2 text-sm font-black text-[#65e995]">
                  <WhatsAppIcon className="h-5 w-5" />
                  Yedek parça sor →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* PARCALAR */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              VOLVO OTO PARÇA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Hangi Volvo parçasını arıyorsun?
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {parts.map((part) => (
                <a
                  key={part}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#07111d] p-6 transition hover:border-[#25D366]/50"
                >
                  <h3 className="font-black">
                    Volvo {part}
                  </h3>

                  <span className="mt-4 flex items-center gap-2 text-sm font-black text-[#65e995]">
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp'tan sor →
                  </span>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* NASIL SORULUR */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

              <span className="text-5xl">📸</span>

              <h2 className="mt-5 text-3xl font-black">
                Hangi parçayı alacağını bilmiyor musun?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Hiç sorun değil. Ustanın verdiği listeyi, sökülen parçanın
                fotoğrafını veya parça üzerindeki etiketi WhatsApp'tan
                gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-black text-[#04130a]"
              >
                <WhatsAppIcon />
                FOTOĞRAF GÖNDER
              </a>

            </div>

            <div className="rounded-[32px] border border-cyan-300/20 bg-cyan-300/5 p-8">

              <span className="font-black text-cyan-300">
                30 SANİYEDE PARÇA SOR
              </span>

              <h2 className="mt-4 text-3xl font-black">
                Bize bunları gönder
              </h2>

              <div className="mt-7 space-y-3">
                {[
                  "1. Volvo modeli",
                  "2. Model yılı",
                  "3. Motor bilgisi",
                  "4. Aradığın parça",
                  "5. Varsa fotoğraf / parça kodu",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#07111d] p-4 font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ISTANBUL */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <span className="font-black text-cyan-300">
              İSTANBUL VOLVO YEDEK PARÇA
            </span>

            <h2 className="mt-3 max-w-4xl text-3xl font-black md:text-4xl">
              İstanbul'dan Volvo parça talebinizi iletin
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              İstanbul'da Volvo yedek parça arayan araç sahipleri model,
              yıl, motor ve parça bilgilerini WhatsApp üzerinden
              iletebilir. Avrupa Yakası veya Anadolu Yakası fark etmeksizin
              parça talebinizi bize gönderebilirsiniz.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-[#07111d] p-7">
                <div className="text-4xl">🚘</div>
                <h3 className="mt-4 text-xl font-black">
                  Araç Bilgisi
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Volvo modelini, model yılını ve motor bilgisini gönder.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#07111d] p-7">
                <div className="text-4xl">🔧</div>
                <h3 className="mt-4 text-xl font-black">
                  Parça Bilgisi
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Ustanın istediği parçayı veya elindeki parçanın fotoğrafını gönder.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#07111d] p-7">
                <div className="text-4xl">💬</div>
                <h3 className="mt-4 text-xl font-black">
                  WhatsApp
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  Bilgileri tek mesajda göndererek Volvo parçanı sor.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-7 md:p-10">

            <span className="font-black text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Online mağazalarımız
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Volvo aracınıza uygun parçayı önce WhatsApp'tan sorabilir,
              Jade Automotive mağazalarını Trendyol ve Hepsiburada üzerinden
              de inceleyebilirsiniz.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-6 font-black text-[#04130a]"
              >
                <WhatsAppIcon />
                WhatsApp'tan Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f27a1a] px-6 py-6 text-center font-black text-white transition hover:-translate-y-1"
              >
                Trendyol
                <span className="mt-1 block text-sm font-medium">
                  Jade Automotive →
                </span>
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#ff6000] px-6 py-6 text-center font-black text-white transition hover:-translate-y-1"
              >
                Hepsiburada
                <span className="mt-1 block text-sm font-medium">
                  Jade Automotive →
                </span>
              </a>

            </div>

          </div>
        </section>

        {/* INTERNAL LINK */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Volvo ve oto yedek parça
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/esenyurt-volvo-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Volvo Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/otomotiv-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Otomotiv Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/oto-yedek-parca-fiyatlari"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Oto Yedek Parça Fiyatları →
                </strong>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16 pb-28">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <h2 className="max-w-4xl text-3xl font-black md:text-5xl">
              Volvo yedek parça mı arıyorsun?
            </h2>

            <p className="mt-4 max-w-2xl font-medium leading-7">
              Model + yıl + motor + parça bilgisini gönder.
              Fotoğraf veya parça kodu varsa mesajına ekle.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#07111d] px-8 py-5 font-black text-white"
              >
                <WhatsAppIcon />
                VOLVO PARÇA SOR
              </a>

              <a
                href={phone}
                className="rounded-2xl border-2 border-[#07111d] px-8 py-5 font-black"
              >
                0543 557 15 29
              </a>

            </div>

          </div>
        </section>

        <div className="h-24 md:hidden" />

      </main>

      {/* SABIT WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Volvo yedek parça için WhatsApp'tan yaz"
        title="WhatsApp'tan Volvo parça sor"
        className="fixed bottom-24 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-7 md:right-7 md:h-[70px] md:w-[70px]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* MOBIL ALT BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#07111d]/95 p-3 backdrop-blur md:hidden">

        <a
          href={phone}
          className="rounded-2xl bg-white py-4 text-center font-black text-[#07111d]"
        >
          ☎ ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#04130a]"
        >
          <WhatsAppIcon className="h-6 w-6" />
          WHATSAPP
        </a>

      </div>
    </>
  );
}
