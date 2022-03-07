const express = require('express');
const router = express.Router();
const faceRoutes = require('./faceRoutes');
const voiceRoutes = require('./voiceRoutes');
const tokenRoutes = require('./tokenRoutes');

router.use('/face', faceRoutes);
router.use('/voice', voiceRoutes);
router.use('/token', tokenRoutes);

module.exports = router;
