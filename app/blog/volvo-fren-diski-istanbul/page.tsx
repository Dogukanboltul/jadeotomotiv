import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Fren Diski İstanbul | Fren Diski Fiyatı Sor | Jade Automotive",
  description:
    "Volvo fren diski İstanbul. Aracınıza uygun ön veya arka fren diski için Jade Automotive'i arayın. Fren diski fiyatı ve parça talebi: 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-fren-diski-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20fren%20diski%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%2FArka%3A%20";

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

const requestItems = [
  ["Araç Yılı", "Volvo aracınızın model yılını belirtin."],
  ["Motor Bilgisi", "Motor seçeneğini biliyorsanız paylaşın."],
  ["Ön / Arka", "Ön veya arka fren diski aradığınızı belirtin."],
  ["Parça Bilgisi", "Varsa mevcut diskin kutu veya referans kodunu gönderin."],
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#f8fafb] text-[#183650]">

        {/* TOP BAR */}
        <div className="border-b border-[#e1e8ed] bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <strong className="text-sm text-[#173b5c]">
              JADE AUTOMOTIVE
            </strong>

            <a
              href={phone}
              className="flex items-center gap-2 text-sm font-black text-[#173b5c]"
            >
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative bg-[#eef5f9]">

          <div className="absolute right-[-200px] top-[-250px] h-[650px] w-[650px] rounded-full bg-white blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:pb-24 md:pt-14">

            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Fren Diski İstanbul</span>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">

              <div>
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black tracking-[.15em] text-[#397da7] shadow-sm">
                  VOLVO • FREN DİSKİ • İSTANBUL
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-tight text-[#153b5a] md:text-7xl">
                  Volvo Fren Diski
                  <span className="block text-[#5797bb]">
                    İstanbul
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Volvo aracınız için
                  <strong className="text-[#153b5a]">
                    {" "}ön veya arka fren diski
                  </strong>{" "}
                  arıyorsanız araç bilgilerinizi paylaşın. Parçadan emin
                  değilseniz bizi arayın veya fotoğrafını gönderin.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-2xl bg-[#153b5a] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:-translate-y-1"
                  >
                    <PhoneIcon />
                    FREN DİSKİ İÇİN ARA
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#07391a] transition hover:-translate-y-1"
                  >
                    <WhatsAppIcon />
                    FİYAT SOR
                  </a>

                </div>

                <a
                  href={phone}
                  className="mt-8 block text-3xl font-black text-[#153b5a] md:text-4xl"
                >
                  0543 557 15 29
                </a>
              </div>

              {/* PRODUCT REQUEST CARD */}
              <div className="rounded-[40px] bg-white p-7 shadow-[0_30px_80px_rgba(22,58,88,.12)] md:p-10">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p className="text-xs font-black tracking-[.17em] text-[#5797bb]">
                      PARÇA TALEBİ
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#153b5a]">
                      Fren diski sor
                    </h2>
                  </div>

                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[7px] border-[#dbe8ef]">
                    <div className="h-5 w-5 rounded-full bg-[#153b5a]" />
                  </div>

                </div>

                <div className="mt-8 space-y-3">

                  {requestItems.map(([title, text], index) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-2xl bg-[#f5f8fa] p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-[#5797bb] shadow-sm">
                        {index + 1}
                      </span>

                      <div>
                        <strong className="text-[#153b5a]">
                          {title}
                        </strong>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                <a
                  href={phone}
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#153b5a] p-5 text-lg font-black text-white"
                >
                  <PhoneIcon />
                  DİSK İÇİN HEMEN ARA
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* CONVERSION STRIP */}
        <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5">

          <div className="grid overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(22,58,88,.10)] md:grid-cols-3">

            <a
              href={phone}
              className="p-7 transition hover:bg-[#f5f9fc]"
            >
              <span className="text-xs font-black tracking-widest text-[#5797bb]">
                TELEFON
              </span>

              <h3 className="mt-3 text-xl font-black text-[#153b5a]">
                Fren Diskini Sor
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Araç bilgilerini söyleyerek parça talebini ilet.
              </p>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-y border-[#e4eaee] p-7 transition hover:bg-[#f2fff6] md:border-x md:border-y-0"
            >
              <span className="text-xs font-black tracking-widest text-[#17984a]">
                WHATSAPP
              </span>

              <h3 className="mt-3 text-xl font-black text-[#153b5a]">
                Fotoğraf / Kod Gönder
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Elindeki parçanın fotoğrafını veya kodunu paylaş.
              </p>
            </a>

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 transition hover:bg-[#fff8f3]"
            >
              <span className="text-xs font-black tracking-widest text-[#f27a1a]">
                ONLINE
              </span>

              <h3 className="mt-3 text-xl font-black text-[#153b5a]">
                Trendyol Mağazası
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Jade Automotive mağazasını incele.
              </p>
            </a>

          </div>
        </section>

        {/* FRONT / REAR */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[.15em] text-[#5797bb]">
              VOLVO FREN DİSKİ
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#153b5a] md:text-5xl">
              Ön mü, arka mı?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Fren diski talebinde aracın bilgileriyle birlikte ön veya arka
              fren grubu için parça aradığınızı belirtin.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <a
              href={phone}
              className="group rounded-[36px] border border-[#dce6ec] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-[#dbe8ef]">
                  <span className="h-4 w-4 rounded-full bg-[#5797bb]" />
                </span>

                <span className="text-3xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#5797bb]">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black text-[#153b5a]">
                Volvo Ön Fren Diski
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Ön fren diski talebiniz için araç yılı ve motor bilgisini
                paylaşarak parça sorabilirsiniz.
              </p>

              <span className="mt-7 flex items-center gap-2 font-black text-[#397da7]">
                <PhoneIcon className="h-5 w-5" />
                Ön disk için ara
              </span>
            </a>

            <a
              href={phone}
              className="group rounded-[36px] border border-[#dce6ec] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-[#dbe8ef]">
                  <span className="h-4 w-4 rounded-full bg-[#153b5a]" />
                </span>

                <span className="text-3xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#5797bb]">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black text-[#153b5a]">
                Volvo Arka Fren Diski
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Arka fren diski arıyorsanız araç bilgilerinizi telefon veya
                WhatsApp üzerinden iletebilirsiniz.
              </p>

              <span className="mt-7 flex items-center gap-2 font-black text-[#397da7]">
                <PhoneIcon className="h-5 w-5" />
                Arka disk için ara
              </span>
            </a>

          </div>
        </section>

        {/* BALATA CROSS SELL */}
        <section className="px-5">

          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#153b5a] p-8 text-white md:p-14">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-sm font-black tracking-[.16em] text-[#a8daf5]">
                  FREN BALATASI DA MI ARIYORSUN?
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                  Disk + balata talebini
                  <span className="block text-[#a8daf5]">
                    birlikte ilet.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#cad8e2]">
                  Ustanız fren diskiyle birlikte fren balatası da istediyse
                  iki parça grubunu aynı görüşmede söyleyebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col gap-3">

                <a
                  href={phone}
                  className="flex min-w-[280px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 font-black text-[#153b5a]"
                >
                  <PhoneIcon />
                  HEMEN ARA
                </a>

                <Link
                  href="/blog/volvo-fren-balatasi-istanbul"
                  className="text-center text-sm font-black text-[#b7def4]"
                >
                  Volvo Fren Balatası →
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">

            <div>
              <p className="text-sm font-black tracking-[.15em] text-[#5797bb]">
                VOLVO FREN DİSKİ FİYATLARI
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#153b5a] md:text-5xl">
                Fren diski fiyatını sor
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                Volvo fren diski için tek bir fiyat vermek yerine aracınıza
                uygun parçanın belirlenmesi gerekir. Araç yılı, motor bilgisi,
                ön veya arka fren grubu ve parça seçeneği fiyat üzerinde
                etkili olabilir.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Araç bilgilerinizi WhatsApp üzerinden göndererek fren diski
                için fiyat talebinizi iletebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                FREN DİSKİ FİYATI SOR
              </a>
            </div>

            <div className="rounded-[36px] border border-[#dce6ec] bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-black text-[#153b5a]">
                Fiyat talebi için
              </h3>

              <div className="mt-7 space-y-3">
                {[
                  "Araç model yılı",
                  "Motor bilgisi",
                  "Ön veya arka fren diski",
                  "Varsa parça fotoğrafı",
                  "Varsa referans / parça kodu",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-[#f5f8fa] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#153b5a] text-sm font-black text-white">
                      {i + 1}
                    </span>

                    <strong className="text-[#40596c]">
                      {item}
                    </strong>
                  </div>
                ))}
              </div>

              <a
                href={phone}
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl border-2 border-[#153b5a] p-4 font-black text-[#153b5a]"
              >
                <PhoneIcon />
                TELEFONLA SOR
              </a>

            </div>
          </div>
        </section>

        {/* CALL CTA */}
        <section className="border-y border-[#dce6ec] bg-white">

          <div className="mx-auto max-w-7xl px-5 py-20">

            <div className="grid gap-8 rounded-[40px] bg-[#eef5f9] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#5797bb]">
                  VOLVO FREN DİSKİ İSTANBUL
                </p>

                <h2 className="mt-3 text-4xl font-black text-[#153b5a] md:text-5xl">
                  Parça numarası yok mu?
                  <span className="block text-[#5797bb]">
                    Bizi ara.
                  </span>
                </h2>

                <p className="mt-4 text-slate-600">
                  Elinizdeki bilgilerle parça talebinizi iletebilirsiniz.
                </p>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] flex-col items-center rounded-[28px] bg-[#153b5a] px-9 py-7 text-white shadow-xl"
              >
                <span className="flex items-center gap-2 text-sm font-black text-[#b7def4]">
                  <PhoneIcon className="h-5 w-5" />
                  FREN DİSKİ İÇİN ARA
                </span>

                <strong className="mt-2 text-2xl">
                  0543 557 15 29
                </strong>
              </a>

            </div>
          </div>
        </section>

        {/* ONLINE STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <p className="text-sm font-black tracking-wider text-[#5797bb]">
            ONLINE MAĞAZALAR
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#153b5a]">
            Jade Automotive
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-[#f2d5bf] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-black text-[#f27a1a]">
                  ÖNE ÇIKAN MAĞAZA
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#153b5a]">
                  Trendyol
                </h3>
              </div>

              <span className="text-3xl font-black text-[#f27a1a]">
                →
              </span>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-[#f2d5bf] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-black text-[#ff6000]">
                  ONLINE MAĞAZA
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#153b5a]">
                  Hepsiburada
                </h3>
              </div>

              <span className="text-3xl font-black text-[#ff6000]">
                →
              </span>
            </a>

          </div>
        </section>

        {/* CLUSTER */}
        <section className="border-y border-[#dce6ec] bg-[#edf4f8]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black tracking-wider text-[#5797bb]">
              VOLVO YEDEK PARÇA
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/volvo-fren-balatasi-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Fren Balatası İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#5797bb]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Yedek Parçacı İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#5797bb]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-fiyatlari"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Yedek Parça Fiyatları
                </h3>
                <span className="mt-4 block text-sm font-black text-[#5797bb]">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="rounded-[42px] bg-white p-8 shadow-[0_25px_70px_rgba(22,58,88,.10)] md:p-14">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#5797bb]">
                  VOLVO FREN DİSKİ
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-black text-[#153b5a] md:text-6xl">
                  Fren diski arıyorsan
                  <span className="block text-[#5797bb]">
                    direkt ara.
                  </span>
                </h2>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] items-center justify-center gap-3 rounded-[28px] bg-[#153b5a] px-9 py-7 text-xl font-black text-white"
              >
                <PhoneIcon />
                0543 557 15 29
              </a>

            </div>
          </div>
        </section>

        <div className="h-24 md:hidden" />

      </main>

      {/* DESKTOP CALL */}
      <a
        href={phone}
        aria-label="Volvo fren diski için ara"
        title="0543 557 15 29"
        className="fixed bottom-7 right-7 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#153b5a] text-white shadow-2xl transition hover:scale-110 md:flex"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-[1.2fr_.8fr] gap-2 border-t border-[#dce6ec] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,40,65,.08)] backdrop-blur md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#153b5a] py-4 font-black text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          DİSK İÇİN ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#07391a]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          FİYAT SOR
        </a>

      </div>

    </>
  );
}
