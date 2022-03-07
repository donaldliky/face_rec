import React from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CreateVoiceIdentification from '../components/Create/CreateVoiceIdentification';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import { connect } from 'react-redux';

import callApi from '../utils/apiCaller';
import * as Config from './../constants/Config';
import axios from 'axios';

import { useHistory } from 'react-router-dom'

// Toastr Message
import notify from '../utils/notify';
import { ToastContainer } from 'react-toastify'
// Toastr Message

const VoiceIdentification = () => {
    const history = useHistory()

    const createVoiceProfile = (file) => {
        console.log(file);
        const formData = new FormData()
        formData.append('file', file)

        axios({
            method: "POST",
            url: Config.API_URL + '/voice',
            data: formData,
        }).then((res) => {
            if (res.data.status) {
                notify('success', res.data.message)
                setTimeout(() => {
                    history.push('/create-nft')
                }, 3000);
            } else {
                notify('error', res.data.message)
            }
        });
    }
    return (
        <>
            <ToastContainer />

            <div className="main">
                <Header />
                <Breadcrumb title="Create" subpage="Pages" page="Create" />
                <CreateVoiceIdentification createVoiceProfile={createVoiceProfile} />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(VoiceIdentification);