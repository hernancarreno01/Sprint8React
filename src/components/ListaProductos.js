// ListaProductos.js
import React from 'react';

function ListaProductos({ productos }) {
    return (
        <div>
            <h2>Lista de Productosssssssssssssssssssssssssssssssssssssssss</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>Precio: {producto.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProductos;
