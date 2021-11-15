const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema for item
const ItemSchema = new Schema({
  username: {
    type: String,
    required: [true, 'The item text field is required']
  },
  email: {
    type: String,
    required: [true, 'The item text field is required']
  },
  win: {
    type: Number,
  },
  lose: {
    type: Number,
  }
})
//create model for item
const Item = mongoose.model('item', ItemSchema);
module.exports = Item;