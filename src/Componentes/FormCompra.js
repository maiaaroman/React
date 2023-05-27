import {  useRef } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { crearVenta } from "../utils";

const FormCompra = () => {

    const nombreRef = useRef()
    const telRef = useRef()
    const mailRef = useRef()

    // const user = () => {
    //     const nombre = nombreRef.current.value
    //     const tel = telRef.current.value
    //     const email = mailRef.current.value

    //     const usuario = {nombre,tel,email}

    //     console.log(usuario)
    // }

    const handleClickCompra = () => {
      const carrito = []

      const venta = {
          carrito : carrito,
          usuario : {
            nombre : {nombreRef},
            tel : {telRef},
            email : {mailRef}
          },
          total: 10000,
      }
      crearVenta(venta)
      .then((id) => {
        console.log("id de la venta:",id)
      })
    }

    return (

        <Form className="form">

          <div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneInput">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" placeholder="Telefono..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email..." />
            <Form.Text className="text-muted">
              Nosotros no compartiremos esta informacion.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto las condiciones y servicios"/>
          </Form.Group>
          </div>

          <div>
          <Button variant="outline-primary" type="submit" onClick={handleClickCompra}>
            Comprar
          </Button>
          </div>
        </Form>
    );

}

export default FormCompra;