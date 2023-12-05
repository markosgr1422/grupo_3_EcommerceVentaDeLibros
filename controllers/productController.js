const path = require('path')
const {index, findOne} = require('../model/productModel')

const productController = {
    getProducts: (req, res) => {
        const products = index()
        res.render(path.resolve(__dirname, "../views/products.ejs"), {
            products
        });
    },
    getCreate: () => {

    },
    getProductById: (req, res) => {
        const id = req.params.id
        const product = findOne(id)
        res.render(path.resolve(__dirname, "../views/product_detail.ejs"), {
            product
        });

    },
    createProduct: () => {

    },
    getEditProduct: () => {

    },
    editProduct: () => {

    },
    deleteProduct: () => {

    }
}


module.exports = productController;