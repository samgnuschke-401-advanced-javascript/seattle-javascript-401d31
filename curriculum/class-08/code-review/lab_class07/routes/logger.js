'use strict';

module.exports = (req, res, next) => {
    console.log(`TIMELOG: ${req.method} :: ${req.path} :: ${req.requestTime}`);
    next();
};
