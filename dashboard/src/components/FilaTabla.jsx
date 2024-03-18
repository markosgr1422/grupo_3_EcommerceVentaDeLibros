export const FilaTabla = ({ info }) => {
    const propiedades = Object.keys(info);
    console.log(propiedades)
    return (
        <tr>
            {/* Map through property names and render corresponding values */}
            {propiedades.map((propiedad) => (
                <td key={propiedad}>{info[propiedad]}</td> // Access value using bracket notation
            ))}
        </tr>
    );
}