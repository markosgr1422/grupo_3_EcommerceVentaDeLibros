const path = require ("path")

const controllers = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../views/home.ejs"));
    },
    register: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/register.ejs"));
    },
    login: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/login.ejs"));
    },
    carrito: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/carrito.ejs"));
    },
    product: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/product_detail.ejs"));
    },
    edit: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/admin_edit.ejs"));
    },
    create: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/admin_create.ejs"));
    },
}

module.exports = controllers
