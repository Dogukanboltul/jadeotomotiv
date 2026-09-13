import Link from "next/link";

export const metadata = {
  title: "Beylikdüzü Fren Balatası Fiyatları 2026 | Jade Otomotiv",
  description:
    "Beylikdüzü fren balatası fiyatları hakkında güncel rehber. Fren balatası fiyatlarını etkileyen araç, marka, ön-arka takım ve disk değişimi gibi faktörleri öğrenin.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-fren-balatasi-fiyatlari",
  },
};

const factors = [
  ["01", "Araç Marka ve Modeli", "Fren balatasının ölçüsü ve kullanılan fren sistemi araçtan araca değişebilir."],
  ["02", "Ön veya Arka Balata", "Ön ve arka fren balataları farklı ürünlerdir ve fiyatları aynı olmayabilir."],
  ["03", "Ürün Markası", "Orijinal, OEM kalitesinde veya muadil ürün seçenekleri farklı fiyat seviyelerine sahip olabilir."],
  ["04", "Disk Durumu", "Disk aşınmışsa yalnızca balata değişimi yerine disk işlemi de gerekebilir."],
  ["05", "Sensör ve Ek Parçalar", "Bazı araçlarda balata aşınma sensörü veya ilave parçalar maliyeti etkileyebilir."],
  ["06", "İşçilik", "Değişim işleminin kapsamı ve servis işçiliği toplam maliyeti değiştirebilir."],
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050b14",
        color: "#f8fafc",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          height: "5px",
          background: "linear-gradient(90deg,#22d3ee,#3b82f6,#22d3ee)",
        }}
      />

      <article
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >
        {/* HERO */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "72px 38px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg,#102c43 0%,#07131f 60%,#050d16 100%)",
            border: "1px solid #193b55",
            boxShadow: "0 30px 80px rgba(0,0,0,.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-100px",
              top: "-130px",
              width: "330px",
              height: "330px",
              borderRadius: "50%",
              background: "rgba(34,211,238,.11)",
              filter: "blur(12px)",
            }}
          />

          <div
            style={{
              position: "relative",
              color: "#67e8f9",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "1.6px",
              marginBottom: "18px",
            }}
          >
            JADE OTOMOTİV • 2026 FİYAT REHBERİ
          </div>

          <h1
            style={{
              position: "relative",
              fontSize: "clamp(40px,7vw,70px)",
              lineHeight: 1.02,
              letterSpacing: "-2.7px",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Beylikdüzü Fren
            <br />
            <span style={{ color: "#22d3ee" }}>
              Balatası Fiyatları
            </span>
          </h1>

          <p
            style={{
              position: "relative",
              maxWidth: "760px",
              marginTop: "28px",
              color: "#bac8d7",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            Beylikdüzü'nde fren balatası arıyorsanız fiyatı belirleyen
            faktörleri bilmek doğru ürünü seçmenizi kolaylaştırır. Araç
            marka-modeli, ön veya arka balata, ürün markası ve disk durumu
            fiyat araştırmasında önemlidir.
          </p>

          <div
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "25px",
            }}
          >
            {["Fren Balatası", "Ön Balata", "Arka Balata", "Fren Diski"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "999px",
                    background: "rgba(34,211,238,.08)",
                    border: "1px solid rgba(103,232,249,.22)",
                    color: "#b9f4fc",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        {/* PRICE MESSAGE */}
        <section
          style={{
            marginTop: "20px",
            padding: "28px",
            borderRadius: "22px",
            background: "#0a1826",
            border: "1px solid #173650",
          }}
        >
          <div
            style={{
              color: "#22d3ee",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            FİYAT KONUSUNDA ÖNEMLİ
          </div>

          <h2
            style={{
              fontSize: "30px",
              margin: "9px 0 10px",
            }}
          >
            Fren balatasında tek bir fiyat yoktur
          </h2>

          <p
            style={{
              color: "#aebdcd",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Fren balatası fiyatı aracın marka, model ve fren sistemine göre
            değişebilir. Ayrıca ön veya arka aks, ürün markası ve diskin
            mevcut durumu toplam maliyeti etkileyebilir.
          </p>
        </section>

        {/* CONTENT */}
        <section
          style={{
            marginTop: "38px",
            padding: "36px",
            borderRadius: "25px",
            background: "#091522",
            border: "1px solid #142d43",
          }}
        >
          <div
            style={{
              color: "#22d3ee",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            FREN BALATASI FİYATINI NE BELİRLER?
          </div>

          <h2
            style={{
              fontSize: "35px",
              margin: "10px 0 18px",
            }}
          >
            Beylikdüzü fren balatası fiyatları neden değişiyor?
          </h2>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Fren balatası, araç güvenliği açısından kritik bir parçadır.
            Fiyat araştırması yapılırken yalnızca ürünün fiyatına değil,
            aracın gerektirdiği doğru parçaya da dikkat edilmelidir.
          </p>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Aynı marka araçta dahi motor seçeneği, model yılı veya fren
            sistemi nedeniyle farklı balata seçenekleri bulunabilir. Bu
            nedenle fiyat almak için araç bilgilerinin paylaşılması daha
            sağlıklı sonuç verir.
          </p>
        </section>

        {/* FACTORS */}
        <section style={{ marginTop: "42px" }}>
          <div
            style={{
              color: "#22d3ee",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            FİYAT ANALİZİ
          </div>

          <h2
            style={{
              fontSize: "36px",
              margin: "8px 0 24px",
            }}
          >
            Fiyatı etkileyen 6 temel faktör
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "17px",
            }}
          >
            {factors.map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  padding: "28px",
                  minHeight: "175px",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(145deg,#0d2033,#07121e)",
                  border: "1px solid #173650",
                }}
              >
                <div
                  style={{
                    color: "#22d3ee",
                    fontSize: "13px",
                    fontWeight: 900,
                    marginBottom: "18px",
                  }}
                >
                  {number}
                </div>

                <h3
                  style={{
                    fontSize: "21px",
                    margin: "0 0 10px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: "#8fa1b5",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BEFORE BUYING */}
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
          <div
            style={{
              color: "#67e8f9",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            SATIN ALMADAN ÖNCE
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "10px 0 18px",
            }}
          >
            Fren balatası alırken nelere bakılmalı?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              "Araç marka ve modeli",
              "Model yılı",
              "Motor seçeneği",
              "Ön veya arka balata",
              "Ürün markası",
              "Diskin mevcut durumu",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  padding: "17px",
                  borderRadius: "15px",
                  background: "#0a1b2a",
                  border: "1px solid #173650",
                  color: "#c9d8e5",
                }}
              >
                <span
                  style={{
                    color: "#22d3ee",
                    fontWeight: 900,
                    marginRight: "8px",
                  }}
                >
                  {index + 1}.
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "40px",
            padding: "48px 30px",
            borderRadius: "28px",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#12394d,#092031)",
            border: "1px solid rgba(34,211,238,.25)",
          }}
        >
          <div
            style={{
              color: "#67e8f9",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            JADE OTOMOTİV
          </div>

          <h2
            style={{
              fontSize: "36px",
              margin: "10px 0",
            }}
          >
            Aracınıza uygun fren balatasını öğrenin.
          </h2>

          <p
            style={{
              color: "#b9c7d6",
              maxWidth: "680px",
              margin: "0 auto 25px",
              lineHeight: 1.75,
            }}
          >
            Araç marka, model ve motor bilgilerinizi gönderin. Uygun fren
            balatası ve fiyat bilgisi için iletişime geçin.
          </p>

          <a
            href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20fren%20balatas%C4%B1%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "15px 25px",
              borderRadius: "14px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            WhatsApp'tan Fiyat Sor
          </a>
        </section>

        {/* INTERNAL LINKS */}
        <section style={{ marginTop: "38px" }}>
          <h2 style={{ fontSize: "30px" }}>İlgili Sayfalar</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "12px",
            }}
          >
            {[
              [
                "/blog/beylikduzu-fren-balatasi",
                "Beylikdüzü Fren Balatası",
              ],
              [
                "/blog/fren-balatasi-fiyatlari",
                "Fren Balatası Fiyatları",
              ],
              [
                "/blog/fren-balatasi-nedir",
                "Fren Balatası Nedir?",
              ],
              [
                "/blog/fren-balatasi-degisimi",
                "Fren Balatası Değişimi",
              ],
              [
                "/beylikduzu-oto-yedek-parca",
                "Beylikdüzü Oto Yedek Parça",
              ],
              [
                "/blog/beylikduzu-oto-yedek-parca-fiyatlari",
                "Beylikdüzü Oto Yedek Parça Fiyatları",
              ],
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
      </article>

      {/* SABİT WHATSAPP */}
      <a
        href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20fren%20balatas%C4%B1%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
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
