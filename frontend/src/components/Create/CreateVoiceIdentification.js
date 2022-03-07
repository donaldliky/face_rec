import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl, faStopCircle, faDownload } from '@fortawesome/free-solid-svg-icons'
import { ReactMic } from 'react-mic'
import ReactAudioPlayer from 'react-audio-player'
import "./CreateVoiceIdentification.css"
import notify from '../../utils/notify';

const CreateVoiceIdentification = (props) => {

    const history = useHistory()

    const createVoiceProfile = () => {
        if (file == null) {
            notify('error', "Please select file!")
        } else {
            props.createVoiceProfile(file)
        }
    }

    const prev = () => {
        history.push("/face-recognition")
    }

    const [record, setRecord] = useState(false)
    const [recordedAudio, setRecordedAudio] = useState('')
    const [file, setFile] = useState(null)
    const startRecording = () => {
        // record == false ? setRecord(true) : setRecord(false)
        setRecord(true)
    }

    const stopRecording = () => {
        setRecord(false)
    }

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is : ', recordedBlob)
    }

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob)
        setRecordedAudio(recordedBlob.blobURL)
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
                                    <h3>Recorder</h3>
                                    <img src="img/voice/sample_100.png" style={{ width: 312, height: 100, marginBottom: 7, display: record ? 'none' : 'block' }} />

                                    <div style={{ display: record ? 'block' : 'none' }}><ReactMic
                                        record={record}
                                        className="youtoken_voice_recorder"
                                        onStop={onStop}
                                        onData={onData}
                                        strokeColor="#4528dc"
                                        backgroundColor="#16151a"
                                        mimeType="audio/wav"
                                        bitRate={256000}
                                        sampleRate={96000}
                                        timeSlice={3000}
                                    /></div>

                                    <div>
                                        <span onClick={startRecording} style={{ paddingRight: 30 }}><FontAwesomeIcon icon={faRecordVinyl} style={{ height: 40, width: 40 }} /></span>
                                        <span onClick={stopRecording}><FontAwesomeIcon icon={faStopCircle} style={{ height: 40, width: 40 }} /></span>
                                        <span style={{ float: 'right', paddingTop: 10 }}><a href={recordedAudio} download="recording.wav"><FontAwesomeIcon icon={faDownload} style={{ height: 20, width: 20 }} /></a></span>
                                    </div>

                                    <ReactAudioPlayer
                                        src={recordedAudio}
                                        className="youtoken_voice_player"
                                        controls
                                        controlsList="nodownload"
                                    />
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
                                    <span>Step 2</span>
                                    <h3 className="mt-3 mb-0">Voice Identification</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <div className="item-form card no-hover">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group form-group">
                                            <div className="custom-file">
                                                <input onChange={e => setFile(e.target.files[0])} type="file" className="custom-file-input" id="inputGroupFile01" />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Your Voice File</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4 col-3" onClick={prev} >Prev</button>
                                        <button className="btn w-100 mt-3 mt-sm-4 col-3" style={{ float: 'right' }} onClick={createVoiceProfile} >Next</button>
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

export default CreateVoiceIdentification;