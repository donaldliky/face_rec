const tokenService = require('../../services/tokenService');

const get = async (req, res, next) => {

}

const create = async (req, res, next) => {
    let result = await tokenService.create(req.body);
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