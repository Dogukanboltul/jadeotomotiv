import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Oto Yedek Parça | Jade Otomotiv",
  description:
    "Beylikdüzü oto yedek parça arayanlar için fren balatası, filtre, debriyaj, süspansiyon, elektrik ve otomotiv yedek parça seçenekleri. Jade Otomotiv.",
  alternates: {
    canonical: "https://frenbalataci.com.tr/beylikduzu-oto-yedek-parca",
  },
};

const products = [
  {
    title: "Fren Sistemleri",
    text: "Fren balatası, fren diski ve fren sistemi parçalarında araç uyumlu seçenekler.",
  },
  {
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtreleri için farklı marka ve araç seçenekleri.",
  },
  {
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj setleri ve şanzıman parçalarında doğru parça desteği.",
  },
  {
    title: "Süspansiyon",
    text: "Amortisör, salıncak, rot ve süspansiyon sistemine yönelik yedek parçalar.",
  },
  {
    title: "Elektrik & Ateşleme",
    text: "Buji, bobin, sensör ve çeşitli elektrik-elektronik yedek parçalar.",
  },
  {
    title: "Motor Parçaları",
    text: "Motor sistemlerinde kullanılan farklı otomotiv yedek parça grupları.",
  },
];

const brands = [
  "Renault",
  "Fiat",
  "Dacia",
  "Ford",
  "Volkswagen",
  "Opel",
  "Peugeot",
  "Citroën",
  "Toyota",
  "Honda",
  "Hyundai",
  "Kia",
];

export default function BeylikduzuOtoYedekParcaPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Beylikdüzü ve Çevresine Oto Yedek Parça
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Beylikdüzü Oto Yedek Parça
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-cyan-400" />

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Beylikdüzü oto yedek parça ihtiyaçlarınız için fren balatası,
              filtre, debriyaj, süspansiyon, elektrik ve motor parçaları
              dahil geniş ürün gruplarında Jade Otomotiv ile doğru parçayı
              bulabilirsiniz.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Araç marka ve modelinize uygun yedek parça seçimi için parça
              numarası, araç bilgileri ve ürün uyumluluğu kontrol edilerek
              destek sağlanır.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#20bd5a]"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href="https://www.jadeautomotive.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 font-bold text-cyan-300 transition hover:bg-cyan-400/20"
              >
                Online Yedek Parça
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Ürün Grupları
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Beylikdüzü Oto Yedek Parça Çözümleri
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Aracınızın bakım ve onarım ihtiyaçlarına yönelik farklı otomotiv
            yedek parça gruplarında ürün seçenekleri sunuyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055]"
            >
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{product.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Marka & Uyumluluk
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Aracınıza Uygun Yedek Parçayı Bulun
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Beylikdüzü oto yedek parça aramalarında en önemli konulardan
                biri doğru araç ve doğru parça eşleşmesidir. Marka, model,
                motor tipi ve mümkünse parça numarası üzerinden kontrol
                yapılması yanlış ürün alma riskini azaltır.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-xl border border-white/10 bg-[#0a192a] px-4 py-4 text-center font-semibold text-slate-200"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 sm:p-10">
          <h2 className="text-3xl font-black">
            Beylikdüzü Oto Yedek Parça Fiyatları
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Oto yedek parça fiyatları; parçanın markasına, üreticisine, araç
            modeline, ürün grubuna ve ürünün özelliklerine göre değişebilir.
            Özellikle fren balatası, filtre, debriyaj ve süspansiyon
            parçalarında araç bilgileriyle birlikte fiyat araştırması yapmak
            daha doğru sonuç verir.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/oto-yedek-parca-fiyatlari"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              Oto Yedek Parça Fiyatları
            </Link>

            <Link
              href="/otomotiv-yedek-parca"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              Otomotiv Yedek Parça
            </Link>

            <Link
              href="/oto-yedek-parca-tedarikcisi"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              Oto Yedek Parça Tedarikçisi
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                Beylikdüzü ve Çevresinde Oto Yedek Parça
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Beylikdüzü, Büyükçekmece, Avcılar ve çevresinde oto yedek
                parça arayan müşteriler için ürün grupları ve tedarik
                seçenekleri konusunda destek sağlıyoruz. İhtiyacınız olan
                parçayı belirtmeniz halinde araç bilgileri üzerinden uygun
                ürün araştırması yapılabilir.
              </p>

              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#06111f] transition hover:bg-cyan-300"
              >
                Parça Bilgisi Al
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-7">
              <h3 className="text-xl font-bold">Faydalı Sayfalar</h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/avcilar-oto-yedek-parca"
                  className="block rounded-lg border border-white/10 px-4 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Avcılar Oto Yedek Parça
                </Link>

                <Link
                  href="/ticari-arac-yedek-parca"
                  className="block rounded-lg border border-white/10 px-4 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Ticari Araç Yedek Parça
                </Link>

                <Link
                  href="/arac-yedek-parca"
                  className="block rounded-lg border border-white/10 px-4 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Araç Yedek Parça
                </Link>

                <Link
                  href="/blog/fren-balatasi-fiyatlari"
                  className="block rounded-lg border border-white/10 px-4 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Fren Balatası Fiyatları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#040c16]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Beylikdüzü Oto Yedek Parça Arıyorsanız
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Aracınızın marka, model ve mümkünse parça numarasını paylaşın;
            ihtiyacınıza uygun oto yedek parça seçenekleri hakkında bilgi
            alın.
          </p>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition hover:bg-[#20bd5a]"
          >
            WhatsApp'tan İletişime Geç
          </a>
        </div>
      </section>
    </main>
  );
}
