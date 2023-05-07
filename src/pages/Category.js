import Page from "../Componentes/Page";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "../Componentes/Contador"
import { Link } from "react-router-dom";

const Category = () => {

    const {id} = useParams()

    console.log(id);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPlatziAPI() {
      const idCategory = id
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${idCategory}`);

        if (response.ok) {
          const data = await response.json();
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
      {products[1]?.category.name}
    <div className='containerItemList'>
        {products.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.images[0]}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Card.Text>
            {producto.description}
            </Card.Text>
            <Button className='button' variant="outline-primary" onClick={() => {console.log("click")}}>Agregar</Button>
            <Button className='button' variant="outline-primary" >
              <Link to={`/Product/${producto.title}`} style={{textDecoration:"none"}} className="header-link link">Detalles</Link>
            </Button>
            <Contador/>
          </Card.Body>
        </Card>
        ))}
      </div>
    </Page>
    </>
}

export default Category;