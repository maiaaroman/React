import CartContext from "../contexts/cartContext";
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import FormCompra from './FormCompra';
import Contador from "./Contador";


const Carrito = () => {

    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
      };

    return (
        <div className='misCompras'>
            <p className='p'>Mis compras</p>
            <div className='itemsCompra' style={{ display: 'flex', gap: "0.5rem" }}>
            {
                cart.map((producto) => (
                    <Card key={producto.id} style={{ width: '18rem' }}>
                        <CloseButton onClick={() => removeFromCart(producto.id)}/>
                        <Card.Img variant="top" src={producto.image}/>
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>${producto.price}</Card.Text>
                            <Card.Text>
                            {producto.description}
                            </Card.Text>
                            <Contador/>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
            
            <div className='compraFinal'>
                Total Price: 0
                <FormCompra/>
            </div>

        </div>
    )
}

export default Carrito;