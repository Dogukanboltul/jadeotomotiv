import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Yedek Parça Nereden Alınır? | Jade Automotive",
  description:
    "Volvo yedek parça nereden alınır? Aradığınız Volvo parçasını Jade Automotive Trendyol mağazasında inceleyin veya araç bilgilerinizi WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-yedek-parca-nereden-alinir",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

const phone = "tel:+905435571529";

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

const parts = [
  "Volvo Fren Balatası",
  "Volvo Fren Diski",
  "Volvo Filtre ve Bakım Parçaları",
  "Volvo Ön Takım Parçaları",
  "Volvo Amortisör",
  "Volvo Süspansiyon Parçaları",
  "Volvo Motor Parçaları",
  "Volvo Soğutma Sistemi Parçaları",
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#050d16] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute right-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-[#f27a1a]/10 blur-[100px]" />
          <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">

            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Yedek Parça Nereden Alınır?</span>
            </div>

            <div className="mt-16 max-w-5xl">

              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-black tracking-[0.15em] text-cyan-300">
                VOLVO YEDEK PARÇA • ONLINE SATIN AL
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[1.02] md:text-7xl">
                Volvo Yedek Parça
                <span className="block text-cyan-300">
                  Nereden Alınır?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Volvo aracınız için yedek parça arıyorsanız Jade Automotive
                online mağazalarını inceleyebilir veya hangi parçaya ihtiyacınız
                olduğundan emin değilseniz araç bilgilerinizi WhatsApp üzerinden
                gönderebilirsiniz.
              </p>

            </div>
          </div>
        </section>

        {/* TRENDYOL - UST SIRA */}
        <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5">

          <div className="overflow-hidden rounded-[36px] bg-[#f27a1a] shadow-2xl shadow-black/30">

            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black tracking-widest text-white">
                  ONLINE MAĞAZAMIZ
                </div>

                <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                  Jade Automotive
                  <span className="block">
                    Trendyol Mağazası
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                  Jade Automotive ürünlerini Trendyol mağazamız üzerinden
                  inceleyebilirsiniz. Aradığınız parçadan emin değilseniz satın
                  almadan önce bize WhatsApp'tan araç bilgilerinizi gönderin.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-white">
                  <span className="rounded-full bg-black/10 px-4 py-2">
                    Volvo parça ara
                  </span>
                  <span className="rounded-full bg-black/10 px-4 py-2">
                    Ürünleri incele
                  </span>
                  <span className="rounded-full bg-black/10 px-4 py-2">
                    Jade Automotive
                  </span>
                </div>
              </div>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[260px] items-center justify-between gap-6 rounded-[26px] bg-white px-7 py-6 text-[#f27a1a] shadow-xl transition hover:-translate-y-1"
              >
                <div>
                  <span className="block text-xs font-black tracking-widest text-slate-400">
                    MAĞAZAYI AÇ
                  </span>
                  <strong className="mt-1 block text-2xl">
                    Trendyol
                  </strong>
                </div>

                <span className="text-3xl transition group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* WHATSAPP */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">

            <div className="rounded-[36px] border border-white/10 bg-[#0a1928] p-8 md:p-11">

              <p className="font-black text-[#65e995]">
                DOĞRU PARÇADAN EMİN DEĞİL MİSİN?
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Önce WhatsApp'tan sor.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Volvo aracının yılını, motor bilgisini ve aradığın parçayı
                gönder. Elinde parça fotoğrafı veya kodu varsa mesajına ekle.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#03120a]"
              >
                <WhatsAppIcon />
                VOLVO PARÇA SOR
              </a>

            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8">

              <p className="text-sm font-black tracking-widest text-cyan-300">
                3 ADIMDA
              </p>

              <div className="mt-7 space-y-4">

                {[
                  ["01", "Volvo araç bilgini gönder"],
                  ["02", "Aradığın parçayı veya fotoğrafını gönder"],
                  ["03", "Uygun parçayı netleştir"],
                ].map(([no, text]) => (
                  <div
                    key={no}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#07111d] p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 font-black text-cyan-300">
                      {no}
                    </span>

                    <strong>{text}</strong>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* PARTS */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto max-w-7xl px-5 py-20">

            <p className="font-black tracking-wider text-cyan-300">
              VOLVO OTO PARÇA
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Aradığınız Volvo parçasını sorun
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {parts.map((part) => (
                <a
                  key={part}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[26px] border border-white/10 bg-[#050d16] p-6 transition hover:-translate-y-1 hover:border-[#25D366]/40"
                >
                  <div className="flex justify-between">
                    <span className="text-2xl">🔧</span>
                    <span className="text-slate-600 group-hover:text-[#65e995]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-black">
                    {part}
                  </h3>

                  <span className="mt-5 flex items-center gap-2 text-sm font-black text-[#65e995]">
                    <WhatsAppIcon className="h-5 w-5" />
                    Parçayı sor
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* BUYING GUIDE */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="font-black text-cyan-300">
                VOLVO YEDEK PARÇA SATIN ALMA
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Parça alırken araç bilgisi neden önemli?
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Volvo yedek parça seçerken yalnızca araç markasına bakmak
                yeterli olmayabilir. Üretim yılı, motor seçeneği ve parçanın
                araç üzerindeki uygulaması farklılık gösterebilir.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Bu nedenle online sipariş vermeden önce ürün açıklamasındaki
                uyumluluk bilgilerini kontrol etmek; emin olunmayan durumlarda
                araç ve mevcut parça bilgilerini iletmek yanlış ürün seçme
                riskini azaltmaya yardımcı olur.
              </p>
            </div>

            <div className="rounded-[34px] border border-[#f27a1a]/30 bg-[#f27a1a]/5 p-8 md:p-10">

              <p className="text-sm font-black tracking-widest text-[#ff9c50]">
                TRENDYOL'DA JADE AUTOMOTIVE
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Online mağazayı incele
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Jade Automotive Trendyol mağazasındaki ürünleri doğrudan
                mağaza sayfası üzerinden görüntüleyebilirsiniz.
              </p>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-between rounded-2xl bg-[#f27a1a] px-6 py-5 font-black text-white"
              >
                TRENDYOL MAĞAZASINA GİT
                <span className="text-2xl">→</span>
              </a>

            </div>
          </div>
        </section>

        {/* MARKETPLACES */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto max-w-7xl px-5 py-20">

            <div className="text-center">
              <p className="font-black text-cyan-300">
                ONLINE MAĞAZALAR
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Jade Automotive
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] bg-[#f27a1a] p-8 text-white transition hover:-translate-y-1"
              >
                <p className="text-xs font-black tracking-widest">
                  ÖNE ÇIKAN MAĞAZA
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  Trendyol
                </h3>

                <p className="mt-3">
                  Jade Automotive mağazasını incele.
                </p>

                <span className="mt-8 block font-black">
                  MAĞAZAYA GİT →
                </span>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] bg-[#25D366] p-8 text-[#03120a] transition hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-9 w-9" />

                <h3 className="mt-6 text-3xl font-black">
                  WhatsApp
                </h3>

                <p className="mt-3 font-semibold">
                  Doğru Volvo parçasını sor.
                </p>

                <span className="mt-8 block font-black">
                  0543 557 15 29 →
                </span>
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[30px] bg-[#ff6000] p-8 text-white transition hover:-translate-y-1"
              >
                <p className="text-xs font-black tracking-widest">
                  ONLINE MAĞAZA
                </p>

                <h3 className="mt-6 text-3xl font-black">
                  Hepsiburada
                </h3>

                <p className="mt-3">
                  Jade Automotive mağazasını incele.
                </p>

                <span className="mt-8 block font-black">
                  MAĞAZAYA GİT →
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* INTERNAL */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <p className="font-black text-cyan-300">
            VOLVO YEDEK PARÇA REHBERİ
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">

            <Link
              href="/blog/volvo-oto-yedek-parca"
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-300/40"
            >
              <span className="text-sm text-slate-500">
                VOLVO
              </span>

              <h3 className="mt-2 text-2xl font-black text-cyan-300">
                Volvo Oto Yedek Parça →
              </h3>
            </Link>

            <Link
              href="/blog/volvo-yedek-parca-istanbul"
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-300/40"
            >
              <span className="text-sm text-slate-500">
                İSTANBUL
              </span>

              <h3 className="mt-2 text-2xl font-black text-cyan-300">
                Volvo Yedek Parça İstanbul →
              </h3>
            </Link>

          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 pb-32">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#10283b] to-[#07111d] p-8 md:p-14">

            <p className="font-black text-[#65e995]">
              JADE AUTOMOTIVE
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
              Volvo parçanı bul.
              <span className="block text-[#f27a1a]">
                Trendyol mağazamızı incele.
              </span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f27a1a] px-8 py-5 text-lg font-black text-white"
              >
                TRENDYOL MAĞAZASI →
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#03120a]"
              >
                <WhatsAppIcon />
                PARÇA SOR
              </a>

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
        aria-label="Volvo yedek parça için WhatsApp"
        className="fixed bottom-24 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-7 md:right-7 md:h-[70px] md:w-[70px]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#050d16]/95 p-3 backdrop-blur md:hidden">

        <a
          href={trendyol}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-[#f27a1a] py-4 text-center font-black text-white"
        >
          TRENDYOL
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#03120a]"
        >
          <WhatsAppIcon className="h-6 w-6" />
          PARÇA SOR
        </a>

      </div>
    </>
  );
}
