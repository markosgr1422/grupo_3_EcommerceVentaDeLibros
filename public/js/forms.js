window.onload = function(){
const formulario = document.querySelector(".formulario");

formulario.addEventListener('submit', function(event) {
    event.preventDefault();    
    let campoTitulo = document.querySelector('input[name="titulo"]');
    let campoDescripcion = document.querySelector('input[name="descripcion"]');
    if (campoTitulo.value === "") {
        alert("Título no debe estar vacío");
        return;
    }
    if (campoTitulo.value.length <= 5) {
        alert("Título debe tener al menos 5 caracteres");
        return;
    }
    if (campoDescripcion.value.length <= 20) {
        alert("El campo descripción debe tener al menos 20 caracteres");
        return;
    }
    formulario.submit();
});
}