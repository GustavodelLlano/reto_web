import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Spinner from 'react-bootstrap/Spinner'


const PhoneDetails = () => {

    const { id } = useParams()

    const [phone, setPhone] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:5005/telefonos/${id}`)
            .then(response => setPhone(response.data))
    }, [])

    return (
        phone ?

            <Container style={{ marginTop: "25px" }}>

                <h1>Detalles del teléfono: {phone.name}</h1>
                <p><strong>Fabricante:</strong> {phone.manufacturer}</p>
                <p><strong>Detalles:</strong> {phone.description}</p>
                <p><strong>Altavoces:</strong> {phone.speakers}</p>
                <p><strong>Precio:</strong> {phone.price}€</p>
                <p><strong>Color:</strong> {phone.color}</p>
                <p><strong>Pantalla:</strong> {phone.screen}</p>
                <p><strong>Procesador:</strong> {phone.processor}</p>
                <p><strong>Ram:</strong> {phone.ram}</p>
                <Button variant="primary">
                    <Link style={{ textDecoration:"none", color:"white"}} to={`/`} className="button" variant="primary">Volver a la página principal</Link>
                </Button>


            </Container>

            :
        <Container style={{ margin: "45%" }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </Container>
    )
}
export default PhoneDetails