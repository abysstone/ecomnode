const express = require('express');

const router = express.Router();

const path = require('path');

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

// module.exports = router;

// exports.routes = router;
// exports.products = products; 

module.exports = router;
