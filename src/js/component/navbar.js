import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/" className="text-decoration-none">
                <span className="navbar-brand mb-0 h1 ms-3 text-body"><strong>Proyecto Lista de Contactos</strong></span>
            </Link>
            <div className="ml-auto">
                <Link to="/add-contact" className="me-3">
                    <button className="btn btn-success">Nuevo Contacto</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
