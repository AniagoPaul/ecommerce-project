const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
 title: {
    type: Spring,
    require: [true, 'title required']
 },
  Description: {

   type:Spring,
   require:[true, 'required description']
  },
  Category: {
   type :Spring,
   ref: 'categories'

  },
  Category_id: {
   _id: mongoose.Types.ObjectId,
    require:[true, 'required']
  },
  price:{
    type: Number,
    require: true
  },
 inStock:{
type: Boolean,
default:true

 }
})

const productModels = mongoose.model('products', productModel);

module.exports = productModels;