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
            <Link to="/Category/women's clothing" className="header-link link">Clothes Woman</Link>
            <Link to="/Category/electronics" className="header-link link">Electronics</Link>
            <Link to="/Category/jewelery" className="header-link link">Jewelery</Link>
            <Link to="/Carrito" className="header-link link"><CartWidget/></Link>
        </nav>
    </>
    )
}

export default Navbar;