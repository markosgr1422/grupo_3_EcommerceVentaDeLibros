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
        res.render(path.resolve(__dirname, "../views/product_detail1.ejs"));
    },
}

module.exports = controllers
