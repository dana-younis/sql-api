'use strict';

const express = require('express');
const router = express.Router();
const interFace = require('../models/data-collection-class-Products');
// const ProductsModel = require('../models/demo-schema.sql');

const InterfaceProducts = new interFace();

router.get('/', getProducts);
router.get('/:id', getProducts);
router.post('/', createProducts);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

async function getProducts(req, res, next) {
  try {
    let id = req.params.id;
    let items = await InterfaceProducts.read(id);
    res.status(200).json(items.rows);
  } catch (error) {
    next({
      error,
    });
  }
}

async function createProducts(req, res, next) {
  
  try {
    let obj = req.body;
     let newItem = await InterfaceProducts.create(obj);
     res.status(200).json(newItem.rows[0]);
    console.log(obj)
  } catch (error) {
    next({
      error,
    });
  }
}

async function updateProducts(req, res, next) {
  try {
    let id = req.params.id;
    const obj = req.body;
    let updatedProducts = await InterfaceProducts.update(id, obj);
    res.status(200).json(updatedProducts.rows[0]);
  } catch (error) {
    next({
      error,
    });
  }
}

async function deleteProducts(req, res, next) {
  try {
    let id = req.params.id;
    let deleted = await InterfaceProducts.delete(id);
    let msg = deleted ? 'Item is deleted' : 'Item was not Found';
    let statusCode = deleted ? 202 : 204;
    res.status(statusCode).send()
  } catch (error) {
    next({
      error,
    });
  }
}

module.exports = router;
