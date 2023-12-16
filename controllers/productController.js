const path = require('path')
const {index, findOne, deleteProduct, createProduct} = require('../model/productModel')



const productController = {
    getProducts: (req, res) => {
        const products = index()
        res.render(path.resolve(__dirname, "../views/products.ejs"), {
            products
        });
    },
    getCreate: (req, res) => {

        res.render("admin_create")
    },
    getProductById: (req, res) => {
        const id = req.params.id
        const product = findOne(id)
        res.render(path.resolve(__dirname, "../views/product_detail.ejs"), {
            product
        });

    },
    // *********create *******
    createProduct: (req,res) => {

        // llamamos el metodo createProduct
        console.log("estoy aqui");
        const product = req.body
		// aca llamo al metodo del modelo
		product.image = req.file.filename
		// luego redirijo
		createProduct(product)
		res.redirect("/products")
    },

    getEditProduct: (req, res) => {
        const id = req.params.id;
        const productToEdit = findOne(id)
        res.render(path.resolve(__dirname, "../views/admin_edit"), {
            productToEdit
        })
    },
    editProduct: (req, res) => {
        console.log('holis aa')   // luciano
    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        console.log("holis")
        deleteProduct(id)
        res.redirect('/products')
    }
}


module.exports = productController;