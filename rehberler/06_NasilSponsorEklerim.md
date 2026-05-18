# 🤝 SPONSOR / PARTNER NASIL EKLENİR?

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

Sponsor eklemek sitenin iki farklı yerine dokunuyor:
- **Ana sayfa** — kayan logo bandı (`HomeSponsors`)
- **Partnerler sayfası** — logo grid'i (`Partners`)

Her ikisi de aynı logo listesini kullanıyor, dolayısıyla aynı adımları tekrarlaman gerekiyor.

---

## 📂 LOGO NEREYE KONULUR?

```
src/assets/Partnerler Logo/
├── Microsoft.webp
├── Bosch.webp
├── Vestel.webp
└── ... (diğerleri)
```

Yeni sponsorun logosunu buraya koy.

**Format önerisi:** `.webp` (diğerleriyle tutarlı olur ve dosya boyutu küçük olur)
`.png` veya `.svg` de çalışır.

**Boyut önerisi:** Genişlik 200–400px yeterli. Logo şeffaf arka planlı olmalı (beyaz arka plan varsa `webp`/`png` ile şeffaf yap).

---

## ➕ ANA SAYFAYA EKLEME

Dosya: `src/sections/HomeSponsors.jsx`

### Adım 1 — Import ekle (dosyanın en üstüne):

```js
import yeniSponsorLogo from '../assets/Partnerler Logo/YeniSponsor.webp';
```

### Adım 2 — `logos` dizisine ekle:

```js
const logos = [
  { src: microsoftLogo,   alt: 'Microsoft' },
  // ... diğerleri
  { src: yeniSponsorLogo, alt: 'Yeni Sponsor Adı' },  // ← buraya ekle
];
```

> `alt` alanı ekran okuyucular ve SEO için önemli — sponsor adını yaz.

---

## ➕ PARTNERLER SAYFASINA EKLEME

Dosya: `src/pages/Partners.jsx`

Aynı iki adımı bu dosyada da tekrarla:

### Adım 1 — Import ekle:

```js
import yeniSponsorLogo from '../assets/Partnerler Logo/YeniSponsor.webp';
```

### Adım 2 — `partnerLogos` dizisine ekle:

```js
const partnerLogos = [
  { src: microsoftLogo,   alt: 'Microsoft' },
  // ... diğerleri
  { src: yeniSponsorLogo, alt: 'Yeni Sponsor Adı' },  // ← buraya ekle
];
```

---

## ➖ SPONSOR ÇIKARMAK

1. İlgili `{ src: ..., alt: ... }` satırını her iki dosyadan sil
2. Dosyanın üstündeki `import` satırını sil
3. Logoyu `src/assets/Partnerler Logo/` klasöründen sil (opsiyonel)

---

## ℹ️ SPONSOR METNİNİ GÜNCELLEMEK

Partnerler sayfasındaki "Neden Bize Sponsor Olmalısınız?" kutusunun metni çeviri dosyasında:

`public/locales/tr/translation.json` → `partners.sponsorText`
`public/locales/en/translation.json` → `partners.sponsorText`

Detaylı bilgi için: **`TURKCE_INGILIZCEYAPTIM_NE_OLDU.md`**

---

Hepsi bu. İki dosya, iki dizi, bir import. 🫡
