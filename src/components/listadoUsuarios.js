import React from "react";

function ListadoUsuarios({userInfo}) {

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Lista de Usuarios
          </h5>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Nombre de Usuario</th>
                <th>E-Mail</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>  
                  <td>{user.userName}</td>  
                  <td>{user.email}</td>  
                  <td> <img src={user.imagen_url} style={{ maxWidth: "60px"}}/>   </td>             
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default ListadoUsuarios;

