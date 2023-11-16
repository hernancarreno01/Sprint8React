import React,{Component} from 'react'
import Genre from './Genre' 
function GenresInDb ({categorias}){
console.log(categorias)
if (typeof categorias == "object"){
    return(
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{Object.keys(categorias).map((categoria,i)=> {
                                            return (<Genre key={categoria+i} genero={categoria}/>) 
                                        })}

									</div>
								</div>
							</div>
						</div>
    )
}


}
export default GenresInDb