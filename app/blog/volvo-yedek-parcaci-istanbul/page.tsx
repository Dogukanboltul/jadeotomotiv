import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Yedek Parçacı İstanbul | Volvo Oto Parça | Jade Automotive",
  description:
    "İstanbul Volvo yedek parçacı arıyorsanız Jade Automotive'i arayın. Volvo fren, bakım, ön takım, süspansiyon ve motor parçaları için 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-yedek-parcaci-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

function PhoneIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
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

function WhatsAppIcon({
  className = "h-6 w-6",
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
  {
    icon: "◉",
    title: "Fren Parçaları",
    text: "Volvo fren balatası, fren diski ve ilgili fren parçaları.",
  },
  {
    icon: "✦",
    title: "Bakım Parçaları",
    text: "Filtre ve periyodik bakım sırasında ihtiyaç duyulan parçalar.",
  },
  {
    icon: "⌁",
    title: "Ön Takım",
    text: "Rot, rotil, salıncak, Z rot ve yürüyen aksam parçaları.",
  },
  {
    icon: "↕",
    title: "Süspansiyon",
    text: "Amortisör ve süspansiyon sistemi için parça talepleri.",
  },
  {
    icon: "⚙",
    title: "Motor Parçaları",
    text: "Motor bilgisine göre ihtiyaç duyduğunuz mekanik parçalar.",
  },
  {
    icon: "◌",
    title: "Soğutma Sistemi",
    text: "Termostat, devirdaim ve ilgili soğutma sistemi parçaları.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#10233d]">

        {/* TOP STRIP */}
        <div className="bg-[#102b4e] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 text-sm">
            <span className="font-semibold">
              Jade Automotive • İstanbul Volvo Yedek Parça
            </span>

            <a
              href={phone}
              className="hidden items-center gap-2 font-black md:flex"
            >
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white">

          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#dbeeff] opacity-70 blur-3xl" />
          <div className="absolute -bottom-52 left-[30%] h-[450px] w-[450px] rounded-full bg-[#e7f4ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 md:pb-28 md:pt-12">

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Yedek Parçacı İstanbul</span>
            </div>

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ef] bg-[#eef7ff] px-4 py-2 text-xs font-black tracking-[.16em] text-[#1d5f91]">
                  İSTANBUL • VOLVO OTO PARÇA
                </div>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-tight text-[#102b4e] md:text-7xl">
                  Volvo Yedek
                  <span className="block text-[#2f78a9]">
                    Parçacı İstanbul
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Volvo aracınız için yedek parça arıyorsanız bizi arayın.
                  Aradığınız parçayı biliyorsanız adını söyleyin;
                  <strong className="text-[#102b4e]">
                    {" "}emin değilseniz araç bilgilerinizi paylaşın.
                  </strong>
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-2xl bg-[#102b4e] px-8 py-5 text-lg font-black text-white shadow-xl shadow-[#102b4e]/15 transition hover:-translate-y-1"
                  >
                    <PhoneIcon />
                    HEMEN ARA
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#062d15] transition hover:-translate-y-1"
                  >
                    <WhatsAppIcon />
                    WHATSAPP
                  </a>

                </div>

                <a
                  href={phone}
                  className="mt-8 inline-block text-3xl font-black tracking-tight text-[#102b4e] md:text-4xl"
                >
                  0543 557 15 29
                </a>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Volvo yedek parça için telefonla ulaşın
                </p>
              </div>

              {/* CALL CARD */}
              <div className="relative">

                <div className="absolute inset-5 rounded-[45px] bg-[#d8eafb] blur-3xl" />

                <div className="relative rounded-[40px] border border-[#dce5ed] bg-white p-7 shadow-[0_30px_80px_rgba(16,43,78,.12)] md:p-10">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-black tracking-[.18em] text-[#2f78a9]">
                        VOLVO PARÇA HATTI
                      </p>

                      <h2 className="mt-2 text-3xl font-black text-[#102b4e]">
                        Parçayı telefonda sor
                      </h2>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#102b4e] text-white">
                      <PhoneIcon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">

                    {[
                      ["01", "Araç", "Volvo"],
                      ["02", "Yıl", "Model yılını söyle"],
                      ["03", "Motor", "Motor bilgisini paylaş"],
                      ["04", "Parça", "Aradığın parçayı söyle"],
                    ].map(([no, title, text]) => (
                      <div
                        key={no}
                        className="flex items-center gap-4 rounded-2xl bg-[#f4f8fb] p-4"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-black text-[#2f78a9] shadow-sm">
                          {no}
                        </span>

                        <div>
                          <strong className="text-[#102b4e]">
                            {title}
                          </strong>

                          <p className="text-sm text-slate-500">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>

                  <a
                    href={phone}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#102b4e] p-5 text-lg font-black text-white"
                  >
                    <PhoneIcon />
                    0543 557 15 29
                  </a>

                  <p className="mt-4 text-center text-sm text-slate-500">
                    Parça adını bilmiyorsanız WhatsApp'tan fotoğraf da gönderebilirsiniz.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK TRUST */}
        <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5">

          <div className="grid overflow-hidden rounded-[28px] border border-[#dfe7ee] bg-white shadow-xl shadow-slate-200/50 md:grid-cols-3">

            {[
              ["01", "Telefonla Parça Sor", "Aradığın parçayı doğrudan söyle."],
              ["02", "Araç Bilgini Ver", "Yıl ve motor bilgisini paylaş."],
              ["03", "Fotoğraf Gönder", "Emin değilsen parçanın fotoğrafını gönder."],
            ].map(([no, title, text]) => (
              <div
                key={no}
                className="border-b border-[#e7edf2] p-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="text-sm font-black text-[#2f78a9]">
                  {no}
                </span>

                <h3 className="mt-3 text-xl font-black text-[#102b4e]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* PARTS */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <p className="text-sm font-black tracking-[.18em] text-[#2f78a9]">
                VOLVO YEDEK PARÇA
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#102b4e] md:text-5xl">
                Hangi parçayı
                <span className="block text-[#7a94a8]">
                  arıyorsunuz?
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-600">
                Fren, bakım, yürüyen aksam ve motor parçaları için
                araç bilgilerinizi iletebilirsiniz.
              </p>

              <a
                href={phone}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#102b4e] px-6 py-4 font-black text-white"
              >
                <PhoneIcon />
                PARÇA İÇİN ARA
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {parts.map((item) => (
                <a
                  key={item.title}
                  href={phone}
                  className="group rounded-[28px] border border-[#dde6ed] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9fc7e4] hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef7ff] text-xl font-black text-[#2f78a9]">
                      {item.icon}
                    </span>

                    <span className="text-2xl text-[#b2c2ce] transition group-hover:translate-x-1 group-hover:text-[#2f78a9]">
                      →
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[#102b4e]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>

                  <span className="mt-6 flex items-center gap-2 text-sm font-black text-[#2f78a9]">
                    <PhoneIcon className="h-4 w-4" />
                    Telefonla sor
                  </span>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* PHONE CTA */}
        <section className="px-5">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#102b4e] text-white">

            <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">

              <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#4c9fd2]/20 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-black tracking-[.16em] text-[#9fd9ff]">
                  VOLVO PARÇA MI LAZIM?
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                  Arayın, ihtiyacınız olan
                  <span className="block text-[#a9dcff]">
                    parçayı söyleyin.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c8d6e2]">
                  Araç yılı ve motor bilgisini hazır bulundurmanız parça
                  talebinizi daha net iletmenize yardımcı olur.
                </p>
              </div>

              <a
                href={phone}
                className="relative flex min-w-[280px] items-center justify-center gap-4 rounded-3xl bg-white px-8 py-7 text-xl font-black text-[#102b4e] shadow-xl transition hover:-translate-y-1"
              >
                <PhoneIcon className="h-7 w-7" />
                0543 557 15 29
              </a>

            </div>
          </div>
        </section>

        {/* PHOTO CTA */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[36px] border border-[#dce6ed] bg-white p-8 md:p-10">

              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9fff1] text-[#159447]">
                <WhatsAppIcon className="h-8 w-8" />
              </span>

              <h2 className="mt-7 text-3xl font-black text-[#102b4e]">
                Parçanın adını bilmiyor musunuz?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Hiç sorun değil. Elinizdeki parçanın, kutunun, etiketin
                veya ustanın verdiği listenin fotoğrafını WhatsApp üzerinden
                gönderebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#062d15]"
              >
                <WhatsAppIcon />
                FOTOĞRAF GÖNDER
              </a>

            </div>

            <div className="rounded-[36px] bg-[#eaf4fb] p-8 md:p-10">

              <p className="text-sm font-black tracking-widest text-[#2f78a9]">
                TELEFONDA NE SÖYLEMELİYİM?
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#102b4e]">
                30 saniyede parça talebi
              </h2>

              <div className="mt-7 space-y-3">

                {[
                  "Volvo aracınızın model yılını söyleyin",
                  "Motor bilgisini paylaşın",
                  "Aradığınız parçanın adını söyleyin",
                  "Varsa parça üzerindeki kodu paylaşın",
                ].map((text, i) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#102b4e] text-sm font-black text-white">
                      {i + 1}
                    </span>

                    <strong className="text-[#334b60]">
                      {text}
                    </strong>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="border-y border-[#dce6ed] bg-white">

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">

            <div>
              <p className="text-sm font-black tracking-[.16em] text-[#2f78a9]">
                İSTANBUL VOLVO YEDEK PARÇACI
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#102b4e]">
                Volvo yedek parça ararken
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Volvo aracınız için yedek parça ararken araç yılı, motor
                bilgisi ve ihtiyaç duyulan parçanın doğru şekilde
                belirlenmesi önemlidir. Aynı parça grubu farklı araç
                özelliklerinde farklı seçeneklere sahip olabilir.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Bu nedenle İstanbul'da Volvo yedek parçacı arayan
                kullanıcılar parça talebi sırasında araç bilgilerini,
                varsa mevcut parçanın kodunu veya fotoğrafını paylaşabilir.
              </p>
            </div>

            <div className="rounded-[34px] border border-[#dce6ed] bg-[#f7f9fb] p-8">

              <p className="text-sm font-black text-[#2f78a9]">
                JADE AUTOMOTIVE
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#102b4e]">
                Volvo parça iletişim
              </h3>

              <a
                href={phone}
                className="mt-7 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102b4e] text-white">
                  <PhoneIcon />
                </span>

                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    TELEFON
                  </span>
                  <strong className="text-xl text-[#102b4e]">
                    0543 557 15 29
                  </strong>
                </div>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon />
                </span>

                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    WHATSAPP
                  </span>
                  <strong className="text-xl text-[#102b4e]">
                    Parça Fotoğrafı Gönder
                  </strong>
                </div>
              </a>

            </div>

          </div>
        </section>

        {/* ONLINE STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-black tracking-wider text-[#2f78a9]">
                ONLINE MAĞAZALAR
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#102b4e]">
                Online incelemek isterseniz
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Aracınıza uygun parçadan emin değilseniz sipariş vermeden önce
              telefon veya WhatsApp üzerinden bilgi paylaşabilirsiniz.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[28px] border border-[#f4d4bc] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <span className="text-xs font-black tracking-widest text-[#f27a1a]">
                  JADE AUTOMOTIVE
                </span>

                <h3 className="mt-2 text-2xl font-black text-[#102b4e]">
                  Trendyol Mağazası
                </h3>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f27a1a] text-xl font-black text-white">
                →
              </span>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[28px] border border-[#ffd9c2] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <span className="text-xs font-black tracking-widest text-[#ff6000]">
                  JADE AUTOMOTIVE
                </span>

                <h3 className="mt-2 text-2xl font-black text-[#102b4e]">
                  Hepsiburada Mağazası
                </h3>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6000] text-xl font-black text-white">
                →
              </span>
            </a>

          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-[#dce6ed] bg-[#edf4f8]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black tracking-wider text-[#2f78a9]">
              VOLVO YEDEK PARÇA
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/volvo-yedek-parca-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#102b4e]">
                  Volvo Yedek Parça İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#2f78a9]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-oto-yedek-parca"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#102b4e]">
                  Volvo Oto Yedek Parça
                </h3>
                <span className="mt-4 block text-sm font-black text-[#2f78a9]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-fiyatlari"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#102b4e]">
                  Volvo Yedek Parça Fiyatları
                </h3>
                <span className="mt-4 block text-sm font-black text-[#2f78a9]">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL CALL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="relative overflow-hidden rounded-[42px] bg-white p-8 shadow-[0_25px_80px_rgba(16,43,78,.10)] md:p-14">

            <div className="absolute right-[-120px] top-[-140px] h-96 w-96 rounded-full bg-[#d9eeff] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#2f78a9]">
                  VOLVO YEDEK PARÇA İSTANBUL
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#102b4e] md:text-6xl">
                  Parça lazım mı?
                  <span className="block text-[#2f78a9]">
                    Direkt arayın.
                  </span>
                </h2>

                <p className="mt-5 text-lg text-slate-600">
                  Volvo yedek parça talepleriniz için:
                </p>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] flex-col items-center rounded-[30px] bg-[#102b4e] px-9 py-7 text-white shadow-xl transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 text-sm font-black text-[#b9def7]">
                  <PhoneIcon className="h-4 w-4" />
                  HEMEN ARA
                </span>

                <strong className="mt-2 text-2xl">
                  0543 557 15 29
                </strong>
              </a>

            </div>
          </div>
        </section>

        <div className="h-24 md:hidden" />

      </main>

      {/* DESKTOP FLOAT CALL */}
      <a
        href={phone}
        aria-label="Volvo yedek parça için hemen ara"
        title="0543 557 15 29"
        className="fixed bottom-7 right-7 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#102b4e] text-white shadow-2xl transition hover:scale-110 md:flex"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>

      {/* MOBILE CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-[1.2fr_.8fr] gap-2 border-t border-[#dce6ed] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,40,65,.08)] backdrop-blur md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#102b4e] py-4 font-black text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          HEMEN ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#062d15]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WHATSAPP
        </a>

      </div>

    </>
  );
}
