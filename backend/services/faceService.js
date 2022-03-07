// const { adminDb } = require('../config/firebase.config');
const config = require('../config');

const msRest = require('@azure/ms-rest-js');
const Face = require('@azure/cognitiveservices-face');
const { v4: uuidV4 } = require('uuid');
const createReadStream = require('fs').createReadStream

const axios = require('axios');
const FileSet = require('file-set');

let key = 'a00406691bfe46c691832ba4af5b015b';
let endpoint = 'https://face727.cognitiveservices.azure.com';
// let key = 'PASTE_YOUR_FACE_SUBSCRIPTION_KEY_HERE';
// let endpoint = 'PASTE_YOUR_FACE_ENDPOINT_HERE';

let credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
let client = new Face.FaceClient(credentials, endpoint);

const header = {
    headers: { 'content-type': 'application/octet-stream', 'Ocp-Apim-Subscription-Key': config.faceSubscriptionKey },
};

const create = async (image) => {
    // Detect Image
    let result = await detectWithStream(image, 'string')
    console.log('here')
    if (result.status == false) {
        return result
    } else {
        if (result.body.length == 0) {
            console.log('Face not detected.')
            return {
                'status': false,
                'message': 'Face not detected.',
                'body': null
            }
        } else if (result.body.length > 1) {
            console.log('2 or more faces detected.')
            return {
                'status': false,
                'message': '2 or more faces detected.',
                'body': null
            }
        } else {
            // Identify
            let personGroupList = await getPersonGroupList()
            if (personGroupList.status == false) {
                return personGroupList
            } else {
                const personGroupId = 'youtoken'

                // Create Person Group
                if (personGroupList.body.length == 0) {
                    // const personGroupId = uuidV4()
                    // testing version
                    const newPersonGroup = await createPersonGroup(personGroupId, { 'name': personGroupId })
                    if (newPersonGroup.status == false) {
                        return newPersonGroup
                    }
                    personGroupList = await getPersonGroupList()
                }

                // Identify Face
                let identifyResult = await identify([result.body[0].faceId], personGroupId, 5, 0.8)
                console.log('identifyResult:', identifyResult)
                if (identifyResult.status == false) {
                    return identifyResult
                } else {
                    if (identifyResult.body[0].candidates.length > 0) {
                        console.log('Face is already registered!')
                        return {
                            'status': true,
                            'message': 'Face is already registered!',
                            'body': null
                        }
                    } else {
                        // Register Face
                        let personGroupPerson = await createPersonGroupPerson(personGroupId, { 'name': personGroupId })
                        if (personGroupPerson.status == false) {
                            return personGroupPerson
                        }

                        // Add Face To Person Group
                        let persistedResult = await addFaceFromStreamToPersonGroup(personGroupId, personGroupPerson.body.personId, image, 'string')
                        if (persistedResult.status == false) {
                            return persistedResult
                        }

                        // Train Person Group
                        await train(personGroupId)

                        return personGroupPerson
                    }
                }
            }
        }
    }
}

const detectWithStream = async (image, type) => {
    console.log("---------------------------------")
    console.log("Detect With Stream")
    var faceIds = []
    let stream;
    
    if (type == 'file') {
        stream = () => createReadStream(image)
    } else if (type == 'string') {
        imageSplit = image.split(',');
        stream = new Buffer.from(imageSplit[1], 'base64');
    } else {
        return {
            'status': false,
            'message': 'Image Type is not defined!',
            'body': null
        }
    }

    let result = await client.face.detectWithStream(stream,
        {
            returnFaceAttributes: ["Accessories", "Age", "Blur", "Emotion", "Exposure", "FacialHair", "Gender", "Glasses", "Hair", "HeadPose", "Makeup", "Noise", "Occlusion", "Smile"],
            // We specify detection model 1 because we are retrieving attributes.
            detectionModel: "detection_01"
        })
        .then((faces) => {
            console.log('faces:', faces)
            return {
                'status': true,
                'message': 'success',
                'body': faces
            }
        }).catch((err) => {
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null
            }
        })
    return result;
}

const identify = async (faceIds, personGroupId, maxNumOfCandidatesReturned, confidenceThreshold) => {

    const result = await client.face.identify(faceIds,
        {
            "personGroupId": personGroupId,
            "maxNumOfCandidatesReturned": maxNumOfCandidatesReturned,
            "confidenceThreshold": confidenceThreshold
        })
        // API call returns a Promise<IdentifyResult[]>
        .then((identifyResults) => {
            return {
                'status': true,
                'message': 'Success',
                'body': identifyResults
            }
        }).catch((err) => {
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null
            }
        })
    return result
}

const createPersonGroup = async (personGroupId, userData) => {
    const result = await client.personGroup.create(personGroupId, userData)
        .then(() => {
            return {
                'status': true,
                'message': 'PersonGroup Created',
                'body': { 'personGroupId': personGroupId }
            }
        }).catch((err) => {
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null
            }
        })
    return result
}

const deletePersonGroup = async (personGroupId) => {
    const result = await client.personGroup.deleteMethod(personGroupId)
        .then(() => {
            return {
                'status': true,
                'message': 'PersonGroup Deleted',
                'body': { 'personGroupId': personGroupId }
            }
        }).catch((err) => {
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null

            }
        })
    console.log(result)
    return result
}

const getPersonGroupList = async () => {
    let result = await client.personGroup.list()
        .then((list) => {
            return {
                'status': true,
                'message': 'success',
                'body': list
            };
        }).catch((err) => {
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null

            }
        })

    return result;
}

const train = async (personGroupId) => {
    await client.personGroup.train(personGroupId)

    while (true) {
        let status = await client.personGroup.getTrainingStatus(personGroupId)
            .then((trainingStatusResponse) => {
                return trainingStatusResponse
            })
        console.log('Training status: ' + status.status)
        if (status.status == 'failed') {
            console.log('Training the person group has failed.')
            break;
        }
        if (status.status == 'succeeded') {
            console.log('Training the person group was a success.')
            break;
        }

        await sleep(1000)
    }
}

const createPersonGroupPerson = async (personGroupId, userData) => {
    let result = await client.personGroupPerson.create(personGroupId, userData)
        .then((face) => {

            console.log('Person ' + face.personId + ' was created')
            return {
                'status': true,
                'message': 'success',
                'body': face
            }
        }).catch((err) => {
            console.log(err)
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null
            }
        })
    return result
}

const addFaceFromStreamToPersonGroup = async (personGroupId, personGroupPersonId, image, type) => {

    let stream;
    if (type == 'file') {
        stream = () => createReadStream(image)
    } else if (type == 'string') {
        imageSplit = image.split(',');
        stream = new Buffer.from(imageSplit[1], 'base64');
    } else {
        return false;
    }

    let result = await client.personGroupPerson.addFaceFromStream(personGroupId, personGroupPersonId, stream)
        .then((face) => {
            console.log('ID ' + face.persistedFaceId + ' was added to a person group person.' + personGroupId)
            return {
                'status': true,
                'message': 'success',
                'body': face
            }
        }).catch((err) => {
            console.log(err)
            return {
                'status': false,
                'message': err.body.error.message,
                'body': null
            }
        })
    return result
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    create,
}