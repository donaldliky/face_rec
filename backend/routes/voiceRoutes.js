const express = require('express');

const router = express.Router();
const voiceController = require('../controllers/voiceController');

router.get('/', voiceController.get);
router.post('/', voiceController.create);
router.put('/', voiceController.update);
router.delete('/', voiceController.remove);

module.exports = router;
