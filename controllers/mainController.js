
const {index} = require('../model/productModel');
const User = require('../model/userModel');

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
    loginProcess: (req, res)=>{
        let userToLogin = User.findByField('email', req.body.email);
        if (userToLogin && userToLogin.password === req.body.password) {
            req.session.user = {
                first_name: userToLogin.first_name,
            };
            const logedUser = req.session.user;
            return res.send(`Hola, ${logedUser.first_name}`);
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Los datos ingresados son inválidos'
                }
            }
        })
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
