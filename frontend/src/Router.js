import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilterPage from './components/Filter';
import HeroSection from './components/HeroSection';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';

const RouterMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/wallpaper' element={<HeroSection/>}/>
                <Route path='/detail' element={<ProductDetail />} />
                <Route path='/filter' element={<FilterPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default RouterMain;