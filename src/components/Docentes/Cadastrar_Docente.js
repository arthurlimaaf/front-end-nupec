import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
import api from "../../api/api";
import { useHistory } from "react-router";

function Cadastrar_Docente() {

    const history = useHistory();
    const [data, setDate] = useState(history.location.state);

    function Index(){
        history.push('/index');
    }

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
                                        <span className="font-weight-bold">ATUALIZAR DOCENTE</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ID DOCENTE</Form.Label>
                                            <Form.Control type="text" required value={data.IDDOCENTES} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">IDADE</Form.Label>
                                            <Form.Control type="text" required value={data.NU_IDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SEXO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_SEXO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RAÇA</Form.Label>
                                            <Form.Control type="text"required value={data.TP_COR_RACA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NACIONALIDADE</Form.Label>
                                            <Form.Control type="text" required value={data.TP_NACIONALIDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ZONA RESIDENCIAL</Form.Label>
                                            <Form.Control type="text" required value={data.TP_ZONA_RESIDENCIAL} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESIDENCIA DIFERENCIADA</Form.Label>
                                            <Form.Control type="text"  required value={data.TP_LOCAL_RESID_DIFERENCIADA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NESSECIDADE ESPECIAL</Form.Label>
                                            <Form.Control type="text"  required value={data.IN_NECESSIDADE_ESPECIAL} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESCOLARIDADE</Form.Label>
                                            <Form.Control type="text" required value={data.TP_ESCOLARIDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TIPO ENSINO MEDIO CURSADO</Form.Label>
                                            <Form.Control type="text"  required value={data.TP_ENSINO_MEDIO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SITUAÇÃO DO CURSO</Form.Label>
                                            <Form.Control type="text"  required value={data.TP_SITUACAO_CURSO_1} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESPECIALIZAÇÃO</Form.Label>
                                            <Form.Control type="text" required value={data.IN_ESPECIALIZACAO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">MESTRADO</Form.Label>
                                            <Form.Control type="text" required value={data.IN_MESTRADO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DOUTORADO</Form.Label>
                                            <Form.Control type="text" required value={data.IN_DOUTORADO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">POS GRADUAÇÃO CONCLUIDA</Form.Label>
                                            <Form.Control type="text" required value={data.IN_POS_NENHUM} disabled={true} onChange={e => setDate(e.target.value)}/>
                                        </Form.Group>

                                    </Form.Row>
                                    {/* <div className="row col-12 justify-content-md-center" > */}

                                    {/* </div> */}
                                </Form>
                                <Button onClick={Index} type="submit" variant="secondary" className="button" size="lg" block >VOLTAR</Button>{' '}
                                <Button type="submit" variant="secondary" className="button" size="lg" block >CADASTRAR</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Cadastrar_Docente;

