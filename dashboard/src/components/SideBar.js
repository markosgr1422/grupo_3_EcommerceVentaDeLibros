import React from "react";
import image from "../assets/images/logo-DH.png";
import { Link } from "react-router-dom";
function SideBar() {
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
            <span>Dashboard - DH Libros</span>
          </a>
        </li>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />
        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>
        {/*<!-- Nav Item - Categorias -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/categorias">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Productos -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/productos">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Productos</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Ultimo creado -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ultimo">
            <i className="fas fa-fw fa-table"></i>
            <span>Ultimo Creado</span>
          </Link>
        </li>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;
