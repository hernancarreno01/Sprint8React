import React from 'react';
import imagenFondo from '../assets/images/mandalorian.png';
import Cards from './Cards';
import CategoriasInDb from './CategoriasInDb';
import { Link } from 'react-router-dom';

function ContentRowTop({ productosInfo }) {

    if (productosInfo.count > 0) {

		const productosEnOferta = productosInfo.products.filter(producto => producto.category === 7);

        let productosInDB = {
            titulo: 'Productos en DB',
            color: 'primary',
            cantidad: productosInfo.products.length,
            icono: 'fa-clipboard-list'
        };

        let totalColeccionable = {
            titulo: ' Productos Coleccionables',
            color: 'success',
            cantidad: productosInfo.countByCategory.Coleccionable,
            icono: 'fa-box'
        };

        let productosOferta = {
            titulo: 'Productos en Oferta',
            color: 'warning',
            cantidad: productosInfo.countByCategory.Ofertas,
            icono: 'fa-arrow-circle-up'
        };

        let cartProps = [productosInDB, totalColeccionable, productosOferta];

        return (
            <React.Fragment>
                {/*<!-- Content Row Top -->*/}
                <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">EcoEquip Dashboard</h1>
                    </div>

                    {/*<!-- Content Row Movies-->*/}
                    <div className="row">
                        <Cards datos={cartProps} />
                    </div>

                    {/*<!-- End movies in Data Base -->*/}

                    {/*<!-- Content Row Last Movie in Data Base -->*/}
                    <div className="row">
                        {/*<!-- Last Movie in DB -->*/}
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en DB</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img
                                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                            style={{ width: 40 + 'rem' }}
                                            src={imagenFondo}
                                            alt=" Star Wars - Mandalorian "
                                        />
                                    </div>
                                    <p>{productosInfo.products[productosInfo.products.length - 1].name}</p>
                                    <a className="btn btn-danger" href={`${productosInfo.products.detail}`}>
                                        Ver detalle de producto
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*<!-- End content row last movie in Data Base -->*/}

                        {/*<!-- Genres in DB -->*/}
                        <CategoriasInDb categorias={productosInfo.countByCategory} />
                    </div>
                </div>
                {/*<!--End Content Row Top-->*/}
            </React.Fragment>
        );
    }
}

export default ContentRowTop;
