const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const ruta = path.join(__dirname, "../public/images/covers/");
      callback(null, ruta);
    },
    filename: (req, file, callback) => {
      const newFile = createImageName(file);
  
      callback(null, newFile);
    },
  });
  
  function createImageName(file) {
    return "img-" + Date.now() + "-" + file.originalname;
  }
  
  const upload = multer({ storage });


  module.exports = {upload}