const path = require("path");
const {
  index,
  findOne,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../model/productModel");
const { Libro, Genero, Autor } = require("../database/models");
const { findByPk } = require("../model/userModel");
const db = require("../database/models");
const fs = require("fs");
const { validationResult } = require("express-validator");
const genders = [
  { value: "ficcion", label: "Ficción" },
  { value: "terror", label: "Terror" },
  { value: "autoayuda", label: "Autoayuda" },
  { value: "infantil", label: "Infantil" },
  { value: "policial", label: "Policial" },
  { value: "historia", label: "Historia" },
];

const productController = {
  getProducts: async (req, res) => {
    // const products = index();
    const products = await Libro.findAll();
    // console.log(products)
    res.render("products", { products, user: req.session.user || null });
  },
  getCreate: (req, res) => {
    res.render("admin_create", { user: req.session.user || null });
  },
  getProductById: async (req, res) => {
    const id = req.params.id;
    // const product = findOne(id);
    // const generos = await Genero.findAll()
    const product = await Libro.findByPk(id, {
      include: [
        {
          model: Genero,
          as: "genero",
          attributes: ["nombre"],
        },
        {
          model: Autor,
          as: "autor",
          attributes: ["nombre"],
        },
      ],
    });
    // console.log(product)
    res.render("product_detail", { product, user: req.session.user || null });
  },

  // *********create *******
  createProduct: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("./admin_create", {
        errors: errors.mapped(),
        old: req.body,
      }); //Si hay errores, volvemos al formulario
    }
    const product = req.body;
    const autor = await Autor.findOne({
      where: {
        nombre: req.body.autor,
      },
    });
    const genero = await Genero.findOne({
      where: {
        nombre: req.body.genero,
      },
    });
    if (!autor) {
      const newAutor = await Autor.create({ nombre: req.body.autor });
      product.id_autor = newAutor.id;
    } else {
      product.id_autor = autor.id;
    }
    product.id_genero = genero.id;
    // aca llamo al metodo del modelo
    product.portada = "/images/covers/" + req.file.filename;
    // luego redirijo
    // createProduct(product);
    const productCreated = await Libro.create(product);
    res.redirect("/products");
  },

  getEditProduct: async (req, res) => {
    const id = req.params.id;
    // const productToEdit = findOne(id);
    const productToEdit = await Libro.findByPk(id, {
      include: [
        {
          model: Genero,
          as: "genero",
        },
        {
          model: Autor,
          as: "autor",
        },
      ],
    });
    // res.json({productToEdit})
    res.render("admin_edit", {
      productToEdit,
      genders,
    });
  },

  editProduct: async (req, res) => {
    const errors = validationResult(req);
    let oldProduct = await Libro.findByPk(req.params.id, {
      include: [
        {
          model: Genero,
          as: "genero",
        },
        {
          model: Autor,
          as: "autor",
        },
      ],
    });
    if (!errors.isEmpty()) { 
      console.log(errors)
      return res.render("./admin_edit", {
        productToEdit: oldProduct,
        errors: errors.mapped(),
        old: req.body,
        genders,
      })}; //Si hay errores, volvemos al formulario
    const data = req.body;
    const autor = await Autor.findOne({
      where: {
        nombre: req.body.autor,
      },
    });
    const genero = await Genero.findOne({
      where: {
        nombre: req.body.genero,
      },
    });

    if (!autor) {
      const newAutor = await Autor.create({ nombre: req.body.autor });
      oldProduct.id_autor = newAutor.id;
    } else {
      oldProduct.id_autor = autor.id;
    }
    if (req.file) {
      const pathFile = path.join(
        __dirname + "../../../public" + oldProduct.portada
      );
      console.log(pathFile);
      fs.unlink(pathFile, (err) => {
        if (err) {
          console.error("Error al eliminar el archivo:", err);
        } else {
          console.log("Archivo eliminado correctamente");
        }
      });
      oldProduct.portada = "/images/covers/" + req.file.filename;
    }

    oldProduct.precio = data.precio;
    oldProduct.titulo = data.titulo;
    oldProduct.descripcion = data.descripcion;
    oldProduct.stock = data.stock;

    oldProduct.id_genero = genero.id;
    await oldProduct.save();

    return res.redirect(`/products/${oldProduct.id}`);
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;

    // deleteProduct(id);
    const libro = Libro.destroy({ where: { id: id } });
    res.redirect("/products");
  },
};

module.exports = productController;
