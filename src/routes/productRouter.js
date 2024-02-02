const express = require("express");
const path = require("path");
const multer = require("multer");


const productController = require("../controllers/productController");
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/authStorage");


const router = express.Router();

/*** GET ALL PRODUCTS ***/
router.get("/", productController.getProducts);


// Create
router.get("/create", auth, productController.getCreate);
router.post("/", auth, upload.single("image"), productController.createProduct);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", auth, productController.getEditProduct);
router.put("/:id", auth, productController.editProduct);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", auth, productController.deleteProduct);

/*** GET ONE PRODUCT ***/
router.get("/:id", productController.getProductById);
module.exports = router;
