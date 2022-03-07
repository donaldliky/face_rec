import React, { Component } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/author";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const VoiceIdentificationLeftCard = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            // const url = window.URL.createObjectURL(new Blob([imageSrc]));
            // const link = document.createElement("a");
            // link.href = url;
            // link.setAttribute(
            //     "download",
            //     `1.jpeg`
            // );
            // document.body.appendChild(link);
            // link.click();
            console.log(imageSrc)
        },
        [webcamRef]
    );

    return (
        <>
            <div className="card no-hover text-center">
                <div className="image-over">
                    <Webcam
                        audio={false}
                        height={312}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={312}
                        videoConstraints={videoConstraints}
                    />
                    {/* <button onClick={capture}>Capture photo</button> */}

                    {/* <img className="card-img-top" src={this.state.data.img} alt="" /> */}
                    {/* Author */}
                    <div className="author" onClick={capture}>
                        <div className="author-thumb avatar-lg">
                            <img className="rounded-circle" src="/img/avatar_8.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Card Caption */}
                <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body mt-4">
                        <h5 className="mb-3">Artnox</h5>
                        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default VoiceIdentificationLeftCard;