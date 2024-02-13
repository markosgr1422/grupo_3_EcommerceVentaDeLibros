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
<<<<<<< HEAD
const fs = require("fs");
=======
const {validationResult} = require('express-validator');
>>>>>>> 0adadcee3b855ad05d7ef844db55d183af4d1299

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
<<<<<<< HEAD
    // llamamos el metodo createProduct
    // console.log("estoy aqui");
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

=======
    
    const errors = validationResult(req);
    // llamamos el metodo createProduct
    if (errors.isEmpty()) //No hay errores, seguimos adelante
    { const product = req.body;
      const autor = await Autor.findOne({
        where: {
          nombre: req.body.autor
        }
      });
      const genero = await Genero.findOne({
        where: {
          nombre: req.body.genero
        }
      });
>>>>>>> 0adadcee3b855ad05d7ef844db55d183af4d1299
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
  } else {
    // Hay errores, volvemos al formulario con los mensajes de error
    res.render('./admin_create', { errors: errors.mapped(), old: req.body });;
  }
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
    const data = req.body;
    let oldProduct = await Libro.findByPk(req.params.id)
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
      const pathFile = path.join(__dirname + '../../../public' + oldProduct.portada)
      console.log(pathFile)
      fs.unlink(pathFile, (err) => {
        if (err) {
          console.error('Error al eliminar el archivo:', err);
        } else {
          console.log('Archivo eliminado correctamente');
        }
      });
      oldProduct.portada = "/images/covers/" + req.file.filename;
    } 

    oldProduct.precio = data.precio
    oldProduct.titulo = data.titulo
    oldProduct.descripcion = data.descripcion
    oldProduct.stock = data.stock

    oldProduct.id_genero = genero.id;
    await oldProduct.save()
    
    console.log(oldProduct)
    
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;

    // deleteProduct(id);
    const libro = Libro.destroy({ where: { id: id } });
    res.redirect("/products");
  },
};

module.exports = productController;
