# BEST İzmir — Resmi Web Sitesi

> Board of European Students of Technology — İzmir Yerel Grubu

**React · Vite · Tailwind CSS · Framer Motion · i18next**

---

## Proje Hakkında

BEST İzmir'in resmi tanıtım sitesidir. Öğrenci dostu bir teknoloji yığını kullanılarak geliştirilmiş; **içeriklerin kod bilmeden güncellenebilmesi** öncelikli tasarım hedefi olmuştur.

### Özellikler

- **Çift dil desteği** — Türkçe / İngilizce, çeviri dosyalarından yönetilir
- **Dark / Light mod** — kullanıcı tercihi tarayıcıda saklanır
- **Mobil uyumlu** — tüm ekran boyutlarında responsive tasarım
- **Parallax dekorasyon** — scroll ile hareket eden bulut ve hilal/güneş animasyonları
- **Ekip kartları** — hover glow efektli, kart rengi üyeye özel
- **FAQ bölümü** — accordion animasyonlu sık sorulan sorular
- **Sponsorlar carousel** — otomatik kayan logo bandı
- **Rakamlarla BEST** — istatistik kartları

---

## Hızlı Başlangıç

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirici sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

---

## Teknoloji Yığını

| Katman    | Teknoloji                      |
| --------- | ------------------------------ |
| UI        | React 18 + Vite                |
| Stil      | Tailwind CSS (darkMode: class) |
| Animasyon | Framer Motion                  |
| Çeviri    | i18next + react-i18next        |
| İkonlar   | react-icons                    |
| Routing   | React Router v6                |

---

## İçerik Güncelleme Rehberleri

Dönem başı güncellemeler için ayrıntılı rehberler `rehberler/` klasöründe önem sırasına göre numaralandırılmış olarak bulunur:

| #   | Rehber                                                                     | İçerik                                                |
| --- | -------------------------------------------------------------------------- | ----------------------------------------------------- |
| 01  | [KesinlikleYap](./rehberler/01_KesinlikleYap.md)                           | Dönem başı kontrol listesi + geliştirme önerileri     |
| 02  | [KesinlikleYapma](./rehberler/02_KesinlikleYapma.md)                       | Yapılmaması gerekenler (öğrenilmiş dersler)           |
| 03  | [EkipVeFotograflariGuncelle](./rehberler/03_EkipVeFotograflariGuncelle.md) | Ekip fotoğrafları ve kart verileri nasıl değiştirilir |
| 04  | [TurkceIngilizceSistemi](./rehberler/04_TurkceIngilizceSistemi.md)         | Çeviri sistemi (i18next) nasıl çalışır                |
| 05  | [NasilResimleriDegistiririm](./rehberler/05_NasilResimleriDegistiririm.md) | Asset klasörü yapısı, resim değiştirme                |
| 06  | [NasilSponsorEklerim](./rehberler/06_NasilSponsorEklerim.md)               | Sponsor / partner logosu ekleme/çıkarma               |
| 07  | [TemaSistemiHakkinda](./rehberler/07_TemaSistemiHakkinda.md)               | Dark/Light tema sistemi                               |
| 08  | [NasilGitKullanirim](./rehberler/08_NasilGitKullanirim.md)                 | Git temelleri (commit, push, branch)                  |
| 09  | [NasilAIKullanirim](./rehberler/09_NasilAIKullanirim.md)                   | LLM ile verimli çalışma                               |

---

## Proje Yapısı

```
best_izmir_site/
├── public/
│   └── locales/
│       ├── tr/translation.json   ← Türkçe metinler
│       └── en/translation.json   ← İngilizce metinler
├── src/
│   ├── assets/                   ← Görseller (logo, ekip fotoğrafları, etkinlik resimleri)
│   ├── Components/               ← Nav, FlipCard, Stars
│   ├── context/                  ← ThemeContext (dark/light mod)
│   ├── data/                     ← TeamMembers, EventsData, ByNumbersData
│   ├── pages/                    ← HomePage, Team, Events, Contact, AboutUs, Partners
│   └── sections/                 ← Welcome, AboutUs, HomeEvents, Footer, ByNumbers...
└── rehberler/                    ← Dönem başı güncelleme rehberleri (01–09)
```

---

## En Sık Değiştirilen Dosyalar

| Ne değiştirmek istiyorsun         | Hangi dosya                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| Ekip üyeleri, fotoğraflar, sözler | `src/data/TeamMembers.jsx`                                   |
| Sayfadaki metinler                | `public/locales/tr/translation.json` + `en/translation.json` |
| Etkinlikler                       | `src/data/EventsData.js`                                     |
| Rakamlarla BEST istatistikleri    | `src/data/ByNumbersData.js`                                  |
| Sponsor logoları                  | `src/pages/Partners.jsx` + `src/sections/HomeSponsors.jsx`   |
| Logo, arka plan fotoğrafı         | `src/assets/` (aynı isimle üzerine kaydet)                   |

---

## Katkıda Bulunanlar

Bu site **Şemal Çiftçi** ve **Üzeyir Talha Kılıç** tarafından BEST İzmir 2025–2026 dönemi IT Koordinatörlüğü olarak geliştirilmiştir.

Sonraki IT Koordinatörü olarak sana bırakılan notlar için [rehberler/01_KesinlikleYap.md](./rehberler/01_KesinlikleYap.md) dosyasını oku.

---

_Board of European Students of Technology — İzmir · [best-eu.org](https://best-eu.org)_
