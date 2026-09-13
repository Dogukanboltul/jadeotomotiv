import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Büyükçekmece Oto Yedek Parça | Jade Otomotiv",
  description:
    "Büyükçekmece oto yedek parça ihtiyaçlarınız için fren balatası, filtre, debriyaj, süspansiyon, motor ve elektrik parçaları. Jade Otomotiv.",
  alternates: {
    canonical: "https://frenbalataci.com.tr/buyukcekmece-oto-yedek-parca",
  },
};

const whatsapp =
  "https://wa.me/905435571529?text=Merhaba%2C%20B%C3%BCy%C3%BCk%C3%A7ekmece%20oto%20yedek%20par%C3%A7a%20i%C3%A7in%20bilgi%20almak%20istiyorum.";

export default function BuyukcekmeceOtoYedekParca() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Jade Otomotiv
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Büyükçekmece Oto Yedek Parça
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Büyükçekmece ve çevresinde otomobil ve ticari araçlar için
              kaliteli oto yedek parça seçenekleri sunuyoruz. Fren balatası,
              filtreler, debriyaj, süspansiyon, motor ve elektrik parçaları
              için Jade Otomotiv ile iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L.15 24l6.38-1.67a11.83 11.83 0 0 0 5.55 1.38h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.39ZM12.09 21.6h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.79 9.79 0 0 1-1.5-5.11c0-5.42 4.42-9.84 9.85-9.84 2.63 0 5.1 1.03 6.96 2.9a9.8 9.8 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                WhatsApp'tan Bilgi Al
              </a>

              <a
                href="tel:+905435571529"
                className="inline-flex items-center rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                0543 557 15 29
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Büyükçekmece Oto Yedek Parça Çeşitleri
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          Aracınızın bakım ve onarım ihtiyaçlarına uygun farklı yedek parça
          grupları için Jade Otomotiv üzerinden bilgi ve fiyat alabilirsiniz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Fren Sistemleri", "Fren balatası, disk ve fren sistemi parçaları."],
            ["Filtreler", "Yağ, hava, polen ve yakıt filtreleri."],
            ["Debriyaj & Şanzıman", "Debriyaj setleri ve ilgili aktarma parçaları."],
            ["Süspansiyon", "Amortisör, salıncak ve süspansiyon parçaları."],
            ["Elektrik & Ateşleme", "Buji, bobin ve çeşitli elektrik parçaları."],
            ["Motor Parçaları", "Bakım ve onarım için çeşitli motor parçaları."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Büyükçekmece ve Çevresine Oto Yedek Parça
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Büyükçekmece, Beylikdüzü, Avcılar ve çevresinde oto yedek parça
            arayan bireysel ve ticari müşteriler için farklı araç gruplarına
            yönelik ürün seçenekleri sunuyoruz. Aracınızın marka, model ve
            parça bilgilerini WhatsApp üzerinden ileterek hızlı şekilde
            bilgi alabilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="/oto-yedek-parca-fiyatlari"
              className="text-cyan-400 hover:underline"
            >
              Oto Yedek Parça Fiyatları
            </a>

            <a
              href="/oto-yedek-parca-tedarikcisi"
              className="text-cyan-400 hover:underline"
            >
              Oto Yedek Parça Tedarikçisi
            </a>

            <a
              href="/otomotiv-yedek-parca"
              className="text-cyan-400 hover:underline"
            >
              Otomotiv Yedek Parça
            </a>

            <a
              href="/beylikduzu-oto-yedek-parca"
              className="text-cyan-400 hover:underline"
            >
              Beylikdüzü Oto Yedek Parça
            </a>

            <a
              href="/avcilar-oto-yedek-parca"
              className="text-cyan-400 hover:underline"
            >
              Avcılar Oto Yedek Parça
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/20 p-8 md:p-12">
          <h2 className="text-3xl font-bold">
            Oto Yedek Parça İçin Bize Ulaşın
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Aradığınız parçanın marka, model ve parça bilgisini WhatsApp
            üzerinden gönderin. Ürün ve fiyat bilgisi için bizimle iletişime
            geçebilirsiniz.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile Jade Otomotiv'e ulaş"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-105 hover:bg-green-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L.15 24l6.38-1.67a11.83 11.83 0 0 0 5.55 1.38h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.39ZM12.09 21.6h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.79 9.79 0 0 1-1.5-5.11c0-5.42 4.42-9.84 9.85-9.84 2.63 0 5.1 1.03 6.96 2.9a9.8 9.8 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}
