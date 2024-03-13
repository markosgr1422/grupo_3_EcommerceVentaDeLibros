let errores = [];

window.onload = function () {
  const formulario = document.querySelector(".formulario");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let ulErrores = document.querySelector(".errores");

  formulario.nombre.addEventListener("change", (e) => {
    let nombre = e.target.value.trim();
    if (nombre === "") {
      agregarError("nombre", "Debe ingresar un nombre");
    } else {
      removerError('nombre');
    }
  });

  formulario.apellido.addEventListener("change", (e) => {
    let apellido = e.target.value.trim();
    if (apellido === "") {
      agregarError("apellido", "Debe ingresar un apellido");
    } else {
      removerError('apellido');
    }
  });

  formulario.email.addEventListener("change", (e) => {
    let email = e.target.value.trim();
    if (!emailRegex.test(email)) {
      agregarError("email", "Ingresar un email válido");
    } else {
      removerError('email')
    }
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    ulErrores.innerHTML = "";
  
    if (formulario.password.value.trim() === "") {
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
      formulario.submit();
    }
  });
};

function agregarError(name, msg) {
  const index = errores.findIndex((error) => error.name === name);
  if (index === -1) {
    errores.push({ name: name, msg: msg });
  }
}

function removerError(name) {
  errores = errores.filter((error) => error.name !== name);
}
