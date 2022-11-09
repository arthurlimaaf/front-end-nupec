import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router";
// import { Nav } from "react-bootstrap";

function Index() {

    const history = useHistory();

    function Index(){
        history.push('/index');
    }

    function Consultar_Escola(){
        history.push('/consulta-escola');
    }

    function Consultar_Docente(){
        history.push('/consulta-docente');
    }

    function Consultar_Aluno(){
        history.push('/consulta-aluno');
    }

    return (
        <div className="App">
            <header className="App-header">

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            onClick={Index}
                            alt=""
                            src="/maps.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        SISTEMA NUPEC
                    </Navbar.Brand>
                </Navbar>

                <Container fluid>
                    <Row className="test2">

                        <Col>
                            <Card className="card" style={{ width: '18rem', height: '16rem' }}>
                                <Card.Body>
                                    <Image className="logo" src="escola.jpg" rounded style={{ width: '6rem' }} />
                                    <Card.Title className="label justify-content-md-center">ESCOLA</Card.Title>
                                    {/* <Button variant="ligth" className="button" size="lg" block>CADASTRAR</Button> */}
                                    <Button onClick={Consultar_Escola} variant="ligth" className="button" size="lg" block>CONSULTAR</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="card" style={{ width: '18rem', height: '16rem' }}>
                                <Card.Body>
                                    <Image className="logo" src="docente.png" rounded style={{ width: '4.5rem' }} />
                                    <Card.Title className="label justify-content-md-center">DOCENTE</Card.Title>
                                    {/* <Button variant="ligth" className="button" size="lg" block>CADASTRAR</Button> */}
                                    <Button onClick={Consultar_Docente} variant="ligth" className="button" size="lg" block>CONSULTAR</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="card" style={{ width: '18rem', height: '16rem' }}>
                                <Card.Body>
                                    <Image className="logo" src="aluno.png" rounded style={{ width: '8rem' }} />
                                    <Card.Title className="label justify-content-md-center">ALUNO</Card.Title>
                                    {/* <Button variant="ligth" className="button" size="lg" block>CADASTRAR</Button> */}
                                    <Button onClick={Consultar_Aluno} variant="ligth" className="button" size="lg" block>CONSULTAR</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="card" style={{ width: '18rem', height: '16rem' }}>
                                <Card.Body>
                                    <Image className="logo" src="turmas.png" rounded style={{ width: '5rem' }} />
                                    <Card.Title className="label justify-content-md-center">TURMA</Card.Title>
                                    {/* <Button variant="ligth" className="button" size="lg" block>CADASTRAR</Button> */}
                                    <Button variant="ligth" className="button" size="lg" block>CONSULTAR</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </header>
        </div>
    )
}

export default Index;




