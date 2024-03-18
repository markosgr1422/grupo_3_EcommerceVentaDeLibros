import { FilaTabla } from "./FilaTabla"

export const Tabla = ({ informacion }) => {


    const cabeceraCruda = informacion.length > 0 ? Object.keys(informacion[0]) : []
    const cabeceras = cabeceraCruda.map(cabecera => {
        return cabecera.charAt(0).toUpperCase() + cabecera.slice(1);
    });
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            {cabeceras.map(cabecera => (
                                <th>{cabecera}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {informacion.map((info, indice) => {
                            return (
                                <FilaTabla info={info} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}