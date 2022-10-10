const express = require('express');
const router  = express.Router();

const mesureController = require('../controllers/mesure.controller');

router.get('/list', mesureController.getAllMesure);
router.get('/listByBox', mesureController.getMesureBox);
router.get('/details', mesureController.getMesure);
router.post('/AddNewMesure', mesureController.addMesure);
router.delete('/delete', mesureController.deleteMesureById);

module.exports = router;