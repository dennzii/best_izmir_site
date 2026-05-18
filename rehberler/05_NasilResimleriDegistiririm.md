# 🖼️ RESİMLER NASIL DEĞİŞTİRİLİR?

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

---

## 📂 ASSET KLASÖR YAPISI

```
src/assets/
│
├── logo_normal.png          ← Light modda kullanılan logo
├── logo_beyaz.png           ← Dark modda kullanılan logo
│
├── izmir_foto.png           ← Ana sayfa açılış (Welcome) arka plan fotoğrafı
│
├── HomePage/
│   ├── about_foto1.jpg      ← Hakkımızda bölümü 1. resim
│   ├── about_foto2.jpg      ← Hakkımızda bölümü 2. resim (Etkinlikler)
│   ├── about_foto3.jpg      ← Hakkımızda bölümü 3. resim (İletişim)
│   ├── bestMap2.png         ← Light modda BEST haritası (ByNumbers arka planı)
│   └── bestMap3.png         ← Dark modda BEST haritası
│
├── Events/
│   ├── betamam.jpeg         ← beTAMAM etkinlik fotoğrafı
│   ├── mw.png               ← Motivational Weekend fotoğrafı
│   ├── beinci.jpg           ← beİNCI etkinlik fotoğrafı
│   ├── Course.jpeg          ← BEST Courses fotoğrafı
│   └── Logos/
│       ├── BEST Courses Logo.png
│       └── Ebec.svg
│
├── teamPhotos/              ← Ekip fotoğrafları (detay: NEYAPCAM_NEYAPCAM.md)
│   ├── Board/
│   ├── Coords/
│   └── Supervisors/
│
└── Partnerler Logo/         ← Sponsor logoları (detay: NasılSponsorEklerim.md)
```

---

## 🔄 LOGO DEĞİŞTİRME

Kullanılan iki logo var: biri dark modda, biri light modda gösteriliyor.

**Dosyalar:**
- `src/assets/logo_normal.png` → Light modda
- `src/assets/logo_beyaz.png` → Dark modda

**Yapman gereken:** Aynı isimle üzerine kaydet. Başka hiçbir şeye dokunma.

> Logo boyutu: Yükseklik yaklaşık 100–130px'e göre optimize et. PNG formatını koru.

---

## 🌆 ANA SAYFA AÇILIŞ FOTOĞRAFI

Dosya: `src/assets/izmir_foto.png`

Üzerine aynı isimle kaydet. Geniş yatay bir fotoğraf olmalı (en az 1920×1080px önerilir) — tam ekran kaplıyor.

---

## 📸 HAKKIMIZDA BÖLÜMÜ RESİMLERİ

Ana sayfada ve Hakkımızda sayfasında üç resim dönüşümlü gösteriliyor:

| Dosya | Hangi kart |
|---|---|
| `HomePage/about_foto1.jpg` | "Hakkımızda" kartı |
| `HomePage/about_foto2.jpg` | "Etkinlikler" kartı |
| `HomePage/about_foto3.jpg` | "İletişim" kartı |

Üzerine aynı isimle kaydet. Format: `.jpg`

> Boyut önerisi: 16:9 veya 4:3 oran, min. 800×600px.

---

## 🗺️ BEST HARİTASI

Ana sayfada "Rakamlarla BEST" bölümünün arkasında yer alıyor:

- `HomePage/bestMap2.png` → Light modda
- `HomePage/bestMap3.png` → Dark modda

---

## 📅 ETKİNLİK FOTOĞRAFLARI

Her etkinliğin kartında bir fotoğraf var. Bunlar `src/data/EventsData.js` dosyasından yönetiliyor:

```js
import betamamImg from "../assets/Events/betamam.jpeg";

{ id: 1, image: betamamImg, ... }
```

**Fotoğrafı değiştirmek için:**
1. Yeni fotoğrafı `src/assets/Events/` klasörüne koy
2. `EventsData.js`'te ilgili import satırını güncelle

---

## ⚠️ DİKKAT EDİLECEKLER

| Durum | Ne yapmalısın |
|---|---|
| Aynı isimle üstüne kaydediyorum | ✅ Import satırına dokunmana gerek yok |
| Dosya adını değiştirdim | ⚠️ İlgili data/component dosyasındaki import'u güncelle |
| Resim görünmüyor | Import yolu veya dosya adı uyuşmuyor — `F12` konsoluna bak |
| Resim çok yavaş yükleniyor | Dosya boyutunu küçült — [squoosh.app](https://squoosh.app) ücretsiz kullanılabilir |

---

Hepsi bu. Doğru klasör, doğru isim. 🫡
