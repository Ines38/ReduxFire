const express = require('express');
const router  = express.Router();

const boxController = require('../controllers/box.controller');

router.get('/list', boxController.getAllBox);
router.get('/listByEtat', boxController.getBoxEtat);
router.get('/details', boxController.getBox);
router.post('/AddNewBox', boxController.addBox);
router.delete('/delete', boxController.deleteBoxById);

module.exports = router;