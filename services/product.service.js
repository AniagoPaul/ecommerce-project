const express = require('express')
const mongoose = require('mongoose')
const productModels = require('../schema/product-schema')

 class productServices {


      async createProduct(params) {
            const{ title, category_id, Description,} = params

//Adim log in,which allow only admin to create product
            const isAdmin = '';
                if(isAdmin){
                  try{
                  }catch(err){
                        err.status(404)
                  }
                  if(!title || !category_id){

       alert('title and category required')

//if product exist so we dont create same product
         const newproduct = productModels(params);
         const productExist = '';
                  if(!productExist){
              try{
          const savedProduct =  await newproduct.save();
              }catch(err){
                alert('product exists');
              }
                  }
             }
            }
            return savedProduct;
       }

       async findProducts(){
        const productExist = '';
        const instock = '';

        if(productExist || instock){
        const findproduct = await productModels().find();
        }else{alert('product does not exist on stock')}
       }

       async findproduct(params){
        const productExist = '';
        const instock = '';

        if(productExist || instock){
        const findprod = await productModels.findOne({category_id:id});
        }else{alert('product does not exist on stock')}
       
       }
       async delectproduct(params){
        const productExist = '';
        const instock = '';

        if(productExist || instock){
        const delectproduct = await productModels.findByIdAndDelete({category_id :id})
        }else{alert('product does not exist on stock')}
      }
      async updateproduct(params){
        const productExist = '';
        const instock = '';

        if(productExist || instock){
        const updatedproduct = await productModels.findOneAndUpdate({category_id:id},params, {new:true})
      }else{alert('product does not exist on stock')

      }
      return updatedproduct
      }

 }

 productServices = new productObject;
 module.exports = productObject





 
 