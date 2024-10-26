const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getProducts, getProductById, updateProduct, deleteProduct, addProduct } = require('../controllers/product.controller');

router.get('/', getProducts);

router.get('/:id', getProductById);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.post('/add', addProduct);

module.exports = router;