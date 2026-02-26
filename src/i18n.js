import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // Çeviri dosyalarını sunucudan (veya public klasöründen) yüklemek için:
    .use(Backend)
    // Tarayıcı dilini algılamak için:
    .use(LanguageDetector)
    // react-i18next'e bağlamak için:
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr', // Varsayılan dil
        debug: true, // Geliştirme aşamasında konsola bilgi basar

        interpolation: {
            escapeValue: false, // React zaten XSS koruması sağlıyor
        },

        // Backend ayarları, dosyaların nereden çekileceğini belirler
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
    });

export default i18n;
