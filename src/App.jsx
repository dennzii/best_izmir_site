import React from 'react'


import HomePage from './pages/HomePage'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return(
        <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            
        </Routes>
    </div>
    )
}

export default App