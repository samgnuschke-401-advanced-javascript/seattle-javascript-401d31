'use strict';



const express = require('express');
const app = express();
const logger = require('../routes/logger');
const timeStamp = require('../routes/timeStamp');
const categoryRoutes = require('../routes/category-routes');


let db = [];

//documentation .use

app.use(express.json());
app.use(timeStamp);
app.use(logger);


app.use(categoryRoutes);

app.use('/docs', express.static('./docs'));


//error 404 - not found (route error)
app.use('*', (request, response) => {
    res.status(404).send('404');
});
// app.use(ROUTE, callback);

//error 500 - internal (server side) error
app.use((err, req, res, next) => {
    res.status(500).send(err);
});

// Vinicio - this amount of empty lines might get you into a longer code review


module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        // Vinicio - nothing happens until you call
        app.listen(PORT, () => console.log('I\'m listening'));
    },
};
