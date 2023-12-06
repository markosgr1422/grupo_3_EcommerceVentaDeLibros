const path = require('path')
const {index, findOne, deleteProduct} = require('../model/productModel')



const productController = {
    getProducts: (req, res) => {
        const products = index()
        res.render(path.resolve(__dirname, "../views/products.ejs"), {
            products
        });
    },
    getCreate: (req, res) => {
        res.render(path.resolve(__dirname, "../views/admin_create"))
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
    getEditProduct: (req, res) => {
        const id = req.params.id;
        const productToEdit = findOne(id)
        res.render(path.resolve(__dirname, "../views/admin_edit"), {
            productToEdit
        })
    },
    editProduct: (req, res) => {
        console.log('holis aa')
    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        console.log("holis")
        deleteProduct(id)
        res.redirect('/products')
    }
}


module.exports = productController;