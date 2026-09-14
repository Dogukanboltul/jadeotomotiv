import type { Metadata } from "next";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20Volkswagen%20yedek%20par%C3%A7a%20ar%C4%B1yorum.%20Model%3A%20%20Y%C4%B1l%3A%20%20Arad%C4%B1%C4%9F%C4%B1m%20par%C3%A7a%3A";

export const metadata: Metadata = {
  title: "Beylikdüzü Volkswagen Yedek Parça | Jade Automotive",
  description:
    "Beylikdüzü Volkswagen yedek parça arayanlar için fren balatası, filtre, debriyaj, süspansiyon, motor ve elektrik parçaları. Volkswagen aracınıza uygun yedek parça ve fiyat bilgisi için WhatsApp'tan ulaşın.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-volkswagen-yedek-parca",
  },
};

const products = [
  ["🛑", "Fren Sistemi", "Volkswagen fren balatası, fren diski ve fren sistemi parçaları için bilgi alın."],
  ["⚙️", "Filtreler", "Yağ, hava, polen ve yakıt filtreleri için araç bilgilerinizi gönderin."],
  ["🔧", "Debriyaj & Şanzıman", "Debriyaj seti ve şanzıman parçalarında aracınıza uygun seçenekleri sorun."],
  ["🚗", "Süspansiyon", "Amortisör, salıncak ve diğer süspansiyon parçaları için destek alın."],
  ["🔩", "Motor Parçaları", "Motor sistemindeki ihtiyacınız olan parçayı model ve yıl bilgisiyle sorun."],
  ["⚡", "Elektrik & Ateşleme", "Elektrik, ateşleme ve yardımcı sistem parçaları için iletişime geçin."],
];

const models = [
  "Volkswagen Golf",
  "Volkswagen Passat",
  "Volkswagen Polo",
  "Volkswagen Jetta",
  "Volkswagen Tiguan",
  "Volkswagen Caddy",
  "Volkswagen Transporter",
  "Volkswagen T-Roc",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <style>{`
        .vw-wrap{max-width:1180px;margin:auto;padding:0 22px}
        .vw-glow{background:radial-gradient(circle at 50% 0%,rgba(0,211,255,.16),transparent 42%)}
        .vw-card{background:linear-gradient(145deg,rgba(14,31,50,.96),rgba(7,20,34,.96));border:1px solid rgba(103,220,255,.14);box-shadow:0 20px 60px rgba(0,0,0,.22)}
        .vw-btn{transition:.2s ease}
        .vw-btn:hover{transform:translateY(-2px);box-shadow:0 14px 35px rgba(0,211,255,.22)}
      `}</style>

      {/* SABİT WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan Volkswagen yedek parça sor"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.18-3.45-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.9 9.9 0 1 1 8.37 4.62Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
      </a>

      {/* MOBİL */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-400/10 bg-[#06111f]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="vw-btn flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-bold"
        >
          WhatsApp'tan Volkswagen Parçası Sor
        </a>
      </div>

      {/* HERO */}
      <section className="vw-glow border-b border-white/5">
        <div className="vw-wrap py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300">
              JADE AUTOMOTIVE · VOLKSWAGEN YEDEK PARÇA
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Beylikdüzü Volkswagen
              <span className="block text-cyan-300">Yedek Parça</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Volkswagen aracınız için aradığınız yedek parçayı bulmak
              için model, yıl ve parça bilgisini WhatsApp üzerinden
              gönderin. Aracınıza uygun seçenekleri birlikte
              değerlendirelim.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="vw-btn rounded-xl bg-[#25D366] px-7 py-4 text-center font-extrabold"
              >
                🚀 Volkswagen Parçamı WhatsApp'tan Sor
              </a>

              <a
                href="#parcalar"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center font-bold"
              >
                Parça Gruplarını Gör
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Model + yıl + parça adını gönder, aracına uygun parçayı
              birlikte bulalım.
            </p>
          </div>
        </div>
      </section>

      {/* 3 ADIM */}
      <section className="border-b border-white/5">
        <div className="vw-wrap py-16">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
              Çok kolay
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Volkswagen parçanı 30 saniyede sor
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01", "Modelini yaz", "Golf, Passat, Polo, Tiguan, Caddy veya Transporter gibi."],
              ["02", "Yılını gönder", "Aracın üretim yılını belirt."],
              ["03", "Parçayı sor", "İhtiyacın olan parçayı yaz ve WhatsApp'tan gönder."],
            ].map(([num, title, text]) => (
              <div key={num} className="vw-card rounded-2xl p-7">
                <div className="text-3xl font-black text-cyan-300">{num}</div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIZLI CTA */}
      <section className="vw-wrap py-16">
        <div className="vw-card rounded-3xl p-7 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
                Hızlı parça sorgulama
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Volkswagen yedek parça mı arıyorsun?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Araç modelini, yılı ve aradığın parçayı WhatsApp'tan
                gönder. Parça konusunda bilgi almak için doğrudan
                iletişime geçebilirsin.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="vw-btn whitespace-nowrap rounded-xl bg-[#25D366] px-7 py-4 text-center font-extrabold"
            >
              WhatsApp'tan Sor →
            </a>
          </div>
        </div>
      </section>

      {/* MODELLER */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="vw-wrap py-14">
          <h2 className="text-2xl font-black md:text-3xl">
            Volkswagen yedek parça aranan modeller
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

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Aracınız listede yer almıyorsa da model ve yıl bilgisini
            WhatsApp üzerinden göndererek parçanızı sorabilirsiniz.
          </p>
        </div>
      </section>

      {/* PARÇALAR */}
      <section id="parcalar" className="vw-wrap py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
            Parça grupları
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Volkswagen yedek parça seçenekleri
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            İhtiyacınız olan parçayı araç bilgileriyle birlikte
            göndererek uygun seçenekler hakkında bilgi alabilirsiniz.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map(([icon, title, text]) => (
            <div key={title} className="vw-card rounded-2xl p-7">
              <div className="text-4xl">{icon}</div>

              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>

              <p className="mt-3 min-h-[72px] leading-7 text-slate-400">
                {text}
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-bold text-cyan-300"
              >
                Bu parçayı sor →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FREN */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="vw-wrap py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
                Volkswagen fren sistemi
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Volkswagen fren balatası mı arıyorsun?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Fren balatası, fren diski veya fren sistemiyle ilgili
                ihtiyacını araç modelin ve yılınla birlikte WhatsApp'tan
                iletebilirsin.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="vw-btn rounded-xl bg-[#25D366] px-7 py-4 text-center font-extrabold"
            >
              Volkswagen Fren Parçası Sor
            </a>
          </div>
        </div>
      </section>

      {/* FİYAT */}
      <section className="vw-wrap py-20">
        <div className="vw-card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
            Fiyat bilgisi
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Volkswagen yedek parça fiyatı nasıl belirlenir?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Volkswagen yedek parça fiyatı; aracın modeli, üretim yılı,
            motor seçeneği, parça grubu ve tercih edilen ürün seçeneğine
            göre değişebilir. En doğru bilgi için araç bilgilerinizi
            göndererek doğrudan parça sorgulaması yapabilirsiniz.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="vw-btn mt-8 inline-flex rounded-xl bg-[#25D366] px-7 py-4 font-extrabold"
          >
            Volkswagen Yedek Parça Fiyatını Öğren →
          </a>
        </div>
      </section>

      {/* SEO BÖLÜMÜ */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="vw-wrap py-16">
          <h2 className="text-2xl font-black md:text-3xl">
            Volkswagen yedek parça hakkında
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="vw-card rounded-2xl p-7">
              <h3 className="text-xl font-extrabold">
                Doğru Volkswagen parçası nasıl bulunur?
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Model, model yılı ve motor bilgileri parça seçiminde
                önemlidir. Aradığınız parçanın adını bu bilgilerle
                birlikte paylaşmanız doğru seçeneğin belirlenmesini
                kolaylaştırır.
              </p>
            </div>

            <div className="vw-card rounded-2xl p-7">
              <h3 className="text-xl font-extrabold">
                Beylikdüzü Volkswagen yedek parça
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Beylikdüzü ve çevresinde Volkswagen yedek parça
                arıyorsanız, ihtiyacınız olan parçayı WhatsApp üzerinden
                sorabilir ve araç bilgilerinizi paylaşarak bilgi
                alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İÇ LİNKLER */}
      <section className="vw-wrap py-16">
        <h2 className="text-2xl font-black">
          Jade Automotive diğer yedek parça içerikleri
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/beylikduzu-oto-yedek-parca" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Beylikdüzü Oto Yedek Parça →
          </a>

          <a href="/oto-yedek-parca-fiyatlari" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Oto Yedek Parça Fiyatları →
          </a>

          <a href="/blog/beylikduzu-oto-yedek-parca-magazasi" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Beylikdüzü Oto Yedek Parça Mağazası →
          </a>

          <a href="/blog/beylikduzu-ford-yedek-parca" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Beylikdüzü Ford Yedek Parça →
          </a>

          <a href="/blog/beylikduzu-opel-yedek-parca" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Beylikdüzü Opel Yedek Parça →
          </a>

          <a href="/blog/beylikduzu-toyota-yedek-parca" className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold">
            Beylikdüzü Toyota Yedek Parça →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5">
        <div className="vw-wrap py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
              Sık Sorulan Sorular
            </span>

            <div className="mt-8 space-y-4">
              <details className="vw-card rounded-2xl p-6">
                <summary className="cursor-pointer font-extrabold">
                  Beylikdüzü Volkswagen yedek parça nereden alınır?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Volkswagen aracınız için ihtiyaç duyduğunuz parçayı
                  model, yıl ve parça bilgileriyle birlikte Jade
                  Automotive'e WhatsApp üzerinden sorabilirsiniz.
                </p>
              </details>

              <details className="vw-card rounded-2xl p-6">
                <summary className="cursor-pointer font-extrabold">
                  Volkswagen yedek parça fiyatını nasıl öğrenebilirim?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Araç modelinizi, yılınızı ve aradığınız parçayı
                  WhatsApp'tan göndererek fiyat bilgisi isteyebilirsiniz.
                </p>
              </details>

              <details className="vw-card rounded-2xl p-6">
                <summary className="cursor-pointer font-extrabold">
                  Volkswagen fren balatası için bilgi alabilir miyim?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Evet. Volkswagen modeliniz ve yılınızla birlikte fren
                  balatası ihtiyacınızı WhatsApp üzerinden
                  iletebilirsiniz.
                </p>
              </details>

              <details className="vw-card rounded-2xl p-6">
                <summary className="cursor-pointer font-extrabold">
                  Volkswagen modelim listede yok, yine de sorabilir miyim?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Evet. Model, yıl ve aradığınız parçayı göndererek
                  doğrudan bilgi alabilirsiniz.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vw-glow border-t border-white/5">
        <div className="vw-wrap py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Aradığın Volkswagen parçasını birlikte bulalım.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Model + yıl + parça adını WhatsApp'tan gönder.
              Volkswagen yedek parça ihtiyacın için iletişime geç.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="vw-btn mt-8 inline-flex rounded-xl bg-[#25D366] px-9 py-5 text-lg font-black"
            >
              🚀 Volkswagen Parçamı WhatsApp'tan Sor
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}
