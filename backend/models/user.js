const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  surname: String,
  phone: {
    type: Number,
    unique: true,
  },
  address: String,
  isAdmin: Boolean,
  cartId: mongoose.Schema.ObjectId,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
