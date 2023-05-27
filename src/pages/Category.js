import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { db } from '../utils.js';
import {  collection, getDocs, query, where, addDoc, serverTimestamp } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import CartContext from "../contexts/cartContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
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
    const fetchCategoryFromAPI = async () => {
      try {

        const response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
        const categoryData = await response.json();

        const categoryDocRef = await addDoc(collection(db, 'categorias'), {
          name: id,
          timestamp: serverTimestamp(),
        });

        console.log('Categoría agregada a Firestore');

        for (const product of categoryData) {
          await addDoc(collection(categoryDocRef, 'productos'), { ...product, timestamp: serverTimestamp() });
        }

        console.log('Productos agregados a Firestore');

        const categorySnapshot = await getDocs(query(collection(db, 'categorias'), where('name', '==', id)));
        const categoryDoc = categorySnapshot.docs[0];
        const categoryName = categoryDoc.data().name;

        setCategoryName(categoryName);
        setProducts(categoryData);
      } catch (error) {
        console.error('Error al obtener y agregar la categoría y los productos:', error);
      }
    };

    fetchCategoryFromAPI();
  }, [id]);

  return (
    <div>
      <h2>{categoryName}</h2>
      <div className="containerItemList">
        {products.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.image} />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>${producto.price}</Card.Text>
              <Card.Text>{producto.description}</Card.Text>
              <Button className="button" variant="outline-primary" onClick={() => handleAddToCart(producto)}>
                Agregar
              </Button>
              <Button className="button" variant="outline-primary">
                <Link to={`/Item/${producto.id}`} style={{ textDecoration: 'none' }} className="header-link link">
                  Detalles
                </Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Category;
