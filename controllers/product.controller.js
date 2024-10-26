const Product = require("../models/product.model");


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (product) {
            res.send({ message: 'Product updated successfully' });
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.send({ message: 'Product deleted successfully' });
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            image: req.body.image
        });

        product.save().then((data) => {
            res.send(data);
        }).catch((error) => {
            res.status(500).send({ message: error.message });
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


module.exports = { getProducts, getProductById, updateProduct, deleteProduct, addProduct };