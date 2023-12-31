import React from 'react';
import ModalForLocationInNavbar from './ModalForLocationInNavbar';
const Navbar = (props) => {
  const {setGps, setIsGPSon} = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark h-100" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" to="/">Weatherly</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">Sports</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Advance Filter
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" to="#">Action</a></li>
                <li><a className="dropdown-item" to="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" to="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center" role="search">
            <ModalForLocationInNavbar setGps={setGps} setIsGPSon={setIsGPSon} />
            <input className="form-control me-2" type="search" placeholder="Search by location" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
