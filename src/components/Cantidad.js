import React from "react";
import Genre from "./Genre"; 
import Genre from "./Cantidad"; 

function GenresInDb({ categorias, countByCategory }) {

  return (
    <div className="row">
      {Object.keys(categorias).map((cat, i) => (
        <Genre
          key={cat + i}  
          genero={cat}
          cantidad={countByCategory[cat]} 
        />
      ))}
    </div>
  )

}

export default GenresInDb;