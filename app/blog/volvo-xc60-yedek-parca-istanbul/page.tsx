import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo XC60 Yedek Parça İstanbul | XC60 Oto Parça",
  description:
    "Volvo XC60 yedek parça İstanbul. XC60 fren balatası, fren diski, filtre, ön takım, amortisör, bakım ve motor parçaları için araç bilgilerinizi WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-xc60-yedek-parca-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20XC60%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AModel%20Y%C4%B1l%C4%B1%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

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

const categories = [
  {
    icon: "🛑",
    title: "XC60 Fren Parçaları",
    text: "Fren balatası, fren diski ve ilgili fren parçaları.",
  },
  {
    icon: "🛢️",
    title: "XC60 Bakım Parçaları",
    text: "Yağ, hava, polen ve yakıt filtresi gibi bakım parçaları.",
  },
  {
    icon: "🔩",
    title: "XC60 Ön Takım",
    text: "Salıncak, rotil, rot, Z rot ve yürüyen aksam parçaları.",
  },
  {
    icon: "🚗",
    title: "XC60 Süspansiyon",
    text: "Amortisör ve süspansiyon sistemi parça talepleri.",
  },
  {
    icon: "⚙️",
    title: "XC60 Motor Parçaları",
    text: "Motor bilgisine göre ihtiyaç duyulan mekanik parçalar.",
  },
  {
    icon: "🌡️",
    title: "XC60 Soğutma Sistemi",
    text: "Termostat, devirdaim ve ilgili soğutma sistemi parçaları.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#06111d] text-white">

        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="absolute right-[-180px] top-[-180px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#25D366]/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

            <div>
              <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <Link href="/">Ana Sayfa</Link>
                <span>›</span>
                <Link href="/blog/volvo-yedek-parca-istanbul">
                  Volvo Yedek Parça İstanbul
                </Link>
                <span>›</span>
                <span>XC60</span>
              </div>

              <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black tracking-wider text-cyan-300">
                VOLVO XC60 • İSTANBUL
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] md:text-7xl">
                Volvo XC60
                <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                  Yedek Parça
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Volvo XC60 aracınız için parça arıyorsanız model yılı,
                motor bilgisi ve ihtiyacınız olan parçayı gönderin.
                <strong className="text-white">
                  {" "}Parçanın adını bilmiyorsanız fotoğrafını da gönderebilirsiniz.
                </strong>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 text-lg font-black text-[#04130a] shadow-xl shadow-[#25D366]/10 transition hover:-translate-y-1"
                >
                  <WhatsAppIcon />
                  XC60 PARÇA SOR
                </a>

                <a
                  href={phone}
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-5 text-lg font-black"
                >
                  ☎ 0543 557 15 29
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-400">
                <span>✓ Model yılına göre kontrol</span>
                <span>✓ Motor bilgisine göre parça</span>
                <span>✓ Fotoğraf gönderebilirsin</span>
              </div>
            </div>

            {/* FIND PART CARD */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-cyan-300/10 blur-3xl" />

              <div className="relative rounded-[36px] border border-white/10 bg-[#0b1b2b]/95 p-7 shadow-2xl md:p-9">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black tracking-[0.2em] text-[#65e995]">
                      PARÇANI BUL
                    </p>
                    <h2 className="mt-2 text-3xl font-black">
                      XC60 bilgilerini gönder
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#65e995]">
                    <WhatsAppIcon className="h-8 w-8" />
                  </div>
                </div>

                <div className="mt-7 space-y-3">

                  <div className="rounded-2xl border border-white/10 bg-[#06111d] p-5">
                    <span className="text-xs font-black text-slate-500">
                      ARAÇ
                    </span>
                    <p className="mt-1 font-black">Volvo XC60</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#06111d] p-5">
                    <span className="text-xs font-black text-slate-500">
                      MODEL YILI
                    </span>
                    <p className="mt-1 text-slate-300">
                      Aracının model yılını yaz
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#06111d] p-5">
                    <span className="text-xs font-black text-slate-500">
                      MOTOR
                    </span>
                    <p className="mt-1 text-slate-300">
                      Motor bilgisini ekle
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#06111d] p-5">
                    <span className="text-xs font-black text-slate-500">
                      PARÇA
                    </span>
                    <p className="mt-1 text-slate-300">
                      Parça adı, kodu veya fotoğrafı
                    </p>
                  </div>

                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-5 font-black text-[#04130a]"
                >
                  <WhatsAppIcon />
                  WHATSAPP'TAN GÖNDER
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Model yılı ve motor seçeneğine göre parça farklılık gösterebilir.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CATEGORY */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="max-w-3xl">
            <p className="font-black tracking-wider text-cyan-300">
              VOLVO XC60 OTO PARÇA
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              XC60 için hangi parçayı arıyorsun?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Bakım parçalarından fren ve yürüyen aksama kadar ihtiyacınız
              olan parçayı araç bilgilerinizle birlikte bize iletin.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <a
                key={item.title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.04]"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>

                <span className="mt-6 flex items-center gap-2 font-black text-[#65e995]">
                  <WhatsAppIcon className="h-5 w-5" />
                  Bu parçayı sor →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <section className="px-5">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#25D366] text-[#04130a]">

            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black">
                  USTA PARÇA MI İSTEDİ?
                </p>

                <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-5xl">
                  Listenin fotoğrafını çek, bize gönder.
                </h2>

                <p className="mt-4 max-w-2xl leading-7">
                  Parça isimlerini tek tek yazmana gerek yok. Ustanın verdiği
                  listeyi veya sökülen parçanın fotoğrafını WhatsApp'tan
                  gönderebilirsin.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#06111d] px-8 py-5 font-black text-white"
              >
                <WhatsAppIcon />
                FOTOĞRAF GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* POPULAR */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="font-black text-cyan-300">
                XC60 PARÇA TALEPLERİ
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Volvo XC60 yedek parça
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Volvo XC60 için doğru parçanın belirlenmesinde yalnızca
                model adı yeterli olmayabilir. Model yılı, motor seçeneği
                ve mevcut parça bilgisi eşleşmenin netleştirilmesine yardımcı olur.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Özellikle fren, filtre, ön takım, süspansiyon ve motor
                parçalarında araç bilgilerinizi mesajınıza eklemeniz önemlidir.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-4 font-black text-[#65e995]"
              >
                <WhatsAppIcon />
                XC60 PARÇA FİYATI SOR
              </a>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0a1928] p-7 md:p-9">

              <h3 className="text-2xl font-black">
                Mesaja ne yazmalıyım?
              </h3>

              <div className="mt-7 space-y-4">

                {[
                  ["01", "Model", "Volvo XC60"],
                  ["02", "Yıl", "Aracın model yılı"],
                  ["03", "Motor", "Motor / versiyon bilgisi"],
                  ["04", "Parça", "Aradığın parçanın adı"],
                  ["05", "Fotoğraf", "Varsa parça veya etiket fotoğrafı"],
                ].map(([no, title, text]) => (
                  <div
                    key={no}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-[#06111d] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 font-black text-cyan-300">
                      {no}
                    </div>

                    <div>
                      <strong>{title}</strong>
                      <p className="mt-1 text-sm text-slate-400">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* STORES */}
        <section className="border-y border-white/10 bg-[#0a1928]">
          <div className="mx-auto max-w-7xl px-5 py-20">

            <div className="text-center">
              <p className="font-black text-cyan-300">
                JADE AUTOMOTIVE
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Parçanı bize sor veya mağazalarımızı incele
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                XC60 aracınıza uygun parçadan emin değilseniz önce
                WhatsApp üzerinden araç bilgilerinizi gönderin.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-32 flex-col items-center justify-center rounded-3xl bg-[#25D366] p-6 text-center font-black text-[#04130a] transition hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-8 w-8" />
                <span className="mt-3">WhatsApp</span>
                <small className="mt-1 font-semibold">
                  XC60 parçanı sor
                </small>
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-32 flex-col items-center justify-center rounded-3xl bg-[#f27a1a] p-6 text-center font-black text-white transition hover:-translate-y-1"
              >
                <span className="text-xl">Trendyol</span>
                <small className="mt-2 font-semibold">
                  Jade Automotive Mağazası →
                </small>
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-32 flex-col items-center justify-center rounded-3xl bg-[#ff6000] p-6 text-center font-black text-white transition hover:-translate-y-1"
              >
                <span className="text-xl">Hepsiburada</span>
                <small className="mt-2 font-semibold">
                  Jade Automotive Mağazası →
                </small>
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL SEO */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <p className="font-black text-cyan-300">
            VOLVO YEDEK PARÇA
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Volvo parça sayfaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <Link
              href="/blog/volvo-yedek-parca-istanbul"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
            >
              <span className="text-sm font-bold text-slate-500">
                İSTANBUL
              </span>
              <h3 className="mt-2 text-xl font-black text-cyan-300">
                Volvo Yedek Parça İstanbul →
              </h3>
            </Link>

            <Link
              href="/blog/esenyurt-volvo-yedek-parca"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
            >
              <span className="text-sm font-bold text-slate-500">
                ESENYURT
              </span>
              <h3 className="mt-2 text-xl font-black text-cyan-300">
                Esenyurt Volvo Yedek Parça →
              </h3>
            </Link>

            <Link
              href="/otomotiv-yedek-parca"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
            >
              <span className="text-sm font-bold text-slate-500">
                JADE AUTOMOTIVE
              </span>
              <h3 className="mt-2 text-xl font-black text-cyan-300">
                Otomotiv Yedek Parça →
              </h3>
            </Link>

          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 pb-32">

          <div className="relative overflow-hidden rounded-[42px] border border-cyan-300/20 bg-gradient-to-br from-[#0d2639] to-[#07111d] p-8 md:p-14">

            <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative max-w-4xl">

              <p className="font-black text-[#65e995]">
                VOLVO XC60 YEDEK PARÇA
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Parçayı aramakla uğraşma.
                <span className="block text-cyan-300">
                  Bize gönder.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Model yılını, motor bilgisini ve ihtiyacın olan parçayı
                WhatsApp'tan gönder. Elinde fotoğraf varsa onu da ekle.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#04130a]"
                >
                  <WhatsAppIcon />
                  XC60 PARÇA SOR
                </a>

                <a
                  href={phone}
                  className="rounded-2xl bg-white px-8 py-5 text-lg font-black text-[#07111d]"
                >
                  ☎ 0543 557 15 29
                </a>

              </div>
            </div>
          </div>
        </section>

        <div className="h-24 md:hidden" />
      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Volvo XC60 yedek parça için WhatsApp'tan yaz"
        title="Volvo XC60 parça sor"
        className="fixed bottom-24 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-7 md:right-7 md:h-[70px] md:w-[70px]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#06111d]/95 p-3 backdrop-blur md:hidden">

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
          PARÇA SOR
        </a>

      </div>
    </>
  );
}
