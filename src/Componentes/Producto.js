import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";
import Contador from "./Contador"
import { getProductos } from '../utils';

const Producto = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    getProductos()
      .then((resultado) => {
      setProducts(resultado)
    })
  }, []);
  console.log(cart)

    return <>
  
      <div className='containerItemList'>
        {products.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.image}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => handleAddToCart(producto)}>Agregar</Button>
            <Contador/>
            
            <Button className='button' variant="outline-primary" >
              <Link to={`/Item/${producto.id}`} style={{textDecoration:"none"}} className="header-link link">Detalles</Link>
            </Button>
            
          </Card.Body>
        </Card>
        ))}
    
        

      </div>

    </>
  }
  
export default Producto;