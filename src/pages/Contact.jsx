
import React, { useState, useEffect } from 'react';
import { Nav } from "../Components/Nav";
import { Footer } from "../sections/Footer";
import Stars from '../Components/Stars';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
//4e717e6c-fdfb-4a60-8e75-3100f0c7004f
function Contact() {
    const { t } = useTranslation();
    const [result, setResult] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(t('contact.sending') || "Gönderiliyor...");
        const formData = new FormData(e.target);

        formData.append("access_key", "4e717e6c-fdfb-4a60-8e75-3100f0c7004f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(t('contact.success') || "Mesajınız başarıyla gönderildi!");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message || "Bir hata oluştu, lütfen tekrar deneyin.");
        }
    };

    return (
        <main className='relative min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white' style={{
            background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <Stars />

            {/* --- NAVBAR --- */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Nav isScrolled={isScrolled} />
            </div>

            <div className="relative z-10 container mx-auto flex-grow px-4 pt-32 md:pt-40 pb-0 flex flex-col items-center">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {t('contact.title')}
                    </h1>
                    <p className="text-indigo-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* --- CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

                    {/* SOL KOLON: İletişim Bilgileri */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Info Card */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.contactInfo')}</h3>

                            <div className="space-y-6">
                                <ContactItem
                                    icon={<FaMapMarkerAlt />}
                                    title={t('contact.addressTitle')}
                                    content={t('contact.addressContent')}
                                />
                                <ContactItem
                                    icon={<FaEnvelope />}
                                    title={t('contact.emailTitle')}
                                    content="izmir@best-eu.org"
                                />
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.followUs')}</h3>
                            <div className="flex gap-4">
                                <SocialButton icon={<FaInstagram />} href="https://www.instagram.com/best.izmir/" />
                                <SocialButton icon={<FaLinkedin />} href="https://www.linkedin.com/company/bestizmir/" />
                            </div>
                        </div>

                    </motion.div>

                    {/* SAĞ KOLON: İletişim Formu */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                            <h3 className="text-2xl font-bold text-white mb-8">{t('contact.sendMessage')}</h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputGroup label={t('contact.nameLabel')} type="text" name="name" placeholder="John Doe" required={true} />
                                    <InputGroup label={t('contact.emailLabel')} type="email" name="email" placeholder="john@example.com" required={true} />
                                </div>
                                <InputGroup label={t('contact.subjectLabel')} type="text" name="subject" placeholder="..." required={true} />

                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-bold text-indigo-300 ml-1">{t('contact.messageLabel')}</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                                        placeholder="Mesajınızı buraya yazın..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-500/30"
                                >
                                    {t('contact.sendButton')}
                                </button>
                                {result && <p className="text-center text-indigo-300 mt-4 font-medium">{result}</p>}
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* --- FOOTER --- */}
            <div className="w-full mt-auto pt-24 z-10">
                <Footer />
            </div>

        </main>
    );
}

// Alt Bileşenler
const ContactItem = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-indigo-500/20 p-3 rounded-xl text-indigo-400 text-xl">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg">{title}</h4>
            <p className="text-gray-400 leading-relaxed font-light">{content}</p>
        </div>
    </div>
);

const SocialButton = ({ icon, href }) => (
    <a
        href={href}
        className="bg-white/10 hover:bg-indigo-500 hover:text-white text-gray-300 p-4 rounded-xl text-2xl transition-all duration-300"
    >
        {icon}
    </a>
);

const InputGroup = ({ label, type, name, placeholder, required }) => (
    <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-indigo-300 ml-1">{label}</label>
        <input
            type={type}
            name={name}
            required={required}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            placeholder={placeholder}
        />
    </div>
);

export default Contact;
