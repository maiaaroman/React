import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";
import { useContext, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../utils.js';
import Form from 'react-bootstrap/Form';

const Carrito = () => {
  const { cart, setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showPurchaseButton, setShowPurchaseButton] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  });

  const handleFinishPurchase = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de realizar la compra.');
      return;
    }
    setShowForm(true);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {
    const currentQuantity = quantities[productId] || 1;
    const updatedQuantity = currentQuantity - 1;
    if (updatedQuantity >= 1) {
      setQuantities((prevState) => ({
        ...prevState,
        [productId]: updatedQuantity,
      }));
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const currentQuantity = quantities[productId] || 0;
    const updatedQuantity = currentQuantity + 1;
    setQuantities((prevState) => ({
      ...prevState,
      [productId]: updatedQuantity,
    }));
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        ...formData,
        cart: cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantities[product.id] || 1
        })),
        totalPrice: totalPrice
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);
      console.log('Orden guardada con ID: ', docRef.id);

      setCart([]);
      setQuantities({});
      setTotalPrice(0);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: ""
      });

      alert('¡La orden se ha realizado con éxito!');

      setShowForm(false);

    } catch (error) {
      console.error('Error al guardar la orden:', error);
      alert('Se produjo un error al procesar la orden. Por favor, inténtalo de nuevo más tarde.');
    }
  };
  

  useEffect(() => {

    let total = 0;

    setShowPurchaseButton(cart.length > 0);

    for (const product of cart) {
      const quantity = quantities[product.id] || 1;
      total += product.price * quantity;
    }

    setTotalPrice(total);
    
  }, [cart, quantities]);

 
 

  return (
    <div className='misCompras'>
      <p className='p'>Mis compras</p>
      <div style={{ display: 'flex', gap: "0.5rem" }}>
        {cart.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
            <CloseButton onClick={() => removeFromCart(producto.id)} />
            <Card.Img variant="top" src={producto.image} />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>${producto.price}</Card.Text>
              <Card.Text>{producto.description}</Card.Text>
              <Button
                style={{ marginRight: '0.2rem' }}
                variant="outline-primary"
                onClick={() => handleDecreaseQuantity(producto.id)}
              >
                -
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => handleIncreaseQuantity(producto.id)}
              >
                +
              </Button>
              <Card.Text>
                Count: {quantities[producto.id] || 1}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>Total Price: ${totalPrice}</div>

      {!showForm && cart.length === 0 && (
        <Button className='button' variant="outline-primary" 
        onClick={handleFinishPurchase}
        disabled={cart.length === 0}>
          Finalizar Compra
        </Button>
      )}

      {!showForm && showPurchaseButton && (
        <form className='form' onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor="firstName">Nombre:</Form.Label>
            <Form.Control type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleFormInputChange} placeholder='Nombre...' required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Apellido:</Form.Label>
            <Form.Control type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleFormInputChange} placeholder='Apellido...' required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Correo electrónico:</Form.Label>
            <Form.Control type="email" id="email" name="email" value={formData.email} onChange={handleFormInputChange} placeholder='Email...' required />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address">Dirección:</Form.Label>
            <Form.Control type="text" id="address" name="address" value={formData.address} onChange={handleFormInputChange} placeholder='Direccion...' required />
          </Form.Group>
          <Button type="submit" className='button' variant="outline-primary">Confirmar Orden</Button>
        </form>
      )}
    </div>
  );
}

export default Carrito;
