import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CreateNFTDetail from '../components/Create/CreateNFTDetail';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
import { CREATE_TOKEN_ACTION } from '../constants/ActionType';

class CreateNFT extends Component {
    constructor(props) {
        super(props);
    }

    handleCreateNft = (token) => {
        // console.log("token", token);
        this.props.onCreateToken(token);
    }

    render() {
        const { faceProfile, voiceProfile, address, name, description, price } = this.props;
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Create" subpage="Pages" page="Create" />
                <CreateNFTDetail onCreateNft={this.handleCreateNft} />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.token
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCreateToken: (token) => {
            dispatch({
                type: CREATE_TOKEN_ACTION,
                token
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNFT);