const express = require("express");
const path = require("path");
const multer = require("multer");
const validate = require('../middleware/validateProduct')
const { body, validationResult } = require('express-validator');

const productController = require("../controllers/productController");
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/authStorage");
const validateProduct = require("../middleware/validateProduct");


const router = express.Router();

/*** GET ALL PRODUCTS ***/
router.get("/", productController.getProducts);

//*** CREATE PRODUCT ***/
router.get("/create", auth, productController.getCreate);
router.post("/", upload.single("image"), validateProduct, productController.createProduct);

/*** EDIT ONE PRODUCT ***/
<<<<<<< HEAD
router.get("/:id/edit", productController.getEditProduct);
// router.get("/:id/edit", auth, productController.getEditProduct);
// router.put("/:id", auth, productController.editProduct);
router.put("/:id", upload.single('image'), productController.editProduct);
=======
router.get("/:id/edit", auth, productController.getEditProduct);
router.put("/:id", auth, validateProduct, productController.editProduct);
>>>>>>> 0adadcee3b855ad05d7ef844db55d183af4d1299

/*** DELETE ONE PRODUCT***/
router.delete("/:id", auth, productController.deleteProduct);

/*** GET ONE PRODUCT ***/
router.get("/:id", productController.getProductById);
module.exports = router;
