import React, { useEffect, useState } from "react";
import image from "../assets/images/logo-DH.png";
import { Link, Route, Switch } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import ContentRowTop from "./ContentRowTop";
import CategoriasInDb from "./CategoriasInDb";
import ListadoProductos from "./listadoProductos";

function SideBar() {
  const [productosInfo, setproductosInfo] = useState({
    count: 0,
    countByCategory: {},
    products: [],
  });
  async function fetchApi() {
    let respuesta = await fetch("/api/products");
    let data = await respuesta.json();
    setproductosInfo(data);
    console.log(data);
  }
  const [usuariosInfo, setusuariosInfo] = useState({
    count: 0,
    usuarios: [],
  });
  async function fetchApi2() {
    let respuesta = await fetch("/api/users");
    let data = await respuesta.json();
    setusuariosInfo(data);
    console.log(data);
  }
  useEffect(() => {
    fetchApi2();
    fetchApi();
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - EcoEquip</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/listadoProductos">
            <i className="fas fa-fw fa-folder"></i>
            <span>Resumen de productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/categoriasInDB">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Switch>
        <Route path="/" exact={true}>
          <ContentWrapper productosInfo={productosInfo} usuariosInfo={usuariosInfo} userInfo={usuariosInfo}></ContentWrapper>
        </Route>
        <Route path="/listadoProductos" exact={true}>
          <ListadoProductos productosInfo={productosInfo} userInfo={usuariosInfo} />
        </Route>
        <Route path="/categoriasInDB" exact={true}>
          <CategoriasInDb categorias={productosInfo.countByCategory} userInfo={usuariosInfo} />
        </Route>
      </Switch>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;
