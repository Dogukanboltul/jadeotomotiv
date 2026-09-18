import type { Metadata } from "next";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Hyundai%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%20Model%3A%20%20Y%C4%B1l%3A%20%20Arad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export const metadata: Metadata = {
  title: "Beylikdüzü Hyundai Yedek Parça | Jade Automotive",
  description:
    "Beylikdüzü Hyundai yedek parça arayanlar için fren, filtre, motor, debriyaj, süspansiyon ve elektrik parçaları. Jade Automotive Trendyol ve Hepsiburada mağazalarını inceleyin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-hyundai-yedek-parca",
  },
};

const products = [
  {
    icon: "🛑",
    title: "Fren Sistemi",
    text: "Hyundai fren balatası, fren diski ve fren sistemi parçaları için aracınızın bilgilerini gönderin.",
  },
  {
    icon: "⚙️",
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtresi ihtiyaçlarınız için model ve yıl bilgisiyle iletişime geçin.",
  },
  {
    icon: "🔧",
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj seti ve şanzıman parçaları için aracınıza uygun seçenekleri sorun.",
  },
  {
    icon: "🚗",
    title: "Süspansiyon",
    text: "Amortisör, salıncak ve diğer süspansiyon parçaları hakkında bilgi alın.",
  },
  {
    icon: "🔩",
    title: "Motor Parçaları",
    text: "Hyundai motor parçaları için model, yıl ve motor bilgilerinizi paylaşın.",
  },
  {
    icon: "⚡",
    title: "Elektrik & Ateşleme",
    text: "Elektrik, ateşleme ve yardımcı sistem parçaları için doğrudan iletişime geçin.",
  },
];

const models = [
  "Hyundai Accent",
  "Hyundai Accent Era",
  "Hyundai i20",
  "Hyundai i30",
  "Hyundai Getz",
  "Hyundai Elantra",
  "Hyundai Tucson",
  "Hyundai Santa Fe",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <style>{`
        .jade-wrap{max-width:1180px;margin:auto;padding:0 22px}
        .jade-glow{
          background:
          radial-gradient(circle at 20% 0%,rgba(0,211,255,.14),transparent 32%),
          radial-gradient(circle at 80% 10%,rgba(37,211,102,.08),transparent 28%)
        }
        .jade-card{
          background:linear-gradient(145deg,rgba(14,31,50,.96),rgba(7,20,34,.96));
          border:1px solid rgba(103,220,255,.14);
          box-shadow:0 20px 60px rgba(0,0,0,.22)
        }
        .jade-btn{transition:.2s ease}
        .jade-btn:hover{
          transform:translateY(-2px);
          box-shadow:0 14px 35px rgba(0,211,255,.18)
        }
      `}</style>

      {/* SABİT WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan Hyundai yedek parça sor"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.18-3.45-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.9 9.9 0 1 1 8.37 4.62Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
      </a>

      {/* MOBİL CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-400/10 bg-[#06111f]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-black"
        >
          Hyundai Parçasını WhatsApp'tan Sor
        </a>
      </div>

      {/* HERO */}
      <section className="jade-glow border-b border-white/5">
        <div className="jade-wrap py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-bold text-cyan-300">
              JADE AUTOMOTIVE · HYUNDAI YEDEK PARÇA
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü Hyundai
              <span className="block text-cyan-300">Yedek Parça</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Hyundai aracınız için aradığınız yedek parçayı model, yıl
              ve parça bilgisiyle Jade Automotive'e sorun. WhatsApp
              üzerinden hızlıca iletişime geçebilir veya online
              mağazalarımızdaki ürünleri inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
              >
                🚀 Hyundai Parçamı Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#f27a1a] px-7 py-4 font-black"
              >
                Trendyol Mağazamız
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#ff6000] px-7 py-4 font-black"
              >
                Hepsiburada Mağazamız
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Model + yıl + parça adını gönder, aracına uygun parçayı sor.
            </p>
          </div>
        </div>
      </section>

      {/* 3 ADIM */}
      <section className="jade-wrap py-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Hızlı parça sorgulama
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Hyundai parçanı 30 saniyede sor
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Modelini yaz", "Accent, i20, i30, Getz, Elantra veya diğer Hyundai modelini belirt."],
            ["02", "Yılını gönder", "Aracın model yılını ve mümkünse motor bilgisini paylaş."],
            ["03", "Parçayı yaz", "Aradığın parçayı gönder ve uygun seçenekler hakkında bilgi al."],
          ].map(([no, title, text]) => (
            <div key={no} className="jade-card rounded-2xl p-7">
              <div className="text-3xl font-black text-cyan-300">{no}</div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODELLER */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-14">
          <h2 className="text-2xl font-black md:text-3xl">
            Hyundai yedek parça aranan modeller
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {models.map((model) => (
              <span
                key={model}
                className="rounded-full border border-cyan-300/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"
              >
                {model}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            Modeliniz listede bulunmuyorsa araç modelinizi, yılını ve
            aradığınız parçayı WhatsApp üzerinden gönderebilirsiniz.
          </p>
        </div>
      </section>

      {/* PARÇALAR */}
      <section className="jade-wrap py-20">
        <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
          Parça grupları
        </span>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Hyundai yedek parça seçenekleri
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="jade-card rounded-2xl p-7">
              <div className="text-4xl">{product.icon}</div>

              <h3 className="mt-5 text-xl font-black">
                {product.title}
              </h3>

              <p className="mt-3 min-h-[72px] leading-7 text-slate-400">
                {product.text}
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-black text-cyan-300"
              >
                Bu parçayı WhatsApp'tan sor →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ONLINE MAĞAZALAR */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
              Online Alışveriş
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Jade Automotive Online Mağazaları
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Yedek parça seçeneklerini online olarak incelemek
              isterseniz Jade Automotive mağazalarımıza Trendyol ve
              Hepsiburada üzerinden ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-card jade-btn rounded-3xl p-8"
            >
              <div className="text-sm font-black uppercase tracking-widest text-orange-400">
                TRENDYOL
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Trendyol Mağazası
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Jade Automotive ürünlerini Trendyol mağazamızdan
                inceleyin.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Trendyol Mağazasına Git →
              </div>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-card jade-btn rounded-3xl p-8"
            >
              <div className="text-sm font-black uppercase tracking-widest text-orange-400">
                HEPSİBURADA
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Hepsiburada Mağazası
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Jade Automotive ürünlerini Hepsiburada mağazamızdan
                inceleyin.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Hepsiburada Mağazasına Git →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FİYAT */}
      <section className="jade-wrap py-20">
        <div className="jade-card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
            Hyundai parça fiyatları
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Hyundai yedek parça fiyatı nasıl öğrenilir?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Yedek parça fiyatı aracın modeli, üretim yılı, motor
            seçeneği ve ihtiyaç duyulan parçaya göre değişebilir.
            Aracınızın bilgilerini WhatsApp üzerinden göndererek
            aradığınız parça hakkında bilgi alabilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
            >
              Hyundai Parça Fiyatını Sor
            </a>

            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-black"
            >
              Trendyol Ürünlerini İncele
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-black"
            >
              Hepsiburada Ürünlerini İncele
            </a>
          </div>
        </div>
      </section>

      {/* LOKAL SEO */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-16">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="jade-card rounded-2xl p-7">
              <h2 className="text-2xl font-black">
                Beylikdüzü Hyundai Yedek Parça
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Beylikdüzü ve çevresinde Hyundai yedek parça arayan
                araç sahipleri model, yıl ve parça bilgisini paylaşarak
                Jade Automotive ile iletişime geçebilir.
              </p>
            </div>

            <div className="jade-card rounded-2xl p-7">
              <h2 className="text-2xl font-black">
                Doğru Hyundai parçası nasıl bulunur?
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Aynı model araçlarda üretim yılı ve motor seçeneğine
                göre farklı parçalar kullanılabilir. Bu nedenle parça
                sorgularken araç bilgilerinin paylaşılması önemlidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İÇ LİNKLER */}
      <section className="jade-wrap py-16">
        <h2 className="text-2xl font-black">
          Diğer yedek parça içerikleri
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/beylikduzu-oto-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Oto Yedek Parça →
          </a>

          <a
            href="/blog/beylikduzu-ford-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Ford Yedek Parça →
          </a>

          <a
            href="/blog/beylikduzu-volkswagen-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Volkswagen Yedek Parça →
          </a>

          <a
            href="/blog/beylikduzu-renault-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Renault Yedek Parça →
          </a>

          <a
            href="/blog/beylikduzu-opel-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Opel Yedek Parça →
          </a>

          <a
            href="/blog/beylikduzu-toyota-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Toyota Yedek Parça →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5">
        <div className="jade-wrap py-20">
          <h2 className="text-3xl font-black">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 max-w-3xl space-y-4">
            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Beylikdüzü Hyundai yedek parça nereden alınır?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Hyundai aracınız için aradığınız parçayı Jade Automotive'e
                WhatsApp üzerinden sorabilir veya Trendyol ve Hepsiburada
                mağazalarımızdaki ürünleri inceleyebilirsiniz.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Hyundai yedek parça fiyatını nasıl öğrenebilirim?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Model, yıl ve aradığınız parçayı WhatsApp üzerinden
                göndererek bilgi alabilirsiniz.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Jade Automotive Trendyol mağazası var mı?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Evet. Sayfadaki Trendyol mağaza bağlantısı üzerinden
                Jade Automotive ürünlerini inceleyebilirsiniz.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Hepsiburada üzerinden de alışveriş yapabilir miyim?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive Hepsiburada mağazasına sayfadaki bağlantı
                üzerinden ulaşabilirsiniz.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="jade-glow border-t border-white/5">
        <div className="jade-wrap py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Aradığın Hyundai parçasını bul.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              WhatsApp'tan parçanı sor veya Jade Automotive Trendyol ve
              Hepsiburada mağazalarındaki ürünleri incele.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#25D366] px-8 py-4 font-black"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#f27a1a] px-8 py-4 font-black"
              >
                Trendyol
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#ff6000] px-8 py-4 font-black"
              >
                Hepsiburada
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}
