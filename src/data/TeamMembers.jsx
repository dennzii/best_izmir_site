// Resimler

// NOT: Kendi fotoğraflarınızı `src/assets/teamPhotos/...` içine ekledikten sonra
// Klasordeki Dosyanın isimlerini buraya göre göre değiştirin ki stabil kalsın.
import baskanFoto from "../assets/teamPhotos/Board/Baskan.jpeg";
import vppFoto from "../assets/teamPhotos/Board/VPP.jpeg";
import vpisFoto from "../assets/teamPhotos/Board/VPIS.jpeg";
import saymanFoto from "../assets/teamPhotos/Board/Sayman.jpeg";
import sekreterFoto from "../assets/teamPhotos/Board/Sekreter.jpeg";

import itCoordFoto from "../assets/teamPhotos/Coords/IT.jpeg";
import prCoordFoto from "../assets/teamPhotos/Coords/PR.jpeg";
import designCoordFoto from "../assets/teamPhotos/Coords/Design.jpeg";
import aktiviteCoordFoto from "../assets/teamPhotos/Coords/Activity.jpeg";
import frCoordFoto from "../assets/teamPhotos/Coords/FR.jpeg";

import spvBaskanFoto from "../assets/teamPhotos/Supervisors/SpvBaskan.jpeg";
import spvUye1Foto from "../assets/teamPhotos/Supervisors/Spv1.jpeg";
import spvUye2Foto from "../assets/teamPhotos/Supervisors/Spv2.jpeg";

// EKİP VERİSİ (Burayı düzenleyerek her şeyi değiştirebilirsin)
const boardMembersData = [
  {
    id: 1,
    isim: "Gökay Kömürcü",
    gorevKey: "teamMembers.baskanRole",
    foto: baskanFoto,
    // ikon: default// // ikon,
    variant: "gold",
    yaziKey: "teamMembers.baskanQuote",
  },
  {
    id: 2,
    isim: "Fırat Göçmen",
    gorevKey: "teamMembers.vppRole",
    foto: vppFoto,
    // ikon: default ikon,
    variant: "blue",
    yaziKey: "teamMembers.vppQuote",
  },
  {
    id: 3,
    isim: "Baran Tatar",
    gorevKey: "teamMembers.vpisRole",
    foto: vpisFoto,
    // ikon: default ikon,
    variant: "green",
    yaziKey: "teamMembers.vpisQuote",
  },
  {
    id: 4,
    isim: "Mehmet Alptekin Kiraz",
    gorevKey: "teamMembers.saymanRole",
    foto: saymanFoto,
    // ikon: default ikon,
    variant: "red",
    yaziKey: "teamMembers.saymanQuote",
  },
  {
    id: 5,
    isim: "Ada Demir",
    gorevKey: "teamMembers.sekreterRole",
    foto: sekreterFoto,
    // ikon: default ikon,
    variant: "blue",
    yaziKey: "teamMembers.sekreterQuote",
  }
];

const coordinatorsData = [
  {
    id: 6,
    isim: "Şemal Çiftçi",
    gorevKey: "teamMembers.itCoordRole",
    foto: itCoordFoto,
    // ikon: default ikon,
    variant: "gold",
    yaziKey: "teamMembers.itCoordQuote",
  },
  {
    id: 7,
    isim: "Derin Sipahi",
    gorevKey: "teamMembers.prCoordRole",
    foto: prCoordFoto,
    // ikon: default ikon,
    variant: "blue",
    yaziKey: "teamMembers.prCoordQuote",
  },
  {
    id: 8,
    isim: "Hazal",
    gorevKey: "teamMembers.designCoordRole",
    foto: designCoordFoto,
    // ikon: default ikon,
    variant: "green",
    yaziKey: "teamMembers.designCoordQuote",
  },
  {
    id: 9,
    isim: "Bartu Çetin",
    gorevKey: "teamMembers.aktiviteCoordRole",
    foto: aktiviteCoordFoto,
    // ikon: default ikon,
    variant: "red",
    yaziKey: "teamMembers.aktiviteCoordQuote",
  },
  {
    id: 10,
    isim: "Can Bozkurt",
    gorevKey: "teamMembers.frCoordRole",
    foto: frCoordFoto,
    // ikon: default ikon,
    variant: "gold",
    yaziKey: "teamMembers.frCoordQuote",
  }
];

const supervisorsData = [
  {
    id: 11,
    isim: "Umut Öztürk",
    gorevKey: "teamMembers.denetlemeBaskanRole",
    foto: spvBaskanFoto,
    variant: "gold",
    yaziKey: "teamMembers.denetlemeBaskanQuote",
  },
  {
    id: 12,
    isim: "Serdar Emin Polat",
    gorevKey: "teamMembers.denetlemeUyeRole",
    foto: spvUye1Foto,
    variant: "blue",
    yaziKey: "teamMembers.denetlemeUyeQuote",
  },
  {
    id: 13,
    isim: "Beran Çelik",
    gorevKey: "teamMembers.denetlemeUyeRole",
    foto: spvUye2Foto,
    variant: "green",
    yaziKey: "teamMembers.denetlemeUyeQuote",
  },
];

const themes = {
  gold: {
    border:       'border-amber-500/25',
    shadow:       '0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(251,191,36,0.08)',
    frontBg:      'bg-gradient-to-b from-slate-800 to-slate-900',
    backBg:       'bg-gradient-to-b from-slate-900 to-slate-800',
    accentBar:    'bg-amber-500',
    photoBorder:  'border-amber-500/30',
    photoShadow:  '0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(251,191,36,0.15)',
    nameColor:    'text-slate-100',
    roleColor:    'text-amber-400',
    dividerLine:  'bg-amber-500/70',
    backTextColor:'text-slate-400',
    quoteColor:   'text-amber-500/30',
  },
  blue: {
    border:       'border-sky-500/25',
    shadow:       '0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(56,189,248,0.08)',
    frontBg:      'bg-gradient-to-b from-slate-800 to-slate-900',
    backBg:       'bg-gradient-to-b from-slate-900 to-slate-800',
    accentBar:    'bg-sky-500',
    photoBorder:  'border-sky-500/30',
    photoShadow:  '0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(56,189,248,0.15)',
    nameColor:    'text-slate-100',
    roleColor:    'text-sky-400',
    dividerLine:  'bg-sky-500/70',
    backTextColor:'text-slate-400',
    quoteColor:   'text-sky-500/30',
  },
  red: {
    border:       'border-rose-500/25',
    shadow:       '0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(251,113,133,0.08)',
    frontBg:      'bg-gradient-to-b from-slate-800 to-slate-900',
    backBg:       'bg-gradient-to-b from-slate-900 to-slate-800',
    accentBar:    'bg-rose-500',
    photoBorder:  'border-rose-500/30',
    photoShadow:  '0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(251,113,133,0.15)',
    nameColor:    'text-slate-100',
    roleColor:    'text-rose-400',
    dividerLine:  'bg-rose-500/70',
    backTextColor:'text-slate-400',
    quoteColor:   'text-rose-500/30',
  },
  green: {
    border:       'border-emerald-500/25',
    shadow:       '0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(52,211,153,0.08)',
    frontBg:      'bg-gradient-to-b from-slate-800 to-slate-900',
    backBg:       'bg-gradient-to-b from-slate-900 to-slate-800',
    accentBar:    'bg-emerald-500',
    photoBorder:  'border-emerald-500/30',
    photoShadow:  '0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(52,211,153,0.15)',
    nameColor:    'text-slate-100',
    roleColor:    'text-emerald-400',
    dividerLine:  'bg-emerald-500/70',
    backTextColor:'text-slate-400',
    quoteColor:   'text-emerald-500/30',
  },
};

export { boardMembersData, coordinatorsData, supervisorsData, themes };