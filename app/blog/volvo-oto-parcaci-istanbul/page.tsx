import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Oto Parçacı İstanbul | Volvo Parça | Jade Automotive",
  description:
    "İstanbul Volvo oto parçacı arıyorsanız Jade Automotive'e ulaşın. Volvo fren, bakım, ön takım, süspansiyon ve motor parçaları için 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-oto-parcaci-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
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
  ["Fren Balatası", "Volvo aracınız için fren balatası talebinizi iletin."],
  ["Fren Diski", "Fren diski için araç bilgilerinizi paylaşın."],
  ["Filtre & Bakım", "Bakım sırasında ihtiyaç duyduğunuz parçaları sorun."],
  ["Ön Takım", "Rot, rotil, salıncak ve yürüyen aksam parçalarını sorun."],
  ["Amortisör", "Süspansiyon ve amortisör parça taleplerinizi iletin."],
  ["Motor Parçaları", "Motor bilgisine göre ihtiyacınız olan parçayı sorun."],
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#f8fafc] text-[#18324b]">

        {/* HEADER STRIP */}
        <div className="bg-[#eef5fa]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm">
            <strong className="text-[#244d70]">
              Jade Automotive
            </strong>

            <a
              href={phone}
              className="flex items-center gap-2 font-black text-[#163c5d]"
            >
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dceffc] blur-3xl" />
          <div className="absolute -left-52 bottom-[-250px] h-[500px] w-[500px] rounded-full bg-[#eaf7f1] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-20">

            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Oto Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Oto Parçacı İstanbul</span>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

              <div>
                <span className="inline-flex rounded-full bg-[#edf6fc] px-4 py-2 text-xs font-black tracking-[.16em] text-[#3577a5]">
                  VOLVO • OTO PARÇA • İSTANBUL
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1] tracking-tight text-[#153a5a] md:text-7xl">
                  Volvo Oto
                  <span className="block text-[#4a8fba]">
                    Parçacı İstanbul
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Volvo aracınız için parça arıyorsanız
                  <strong className="text-[#153a5a]">
                    {" "}Jade Automotive'i arayın.
                  </strong>{" "}
                  Aradığınız parçayı söyleyin; parça adından emin değilseniz
                  araç bilgilerinizi paylaşın.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-2xl bg-[#153a5a] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:-translate-y-1"
                  >
                    <PhoneIcon />
                    VOLVO PARÇA İÇİN ARA
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#07391a] transition hover:-translate-y-1"
                  >
                    <WhatsAppIcon />
                    WHATSAPP
                  </a>
                </div>

                <a
                  href={phone}
                  className="mt-8 block text-3xl font-black text-[#153a5a] md:text-4xl"
                >
                  0543 557 15 29
                </a>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Volvo oto parça talepleri için telefon
                </p>
              </div>

              {/* CALL PANEL */}
              <div className="rounded-[40px] border border-[#dce7ef] bg-[#f5f9fc] p-7 shadow-[0_25px_70px_rgba(22,60,93,.10)] md:p-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#153a5a] text-white">
                  <PhoneIcon className="h-8 w-8" />
                </div>

                <p className="mt-7 text-sm font-black tracking-[.15em] text-[#4a8fba]">
                  PARÇA HATTI
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#153a5a]">
                  Aradığın parçayı söyle
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Telefon görüşmesinde araç yılı, motor bilgisi ve aradığınız
                  parçayı iletebilirsiniz.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["01", "Volvo"],
                    ["02", "Araç Yılı"],
                    ["03", "Motor"],
                    ["04", "Parça"],
                  ].map(([no, text]) => (
                    <div
                      key={no}
                      className="rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <span className="text-xs font-black text-[#4a8fba]">
                        {no}
                      </span>
                      <strong className="mt-2 block text-[#153a5a]">
                        {text}
                      </strong>
                    </div>
                  ))}
                </div>

                <a
                  href={phone}
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#153a5a] p-5 text-lg font-black text-white"
                >
                  <PhoneIcon />
                  ŞİMDİ ARA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CALL BAND */}
        <section className="border-y border-[#dce7ef] bg-[#eaf4fa]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-9 md:grid-cols-[1fr_auto] md:items-center">

            <div>
              <p className="text-sm font-black text-[#4a8fba]">
                VOLVO PARÇA ARIYORUM
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#153a5a] md:text-3xl">
                En hızlı yol: telefonla parçayı sorun.
              </h2>
            </div>

            <a
              href={phone}
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-xl font-black text-[#153a5a] shadow-sm"
            >
              <PhoneIcon />
              0543 557 15 29
            </a>
          </div>
        </section>

        {/* PARTS */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[.15em] text-[#4a8fba]">
              VOLVO OTO PARÇA
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#153a5a] md:text-5xl">
              Hangi parçayı arıyorsunuz?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Aradığınız parça grubuna göre telefonla bilgi verebilir veya
              parçanın fotoğrafını WhatsApp üzerinden gönderebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {parts.map(([title, text], index) => (
              <a
                key={title}
                href={phone}
                className="group rounded-[30px] border border-[#dce6ed] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6fc] font-black text-[#4a8fba]">
                    0{index + 1}
                  </span>

                  <span className="text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#4a8fba]">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-[#153a5a]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {text}
                </p>

                <span className="mt-6 flex items-center gap-2 text-sm font-black text-[#397ca9]">
                  <PhoneIcon className="h-4 w-4" />
                  Parçayı telefonda sor
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* BIG CALL */}
        <section className="px-5">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#153a5a]">

            <div className="relative grid gap-8 p-8 text-white md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#5ca6d2]/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-black tracking-[.16em] text-[#a9daf7]">
                  TELEFONLA VOLVO PARÇA SOR
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                  Usta parçayı söyledi mi?
                  <span className="block text-[#a9daf7]">
                    Bizi direkt arayın.
                  </span>
                </h2>
              </div>

              <a
                href={phone}
                className="relative flex min-w-[290px] flex-col items-center rounded-[28px] bg-white px-9 py-7 text-[#153a5a] shadow-xl transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 text-sm font-black">
                  <PhoneIcon className="h-5 w-5" />
                  HEMEN ARA
                </span>
                <strong className="mt-2 text-2xl">
                  0543 557 15 29
                </strong>
              </a>
            </div>
          </div>
        </section>

        {/* WHATSAPP */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-[36px] border border-[#dce7ef] bg-white p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8fff0] text-[#169a49]">
                <WhatsAppIcon className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-3xl font-black text-[#153a5a]">
                Parçanın adını bilmiyor musunuz?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Parçanın fotoğrafını, üzerindeki etiketi veya ustanın verdiği
                listeyi WhatsApp üzerinden gönderebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                FOTOĞRAF GÖNDER
              </a>
            </div>

            <div className="rounded-[36px] bg-[#edf5fa] p-8 md:p-10">
              <p className="text-sm font-black text-[#4a8fba]">
                TELEFONDA HAZIR OLSUN
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#153a5a]">
                3 bilgi yeterli
              </h2>

              <div className="mt-7 space-y-3">
                {[
                  "Aracın model yılı",
                  "Motor bilgisi",
                  "Aradığın parçanın adı",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153a5a] font-black text-white">
                      {i + 1}
                    </span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SEO TEXT */}
        <section className="border-y border-[#dce7ef] bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">

            <div>
              <p className="text-sm font-black tracking-wider text-[#4a8fba]">
                İSTANBUL VOLVO OTO PARÇACI
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#153a5a]">
                Volvo oto parça talebi
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                İstanbul'da Volvo oto parçacı arayan kullanıcılar fren,
                bakım, ön takım, süspansiyon ve motor parçaları için
                Jade Automotive'e ulaşabilir.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Parça talebinde araç yılı ve motor bilgisinin paylaşılması,
                ihtiyaç duyulan parçanın daha net belirlenmesine yardımcı olur.
                Elinizde mevcut parçaya ait fotoğraf veya referans bilgisi
                varsa bunu da iletebilirsiniz.
              </p>
            </div>

            <div className="rounded-[34px] bg-[#f4f8fb] p-8">
              <p className="text-sm font-black text-[#4a8fba]">
                VOLVO PARÇA İLETİŞİM
              </p>

              <a
                href={phone}
                className="mt-5 flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#153a5a] text-white">
                  <PhoneIcon />
                </span>

                <div>
                  <small className="font-bold text-slate-400">
                    TELEFON
                  </small>
                  <strong className="block text-2xl text-[#153a5a]">
                    0543 557 15 29
                  </strong>
                </div>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon />
                </span>

                <div>
                  <small className="font-bold text-slate-400">
                    WHATSAPP
                  </small>
                  <strong className="block text-xl text-[#153a5a]">
                    Parça Fotoğrafı Gönder
                  </strong>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <p className="text-sm font-black tracking-wider text-[#4a8fba]">
            ONLINE MAĞAZALAR
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#153a5a]">
            Jade Automotive mağazaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-[#f1d8c5] bg-white p-7 shadow-sm transition hover:-translate-y-1"
            >
              <div>
                <span className="text-xs font-black text-[#f27a1a]">
                  ONLINE MAĞAZA
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#153a5a]">
                  Trendyol
                </h3>
              </div>
              <span className="text-3xl text-[#f27a1a]">→</span>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-[#f2d6c5] bg-white p-7 shadow-sm transition hover:-translate-y-1"
            >
              <div>
                <span className="text-xs font-black text-[#ff6000]">
                  ONLINE MAĞAZA
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#153a5a]">
                  Hepsiburada
                </h3>
              </div>
              <span className="text-3xl text-[#ff6000]">→</span>
            </a>

          </div>
        </section>

        {/* CLUSTER */}
        <section className="border-y border-[#dce7ef] bg-[#edf5fa]">
          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black text-[#4a8fba]">
              VOLVO YEDEK PARÇA REHBERİ
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/volvo-yedek-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm"
              >
                <h3 className="font-black text-[#153a5a]">
                  Volvo Yedek Parçacı İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4a8fba]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-fiyatlari"
                className="rounded-[26px] bg-white p-6 shadow-sm"
              >
                <h3 className="font-black text-[#153a5a]">
                  Volvo Yedek Parça Fiyatları
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4a8fba]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm"
              >
                <h3 className="font-black text-[#153a5a]">
                  Volvo Yedek Parça İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4a8fba]">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="rounded-[42px] bg-white p-8 shadow-[0_25px_70px_rgba(22,60,93,.10)] md:p-14">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#4a8fba]">
                  VOLVO OTO PARÇACI İSTANBUL
                </p>

                <h2 className="mt-3 text-4xl font-black text-[#153a5a] md:text-6xl">
                  Aradığın parça için
                  <span className="block text-[#4a8fba]">
                    direkt ara.
                  </span>
                </h2>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] items-center justify-center gap-4 rounded-[28px] bg-[#153a5a] px-9 py-7 text-xl font-black text-white"
              >
                <PhoneIcon />
                0543 557 15 29
              </a>

            </div>
          </div>
        </section>

        <div className="h-24 md:hidden" />

      </main>

      {/* DESKTOP SABIT TELEFON */}
      <a
        href={phone}
        aria-label="Volvo oto parça için ara"
        className="fixed bottom-7 right-7 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#153a5a] text-white shadow-2xl transition hover:scale-110 md:flex"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>

      {/* MOBILE CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-[1.25fr_.75fr] gap-2 border-t border-[#dce7ef] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,40,65,.08)] backdrop-blur md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#153a5a] py-4 font-black text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          HEMEN ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#07391a]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WHATSAPP
        </a>

      </div>

    </>
  );
}
