'use strict';

const isValid = require('./isValid');
const express = require('express');
const router = express.Router();


// Route to Get All Categories
router.get('/categories', (req, res, next) => {
    let count = db.length;
    let results = db;
    res.json({ count, results });
});

// Route to Create a Category
router.post('/categories', isValid, (req, res, next) => {
    let record = req.body;
    console.log('I am app.post /categories');
    record.id = Math.random();
    db.push(record);
    res.json(record);
});

module.exports = router; 

