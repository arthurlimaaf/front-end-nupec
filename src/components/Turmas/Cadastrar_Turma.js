import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
// import api from "../../api/api";

function Cadastrar_Turma() {

    return (
        <div className="App">
            <header className="App-header">

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/index">
                        <img
                            alt=""
                            src="/maps.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        SISTEMA NUPEC
                    </Navbar.Brand>
                </Navbar>

                <Container>
                    <Row className="test2 justify-content-md-center">
                        <Card className="card" style={{ width: '90rem' }}>
                            <Card.Body>
                                <div className="row col-12 justify-content-md-center" >
                                    <h2>
                                        <span className="font-weight-bold">CADASTRAR TURMA</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ID TURMA</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NOME TURMA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">MEDIAÇÃO DIDÁTICO-PEDAGOGICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DIAS DE ATIVIDADES</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TIPO DE ATENDIMENTO</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>


                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LOCAL DIFERENCIADO TURMA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ETAPA DE ENSINO</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TURMA ESPECIAL EXCLUSIVA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TURMA REGULAR</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TURMA EJA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TURMA PROFISSIONALIZANTE</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">QUANTIDADE DE MATRICULAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Label className="text-cad">DISCIPLINAS</Form.Label>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LINGUA PORTUGUESA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">EDUCAÇÃO FISICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ARTES</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LINGUA INGLESA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LINGUA ESPANHOLA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LINGUA FRANCESA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">OUTRAS LINGUAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LIBRAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LINGUA INDIGENA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SEGUNDA LINGUA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">MATEMATICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">CIENCIAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">FISICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">QUIMICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">BIOLOGIA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">HISTORIA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">GEOGRAFIA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SOCIOLOGIA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">FILOSOFIA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESTUDOS SOCIAIS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">EST. SOCIAIS SOCIO.</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">INFORMATICA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ENSINO RELIGIOSO</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">PROFISSIONALIZANTE</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESTAGIO SUPERVISIONADO</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DISCIPLINAS PEDAGOGICAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">OUTRAS DISCIPLINAS</Form.Label>
                                            <Form.Control type="text" placeholder="NOME TURMA" />
                                        </Form.Group>

                                    </Form.Row>


                                    {/* <div className="row col-12 justify-content-md-center" > */}

                                    {/* </div> */}
                                </Form>
                                <Button type="submit" variant="secondary" className="button" size="lg" block >VOLTAR</Button>{' '}
                                <Button type="submit" variant="secondary" className="button" size="lg" block >CADASTRAR</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Cadastrar_Turma;

