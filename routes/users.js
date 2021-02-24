var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.sendFile('login.html', { root: './public/' });
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    if (username === 'chase') {
        if (password === 'test') {
            const opts = {};
            opts.expiresIn = 120;
            const secret = process.env.SECRET_KEY;
            const token = jwt.sign({ username }, secret, opts);
            // return res.status(200).json({
            //     msg: 'Authorized',
            //     token,
            // });
            return res.sendFile('protected.html', { root: './public/' });
        }
    }
    return res.status(401).json({ msg: 'auth failed' });
});

module.exports = router;
