window.onload = function(){
    const formulario = document.querySelector(".formulario");

    formulario.addEventListener('submit', function(event) {
        let errores = [];
        let campoTitulo = document.querySelector('input[name="titulo"]');
        let campoDescripcion = document.querySelector('input[name="descripcion"]');
        
        if (campoTitulo.value === "") {
            errores.push("Título no debe estar vacío");
        } 
        if (campoTitulo.value.length <= 5) {
            errores.push("Título debe tener al menos 5 caracteres");
        }
        if (campoDescripcion.value.length <= 20) {
            errores.push("Descripción debe tener al menos 20 caracteres");
        }
        
        if (errores.length > 0) {
            event.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        } else {
            formulario.submit();
        }
    });
}
