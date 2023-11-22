const express = require('express')

const app = express();


app.set('view engine','ejs')
const mainRouter = require('./routes/main')

app.use(express.static(__dirname + "/public"));
app.use(mainRouter)

const PORT = 2000
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`)
})