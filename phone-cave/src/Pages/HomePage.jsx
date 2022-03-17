import { useEffect, useState } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'


const HomePage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5005/telefonos")
            .then(response => setPhones(response.data))
    }, [])

    return (
        phones.length !== 0 ?

            <Container style={{ marginTop: "25px" }}>



                <h1>Phone Page</h1>

                <Row>

                    {
                        phones.map((phone => {
                            return (
                                <>

                                    <Card style={{ width: '18rem', margin: "25px" }}>
                                      <Card.Img variant="top" src={require(`../assets/${phone.imageFileName}`)} />
                                        <Card.Body>
                                            <Card.Title>{phone.name}</Card.Title>
                                            <Card.Text>
                                                {phone.manufacturer}
                                            </Card.Text>
                                            <Button variant="primary">
                                                <Link style={{ textDecoration: "none", color: "white" }} to={`/${phone.id}`} className="button" variant="primary">Details for this phone</Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        }))
                    }
                </Row>
            </Container>

            :
            <Container>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
    )
}

export default HomePage