import React, { useState, useEffect } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CreateFaceRecognition from '../components/Create/CreateFaceRecognition';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
// import { CREATE_FACE_PROFILE_ACTION } from '../constants/ActionType';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

// Toastr Message
import notify from '../utils/notify';
import { ToastContainer } from 'react-toastify'
// Toastr Message

const FaceRecognition = (props) => {
    const history = useHistory()
    const [flagBtn, setFlagBtn] = useState(false)
    const createFaceProfile = (image) => {
        setFlagBtn(true)
        const id = toast.loading("Please wait...")
        callApi('face', 'POST', { image: image }).then(res => {
            
            if (res.data.status) {
                //notify('success', res.data.message)
                toast.update(id, { render: "Success!", type: "success", isLoading: false })
                setTimeout(() => {
                    history.push('/create-nft')
                }, 3000);
            }
            else {
                //notify('error', res.data.message)
                toast.update(id, { render: res.data.message, type: 'error', isLoading: false, autoClose: 8000 })
                setFlagBtn(false)
            }
        })
    }

    return (
        <>
            <ToastContainer />
            <div className="main">
                <Header />
                <Breadcrumb title="Create" subpage="Pages" page="Create" />
                <CreateFaceRecognition createFaceProfile={createFaceProfile} flag={flagBtn} />
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
        ...state.image
    }
}

const mapDispatchToProps = (dispatch, props) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(FaceRecognition);