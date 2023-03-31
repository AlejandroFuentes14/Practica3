let express = require('express');

let router = express.Router();

router.get('/person', (req, res) => {
    res.send('haz solicitado un listado de personas');
});

module.exports = router;