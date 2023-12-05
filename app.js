const express = require('express')

const app = express();


app.set('view engine','ejs')
const mainRouter = require('./routes/main')
const productRouter = require('./routes/productRouter')

app.use(express.static(__dirname + "/public"));
app.use('/', mainRouter)
app.use('/products', productRouter)

const PORT = 2000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo http://localhost:${PORT}`)
})