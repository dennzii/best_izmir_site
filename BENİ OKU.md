# BEST İzmir Website

HOŞGELDİN. Öncelikle bu yazıya vscode üzerinden bakıyorsan: "Ctrl + Shift + V" yapıp önizleme yapabilirsin.

BEST İzmir'in resmi web sitesi. Bu site React ve Vite ile oluşturulmuştur.
Gelecekteki BEST İzmir üyelerinin siteyi rahatça güncelleyebilmesi için Üzeyir Talha Kılıç tarafından bu kılavuz hazırlanmıştır. 🎉

---

## 🛠 Projeyi Çalıştırma

Projeyi yerel bilgisayarınızda (kendi bilgisayarınızda) çalıştırmak için aşağıdaki adımları izleyin:

1. Gerekli kütüphaneleri yükleyin:
   ```bash
   npm install
   ```
2. Geliştirici sunucusunu başlatın:
   ```bash
   npm run dev
   ```
3. Terminalde çıkan `http://localhost:5173/` linkine tıklayarak siteyi görüntüleyin.

---

## 📝 Site İçeriğini (Yazıları ve Çevirileri) Nasıl Güncellerim?

Sitemiz **İngilizce** ve **Türkçe** olmak üzere çift dil destekli çalışır. Metinlerin hiçbiri doğrudan kodların (`.jsx` dosyalarının) içine yazılmaz; her şey çeviri dosyalarından okunur.

Bir yazıyı değiştirmek istiyorsanız **`public/locales/`** klasörüne gitmelisiniz:
- **Türkçe kelimeler için:** `public/locales/tr/translation.json`
- **İngilizce kelimeler için:** `public/locales/en/translation.json`

> 💡 **ÖNEMLİ:** Bir metni Türkçe dosyasında değiştiriyorsanız veya yenisini ekliyorsanız, sistemin çökmemesi ve kusursuz çalışması için İngilizce dosyasına da **aynı anahtar isimle (key)** karşılığını eklemelisiniz.

### En Çok Değişen Bölümler (Dosyanın En Üstündedir)
Sürekli güncellenen kısımlar `translation.json` dosyalarının en üstüne yerleştirilmiştir.
- **`events`**: Etkinlik başlıkları ve açıklamaları. (Örn: Bahar Hackathonu)
- **`teamMembers`**: Yönetim Kurulu ve ekip üyelerinin görevleri ve tırnak içi sözleri.
- **`byNumbers`**: "Rakamlarla BEST" bölümündeki sayılar ve açıklamalar.
- **`aboutUs`**: Hakkımızda bölümündeki metinler.

---

## 👥 Ekip Üyelerini (Team) Nasıl Güncellerim?

Ekip üyelerinin fotoğrafları, isimleri ve sıralamaları **`src/data/TeamMembers.jsx`** dosyasından kontrol edilir. 
Ekibe yeni birini eklemek veya çıkarmak için yalnızca bu dosyayı düzenlemeniz yeterlidir.

### Yeni Bir Üye Eklemek İçin:
1. Üyenin kapak fotoğrafını ve logosunu/ikonunu `src/assets/teamPhotos/` klasörüne atın.
2. `src/data/TeamMembers.jsx` dosyasının en üstünde bu resimleri `import` edin:
   ```javascript
   import yeniUyeFoto from "../assets/teamPhotos/yeni_foto.png";
   ```
3. Dosyanın içindeki `teamMembersData` dizisine yeni üyeyi şu formatta ekleyin:
   ```javascript
   {
       id: 7, // Her üyede farklı bir ID olmalı
       isim: "Yeni Üye Adı",
       gorevKey: "teamMembers.yeniUyeRole", // translation.json dosyasından gelecek
       foto: yeniUyeFoto,
       ikon: fırat_birds, // İsteğe bağlı ikon
       variant: "gold", // Kart rengi: gold, blue, red, green olabilir
       yaziKey: "teamMembers.yeniUyeQuote" // translation.json dosyasından gelecek
   }
   ```
4. Son olarak `translation.json` (Hem TR hem EN) dosyasına gidip `"teamMembers"` bloğu içine yeni görev ve sözleri ekleyin:
   ```json
       "yeniUyeRole": "Yeni Görev",
       "yeniUyeQuote": "Merhaba, ben yeni bestie."
   ```

---

## 📅 Etkinlikleri (Events) Nasıl Güncellerim?

Etkinliklerin resimleri, tarihleri ve sıralaması **`src/data/EventsData.js`** dosyasından kontrol edilir.

1. `src/data/EventsData.js` dosyasına gidin.
2. Yeni etkinliği listeye ekleyin:
   ```javascript
   {
       id: 6,
       titleKey: "events.title6", // translation.json dosyasından
       date: "10-15 Mayıs 2025",
       descKey: "events.desc6", // translation.json dosyasından
       image: "RESIM_LINKI_VEYA_IMPORT_EDİLMİŞ_RESIM"
   }
   ```
3. `translation.json` (TR ve EN) dosyasındaki `"events"` bloğuna gidin ve başlık ile açıklamayı ekleyin:
   ```json
       "title6": "Yeni Etkinlik Adı",
       "desc6": "Bu etkinliğin kısa açıklaması burada yer alır."
   ```

---

## 🔢 Rakamlarla BEST (By Numbers) Verilerini Nasıl Güncellerim?

Ana sayfadaki istatistiklerin sayısı (örn: 1M+, 86+) **`src/data/ByNumbersData.js`** dosyasında tutulur. Sayıları oradan değiştirebilirsiniz. Bu sayıların altındaki "Üniversite Sayısı" gibi yazılar ise yine `translation.json` içindeki `"byNumbers"` bloğundan değiştirilir.

---

## 🎨 Tasarım ve Animasyonlar

Sitemizde tasarımlar **Tailwind CSS** kullanılarak geliştirilmiştir. Animasyonlar ve parallax efektleri için ise **Framer Motion** ve **React Spring Parallax** kullanılmıştır.
- **Renk / Stil / Şekil Düzenlemeleri:** Sayfaların (örn: `HomePage.jsx` veya `AboutUs.jsx`) içindeki `className="..."` kısımlarına müdahale edebilirsiniz.
- **Animasyon Düzenlemeleri:** Kart çevirme ve kaydırma gibi animasyonlar için Framer Motion `motion.div` etiketlerinin `transition`, `initial` ve `animate` özelliklerini kurcalayabilirsiniz.
