import type { Metadata } from "next";
import Link from "next/link";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20filtre%20seti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20Ara%C3%A7%20marka%2Fmodel%3A%20%20Y%C4%B1l%3A%20%20Motor%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export const metadata: Metadata = {
  title: "Beylikdüzü Filtre Seti | Oto Filtre Çeşitleri | Jade Automotive",
  description:
    "Beylikdüzü filtre seti arayanlar için yağ filtresi, hava filtresi, polen filtresi ve yakıt filtresi seçenekleri. Aracınıza uygun filtre setini WhatsApp'tan sorun.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-filtre-seti",
  },
};

const filters = [
  {
    icon: "🛢️",
    title: "Yağ Filtresi",
    text: "Motor yağı içerisindeki kir ve partiküllerin filtrelenmesine yardımcı olan bakım parçalarından biridir.",
  },
  {
    icon: "🌬️",
    title: "Hava Filtresi",
    text: "Motorun ihtiyaç duyduğu havanın filtrelenmesine yardımcı olur. Araç modeline göre filtre tipi değişebilir.",
  },
  {
    icon: "🍃",
    title: "Polen Filtresi",
    text: "Araç kabinine giren havanın filtrelenmesine yardımcı olan periyodik bakım parçalarındandır.",
  },
  {
    icon: "⛽",
    title: "Yakıt Filtresi",
    text: "Yakıt sisteminde kullanılan filtre türüdür. Araç ve motor seçeneğine göre uyumluluk kontrol edilmelidir.",
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
        aria-label="WhatsApp'tan filtre seti sor"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.18-3.45-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.9 9.9 0 1 1 8.37 4.62Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
      </a>

      {/* MOBİL WHATSAPP */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-400/10 bg-[#06111f]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center rounded-xl bg-[#25D366] px-5 py-3 font-black"
        >
          Aracıma Uygun Filtre Setini Sor
        </a>
      </div>

      {/* HERO */}
      <section className="jade-glow border-b border-white/5">
        <div className="jade-wrap py-20 md:py-28">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-black text-cyan-300">
              JADE AUTOMOTIVE · PERİYODİK BAKIM
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Beylikdüzü
              <span className="block text-cyan-300">Filtre Seti</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Beylikdüzü ve çevresinde aracınız için filtre seti
              arıyorsanız yağ filtresi, hava filtresi, polen filtresi
              ve yakıt filtresi seçenekleri hakkında bilgi alabilirsiniz.
              Araç marka, model, yıl ve motor bilgilerinizi göndererek
              uyumlu filtreleri sorgulayın.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
              >
                🚀 Filtre Setini WhatsApp'tan Sor
              </a>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="jade-btn rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-7 py-4 font-black text-cyan-300"
              >
                Beylikdüzü Oto Yedek Parça →
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Marka + model + yıl + motor bilgisini gönder.
            </p>
          </div>
        </div>
      </section>

      {/* FİLTRE SETİ NEDİR */}
      <section className="jade-wrap py-16">
        <div className="jade-card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
            Periyodik Bakım
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Oto Filtre Seti Nedir?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Araçlarda kullanılan filtreler periyodik bakımın önemli
            parçaları arasındadır. Filtre setinin içeriği araca ve
            bakım ihtiyacına göre değişebilmekle birlikte yağ filtresi,
            hava filtresi, polen filtresi ve bazı araçlarda yakıt
            filtresi birlikte değerlendirilebilir.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-slate-400">
            Filtrelerin ölçüsü ve uyumluluğu araç marka, model, üretim
            yılı ve motor seçeneğine göre değişebilir. Bu nedenle
            satın alma öncesinde aracınıza uygun ürünlerin kontrol
            edilmesi önemlidir.
          </p>
        </div>
      </section>

      {/* FİLTRELER */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">

          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Filtre Çeşitleri
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Araç Filtre Setinde Hangi Filtreler Bulunur?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Aracın bakım programına ve motor seçeneğine göre ihtiyaç
            duyulan filtreler değişebilir.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filters.map((item) => (
              <div key={item.title} className="jade-card rounded-3xl p-8">
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.text}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-black text-cyan-300"
                >
                  Aracıma uygun olanı sor →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UYUMLULUK */}
      <section className="jade-wrap py-20">
        <div className="grid gap-5 md:grid-cols-2">

          <div className="jade-card rounded-3xl p-8">
            <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
              Araç Uyumluluğu
            </span>

            <h2 className="mt-3 text-2xl font-black">
              Aracınıza uygun filtre seti nasıl bulunur?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Aynı araç modelinde farklı motor seçenekleri veya üretim
              yılları bulunabilir. Bu nedenle filtre seti seçerken
              marka, model, üretim yılı ve motor bilgisinin kontrol
              edilmesi gerekir.
            </p>
          </div>

          <div className="jade-card rounded-3xl p-8">
            <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
              Doğru Ürün
            </span>

            <h2 className="mt-3 text-2xl font-black">
              Filtre kodu neden değişebilir?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Araç üreticileri aynı modelde farklı motor ve parça
              seçenekleri kullanabilir. Gerektiğinde araç bilgileri,
              şase bilgisi veya mevcut filtrenin ürün kodu doğru
              parçanın belirlenmesini kolaylaştırabilir.
            </p>
          </div>

        </div>
      </section>

      {/* 3 ADIM */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20 text-center">

          <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
            Hızlı Sorgulama
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Filtre setini 30 saniyede sor
          </h2>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {[
              [
                "01",
                "Araç Bilgilerini Yaz",
                "Aracının marka, model ve üretim yılını gönder.",
              ],
              [
                "02",
                "Motor Bilgisini Ekle",
                "Benzin, dizel ve motor hacmi gibi bilgileri mümkünse ekle.",
              ],
              [
                "03",
                "WhatsApp'tan Gönder",
                "Bilgileri göndererek aracına uygun filtre setini sorgula.",
              ],
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

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="jade-btn mt-9 inline-flex rounded-xl bg-[#25D366] px-8 py-4 font-black"
          >
            Filtre Setini WhatsApp'tan Sor
          </a>
        </div>
      </section>

      {/* FİYAT */}
      <section className="jade-wrap py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
              Filtre Seti Fiyatları
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Beylikdüzü Filtre Seti Fiyatları
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Filtre seti fiyatları aracın marka ve modeline, üretim
              yılına, motor seçeneğine ve set içerisinde bulunan filtre
              türlerine göre değişebilir. Bu nedenle fiyat araştırması
              yaparken aracınıza uygun filtrelerin karşılaştırılması
              önemlidir.
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
              Filtre seti fiyatını sor
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Aşağıdaki bilgileri WhatsApp'tan gönder:
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Araç markası",
                "Araç modeli",
                "Model yılı",
                "Motor bilgisi",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-slate-400"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-btn mt-6 flex justify-center rounded-xl bg-[#25D366] px-7 py-4 text-center font-black"
            >
              Filtre Seti Fiyatı Sor
            </a>
          </div>
        </div>
      </section>

      {/* ONLINE MAĞAZALAR */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">

          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Online Alışveriş
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
              <div className="text-sm font-black tracking-[.2em] text-orange-400">
                TRENDYOL
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Trendyol
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Trendyol mağazamızdaki Jade Automotive ürünlerini
                inceleyin.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Mağazaya Git →
              </div>
            </a>

            <a
              href={hepsiburada}
              target="_blank"
              rel="noopener noreferrer"
              className="jade-card jade-btn rounded-3xl p-8"
            >
              <div className="text-sm font-black tracking-[.2em] text-orange-400">
                HEPSİBURADA
              </div>

              <h3 className="mt-3 text-2xl font-black">
                Jade Automotive Hepsiburada
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Hepsiburada mağazamızdaki Jade Automotive ürünlerini
                inceleyin.
              </p>

              <div className="mt-6 font-black text-orange-400">
                Mağazaya Git →
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ANA BEYLİKDÜZÜ SAYFASI */}
      <section className="jade-glow">
        <div className="jade-wrap py-20">

          <div className="jade-card rounded-3xl p-8 text-center md:p-12">

            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              Oto Yedek Parça
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Beylikdüzü Oto Yedek Parça
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Filtre setlerinin yanı sıra fren, debriyaj, süspansiyon,
              motor ve elektrik parçaları hakkında bilgi almak için
              ana Beylikdüzü oto yedek parça sayfamızı inceleyin.
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
            href="/blog/beylikduzu-fren-balatasi"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Beylikdüzü Fren Balatası →
          </Link>

          <Link
            href="/blog/beylikduzu-oto-yedek-parca-fiyatlari"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Oto Yedek Parça Fiyatları →
          </Link>

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

        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#081727]">
        <div className="jade-wrap py-20">

          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Filtre seti hakkında
          </h2>

          <div className="mt-8 max-w-4xl space-y-4">

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Filtre setinde neler bulunur?
              </summary>
              <p className="mt-4 leading-7 text-slate-400">
                Set içeriği araca göre değişebilir. Yağ filtresi, hava
                filtresi, polen filtresi ve bazı uygulamalarda yakıt
                filtresi birlikte değerlendirilebilir.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Aracıma uygun filtre setini nasıl bulabilirim?
              </summary>
              <p className="mt-4 leading-7 text-slate-400">
                Araç marka, model, üretim yılı ve motor bilgisinin
                paylaşılması doğru filtrelerin belirlenmesini
                kolaylaştırır.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Filtre seti fiyatları neden değişiyor?
              </summary>
              <p className="mt-4 leading-7 text-slate-400">
                Araç modeli, motor seçeneği ve set içerisinde bulunan
                filtrelerin türüne göre fiyatlar değişebilir.
              </p>
            </details>

            <details className="jade-card rounded-2xl p-6">
              <summary className="cursor-pointer font-black">
                Filtre setini online inceleyebilir miyim?
              </summary>
              <p className="mt-4 leading-7 text-slate-400">
                Jade Automotive'in Trendyol ve Hepsiburada
                mağazalarındaki ürünleri online inceleyebilirsiniz.
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
              Aracına uygun filtre setini sor.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Marka + model + yıl + motor bilgisini göndererek
              filtre seti hakkında bilgi al.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="jade-btn rounded-xl bg-[#25D366] px-8 py-4 font-black"
              >
                WhatsApp'tan Filtre Seti Sor
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
