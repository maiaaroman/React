import Page from "../Componentes/Page";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useContext } from 'react';
import CartContext from "../contexts/cartContext";
import Contador from "../Componentes/Contador"
import { getProductosCategory } from "../utils"

import { Link } from "react-router-dom";

const Category = () => {

    const {id} = useParams()

    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
      setCart([...cart, product]);
    };

  useEffect(() => {

    const categoria = ["Electronics", "Clothes Woman", "Jewelery"]

    getProductosCategory(categoria)
    .then((productos) => {
    setProducts(productos)
  })
  .catch((error) => {
    console.log(error)
  })
  }, [id]);

    return <>
    <Page>
      {products[0]?.category}
    <div className='containerItemList'>
        {products.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.image}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Button className='button' variant="outline-primary"  onClick={() => handleAddToCart(producto)}>Agregar</Button>
            <Contador/>
            <Button className='button' variant="outline-primary" >
              <Link to={`/Item/${producto.id}`} style={{textDecoration:"none"}} className="header-link link">Detalles</Link>
            </Button>
           
          </Card.Body>
        </Card>
        ))}
      </div>
    </Page>
    </>
}

export default Category;