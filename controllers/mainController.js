
const {index} = require('../model/productModel')

const controllers = {
    home: (req, res) => {
        const products= index();
        res.render("home",{products});
    },
    register: (req, res)=>{
        res.render("register");
    },
    login: (req, res)=>{
        res.render("login");
    },
    carrito: (req, res)=>{
        res.render("carrito");
    },
    product: (req, res)=>{
        res.render("product_detail");
    },
    edit: (req, res)=>{
        res.render("admin_edit");
    },
    create: (req, res)=>{
        res.render("admin_create")
    },
}

module.exports = controllers
