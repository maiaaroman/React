import Button from 'react-bootstrap/Button';
import useContador from "./hooks/useContador";

const Carrito = () => {

    const {cantidad, suma, resta} = useContador()

    return (
        <div className='misCompras'>
            <p className='p'>Mis compras</p>
            <p className='cantidad'>{cantidad}</p>
            <Button className='button' variant="outline-primary" onClick={suma}>+</Button>
            <Button className='button' variant="outline-primary" onClick={resta}>-</Button>
        </div>
    )
}

export default Carrito;