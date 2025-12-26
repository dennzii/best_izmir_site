// Resimler
import firat from "../assets/teamPhotos/fırat_foto.png";
import fırat_birds from "../assets/teamPhotos/firat_birds.png";

import foto2 from "../assets/teamPhotos/firat_birds.png";
import foto3 from "../assets/teamPhotos/firat_birds.png";
import foto4 from "../assets/teamPhotos/firat_birds.png";
import foto5 from "../assets/teamPhotos/firat_birds.png";
import foto6 from "../assets/teamPhotos/firat_birds.png";



// EKİP VERİSİ (Burayı düzenleyerek her şeyi değiştirebilirsin)
const teamMembersData = [
  {
    id: 1,
    isim: "Fırat Göçmen",
    gorev: "VPP",
    foto: firat,
    ikon: fırat_birds,
    reyting: 94,
    variant: "gold", // Renk: gold, blue, red, green
    yazi: "Cuguliyi dinlemeyi severim.",
    stats: [
      { label: 'UCB', value: 95 },
      { label: 'PM', value: 98 },
      { label: 'ALKL', value: 0 },
      { label: 'FIFA', value: -90 },
    ]
  },
  {
    id: 2,
    isim: "Zeynep Demir",
    gorev: "Backend Dev",
    foto: foto2,
    ikon: fırat_birds,
    reyting: 91,
    variant: "blue", // Mavi Kart (Defansif/Teknik)
    yazi: "Veritabanları asla yalan söylemez, sadece insanlar söyler.",
    stats: [
      { label: 'JAVA', value: 92 },
      { label: 'SQL', value: 96 },
      { label: 'API', value: 88 },
      { label: 'BUG', value: 10 },
    ]
  },
  {
    id: 3,
    isim: "Caner Okyay",
    gorev: "UI/UX Designer",
    foto: foto3,
    ikon: fırat_birds,
    reyting: 89,
    variant: "green", // Yeşil Kart (Yaratıcı)
    yazi: "Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır.",
    stats: [
      { label: 'FIGMA', value: 99 },
      { label: 'RENK', value: 95 },
      { label: 'UX', value: 85 },
      { label: 'KOD', value: 40 },
    ]
  },
  {
    id: 4,
    isim: "Elif Kara",
    gorev: "Project Manager",
    foto: foto4,
    ikon: fırat_birds,
    reyting: 93,
    variant: "red", // Kırmızı Kart (Lider/Otorite)
    yazi: "Deadline bir öneri değil, yaşam tarzıdır.",
    stats: [
      { label: 'PLAN', value: 98 },
      { label: 'IKNA', value: 95 },
      { label: 'AGILE', value: 90 },
      { label: 'STRES', value: 99 },
    ]
  },
  {
    id: 5,
    isim: "Murat Can",
    gorev: "DevOps",
    foto: foto5,
    ikon: fırat_birds,
    reyting: 88,
    variant: "blue",
    yazi: "Ben uyurken bile sunucular çalışmaya devam eder.",
    stats: [
      { label: 'AWS', value: 90 },
      { label: 'LINUX', value: 95 },
      { label: 'CI/CD', value: 88 },
      { label: 'UYKU', value: 30 },
    ]
  },
  {
    id: 6,
    isim: "Selin Vural",
    gorev: "Marketing",
    foto: foto6,
    ikon: fırat_birds,
    reyting: 90,
    variant: "gold",
    yazi: "Hikaye anlatıcılığı verilerle buluştuğunda büyü gerçekleşir.",
    stats: [
      { label: 'SEO', value: 92 },
      { label: 'COPY', value: 95 },
      { label: 'DATA', value: 85 },
      { label: 'SOSYAL', value: 98 },
    ]
  },
];

const themes = {
  gold: {
    wrapperBorder: 'border-white/60 shadow-[0_10px_20px_rgba(251,191,36,0.2)]',
    frontGradient: 'bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-100',
    textColor: 'text-amber-900',
    accentColor: 'text-amber-600 font-medium',
    backGradient: 'bg-gradient-to-br from-amber-100 to-orange-100',
    backTextColor: 'text-amber-900',
    backBorder: 'border-amber-200'
  },
  blue: {
    wrapperBorder: 'border-white/60 shadow-[0_10px_20px_rgba(56,189,248,0.2)]',
    frontGradient: 'bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-100',
    textColor: 'text-sky-900',
    accentColor: 'text-sky-600 font-medium',
    backGradient: 'bg-gradient-to-br from-sky-100 to-blue-200',
    backTextColor: 'text-sky-900',
    backBorder: 'border-sky-200'
  },
  red: {
    wrapperBorder: 'border-white/60 shadow-[0_10px_20px_rgba(251,113,133,0.2)]',
    frontGradient: 'bg-gradient-to-br from-rose-50 via-pink-100 to-red-100',
    textColor: 'text-rose-900',
    accentColor: 'text-rose-500 font-medium',
    backGradient: 'bg-gradient-to-br from-rose-100 to-pink-200',
    backTextColor: 'text-rose-900',
    backBorder: 'border-rose-200'
  },
  green: {
    wrapperBorder: 'border-white/60 shadow-[0_10px_20px_rgba(52,211,153,0.2)]',
    frontGradient: 'bg-gradient-to-br from-emerald-50 via-teal-100 to-green-100',
    textColor: 'text-teal-900',
    accentColor: 'text-teal-600 font-medium',
    backGradient: 'bg-gradient-to-br from-emerald-100 to-teal-200',
    backTextColor: 'text-teal-900',
    backBorder: 'border-emerald-200'
  }
};

export { teamMembersData, themes };