const book = {
    title: "Título del Libro",
    cover: "ruta/a/la/portada_del_libro.jpg",
    author: "Nombre del Autor",
    genre: "Género del Libro",
    publisher: "Nombre de la Editorial",
    publicationDate: "Enero 1, 2023",
    isbn: "978-1234567890",
    pages: 300,
    price: 19.99,
    language: "Español",
    format: "Tapa dura",
    dimensions: "15 cm x 22 cm",
    rating: "★★★★☆ (4/5 estrellas)",
    description: "Aquí puedes agregar una descripción más detallada del libro y su trama."
};

function loadBookDetails() {
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-cover").src = book.cover; // Asignar la ruta correcta de la imagen de la portada del libro
    document.getElementById("book-author").textContent = `Autor: ${book.author}`;
    document.getElementById("book-genre").textContent = `Género: ${book.genre}`;
    document.getElementById("book-publisher").textContent = `Editorial: ${book.publisher}`;
    document.getElementById("book-publication-date").textContent = `Fecha de Publicación: ${book.publicationDate}`;
    document.getElementById("book-isbn").textContent = `ISBN: ${book.isbn}`;
    document.getElementById("book-pages").textContent = `Número de Páginas: ${book.pages}`;
    document.getElementById("book-price").textContent = `Precio: $${book.price}`;
    document.getElementById("book-language").textContent = `Idioma: ${book.language}`;
    document.getElementById("book-format").textContent = `Formato: ${book.format}`;
    document.getElementById("book-dimensions").textContent = `Dimensiones: ${book.dimensions}`;
    document.getElementById("book-rating").textContent = `Calificación: ${book.rating}`;
    document.getElementById("book-description").textContent = `Descripción: ${book.description}`;
}

window.addEventListener("load", loadBookDetails);
