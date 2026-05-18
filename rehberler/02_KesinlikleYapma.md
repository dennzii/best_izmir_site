# 🚫 KESİNLİKLE YAPMA

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

Bu listedeki şeylerin bir kısmı daha önce yapıldı ve acı çekildi.
Bir kısmı mantıklı görünüyor ama değil.
Hepsini not aldık, sana aktarıyoruz.

---

## 🗑️ SİLME / KIRMA

**`tailwind.config.js` içindeki `darkMode: 'class'` satırını silme.**
Silersen tüm `dark:` sınıfları işlevsiz kalır — site dark modda light mod gibi görünür.

**`src/i18n.js` dosyasına dokunma.**
Çeviri sistemi buradan ayağa kalkıyor. İçinde mantıklı görünen bir şey görürsen bile değiştirme — çalışıyorsa elleme.

**`public/` klasörünü proje dışına taşıma.**
`public/locales/` içindeki çeviri JSON'ları buradan sunuluyor. Klasörün yeri değişirse site tüm metinlerini kaybeder.

**`ThemeContext.jsx` içindeki localStorage satırlarını silme.**
Silersen kullanıcının tema tercihi her sayfa yenilemesinde sıfırlanır.

---

## ⚠️ DİKKATSİZ YAPMA

**Sadece bir dil dosyasını güncelleme.**
Her zaman hem `tr/translation.json` hem `en/translation.json` güncellenmeli. Biri eksik kalırsa o dilde eski metin kalır ya da anahtar adı yazıyor.

**`TeamMembers.jsx`'te aynı `id` numarasını iki üyeye verme.**
React kartları karıştırır, beklenmedik görsel hatalar çıkar.

**Fotoğrafları doğrudan `src/` içine atma.**
Tüm görseller `src/assets/` altında organize edilmiş. Rastgele yere konan dosya bulunmaz, karmaşa yaratır.

**Commit atmadan büyük değişiklik yapma.**
Bir şeyler patladığında geri alma şansın olmaz. Her önemli adımdan önce `git commit`.

**Ana sayfanın yükleme hızını görmezden gelme.**
Büyük fotoğraflar (.png, yüksek çözünürlük) siteyi yavaşlatır. Görselleri yüklemeden önce [squoosh.app](https://squoosh.app) ile sıkıştır.

---

## 🔑 GÜVENLİK

**API anahtarlarını kod içine yazma.**
İletişim formu için Web3Forms API anahtarı `Contact.jsx` içinde. Bu kabul edilebilir çünkü zaten public bir anahtar. Ama başka servisler için `.env` dosyası kullan ve GitHub'a **asla** push etme.

**`git push --force` yapma.**
Özellikle `main` branch'ine. Geçmişi siler, başkasının çalışmasını yok eder. Emin değilsen yapma.

---

Bunların hepsini yapan biri olmadı, ama yapabilirdi.
Artık sen de yapma. 🫡
