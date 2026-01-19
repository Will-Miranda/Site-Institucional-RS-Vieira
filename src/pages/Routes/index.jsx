import React from "react";

import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "../Home"
import Contact from "../Contact"
import WhoWeAre from "../WhoWeAre"
import Services from "../Services"
import Depoimentos from "../Depoimentos"
import ScrollToTop from "../../components/Scrolltop";


const RouterApp = () => {

    return(
        <BrowserRouter>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />,
                <Route path="/whoweare" element={<WhoWeAre />} />,
                <Route path="/services" element={<Services />} />,
                <Route path="/depoimentos" element={<Depoimentos />} />,
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp