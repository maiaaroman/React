import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const Navbar = () => {
    return ( <>
        <NavLink to="#">
            <h3 className="header-titulo">TecnologyNet</h3>
        </NavLink>
            
        <nav className="header-nav">
            <Link to="/" className="header-link link">Home</Link>
            <Link to="/Category/1" className="header-link link">Celulares</Link>
            <Link to="/Category/2" className="header-link link">Computacion</Link>
            <Link to="/Category/3" className="header-link link">Televisores</Link>
            <Link to="/Carrito" className="header-link link"><CartWidget/></Link>
        </nav>
    </>
    )
}

export default Navbar;