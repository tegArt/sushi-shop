const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  imageUrl: String,
  category: String,
  ingredients: [String],
  description: String,
  price: Number,
  weight: Number,
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
