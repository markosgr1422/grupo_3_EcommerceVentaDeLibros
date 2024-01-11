
const {index} = require('../model/productModel');
const User = require('../model/userModel');

const controllers = {
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
            id: userToLogin.id,
            first_name: userToLogin.first_name,
            last_name: userToLogin.last_name,
            email: userToLogin.email,
            password: userToLogin.password,
            category: userToLogin.category
        };
        return res.redirect('/');
    }
    return res.render('login', {
        errors: {
            email: {
                msg: 'Los datos ingresados son inválidos'
            }
        }
    })
},
}

module.exports = controllers