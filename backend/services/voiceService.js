const { adminDb } = require('../config/firebase.config');
const config = require('../config');
// pull in the required packages.
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");

const subscriptionKey = config.voiceSubscriptionKey;
const serviceRegion = config.voiceServiceRegion; // e.g., "westus"
const locale = "en-us";

const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
const client = new sdk.VoiceProfileClient(speechConfig);

const create = async (files) => {
    const uploadResult = upload(files)
    if (uploadResult.status == false) {
        return uploadResult
    } else {
        // fs.unlinkSync(uploadResult.body)
        const result = await voiceIdentify(uploadResult.body)
        return {
            'status': true,
            'message': 'Voice Profile Created!',
            'body': 'Profile ID'
        }
    }
}

const upload = (files) => {

    if (files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = files.file;
    const index = file.name.lastIndexOf('.')
    const format = file.name.substring(index, file.name.length)
    const name = new Date().getTime().toString() + format

    file.mv(`uploads/voice/${name}`, err => {
        if (err) {
            return {
                'status': false,
                'message': 'File Upload Failed!',
                'body': null
            }
        }
    });

    return {
        'status': true,
        'message': 'File Upload Success!',
        'body': 'uploads/voice/' + name
    }
}

const voiceIdentify = async (file) => {
    const createProfileResult = await createProfile()
    // const deleteProfileResult = await deleteProfile()
    return createProfileResult
}

const createProfile = async () => {
    console.log("Text Independent Identification:\n");
    var profile = null;
    try {
        // Create the profile.
        profile = await new Promise((resolve, reject) => {
            client.createProfileAsync(sdk.VoiceProfileType.TextIndependentIdentification, locale, result => { resolve(result); }, error => { reject(error); });
        });
        console.log("Created profile ID: " + profile.profileId);
    }
    catch (error) {
        console.log("Error:\n" + error);
    }
    finally {
        if (profile !== null) {
            console.log("Deleting profile ID: " + profile.profileId);
            await new Promise((resolve, reject) => {
                client.deleteProfileAsync(profile, result => { resolve(result); }, error => { reject(error); });
            });
        }
    }
}

module.exports = {
    create
}