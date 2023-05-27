import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { db } from '../utils.js';
import { useEffect, useState,useContext } from 'react';
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";


const Producto = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      alert("El producto ya está en el carrito");
      return;
    }
    setCart([...cart, product]);
  };

  useEffect(() => {
    const fetchProductsFromAPI = async () => {
      try {

        const response = await fetch('https://fakestoreapi.com/products?limit=50');
        const productsData = await response.json();

        for (const product of productsData) {
          await setDoc(doc(collection(db, 'productos'), product.id.toString()), product);
        }

        console.log('Productos agregados a Firestore');

        const querySnapshot = await getDocs(collection(db, 'productos'));
        const fetchedProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error al obtener y agregar los productos:', error);
      }
    };

    fetchProductsFromAPI();
   
  }, []);
    return <>
  
      <div className='containerItemList'>
        {products.map((producto) => (
        <Card className='card' key={producto.id} style={{ width: '20rem' }}>
          <Card.Img className='card-img-top' variant="top" src={producto.image}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => handleAddToCart(producto)}>Agregar</Button>
            
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