const mongoose= require('mongoose');

const productSchema=new mongoose.Schema({
name:{
  type:String,
  required:true,
  trim:true
},
description:{
  type:String,
  trim:true
},
image:{
  type:String,
  required:true
},
price:{
  type:Number,
  required:true,
  min:0
},
category:{
  type:String,
  required:true,
  trim:true
}
}, { timestamps: true });
module.exports=mongoose.model('Product',productSchema,'products');