import { useEffect, useState } from "react"
import { Tabla } from "./Tabla"

export const TablaProductos = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(results => results.json())
            .then(data => {
                setProductos(data.libros.map(libro => {
                    return {
                        titulo: libro.titulo,
                        descripcion: libro.descripcion,
                        precio: libro.precio
                    }
                }))
            })

    }, [])
    return (
        <div className="container-fluid">
            <h2>Productos</h2>
            <Tabla informacion={productos} />
        </div>
    )
}