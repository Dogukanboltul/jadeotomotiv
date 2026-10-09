import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Büyükçekmece Renault Fren Balatası | Fiyat Sor | Jade Automotive",
  description:
    "Büyükçekmece Renault fren balatası arayanlar için Jade Automotive. Araç model, yıl ve motor bilginizi iletin, Renault fren balatası fiyatını sorun. 0543 557 15 29.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/buyukcekmece-renault-fren-balatasi",
  },
};

const phone = "tel:+905435571529";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20B%C3%BCy%C3%BCk%C3%A7ekmece%20i%C3%A7in%20Renault%20fren%20balatas%C4%B1%20fiyat%C4%B1%20almak%20istiyorum.%0A%0AModel%3A%20%0AY%C4%B1l%3A%20%0AMotor%3A%20%0A%C3%96n%2FArka%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export default function BuyukcekmeceRenaultFrenBalatasi() {
  return (
    <main className="min-h-screen bg-[#f7f9fb] pb-20 text-[#102c40] md:pb-0">

      <div className="bg-[#102c40] px-5 py-2.5 text-center text-xs font-black tracking-wide text-white">
        RENAULT FREN BALATASI • BÜYÜKÇEKMECE • 0543 557 15 29
      </div>

      {/* HERO */}
      <section className="border-b border-[#dfe7eb] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center">

          <div>
            <div className="inline-flex rounded-full bg-[#eaf5fb] px-4 py-2 text-xs font-black tracking-[.14em] text-[#16638d]">
              BÜYÜKÇEKMECE • RENAULT • FREN BALATASI
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-.045em] md:text-6xl">
              Büyükçekmece Renault Fren Balatası
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c707c]">
              Büyükçekmece ve çevresinde Renault aracınız için fren balatası
              arıyorsanız araç model, yıl ve motor bilginizi iletin.
              Ön veya arka fren balatası ihtiyacınız için fiyat sorabilirsiniz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phone}
                className="inline-flex min-h-[62px] items-center justify-center rounded-xl bg-[#102c40] px-8 font-black text-white shadow-lg transition hover:-translate-y-0.5"
              >
                📞 FREN BALATASI İÇİN ARA
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[62px] items-center justify-center rounded-xl bg-[#25D366] px-8 font-black text-white"
              >
                WhatsApp'tan Fiyat Sor
              </a>
            </div>

            <a
              href={phone}
              className="mt-6 inline-block text-3xl font-black md:text-4xl"
            >
              0543 557 15 29
            </a>
          </div>

          <div className="rounded-[30px] border border-[#dfe7eb] bg-[#f8fafb] p-6 shadow-[0_20px_60px_rgba(16,44,64,.09)] md:p-8">
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              BALATA FİYATI İÇİN
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">
              Araç bilgilerinizi paylaşın.
            </h2>

            <div className="mt-7 space-y-3">
              {[
                ["01", "Renault modeli"],
                ["02", "Model yılı"],
                ["03", "Motor bilgisi"],
                ["04", "Ön / arka balata"],
              ].map(([no, text]) => (
                <div
                  key={no}
                  className="flex items-center gap-4 rounded-2xl border border-[#e0e7eb] bg-white p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102c40] text-xs font-black text-white">
                    {no}
                  </div>
                  <div className="font-black">{text}</div>
                </div>
              ))}
            </div>

            <a
              href={phone}
              className="mt-6 flex min-h-[60px] items-center justify-center rounded-xl bg-[#102c40] font-black text-white"
            >
              📞 0543 557 15 29
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT INTENT */}
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              RENAULT FREN PARÇALARI
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-5xl">
              Renault fren balatası arıyorsanız
            </h2>

            <p className="mt-4 leading-8 text-[#667985]">
              Fren balatası seçiminde yalnızca marka bilgisi yeterli
              olmayabilir. Araç modeli, model yılı, motor bilgisi ve ön veya
              arka aks için ürün aranması gibi bilgiler doğru ürünü
              belirlemeye yardımcı olur.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <a
              href={phone}
              className="group rounded-[26px] border border-[#dfe7eb] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-black tracking-[.14em] text-[#2983b2]">
                ÖN FREN
              </div>

              <h3 className="mt-4 text-3xl font-black">
                Renault Ön Fren Balatası
              </h3>

              <p className="mt-4 leading-7 text-[#687b86]">
                Renault aracınız için ön fren balatası ihtiyacınızı araç
                bilgileriyle birlikte iletin.
              </p>

              <div className="mt-7 font-black">
                📞 Ön Balata Fiyatı Sor →
              </div>
            </a>

            <a
              href={phone}
              className="group rounded-[26px] border border-[#dfe7eb] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-black tracking-[.14em] text-[#2983b2]">
                ARKA FREN
              </div>

              <h3 className="mt-4 text-3xl font-black">
                Renault Arka Fren Balatası
              </h3>

              <p className="mt-4 leading-7 text-[#687b86]">
                Arka fren balatası talebiniz için model, yıl ve motor
                bilgilerinizi paylaşın.
              </p>

              <div className="mt-7 font-black">
                📞 Arka Balata Fiyatı Sor →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CALL */}
      <section className="px-5 pb-14 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#102c40] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-black tracking-[.16em] text-[#8fd3ff]">
                BÜYÜKÇEKMECE RENAULT FREN BALATASI
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-.04em] md:text-5xl">
                Renault fren balatası fiyatını telefonda sorun.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#c5d4dc]">
                Araç bilgilerinizi paylaşarak ihtiyacınız olan fren
                balatası için bilgi alabilirsiniz.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href={phone}
                className="block text-3xl font-black md:text-4xl"
              >
                0543 557 15 29
              </a>

              <a
                href={phone}
                className="mt-5 inline-flex min-h-[60px] items-center justify-center rounded-xl bg-white px-9 font-black text-[#102c40]"
              >
                📞 HEMEN ARA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="border-y border-[#dfe7eb] bg-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
              FİYAT BİLGİSİ
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] md:text-4xl">
              Renault fren balatası fiyatları
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#637782]">
            <p>
              Renault fren balatası fiyatı araç modeli, model yılı, motor
              seçeneği ve ihtiyaç duyulan ürünün ön veya arka fren sistemi
              için olmasına göre değişebilir.
            </p>

            <p>
              Bu nedenle sabit bir fiyat yerine araç bilgilerinizi paylaşarak
              uygun ürün seçeneği için güncel fiyat sorabilirsiniz.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href={phone}
                className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#102c40] px-8 font-black text-white"
              >
                📞 Balata Fiyatı Sor
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#25D366] px-8 font-black text-white"
              >
                WhatsApp'tan Sor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL */}
      <section className="px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
            RENAULT YEDEK PARÇA
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">
            İlgili Renault sayfaları
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/renault-yedek-parca-istanbul"
              className="rounded-2xl border border-[#dfe7eb] bg-white p-6 font-black transition hover:shadow-lg"
            >
              Renault Yedek Parça İstanbul →
            </Link>

            <Link
              href="/blog/renault-yedek-parcaci-istanbul"
              className="rounded-2xl border border-[#dfe7eb] bg-white p-6 font-black transition hover:shadow-lg"
            >
              Renault Yedek Parçacı İstanbul →
            </Link>

            <Link
              href="/blog/renault-yedek-parca-fiyatlari"
              className="rounded-2xl border border-[#dfe7eb] bg-white p-6 font-black transition hover:shadow-lg"
            >
              Renault Yedek Parça Fiyatları →
            </Link>
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="border-t border-[#dfe7eb] bg-white px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-[-.04em]">
            Jade Automotive Online
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <a
              href={trendyol}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-[#f2d4bb] bg-[#fff8f2] p-7"
            >
              <div className="text-xs font-black text-[#f27a1a]">
                TRENDYOL
              </div>
              <div className="mt-3 text-2xl font-black">
                Jade Automotive Trendyol
              </div>
              <div className="mt-5 font-black text-[#f27a1a]">
                Mağazayı İncele →
              </div>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-[#dfe7eb] bg-[#fafcfd] p-7"
            >
              <div className="text-xs font-black text-[#607782]">
                HEPSİBURADA
              </div>
              <div className="mt-3 text-2xl font-black">
                Jade Automotive Hepsiburada
              </div>
              <div className="mt-5 font-black">
                Mağazayı İncele →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-[#eef4f7] px-5 py-16 text-center md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-xs font-black tracking-[.16em] text-[#2983b2]">
            BÜYÜKÇEKMECE • RENAULT
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-.045em] md:text-6xl">
            Renault fren balatası mı arıyorsunuz?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#687b86]">
            Model + yıl + motor + ön/arka bilgisini paylaşın.
          </p>

          <a
            href={phone}
            className="mt-8 inline-flex min-h-[64px] items-center justify-center rounded-xl bg-[#102c40] px-10 text-lg font-black text-white shadow-lg"
          >
            📞 0543 557 15 29
          </a>
        </div>
      </section>

      {/* DESKTOP CALL */}
      <a
        href={phone}
        aria-label="Büyükçekmece Renault fren balatası için ara"
        className="fixed bottom-7 right-7 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#102c40] text-2xl text-white shadow-2xl md:flex"
      >
        ☎
      </a>

      {/* MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce5e9] bg-white p-2 shadow-[0_-8px_30px_rgba(16,44,64,.12)] md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={phone}
            className="flex min-h-[56px] items-center justify-center rounded-xl bg-[#102c40] text-sm font-black text-white"
          >
            📞 BALATA İÇİN ARA
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[56px] items-center justify-center rounded-xl bg-[#25D366] text-sm font-black text-white"
          >
            FİYAT SOR
          </a>
        </div>
      </div>

    </main>
  );
}
