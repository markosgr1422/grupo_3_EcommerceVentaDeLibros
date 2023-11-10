const express = require ("express");

const app = express();

app.use(express.static(__dirname + "/public"));



app.get("/registrar", (req, res)=>{
    res.sendFile(__dirname + "/views/registrar.html");
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/product', (req,res)=>{
    res.sendFile(__dirname + '/views/product_detail1.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});

app.listen(1422, () =>{
    console.log("Server UP");
})
