const express = require('express');
const productObject = require('../services/product.service')

   const creatproduct = async (res,req) => {
    try{
        const pvalue = res.body;
        const createprod = await productObject.createProduct(pvalue);
 res.status(201);
 res.json(createprod)
    }catch(err){
err.status(404);
    }
 }

  const readAll = async (req,res) => {
        try{
            const findprod = productObject.findProducts();
            res.json(findprod)
        }catch(err){
        res.status(404)
        }

  }
    const readOne = async (req, res) => {
    try {
        const { category_id:id } = req.params;
        const oneprod = await productObject.fiidproduct({category_id:id})
        res.json(oneprod)
    } catch (error) {
        throw new Error(error)
    }
}
 const deleteOne = async (req, res) => {
    try {
        const { category_id:id } = req.params;
        const delprod = await productObject.delectproduct({category_id:id})
        res.json(delprod)
    } catch (error) {
        throw new Error(error)
    }
}