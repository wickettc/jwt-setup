const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
};

module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
    if (jwt_payload.username === 'chase') {
        return done(null, true);
    }
    return done(null, false);
});
