// const products = [];
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { pageTitle: 'All Products', prods: products, path: '/products'});
    });
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        // console.log(product);
        res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'});
    });
}

exports.getIndex = (req, res, next) =>
{
    Product.fetchAll((products) => {
        res.render('shop/index', { pageTitle: 'Shop', prods: products, path: '/'});
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart'});
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: 'Your Orders', path: '/orders'});
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
}