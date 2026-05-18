# 🐙 GİT NASIL KULLANILIR?

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

Git, yaptığın değişiklikleri kayıt altına alan ve gerektiğinde geri almanı sağlayan bir versiyon kontrol sistemi.
Kısaca: "Ctrl+Z ama aylarca geriye giden ve bulutla senkronize olan versiyonu."

---

## 🖥️ KURULUM

Git yüklü değilse: [git-scm.com](https://git-scm.com) → indir ve kur.

Kimliğini tanıt (bir kez yapman yeterli):
```bash
git config --global user.name "Adın Soyadın"
git config --global user.email "mailin@example.com"
```

---

## 📦 TEMEL KOMUTLAR

### Duruma bak — ne değişti?
```bash
git status
```
Kırmızı = henüz kaydedilmemiş değişiklikler
Yeşil = kayıt için hazırlanmış değişiklikler

### Değişiklikleri kayıt için hazırla (stage)
```bash
git add .            # tüm değişiklikler
git add dosya.jsx    # sadece bir dosya
```

### Kaydet (commit)
```bash
git commit -m "ekip fotoğrafları güncellendi"
```
Mesaj kısa ve Türkçe/İngilizce olabilir — ne yaptığını anlat.

### Uzak repoya gönder (push)
```bash
git push
```

### Uzak repodan çek (pull) — başkası değişiklik yaptıysa
```bash
git pull
```

---

## 🔁 TYPİK DÖNEM BAŞI AKIŞI

```bash
git pull                          # önce en güncel hali al
# ... değişiklikleri yap ...
git add .                         # hepsini hazırla
git commit -m "2025-2026 dönemi ekip güncellendi"
git push                          # GitHub'a gönder
```

---

## 🌿 BRANCH — GÜVENLİ ÇALIŞMA

Büyük bir değişiklik yapacaksan (yeni sayfa, tasarım değişikliği) doğrudan `main`'e yazmak yerine ayrı bir dal aç:

```bash
git checkout -b yeni-ozellik      # yeni dal oluştur ve geç
# ... çalış ...
git add .
git commit -m "yeni özellik tamamlandı"
git checkout main                 # ana dala geri dön
git merge yeni-ozellik            # değişiklikleri birleştir
git push
```

---

## ⏪ GERİ ALMA

### Son commit'i geri al (dosyaları korur)
```bash
git revert HEAD
```

### Henüz commit etmediğin bir dosyayı sıfırla
```bash
git checkout -- dosya.jsx
```
> ⚠️ Bu komutu dikkatli kullan — o dosyadaki kaydedilmemiş değişiklikler **kalıcı olarak silinir**.

### Belirli bir commit'e geri dön (sadece bakmak için)
```bash
git log --oneline      # commit geçmişine bak
git checkout abc1234   # o commit'e geç (sadece okumak için)
git checkout main      # tekrar ana dala dön
```

---

## 🔑 GITHUB ERİŞİMİ

Repo'ya push/pull yapabilmek için erişim yetkisi gerekiyor.
Senden önceki IT Coord'dan repo erişimini devralmayı unutma.

Repo adresi için ekibin GitHub organizasyonuna bak veya senden önce çalışan kişiye sor.

---

## ⚠️ ALTIN KURAL

> **`main` branch'ine doğrudan büyük değişiklik atmadan önce bir kez daha düşün.**
> Küçük güncelleme (fotoğraf, isim, metin) → doğrudan `main` olabilir.
> Yeni özellik, büyük tasarım değişikliği → önce ayrı bir branch aç.

---

Daha fazlası için: [learngitbranching.js.org](https://learngitbranching.js.org) — interaktif, Türkçe de destekliyor. 🫡
