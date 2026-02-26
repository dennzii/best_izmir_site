// Resimler
import defaultIkon from "../assets/teamPhotos/firat_birds.png";

// NOT: Kendi fotoğraflarınızı `src/assets/teamPhotos/` içine ekledikten sonra
// buradaki isimleri o dosyaların isimleriyle değiştirebilirsiniz.
import baskanFoto from "../assets/teamPhotos/fırat_foto.png";
import vppFoto from "../assets/teamPhotos/fırat_foto.png";
import vpisFoto from "../assets/teamPhotos/fırat_foto.png";
import saymanFoto from "../assets/teamPhotos/fırat_foto.png";
import sekreterFoto from "../assets/teamPhotos/fırat_foto.png";

import itCoordFoto from "../assets/teamPhotos/fırat_foto.png";
import prCoordFoto from "../assets/teamPhotos/fırat_foto.png";
import designCoordFoto from "../assets/teamPhotos/fırat_foto.png";
import aktiviteCoordFoto from "../assets/teamPhotos/fırat_foto.png";
import frCoordFoto from "../assets/teamPhotos/fırat_foto.png";

// EKİP VERİSİ (Burayı düzenleyerek her şeyi değiştirebilirsin)
const boardMembersData = [
  {
    id: 1,
    isim: "Yönetim - Başkan",
    gorevKey: "teamMembers.baskanRole",
    foto: baskanFoto,
    ikon: defaultIkon,
    variant: "gold",
    yaziKey: "teamMembers.baskanQuote",
  },
  {
    id: 2,
    isim: "Yönetim - VPP",
    gorevKey: "teamMembers.vppRole",
    foto: vppFoto,
    ikon: defaultIkon,
    variant: "blue",
    yaziKey: "teamMembers.vppQuote",
  },
  {
    id: 3,
    isim: "Yönetim - VPIS",
    gorevKey: "teamMembers.vpisRole",
    foto: vpisFoto,
    ikon: defaultIkon,
    variant: "green",
    yaziKey: "teamMembers.vpisQuote",
  },
  {
    id: 4,
    isim: "Yönetim - Sayman",
    gorevKey: "teamMembers.saymanRole",
    foto: saymanFoto,
    ikon: defaultIkon,
    variant: "red",
    yaziKey: "teamMembers.saymanQuote",
  },
  {
    id: 5,
    isim: "Yönetim - Sekreter",
    gorevKey: "teamMembers.sekreterRole",
    foto: sekreterFoto,
    ikon: defaultIkon,
    variant: "blue",
    yaziKey: "teamMembers.sekreterQuote",
  }
];

const coordinatorsData = [
  {
    id: 6,
    isim: "Koord - IT",
    gorevKey: "teamMembers.itCoordRole",
    foto: itCoordFoto,
    ikon: defaultIkon,
    variant: "gold",
    yaziKey: "teamMembers.itCoordQuote",
  },
  {
    id: 7,
    isim: "Koord - PR",
    gorevKey: "teamMembers.prCoordRole",
    foto: prCoordFoto,
    ikon: defaultIkon,
    variant: "blue",
    yaziKey: "teamMembers.prCoordQuote",
  },
  {
    id: 8,
    isim: "Koord - Design",
    gorevKey: "teamMembers.designCoordRole",
    foto: designCoordFoto,
    ikon: defaultIkon,
    variant: "green",
    yaziKey: "teamMembers.designCoordQuote",
  },
  {
    id: 9,
    isim: "Koord - Aktivite",
    gorevKey: "teamMembers.aktiviteCoordRole",
    foto: aktiviteCoordFoto,
    ikon: defaultIkon,
    variant: "red",
    yaziKey: "teamMembers.aktiviteCoordQuote",
  },
  {
    id: 10,
    isim: "Koord - FR",
    gorevKey: "teamMembers.frCoordRole",
    foto: frCoordFoto,
    ikon: defaultIkon,
    variant: "gold",
    yaziKey: "teamMembers.frCoordQuote",
  }
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

export { boardMembersData, coordinatorsData, themes };