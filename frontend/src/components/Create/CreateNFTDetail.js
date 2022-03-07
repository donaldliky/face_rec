import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'

import AuthorProfile from "../AuthorProfile/AuthorProfile";
import callApi from "../../utils/apiCaller";
import { TOKEN_URL } from "../../constants/ApiEndpoint";

const CreateNFTDetail = props => {
    const history = useHistory()

    const prev = () => {
        history.push('/face-recognition')
    }

    const createYouToken = () => {
        const token = {
            faceProfile: "111",
            voiceProfile: "222",
            address: "0x234e",
            name: "YJH",
            description: "This is first token",
            price: 10
        }

        props.onCreateNft(token);
    }

    return (
        <>
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            {/* Author Profile */}
                            <div className="card no-hover text-center">
                                <div className="image-over">

                                    {/* <img className="card-img-top" src={this.state.data.img} alt="" /> */}
                                    {/* Author */}
                                    <div className="author">
                                        <div className="author-thumb avatar-lg">
                                            <img className="rounded-circle" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* Card Caption */}
                                <div className="card-caption col-12 p-0">
                                    {/* Card Body */}
                                    <div className="card-body mt-4">
                                        <h5 className="mb-3"></h5>
                                        <p className="my-3"></p>
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <button><i className="icon-docs" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Step 3</span>
                                    <h3 className="mt-3 mb-0">Create YouToken</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <div className="item-form card no-hover">
                                <div className="row">

                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Item Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" name="textarea" placeholder="Description" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="price" placeholder="Item Price" required="required" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4 col-3" onClick={prev} >Prev</button>
                                        <button className="btn w-100 mt-3 mt-sm-4 col-3" style={{ float: 'right' }} onClick={createYouToken} >Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateNFTDetail;