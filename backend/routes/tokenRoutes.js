const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.get('/', tokenController.get);
router.post('/', tokenController.create);
router.put('/', tokenController.update);
router.delete('/', tokenController.remove);

module.exports = router;
