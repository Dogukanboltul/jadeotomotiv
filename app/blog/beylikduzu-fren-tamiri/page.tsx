import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beylikdüzü Fren Tamiri | Fren Arızaları ve Yedek Parça Rehberi",
  description:
    "Beylikdüzü fren tamiri araştıranlar için fren balatası, fren diski ve fren sistemi arızalarında kontrol edilen yedek parçalar hakkında rehber.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-fren-tamiri",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20arac%C4%B1m%C4%B1n%20fren%20sistemi%20i%C3%A7in%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AMarka%2FModel%3A%20%0AY%C4%B1l%3A%20%0AAr%C4%B1za%2FPar%C3%A7a%3A%20";

const trendyol =
  "https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0&sk=1";

const hepsiburada =
  "https://www.hepsiburada.com/magaza/jade-automotive";

const parts = [
  {
    title: "Fren Balatası",
    text: "Frenleme sırasında ses, performans değişimi veya balata aşınması tespit edildiğinde araçla uyumlu fren balatası seçimi önemlidir.",
  },
  {
    title: "Fren Diski",
    text: "Fren sırasında titreşim veya disk yüzeyinde aşınma gibi durumlarda fren disklerinin uzman tarafından kontrol edilmesi gerekebilir.",
  },
  {
    title: "Fren Sistemi Parçaları",
    text: "Arızanın kaynağına göre fren sistemindeki farklı parçaların kontrol edilmesi ve araçla uyumlu parçanın belirlenmesi gerekir.",
  },
];

const symptoms = [
  "Fren yaparken gelen sesler",
  "Fren pedalında veya direksiyonda titreşim",
  "Frenleme performansında değişiklik",
  "Balata veya disk aşınması",
  "Fren sistemi uyarı ışığının yanması",
  "Fren pedalının normalden farklı hissedilmesi",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            JADE AUTOMOTIVE • FREN SİSTEMİ REHBERİ
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Beylikdüzü Fren Tamiri:
            <span className="block text-cyan-300">
              Fren Arızaları ve Yedek Parça Rehberi
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Beylikdüzü ve çevresinde fren tamiri araştırırken aracınızdaki
            sorunun doğru şekilde teşhis edilmesi kadar, teşhis sonrasında
            kullanılacak yedek parçanın aracınızla uyumlu olması da önemlidir.
            Bu rehberde fren balatası, fren diski ve fren sistemiyle ilişkili
            yedek parça ihtiyaçlarını ele alıyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#04101c] transition hover:scale-[1.02]"
            >
              WhatsApp'tan Parça Sor
            </a>

            <Link
              href="/beylikduzu-oto-yedek-parca"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Beylikdüzü Oto Yedek Parça
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Model + yıl + ihtiyacınız olan parçayı gönderin, aracınıza uygun
            parçayı birlikte belirleyelim.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((part) => (
            <article
              key={part.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-cyan-300" />
              <h2 className="text-2xl font-black">{part.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{part.text}</p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-bold text-cyan-300 hover:text-cyan-200"
              >
                Uyumlu parçayı sor →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#091827]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              Fren Arızası Belirtileri
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Fren sisteminde hangi belirtiler görülebilir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren sistemindeki belirtiler farklı nedenlerden kaynaklanabilir.
              Bu nedenle yalnızca belirtiye bakarak parça değişimi yapmak
              yerine aracın uygun teknik servis veya uzman tarafından kontrol
              edilmesi gerekir.
            </p>
          </div>

          <div className="grid gap-3">
            {symptoms.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 font-black text-cyan-300">
                  ✓
                </span>
                <span className="font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 md:p-10">
            <p className="font-black text-cyan-300">30 SANİYEDE PARÇA SOR</p>

            <h2 className="mt-3 text-3xl font-black">
              Fren arızası tespit edildi, hangi parça gerekiyor?
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Aracınızın marka/modelini, model yılını ve servis tarafından
              belirtilen parça veya arıza bilgisini WhatsApp üzerinden
              gönderin. Araçla uyumlu yedek parçayı belirlemenize yardımcı
              olalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-xl bg-cyan-400 px-6 py-4 font-black text-[#04101c]"
            >
              WhatsApp'tan Gönder
            </a>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-wider text-slate-400">
              Göndermen yeterli
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <span className="text-sm text-slate-400">01</span>
                <p className="font-bold">Araç marka / model</p>
              </div>
              <div>
                <span className="text-sm text-slate-400">02</span>
                <p className="font-bold">Model yılı</p>
              </div>
              <div>
                <span className="text-sm text-slate-400">03</span>
                <p className="font-bold">Aranan parça / arıza bilgisi</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081522]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-black">
            Fren tamiri öncesinde doğru teşhis neden önemli?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-300">
            <p>
              Fren sisteminde duyulan bir ses veya hissedilen titreşim tek
              başına hangi parçanın değiştirilmesi gerektiğini kesin olarak
              göstermez. Balata, disk veya sistemdeki diğer bileşenlerin
              kontrol edilmesi gerekebilir.
            </p>

            <p>
              Arıza tespit edildikten sonra seçilecek parçanın araç marka,
              model, yıl ve teknik özellikleriyle uyumlu olması gerekir.
              Özellikle fren sistemi gibi güvenlikle doğrudan ilişkili
              parçalarda teknik kontrol ve doğru parça eşleştirmesi önemlidir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="font-black text-cyan-300">ONLINE MAĞAZALAR</p>
          <h2 className="mt-3 text-3xl font-black">
            Jade Automotive ürünlerini inceleyin
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={trendyol}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-4 text-center font-black transition hover:bg-white/10"
          >
            Trendyol Mağazası
          </a>

          <a
            href={hepsiburada}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-4 text-center font-black transition hover:bg-white/10"
          >
            Hepsiburada Mağazası
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-8 text-center md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Fren sistemi için yedek parça mı arıyorsunuz?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Beylikdüzü ve çevresinden araç bilgilerinizi göndererek fren
            sistemi yedek parçaları hakkında bilgi alabilirsiniz.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-black text-[#04101c]"
          >
            WhatsApp'tan Parça Sor
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 p-7 text-sm leading-7 text-slate-400">
          <strong className="text-slate-200">Bilgilendirme:</strong> Bu sayfa
          fren tamir hizmeti sunulduğu anlamına gelmez. İçerik, fren arızaları
          sonrasında ihtiyaç duyulabilecek yedek parçalar hakkında genel bilgi
          vermek amacıyla hazırlanmıştır. Arıza tespiti, montaj ve güvenlik
          kontrolleri için uygun teknik servis veya uzmana başvurulmalıdır.
        </div>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.47c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
          <path d="M16.03 3C8.85 3 3 8.8 3 15.93c0 2.28.6 4.5 1.74 6.45L3 29l6.82-1.79a13.08 13.08 0 0 0 6.2 1.58h.01C23.21 28.79 29 23 29 15.93 29 8.8 23.21 3 16.03 3Zm0 23.6a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-4.05 1.06 1.08-3.94-.26-.4a10.68 10.68 0 0 1-1.66-5.63c0-5.93 4.86-10.75 10.84-10.75 5.97 0 10.79 4.82 10.79 10.75 0 5.89-4.82 10.67-10.79 10.67Z" />
        </svg>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#06111f]/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-cyan-400 py-3 text-center font-black text-[#04101c]"
        >
          Fren Parçasını WhatsApp'tan Sor
        </a>
      </div>
    </main>
  );
}
