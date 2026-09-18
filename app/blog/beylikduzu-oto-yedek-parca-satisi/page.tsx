import type { Metadata } from "next";
import Link from "next/link";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20oto%20yedek%20par%C3%A7a%20sat%C4%B1%C5%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20Ara%C3%A7%20marka%2Fmodel%3A%20%20Y%C4%B1l%3A%20%20Arad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export const metadata: Metadata = {
  title: "Beylikdüzü Oto Yedek Parça Satışı | Jade Automotive",
  description:
    "Beylikdüzü oto yedek parça satışı için fren, filtre, motor, debriyaj, süspansiyon ve bakım parçalarını sorgulayın. WhatsApp, Trendyol ve Hepsiburada üzerinden Jade Automotive'e ulaşın.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-oto-yedek-parca-satisi",
  },
};

const parts = [
  ["🛑", "Fren Sistemi", "Fren balatası, fren diski ve fren sistemi parçaları."],
  ["⚙️", "Filtre & Bakım", "Yağ, hava, polen ve yakıt filtresi gibi bakım parçaları."],
  ["🔧", "Debriyaj & Aktarma", "Debriyaj seti ve aktarma sistemi parçaları."],
  ["🚗", "Süspansiyon & Ön Takım", "Amortisör, salıncak, rot ve ön takım parçaları."],
  ["🔩", "Motor Parçaları", "Araç ve motor bilgisine göre motor parçaları."],
  ["⚡", "Elektrik & Ateşleme", "Elektrik, ateşleme ve yardımcı sistem parçaları."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <style>{`
        .wrap{max-width:1180px;margin:auto;padding:0 22px}
        .glow{
          background:
          radial-gradient(circle at 15% 0%,rgba(0,211,255,.16),transparent 34%),
          radial-gradient(circle at 85% 15%,rgba(37,211,102,.08),transparent 30%)
        }
        .card{
          background:linear-gradient(145deg,rgba(14,31,50,.97),rgba(7,20,34,.97));
          border:1px solid rgba(103,220,255,.14);
          box-shadow:0 20px 60px rgba(0,0,0,.22)
        }
        .btn{transition:.2s ease}
        .btn:hover{transform:translateY(-2px)}
      `}</style>

      {/* SABİT WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan oto yedek parça sor"
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
          className="flex justify-center rounded-xl bg-[#25D366] px-5 py-3 font-black"
        >
          Yedek Parça Sor
        </a>
      </div>

      {/* HERO */}
      <section className="glow border-b border-white/5">
        <div className="wrap py-20 md:py-28">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-black text-cyan-300">
              JADE AUTOMOTIVE · OTO YEDEK PARÇA
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü Oto Yedek
              <span className="block text-cyan-300">Parça Satışı</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Beylikdüzü ve çevresinde oto yedek parça arıyorsanız;
              fren, bakım, motor, debriyaj, süspansiyon ve elektrik
              parçaları için aracınızın bilgilerini göndererek Jade
              Automotive ile iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
              >
                🚀 Yedek Parça Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#f27a1a] px-7 py-4 font-black"
              >
                Trendyol
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#ff6000] px-7 py-4 font-black"
              >
                Hepsiburada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANA HEDEF */}
      <section className="wrap py-16">
        <div className="card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
            Oto Yedek Parça
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Beylikdüzü Oto Yedek Parça
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Araç bakım veya onarımında ihtiyaç duyduğunuz yedek parçayı
            seçerken aracın marka, model, üretim yılı ve motor
            bilgilerinin dikkate alınması önemlidir.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-400">
            Fren sisteminden motor parçalarına kadar daha fazla bilgi
            için{" "}
            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="font-black text-cyan-300 underline underline-offset-4"
            >
              Beylikdüzü oto yedek parça
            </Link>{" "}
            ana sayfamızı inceleyebilirsiniz.
          </p>

          <Link
            href="/beylikduzu-oto-yedek-parca"
            className="btn mt-7 inline-flex rounded-xl bg-cyan-300 px-7 py-4 font-black text-[#06111f]"
          >
            Beylikdüzü Oto Yedek Parça →
          </Link>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Yedek Parça Grupları
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Oto Yedek Parça Satışı
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            İhtiyaç duyduğunuz parçayı araç bilgilerinizi paylaşarak
            sorgulayabilirsiniz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {parts.map(([icon, title, text]) => (
              <div key={title} className="card rounded-2xl p-7">
                <div className="text-4xl">{icon}</div>

                <h3 className="mt-5 text-xl font-black">{title}</h3>

                <p className="mt-3 min-h-[60px] leading-7 text-slate-400">
                  {text}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-black text-cyan-300"
                >
                  Parçayı WhatsApp'tan Sor →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASIL ALINIR */}
      <section className="wrap py-20">
        <div className="text-center">
          <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
            Parça Sorgulama
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Aracınıza uygun yedek parçayı bulun
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["01", "Marka", "Araç markasını belirtin."],
            ["02", "Model & Yıl", "Model ve üretim yılını gönderin."],
            ["03", "Parça", "Aradığınız parçanın adını yazın."],
            ["04", "Sorgula", "Bilgileri WhatsApp üzerinden gönderin."],
          ].map(([number, title, text]) => (
            <div key={number} className="card rounded-2xl p-7">
              <div className="text-3xl font-black text-cyan-300">
                {number}
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEDEN UYUMLULUK */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card rounded-3xl p-8">
              <h2 className="text-2xl font-black">
                Doğru yedek parça neden önemli?
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Aynı araç modelinde farklı üretim yılları veya motor
                seçeneklerinde farklı parçalar kullanılabilir. Bu
                nedenle satın alma öncesinde araç uyumluluğunun
                kontrol edilmesi önemlidir.
              </p>
            </div>

            <div className="card rounded-3xl p-8">
              <h2 className="text-2xl font-black">
                Şase numarası ile parça kontrolü
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Bazı durumlarda araç marka ve modeli tek başına yeterli
                olmayabilir. Gerektiğinde şase numarası, motor bilgisi
                veya mevcut parçanın kodu doğru parçanın
                belirlenmesini kolaylaştırabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="wrap py-20">
        <div className="card rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
                Hızlı Fiyat Sorgulama
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Oto yedek parça fiyatını sor
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Araç bilgilerinizi ve aradığınız parçayı WhatsApp
                üzerinden göndererek bilgi alabilirsiniz.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Araç markası",
                "Araç modeli",
                "Model yılı",
                "Motor bilgisi",
                "Aradığınız parça",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-slate-400"
                >
                  {item}
                </div>
              ))}

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex justify-center rounded-xl bg-[#25D366] px-7 py-4 text-center font-black"
              >
                WhatsApp'tan Parça Sor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE MAĞAZALAR */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Online Satış
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Jade Automotive Online Mağazaları
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="card btn rounded-3xl p-8"
            >
              <div className="text-sm font-black tracking-[.2em] text-orange-400">
                TRENDYOL
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Trendyol
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive ürünlerini Trendyol mağazamızdan
                inceleyebilirsiniz.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Mağazaya Git →
              </div>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="card btn rounded-3xl p-8"
            >
              <div className="text-sm font-black tracking-[.2em] text-orange-400">
                HEPSİBURADA
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Hepsiburada
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive ürünlerini Hepsiburada mağazamızdan
                inceleyebilirsiniz.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Mağazaya Git →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* İÇ LİNKLER */}
      <section className="wrap py-20">
        <h2 className="text-3xl font-black">
          Beylikdüzü Oto Yedek Parça Rehberi
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/blog/beylikduzu-online-oto-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Online Oto Yedek Parça →
          </Link>

          <Link
            href="/blog/beylikduzu-oto-yedek-parca-siparisi"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Oto Yedek Parça Siparişi →
          </Link>

          <Link
            href="/blog/beylikduzu-oto-yedek-parca-fiyatlari"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Oto Yedek Parça Fiyatları →
          </Link>

          <Link
            href="/blog/beylikduzu-uygun-fiyatli-oto-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Uygun Fiyatlı Oto Yedek Parça →
          </Link>
        </div>
      </section>

      {/* ANA SAYFAYA GÜÇ */}
      <section className="glow border-y border-white/5">
        <div className="wrap py-20">
          <div className="card rounded-3xl p-8 text-center md:p-12">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              Ana Sayfa
            </span>

            <h2 className="mt-4 text-4xl font-black">
              Beylikdüzü Oto Yedek Parça
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Oto yedek parça çeşitleri, fiyat bilgileri ve araç
              uyumluluğu hakkında ana Beylikdüzü oto yedek parça
              sayfamızı inceleyin.
            </p>

            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="btn mt-8 inline-flex rounded-xl bg-cyan-300 px-8 py-4 font-black text-[#06111f]"
            >
              Beylikdüzü Oto Yedek Parça →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap py-20">
        <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
          Sık Sorulan Sorular
        </span>

        <h2 className="mt-3 text-3xl font-black">
          Oto yedek parça satışı hakkında
        </h2>

        <div className="mt-8 max-w-4xl space-y-4">
          {[
            [
              "Beylikdüzü oto yedek parça nasıl alınır?",
              "Araç marka, model, model yılı ve aradığınız parçayı WhatsApp üzerinden göndererek parça hakkında bilgi alabilirsiniz.",
            ],
            [
              "Oto yedek parça fiyatları nasıl belirlenir?",
              "Fiyatlar araç modeli, üretim yılı, motor seçeneği ve ihtiyaç duyulan parçaya göre değişebilir.",
            ],
            [
              "Online oto yedek parça satın alınabilir mi?",
              "Jade Automotive ürünlerini Trendyol ve Hepsiburada mağazalarımız üzerinden inceleyebilirsiniz.",
            ],
            [
              "Doğru parçayı nasıl sorgulayabilirim?",
              "Araç marka-modeli, model yılı ve mümkünse motor bilgisini paylaşmak doğru parçanın belirlenmesini kolaylaştırır.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">{q}</summary>
              <p className="mt-4 leading-7 text-slate-400">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="glow border-t border-white/5">
        <div className="wrap py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-black tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Aradığın oto yedek parçayı sor.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Marka + model + yıl + parça adını gönder veya online
              mağazalarımızı incele.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#25D366] px-8 py-4 font-black"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href={trendyol}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#f27a1a] px-8 py-4 font-black"
              >
                Trendyol
              </a>

              <a
                href={hepsiburada}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#ff6000] px-8 py-4 font-black"
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
