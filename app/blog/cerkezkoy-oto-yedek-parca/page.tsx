import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerkezköy Oto Yedek Parça | Yedek Parçacı | Jade Automotive",
  description:
    "Çerkezköy oto yedek parça için marka, model, yıl, motor ve aradığınız parçayı iletin. Ürün ve fiyat bilgisi için Jade Automotive: 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/cerkezkoy-oto-yedek-parca",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20%C3%87erkezk%C3%B6y%20i%C3%A7in%20oto%20yedek%20par%C3%A7a%20aramaktay%C4%B1m.%0A%0AMarka%3A%20%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0AArad%C4%B1%C4%9F%C4%B1m%20Par%C3%A7a%3A%20";

function WhatsAppIcon({
  className = "h-5 w-5",
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
      <path d="M16.04 2.003c-7.72 0-13.997 6.275-13.997 13.99 0 2.466.644 4.872 1.868 6.993L1.926 30.24l7.422-1.947a13.94 13.94 0 0 0 6.686 1.704h.006c7.714 0 13.995-6.276 13.995-13.993 0-3.74-1.456-7.254-4.1-9.898a13.9 13.9 0 0 0-9.895-4.103Zm0 25.632h-.005a11.59 11.59 0 0 1-5.91-1.618l-.424-.252-4.405 1.156 1.176-4.293-.276-.44a11.61 11.61 0 0 1-1.79-6.195c0-6.414 5.22-11.63 11.638-11.63 3.107 0 6.028 1.21 8.224 3.408a11.55 11.55 0 0 1 3.405 8.23c-.003 6.416-5.22 11.634-11.633 11.634Zm6.38-8.713c-.35-.175-2.07-1.02-2.39-1.137-.32-.117-.553-.175-.786.175-.233.35-.903 1.137-1.107 1.37-.204.233-.408.262-.757.087-.35-.175-1.476-.544-2.81-1.735-1.04-.927-1.742-2.07-1.946-2.42-.204-.35-.022-.539.153-.713.157-.156.35-.408.524-.612.175-.204.233-.35.35-.583.116-.233.058-.437-.03-.612-.087-.175-.786-1.895-1.078-2.594-.283-.68-.57-.588-.786-.6l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.195-1.223 2.915s1.252 3.382 1.427 3.615c.175.233 2.464 3.762 5.97 5.276.834.36 1.485.575 1.993.736.837.266 1.6.228 2.202.138.672-.1 2.07-.845 2.36-1.662.292-.816.292-1.516.204-1.662-.087-.146-.32-.233-.67-.408Z" />
    </svg>
  );
}

const parts = [
  ["Fren Balatası", "Ön veya arka fren balatasını araç bilgilerinize göre sorgulayın."],
  ["Fren Diski", "Aracınıza uygun ön veya arka fren diski için bilgi alın."],
  ["Debriyaj Seti", "Model yılı ve motor seçeneğine uygun debriyaj setini sorun."],
  ["Triger Seti", "Aracınızın motor seçeneğine uygun triger setini sorgulayın."],
  ["Amortisör", "Ön veya arka amortisör ihtiyacınız için araç bilgilerinizi iletin."],
  ["Filtre & Bakım", "Yağ, hava, polen filtresi ve bakım parçalarını sorgulayın."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f7f8] pb-20 text-[#102c40] md:pb-0">

      <div className="bg-[#102c40] px-5 py-3 text-center text-xs font-black tracking-[.14em] text-white">
        ÇERKEZKÖY OTO YEDEK PARÇA • 0543 557 15 29
      </div>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="inline-flex rounded-full bg-[#eaf5fb] px-4 py-2 text-xs font-black tracking-[.14em] text-[#16638d]">
              ÇERKEZKÖY • TEKİRDAĞ
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-[-.05em] md:text-6xl">
              Çerkezköy Oto Yedek Parça
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#617580]">
              Çerkezköy için aracınıza uygun oto yedek parça mı arıyorsunuz?
              Marka, model, model yılı, motor ve ihtiyacınız olan parçayı
              iletin. Ürün ve fiyat bilgisi için Jade Automotive'e ulaşın.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phone}
                className="inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#102c40] px-9 text-lg font-black text-white shadow-lg"
              >
                ☎ TIKLA ARA
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[64px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 text-lg font-black text-white shadow-lg"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Parçayı Sor
              </a>
            </div>

            <a
              href={phone}
              className="mt-6 inline-block text-3xl font-black md:text-4xl"
            >
              0543 557 15 29
            </a>

            <p className="mt-4 text-sm font-bold text-[#72838c]">
              Marka • Model • Yıl • Motor • Aradığınız Parça
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-[#edf1f3] shadow-[0_25px_70px_rgba(16,44,64,.15)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/jade-home/cerkezkoy-oto-yedek-parca.jpg"
                alt="Çerkezköy oto yedek parça"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="text-xs font-black tracking-[.13em] text-[#2983b2]">
                ÇERKEZKÖY YEDEK PARÇACI
              </div>
              <div className="mt-2 text-xl font-black">
                Aradığınız parçayı bize sorun.
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#dce5e9] bg-white md:grid-cols-3">

          <a href={phone} className="p-6 md:border-r">
            <div className="text-xs font-black text-[#2983b2]">
              HEMEN ARA
            </div>
            <div className="mt-2 text-xl font-black">
              Çerkezköy Yedek Parça Sor
            </div>
            <div className="mt-1 text-sm text-[#6c7e88]">
              0543 557 15 29
            </div>
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border-y p-6 md:border-y-0 md:border-r"
          >
            <div className="flex items-center gap-2 text-xs font-black text-[#169447]">
              <WhatsAppIcon />
              WHATSAPP
            </div>
            <div className="mt-2 text-xl font-black">
              Parça Fotoğrafını Gönder
            </div>
            <div className="mt-1 text-sm text-[#6c7e88]">
              Fotoğraf veya ürün koduyla sorgulayın.
            </div>
          </a>

          <a href={phone} className="p-6">
            <div className="text-xs font-black text-[#2983b2]">
              FİYAT
            </div>
            <div className="mt-2 text-xl font-black">
              Güncel Fiyat Sor
            </div>
            <div className="mt-1 text-sm text-[#6c7e88]">
              Araç bilgilerinizi hazırlayın →
            </div>
          </a>

        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              ÇERKEZKÖY ARAÇ YEDEK PARÇA
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-5xl">
              Aracınız için doğru parçayı sorgulayın
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#657985]">
              Parçanın tam adını bilmiyorsanız aracınızın marka, model, yıl ve
              motor bilgisini gönderin. Mevcut parçanın fotoğrafı veya ürün
              kodu varsa WhatsApp üzerinden de paylaşabilirsiniz.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#dce5e9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-black">{title}</h3>

                <p className="mt-3 leading-7 text-[#687b86]">
                  {text}
                </p>

                <a
                  href={phone}
                  className="mt-5 inline-flex font-black text-[#16638d]"
                >
                  Ürün ve Fiyat Sor →
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="border-y border-[#dce5e9] bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          <div>
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              ÇERKEZKÖY YEDEK PARÇACI
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-5xl">
              Parça sorgularken hangi bilgiler gerekli?
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#657985]">
              Aynı otomobil modelinde üretim yılına ve motor seçeneğine göre
              kullanılan yedek parçalar değişebilir. Bu nedenle araç
              bilgilerinizi eksiksiz paylaşmanız doğru ürünü belirlemeyi
              kolaylaştırır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Marka", "Aracınızın markasını iletin."],
              ["02", "Model & Yıl", "Model ve model yılını belirtin."],
              ["03", "Motor", "Motor seçeneğini paylaşın."],
              ["04", "Parça", "Parça adı, kodu veya fotoğrafını gönderin."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[22px] border border-[#dce5e9] bg-[#f8fafb] p-6"
              >
                <div className="text-sm font-black text-[#2983b2]">
                  {number}
                </div>

                <h3 className="mt-3 text-xl font-black">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#687b86]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">

          <div>
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              ÇERKEZKÖY OTO YEDEK PARÇA FİYATLARI
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-5xl">
              Yedek parça fiyatı nasıl öğrenilir?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#657985]">
            <p>
              Oto yedek parça fiyatları araç markası, model, model yılı,
              motor seçeneği ve aranan parçaya göre değişebilir.
            </p>

            <p>
              Aracınıza uygun ürün belirlenmeden yapılan fiyat karşılaştırması
              yanıltıcı olabilir. Araç bilgilerinizi ileterek uygun ürün ve
              güncel fiyat bilgisini sorgulayabilirsiniz.
            </p>

            <a
              href={phone}
              className="inline-flex rounded-xl bg-[#102c40] px-7 py-4 font-black text-white"
            >
              ☎ Fiyat İçin Ara
            </a>
          </div>

        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
            TEKİRDAĞ YEDEK PARÇA
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-4xl">
            Tekirdağ ve Çorlu yedek parça sayfaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <Link
              href="/blog/tekirdag-oto-yedek-parca"
              className="rounded-[22px] border border-[#dce5e9] bg-[#f8fafb] p-7"
            >
              <div className="text-xl font-black">
                Tekirdağ Oto Yedek Parça
              </div>
              <div className="mt-2 text-[#687b86]">
                Tekirdağ ana yedek parça sayfası →
              </div>
            </Link>

            <Link
              href="/blog/corlu-oto-yedek-parca"
              className="rounded-[22px] border border-[#dce5e9] bg-[#f8fafb] p-7"
            >
              <div className="text-xl font-black">
                Çorlu Oto Yedek Parça
              </div>
              <div className="mt-2 text-[#687b86]">
                Çorlu yedek parça sayfası →
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#102c40] px-6 py-12 text-white md:px-12 md:py-16">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <div className="text-xs font-black tracking-[.16em] text-[#8fd3ff]">
                ÇERKEZKÖY OTO YEDEK PARÇA
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-.04em] md:text-5xl">
                Aradığınız parçayı bulamadınız mı?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#c6d4dc]">
                Marka, model, yıl, motor ve aradığınız parçayı iletin.
                Parçanın fotoğrafını veya ürün kodunu da WhatsApp üzerinden
                gönderebilirsiniz.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={phone}
                className="inline-flex min-h-[62px] items-center justify-center rounded-xl bg-white px-9 text-lg font-black text-[#102c40]"
              >
                ☎ 0543 557 15 29
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[62px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-9 font-black text-white"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Parçayı Sor
              </a>
            </div>

          </div>
        </div>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden Çerkezköy oto yedek parça sor"
        className="fixed bottom-7 right-7 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl md:flex"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce5e9] bg-white p-2 shadow-[0_-8px_30px_rgba(16,44,64,.14)] md:hidden">
        <div className="grid grid-cols-2 gap-2">

          <a
            href={phone}
            className="flex min-h-[58px] items-center justify-center rounded-xl bg-[#102c40] text-sm font-black text-white"
          >
            ☎ TIKLA ARA
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-black text-white"
          >
            <WhatsAppIcon />
            PARÇA SOR
          </a>

        </div>
      </div>

    </main>
  );
}
