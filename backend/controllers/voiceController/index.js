const voiceService = require('../../services/voiceService');

const get = async (req, res, next) => {

}

const create = async (req, res, next) => {
    let result = await voiceService.create(req.files);
    res.send(result);
}

const update = async (req, res, next) => {

}

const remove = async (req, res, next) => {

}

module.exports = {
    get,
    create,
    update,
    remove
}