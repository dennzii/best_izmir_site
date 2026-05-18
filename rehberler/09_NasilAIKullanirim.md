# 🤖 AI NASIL KULLANILIR?

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

> 🚨 Bu dosyayı Claude'a yaptırdığımdan hep kendini övmüş. Güncel teknolojiden faydalanmaya çalış.

Bu siteyi büyük ölçüde AI yardımıyla geliştirdik.
Sonraki IT Coord olarak sen de aynı şekilde çalışabilirsin — hem daha hızlı, hem daha az stresli.

---

## 🛠️ HANGI ARAÇLAR KULLANILDI?

| Araç              | Ne için                             | Nasıl erişilir                                                 |
| ----------------- | ----------------------------------- | -------------------------------------------------------------- |
| **Claude Code**   | Kod yazma, düzenleme, hata ayıklama | [claude.ai/code](https://claude.ai/code) veya VSCode eklentisi |
| **Claude (chat)** | Fikir üretme, açıklama isteme       | [claude.ai](https://claude.ai)                                 |
| **ChatGPT**       | Alternatif görüş, metin yazımı      | [chatgpt.com](https://chatgpt.com)                             |

> Öneri: Kod işleri için **Claude Code**, genel sorular için hangisini beğenirsen onu kullan.

---

## 💬 AI'YA NASIL SORMALIYIM?

AI'dan iyi sonuç almak için **bağlam ver**. "Şunu yap" değil, "şu sistemde şunu yapmak istiyorum" de.

### Kötü soru:

```
"Kart yap"
```

### İyi soru:

```
"Bu projede React ve Tailwind CSS kullanıyorum. Dark/Light mod desteği var
(useTheme hook'u ile). Ekip sayfasında her üye için hover'da isim ve görev
gösteren bir kart bileşeni yazar mısın?"
```

---

## 📋 HAZIR PROMPT ŞABLONLARı

### Yeni özellik eklemek:

```
Bu bir React + Vite + Tailwind CSS projesi. Dark/Light mod var (useTheme hook).
Çok dilli destek var (i18next, tr/en). [Sayfanın adı] sayfasına [ne ekleyeceğini]
eklemek istiyorum. Mevcut stil ile uyumlu olsun.
```

### Hata düzeltmek:

```
Şu hata var: [hata mesajını buraya yapıştır]
İlgili dosya: [dosya adı]
İlgili kod: [kodu buraya yapıştır]
Ne yapmaya çalışıyorum: [açıkla]
```

### Mevcut kodu anlamak:

```
Bu kodu açıklar mısın? Ne yapıyor, neden böyle yazılmış?
[kodu yapıştır]
```

### Çeviri eklemek:

```
Bu projeye yeni bir [bölüm adı] bölümü ekledim.
Türkçe ve İngilizce translation.json dosyalarına şu metinleri ekle:
[metinlerin listesi]
```

---

## 🧠 CLAUDE CODE ÖZELLİKLE GÜÇLÜ

Claude Code VSCode'un içinde çalışıyor ve proje dosyalarını okuyabiliyor.
Bu sayede "genel bir AI" gibi değil, **bu projeyi bilen bir geliştirici** gibi davranıyor.

**Ne yapabilir:**

- Dosya okur, düzenler, yeni dosya oluşturur
- Birden fazla dosyayı aynı anda değiştirir
- Hataları bulur ve düzeltir
- README ve dokümantasyon yazar (bu dosyaları o yazdı 👋)

**Nasıl açılır:** VSCode'da `Ctrl + Shift + P` → "Claude" ara

---

## ⚠️ AI KULLANIRKEN DİKKAT

| Durum                         | Ne yapmalısın                                       |
| ----------------------------- | --------------------------------------------------- |
| AI bir şeyi yanlış anladı     | Düzelt ve tekrar sor — ısrarcı ol                   |
| Üretilen kod çalışmıyor       | Hata mesajını AI'ya ver, açıklamasını iste          |
| Emin olmadığın bir değişiklik | Önce `git commit` al, sonra dene — geri alabilirsin |
| AI "bunu yapamam" dedi        | Farklı bir şekilde sor veya parçalara böl           |

> ⚠️ AI'nın ürettiği kodu **kopyala-yapıştır yapmadan önce bir kez oku**.
> Genellikle doğrudur ama kör güven tehlikeli olabilir.

---

## 💡 GERÇEKTEN İŞE YARAYAN BİR İPUCU

Büyük bir değişiklik yapmadan önce AI'ya şunu söyle:

```
Önce bir plan yap, kodu yazmadan açıkla. Ben onayladıktan sonra yaz.
```

Bu şekilde beklenmedik bir şey olursa daha başlamadan yakalarsın.

---

İyi kodlamalar. AI senin rakibin değil, ekip arkadaşın. 🤖🫡
