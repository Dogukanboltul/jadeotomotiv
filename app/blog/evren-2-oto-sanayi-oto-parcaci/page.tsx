import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evren 2 Oto Sanayi Oto Parçacı | Esenyurt Oto Parça",
  description:
    "Evren 2 Oto Sanayi oto parçacı. Aracınız için aradığınız parçayı, marka-model bilgisini veya ustanın parça listesini WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/evren-2-oto-sanayi-oto-parcaci",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Evren%202%20Oto%20Sanayi%27de%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%20%2F%20Model%3A%20%0AY%C4%B1l%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
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

const parts = [
  "Fren Balatası",
  "Fren Diski",
  "Filtre Seti",
  "Triger Seti",
  "Debriyaj Seti",
  "Amortisör",
  "Ön Takım",
  "Motor Parçaları",
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#07111d] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">

            <div className="mb-6 flex flex-wrap gap-2 text-sm text-slate-400">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>

              <Link href="/esenyurt-oto-yedek-parca">
                Esenyurt Oto Yedek Parça
              </Link>

              <span>›</span>
              <span>Evren 2 Oto Sanayi</span>
            </div>

            <span className="inline-flex rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-black text-[#65e995]">
              Evren 2 Oto Sanayi • Oto Parça
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Evren 2 Oto Sanayi
              <span className="block text-cyan-300">
                Oto Parçacı
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Evren 2 Oto Sanayi'de aracınız için parça mı arıyorsunuz?
              Aracın marka-modelini veya ustanın verdiği listeyi
              <strong className="text-white">
                {" "}WhatsApp'tan gönderin.
              </strong>
            </p>

            <div className="mt-9 max-w-3xl rounded-[34px] border border-[#25D366]/40 bg-[#25D366]/10 p-7 md:p-9">

              <p className="font-black text-[#65e995]">
                USTA PARÇA MI İSTEDİ?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Listeyi çekip WhatsApp'tan gönder.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Marka, model ve model yılını yaz. Ustanın verdiği parça
                listesinin fotoğrafını da mesaja ekleyebilirsin.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-5 text-lg font-black text-[#04130a] transition hover:scale-[1.01]"
                >
                  <WhatsAppIcon />
                  WHATSAPP'TAN PARÇA SOR
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

        {/* SANAYIDE */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <span className="font-black text-cyan-300">
            EVREN 2 OTO SANAYİ YEDEK PARÇA
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Aracın sanayideyse parçayı bize sor
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Ustanın verdiği parçaları tek tek yazmak zorunda değilsin.
            Listeyi veya sökülen parçanın fotoğrafını gönder.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-4xl">📋</div>
              <h3 className="mt-5 text-xl font-black">Usta Liste Verdi</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Listenin fotoğrafını çekip WhatsApp'tan gönder.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-black text-[#65e995]">
                <WhatsAppIcon className="h-5 w-5" />
                Listeyi gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-4xl">📸</div>
              <h3 className="mt-5 text-xl font-black">Parça Elinde</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Sökülen parçanın veya kutunun fotoğrafını gönder.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-black text-[#65e995]">
                <WhatsAppIcon className="h-5 w-5" />
                Fotoğraf gönder →
              </span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/50"
            >
              <div className="text-4xl">🚘</div>
              <h3 className="mt-5 text-xl font-black">Araç Bilgisi Var</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Marka-model, yıl ve aradığın parçayı yazıp gönder.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-black text-[#65e995]">
                <WhatsAppIcon className="h-5 w-5" />
                Parçayı sor →
              </span>
            </a>

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black md:text-4xl">
              Evren 2 Oto Sanayi oto parça
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Aracınız için aradığınız bakım, fren, motor veya yürüyen
              aksam parçasını WhatsApp üzerinden sorabilirsiniz.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {parts.map((part) => (
                <a
                  key={part}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#07111d] p-5 transition hover:border-[#25D366]/50"
                >
                  <strong>{part}</strong>

                  <span className="mt-3 flex items-center gap-2 text-sm font-black text-[#65e995]">
                    <WhatsAppIcon className="h-5 w-5" />
                    Fiyat / stok sor
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* MAIN CTA */}
        <section className="mx-auto max-w-6xl px-5 py-16">

          <div className="rounded-[36px] bg-[#25D366] p-8 text-[#04130a] md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>
                <p className="font-black">
                  JADE AUTOMOTIVE
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Evren 2'de parça mı arıyorsun?
                </h2>

                <p className="mt-4 max-w-2xl font-medium leading-7">
                  Ustanın istediği parçayı veya listenin fotoğrafını gönder.
                  Araç marka-modelini eklemeyi unutma.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#07111d] px-8 py-5 font-black text-white"
              >
                <WhatsAppIcon className="h-7 w-7" />
                WHATSAPP'TAN PARÇA SOR
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL SEO */}
        <section className="border-y border-white/10 bg-[#0a1928]">

          <div className="mx-auto max-w-6xl px-5 py-16">

            <h2 className="text-3xl font-black">
              Esenyurt oto parça
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/blog/evren-oto-sanayi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Evren Oto Sanayi →
                </strong>
              </Link>

              <Link
                href="/esenyurt-oto-yedek-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Yedek Parça →
                </strong>
              </Link>

              <Link
                href="/blog/esenyurt-oto-parca"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Esenyurt Oto Parça →
                </strong>
              </Link>

              <Link
                href="/blog/fatih-oto-sanayi-oto-parcaci"
                className="rounded-2xl border border-white/10 bg-[#07111d] p-6"
              >
                <strong className="text-cyan-300">
                  Fatih Oto Sanayi →
                </strong>
              </Link>

            </div>
          </div>
        </section>

        <div className="h-24 md:hidden" />
      </main>

      {/* GERCEK WHATSAPP FLOATING BUTTON */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan oto parça sor"
        title="WhatsApp'tan parça sor"
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
