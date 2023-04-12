import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = (props) => {

    return <>
    <h2>{props.titulo}</h2>

    <div className='containerItemList'>
    
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/celular.jpeg" />
        <Card.Body>
          <Card.Title>Samsung Galaxy A23</Card.Title>
          <Card.Text>
          El Galaxy A23 combina la potencia de procesamiento Octa-core con 4 GB de RAM. Disfrutá de 128 GB de almacenamiento interno.
          </Card.Text>
          <Button variant="primary" onClick={() => {console.log("click")}}>Agregar</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/Compu.jpg" />
        <Card.Body>
          <Card.Title>DELL LATITUDE 3520 15.6'' Core i5 8GB 256GB SSD W10 Pro</Card.Title>
          <Card.Text>
          Familia	Latitude 3520
          Part Number	WV34V
          Pantalla	15.6" FHD (1920 x 1080)
          Procesador	Intel I5-1135G7
          Memoria	8 GB
          </Card.Text>
          <Button variant="primary" onClick={() => {console.log("click")}}>Agregar</Button>
        </Card.Body>
      </Card>

    </div>
    </>
}

export default ItemListContainer;