const path = require('path')
const {index, findOne, deleteProduct, createProduct,updateProduct} = require('../model/productModel')



const productController = {
    getProducts: (req, res) => {
        const products = index()
        res.render("products",{products, user:req.session.user || null});
    },
    getCreate: (req, res) => {
        res.render("admin_create",{user:req.session.user || null})
    },
    getProductById: (req, res) => {
        const id = req.params.id
        const product = findOne(id)
        res.render("product_detail",{product, user:req.session.user || null});

    },

    // *********create *******
    createProduct: (req,res) => {

        // llamamos el metodo createProduct
        console.log("estoy aqui");
        const product = req.body
		// aca llamo al metodo del modelo
		product.image = "/images/covers/" + req.file.filename
		// luego redirijo
		createProduct(product)
		res.redirect("/products")
    },

    getEditProduct: (req, res) => {
            
        const genders = [ {value:"ficcion", label:"Ficción"},
        {value:"terror", label:"Terror"},
        {value:"autoayuda", label:"Autoayuda"},
        {value:"infantil", label:"Infantil"},
        {value:"policial", label:"Policial"},
        {value:"historia", label:"Historia"}] 

        const id = req.params.id;
        const productToEdit = findOne(id)
        console.log(productToEdit);
        res.render("admin_edit", {
            productToEdit,
            genders
        })
    },

    editProduct: (req, res) => {
        
        console.log('holis')   // marcos 

    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        
        deleteProduct(id)
        res.redirect('/products')
    }
}


module.exports = productController;