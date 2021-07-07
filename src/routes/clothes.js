'use strict';

const express = require('express');
const router = express.Router();

const interFace = require('../models/data-collection-class-clothes');
// const clothesItem = require('../models/demo-schema.sql');
const clothesInstance = new interFace();

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

async function getClothes(req, res, next) {
  try {
    let id = req.params.id;
    let items = await clothesInstance.read(id);
    res.status(200).json(items.rows);
  } catch (error) {
    next({
      error,
    });
  }
}

async function createClothes(req, res, next) {
  try {
    let obj = req.body;
    let newItem = await clothesInstance.create(obj);
    res.status(200).json(newItem.rows[0]);
  } catch (error) {
    next({
      error,
    });
  }
}

async function updateClothes(req, res, next) {
  try {
    let id = req.params.id;
    const obj = req.body;
    let updatedClothes = await clothesInstance.update(id, obj);
    console.log(updatedClothes.rows[0]);
    res.status(200).json(updatedClothes.rows[0]);
  } catch (error) {
    next({
      error,
    });
  }
}

async function deleteClothes(req, res, next) {
  try {
    let id = req.params.id;
    let deleted = await clothesInstance.delete(id);
    let msg = deleted ? 'Item is deleted' : 'Item was not Found';
    let statusCode = deleted ? 202 : 204;
    res.status(statusCode).json(deleted.rows);
  } catch (error) {
    next({
      error,
    });
  }
}

module.exports = router;
