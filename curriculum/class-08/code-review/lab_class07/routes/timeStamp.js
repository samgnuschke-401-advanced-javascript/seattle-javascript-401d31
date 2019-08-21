'use strict';

module.exports = (req, res, next) => {
//our middleware function to log paths and time
    req.requestTime = new Date();
    next();
};
