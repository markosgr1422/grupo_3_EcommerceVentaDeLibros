const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const model = {
  products: join(__dirname, "../data", "productsDatabaseCopy.json"),
  index: () => JSON.parse(readFileSync(model.products, { encoding: "utf-8" })),
  findOne: (id) => model.index().find((producto) => producto.id == id),
  createProduct: (product) => {
    // 1. Traer todos los prods
    const allProducts = model.index()
    // 2. Crear identificador unico
    product.id = Date.now()
    
    // 3. pushear el producto nuevo en la lista de productos
    allProducts.push(product)
    // 4. volver a guardar los productos en el JSON
    writeFileSync(model.products, JSON.stringify(allProducts, null, 2 ))
  },
  updateProduct: (newProduct, id) => {
    const product = model.findOne(id);
    const allProducts = model.index();
    const indiceProducto = allProducts.findIndex((product) => product.id == id);

    allProducts[indiceProducto] = { ...product, ...newProduct };

    writeFileSync(model.products, JSON.stringify(allProducts));
  },
  deleteProduct: (id) => {
    let allProducts = model.index();
    let indiceProducto = allProducts.findIndex((product) => product.id == id);

    if (indiceProducto > -1) {
      allProducts.splice(indiceProducto, 1);
      writeFileSync(model.products, JSON.stringify(allProducts));
    }
  },
};

module.exports = model;
