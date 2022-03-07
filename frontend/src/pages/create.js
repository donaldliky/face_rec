import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
// import Creates from '../components/Create/Create';
import FaceRecognition from '../components/Create/CreateFaceRecognition';
import VoiceIdentification from '../components/Create/CreateVoiceIdentification';
// import CreateNFT from '../components/Create/CreateNFT';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';


class Create extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Create" subpage="Pages" page="Create" />
                <FaceRecognition />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Create;