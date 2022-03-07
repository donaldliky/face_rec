import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import Webcam from "react-webcam";

// Toastr Message
// ToastContainer is only imported in root component
// import { ToastContainer } from 'react-toastify'
import notify from '../../utils/notify';
// Toastr Message

const subscriptionKey = 'a00406691bfe46c691832ba4af5b015b';
const url = 'https://face727.cognitiveservices.azure.com/face/v1.0/detect';

const videoConstraints = {
    width: 312,
    height: 312,
    facingMode: "user"
};

const CreateFaceRecognition = props => {
    const [selectedFile, setSelectedFile] = useState()
    const [fileName, setFileName] = useState('Choose your photo')

    const history = useHistory()

    const [image, setImage] = useState('');

    const [captureButton, setCaptureButton] = useState(0);

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot() || '';
            setImage(imageSrc)
        },
        [webcamRef]
    );

    const btnCaptureClick = () => {
        if (captureButton == 0) {
            setCaptureButton(1)
            capture()
            console.log('btn', captureButton)
            console.log('capture_image:', image.type)
        } else {
            setCaptureButton(0)
            setImage('')
            setFileName('Choose your photo')
            console.log('refresh')
        }
    }

    const createFaceProfile = () => {
        // console.log(image)
        if (image == '') {
            notify('error', 'Take a picture or upload one.')
        } else {
            props.createFaceProfile(image)
        }
    }
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            //setImage(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setImage(objectUrl)
        console.log('upload_button', captureButton)
        console.log('upload_image: ', image.type)

        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
 
        reader.onload = (e) => {
            setImage(e.target.result)
        }
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        // if (!e.target.files || e.target.files.length === 0) {
        //     setSelectedFile(undefined)
        //     return
        // }
        setSelectedFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        setCaptureButton(1)
    }


    return (
        <>
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            {/* Author Profile */}
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
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Step 1</span>
                                    <h3 className="mt-3 mb-0">Face Recognition</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <div className="item-form card no-hover">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={onSelectFile} />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">{fileName}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>

                                    <div className="col-12">
                                        <button disabled={props.flag} onClick={createFaceProfile} style={{ float: 'right' }} className="btn w-100 mt-3 mt-sm-4 col-3">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CreateFaceRecognition;
