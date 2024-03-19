import { useEffect, useState } from "react"
import { Tabla } from "./Tabla"

export const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(results => results.json())
            .then(data => {
                setCategorias(data.meta.countByCategory)
            })

    }, [])
    return (
        <div className="container-fluid">
            <h2>Categorias</h2>
            <Tabla informacion={categorias} />
        </div>
    )
}