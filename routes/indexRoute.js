var express = require('express');
var router = express.Router();
var indexCtrl =  require("../controllers/indexController");

/* GET home page. */
router.get('/', indexCtrl.serveIndex);

router.get('/imagesearch/:query', indexCtrl.findImages);

router.get('/latest/imagesearch/', indexCtrl.getLatest);

module.exports = router;
