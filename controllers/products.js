// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    // res.sendFile(path.join(rootdir, 'views', 'shop.html'));
    // console.log('shop.js', adminData.products);
    // const products = adminData.products;
    res.render('shop', { pageTitle: 'Shop', prods: products, path: '/'});
}