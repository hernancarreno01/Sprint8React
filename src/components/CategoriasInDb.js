import React, { Component } from "react";
import Genre from "./Genre";
import { useHistory } from "react-router-dom";

/*export default function CategoriasInDb({ categorias }) {

  const history = useHistory();

  function handleCategoryClick(catId) {
    history.push(`/products/${catId}`);
  }

  return (
    <div>
      {Object.keys(categorias).map(cat => (
        <button 
          key={cat}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
	  </div>
	)
}*/

function GenresInDb({ categorias }) {
  console.log(categorias);
  if (typeof categorias == "object") {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Productos en Base de Datos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {Object.keys(categorias).map((categoria, i) => {
                return <Genre categorias={categorias} key={categoria + i} genero={categoria} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GenresInDb;
