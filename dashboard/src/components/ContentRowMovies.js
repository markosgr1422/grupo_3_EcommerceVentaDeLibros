//INFO DE LA BD (API PRODUCTOS)

import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop() {
    const [bookData, setBookData] = useState(null);
    const [genreData, setGenreData] = useState(null);
    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(response => response.json())
            .then(data => {
                setBookData({
                    color: 'primary',
                    titulo: 'Libros en la Base de Datos',
                    valor: data.meta.count,
                    icono: 'fas fa-film'
                });

                // Puedes ajustar esto según la estructura de tus datos
                setGenreData({
                    color: 'success',
                    titulo: 'Total de Géneros',
                    valor: Object.keys(data.meta.countByCategory).length,
                    icono: 'fas fa-award'
                });

                // Puedes ajustar esto según la estructura de tus datos
                setAuthorData({
                    color: 'warning',
                    titulo: 'Autores',
                    valor: Object.keys(data.meta.countByAuthors).length,
                    icono: 'fas fa-user'
                });
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    return (
        <React.Fragment>
            <div className="row">
                {bookData !== null ? (
                    <>
                        <SmallCard {...bookData} />
                        <SmallCard {...genreData} />
                        <SmallCard {...authorData} />
                    </>
                ) : null}
            </div>
        </React.Fragment>
    );
}

export default ContentRowTop;
