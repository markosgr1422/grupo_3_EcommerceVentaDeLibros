
const db = require("../database/models")
const {index} = require('../../model/productModel');
const User = require('../../model/userModel');

const controllers = {
    home: (req, res) => {
        const products= index();
        res.render("home",{products, user:req.session.user || null});
    },
    carrito: (req, res)=>{
        res.render("carrito", {user:req.session.user || null});
    },
    product: (req, res)=>{
        res.render("product_detail", {user:req.session.user || null});
    },
    edit: (req, res)=>{
        res.render("admin_edit", {user:req.session.user || null});
    },
    create: (req, res)=>{
        res.render("admin_create", {user:req.session.user || null})
    },
}

module.exports = controllers
