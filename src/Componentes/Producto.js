import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "./Contador"
// import { useState, useEffect } from 'react';

// const productos = [
//   {id : 1, nombre : "Samsung Galaxy A23", precio : 79.000},
//   {id : 1, nombre : "DELL LATITUD 3520 15.6'' Core i5 8GB 256GB", precio : 103.200},
//   {id : 1, nombre : "VGEVBEGYTBYG", precio : 50.000},
// ]

// const ProductosContainer = () => {

//   const [cantidad, setCantidad] = useState(0)


//   useEffect(() => {
//     const p = new Promise((res, rej) => {

//       setTimeout(() => {
//         res(productos)
//       }, 2000)
    
//     })

//     p.then((resultado) => {
//       console.log(resultado)
//     })

//   }, [])

//   const hanldeClick = () => {
//     setCantidad(cantidad + 1)
//   }

// }

// export default ProductosContainer;


const Producto = () => {
    return <>
  
      <div className='containerItemList'>
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/celular.jpeg" />
          <Card.Body>
            <Card.Title>Samsung Galaxy A23</Card.Title>
            <Card.Text>$130.000</Card.Text>
            <Card.Text>
            El Galaxy A23 combina la potencia de procesamiento Octa-core con 4 GB de RAM. Disfrutá de 128 GB de almacenamiento interno.
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Ver detalles</Button>
            <Contador/>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/Compu.jpg" />
          <Card.Body>
            <Card.Title>DELL LATITUDE 3520 15.6'' Core i5 8GB 256GB</Card.Title>
            <Card.Text>$79.900</Card.Text>
            <Card.Text>
            Familia	Latitude 3520.
            Part Number	WV34V.
            Pantalla	15.6" FHD (1920 x 1080).
            Procesador	Intel I5-1135G7.
            Memoria	8 GB.
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Ver detalles</Button>
            <Contador/>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/tablet.jpeg" />
          <Card.Body>
            <Card.Title>TABLET LENOVO 10 GB</Card.Title>
            <Card.Text>$123.999</Card.Text>
            <Card.Text>
            Alto: 24.07.
            Ancho: 14.9.
            Color: GRIS ACERO.
            Capacidad: 64 GB.
            Bluetooth: SI.
            HDMI: NO.
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Ver detalles</Button>
            <Contador/>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/images/Smart TV.jpg" />
          <Card.Body>
            <Card.Title>Smart TV 4K UHD Samsung 50"</Card.Title>
            <Card.Text>$152.249</Card.Text>
            <Card.Text>
            Expandí tu experiencia Smart 4K.
            Color afinado para una imagen vibrante y realista.
            Potente Procesador Crystal 4K.
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Ver detalles</Button>
            <Contador/>
          </Card.Body>
        </Card>

      </div>

    </>
  }
  
export default Producto;