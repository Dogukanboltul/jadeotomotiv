import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Ön Takım Parçaları İstanbul | Jade Automotive",
  description:
    "Volvo ön takım parçaları İstanbul. Salıncak, rotil, rot başı, Z rot ve yürüyen aksam parça talepleri için Jade Automotive: 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/volvo-on-takim-parcalari-istanbul",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20%C3%B6n%20tak%C4%B1m%20par%C3%A7as%C4%B1%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

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
  {
    no: "01",
    title: "Volvo Salıncak",
    text: "Volvo aracınız için salıncak parçası arıyorsanız araç bilgilerinizi iletin.",
  },
  {
    no: "02",
    title: "Volvo Rotil",
    text: "Rotil talebiniz için araç yılı, motor bilgisi ve varsa parça kodunu paylaşın.",
  },
  {
    no: "03",
    title: "Volvo Rot Başı",
    text: "Rot başı için ihtiyacınız olan parçayı telefon veya WhatsApp üzerinden sorun.",
  },
  {
    no: "04",
    title: "Volvo Z Rot",
    text: "Z rot ve ilgili bağlantı parçaları için araç bilgilerinizi gönderin.",
  },
  {
    no: "05",
    title: "Volvo Rot Mili",
    text: "Rot mili talebinizde aracınızın bilgilerini paylaşarak parça sorun.",
  },
  {
    no: "06",
    title: "Yürüyen Aksam Parçaları",
    text: "Ustanızın verdiği ön takım listesini veya parça fotoğrafını bize gönderebilirsiniz.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#f8fafb] text-[#173650]">

        {/* TOP */}
        <div className="border-b border-[#e0e8ee] bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm">
            <strong className="text-[#173b5c]">
              Jade Automotive • Volvo Ön Takım
            </strong>

            <a
              href={phone}
              className="flex items-center gap-2 font-black text-[#173b5c]"
            >
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HERO */}
        <section className="relative bg-white">

          <div className="absolute -right-52 top-[-180px] h-[650px] w-[650px] rounded-full bg-[#dff1fb] blur-3xl" />
          <div className="absolute -left-60 bottom-[-250px] h-[500px] w-[500px] rounded-full bg-[#edf7f2] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:pb-28 md:pt-14">

            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>›</span>
              <Link href="/blog/volvo-oto-yedek-parca">
                Volvo Yedek Parça
              </Link>
              <span>›</span>
              <span>Volvo Ön Takım Parçaları İstanbul</span>
            </div>

            <div className="mt-14 grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center">

              <div>
                <span className="inline-flex rounded-full bg-[#edf7fc] px-4 py-2 text-xs font-black tracking-[.16em] text-[#3c80aa]">
                  VOLVO • ÖN TAKIM • İSTANBUL
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-tight text-[#153b5a] md:text-7xl">
                  Volvo Ön Takım
                  <span className="block text-[#5598bf]">
                    Parçaları İstanbul
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                  Volvo aracınız için
                  <strong className="text-[#153b5a]">
                    {" "}salıncak, rotil, rot başı, Z rot
                  </strong>{" "}
                  veya başka bir ön takım parçası mı arıyorsunuz?
                  Parça talebinizi bize iletin.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-2xl bg-[#153b5a] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:-translate-y-1"
                  >
                    <PhoneIcon />
                    ÖN TAKIM İÇİN ARA
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#07391a] transition hover:-translate-y-1"
                  >
                    <WhatsAppIcon />
                    PARÇA LİSTESİ GÖNDER
                  </a>

                </div>

                <a
                  href={phone}
                  className="mt-8 block text-3xl font-black text-[#153b5a] md:text-4xl"
                >
                  0543 557 15 29
                </a>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Volvo ön takım parça talepleri için arayın
                </p>
              </div>

              {/* REQUEST CARD */}
              <div className="relative">

                <div className="absolute inset-6 rounded-[45px] bg-[#dceef8] blur-3xl" />

                <div className="relative rounded-[40px] border border-[#dce7ed] bg-[#f7fafc] p-7 shadow-[0_30px_80px_rgba(21,59,90,.12)] md:p-10">

                  <p className="text-xs font-black tracking-[.17em] text-[#5598bf]">
                    USTA PARÇA LİSTESİ VERDİ Mİ?
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-[#153b5a]">
                    Tek tek yazmana gerek yok.
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Listenin veya parçanın fotoğrafını WhatsApp'tan
                    gönderebilirsin.
                  </p>

                  <div className="mt-7 rounded-[28px] bg-white p-6 shadow-sm">

                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                        <WhatsAppIcon />
                      </div>

                      <div>
                        <strong className="block text-[#153b5a]">
                          Volvo ön takım
                        </strong>
                        <span className="text-sm text-slate-500">
                          Parça talebi
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2 text-sm">

                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#dcf8e6] p-4 text-[#234536]">
                        Merhaba, Volvo aracım için ustam ön takım listesi verdi.
                      </div>

                      <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-[#dcf8e6] p-4 text-[#234536]">
                        Fotoğrafını gönderiyorum.
                      </div>

                    </div>

                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-5 font-black text-[#07391a]"
                    >
                      <WhatsAppIcon />
                      LİSTEYİ GÖNDER
                    </a>

                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-slate-400">
                      veya
                    </span>

                    <a
                      href={phone}
                      className="mt-2 flex items-center justify-center gap-2 font-black text-[#153b5a]"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      0543 557 15 29
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* THREE STEP */}
        <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-5">

          <div className="grid overflow-hidden rounded-[30px] border border-[#dce7ed] bg-white shadow-xl shadow-slate-200/40 md:grid-cols-3">

            {[
              ["01", "Araç Bilgini Söyle", "Volvo aracının yılı ve motor bilgisini paylaş."],
              ["02", "Parçayı Söyle", "Salıncak, rotil, rot başı veya aradığın parçayı belirt."],
              ["03", "Listeyi Gönder", "Emin değilsen ustanın listesinin fotoğrafını gönder."],
            ].map(([no, title, text]) => (
              <div
                key={no}
                className="border-b border-[#e5ebef] p-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="text-sm font-black text-[#5598bf]">
                  {no}
                </span>

                <h3 className="mt-3 text-xl font-black text-[#153b5a]">
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

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-3xl">
              <p className="text-sm font-black tracking-[.16em] text-[#5598bf]">
                VOLVO ÖN TAKIM PARÇALARI
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b5a] md:text-5xl">
                Ustan hangi parçayı istedi?
              </h2>
            </div>

            <a
              href={phone}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#153b5a] px-6 py-4 font-black text-white"
            >
              <PhoneIcon />
              PARÇAYI TELEFONDA SOR
            </a>

          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {parts.map((item) => (
              <a
                key={item.title}
                href={phone}
                className="group rounded-[30px] border border-[#dce6ec] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#a9cfe5] hover:shadow-xl"
              >
                <div className="flex items-center justify-between">

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6fb] font-black text-[#5598bf]">
                    {item.no}
                  </span>

                  <span className="text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#5598bf]">
                    →
                  </span>

                </div>

                <h3 className="mt-7 text-2xl font-black text-[#153b5a]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {item.text}
                </p>

                <span className="mt-6 flex items-center gap-2 text-sm font-black text-[#397da7]">
                  <PhoneIcon className="h-4 w-4" />
                  Parçayı sor
                </span>
              </a>
            ))}

          </div>
        </section>

        {/* CALL BANNER */}
        <section className="px-5">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#153b5a]">

            <div className="relative grid gap-9 p-8 text-white md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">

              <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#63a8ce]/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-black tracking-[.16em] text-[#a9daf5]">
                  VOLVO ÖN TAKIM PARÇASI MI ARIYORSUN?
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                  Parça adını biliyorsan
                  <span className="block text-[#a9daf5]">
                    direkt ara.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#cad9e3]">
                  Salıncak, rotil, rot başı, Z rot veya ustanın istediği
                  diğer ön takım parçaları için ulaşın.
                </p>
              </div>

              <a
                href={phone}
                className="relative flex min-w-[290px] flex-col items-center rounded-[30px] bg-white px-9 py-7 text-[#153b5a] shadow-xl transition hover:-translate-y-1"
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

        {/* PRICE */}
        <section className="mx-auto max-w-7xl px-5 py-24">

          <div className="grid gap-7 lg:grid-cols-2">

            <div className="rounded-[36px] border border-[#dce7ed] bg-white p-8 md:p-10">

              <p className="text-sm font-black tracking-[.15em] text-[#5598bf]">
                VOLVO ÖN TAKIM FİYATLARI
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#153b5a]">
                Parça fiyatını sor
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ön takım parça fiyatı, ihtiyaç duyulan parçaya ve araç
                bilgilerine göre değişebilir. Bu nedenle sabit bir fiyat
                yerine aracınız için aradığınız parçayı belirtmeniz gerekir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Ustanız birden fazla parça yazdıysa listeyi tek mesajda
                WhatsApp üzerinden gönderebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-5 font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                ÖN TAKIM FİYATI SOR
              </a>

            </div>

            <div className="rounded-[36px] bg-[#edf5f9] p-8 md:p-10">

              <p className="text-sm font-black tracking-[.15em] text-[#5598bf]">
                PARÇA TALEBİ
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#153b5a]">
                Bize bunları gönder
              </h2>

              <div className="mt-7 space-y-3">

                {[
                  "Volvo aracın model yılı",
                  "Motor bilgisi",
                  "Ustanın istediği parça veya parçalar",
                  "Varsa parça / kutu fotoğrafı",
                  "Varsa referans kodu",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#153b5a] text-sm font-black text-white">
                      {index + 1}
                    </span>

                    <strong className="text-[#40596c]">
                      {item}
                    </strong>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* SEO */}
        <section className="border-y border-[#dce7ed] bg-white">

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_.8fr]">

            <div>
              <p className="text-sm font-black tracking-[.16em] text-[#5598bf]">
                VOLVO ÖN TAKIM PARÇALARI İSTANBUL
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#153b5a]">
                Volvo yürüyen aksam parça talebi
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Volvo aracınız için ön takım parçası ararken araç yılı,
                motor bilgisi ve ihtiyaç duyulan parçanın doğru şekilde
                belirtilmesi önemlidir.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Salıncak, rotil, rot başı, Z rot ve ilgili yürüyen aksam
                parçaları için elinizdeki araç ve parça bilgilerini
                Jade Automotive'e iletebilirsiniz.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Parçanın adından emin değilseniz ustanızın verdiği listeyi
                veya mevcut parçaya ait fotoğraf ve referans bilgisini
                WhatsApp üzerinden paylaşabilirsiniz.
              </p>
            </div>

            <div className="rounded-[34px] bg-[#f5f8fa] p-8">

              <p className="text-sm font-black text-[#5598bf]">
                JADE AUTOMOTIVE
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#153b5a]">
                Ön takım parça hattı
              </h3>

              <a
                href={phone}
                className="mt-7 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#153b5a] text-white">
                  <PhoneIcon />
                </span>

                <div>
                  <small className="font-bold text-slate-400">
                    TELEFON
                  </small>

                  <strong className="block text-xl text-[#153b5a]">
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
                  <small className="font-bold text-slate-400">
                    WHATSAPP
                  </small>

                  <strong className="block text-lg text-[#153b5a]">
                    Ustanın Listesini Gönder
                  </strong>
                </div>
              </a>

            </div>

          </div>
        </section>

        {/* STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <p className="text-sm font-black tracking-wider text-[#5598bf]">
            ONLINE MAĞAZALAR
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#153b5a]">
            Jade Automotive mağazaları
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
              className="flex items-center justify-between rounded-[28px] border border-[#f3d7c2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

        {/* INTERNAL */}
        <section className="border-y border-[#dce7ed] bg-[#edf4f8]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black tracking-wider text-[#5598bf]">
              VOLVO PARÇA REHBERİ
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-4">

              <Link
                href="/blog/volvo-yedek-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Yedek Parçacı İstanbul
                </h3>

                <span className="mt-4 block text-sm font-black text-[#5598bf]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-oto-parcaci-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Oto Parçacı İstanbul
                </h3>

                <span className="mt-4 block text-sm font-black text-[#5598bf]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-fren-balatasi-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Fren Balatası İstanbul
                </h3>

                <span className="mt-4 block text-sm font-black text-[#5598bf]">
                  İncele →
                </span>
              </Link>

              <Link
                href="/blog/volvo-fren-diski-istanbul"
                className="rounded-[26px] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-black text-[#153b5a]">
                  Volvo Fren Diski İstanbul
                </h3>

                <span className="mt-4 block text-sm font-black text-[#5598bf]">
                  İncele →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="relative overflow-hidden rounded-[42px] bg-white p-8 shadow-[0_25px_80px_rgba(21,59,90,.10)] md:p-14">

            <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-[#dceffa] blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black text-[#5598bf]">
                  VOLVO ÖN TAKIM PARÇALARI
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#153b5a] md:text-6xl">
                  Usta parçayı yazdıysa
                  <span className="block text-[#5598bf]">
                    bizi ara.
                  </span>
                </h2>

                <p className="mt-5 text-lg text-slate-600">
                  Parça adını bilmiyorsan listeyi WhatsApp'tan gönder.
                </p>
              </div>

              <a
                href={phone}
                className="flex min-w-[290px] flex-col items-center rounded-[30px] bg-[#153b5a] px-9 py-7 text-white shadow-xl transition hover:-translate-y-1"
              >
                <span className="flex items-center gap-2 text-sm font-black text-[#b7def4]">
                  <PhoneIcon className="h-5 w-5" />
                  ÖN TAKIM İÇİN ARA
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

      {/* DESKTOP PHONE */}
      <a
        href={phone}
        aria-label="Volvo ön takım parçaları için ara"
        title="0543 557 15 29"
        className="fixed bottom-7 right-7 z-[100] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#153b5a] text-white shadow-2xl transition hover:scale-110 md:flex"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-[1.15fr_.85fr] gap-2 border-t border-[#dce7ed] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,40,65,.08)] backdrop-blur md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#153b5a] py-4 font-black text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          ÖN TAKIM İÇİN ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-black text-[#07391a]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          LİSTE GÖNDER
        </a>

      </div>

    </>
  );
}
