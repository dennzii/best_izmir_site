import { useEffect } from 'react';
import HomePage from './pages/HomePage'
import Team from "./pages/Team"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import AboutUsPage from "./pages/AboutUsPage"

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PageTitleUpdater() {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'BEST İzmir';

        switch (path) {
            case '/':
                title = 'BEST İzmir';
                break;
            case '/about':
                title = `${t('navbar.about')} | BEST İzmir`;
                break;
            case '/team':
                title = `${t('navbar.team')} | BEST İzmir`;
                break;
            case '/events':
                title = `${t('navbar.events')} | BEST İzmir`;
                break;
            case '/contact':
                title = `${t('navbar.contact us')} | BEST İzmir`;
                break;
        }

        document.title = title;
    }, [location.pathname, t, i18n.language]);

    return null;
}

function App() {
    return (
        <div>
            <PageTitleUpdater />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/team' element={<Team />} />
                <Route path='/events' element={<Events />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
