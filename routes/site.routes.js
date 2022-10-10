const express = require('express');
const router  = express.Router();

const siteController = require('../controllers/site.controller');

router.get('/list', siteController.getAllSite);
router.get('/listByPays', siteController.getSitePays);
router.get('/details', siteController.getSite);
router.post('/AddNewSite', siteController.addSite);
router.delete('/delete', siteController.deleteSiteById);

module.exports = router;