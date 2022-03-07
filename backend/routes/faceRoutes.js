const express = require('express');
const router = express.Router();
const faceController = require('../controllers/faceController');

router.get('/', faceController.get);
router.post('/', faceController.create);
router.put('/', faceController.update);
router.delete('/', faceController.remove);

module.exports = router;
