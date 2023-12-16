const express = require('express')

const methodOverride =  require('method-override');

const app = express();

app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));

app.set('view engine','ejs')
const mainRouter = require('./routes/main')
const productRouter = require('./routes/productRouter')

app.use('/', mainRouter)
app.use('/products', productRouter)

const PORT = 2000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo http://localhost:${PORT}`)
})