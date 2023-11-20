const path = require ("path")

const controllers = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    },
    register: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/register.html"));
    },
    login: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/login.html"));
    },
    carrito: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/carrito.html"));
    },
    product: (req, res)=>{
        res.sendFile(path.resolve((__dirname, "../views/product_detail1.html")));
    },
}

module.exports = controllers
