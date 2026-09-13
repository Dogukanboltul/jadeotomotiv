import Link from "next/link";

export const metadata = {
  title: "Beylikdüzü Oto Yedek Parça Nereden Alınır? | Jade Otomotiv",
  description:
    "Beylikdüzü oto yedek parça nereden alınır? Doğru parça seçimi, orijinal ve muadil ürünler, fiyat araştırması ve güvenilir tedarik hakkında kapsamlı rehber.",
  alternates: {
    canonical:
      "https://www.frenbalataci.com.tr/blog/beylikduzu-oto-yedek-parca-nereden-alinir",
  },
};

const items = [
  ["01", "Araç Uyumluluğu", "Parçanın marka, model ve motor seçeneğine uygun olması ilk adımdır."],
  ["02", "Ürün Kalitesi", "Orijinal veya kaliteli muadil ürünler arasında doğru seçim yapılmalıdır."],
  ["03", "Parça Markası", "Üretici ve marka bilgisi ürün tercihinde önemli rol oynar."],
  ["04", "Fiyat Karşılaştırması", "Sadece en ucuz ürüne değil, fiyat ve kalite dengesine bakılmalıdır."],
  ["05", "Tedarik Güvencesi", "Doğru ürünün zamanında temin edilebilmesi önemlidir."],
  ["06", "Teknik Bilgi", "Şase veya araç bilgileriyle parça uyumluluğu kontrol edilmelidir."],
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
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "70px 38px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg,#0d263d,#07131f 60%,#06101a)",
            border: "1px solid #183850",
            boxShadow: "0 30px 80px rgba(0,0,0,.35)",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-100px",
              top: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(34,211,238,.10)",
              filter: "blur(8px)",
            }}
          />

          <div
            style={{
              color: "#67e8f9",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "1.5px",
              marginBottom: "18px",
            }}
          >
            JADE OTOMOTİV • BEYLİKDÜZÜ
          </div>

          <h1
            style={{
              position: "relative",
              fontSize: "clamp(40px,7vw,68px)",
              lineHeight: 1.04,
              letterSpacing: "-2.5px",
              margin: 0,
            }}
          >
            Beylikdüzü Oto
            <br />
            <span style={{ color: "#22d3ee" }}>
              Yedek Parça Nereden Alınır?
            </span>
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
            Oto yedek parça alırken doğru ürünün bulunması kadar güvenilir
            tedarik, ürün kalitesi ve araç uyumluluğu da önemlidir. Beylikdüzü
            ve çevresinde yedek parça araştıranlar için temel noktaları
            bu rehberde topladık.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {[
            ["FREN", "Balata • Disk"],
            ["BAKIM", "Filtre • Yağ"],
            ["AKTARMA", "Debriyaj • Şanzıman"],
            ["SÜSPANSİYON", "Amortisör • Ön Takım"],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "22px",
                borderRadius: "18px",
                background: "#0b1725",
                border: "1px solid #142d43",
              }}
            >
              <div
                style={{
                  color: "#22d3ee",
                  fontSize: "12px",
                  fontWeight: 900,
                }}
              >
                {title}
              </div>

              <div
                style={{
                  marginTop: "7px",
                  fontWeight: 700,
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: "35px",
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
            DOĞRU PARÇA NASIL SEÇİLİR?
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "10px 0 18px",
            }}
          >
            Oto yedek parça alırken nelere dikkat edilmeli?
          </h2>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Oto yedek parça satın almadan önce aracın marka, model, model yılı
            ve motor bilgileri kontrol edilmelidir. Bazı parçalar aynı araç
            ailesinde farklı motor veya donanım seçeneklerine göre değişebilir.
          </p>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Bu nedenle yalnızca parçanın adına bakarak sipariş vermek yerine
            araç bilgileri üzerinden uyumluluğun kontrol edilmesi daha sağlıklı
            bir seçim yapılmasını sağlar.
          </p>
        </section>

        <section style={{ marginTop: "42px" }}>
          <div
            style={{
              color: "#22d3ee",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            SATIN ALMA KONTROL LİSTESİ
          </div>

          <h2
            style={{
              fontSize: "36px",
              margin: "8px 0 24px",
            }}
          >
            Parça seçerken 6 önemli kriter
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "17px",
            }}
          >
            {items.map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  padding: "28px",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(145deg,#0d2033,#07121e)",
                  border: "1px solid #173650",
                }}
              >
                <div
                  style={{
                    color: "#22d3ee",
                    fontWeight: 900,
                    fontSize: "13px",
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
            BEYLİKDÜZÜ YEDEK PARÇA
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "10px 0 15px",
            }}
          >
            Hangi yedek parçalar bulunabilir?
          </h2>

          <p
            style={{
              color: "#c1cedb",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            Fren balatası ve diskten filtrelere, debriyaj parçalarından
            süspansiyon ve motor parçalarına kadar farklı kategorilerde ürün
            araştırılabilir. Parçanın araçla uyumluluğu satın alma öncesinde
            mutlaka kontrol edilmelidir.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "22px",
            }}
          >
            {[
              "Fren Balatası",
              "Fren Diski",
              "Yağ Filtresi",
              "Hava Filtresi",
              "Debriyaj Seti",
              "Amortisör",
              "Salıncak",
              "Motor Parçaları",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#0b1b2b",
                  border: "1px solid #1b3b55",
                  color: "#b9eefa",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            padding: "35px",
            borderRadius: "25px",
            background: "#091522",
            border: "1px solid #142d43",
          }}
        >
          <h2
            style={{
              fontSize: "31px",
              marginTop: 0,
            }}
          >
            Beylikdüzü ve Çevresinde Güvenilir Tedarik
          </h2>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Beylikdüzü ve çevresinde oto yedek parça arayan araç sahipleri,
            ihtiyaç duydukları parçayı araştırırken ürün uyumluluğu ve tedarik
            süresini birlikte değerlendirebilir.
          </p>

          <p
            style={{
              color: "#b9c7d6",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            Jade Otomotiv üzerinden marka, model ve motor bilgilerinizi
            paylaşarak ihtiyacınız olan parça hakkında bilgi alabilirsiniz.
          </p>
        </section>

        <section style={{ marginTop: "35px" }}>
          <h2 style={{ fontSize: "30px" }}>İlgili Rehberler</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "12px",
            }}
          >
            {[
              [
                "/beylikduzu-oto-yedek-parca",
                "Beylikdüzü Oto Yedek Parça",
              ],
              [
                "/blog/beylikduzu-oto-yedek-parca-fiyatlari",
                "Beylikdüzü Oto Yedek Parça Fiyatları",
              ],
              [
                "/blog/beylikduzu-fren-balatasi",
                "Beylikdüzü Fren Balatası",
              ],
              [
                "/oto-yedek-parca-tedarikcisi",
                "Oto Yedek Parça Tedarikçisi",
              ],
              [
                "/oto-yedek-parca-fiyatlari",
                "Oto Yedek Parça Fiyatları",
              ],
              [
                "/buyukcekmece-oto-yedek-parca",
                "Büyükçekmece Oto Yedek Parça",
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
            İhtiyacınız olan parçayı birlikte bulalım.
          </h2>

          <p
            style={{
              color: "#b9c7d6",
              maxWidth: "650px",
              margin: "0 auto 25px",
              lineHeight: 1.7,
            }}
          >
            Araç marka, model ve motor bilgilerinizi WhatsApp üzerinden
            göndererek oto yedek parça hakkında bilgi alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20oto%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
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

      <a
        href="https://wa.me/905435571529?text=Merhaba%2C%20Beylikd%C3%BCz%C3%BC%20oto%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
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
