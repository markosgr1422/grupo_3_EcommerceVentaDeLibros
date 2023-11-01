const express = require ("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(1422, () =>{
    console.log("Server UP");
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/registrar.html");
});

