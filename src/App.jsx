import React from 'react'
import HomePage from './pages/HomePage'
import Team from "./pages/Team"
import Events from "./pages/Events"


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/team' element={<Team />} />
                <Route path='/events' element={<Events />} />
            </Routes>
        </div>
    )


}

export default App
