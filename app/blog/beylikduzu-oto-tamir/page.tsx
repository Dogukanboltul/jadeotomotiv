import type { Metadata } from "next";
import Link from "next/link";

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1mda%20bir%20ar%C4%B1za%20var%20ve%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20Ara%C3%A7%20marka%2Fmodel%3A%20%20Y%C4%B1l%3A%20%20Ar%C4%B1za%2Fpar%C3%A7a%3A";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

export const metadata: Metadata = {
  title: "Beylikdüzü Oto Tamir | Arıza ve Yedek Parça Rehberi",
  description:
    "Beylikdüzü oto tamir araştırması yapanlar için fren, ön takım, süspansiyon, debriyaj, motor ve bakım arızalarında kontrol edilen yedek parçalar hakkında rehber.",
  alternates: {
    canonical: "https://www.frenbalataci.com.tr/blog/beylikduzu-oto-tamir",
  },
};

const repairs = [
  {
    icon: "🛑",
    title: "Fren Sistemi",
    text: "Fren sırasında ses, titreşim veya fren performansında değişiklik varsa balata, disk ve ilgili fren sistemi parçalarının kontrol edilmesi gerekebilir.",
    href: "/blog/beylikduzu-fren-balatasi",
  },
  {
    icon: "🚗",
    title: "Ön Takım",
    text: "Ön bölümden gelen ses, direksiyon tepkilerindeki değişiklik veya yol tutuş sorunlarında ön takım parçaları kontrol edilebilir.",
    href: "/beylikduzu-oto-yedek-parca",
  },
  {
    icon: "🔩",
    title: "Süspansiyon",
    text: "Kasiste vuruntu, aracın fazla salınım yapması veya sürüş konforundaki değişikliklerde süspansiyon parçaları incelenebilir.",
    href: "/beylikduzu-oto-yedek-parca",
  },
  {
    icon: "⚙️",
    title: "Debriyaj & Aktarma",
    text: "Kavrama noktasındaki değişiklik, vites geçişleri veya aktarma sistemiyle ilgili belirtilerde debriyaj ve ilgili parçalar kontrol edilebilir.",
    href: "/beylikduzu-oto-yedek-parca",
  },
  {
    icon: "🔧",
    title: "Motor Parçaları",
    text: "Motorla ilgili arızalarda ihtiyaç duyulan parça, arıza tespiti ve araç bilgilerine göre değişebilir.",
    href: "/beylikduzu-oto-yedek-parca",
  },
  {
    icon: "🛢️",
    title: "Bakım & Filtre",
    text: "Periyodik bakımda yağ, hava, polen ve yakıt filtreleri gibi bakım parçaları araç tipine göre değerlendirilir.",
    href: "/blog/beylikduzu-filtre-seti",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <style>{`
        .wrap{max-width:1180px;margin:auto;padding:0 22px}
        .glow{
          background:
            radial-gradient(circle at 15% 0%,rgba(0,211,255,.17),transparent 34%),
            radial-gradient(circle at 88% 10%,rgba(37,211,102,.08),transparent 28%)
        }
        .card{
          background:linear-gradient(145deg,rgba(14,31,50,.98),rgba(7,20,34,.98));
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
        aria-label="WhatsApp'tan yedek parça sor"
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
          Arızaya Uygun Parçayı Sor
        </a>
      </div>

      {/* HERO */}
      <section className="glow border-b border-white/5">
        <div className="wrap py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-black text-cyan-300">
              ARAÇ ARIZALARI · YEDEK PARÇA REHBERİ
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Beylikdüzü
              <span className="block text-cyan-300">Oto Tamir Rehberi</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Beylikdüzü ve çevresinde oto tamir ve araç arızaları
              hakkında araştırma yapıyorsanız; fren, ön takım,
              süspansiyon, debriyaj, motor ve bakım işlemlerinde
              karşılaşabileceğiniz parça ihtiyaçlarını inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl bg-[#25D366] px-7 py-4 font-black"
              >
                🚀 Arızaya Uygun Parçayı Sor
              </a>

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="btn rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-7 py-4 font-black text-cyan-300"
              >
                Oto Yedek Parçaları İncele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UYARI */}
      <section className="wrap py-12">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[.05] p-6">
          <p className="leading-7 text-slate-300">
            <strong className="text-white">Not:</strong> Bu sayfa araç
            arızaları ve bu arızalarda ihtiyaç duyulabilecek yedek
            parçalar hakkında bilgilendirme amacı taşır. Arıza tespiti
            ve onarım işlemleri için aracın uygun teknik servis veya
            uzman tarafından kontrol edilmesi gerekir.
          </p>
        </div>
      </section>

      {/* ARIZA GRUPLARI */}
      <section className="wrap py-12 md:py-16">
        <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
          Oto Tamir & Arıza
        </span>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Araç Tamirinde Hangi Parçalar Kontrol Edilir?
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          Aracın gösterdiği belirtiye göre kontrol edilmesi gereken
          sistem ve parçalar değişebilir. Kesin parça ihtiyacı arıza
          tespitinden sonra belirlenmelidir.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repairs.map((item) => (
            <div key={item.title} className="card rounded-3xl p-7">
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-5 text-xl font-black">{item.title}</h3>

              <p className="mt-4 min-h-[105px] leading-7 text-slate-400">
                {item.text}
              </p>

              <Link
                href={item.href}
                className="mt-5 inline-flex font-black text-cyan-300"
              >
                İlgili parçaları incele →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* BELİRTİLER */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Arıza Belirtileri
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Araçta Dikkat Edilebilecek Belirtiler
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Fren sırasında ses", "Fren sisteminin kontrol edilmesini gerektirebilecek belirtilerden biridir."],
              ["Kasiste vuruntu", "Ön takım veya süspansiyon sistemiyle ilişkili olabilir."],
              ["Direksiyonda titreşim", "Farklı mekanik nedenleri olabileceği için araç kontrol edilmelidir."],
              ["Debriyajda farklılık", "Kavrama ve aktarma sistemi parçalarının incelenmesi gerekebilir."],
              ["Motor uyarı lambası", "Arıza kodu okunmadan hangi parçanın sorunlu olduğu kesin olarak belirlenmemelidir."],
              ["Bakım zamanı", "Yağ ve filtreler gibi periyodik bakım parçalarının kontrol zamanı gelmiş olabilir."],
            ].map(([title, text]) => (
              <div key={title} className="card rounded-2xl p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAMİR SONRASI PARÇA */}
      <section className="wrap py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
              Yedek Parça
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Arıza Tespitinden Sonra Doğru Yedek Parçayı Bulun
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Aracınız kontrol edildikten sonra değişmesi gereken parça
              belirlendiyse marka, model, model yılı ve parça bilgisini
              kullanarak aracınıza uygun yedek parçayı sorgulayabilirsiniz.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Bazı parçalarda motor tipi, şase bilgisi veya mevcut
              parçanın kodu da doğru ürünün belirlenmesine yardımcı
              olabilir.
            </p>
          </div>

          <div className="card rounded-3xl p-8">
            <h3 className="text-2xl font-black">
              Parçayı WhatsApp'tan Sor
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Arıza tespiti sonrasında aşağıdaki bilgileri gönderin:
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Araç markası",
                "Araç modeli",
                "Model yılı",
                "Motor bilgisi",
                "Değişmesi gereken parça",
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
              className="btn mt-6 flex justify-center rounded-xl bg-[#25D366] px-7 py-4 text-center font-black"
            >
              Yedek Parçayı Sor
            </a>
          </div>
        </div>
      </section>

      {/* FREN */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="card rounded-3xl p-8">
              <div className="text-5xl">🛑</div>
              <h2 className="mt-5 text-3xl font-black">
                Fren Tamiri ve Fren Parçaları
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Fren sistemi araç güvenliği açısından kritik bir
                sistemdir. Frenle ilgili ses, titreşim veya performans
                değişikliklerinde araç kullanılmaya devam edilmeden
                uzman kontrolü alınması önemlidir.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black">
                Fren sisteminde hangi parçalar bulunur?
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Fren Balatası",
                  "Fren Diski",
                  "Fren Sistemi Parçaları",
                  "İlgili Bağlantı Parçaları",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/blog/beylikduzu-fren-balatasi"
                className="mt-7 inline-flex font-black text-cyan-300"
              >
                Beylikdüzü Fren Balatası →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BAKIM */}
      <section className="wrap py-20">
        <div className="card rounded-3xl p-8 md:p-12">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Bakım
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Tamir Kadar Periyodik Bakım da Önemlidir
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-400">
            Araç üreticisinin bakım planına uygun kontrollerin
            yaptırılması, bazı sorunların erken fark edilmesine yardımcı
            olabilir. Yağ, hava, polen ve yakıt filtreleri gibi bakım
            parçaları aracın özelliklerine göre belirlenmelidir.
          </p>

          <Link
            href="/blog/beylikduzu-filtre-seti"
            className="mt-7 inline-flex font-black text-cyan-300"
          >
            Beylikdüzü Filtre Seti →
          </Link>
        </div>
      </section>

      {/* ONLINE MAĞAZALAR */}
      <section className="border-y border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Online Mağazalar
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Jade Automotive Yedek Parçaları
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Aracınız için ihtiyaç duyduğunuz ürünleri Jade Automotive
            online mağazalarından da inceleyebilirsiniz.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <a
              href={trendyol}
              target="_blank"
              rel="noopener noreferrer"
              className="card btn rounded-3xl p-8"
            >
              <span className="font-black tracking-[.2em] text-orange-400">
                TRENDYOL
              </span>
              <h3 className="mt-4 text-2xl font-black">
                Jade Automotive Trendyol
              </h3>
              <p className="mt-4 text-slate-400">
                Online mağazadaki ürünleri inceleyin.
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
              <span className="font-black tracking-[.2em] text-orange-400">
                HEPSİBURADA
              </span>
              <h3 className="mt-4 text-2xl font-black">
                Jade Automotive Hepsiburada
              </h3>
              <p className="mt-4 text-slate-400">
                Online mağazadaki ürünleri inceleyin.
              </p>
              <div className="mt-6 font-black text-orange-400">
                Mağazaya Git →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ANA SEO HEDEF */}
      <section className="glow">
        <div className="wrap py-20">
          <div className="card rounded-3xl p-8 text-center md:p-12">
            <span className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Beylikdüzü Oto Yedek Parça
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Arıza tespiti sonrasında ihtiyaç duyduğunuz fren, filtre,
              debriyaj, süspansiyon, motor ve diğer araç parçaları için
              Beylikdüzü oto yedek parça rehberimizi inceleyin.
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

      {/* İÇ LİNKLER */}
      <section className="wrap py-16">
        <h2 className="text-2xl font-black">
          İlgili Oto Yedek Parça Rehberleri
        </h2>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/blog/beylikduzu-fren-balatasi"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Fren Balatası →
          </Link>

          <Link
            href="/blog/beylikduzu-filtre-seti"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Filtre Seti →
          </Link>

          <Link
            href="/blog/beylikduzu-oto-yedek-parca-fiyatlari"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Yedek Parça Fiyatları →
          </Link>

          <Link
            href="/blog/beylikduzu-online-oto-yedek-parca"
            className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
          >
            Online Oto Yedek Parça →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#081727]">
        <div className="wrap py-20">
          <span className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Sık Sorulan Sorular
          </span>

          <h2 className="mt-3 text-3xl font-black">
            Oto tamir ve yedek parça hakkında
          </h2>

          <div className="mt-8 max-w-4xl space-y-4">
            {[
              [
                "Araçtan ses geliyorsa hangi parça arızalıdır?",
                "Tek bir belirti farklı sistemlerden kaynaklanabilir. Kesin parça değişimine karar vermeden önce aracın teknik olarak kontrol edilmesi gerekir.",
              ],
              [
                "Oto tamirinde hangi yedek parçalar değişebilir?",
                "Arızaya göre fren, süspansiyon, ön takım, debriyaj, motor, elektrik veya bakım parçalarının değiştirilmesi gerekebilir.",
              ],
              [
                "Aracıma uygun yedek parçayı nasıl bulabilirim?",
                "Araç marka, model, üretim yılı ve motor bilgisiyle sorgulama yapılabilir. Bazı parçalarda şase veya parça kodu da gerekebilir.",
              ],
              [
                "Jade Automotive tamir hizmeti veriyor mu?",
                "Bu sayfa tamir ve arızalarda ihtiyaç duyulabilecek yedek parçalar hakkında bilgilendirme amacıyla hazırlanmıştır. Jade Automotive üzerinden yedek parça hakkında bilgi alabilirsiniz.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="card rounded-2xl p-6">
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-4 leading-7 text-slate-400">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="glow">
        <div className="wrap py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-black tracking-[.2em] text-cyan-300">
              JADE AUTOMOTIVE
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Arıza belli, parça mı lazım?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Marka + model + yıl + değişmesi gereken parçayı gönder.
              Aracına uygun yedek parçayı sorgula.
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

              <Link
                href="/beylikduzu-oto-yedek-parca"
                className="btn rounded-xl bg-cyan-300 px-8 py-4 font-black text-[#06111f]"
              >
                Oto Yedek Parçaları İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}
