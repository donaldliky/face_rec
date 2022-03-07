import React, { Component } from 'react';
import JsonData from '../../json-server/db.json';

// import axios from 'axios';
// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/seller";


class Feature extends Component {
    state = {
        data: {},
        roadmapData: []
    }
    componentDidMount() {
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             roadmapData: res.data.roadmapData
        //         })
        //         // console.log(this.state.data)
        //     })
        //     .catch(err => console.log(err))
        this.setState({
            data: JsonData['roadmap'],
            roadmapData: JsonData['roadmap']['roadmapData'],
        })
    }
    render() {
        return (
            <section className="top-seller-area pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-10">
                            {/* Intro */}
                            <div className="intro text-center">
                                <h2 className="mt-3 mb-0"><span className="text-gradient">YouToken</span> is for everyone.</h2>
                                <h4>Financial services for NFT assets you own should be safe, reliable,
                                    and accessible for everyone, everywhere. Vera allows any NFT marketplace
                                    to generate new revenue streams, reimagine user experiences,
                                    and empower communities.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Verify</a>
                                        <span>Make sure your assets are authentic.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0"></div>
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Finance</a>
                                        <span>Make assets more affordable for everyone.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Transact</a>
                                        <span>Rent out or take a loan from your assets.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0"></div>
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Earn</a>
                                        <span>Stake your assets to earn rewards.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Superpowers</a>
                                        <span>Quickly add essential financial services to any dApp without the risks and complexities.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-6 item mt-0"></div>
                        <div className="col-12 col-md-6 col-lg-6 item mt-0">
                            <div className="card no-hover">
                                <div className="single-seller d-flex align-items-center">
                                    <div className="seller-info ml-3">
                                        <a className="seller mb-2">Decentralized</a>
                                        <span>Fully decentralized ecosystem resistant to censorship or manipulation.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Feature;