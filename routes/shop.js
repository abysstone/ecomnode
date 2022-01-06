const express = require('express');

const router = express.Router();

const path = require('path');

const rootdir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootdir, 'views', 'shop.html'));
    res.render('shop', { pageTitle: 'Shop', prods: adminData.products, path: '/'});
});

module.exports = router;