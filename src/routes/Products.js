'use strict';

const express = require('express');
const router = express.Router();
const interFace = require('../models/data-collection-class-Products');
// const foodModel = require('../models/demo-schema.sql');

const InterfaceProducts = new interFace();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res, next) {
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

async function createFood(req, res, next) {
  
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

async function updateFood(req, res, next) {
  try {
    let id = req.params.id;
    const obj = req.body;
    let updatedFood = await InterfaceProducts.update(id, obj);
    res.status(200).json(updatedFood.rows[0]);
  } catch (error) {
    next({
      error,
    });
  }
}

async function deleteFood(req, res, next) {
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
