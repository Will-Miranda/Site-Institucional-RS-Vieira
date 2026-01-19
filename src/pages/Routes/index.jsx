import React, { lazy, Suspense } from "react";
import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/Scrolltop";
import LoadingSpinner from "../../components/LoadingSpinner";

// Lazy loading das páginas
const Home = lazy(() => import("../Home"));
const Contact = lazy(() => import("../Contact"));
const WhoWeAre = lazy(() => import("../WhoWeAre"));
const Services = lazy(() => import("../Services"));
const Depoimentos = lazy(() => import("../Depoimentos"));

const PageLoader = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '200px',
        backgroundColor: '#e9e9e9'
    }}>
        <LoadingSpinner />
    </div>
);

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <ScrollToTop />
            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/whoweare" element={<WhoWeAre />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/depoimentos" element={<Depoimentos />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default RouterApp;