const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const { index } = require("../model/productModel");

const User = require("../model/userModel");
const { Usuario, Rol } = require("../database/models");

const controllers = {
  register: (req, res) => {
    res.render("register");
  },
  userRegister: async (req, res) => {
    console.log(bcryptjs.hashSync(req.body.password, 10));
    const resultValidation = validationResult(req);

    if (!resultValidation.isEmpty()) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    // let userInDB = User.findByField("email", req.body.email);
    let userInDB = await Usuario.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userInDB) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      id_rol: 1,
      avatar: "/images/users/default.png",
      password: bcryptjs.hashSync(req.body.password, 10),
    };

    // let userCreated = User.create(userToCreate);
    const userCreated = await Usuario.create(userToCreate);
    const { password, ...userWithoutPass } = userCreated.dataValues;
    req.session.user = userWithoutPass;
    console.log(req.session.user, userWithoutPass);
    return res.redirect("/");
  },
  login: (req, res) => {
    res.render("login");
  },
  loginProcess: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("./login", {
        errors: errors.mapped(),
        old: req.body,
      });
    }

    // let userToLogin = User.findByField('email', req.body.email);
    let userToLogin = await Usuario.findOne({
      include: {
        model: Rol,
        as: "rol",
        attributes: ["nombre"],
      },
      where: {
        email: req.body.email,
      },
    });

    if (
      userToLogin &&
      bcryptjs.compareSync(req.body.password, userToLogin.password)
    ) {
      // req.session.user = {
      //     id: userToLogin.id,
      //     nombre: userToLogin.first_name,
      //     apellido: userToLogin.last_name,
      //     email: userToLogin.email,
      //     category: userToLogin.category
      // };
      const { password, ...userWithoutPass } = userToLogin.dataValues;
      console.log(userToLogin.dataValues);
      req.session.user = userWithoutPass;
      return res.redirect("/perfil");
    }
    return res.render("login", {
      errors: {
        email: {
          msg: "Los datos ingresados son inválidos",
        },
      },
    });
  },
  logout: async (req, res) => {
    delete req.session.user;
    res.redirect("/login");
  },
  perfil: async (req, res) => {
    console.log(req.session.user);
    if (req.session.user == undefined) {
      return res.redirect("/");
    } else {
      console.log(req.session.user)
      res.render("perfil_user", { user: req.session.user });
    }
  },
};

module.exports = controllers;
