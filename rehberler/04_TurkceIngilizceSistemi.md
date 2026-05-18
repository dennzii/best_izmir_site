# 🌍 ÇEVİRİ SİSTEMİ — NE NEREDE, NASIL DEĞİŞİR

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç, çok daha rahat okursun.

Bu dosyayı okumak zorunda kaldıysan ya bir metni güncellemek istiyorsun
ya da sitede Türkçe yazması gereken bir şey İngilizce çıkıyor — ya da tam tersi.
Her iki durumda da doğru yere geldin.

---

## 🧠 SİSTEM NASIL ÇALIŞIYOR?

Site **i18next** adında bir çeviri kütüphanesi kullanıyor.
Mantık şu: **Kodun içinde hiç yazı yok.** Bunun yerine her metin bir **anahtar** ile temsil ediliyor.

Örneğin kodun içinde şu var:
```jsx
<h1>{t("navbar.home")}</h1>
```

Bu `t()` fonksiyonu, aktif dile bakıp ilgili JSON dosyasından `navbar.home` anahtarının değerini bulur ve ekrana yazar.

- Dil **TR** seçiliyse → `"Ana Sayfa"` yazar
- Dil **EN** seçiliyse → `"Home"` yazar

Kullanıcı sağ üstteki **TR / EN** butonuna bastığında dil anında değişir, sayfa yenilenmez.

---

## 📂 DOSYALAR NEREDE?

```
public/
└── locales/
    ├── tr/
    │   └── translation.json   ← Türkçe metinlerin tamamı
    └── en/
        └── translation.json   ← İngilizce metinlerin tamamı
```

> ⚠️ **Her iki dosyayı da güncellemeyi unutma.**
> Sadece birini değiştirirsen diğer dilde eski metin kalır — ya da metin hiç görünmez.

---

## 🗂️ HANGİ BÖLÜM NE İÇİN?

JSON dosyası bölümlere ayrılmış. Her bölüm sitenin bir sayfasına veya bileşenine karşılık gelir:

| JSON Bölümü | Nerede görünür |
|---|---|
| `navbar` | Üst menü linkleri |
| `footer` | Alt bilgi metinleri |
| `welcome` | Ana sayfa açılış ekranı yazıları |
| `aboutUs` | Hakkımızda sayfası ve ana sayfadaki özet kart |
| `events` | Etkinlik kartlarının başlık ve açıklamaları |
| `eventsPage` | Etkinlikler sayfasının başlık / alt başlığı |
| `teamPage` | Ekip sayfasının başlığı ve bölüm isimleri |
| `teamMembers` | Her üyenin görev unvanı ve kart alıntısı |
| `byNumbers` | "Rakamlarla BEST" sayı kartları |
| `partners` | Partnerler sayfası metinleri |
| `faq` | Sık sorulan sorular (Hakkımızda sayfası altında) |
| `contact` | İletişim sayfası ve form etiketleri |

---

## ✏️ BİR METNİ GÜNCELLEME

### Basit değer

Diyelim ki footer'daki adresi değiştirmek istiyorsun.

`public/locales/tr/translation.json` dosyasını aç, `footer` bölümünü bul:

```json
"footer": {
    "address": "Ege Üniversitesi, Mühendislik Fakültesi, Bornova / İzmir"
}
```

Tırnak içindeki değeri istediğin şeyle değiştir.
Sonra **aynı şeyi** `en/translation.json`'da da yap.

### Çok satırlı / paragraflı metin

Bazı metinler `\n` karakteri içerir — bu **satır sonu** demek:

```json
"text1": "Birinci paragraf.\n\nİkinci paragraf."
```

- `\n\n` → boş satır bırakarak yeni paragraf
- `\n` → tek satır atla

Bu karakterlere dokunma, sadece etrafındaki metni güncelle.

---

## ➕ YENİ ANAHTAR EKLEMEK

Siteye yeni bir bölüm eklendiyse ve yeni metin gerekiyorsa:

**1. Her iki `translation.json` dosyasına anahtarı ekle:**

Türkçe (`tr/translation.json`):
```json
"yeniBolum": {
    "baslik": "Yeni Bölüm Başlığı",
    "aciklama": "Açıklama metni buraya."
}
```

İngilizce (`en/translation.json`):
```json
"yeniBolum": {
    "baslik": "New Section Title",
    "aciklama": "Description text goes here."
}
```

**2. JSX dosyasında şöyle kullanılır:**

```jsx
const { t } = useTranslation();

<h2>{t("yeniBolum.baslik")}</h2>
<p>{t("yeniBolum.aciklama")}</p>
```

> ℹ️ Anahtarı JSON'a eklemeden `t()` ile çağırırsan ekranda anahtar adının kendisi yazılır:
> örn. `yeniBolum.baslik` — bu hata vermez ama çirkin görünür. Hemen ekle.

---

## 🔍 BİR METNİ NEREDE BULACAĞINI BİLMİYORSAN

1. Sitede değiştirmek istediğin metni gör
2. `public/locales/tr/translation.json` dosyasını aç
3. **Ctrl + F** ile metni ara
4. Bulduğun satırı güncelle
5. Aynısını `en/translation.json`'da da yap

---

## 🗑️ ANAHTAR SİLMEK

1. Her iki `translation.json` dosyasından ilgili satırı sil
2. JSX kodunda `t("...")` kullanan yeri de temizle

> Kodda hâlâ referans varken JSON'dan silersen ekranda anahtar adı belirir.

---

## 🔤 VARSAYILAN DİL NE?

`src/i18n.js` dosyasında şu ayar var:

```js
fallbackLng: 'tr',
```

Bu şu anlama gelir: Kullanıcının tarayıcı dili ne olursa olsun, bir çeviri bulunamazsa **Türkçe** gösterilir.
Tarayıcı dili İngilizce ayarlıysa site otomatik İngilizce açılır.
Sağ üstteki TR/EN butonu ile istediği zaman değiştirilebilir — seçim tarayıcıya kaydedilir.

---

## ⚠️ SIKÇA YAPILAN HATALAR

| Belirti | Sebebi |
|---|---|
| Ekranda `navbar.home` gibi bir şey yazıyor | O anahtar JSON'da yok veya yazım yanlış |
| Türkçe güncellendi ama İngilizce eski kaldı | `en/translation.json` güncellenmedi |
| Değişiklik sayfada görünmüyor | Sayfayı yenile (`Ctrl + R`), bazen cache'e takılır |
| Site açılıyor ama tüm metinler kayboldu | JSON dosyasında sözdizimi hatası var |

### JSON bozulduysa ne yapacaksın?

JSON çok hassas bir format. Hata mesajı genellikle şöyle görünür:
```
SyntaxError: Unexpected token
```

Kontrol listesi:
- Her `"anahtar": "değer"` çiftinden sonra **virgül** olmalı — son satır hariç
- Tırnak işaretleri **düz** olmalı: `"` ← doğru, `"` ← yanlış (Word'den kopyalandıysa olur)
- Süslü parantezler `{ }` doğru açılıp kapanmalı

En hızlı çözüm: Son yaptığın değişikliği `Ctrl + Z` ile geri al ve tekrar dene.

---

Hepsi bu kadar. Sadece bir JSON dosyası. 🫡
