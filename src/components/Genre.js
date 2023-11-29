import React from "react";


function Genre({ genero, categorias }) {

  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          {genero}
          <p className="subtitulo">Cantidad: {categorias[genero]}</p>
        </div>
      </div>
    </div>
  );
}

export default Genre;