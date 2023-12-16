const express = require('express');
const path = require("path")
const multer = require("multer")

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination : (req,res,callback)=>{
        const ruta = path.join(__dirname,"../public/images/nenwBook")
        callback(null,ruta)
    },
    filename:(req,res,callback)=>{
        const newFile = createImageName(file)

        callback(null,newFile)
    }
})

function createImageName(file) {
    return 'img-' + Date.now() + '-' + file.originalname
  }

const upload = multer({storage})

const router = express.Router();


/*** GET ALL PRODUCTS ***/
router.get('/', productController.getProducts);

/*** GET ONE PRODUCT ***/
router.get('/:id', productController.getProductById);

// Create
router.get('/create', productController.getCreate);
router.post('/',upload.single("images"), productController.createProduct);


/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productController.getEditProduct);
router.put('/:id', productController.editProduct);

/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.deleteProduct);


module.exports = router;