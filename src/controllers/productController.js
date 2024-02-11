const path = require("path");
const {
  index,
  findOne,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../model/productModel");
const {Libro, Genero, Autor} = require("../database/models");
const { findByPk } = require("../model/userModel");
const db = require("../database/models");
const {validationResult} = require('express-validator');

const productController = {
  getProducts: async(req, res) => {
    // const products = index();
    const products = await Libro.findAll();
    // console.log(products)
    res.render("products", { products, user: req.session.user || null });
  },
  getCreate: (req, res) => {
    res.render("admin_create", { user: req.session.user || null });
  },
  getProductById: async(req, res) => {
    const id = req.params.id;
    // const product = findOne(id);
    // const generos = await Genero.findAll()
    const product = await Libro.findByPk(id, {
      include: [
        {
          model: Genero,
          as: 'genero',
          attributes: ['nombre']
        },
        {
          model: Autor,
          as: 'autor',
          attributes: ['nombre']
        }
      ]
    });
    console.log(product)
    res.render("product_detail", { product, user: req.session.user || null });
  },

  // *********create *******
  createProduct: async (req, res) => {
    // llamamos el metodo createProduct
    // console.log("estoy aqui");
    const product = req.body;
    const autor = await Autor.findOne({
      where: {
        nombre: req.body.autor
      }
    })
    const genero = await Genero.findOne({
      where: {
        nombre: req.body.genero
      }
    })
    
    if (!autor) {
      const newAutor = await Autor.create({nombre: req.body.autor})
      product.id_autor = newAutor.id
    } else {
      product.id_autor = autor.id
    }
    product.id_genero = genero.id
    // aca llamo al metodo del modelo
    product.portada = "/images/covers/" + req.file.filename;
    // luego redirijo
    // createProduct(product);
    const productCreated = await Libro.create(product)
    res.redirect("/products");
  },

  getEditProduct: async (req, res) => {
    const genders = [
      { value: "ficcion", label: "Ficción" },
      { value: "terror", label: "Terror" },
      { value: "autoayuda", label: "Autoayuda" },
      { value: "infantil", label: "Infantil" },
      { value: "policial", label: "Policial" },
      { value: "historia", label: "Historia" },
    ];

    const id = req.params.id;
    // const productToEdit = findOne(id);
    const productToEdit = await Libro.findByPk(id, {
      include: [
        {
          model: Genero,
          as: 'genero'
        },
        {
          model: Autor,
          as: 'autor'
        }
      ]
    });
    res.render("admin_edit", {
      productToEdit,
      genders,
    });
  },

  editProduct: (req, res) => {
    console.log("holis"); // marcos
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;

    // deleteProduct(id);
    const  libro = Libro.destroy({ where: { id: id } })
    res.redirect("/products");
  },
};

module.exports = productController;
