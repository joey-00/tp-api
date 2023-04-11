const express = require('express');
const router = express.Router();
const {list, detail} = require('../../controllers/api/genresController');

/* api */
router
    .get('/genres', list)
    .get('/genres/detail/:id', detail)


module.exports = router;