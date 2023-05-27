import Button from 'react-bootstrap/Button';
import useContador from "./hooks/useContador";

const Contador = () => {

    const {cantidad, suma, resta} = useContador()

    return (
        <div>
            <p>{cantidad}</p>
            <Button className='button' variant="outline-primary" onClick={suma}>+</Button>
            <Button className='button' variant="outline-primary" onClick={resta}>-</Button>
        </div>
    )
}

export default Contador;