const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const {index} = require('../model/productModel');

const User = require('../model/userModel');

const controllers = {
    register: (req, res)=>{
        res.render("register");
    },
    userRegister: (req,res)=>{
      
        const resultValidation = validationResult(req)
       
        if(!resultValidation.isEmpty()){
            return res.render("register",{
            errors: resultValidation.mapped(),
            oldData: req.body
                 
        })
        }
        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			
		}

		let userCreated = User.create(userToCreate);
        
        return res.redirect('/login')
    }       
    ,
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