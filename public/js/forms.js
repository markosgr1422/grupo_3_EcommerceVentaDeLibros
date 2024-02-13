window.onload = function(){
    const formulario = document.querySelector(".formulario");

    document.getElementById('titulo').addEventListener('input', function() {
        var titulo = this.value;
        var mensajeTitulo = document.getElementById('mensajeTitulo');
        
        if (titulo.length < 5) {
            mensajeTitulo.style.display = 'flex';
        } else {
            mensajeTitulo.style.display = 'none';
        }
    });
    
    document.getElementById('descripcion').addEventListener('input', function() {
        var descripcion = this.value;
        var mensajeDescripcion = document.getElementById('mensajeDescripcion');
        
        if (descripcion.length < 20) {
            mensajeDescripcion.style.display = 'flex';
        } else {
            mensajeDescripcion.style.display = 'none';
        }
    });

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
                ulErrores.innerHTML += "<li> Error: " + errores[i] + "</li>";
            }
        } else {
            formulario.submit();
        }
        
    });
}
