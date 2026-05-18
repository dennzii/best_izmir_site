# 🌙 TEMA SİSTEMİ — DARK / LIGHT MOD NASIL ÇALIŞIYOR?

> 🚨 VSCode'dan okuyorsan: **Ctrl + Shift + V** ile önizleme aç.

---

## 🧠 GENEL MANTIK

Site iki tema destekliyor: **Dark Mode** (koyu) ve **Light Mode** (açık).
Kullanıcı sağ üstteki ☀️/🌙 butonuna bastığında tema anında değişir, sayfa yenilenmez.
Seçim tarayıcıya kaydedilir — kullanıcı siteyi kapayıp açsa bile hatırlanır.

Sistemin üç parçası var:

| Parça | Dosya | Görevi |
|---|---|---|
| Tema durumu (state) | `src/context/ThemeContext.jsx` | `isDark` değerini tutar, toggle eder, localStorage'a kaydeder |
| CSS motoru | `tailwind.config.js` | `darkMode: 'class'` — dark sınıfını `<html>` etiketine ekler |
| Buton | `src/Components/Nav.jsx` | `toggleTheme()` fonksiyonunu çağırır |

---

## ⚙️ ThemeContext — Kontrol Merkezi

Dosya: `src/context/ThemeContext.jsx`

```jsx
const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem('theme');
  return saved ? saved === 'dark' : false; // false = varsayılan Light Mode
});
```

- Sayfa ilk açıldığında localStorage'a bakılır
- Kayıtlı değer yoksa **Light Mode** açılır (`false`)
- Dark seçildiğinde `<html>` etiketine `dark` sınıfı eklenir, Light'ta kaldırılır

Bileşen içinde kullanımı:

```jsx
import { useTheme } from '../context/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

- `isDark` → `true` ise koyu mod, `false` ise açık mod
- `toggleTheme()` → modu değiştirir

---

## 🎨 Tailwind ile Renk Belirleme

Tailwind `darkMode: 'class'` modunda çalışıyor.
Bu şu anlama gelir: `<html class="dark">` olduğunda `dark:` ön ekli sınıflar aktif olur.

### Temel kalıp:

```jsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-slate-800 dark:text-white">
    Merhaba
  </p>
</div>
```

- `bg-white` → Light modda beyaz arka plan
- `dark:bg-slate-900` → Dark modda koyu arka plan
- `dark:` ön eki olmayan sınıf → **her iki modda da geçerli**

### Inline style ile renk (isDark kullanarak):

Bazı durumlarda Tailwind sınıfı yerine `isDark` değişkeniyle doğrudan stil yazılıyor:

```jsx
const { isDark } = useTheme();

<div style={{ background: isDark ? '#0a0a0a' : '#f8faff' }}>
```

Bu yöntem özellikle gradientler ve karmaşık gölgeler için kullanılıyor.

---

## 📐 Hangi Yöntem Ne Zaman?

| Durum | Yöntem |
|---|---|
| Basit renk, arka plan, metin | `dark:` Tailwind sınıfı |
| Gradient, karmaşık `boxShadow`, SVG rengi | `isDark ? '...' : '...'` inline style |
| Resim değişecekse (logo, harita) | `isDark ? logoDark : logoLight` |

---

## 🖼️ Farklı Resim Gösterme

Logo, harita gibi öğeler dark/light modda farklı görsel kullanıyor:

```jsx
import logoDark from '../assets/logo_beyaz.png';
import logoLight from '../assets/logo_normal.png';

<img src={isDark ? logoDark : logoLight} alt="BEST İzmir" />
```

---

## 🌅 Sayfa Arka Planları

Her sayfa iki arka plan rengi tanımlıyor, bunlar `isDark`'a göre seçiliyor:

```jsx
const DARK_BG = 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)';
const LIGHT_BG = 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f5f0ff 100%)';

<div style={{ background: isDark ? DARK_BG : LIGHT_BG }}>
```

Bu sabitleri değiştirerek sayfanın genel arka plan rengini güncelleyebilirsin.

---

## 🔧 VARSAYILAN MODU DEĞİŞTİRMEK

Dosya: `src/context/ThemeContext.jsx`

```jsx
return saved ? saved === 'dark' : false;
//                                ↑ burası
```

- `false` → site ilk açıldığında **Light Mode**
- `true` → site ilk açıldığında **Dark Mode**

> Bu sadece localStorage'da kayıtlı değer olmadığında geçerlidir.
> Kullanıcı daha önce bir seçim yaptıysa o seçim geçerli olmaya devam eder.

---

## ➕ YENİ BİR BİLEŞENE TEMA EKLEMEK

Yeni bir bileşen yazıyorsan ve tema desteği vermek istiyorsan:

```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}`}>
      İçerik
    </div>
  );
};
```

Ya da Tailwind `dark:` sınıflarıyla daha kısa:

```jsx
<div className="rounded-xl p-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
  İçerik
</div>
```

Her iki yöntem de çalışır. Projenin geri kalanıyla tutarlı olanı seç.

---

## ⚠️ SIKÇA YAPILAN HATALAR

| Belirti | Sebebi |
|---|---|
| Dark modda renk değişmiyor | `dark:` sınıfı yazılmamış veya `isDark` kontrolü eksik |
| Her iki modda aynı renk var | `dark:` sınıfı var ama `tailwind.config.js`'de `darkMode: 'class'` yok (şu an var, silme) |
| Tema seçimi sayfa yenilenince sıfırlanıyor | `localStorage` kaydı çalışmıyor — `ThemeContext`'e dokunulmuş olabilir |
| Buton görünüyor ama çalışmıyor | `toggleTheme` prop'u bileşene iletilmemiş |

---

Hepsi bu. Dark side'a hoş geldin — ya da Light side. İkisi de güzel. 🫡
