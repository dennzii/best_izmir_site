import React from 'react'

import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return(
        <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    </div>
    )
}

export default App