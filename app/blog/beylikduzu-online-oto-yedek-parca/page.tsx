import type { Metadata } from "next";
import Link from "next/link";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20online%20oto%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20Ara%C3%A7%20marka%2Fmodel%3A%20%20Y%C4%B1l%3A%20%20Arad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export const metadata: Metadata = {
  title: "Beylikdüzü Online Oto Yedek Parça | Jade Automotive",
  description:
    "Beylikdüzü online oto yedek parça arayanlar için fren, filtre, motor, debriyaj, süspansiyon ve bakım parçaları. WhatsApp, Trendyol ve Hepsiburada üzerinden Jade Automotive'e ulaşın.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-online-oto-yedek-parca",
  },
};

const categories = [
  {
    icon: "🛑",
    title: "Fren Parçaları",
    text: "Fren balatası, fren diski ve diğer fren sistemi parçalarını araç bilgilerinizi paylaşarak sorgulayın.",
  },
  {
    icon: "⚙️",
    title: "Filtre & Bakım",
    text: "Yağ filtresi, hava filtresi, polen filtresi, yakıt filtresi ve bakım parçalarını inceleyin.",
  },
  {
    icon: "🔧",
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj seti ve aktarma sistemi parçaları için marka, model ve yıl bilgilerinizi gönderin.",
  },
  {
    icon: "🚗",
    title: "Süspansiyon & Ön Takım",
    text: "Amortisör, salıncak, rot ve ön takım parçaları için ihtiyacınız olan ürünü sorun.",
  },
  {
    icon: "🔩",
    title: "Motor Parçaları",
    text: "Motor parçalarında doğru ürün için araç modeli, yılı ve mümkünse motor bilgisini paylaşın.",
  },
  {
    icon: "⚡",
    title: "Elektrik & Ateşleme",
    text: "Elektrik, ateşleme ve yardımcı sistem parçaları için WhatsApp üzerinden iletişime geçin.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <style>{`
        .jade-wrap{max-width:1180px;margin:auto;padding:0 22px}
        .jade-glow{
          background:
            radial-gradient(circle at 15% 0%,rgba(0,211,255,.16),transparent 34%),
            radial-gradient(circle at 85% 15%,rgba(37,211,102,.08),transparent 30%)
        }
        .jade-card{
          background:linear-gradient(145deg,rgba(14,31,50,.97),rgba(7,20,34,.97));
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
          className="flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-black"
        >
          Online Yedek Parça Sor
        </a>
      </div>

      {/* HERO */}
      <section className="jade-glow border-b border-white/5">
        <div className="jade-wrap py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-black text-cyan-300">
              JADE AUTOMOTIVE · ONLINE OTO YEDEK PARÇA
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Beylikdüzü Online
              <span className="block text-cyan-300">
                Oto Yedek Parça
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Beylikdüzü ve çevresinde online oto yedek parça
              arıyorsanız aracınızın marka, model, yıl ve parça
              bilgisini göndererek Jade Automotive ile iletişime
              geçebilirsiniz. Ürünleri Trendyol ve Hepsiburada
              mağazalarımızdan da inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
              >
                🚀 WhatsApp'tan Parça Sor
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
          </div>
        </div>
      </section>

      {/* ANA HEDEFE İÇ LİNK */}
      <section className="jade-wrap py-16">
        <div className="jade-card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
            Beylikdüzü Oto Yedek Parça
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Oto Yedek Parçayı Online Sorgulayın
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Oto yedek parça ararken aracın marka ve modeli kadar
            üretim yılı, motor seçeneği ve ihtiyaç duyulan parçanın
            doğru belirlenmesi de önemlidir. Araç bilgilerinizi
            paylaşarak ihtiyacınız olan ürünü sorgulayabilirsiniz.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-400">
            Tüm parça grupları ve araç yedek parça seçenekleri için{" "}
            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="font-black text-cyan-300 underline underline-offset-4"
            >
              Beylikdüzü oto yedek parça
            </Link>{" "}
            ana sayfamızı da inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* NASIL ALINIR */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">
          <div className="text-center">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              Online Parça Sorgulama
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Online oto yedek parça nasıl alınır?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Marka & Model", "Aracınızın marka ve model bilgisini belirleyin."],
              ["02", "Model Yılı", "Aracınızın üretim yılını kontrol edin."],
              ["03", "Parça Bilgisi", "Aradığınız parçanın adını veya varsa parça kodunu paylaşın."],
              ["04", "Sipariş Kanalı", "WhatsApp'tan sorun veya online mağazalarımızı inceleyin."],
            ].map(([number, title, text]) => (
              <div key={number} className="jade-card rounded-2xl p-7">
                <div className="text-3xl font-black text-cyan-300">
                  {number}
                </div>

                <h3 className="mt-5 text-xl font-black">{title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="jade-wrap py-20">
        <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
          Online Yedek Parça
        </span>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Oto yedek parça ürün grupları
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          Fren sisteminden motor parçalarına kadar farklı ürün
          gruplarında aracınıza uygun parçayı sorgulayabilirsiniz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div key={item.title} className="jade-card rounded-2xl p-7">
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 min-h-[72px] leading-7 text-slate-400">
                {item.text}
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

      {/* DOĞRU PARÇA */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="jade-card rounded-3xl p-8">
              <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
                Araç Uyumluluğu
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Online yedek parçada doğru ürün neden önemli?
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Aynı marka ve model araçlarda bile üretim yılı, motor
                tipi veya versiyona göre kullanılan parçalar
                değişebilir. Online sipariş öncesinde araç bilgilerinin
                kontrol edilmesi yanlış ürün seçme riskini azaltır.
              </p>
            </div>

            <div className="jade-card rounded-3xl p-8">
              <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
                Parça Kontrolü
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Şase ve parça kodu ile sorgulama
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Bazı yedek parçalarda yalnızca araç modeli yeterli
                olmayabilir. Gerektiğinde şase bilgisi, motor bilgisi
                veya mevcut parçanın kodu doğru ürünü belirlemeyi
                kolaylaştırabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="jade-wrap py-20">
        <div className="jade-card rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
                Hızlı Parça Sorgulama
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Aradığın oto yedek parçayı WhatsApp'tan sor
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Aracınızın bilgilerini ve aradığınız parçayı göndererek
                Jade Automotive ile doğrudan iletişime geçebilirsiniz.
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
                className="jade-btn flex justify-center rounded-xl bg-[#25D366] px-7 py-4 text-center font-black"
              >
                Bilgileri WhatsApp'tan Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDYOL / HEPSİBURADA */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Online Satış Kanalları
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Jade Automotive Online Mağazaları
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Jade Automotive ürünlerini online incelemek için Trendyol
            ve Hepsiburada mağazalarımızı ziyaret edebilirsiniz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-card jade-btn rounded-3xl p-8"
            >
              <div className="text-sm font-black uppercase tracking-[.2em] text-orange-400">
                TRENDYOL
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Trendyol Mağazası
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Trendyol mağazamızdaki Jade Automotive oto yedek parça
                ürünlerini inceleyin.
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
              <div className="text-sm font-black uppercase tracking-[.2em] text-orange-400">
                HEPSİBURADA
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Hepsiburada Mağazası
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Hepsiburada mağazamızdaki Jade Automotive ürünlerini
                online inceleyin.
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
              Oto Yedek Parça Fiyatları
            </span>

            <h2 className="mt-3 text-3xl font-black">
              Online oto yedek parça fiyatları
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Yedek parça fiyatı; araç marka ve modeli, üretim yılı,
              motor seçeneği ve ihtiyaç duyulan ürün grubuna göre
              değişebilir. Fiyat karşılaştırması yaparken aracınıza
              uygun parçayı değerlendirmek önemlidir.
            </p>

            <Link
              href="/blog/beylikduzu-oto-yedek-parca-fiyatlari"
              className="mt-6 inline-flex font-black text-cyan-300"
            >
              Beylikdüzü Oto Yedek Parça Fiyatları →
            </Link>
          </div>

          <div className="jade-card rounded-3xl p-8">
            <h3 className="text-2xl font-black">
              Parça fiyatını hemen sor
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Marka, model, yıl ve aradığınız parçayı WhatsApp'tan
              gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-btn mt-7 flex justify-center rounded-xl bg-[#25D366] px-7 py-4 font-black"
            >
              Oto Yedek Parça Fiyatı Sor
            </a>
          </div>
        </div>
      </section>

      {/* ANA HEDEF SAYFA */}
      <section className="jade-glow border-y border-white/5">
        <div className="jade-wrap py-20">
          <div className="jade-card rounded-3xl p-8 text-center md:p-12">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              Ana Rehber
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Beylikdüzü Oto Yedek Parça
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Beylikdüzü ve çevresinde oto yedek parça ürün grupları,
              araç uyumluluğu ve parça sorgulama hakkında ana
              rehberimizi inceleyin.
            </p>

            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="jade-btn mt-8 inline-flex rounded-xl bg-cyan-300 px-8 py-4 font-black text-[#06111f]"
            >
              Beylikdüzü Oto Yedek Parça →
            </Link>
          </div>
        </div>
      </section>

      {/* İÇ LİNKLER */}
      <section className="jade-wrap py-16">
        <h2 className="text-2xl font-black">
          Beylikdüzü Oto Yedek Parça Rehberleri
        </h2>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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

          <Link
            href="/blog/beylikduzu-oto-yedek-parca-nereden-alinir"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Oto Yedek Parça Nereden Alınır? →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Online oto yedek parça hakkında
          </h2>

          <div className="mt-8 max-w-4xl space-y-4">
            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Beylikdüzü online oto yedek parça nasıl alınır?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Araç marka, model, model yılı ve aradığınız parçayı
                belirleyerek WhatsApp üzerinden sorgulama yapabilir
                veya Jade Automotive online mağazalarını
                inceleyebilirsiniz.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Online siparişte doğru parçayı nasıl bulabilirim?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Araç marka-modeli, üretim yılı ve motor bilgisinin
                kontrol edilmesi önemlidir. Gerektiğinde şase veya
                parça kodu bilgisi de doğru ürünün belirlenmesini
                kolaylaştırabilir.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Trendyol'dan Jade Automotive ürünleri alınabilir mi?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive Trendyol mağazasındaki ürünleri
                sayfadaki mağaza bağlantısından inceleyebilirsiniz.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Jade Automotive Hepsiburada mağazası var mı?
              </summary>

              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive'in Hepsiburada mağazasına sayfadaki
                bağlantı üzerinden ulaşabilirsiniz.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="jade-glow">
        <div className="jade-wrap py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Oto yedek parçanı online sorgula.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Marka + model + yıl + parça adını gönder veya Jade
              Automotive online mağazalarını incele.
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
