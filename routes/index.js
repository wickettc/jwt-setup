var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get(
    '/protected',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        return res
            .status(200)
            .sendFile('protected.html', { root: './public/' });
    }
);

module.exports = router;
