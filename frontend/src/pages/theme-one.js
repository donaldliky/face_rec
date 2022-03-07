import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
// import TopSeller from '../components/TopSeller/TopSellerOne';
import Feature from '../components/Home/Feature';
import Vision from '../components/Home/Vision';
import Roadmap from '../components/Roadmap/Roadmap';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Feature />
                <Vision />
                <Roadmap />
                {/* <TopSeller /> */}
                <Work />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;