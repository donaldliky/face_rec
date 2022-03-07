const faceService = require('../../services/faceService');

const get = async (req, res, next) => {

}

const create = async (req, res, next) => {
    let result = await faceService.create(req.body.image);
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