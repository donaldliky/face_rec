import React, { Component, useState } from 'react';
import Webcam from "react-webcam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/author";

const videoConstraints = {
    width: 312,
    height: 312,
    facingMode: "user"
};

const FaceRecognitionLeftCard = () => {
    const webcamRef = React.useRef(null);

    const [image, setImage] = useState('');
    const [captureButton, setCaptureButton] = useState(0);

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
            setImage(imageSrc)
        },
        [webcamRef]
    );

    const btnCaptureClick = () => {
        if (captureButton == 0) {
            setCaptureButton(1)
            capture()
        } else {
            setCaptureButton(0)
            setImage('')
        }

    }

    return (
        <>
            <div className="card no-hover text-center">
                <div className="image-over" style={{ height: 312 }} >
                    {
                        image == '' ? <Webcam
                            audio={false}
                            height={312}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={312}
                            videoConstraints={videoConstraints}
                        /> : <img src={image} style={{ width: 312, height: 312 }} />
                    }

                    {/* Author */}
                    <div className="author" onClick={btnCaptureClick} style={{ cursor: 'pointer' }}>
                        <div className="author-thumb avatar-lg" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                            {
                                image == '' ? <FontAwesomeIcon icon={faCamera} style={{ height: 40, width: 40 }} />
                                    : <FontAwesomeIcon icon={faSyncAlt} style={{ height: 40, width: 40 }} />
                            }

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

export default FaceRecognitionLeftCard;