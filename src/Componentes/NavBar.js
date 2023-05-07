import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const Navbar = () => {
    return ( <>
        <NavLink>
            <Link to="/" style={{textDecoration:"none"}}>
                <h3 className="header-titulo">TecnologyNet</h3>
            </Link>
        </NavLink>
            
        <nav className="header-nav">
            <Link to="/" className="header-link link">Catalogo</Link>
            <Link to="/Category/1" className="header-link link">Clothes</Link>
            <Link to="/Category/2" className="header-link link">Electronics</Link>
            <Link to="/Category/3" className="header-link link">Furniture</Link>
            <Link to="/Carrito" className="header-link link"><CartWidget/></Link>
        </nav>
    </>
    )
}

export default Navbar;