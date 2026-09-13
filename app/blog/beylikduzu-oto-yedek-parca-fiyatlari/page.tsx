import Link from "next/link";

export const metadata = {
  title: "Beylikdüzü Oto Yedek Parça Fiyatları | 2026 Rehberi",
  description:
    "Beylikdüzü oto yedek parça fiyatları hakkında kapsamlı rehber. Fren balatası, filtre, debriyaj, süspansiyon ve motor parçalarında fiyatları etkileyen faktörleri keşfedin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-oto-yedek-parca-fiyatlari",
  },
};

const cards = [
  ["01", "Fren Sistemleri", "Fren balatası, fren diski ve fren sistemi parçaları."],
  ["02", "Filtreler", "Yağ, hava, polen ve yakıt filtreleri."],
  ["03", "Debriyaj", "Debriyaj seti ve ilgili aktarma parçaları."],
  ["04", "Süspansiyon", "Amortisör, salıncak ve ön takım parçaları."],
  ["05", "Motor Parçaları", "Motor sistemi ve yardımcı ekipmanlar."],
  ["06", "Elektrik", "Ateşleme ve elektrik sistemi parçaları."],
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050b14",
        color: "#f8fafc",
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          height: "5px",
          background: "linear-gradient(90deg,#22d3ee,#3b82f6,#22d3ee)",
        }}
      />

      <article style={{ maxWidth: "1080px", margin: "0 auto", padding: "30px 20px" }}>

        {/* HERO */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "70px 38px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg,#0b2035 0%,#07121f 55%,#06101a 100%)",
            border: "1px solid #16344d",
            boxShadow: "0 30px 80px rgba(0,0,0,.35)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              right: "-100px",
              top: "-120px",
              borderRadius: "50%",
              background: "rgba(34,211,238,.10)",
              filter: "blur(10px)",
            }}
          />

          <div
            style={{
              color: "#67e8f9",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1.5px",
              marginBottom: "18px",
            }}
          >
            JADE OTOMOTİV • 2026 REHBERİ
          </div>

          <h1
            style={{
              position: "relative",
              fontSize: "clamp(38px,7vw,70px)",
              lineHeight: 1.03,
              letterSpacing: "-2.5px",
              margin: 0,
              maxWidth: "850px",
            }}
          >
            Beylikdüzü Oto
            <br />
            <span style={{ color: "#22d3ee" }}>Yedek Parça Fiyatları</span>
          </h1>

          <p
            style={{
              position: "relative",
              maxWidth: "760px",
              marginTop: "28px",
              color: "#b9c7d6",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            Beylikdüzü'nde oto yedek parça arıyorsanız fiyat kadar doğru ürün,
            araç uyumluluğu ve güvenilir tedarik de önemlidir. Bu rehberde
            temel yedek parça gruplarını ve fiyatları etkileyen faktörleri
            bulabilirsiniz.
          </p>
        </section>

        {/* QUICK INFO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {[
            ["Fren", "Balata & Disk"],
            ["Filtre", "Bakım Parçaları"],
            ["Debriyaj", "Aktarma Sistemi"],
            ["Süspansiyon", "Ön Takım"],
          ].map(([a, b]) => (
            <div
              key={a}
              style={{
                padding: "22px",
                borderRadius: "18px",
                background: "#0b1725",
                border: "1px solid #142d43",
              }}
            >
              <div style={{ color: "#22d3ee", fontSize: "13px", fontWeight: 800 }}>
                {a}
              </div>
              <div style={{ marginTop: "5px", fontWeight: 700 }}>{b}</div>
            </div>
          ))}
        </section>

        {/* CONTENT */}
        <section
          style={{
            marginTop: "35px",
            padding: "35px",
            borderRadius: "25px",
            background: "#091522",
            border: "1px solid #142d43",
          }}
        >
          <div style={{ color: "#22d3ee", fontWeight: 800, fontSize: "13px" }}>
            FİYATLARI NE BELİRLER?
          </div>

          <h2 style={{ fontSize: "34px", marginTop: "10px" }}>
            Oto yedek parça fiyatları neden değişir?
          </h2>

          <p style={{ color: "#b9c7d6", fontSize: "17px", lineHeight: 1.85 }}>
            Oto yedek parça fiyatları aracın marka ve modeline, motor seçeneğine,
            parçanın kullanım alanına ve tercih edilen ürün markasına göre
            değişebilir.
          </p>

          <p style={{ color: "#b9c7d6", fontSize: "17px", lineHeight: 1.85 }}>
            Bu nedenle Beylikdüzü oto yedek parça fiyatları araştırılırken
            yalnızca en düşük fiyatı değerlendirmek yerine aracınıza uygun,
            doğru parçayı seçmek önemlidir.
          </p>
        </section>

        {/* CARDS */}
        <section style={{ marginTop: "40px" }}>
          <div style={{ marginBottom: "22px" }}>
            <div style={{ color: "#22d3ee", fontSize: "13px", fontWeight: 800 }}>
              PARÇA KATEGORİLERİ
            </div>
            <h2 style={{ fontSize: "36px", margin: "8px 0 0" }}>
              Hangi parçalar bulunur?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "17px",
            }}
          >
            {cards.map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  padding: "28px",
                  minHeight: "150px",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(145deg,#0d2033,#07121e)",
                  border: "1px solid #173650",
                  transition: "transform .2s",
                }}
              >
                <div
                  style={{
                    color: "#22d3ee",
                    fontSize: "13px",
                    fontWeight: 900,
                    marginBottom: "20px",
                  }}
                >
                  {number}
                </div>

                <h3 style={{ fontSize: "21px", margin: "0 0 9px" }}>
                  {title}
                </h3>

                <p style={{ color: "#8fa1b5", margin: 0, lineHeight: 1.6 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FREN SECTION */}
        <section
          style={{
            marginTop: "40px",
            padding: "38px",
            borderRadius: "25px",
            background:
              "linear-gradient(135deg,#102d40,#081725)",
            border: "1px solid rgba(34,211,238,.22)",
          }}
        >
          <div style={{ color: "#67e8f9", fontSize: "13px", fontWeight: 800 }}>
            ÖNE ÇIKAN PARÇA
          </div>

          <h2 style={{ fontSize: "34px", margin: "10px 0 15px" }}>
            Beylikdüzü Fren Balatası
          </h2>

          <p style={{ color: "#c1cedb", fontSize: "17px", lineHeight: 1.8 }}>
            Fren balatası, araç güvenliği açısından kritik parçalardan biridir.
            Fiyat araştırmasında aracın marka, model ve fren sistemine uygun
            ürünün belirlenmesi gerekir.
          </p>

          <Link
            href="/blog/beylikduzu-fren-balatasi"
            style={{
              display: "inline-block",
              marginTop: "12px",
              padding: "14px 20px",
              borderRadius: "12px",
              background: "#22d3ee",
              color: "#031018",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Fren Balatası Rehberine Git →
          </Link>
        </section>

        {/* LOCAL SEO */}
        <section
          style={{
            marginTop: "30px",
            padding: "35px",
            borderRadius: "25px",
            background: "#091522",
            border: "1px solid #142d43",
          }}
        >
          <h2 style={{ fontSize: "31px", marginTop: 0 }}>
            Beylikdüzü ve Çevresinde Oto Yedek Parça
          </h2>

          <p style={{ color: "#b9c7d6", fontSize: "17px", lineHeight: 1.85 }}>
            Beylikdüzü'nde oto yedek parça arayanlar için doğru ürün seçimi
            kadar hızlı ve güvenilir tedarik de önemlidir. Beylikdüzü,
            Büyükçekmece, Avcılar ve çevresindeki araç sahipleri fren,
            filtre, debriyaj, süspansiyon, motor ve elektrik grubu parçaları
            için ürün araştırması yapabilir.
          </p>

          <p style={{ color: "#b9c7d6", fontSize: "17px", lineHeight: 1.85 }}>
            Jade Otomotiv, araç marka ve model bilgileri üzerinden ihtiyaç
            duyulan oto yedek parçalar konusunda bilgi ve tedarik desteği
            sunmaktadır.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section style={{ marginTop: "30px" }}>
          <h2 style={{ fontSize: "30px" }}>İlgili Sayfalar</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "12px",
            }}
          >
            {[
              ["/beylikduzu-oto-yedek-parca", "Beylikdüzü Oto Yedek Parça"],
              ["/oto-yedek-parca-fiyatlari", "Oto Yedek Parça Fiyatları"],
              ["/oto-yedek-parca-tedarikcisi", "Oto Yedek Parça Tedarikçisi"],
              ["/otomotiv-yedek-parca", "Otomotiv Yedek Parça"],
              ["/avcilar-oto-yedek-parca", "Avcılar Oto Yedek Parça"],
              ["/buyukcekmece-oto-yedek-parca", "Büyükçekmece Oto Yedek Parça"],
            ].map(([href, text]) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  background: "#0b1b2b",
                  border: "1px solid #173650",
                  color: "#67e8f9",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {text} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "40px",
            padding: "45px 30px",
            borderRadius: "28px",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#12394d,#092031)",
            border: "1px solid rgba(34,211,238,.25)",
          }}
        >
          <div style={{ color: "#67e8f9", fontSize: "13px", fontWeight: 800 }}>
            JADE OTOMOTİV
          </div>

          <h2 style={{ fontSize: "36px", margin: "10px 0" }}>
            Aracınıza uygun parçayı bulun.
          </h2>

          <p style={{ color: "#b9c7d6", maxWidth: "650px", margin: "0 auto 25px" }}>
            Marka, model ve motor bilgilerinizi WhatsApp üzerinden göndererek
            oto yedek parça hakkında bilgi alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20oto%20yedek%20par%C3%A7a%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "15px 24px",
              borderRadius: "14px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            WhatsApp'tan Bilgi Al
          </a>
        </section>
      </article>

      {/* SABİT WHATSAPP - SOL ALT */}
      <a
        href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20oto%20yedek%20par%C3%A7a%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          left: "22px",
          bottom: "22px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
          boxShadow: "0 8px 28px rgba(0,0,0,.45)",
          border: "2px solid rgba(255,255,255,.15)",
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.86-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Z"
            fill="white"
          />
          <path
            d="M21.65 18.45c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.21.31-.8 1.01-.98 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.21 0-.54.08-.83.39-.28.31-1.08 1.06-1.08 2.59s1.11 3.01 1.27 3.22c.16.21 2.18 3.33 5.28 4.67.74.32 1.32.51 1.77.65.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.59-.36Z"
            fill="#25D366"
          />
        </svg>
      </a>
    </main>
  );
}
