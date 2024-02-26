
let errores = [];

window.onload = function () {
  // const formulario = document.querySelector(".formulario");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formulario = document.forms["loginForm"];
  let ulErrores = document.querySelector(".errores");

  formulario.email.addEventListener("change", (e) => {
    let email = e.target.value;
    console.log(!emailRegex.test(email));
    if (!emailRegex.test(email)) {
        agregarError("email", "Ingresar un email válido");
    } else {
      removerError('email')
    }
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    ulErrores.innerHTML = "";
  
    if (formulario.password.value == "") {
      agregarError("password", "Debe ingresar una contraseña");
    } else {
      removerError("password");
    }
  
    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
        if (!document.getElementById(errores[i].name + "Error")) {
          ulErrores.innerHTML +=
            `<li id=${errores[i].name + "Error"}>` + errores[i].msg + "</li>";
        }
      }
    } else {
    //   formulario.submit();
    }
  });
};

function agregarError(name, msg) {
  const index = errores.find((error) => error.name == name);
  if (!index) {
    errores.push({ name: name, msg: msg });
  }
}

function removerError(name) {
  errores = errores.filter((error) => error.name !== name);
}
