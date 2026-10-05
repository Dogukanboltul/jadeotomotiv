import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Fren Balatası İstanbul | Balata Fiyatı Sor | Jade Automotive",
  description:
    "Volvo fren balatası İstanbul. Aracınıza uygun fren balatası için Jade Automotive'i arayın veya araç bilgilerinizi WhatsApp'tan gönderin. 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-fren-balatasi-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20fren%20balatas%C4%B1%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%2FArka%3A%20";

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

const questions = [
  {
    title: "Volvo fren balatası fiyatı ne kadar?",
    text: "Fiyat; aracın yılı, motor bilgisi, ön veya arka balata ihtiyacı ve seçilecek ürüne göre değişebilir. Araç bilgilerinizi göndererek fiyat sorabilirsiniz.",
  },
  {
    title: "Ön ve arka fren balatası aynı mı?",
    text: "Ön ve arka fren sisteminde kullanılan parçalar aynı olmayabilir. Talep sırasında ön veya arka balata aradığınızı belirtmeniz faydalıdır.",
  },
  {
    title: "Hangi balatanın uygun olduğunu bilmiyorum",
    text: "Araç yılı ve motor bilgisini paylaşabilirsiniz. Elinizde mevcut parçanın kutusu, etiketi veya kodu varsa fotoğrafını WhatsApp'tan gönderebilirsiniz.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#f7f9fb] text-[#17334d]">

        {/* TOP */}
        <div className="bg-[#173b5c] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 text-sm">
            <strong>Jade Automotive • Volvo Fren Parçaları</strong>

            <a href={phone} className="flex items-center gap-2 font-black">
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white">

          <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-[#e0f1fc] blur-3xl" />
          <div className="absolute -bottom-60 left-1/4 h-[500px] w-[500px] rounded-full bg-[#eaf8ef] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-20">

            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Fren Balatası İstanbul</span>
            </div>

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center">

              <div>
                <span className="inline-flex rounded-full border border-[#d4e7f3] bg-[#eff8fd] px-4 py-2 text-xs font-black tracking-[.16em] text-[#3d80ad]">
                  VOLVO • FREN BALATASI • İSTANBUL
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-tight text-[#173b5c] md:text-7xl">
                  Volvo Fren
                  <span className="block text-[#4b91bc]">
                    Balatası İstanbul
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Volvo aracınız için fren balatası mı arıyorsunuz?
                  Araç bilgilerinizi paylaşın veya
                  <strong className="text-[#173b5c]">
                    {" "}direkt bizi arayın.
                  </strong>
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-2xl bg-[#173b5c] px-8 py-5 text-lg font-black text-white shadow-xl shadow-[#173b5c]/15 transition hover:-translate-y-1"
                  >
                    <PhoneIcon />
                    BALATA İÇİN ARA
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
                  className="mt-8 block text-3xl font-black text-[#173b5c] md:text-4xl"
                >
                  0543 557 15 29
                </a>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Volvo fren balatası için telefonla bilgi alın
                </p>
              </div>

              {/* BALATA CARD */}
              <div className="rounded-[40px] border border-[#dce7ee] bg-[#f5f9fc] p-7 shadow-[0_30px_80px_rgba(23,59,92,.11)] md:p-10">

                <p className="text-sm font-black tracking-[.16em] text-[#4b91bc]">
                  VOLVO BALATA TALEBİ
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#173b5c]">
                  Fiyat sormadan önce
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Aşağıdaki bilgileri telefonda söyleyin veya WhatsApp
                  mesajına ekleyin.
                </p>

                <div className="mt-7 space-y-3">

                  {[
                    ["01", "Araç", "Volvo"],
                    ["02", "Yıl", "Araç model yılı"],
                    ["03", "Motor", "Motor bilgisi"],
                    ["04", "Konum", "Ön veya arka balata"],
                  ].map(([no, title, text]) => (
                    <div
                      key={no}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf6fc] font-black text-[#4b91bc]">
                        {no}
                      </span>

                      <div>
                        <strong className="text-[#173b5c]">
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
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#173b5c] p-5 text-lg font-black text-white"
                >
                  <PhoneIcon />
                  0543 557 15 29
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* QUICK CTA */}
        <section className="relative z-10 mx-auto -mt-4 max-w-7xl px-5">

          <div className="grid overflow-hidden rounded-[30px] border border-[#dce7ee] bg-white shadow-xl shadow-slate-200/50 md:grid-cols-3">

            <a
              href={phone}
              className="group p-7 transition hover:bg-[#f4f8fb]"
            >
              <span className="text-sm font-black text-[#4b91bc]">
                01
              </span>
              <h3 className="mt-3 text-xl font-black text-[#173b5c]">
                Telefonla Balata Sor
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Araç bilgilerini söyle, balata talebini ilet.
              </p>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-y border-[#e3eaf0] p-7 transition hover:bg-[#f4fff7] md:border-x md:border-y-0"
            >
              <span className="text-sm font-black text-[#159447]">
                02
              </span>
              <h3 className="mt-3 text-xl font-black text-[#173b5c]">
                WhatsApp'tan Fiyat Sor
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Yıl, motor ve ön/arka bilgisini gönder.
              </p>
            </a>

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 transition hover:bg-[#fff8f2]"
            >
              <span className="text-sm font-black text-[#f27a1a]">
                03
              </span>
              <h3 className="mt-3 text-xl font-black text-[#173b5c]">
                Trendyol Mağazası
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Jade Automotive online mağazasını incele.
              </p>
            </a>

          </div>
        </section>

        {/* BUYER INTENT */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">

            <div className="lg:sticky lg:top-8">

              <p className="text-sm font-black tracking-[.16em] text-[#4b91bc]">
                VOLVO FREN BALATASI
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#173b5c] md:text-5xl">
                Hangi balatanın
                <span className="block text-[#7b9caf]">
                  uygun olduğunu bilmiyor musun?
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Rastgele ürün seçmek yerine araç bilgilerini bize ilet.
                Elinde mevcut parçanın kutusu, etiketi veya kodu varsa
                fotoğrafını da gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                BALATA FOTOĞRAFI GÖNDER
              </a>

            </div>

            <div className="grid gap-4">

              <div className="rounded-[32px] border border-[#dce7ee] bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6fc] font-black text-[#4b91bc]">
                  01
                </span>

                <h3 className="mt-6 text-2xl font-black text-[#173b5c]">
                  Volvo ön fren balatası
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Ön fren balatası arıyorsanız araç yılı ve motor bilgisini
                  paylaşarak parça ve fiyat talebinizi iletebilirsiniz.
                </p>

                <a
                  href={phone}
                  className="mt-6 flex items-center gap-2 font-black text-[#347ca8]"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Ön balata için ara →
                </a>
              </div>

              <div className="rounded-[32px] border border-[#dce7ee] bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6fc] font-black text-[#4b91bc]">
                  02
                </span>

                <h3 className="mt-6 text-2xl font-black text-[#173b5c]">
                  Volvo arka fren balatası
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Arka fren balatası ihtiyacınız için araç bilgilerinizi
                  telefon veya WhatsApp üzerinden iletebilirsiniz.
                </p>

                <a
                  href={phone}
                  className="mt-6 flex items-center gap-2 font-black text-[#347ca8]"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Arka balata için ara →
                </a>
              </div>

              <div className="rounded-[32px] border border-[#dce7ee] bg-[#173b5c] p-8 text-white">

                <p className="text-sm font-black tracking-widest text-[#a8dbf7]">
                  FREN DİSKİ DE Mİ LAZIM?
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Balata + disk talebini birlikte ilet.
                </h3>

                <p className="mt-4 leading-7 text-[#cad9e4]">
                  Ustanız fren diski de istediyse telefonda hem balata hem
                  disk talebinizi söyleyebilirsiniz.
                </p>

                <a
                  href={phone}
                  className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-[#173b5c]"
                >
                  <PhoneIcon />
                  HEMEN ARA
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* BIG CALL */}
        <section className="px-5">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#eaf4fa]">

            <div className="grid gap-8 p-8 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-sm font-black tracking-[.16em] text-[#4b91bc]">
                  VOLVO FREN BALATASI İSTANBUL
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black text-[#173b5c] md:text-6xl">
                  Balata lazım mı?
                  <span className="block text-[#4b91bc]">
                    Direkt arayın.
                  </span>
                </h2>

                <p className="mt-5 text-lg text-slate-600">
                  Araç yılı ve motor bilgisini hazır bulundurun.
                </p>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] flex-col items-center rounded-[30px] bg-[#173b5c] px-9 py-7 text-white shadow-xl transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 text-sm font-black text-[#b8ddf3]">
                  <PhoneIcon className="h-5 w-5" />
                  BALATA İÇİN ARA
                </span>

                <strong className="mt-2 text-2xl">
                  0543 557 15 29
                </strong>
              </a>

            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[36px] border border-[#dce7ee] bg-white p-8 md:p-10">

              <p className="text-sm font-black tracking-[.15em] text-[#4b91bc]">
                VOLVO FREN BALATASI FİYATLARI
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#173b5c]">
                Balata fiyatını nasıl öğrenirim?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Volvo fren balatası için tek bir genel fiyat vermek doğru
                olmaz. Araç yılı, motor bilgisi, ön veya arka fren grubu ve
                seçilecek ürün fiyatı etkileyebilir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Aracınızın bilgilerini göndererek ihtiyacınız olan fren
                balatası için fiyat talebi oluşturabilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                BALATA FİYATI SOR
              </a>

            </div>

            <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(23,59,92,.08)] md:p-10">

              <h2 className="text-3xl font-black text-[#173b5c]">
                Fiyat için gönder
              </h2>

              <div className="mt-7 space-y-3">
                {[
                  "Volvo aracın model yılı",
                  "Motor bilgisi",
                  "Ön veya arka fren balatası",
                  "Varsa mevcut parçanın fotoğrafı",
                  "Varsa parça / referans kodu",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-[#f4f8fb] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#173b5c] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <strong className="text-[#3a5367]">
                      {item}
                    </strong>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-[#dce7ee] bg-white">

          <div className="mx-auto max-w-7xl px-5 py-20">

            <p className="text-sm font-black tracking-[.15em] text-[#4b91bc]">
              SIK SORULANLAR
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#173b5c]">
              Volvo fren balatası
            </h2>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">

              {questions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#dce7ee] p-7"
                >
                  <h3 className="text-xl font-black text-[#173b5c]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black tracking-wider text-[#4b91bc]">
                ONLINE MAĞAZALAR
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#173b5c]">
                Jade Automotive
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Online ürün incelerken aracınıza uygun parçadan emin değilseniz
              önce bizi arayın.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[28px] border border-[#f3d7c1] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-black tracking-wider text-[#f27a1a]">
                  JADE AUTOMOTIVE
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#173b5c]">
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
              className="group flex items-center justify-between rounded-[28px] border border-[#f5d9c8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-black tracking-wider text-[#ff6000]">
                  JADE AUTOMOTIVE
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#173b5c]">
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
        <section className="border-y border-[#dce7ee] bg-[#edf5fa]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black tracking-wider text-[#4b91bc]">
              VOLVO PARÇA REHBERİ
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <Link
                href="/blog/volvo-yedek-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#173b5c]">
                  Volvo Yedek Parçacı İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4b91bc]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-oto-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#173b5c]">
                  Volvo Oto Parçacı İstanbul
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4b91bc]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-yedek-parca-fiyatlari"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#173b5c]">
                  Volvo Yedek Parça Fiyatları
                </h3>
                <span className="mt-4 block text-sm font-black text-[#4b91bc]">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="relative overflow-hidden rounded-[42px] bg-white p-8 shadow-[0_25px_80px_rgba(23,59,92,.10)] md:p-14">

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#dceffc] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#4b91bc]">
                  VOLVO FREN BALATASI İSTANBUL
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#173b5c] md:text-6xl">
                  Balata arıyorsan
                  <span className="block text-[#4b91bc]">
                    bizi ara.
                  </span>
                </h2>

                <p className="mt-5 text-lg text-slate-600">
                  Araç bilgilerini söyle, fren balatası talebini ilet.
                </p>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] flex-col items-center rounded-[30px] bg-[#173b5c] px-9 py-7 text-white shadow-xl transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 text-sm font-black text-[#b8ddf3]">
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

        <div className="h-24 md:hidden" />

      </main>

      {/* DESKTOP CALL */}
      <a
        href={phone}
        aria-label="Volvo fren balatası için ara"
        title="0543 557 15 29"
        className="fixed bottom-7 right-7 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#173b5c] text-white shadow-2xl transition hover:scale-110 md:flex"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>

      {/* MOBILE CONVERSION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-[1.2fr_.8fr] gap-2 border-t border-[#dce7ee] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,40,65,.08)] backdrop-blur md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#173b5c] py-4 font-black text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          BALATA İÇİN ARA
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
