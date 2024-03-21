let errores = [];

window.onload = function () {
  const formulario = document.querySelector(".formulario");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let ulErrores = document.querySelector(".errores");


  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    ulErrores.innerHTML = "";
  
    if (formulario.password.value.trim() === "") {
      agregarError("password", "Debe ingresar una contraseña");
    } else {
      removerError("password");
    }
    
      let email = formulario.email.value.trim();
      if (!emailRegex.test(email)) {
        agregarError("email", "Ingresar un email válido");
      } else {
        removerError('email')
      };

      let apellido = formulario.apellido.value.trim();
      if (apellido === "") {
        agregarError("apellido", "Debe ingresar un apellido");
      } else {
        removerError('apellido');
      };
    
      let nombre = formulario.nombre.value.trim();
      if (nombre === "") {
        agregarError("nombre", "Debe ingresar un nombre");
      } else {
        removerError('nombre');
      };
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
