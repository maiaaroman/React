import Page from "../Componentes/Page";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "../Componentes/Contador"
import { useEffect, useState } from 'react';
import arrow from "../img/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png"




const ItemDetailContainer = () => {

    const {id} = useParams()

    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPlatziAPI() {
      const idTitle = id
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${idTitle}`);

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setProducts(data);
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al hacer la solicitud', error);
      }
    }

    fetchPlatziAPI();
  }, [id]);

    return <>
    <Page>
     
     <Card.Img onClick={() => window.history.back()} variant="top" style={{ width: "50px", height: "50px", marginRight: "10px", cursor: "pointer" }} src={arrow}/>

     {id}
      <div className='containerItemList'>
     
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={products[0]?.images?.[0]}/>
          <Card.Body>
            <Card.Title>{products[0]?.title}</Card.Title>
            <Card.Text>${products[0]?.price}</Card.Text>
            <Card.Text>
            {products[0]?.description}
            </Card.Text>
            <Card.Text>
                Category:
            {products[0]?.category?.name}
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Contador/>
          </Card.Body>
        </Card>
       
      </div>
    </Page>
    </>
}

export default ItemDetailContainer;