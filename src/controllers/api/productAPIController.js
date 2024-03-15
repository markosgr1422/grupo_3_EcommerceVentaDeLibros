const {Libro, Genero, Autor} = require('../../database/models');

const productAPIController = {
    'list': async (req, res) => {
        Libro.findAll()
        .then(libros => {
            libros = libros.map(libro => ({...libro.dataValues, detail: `/api/products/${libro.id}`}))
            let respuesta = {
                meta: {
                    status : 200,
                    count: libros.length,
                    countByCategory: {},
                    url: '/api/products'
                },
                libros
            }
                res.json(respuesta);
            })
            .catch(error => {
                let respuesta = {
                    meta: {
                        status: 500,
                        error: "Error al obtener libro",
                        mensaje: error.message
                    },
                    data: null
                };
                res.status(500).json(respuesta);
            });
    },
    
    'detail': async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id, {
            include: [
                { model: Genero, as: 'genero' },
                { model: Autor, as: 'autor' }
            ]
        });

        if (!libro) {
            const respuesta = {
                meta: {
                    status: 404,
                    mensaje: "Libro no encontrado"
                },
                data: null
            };
            return res.status(404).json(respuesta);
        }

        const respuesta = {
            meta: {
                status: 200,
                total: 1,
                url: '/api/products/:id'
            },
            data: libro
        };
        res.json(respuesta);
    } catch (error) {
        const respuesta = {
            meta: {
                status: 500,
                error: "Error al obtener libro",
                mensaje: error.message
            },
            data: null
        };
        res.status(500).json(respuesta);
    }
}

    
    
}

module.exports = productAPIController;

//CONSIGNAS
// api/products/
// ○ Deberá devolver un objeto literal con la siguiente estructura:
// ■ count → cantidad total de productos en la base.
// ■ countByCategory → objeto literal con una propiedad por categoría
// con el total de productos.
// ■ products → array con la colección de productos, cada uno con:
// ● id
// ● name
// ● description
// ● un array con principal relación de uno a muchos (ej:
// categories).
// ● detail → URL para obtener el detalle.


// api/products/:id
// ○ Deberá devolver un objeto literal con la siguiente estructura:
// ■ una propiedad por cada campo en base.
// ■ un array por cada relación de uno a muchos (categories, colors,
// sizes, etc).
// ■ Una URL para la imagen del producto (para mostrar la imagen).