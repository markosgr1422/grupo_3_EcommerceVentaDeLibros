import { useEffect, useState } from "react"
import { Tabla } from "./Tabla"

export const UltimoProducto = () => {
    const [ultimoProducto, setUltimoProducto] = useState(null);
    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(results => results.json())
            .then(data => {
                const productosData = data.libros.map(libro => ({
                    titulo: libro.titulo,
                    descripcion: libro.descripcion,
                    precio: libro.precio
                }));
                const ultimoProducto = productosData.length > 0 ? productosData[productosData.length - 1] : null;
                setUltimoProducto(ultimoProducto);
            })

    }, [])

    return (
        <div className="container-fluid">
            <h2>Ultimo producto creado</h2>
            <Tabla informacion={ultimoProducto ? [ultimoProducto] : []} />
        </div>
    )
}