const express = require('express')
const userRouter = require('./routes/userRouter')
const methodOverride =  require('method-override');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));
var session = require('express-session');

app.set('view engine','ejs')
const mainRouter = require('./routes/main')
const productRouter = require('./routes/productRouter')
app.use(session( {secret: 'secret'}));
app.use('/', userRouter)
app.use('/', mainRouter)
app.use('/products', productRouter)

const PORT = 2000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo http://localhost:${PORT}`)
})

