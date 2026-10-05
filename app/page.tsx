import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oto Yedek Parça | Jade Automotive",
  description:
    "Aracınız için oto yedek parça arıyorsanız Jade Automotive'e ulaşın. Araç bilgilerinizi veya parça fotoğrafını gönderin. Telefon: 0543 557 15 29.",
  alternates: {
    canonical: "https://www.frenbalataci.com.tr/",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%20Jade%20Automotive%2C%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%0A%0AMarka%3A%20%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0APar%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const jade =
  "https://www.jadeautomotive.net";

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
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

const brands = [
  {
    name: "KIA",
    image: "/jade-home/kia.webp",
    href: "/arac-yedek-parca",
  },
  {
    name: "FIAT",
    image: "/jade-home/fiat.webp",
    href: "/arac-yedek-parca",
  },
  {
    name: "HONDA",
    image: "/jade-home/honda.webp",
    href: "/arac-yedek-parca",
  },
  {
    name: "HYUNDAI",
    image: "/jade-home/hyundai.webp",
    href: "/arac-yedek-parca",
  },
  {
    name: "RENAULT",
    image: "/jade-home/renault.webp",
    href: "/renault-clio-yedek-parca",
  },
  {
    name: "NISSAN",
    image: "/jade-home/nissan.webp",
    href: "/arac-yedek-parca",
  },
  {
    name: "TOYOTA",
    image: "/jade-home/toyota.webp",
    href: "/arac-yedek-parca",
  },
];

const categories = [
  {
    no: "01",
    title: "Fren Sistemi",
    text: "Fren balatası, fren diski ve fren sistemi parçaları.",
    image: "/jade-home/debriyaj-seti.jpg",
    href: "/blog/volvo-fren-balatasi-istanbul",
  },
  {
    no: "02",
    title: "Bakım & Filtre",
    text: "Periyodik bakım ve filtre grubu parçaları.",
    image: "/jade-home/bakim.webp",
    href: "/blog/volvo-bakim-parcalari-istanbul",
  },
  {
    no: "03",
    title: "Ön Takım",
    text: "Salıncak, rotil, rot başı ve yürüyen aksam.",
    image: "/jade-home/elektronik-modul.jpg",
    href: "/blog/volvo-on-takim-parcalari-istanbul",
  },
  {
    no: "04",
    title: "Süspansiyon",
    text: "Amortisör, takoz, yay ve süspansiyon parçaları.",
    image: "/jade-home/cam-dugmesi.jpg",
    href: "/blog/volvo-suspansiyon-parcalari-istanbul",
  },
  {
    no: "05",
    title: "Motor Parçaları",
    text: "Araç ve motor bilgisine uygun yedek parçalar.",
    image: "/jade-home/parca1.jpg",
    href: "/otomotiv-yedek-parca",
  },
  {
    no: "06",
    title: "Elektrik & Aydınlatma",
    text: "Elektrik, elektronik, far ve aydınlatma parçaları.",
    image: "/jade-home/far.jpg",
    href: "/arac-yedek-parca",
  },
];

const products = [
  {
    title: "Cam Düğmesi",
    image: "/jade-home/cam-dugmesi.jpg",
    label: "Elektrik & Elektronik",
  },
  {
    title: "Elektronik Modül",
    image: "/jade-home/elektronik-modul.jpg",
    label: "Elektronik Parça",
  },
  {
    title: "Far",
    image: "/jade-home/far.jpg",
    label: "Aydınlatma",
  },
  {
    title: "Debriyaj Seti",
    image: "/jade-home/debriyaj-seti.jpg",
    label: "Aktarma Organları",
  },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#f6f7f8] text-[#142a3a]">

        {/* ANNOUNCEMENT */}
        <div className="bg-[#102c40] text-white">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-2.5 text-xs md:px-8 md:text-sm">
            <p className="font-semibold">
              Online Oto Yedek Parça • Araç Bilgilerinizi Gönderin
            </p>

            <a
              href={phone}
              className="flex shrink-0 items-center gap-2 font-black"
            >
              <PhoneIcon className="h-4 w-4" />
              0543 557 15 29
            </a>
          </div>
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-[#e3e7ea] bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-8">

            <Link href="/" className="shrink-0">
              <div className="text-[21px] font-black tracking-[-.04em] text-[#102c40] md:text-[25px]">
                JADE
                <span className="ml-1 font-medium text-[#557083]">
                  AUTOMOTIVE
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-bold text-[#425868] lg:flex">
              <Link href="/arac-yedek-parca" className="hover:text-[#102c40]">
                Yedek Parça
              </Link>
              <Link href="/oto-yedek-parca-fiyatlari" className="hover:text-[#102c40]">
                Parça Fiyatları
              </Link>
              <Link href="/blog/volvo-yedek-parca-istanbul" className="hover:text-[#102c40]">
                Volvo
              </Link>
              <Link href="/blog" className="hover:text-[#102c40]">
                Rehber
              </Link>
            </nav>

            <div className="flex items-center gap-2">

              <a
                href={phone}
                className="hidden items-center gap-2 rounded-xl border border-[#d9e0e5] px-4 py-3 text-sm font-black text-[#102c40] md:flex"
              >
                <PhoneIcon />
                Hemen Ara
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                <span className="hidden sm:inline">Parça Sor</span>
              </a>

            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white">

          <div className="absolute right-[-180px] top-[-220px] h-[650px] w-[650px] rounded-full bg-[#eaf1f5] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[.92fr_1.08fr] lg:items-center">

            <div className="relative z-10">

              <p className="mb-5 flex items-center gap-3 text-xs font-black tracking-[.18em] text-[#668093]">
                <span className="h-[2px] w-8 bg-[#668093]" />
                ONLINE OTO YEDEK PARÇA
              </p>

              <h1 className="max-w-[760px] text-[46px] font-black leading-[.98] tracking-[-.055em] text-[#102c40] sm:text-[58px] md:text-[72px]">
                Aracınız İçin
                <span className="block text-[#6c8799]">
                  Doğru Yedek Parçayı
                </span>
                Bulun.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#5b6c78] md:text-lg md:leading-8">
                Parçanın adını bilmiyor musunuz? Araç bilgilerinizi,
                ustanızın verdiği listeyi veya parçanın fotoğrafını
                gönderin.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 font-black text-[#07391a] shadow-[0_15px_35px_rgba(37,211,102,.22)] transition hover:-translate-y-1"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  PARÇA SOR
                </a>

                <a
                  href={phone}
                  className="flex items-center gap-3 rounded-xl bg-[#102c40] px-7 py-4 font-black text-white transition hover:-translate-y-1"
                >
                  <PhoneIcon />
                  0543 557 15 29
                </a>

              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-[#5c7180]">
                <span>✓ Araç bilgisiyle parça talebi</span>
                <span>✓ Fotoğraf gönderebilirsiniz</span>
                <span>✓ Online mağaza seçenekleri</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative min-h-[470px]">

              <div className="absolute inset-x-8 bottom-0 top-8 rounded-[36px] bg-[#edf2f5]" />

              <div className="absolute left-0 top-0 w-[64%] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(16,44,64,.13)]">
                <div className="relative aspect-[1.45/1]">
                  <Image
                    src="/jade-home/toyota.webp"
                    alt="Oto yedek parça"
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 38vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-8 right-0 w-[57%] overflow-hidden rounded-[28px] border-[8px] border-white bg-white shadow-[0_30px_80px_rgba(16,44,64,.16)]">
                <div className="relative aspect-[1.45/1]">
                  <Image
                    src="/jade-home/renault.webp"
                    alt="Araç yedek parça"
                    fill
                    priority
                    sizes="(max-width: 1024px) 60vw, 34vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 z-10 rounded-2xl bg-[#102c40] px-5 py-4 text-white shadow-xl">
                <span className="block text-[10px] font-black tracking-[.16em] text-[#a8bdca]">
                  PARÇA BULAMADIN MI?
                </span>
                <strong className="mt-1 block text-lg">
                  Fotoğrafını gönder.
                </strong>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK FIND */}
        <section className="border-y border-[#e1e6e9] bg-[#102c40] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-0 px-5 md:grid-cols-4 md:px-8">

            {[
              ["01", "Marka", "Aracının markasını söyle"],
              ["02", "Model / Yıl", "Model ve üretim yılını yaz"],
              ["03", "Motor", "Motor bilgisini gönder"],
              ["04", "Parça", "Parça adı veya fotoğrafı"],
            ].map(([no, title, text], index) => (
              <div
                key={no}
                className={`py-7 md:px-7 ${
                  index !== 3 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
                }`}
              >
                <span className="text-xs font-black text-[#85a3b6]">
                  {no}
                </span>
                <strong className="mt-2 block text-lg">
                  {title}
                </strong>
                <span className="mt-1 block text-sm text-[#b9c8d1]">
                  {text}
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* BRANDS */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-black tracking-[.18em] text-[#728998]">
                ARACINIZI SEÇİN
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#102c40] md:text-5xl">
                Markanıza göre parça bulun.
              </h2>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#2b6c50]"
            >
              Markam yoksa parça sor →
            </a>

          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">

            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group overflow-hidden rounded-2xl border border-[#dde3e7] bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[1.35/1] overflow-hidden bg-[#edf1f3]">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} yedek parça`}
                    fill
                    sizes="(max-width: 768px) 50vw, 15vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between p-4">
                  <strong className="text-sm text-[#102c40]">
                    {brand.name}
                  </strong>
                  <span className="text-[#8397a4]">→</span>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">

            <p className="text-xs font-black tracking-[.18em] text-[#728998]">
              PARÇA KATEGORİLERİ
            </p>

            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-4xl font-black tracking-[-.04em] text-[#102c40] md:text-5xl">
                Aradığınız parçaya hızlı ulaşın.
              </h2>

              <Link
                href="/arac-yedek-parca"
                className="font-black text-[#46687d]"
              >
                Tüm yedek parçalar →
              </Link>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#dfe5e8] bg-[#dfe5e8] md:grid-cols-2 lg:grid-cols-3">

              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group relative overflow-hidden bg-white"
                >
                  <div className="relative h-[190px] overflow-hidden bg-[#f4f6f7] md:h-[220px]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#102c40] px-3 text-[11px] font-black text-white">
                      {category.no}
                    </span>
                  </div>

                  <div className="flex min-h-[145px] items-start justify-between gap-5 p-6 md:p-7">
                    <div>
                      <h3 className="text-xl font-black tracking-[-.025em] text-[#102c40] md:text-2xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-[#667985]">
                        {category.text}
                      </p>
                    </div>

                    <span className="mt-1 text-2xl text-[#8fa0aa] transition group-hover:translate-x-1 group-hover:text-[#102c40]">
                      →
                    </span>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[.18em] text-[#728998]">
                YEDEK PARÇA DÜNYASI
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#102c40] md:text-5xl">
                Tek bir kategoriye bağlı değiliz.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#667985]">
              Elektrikten aydınlatmaya, aktarma organlarından bakım
              parçalarına kadar ihtiyacınız olan ürünü araç bilgilerinizle
              sorun.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {products.map((product) => (
              <a
                key={product.title}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[24px] border border-[#dde3e7] bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square bg-white p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-[#edf0f2] p-5">
                  <span className="text-[10px] font-black tracking-[.13em] text-[#8a9aa4]">
                    {product.label.toUpperCase()}
                  </span>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="font-black text-[#102c40]">
                      {product.title}
                    </h3>

                    <span className="text-[#80929d]">→</span>
                  </div>
                </div>
              </a>
            ))}

          </div>
        </section>

        {/* WHATSAPP FINDER */}
        <section className="px-5 md:px-8">

          <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[34px] bg-[#102c40] text-white">

            <div className="grid lg:grid-cols-[1.1fr_.9fr]">

              <div className="p-8 md:p-14 lg:p-16">
                <p className="text-xs font-black tracking-[.18em] text-[#9bb2c0]">
                  PARÇANIN ADINI BİLMİYOR MUSUNUZ?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.04em] md:text-6xl">
                  Fotoğrafını veya
                  <span className="block text-[#9ec3d7]">
                    ustanın listesini gönder.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#c1d0d8] md:text-lg">
                  Marka, model, yıl ve motor bilgilerinizi de ekleyin.
                  Parça talebinizi doğrudan WhatsApp üzerinden iletin.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 font-black text-[#07391a]"
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                    FOTOĞRAF GÖNDER
                  </a>

                  <a
                    href={phone}
                    className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-black text-white"
                  >
                    <PhoneIcon />
                    HEMEN ARA
                  </a>

                </div>
              </div>

              <div className="border-t border-white/10 bg-[#173a50] p-8 md:p-12 lg:border-l lg:border-t-0">

                <p className="text-xs font-black tracking-[.15em] text-[#9bb2c0]">
                  MESAJDA BUNLAR OLSUN
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    ["01", "Marka & Model"],
                    ["02", "Araç Yılı"],
                    ["03", "Motor Bilgisi"],
                    ["04", "Parça Adı / Fotoğraf"],
                  ].map(([no, text]) => (
                    <div
                      key={no}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#102c40]">
                        {no}
                      </span>

                      <strong>{text}</strong>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* VOLVO SEO HUB */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

            <div>
              <p className="text-xs font-black tracking-[.18em] text-[#728998]">
                VOLVO YEDEK PARÇA
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#102c40] md:text-5xl">
                Volvo parça rehberi
              </h2>

              <p className="mt-5 max-w-md leading-7 text-[#667985]">
                Volvo yedek parça, fren, ön takım, bakım ve süspansiyon
                kategorilerindeki sayfalarımıza ulaşın.
              </p>

              <Link
                href="/blog/volvo-yedek-parca-istanbul"
                className="mt-7 inline-flex rounded-xl bg-[#102c40] px-6 py-4 font-black text-white"
              >
                VOLVO YEDEK PARÇA →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                ["/blog/volvo-yedek-parcaci-istanbul", "Volvo Yedek Parçacı İstanbul"],
                ["/blog/volvo-fren-balatasi-istanbul", "Volvo Fren Balatası"],
                ["/blog/volvo-fren-diski-istanbul", "Volvo Fren Diski"],
                ["/blog/volvo-on-takim-parcalari-istanbul", "Volvo Ön Takım"],
                ["/blog/volvo-bakim-parcalari-istanbul", "Volvo Bakım Parçaları"],
                ["/blog/volvo-suspansiyon-parcalari-istanbul", "Volvo Süspansiyon"],
              ].map(([href, title]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-xl border border-[#dde3e7] bg-white p-5 font-black text-[#29485d] transition hover:border-[#aebdc6] hover:shadow-md"
                >
                  {title}
                  <span>→</span>
                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* MARKETPLACES */}
        <section className="border-y border-[#e0e5e8] bg-white">

          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">

            <div className="grid gap-4 lg:grid-cols-3">

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-[#f0d5c1] bg-[#fffaf6] p-7 transition hover:-translate-y-1"
              >
                <span className="text-xs font-black tracking-[.15em] text-[#f27a1a]">
                  ONLINE MAĞAZA
                </span>

                <div className="mt-3 flex items-end justify-between">
                  <strong className="text-3xl font-black text-[#102c40]">
                    Trendyol
                  </strong>
                  <span className="text-3xl text-[#f27a1a]">→</span>
                </div>
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-[#f2dac8] bg-[#fffaf7] p-7 transition hover:-translate-y-1"
              >
                <span className="text-xs font-black tracking-[.15em] text-[#ff6000]">
                  ONLINE MAĞAZA
                </span>

                <div className="mt-3 flex items-end justify-between">
                  <strong className="text-3xl font-black text-[#102c40]">
                    Hepsiburada
                  </strong>
                  <span className="text-3xl text-[#ff6000]">→</span>
                </div>
              </a>

              <a
                href={jade}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-[#dce3e7] bg-[#f6f8f9] p-7 transition hover:-translate-y-1"
              >
                <span className="text-xs font-black tracking-[.15em] text-[#6d8493]">
                  JADE AUTOMOTIVE
                </span>

                <div className="mt-3 flex items-end justify-between">
                  <strong className="text-3xl font-black text-[#102c40]">
                    Online
                  </strong>
                  <span className="text-3xl text-[#6d8493]">→</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* SEO TEXT */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8">

          <div className="grid gap-10 border-b border-[#dfe5e8] pb-16 lg:grid-cols-[.65fr_1.35fr]">

            <h2 className="text-3xl font-black tracking-[-.035em] text-[#102c40]">
              Oto Yedek Parça
            </h2>

            <div className="grid gap-6 text-sm leading-7 text-[#667985] md:grid-cols-2">
              <p>
                Jade Automotive üzerinden aracınız için ihtiyaç duyduğunuz
                oto yedek parça talebini iletebilirsiniz. Marka, model,
                üretim yılı ve motor bilgilerinizi paylaşarak aradığınız
                parçayı sorabilirsiniz.
              </p>

              <p>
                Parçanın adını bilmiyorsanız mevcut parçanın fotoğrafını,
                referans bilgisini veya ustanızın verdiği parça listesini
                WhatsApp üzerinden gönderebilirsiniz.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0d2638] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_.8fr_.8fr]">

            <div>
              <div className="text-2xl font-black tracking-[-.04em]">
                JADE <span className="font-medium text-[#9db1be]">AUTOMOTIVE</span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#9fb1bc]">
                Online oto yedek parça talepleri için araç bilgilerinizi
                paylaşın, ihtiyacınız olan parçayı sorun.
              </p>
            </div>

            <div>
              <strong className="text-sm">Hızlı Bağlantılar</strong>
              <div className="mt-4 space-y-3 text-sm text-[#a9bbc6]">
                <Link href="/arac-yedek-parca" className="block">
                  Oto Yedek Parça
                </Link>
                <Link href="/oto-yedek-parca-fiyatlari" className="block">
                  Yedek Parça Fiyatları
                </Link>
                <Link href="/blog" className="block">
                  Blog / Rehber
                </Link>
              </div>
            </div>

            <div>
              <strong className="text-sm">İletişim</strong>

              <a
                href={phone}
                className="mt-4 flex items-center gap-2 text-lg font-black"
              >
                <PhoneIcon />
                0543 557 15 29
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-black text-[#07391a]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto max-w-[1440px] px-5 py-5 text-xs text-[#78909e] md:px-8">
              © 2026 Jade Automotive
            </div>
          </div>
        </footer>

        <div className="h-[76px] md:hidden" />

      </main>

      {/* DESKTOP WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan parça sor"
        className="fixed bottom-7 right-7 z-[100] hidden h-[68px] w-[68px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,.35)] transition hover:scale-110 md:flex"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-2 gap-2 border-t border-[#dde3e7] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(16,44,64,.10)] backdrop-blur-xl md:hidden">

        <a
          href={phone}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#102c40] py-4 text-sm font-black text-white"
        >
          <PhoneIcon />
          HEMEN ARA
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 text-sm font-black text-[#07391a]"
        >
          <WhatsAppIcon />
          PARÇA SOR
        </a>

      </div>
    </>
  );
}
