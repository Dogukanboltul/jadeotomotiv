import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo Oto Yedek Parça | Volvo Parça | Jade Automotive",
  description:
    "Volvo oto yedek parça arıyorsanız araç yıl, motor ve parça bilgisini WhatsApp'tan gönderin. Volvo fren, bakım, ön takım, süspansiyon ve motor parçaları.",
  alternates: {
    canonical: "https://www.frenbalataci.com.tr/blog/volvo-oto-yedek-parca",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20Volvo%20arac%C4%B1m%20i%C3%A7in%20oto%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

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
    no: "01",
    title: "Volvo Fren Parçaları",
    text: "Fren balatası, fren diski ve aracın fren sistemi için aradığınız parçayı sorun.",
  },
  {
    no: "02",
    title: "Volvo Bakım Parçaları",
    text: "Filtre ve periyodik bakım sırasında ihtiyaç duyulan parçalar için bize yazın.",
  },
  {
    no: "03",
    title: "Volvo Ön Takım Parçaları",
    text: "Rot, rotil, salıncak, Z rot ve yürüyen aksam parça taleplerinizi gönderin.",
  },
  {
    no: "04",
    title: "Volvo Süspansiyon Parçaları",
    text: "Amortisör ve süspansiyon grubunda aradığınız parçayı araç bilgilerinizle sorun.",
  },
  {
    no: "05",
    title: "Volvo Motor Parçaları",
    text: "Motor seçeneğine göre ihtiyacınız olan mekanik parçanın bilgisini gönderin.",
  },
  {
    no: "06",
    title: "Volvo Soğutma Parçaları",
    text: "Termostat, devirdaim ve soğutma sistemi parça taleplerinizi iletin.",
  },
  {
    no: "07",
    title: "Volvo Debriyaj Parçaları",
    text: "Debriyaj sistemiyle ilgili aradığınız parçayı araç bilgileriyle birlikte sorun.",
  },
  {
    no: "08",
    title: "Volvo Elektrik Parçaları",
    text: "Sensör ve elektrik grubundaki parça talepleriniz için fotoğraf veya kod gönderebilirsiniz.",
  },
];

export default function Page() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#050d16] text-white">

        {/* HERO */}
        <section className="relative min-h-[760px] overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.15),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,211,102,0.10),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:pt-16">

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/otomotiv-yedek-parca">
                Oto Yedek Parça
              </Link>
              <span>/</span>
              <span>Volvo Oto Yedek Parça</span>
            </div>

            <div className="mt-20 grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-black tracking-[0.16em] text-cyan-300">
                  JADE AUTOMOTIVE • VOLVO
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl lg:text-[86px]">
                  Volvo
                  <span className="block text-cyan-300">
                    Oto Yedek
                  </span>
                  <span className="block">Parça</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                  Volvo aracın için parça mı arıyorsun? Uzun uzun aramana
                  gerek yok.
                  <strong className="text-white">
                    {" "}Araç yılını, motor bilgisini ve ihtiyacın olan parçayı
                  </strong>{" "}
                  WhatsApp'tan gönder.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#03120a] shadow-2xl shadow-[#25D366]/10 transition hover:-translate-y-1"
                  >
                    <WhatsAppIcon />
                    VOLVO PARÇA SOR
                  </a>

                  <a
                    href={phone}
                    className="rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-lg font-black backdrop-blur"
                  >
                    0543 557 15 29
                  </a>

                </div>
              </div>

              {/* MESSAGE CARD */}
              <div className="relative">

                <div className="absolute inset-0 rounded-[45px] bg-cyan-400/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0a1724]/95 shadow-2xl">

                  <div className="flex items-center gap-4 border-b border-white/10 p-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="font-black">
                        Jade Automotive
                      </p>
                      <p className="text-xs text-[#65e995]">
                        Volvo parça talebi
                      </p>
                    </div>

                  </div>

                  <div className="space-y-4 p-6 md:p-8">

                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 p-4 text-sm leading-6 text-slate-300">
                      Merhaba 👋 Volvo aracınız için hangi parçayı arıyorsunuz?
                    </div>

                    <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#075e54] p-4 text-sm leading-6">
                      Volvo aracım için parça arıyorum.
                      <br /><br />
                      Yıl: ______
                      <br />
                      Motor: ______
                      <br />
                      Parça: ______
                    </div>

                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 p-4 text-sm leading-6 text-slate-300">
                      Parçanın fotoğrafı veya üzerindeki kod varsa onu da
                      gönderebilirsiniz 👍
                    </div>

                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-5 font-black text-[#03120a]"
                    >
                      <WhatsAppIcon />
                      MESAJI AÇ
                    </a>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAST STRIP */}
        <section className="border-b border-white/10 bg-[#081522]">
          <div className="mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-3">

            {[
              ["01", "Araç bilgini gönder"],
              ["02", "Aradığın parçayı yaz"],
              ["03", "Varsa fotoğrafını ekle"],
            ].map(([no, text]) => (
              <div
                key={no}
                className="flex items-center gap-5 border-white/10 py-7 md:border-r md:px-7 last:border-r-0"
              >
                <span className="text-2xl font-black text-cyan-300">
                  {no}
                </span>
                <strong>{text}</strong>
              </div>
            ))}

          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">

          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">

            <div className="lg:sticky lg:top-10 lg:self-start">

              <p className="text-sm font-black tracking-[0.18em] text-cyan-300">
                VOLVO PARÇA GRUPLARI
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Ne aradığını
                <span className="block text-slate-500">
                  söylemen yeterli.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-400">
                Parçanın tam adını bilmiyorsan sorun değil. Ustanın verdiği
                listeyi veya elindeki parçanın fotoğrafını gönderebilirsin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-4 font-black text-[#65e995]"
              >
                <WhatsAppIcon />
                PARÇA FOTOĞRAFI GÖNDER
              </a>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {categories.map((item) => (
                <a
                  key={item.title}
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[30px] border border-white/10 bg-[#091725] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                >

                  <div className="flex items-start justify-between">
                    <span className="text-sm font-black text-cyan-300">
                      {item.no}
                    </span>

                    <span className="text-2xl text-slate-600 transition group-hover:text-[#65e995]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.text}
                  </p>

                  <span className="mt-6 flex items-center gap-2 text-sm font-black text-[#65e995]">
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp'tan sor
                  </span>

                </a>
              ))}

            </div>
          </div>
        </section>

        {/* BIG CONVERSION */}
        <section className="px-5 pb-20">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#25D366] text-[#03120a]">

            <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="font-black">
                  PARÇANIN ADINI BİLMİYOR MUSUN?
                </p>

                <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                  Fotoğrafını bile gönderebilirsin.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8">
                  Sökülen parçanın, kutunun, etiketin veya ustanın verdiği
                  listenin fotoğrafını çekip WhatsApp üzerinden gönder.
                </p>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#06111d] px-9 py-6 text-lg font-black text-white"
              >
                <WhatsAppIcon />
                FOTOĞRAF GÖNDER
              </a>

            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">

            <div>
              <p className="font-black text-cyan-300">
                VOLVO YEDEK PARÇA
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Doğru parçayı nasıl sorabilirsin?
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Aynı marka araçlarda üretim yılı, motor ve araç
                konfigürasyonuna göre kullanılan parça değişebilir. Bu nedenle
                yalnızca “Volvo parça lazım” demek yerine araç bilgilerini de
                mesaja eklemek daha sağlıklı olur.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Elinizde eski parça bulunuyorsa üzerindeki referans bilgisi
                veya parçanın fotoğrafı da talebin netleştirilmesine yardımcı
                olabilir.
              </p>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[#050d16] p-7 md:p-9">

              <p className="text-sm font-black tracking-widest text-[#65e995]">
                MESAJ ÖRNEĞİ
              </p>

              <div className="mt-6 space-y-3">

                {[
                  ["🚘", "Araç", "Volvo"],
                  ["📅", "Yıl", "Model yılını yaz"],
                  ["⚙️", "Motor", "Motor bilgisini yaz"],
                  ["🔧", "Parça", "Aradığın parçayı yaz"],
                  ["📸", "Fotoğraf", "Varsa fotoğrafını ekle"],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#091725] p-4"
                  >
                    <span className="text-2xl">{icon}</span>

                    <div>
                      <strong>{title}</strong>
                      <p className="text-sm text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-5 font-black text-[#03120a]"
              >
                <WhatsAppIcon />
                VOLVO PARÇA TALEBİ OLUŞTUR
              </a>

            </div>
          </div>
        </section>

        {/* STORES */}
        <section className="mx-auto max-w-7xl px-5 py-20">

          <div className="text-center">
            <p className="font-black tracking-wider text-cyan-300">
              JADE AUTOMOTIVE
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Volvo parçanı sor
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Önce araç bilgilerini WhatsApp'tan gönderebilir veya
              Jade Automotive online mağazalarını inceleyebilirsin.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] bg-[#25D366] p-8 text-[#03120a] transition hover:-translate-y-1"
            >
              <WhatsAppIcon className="h-10 w-10" />

              <h3 className="mt-8 text-2xl font-black">
                WhatsApp
              </h3>

              <p className="mt-2 font-semibold">
                Aradığın Volvo parçasını direkt sor.
              </p>

              <span className="mt-7 block font-black">
                0543 557 15 29 →
              </span>
            </a>

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] bg-[#f27a1a] p-8 text-white transition hover:-translate-y-1"
            >
              <div className="text-sm font-black tracking-widest">
                ONLINE MAĞAZA
              </div>

              <h3 className="mt-8 text-2xl font-black">
                Trendyol
              </h3>

              <p className="mt-2">
                Jade Automotive mağazasını incele.
              </p>

              <span className="mt-7 block font-black">
                MAĞAZAYA GİT →
              </span>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] bg-[#ff6000] p-8 text-white transition hover:-translate-y-1"
            >
              <div className="text-sm font-black tracking-widest">
                ONLINE MAĞAZA
              </div>

              <h3 className="mt-8 text-2xl font-black">
                Hepsiburada
              </h3>

              <p className="mt-2">
                Jade Automotive mağazasını incele.
              </p>

              <span className="mt-7 block font-black">
                MAĞAZAYA GİT →
              </span>
            </a>

          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-y border-white/10 bg-[#081522]">

          <div className="mx-auto max-w-7xl px-5 py-16">

            <p className="text-sm font-black tracking-wider text-cyan-300">
              VOLVO PARÇA REHBERİ
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">

              <Link
                href="/blog/volvo-yedek-parca-istanbul"
                className="rounded-[28px] border border-white/10 bg-[#050d16] p-7 transition hover:border-cyan-300/30"
              >
                <p className="text-sm text-slate-500">
                  İSTANBUL
                </p>

                <h3 className="mt-2 text-2xl font-black text-cyan-300">
                  Volvo Yedek Parça İstanbul →
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  İstanbul Volvo yedek parça ana sayfasını inceleyin.
                </p>
              </Link>

              <Link
                href="/otomotiv-yedek-parca"
                className="rounded-[28px] border border-white/10 bg-[#050d16] p-7 transition hover:border-cyan-300/30"
              >
                <p className="text-sm text-slate-500">
                  JADE AUTOMOTIVE
                </p>

                <h3 className="mt-2 text-2xl font-black text-cyan-300">
                  Otomotiv Yedek Parça →
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Diğer otomotiv yedek parça gruplarını inceleyin.
                </p>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 pb-32">

          <div className="relative overflow-hidden rounded-[44px] border border-cyan-300/20 bg-[#0b1c2c] p-8 md:p-14">

            <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-[-150px] left-[-100px] h-80 w-80 rounded-full bg-[#25D366]/10 blur-3xl" />

            <div className="relative">

              <p className="font-black text-[#65e995]">
                VOLVO OTO YEDEK PARÇA
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Parçayı bulamadın mı?
                <span className="block text-cyan-300">
                  Bize yaz.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Araç yılını, motor bilgisini ve aradığın parçayı gönder.
                Parçanın fotoğrafı varsa mesajına ekle.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-[#03120a]"
                >
                  <WhatsAppIcon />
                  WHATSAPP'TAN PARÇA SOR
                </a>

                <a
                  href={phone}
                  className="rounded-2xl bg-white px-8 py-5 text-lg font-black text-[#06111d]"
                >
                  ☎ 0543 557 15 29
                </a>

              </div>
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
        aria-label="Volvo oto yedek parça için WhatsApp'tan yaz"
        title="Volvo parça sor"
        className="fixed bottom-24 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 md:bottom-7 md:right-7 md:h-[70px] md:w-[70px]"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* MOBIL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#050d16]/95 p-3 backdrop-blur md:hidden">

        <a
          href={phone}
          className="rounded-2xl bg-white py-4 text-center font-black text-[#06111d]"
        >
          ☎ ARA
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
