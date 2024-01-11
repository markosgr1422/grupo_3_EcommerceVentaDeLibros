const auth = (req, res, next) => {
  const route = req.route;
  let userAdmin;
  //console.log(route);
  if (route.path == "/:id/edit" && route.methods.get) {
    userAdmin = isAuthorized(req, res, next);
  }
  if (route.path == "/create") {
    userAdmin = isAuthorized(req, res, next);
  }
  if (route.path == '/' && route.methods.post) {
      userAdmin = isAuthorized(req, res, next)
  }
  if (route.path == "/:id" && route.methods.delete) {
    userAdmin = isAuthorized(req, res, next);
  }

  // if ()
  if (!userAdmin) {
    const baseUrl = req.protocol + "://" + req.get("host");
    return res.redirect(baseUrl + "/login");

  }
  next();
};

const isAuthorized = (req, res) => {
  if (req.session.user) {
    if (req.session.user.category == 'admin') {
      return true;
    }
  }
  return false
};

module.exports = {
  auth,
};
