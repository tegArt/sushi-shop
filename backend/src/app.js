const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/sushi-shop');

const db = mongoose.connection;

db.on('error', () => {
  console.error('connection error');
});

db.once('open', () => {
  console.log('Connection Succeeded');
});

app.post('/products', (req, res) => {
  const newProduct = new Product({
    title: req.body.title || '',
    imageUrl: req.body.imageUrl || '',
    category: req.body.category || '',
    ingredients: req.body.ingredients || [],
    description: req.body.description || '',
    price: req.body.price || 0,
    weight: req.body.weight || 0,
  })

  newProduct.save(function (error) {
    if (error) {
      console.log(error);
    }

    res.send({
      success: true,
      message: 'Product saved successfully!'
    });
  })
});

app.get('/products', (req, res) => {
  let filter = {};

  if (req.query.hasOwnProperty('filter')) {
    filter = JSON.parse(req.query.filter);
    console.log(filter);
  }

  Product.find(filter, function (error, products) {
    if (error) {
      console.error(error);
    }

    res.send({
      products: products,
    });
  });
});

app.listen(process.env.PORT || 8081);
