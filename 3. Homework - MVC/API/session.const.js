const session = require('express-session');

module.exports = session({
    secret: ['fdggregerfdc'],
    name: 'cookie_id',
    cookie: {
        maxAge: 5 * 60 * 60 * 1000,
    },
    saveUninitialized: true,
    resave: false
});