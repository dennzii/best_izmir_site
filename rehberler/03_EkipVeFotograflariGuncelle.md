# 🚨 YENİ IT COORD OLDUN, PANİK YAPMA

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç, çok daha rahat okursun.

Tamam, derin bir nefes al. Evet, şu an baktığın şey bir web sitesinin kaynak kodu.
Evet, senden önce biri bunu yazdı. Evet, şimdi senin sorumluluğun.
**Hayır, dünya sona ermeyecek.**

Bu dosyayı oku, adımları takip et, her şey yoluna girecek.
Eğer yine de bir şeyler patlarsa — zaten IT Coord'sun, çözmek senin işin. Hayırlı olsun.

---

## 📋 NELER DEĞİŞECEK, NE KADAR ZOR?

Her dönem başında yapman gereken tek şey şu:

| Görev | Zorluk | Dosya |
|---|---|---|
| Fotoğrafları değiştir | ⭐ Çok kolay | `src/assets/teamPhotos/` |
| İsimleri güncelle | ⭐ Çok kolay | `src/data/TeamMembers.jsx` |
| Görev/rol metnini güncelle | ⭐⭐ Kolay | `public/locales/tr/translation.json` + `en/translation.json` |
| Yeni üye ekle / çıkar | ⭐⭐ Kolay | Aşağıyı oku |

---

## 📸 ADIM 1 — FOTOĞRAFLARI DEĞİŞTİR

Fotoğraflar üç klasörde tutuluyor:

```
src/assets/teamPhotos/
├── Board/          ← Yönetim Kurulu (Başkan, VPP, VPIS, Sayman, Sekreter)
│   ├── Baskan.jpeg
│   ├── VPP.jpeg
│   ├── VPIS.jpeg
│   ├── Sayman.jpeg
│   └── Sekreter.jpeg
│
├── Coords/         ← Koordinatörler
│   ├── IT.jpeg
│   ├── PR.jpeg
│   ├── Design.jpeg
│   ├── Activity.jpeg
│   └── FR.jpeg
│
└── Supervisors/    ← Denetleme Kurulu
    ├── SpvBaskan.jpeg
    ├── Spv1.jpeg
    └── Spv2.jpeg
```

**Yapman gereken:**
1. Yeni kişinin fotoğrafını hazırla (kare veya dikey, min. 400×500px önerilir)
2. **Aynı isimle** eski fotoğrafın üzerine kaydet (örn. `IT.jpeg` → `IT.jpeg`)
3. Bitti. Başka hiçbir dosyaya dokunmana gerek yok.

> ⚠️ Fotoğraf formatı `.jpeg` olmalı. `.jpg` de çalışır ama tutarlılık için `.jpeg` kullan.
> Dosya ismini değiştirirsen `TeamMembers.jsx`'i de güncellemeyi unutma (Adım 2).

---

## ✏️ ADIM 2 — İSİMLERİ VE KARTLARI GÜNCELLE

Dosya: `src/data/TeamMembers.jsx`

Bu dosyada üç dizi var:
- `boardMembersData` → Yönetim Kurulu kartları
- `coordinatorsData` → Koordinatör kartları
- `supervisorsData` → Denetleme Kurulu kartları

Her üye şöyle görünür:

```js
{
  id: 6,
  isim: "Şemal Çiftçi",                     // ← Buraya yeni ismi yaz
  gorevKey: "teamMembers.itCoordRole",       // ← Görev anahtarı (genelde değişmez)
  foto: itCoordFoto,                         // ← Fotoğraf değişkeni (üstteki import'a bağlı)
  variant: "gold",                           // ← Kart rengi: "gold" | "blue" | "red" | "green"
  yaziKey: "teamMembers.itCoordQuote",       // ← Alıntı anahtarı (genelde değişmez)
},
```

**Yapman gereken:**
1. `isim` alanını güncelle → yeni IT Coord'un adı
2. Fotoğraf dosya adını değiştirdiysen dosyanın en üstündeki import satırını da güncelle:
   ```js
   import itCoordFoto from "../assets/teamPhotos/Coords/IT.jpeg";
   //                                                    ↑ burası
   ```

### 🎨 Variant (kart rengi) seçenekleri:

| Variant | Renk | Ne zaman kullanılır |
|---|---|---|
| `"gold"` | Altın / Amber | Başkan, önemli roller |
| `"blue"` | Mavi / Sky | Genel kullanım |
| `"green"` | Yeşil / Emerald | Genel kullanım |
| `"red"` | Kırmızı / Rose | Genel kullanım |

---

## 💬 ADIM 3 — GÖREV UNVANI VE ALINTIYI GÜNCELLE

Roller ve alıntılar çeviri dosyalarında tutuluyor.
Çeviri sistemi hakkında detaylı bilgi için: **`TURKCE_INGILIZCEYAPTIM_NE_OLDU.md`**

Kısaca yapman gereken:

`public/locales/tr/translation.json` dosyasında `teamMembers` bölümünü bul:

```json
"teamMembers": {
    "itCoordRole": "IT Coord",
    "itCoordQuote": "Sunucularımız ve kodlarımız asla yorulmaz.",
    ...
}
```

1. `itCoordQuote` → yeni IT Coord'un alıntısını yaz
2. **`en/translation.json`'da da** aynı şeyi yap (İngilizce versiyonu)

> Anahtarı (`itCoordRole`, `itCoordQuote`) değiştirmene gerek yok — sadece tırnak içindeki değeri güncelle.

---

## ➕ YENİ ÜYE EKLEMEK

Diyelim ki ekibe yeni bir koordinatör eklendi. Yapman gerekenler:

**1. Fotoğrafı koy:**
```
src/assets/teamPhotos/Coords/YeniKisi.jpeg
```

**2. `TeamMembers.jsx` dosyasına import ekle (en üste):**
```js
import yeniKisiFoto from "../assets/teamPhotos/Coords/YeniKisi.jpeg";
```

**3. Aynı dosyada `coordinatorsData` dizisine yeni obje ekle:**
```js
{
  id: 99,                                      // ← Kullanılmayan bir sayı yaz
  isim: "Yeni Kişi Adı",
  gorevKey: "teamMembers.yeniKisiRole",
  foto: yeniKisiFoto,
  variant: "blue",
  yaziKey: "teamMembers.yeniKisiQuote",
},
```

**4. Her iki `translation.json` dosyasına çeviriyi ekle:**
```json
"yeniKisiRole": "Görev Adı",
"yeniKisiQuote": "Kişinin söyleyeceği şey.",
```

---

## ➖ MEVCUT ÜYEYİ ÇIKARMAK

1. `TeamMembers.jsx`'te ilgili objeyi diziden sil
2. En üstteki import satırını sil
3. `translation.json` dosyalarındaki ilgili `Role` ve `Quote` satırlarını sil (opsiyonel — bıraksan da çalışır)

---

## 🔢 "RAKAMLARLA BEST" SAYILARINI DEĞİŞTİRMEK

Anasayfadaki istatistik kutularını güncellemek için:

Dosya: `src/data/ByNumbersData.js`

Oradaki `number` değerlerini güncelle.

---

## ❓ BİR ŞEY PATLADI, NE YAPACAĞIM?

Tarayıcıda `F12` → Console sekmesi. Hata mesajı sana tam olarak neyin yanlış gittiğini söyler.

| Belirti | Sebebi |
|---|---|
| Kart görünmüyor | `id` başka bir üyeyle çakışıyor |
| Fotoğraf yüklenmiyor | Import yolu yanlış veya dosya adı uyuşmuyor |
| Kartta metin yok | `translation.json`'a eklemeyi unuttun |
| Sayfa açılmıyor | JSX syntax hatası — son eklediğin satırdaki virgül/tırnağı kontrol et |

---

Hepsi bu. Gördüğün gibi aslında çok basit.
Senden önce de biri yaptı, sen de yaparsın. **Başarılar! 🫡**
