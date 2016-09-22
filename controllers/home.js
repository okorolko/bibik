var description = require('../models/productsDescription');
var lookbook = require('../models/lookbook');

exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    lookbook: lookbook.src
  });
};

exports.info = (req, res) => {
  res.render('info', {
    title: 'Info'
  });
};

exports.products = (req, res) => {
  console.log(description.products)
  res.render('products', {
    title: 'Products',
    products: description.products
  });
};

// reqName - req.url used as id to get specific product
exports.product = (req, res) => {
  var reqName = req.url.match(/\/([^\/]+)\/?$/)[1];
  var obj = description.products[reqName];
  console.log(obj.src2)
  res.render('product', {
    title: obj.name,
    product: obj
  });
};

exports.lookbook = (req, res) => {
  console.log(lookbook.src)
  res.render('lookbook', {
    title: 'Lookbook',
    lookbook: lookbook.src
  });
};

exports.test = (req, res) => {
  res.render('test', {
    title: 'Test',
  });
};
