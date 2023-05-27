import Page from "../Componentes/Page";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
import arrow from "../img/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png"




const DetailProduct = ({productoId}) => {

    const {id} = useParams()

    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPlatziAPI() {
      const idTitle = id
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${idTitle}`);

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

     {products.title}
      <div className='containerItemList'>
     
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={products?.image}/>
          <Card.Body>
            <Card.Title>{products?.title}</Card.Title>
            <Card.Text>${products?.price}</Card.Text>
            <Card.Text>
            {products?.description}
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            
          </Card.Body>
        </Card>
       
      </div>
    </Page>
    </>
}

export default DetailProduct;