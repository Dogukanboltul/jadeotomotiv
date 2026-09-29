import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Yedek Parça Fiyatları | Volvo Parça Fiyatı Sor",
  description:
    "Volvo yedek parça fiyatları için aradığınız parçayı Jade Automotive'e sorun. Fren, bakım, ön takım, süspansiyon ve motor parçaları. Trendyol mağazamızı inceleyin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-yedek-parca-fiyatlari",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20yedek%20par%C3%A7a%20fiyat%C4%B1%20%C3%B6%C4%9Frenmek%20istiyorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

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

const groups = [
  {
    title: "Volvo Fren Balatası Fiyatları",
    text: "Araç bilgilerinizi göndererek uygun fren balatası seçeneğini sorun.",
  },
  {
    title: "Volvo Fren Diski Fiyatları",
    text: "Fren diski talebinizi araç yılı ve motor bilgisiyle iletin.",
  },
  {
    title: "Volvo Filtre Fiyatları",
    text: "Bakım için ihtiyacınız olan filtre grubunu bize gönderin.",
  },
  {
    title: "Volvo Ön Takım Parça Fiyatları",
    text: "Rot, rotil, salıncak ve yürüyen aksam parçalarını sorun.",
  },
  {
    title: "Volvo Amortisör Fiyatları",
    text: "Araç bilgisine göre amortisör ve süspansiyon parçalarını sorun.",
  },
  {
    title: "Volvo Motor Parçası Fiyatları",
    text: "Motor bilgisi ve aradığınız parçayla fiyat talebi oluşturun.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#050d16] text-white">

        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="absolute right-[-180px] top-[-200px] h-[650px] w-[650px] rounded-full bg-cyan-300/10 blur-[110px]" />
          <div className="absolute bottom-[-250px] left-[-200px] h-[550px] w-[550px] rounded-full bg-[#f27a1a]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Yedek Parça Fiyatları</span>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

              <div>
                <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-black tracking-[.16em] text-cyan-300">
                  VOLVO YEDEK PARÇA • FİYAT
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] md:text-7xl">
                  Volvo Yedek
                  <span className="block text-cyan-300">
                    Parça Fiyatları
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Volvo yedek parça fiyatı mı araştırıyorsun?
                  İhtiyacın olan parçanın fiyatı araç ve parça seçeneğine göre
                  değişebileceği için bize
                  <strong className="text-white">
                    {" "}yıl + motor + parça bilgisini
                  </strong>{" "}
                  gönder.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 text-lg font-black text-[#03120a]"
                  >
                    <WhatsAppIcon />
                    PARÇA FİYATI SOR
                  </a>

                  <a
                    href={trendyol}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-[#f27a1a] px-7 py-5 text-lg font-black text-white"
                  >
                    TRENDYOL'DA İNCELE →
                  </a>

                </div>
              </div>

              {/* PRICE CARD */}
              <div className="rounded-[38px] border border-white/10 bg-[#0a1928] p-7 shadow-2xl md:p-9">

                <p className="text-sm font-black tracking-[.16em] text-[#65e995]">
                  FİYAT AL
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Hangi Volvo parçasını arıyorsun?
                </h2>

                <div className="mt-7 space-y-3">

                  {[
                    ["01", "Araç", "Volvo"],
                    ["02", "Yıl", "Model yılını yaz"],
                    ["03", "Motor", "Motor bilgisini yaz"],
                    ["04", "Parça", "Aradığın parçayı yaz"],
                  ].map(([no, title, text]) => (
                    <div
                      key={no}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050d16] p-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 font-black text-cyan-300">
                        {no}
                      </span>

                      <div>
                        <strong>{title}</strong>
                        <p className="text-sm text-slate-500">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-5 font-black text-[#03120a]"
                >
                  <WhatsAppIcon />
                  WHATSAPP'TAN FİYAT SOR
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* TRENDYOL PROMINENT */}
        <section className="mx-auto max-w-7xl px-5 py-10">

          <a
            href={trendyol}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[36px] bg-[#f27a1a] text-white shadow-2xl transition hover:-translate-y-1"
          >
            <div className="grid gap-8 p-8 md:p-11 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-sm font-black tracking-[.18em] text-white/70">
                  JADE AUTOMOTIVE ONLINE MAĞAZA
                </p>

                <h2 className="mt-3 text-4xl font-black md:text-5xl">
                  Trendyol Mağazamız
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                  Jade Automotive mağazasındaki ürünleri ve güncel satış
                  fiyatlarını Trendyol üzerinden inceleyebilirsiniz.
                </p>
              </div>

              <div className="rounded-2xl bg-white px-8 py-5 text-xl font-black text-[#f27a1a]">
                TRENDYOL'A GİT
                <span className="ml-4 inline-block transition group-hover:translate-x-2">
                  →
                </span>
              </div>

            </div>
          </a>
        </section>

        {/* PRICE GROUPS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">

          <p className="font-black tracking-wider text-cyan-300">
            VOLVO PARÇA FİYATLARI
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">
            Hangi parçanın fiyatını arıyorsun?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Tek bir genel fiyat vermek yerine ihtiyacınız olan parçayı araç
            bilgileriyle birlikte kontrol etmek daha doğru olur.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {groups.map((item) => (
              <a
                key={item.title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[30px] border border-white/10 bg-[#091725] p-7 transition hover:-translate-y-1 hover:border-[#25D366]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🔧</span>
                  <span className="text-2xl text-slate-600 group-hover:text-[#65e995]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>

                <span className="mt-6 flex items-center gap-2 font-black text-[#65e995]">
                  <WhatsAppIcon className="h-5 w-5" />
                  Fiyatını sor
                </span>
              </a>
            ))}

          </div>
        </section>

        {/* EXPLANATION */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">

            <div>
              <p className="font-black text-cyan-300">
                VOLVO PARÇA FİYATI
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Volvo yedek parça fiyatı neden değişir?
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Aynı parça adı altında farklı araç yılı, motor seçeneği,
                üretici ve referans numarasına sahip ürünler bulunabilir.
                Bu nedenle fiyat araştırırken önce aracınıza uygun parçanın
                belirlenmesi gerekir.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Elinizde sökülen parçanın fotoğrafı, kutusu veya referans
                numarası bulunuyorsa WhatsApp mesajınıza ekleyebilirsiniz.
              </p>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[#050d16] p-8">

              <h3 className="text-2xl font-black">
                Fiyat isterken bunları gönder
              </h3>

              <div className="mt-7 space-y-4">

                {[
                  ["✓", "Araç yılı"],
                  ["✓", "Motor bilgisi"],
                  ["✓", "Aradığın parçanın adı"],
                  ["✓", "Varsa parça fotoğrafı"],
                  ["✓", "Varsa parça / referans kodu"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#091725] p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 font-black text-[#65e995]">
                      {icon}
                    </span>

                    <strong>{text}</strong>
                  </div>
                ))}

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-5 font-black text-[#03120a]"
              >
                <WhatsAppIcon />
                ŞİMDİ FİYAT SOR
              </a>

            </div>
          </div>
        </section>

        {/* STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="text-center">
            <p className="font-black text-cyan-300">
              ONLINE MAĞAZALARIMIZ
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
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
              <p className="text-xs font-black tracking-widest text-white/70">
                ÖNE ÇIKAN MAĞAZA
              </p>

              <h3 className="mt-7 text-3xl font-black">
                Trendyol
              </h3>

              <p className="mt-3">
                Jade Automotive ürünlerini ve fiyatlarını incele.
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

              <h3 className="mt-7 text-3xl font-black">
                Fiyat Sor
              </h3>

              <p className="mt-3 font-semibold">
                Araç bilgilerini gönder, parçanı sor.
              </p>

              <span className="mt-8 block font-black">
                WHATSAPP →
              </span>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] bg-[#ff6000] p-8 text-white transition hover:-translate-y-1"
            >
              <p className="text-xs font-black tracking-widest text-white/70">
                ONLINE MAĞAZA
              </p>

              <h3 className="mt-7 text-3xl font-black">
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
        </section>

        {/* SEO CLUSTER */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="font-black text-cyan-300">
              VOLVO YEDEK PARÇA REHBERİ
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/volvo-oto-yedek-parca"
                className="rounded-3xl border border-white/10 bg-[#050d16] p-6 hover:border-cyan-300/30"
              >
                <h3 className="text-xl font-black">
                  Volvo Oto Yedek Parça
                </h3>
                <span className="mt-4 block font-black text-cyan-300">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-istanbul"
                className="rounded-3xl border border-white/10 bg-[#050d16] p-6 hover:border-cyan-300/30"
              >
                <h3 className="text-xl font-black">
                  Volvo Yedek Parça İstanbul
                </h3>
                <span className="mt-4 block font-black text-cyan-300">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-nereden-alinir"
                className="rounded-3xl border border-white/10 bg-[#050d16] p-6 hover:border-cyan-300/30"
              >
                <h3 className="text-xl font-black">
                  Volvo Yedek Parça Nereden Alınır?
                </h3>
                <span className="mt-4 block font-black text-cyan-300">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="rounded-[42px] border border-cyan-300/20 bg-gradient-to-br from-[#10283b] to-[#07111d] p-8 md:p-14">

            <p className="font-black text-[#65e995]">
              VOLVO YEDEK PARÇA FİYATI
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
              Parçanı gönder.
              <span className="block text-cyan-300">
                Fiyatını sor.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Aracın yılını, motor bilgisini ve ihtiyacın olan parçayı
              WhatsApp üzerinden gönder.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#03120a]"
              >
                <WhatsAppIcon />
                FİYAT SOR
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f27a1a] px-8 py-5 text-lg font-black text-white"
              >
                TRENDYOL →
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
        aria-label="Volvo yedek parça fiyatı sor"
        className="fixed bottom-24 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-7 md:right-7 md:h-[70px] md:w-[70px]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* MOBIL SATIN ALMA BAR */}
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
          FİYAT SOR
        </a>

      </div>
    </>
  );
}
