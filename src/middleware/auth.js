const {Rol} = require("../database/models");

const auth = async(req, res, next) => {
  const route = req.route;
  let userAdmin;
  //console.log(route);
  if (route.path == "/:id/edit" && route.methods.get) {
    userAdmin = await isAuthorized(req, res, next);
  }
  if (route.path == "/create") {
    userAdmin = await isAuthorized(req, res, next);
  }
  // if (route.path == "/") {
  //   userAdmin = await isAuthorized(req, res, next);
  // }
  if (route.path == "/:id") {
    userAdmin = await isAuthorized(req, res, next);
  }

  // if ()
  if (!userAdmin) {
    const baseUrl = req.protocol + "://" + req.get("host");
    return res.redirect(baseUrl + "/login");
  }
  next();
};

const isAuthorized = async (req, res) => {
  
  if (req.session.user) {
    const rol = await Rol.findByPk(req.session.user.id_rol);
    if (rol.nombre == "admin") {
      return true;
    }
  }
  return false;
};

module.exports = {
  auth,
};
