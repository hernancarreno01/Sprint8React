import React from "react";
// import imagenFondo from "../assets/images/mandalorian.png";
// import Cards from "./Cards";
// import CategoriasInDb from "./CategoriasInDb";
// import { Link } from "react-router-dom";

function ListadoProductos({ productosInfo }) {
    if (productosInfo.count > 0) {
        // const productosEnOferta = productosInfo.products.filter(
        //  (producto) => producto.category === 7
        //  );
        //   let productoMinStock = productosInfo.products.reduce(
        //     (min, p) => (p.stock < min.stock ? p : min),
        //   productosInfo.products[0]
        // );
        return (
            <React.Fragment>
                {/*<!-- Content Row Top -->*/}
    <section className="tabla">
                <div className="col-lg-13 mb-9">
                    <div className="card shadow mb-4 margin-top 40px">
                        <div className="card-header py-3 margin-top 40px">
                            <h5 className="m-0">Lista de Productos</h5>
                        </div>
                        <div className="tabla">
                            <ul>
                                {productosInfo.products.map((producto) => (
                                    <li key={producto.id} className="tabla2">

                                        <strong>ID:</strong> {producto.id}
                                        <br />
                                        <strong>Nombre:</strong> {producto.name}
                                        <br />
                                        <strong>Descripción:</strong> {producto.description}
                                        <br />
                                        <strong>Precio: $</strong> {producto.price}
                                        <br />
                                        <img
                                            src={producto.imagen_url}
                                            alt="Producto"
                                            style={{ maxWidth: "100px" }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </div>
    </section>
                {/*<!--End Content Row Top-->*/}
            </React.Fragment>
        );
    }
}

export default ListadoProductos;
