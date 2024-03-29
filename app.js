const express = require("express");
const userRouter = require("./src/routes/userRouter");
const methodOverride = require("method-override");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors({
  origin: '*',
}))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
var session = require("express-session");

app.set("view engine", "ejs");
const mainRouter = require("./src/routes/main");
const productRouter = require("./src/routes/productRouter");
const productAPIRouter = require("./src/routes/api/products");
const userAPIRouter = require("./src/routes/api/user");

app.use(session({ secret: "secret" }));
app.use("/", userRouter);
app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/api/products", productAPIRouter);
app.use("/api/users", userAPIRouter);

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo http://localhost:${PORT}`);
});
