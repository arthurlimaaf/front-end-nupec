import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
import api from "../../api/api";
import { useHistory } from "react-router";

function Cadastrar_Escola() {

    const history = useHistory();
    const [data, setDate] = useState(history.location.state);

    const [LAT, setLat] = useState(data.LAT);
    const [LON, setLon] = useState(data.LON);

    function updateEscola(CO_ENTIDADE) {
        api.put(`/alterar-escola/${CO_ENTIDADE}`, { LAT: LAT, LON: LON }, (res) => {
          console.log(res);
        })
        .then(res => {
            alert('Escola Atualizada!')
            history.push('/consulta-escola')
    
        } ).catch((err) => {
          alert('Escola Atualizada!')
        })
      }

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
                                        <span className="font-weight-bold">ATUALIZAR ESCOLA</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">COD. ESCOLA</Form.Label>
                                            <Form.Control type="text" required value={data.CO_ENTIDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NOME ESCOLA</Form.Label>
                                            <Form.Control type="text" required value={data.NO_ENTIDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ORGÃO REGIONAL ENSINO</Form.Label>
                                            <Form.Control type="number" required value={data.CO_ORGAO_REGIONAL} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SITUAÇÃO FUNCIONAMENTO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_SITUACAO_FUNCIONAMENTO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">COD. REGIÃO GEOGRAFICA</Form.Label>
                                            <Form.Control type="text" required value={data.CO_REGIAO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">UF</Form.Label>
                                            <Form.Control type="text" required value={data.CO_UF} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">COD. MUNICIPIO</Form.Label>
                                            <Form.Control type="text" required value={data.CO_MUNICIPIO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DEP. ADMINISTRATIVA</Form.Label>
                                            <Form.Control type="text" required value={data.TP_DEPENDENCIA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LOCALIZAÇÃO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_LOCALIZACAO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESIDENCIA DIFERENCIADA</Form.Label>
                                            <Form.Control type="text" required value={data.TP_LOCALIZACAO_DIFERENCIADA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESP. REGULAMENTAÇÃO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_REGULAMENTACAO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESP. REGULAMENTAÇÃO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_RESPONSAVEL_REGULAMENTACAO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">FUNCIONAMENTO PREDIO ESCOLAR</Form.Label>
                                            <Form.Control type="text" required value={data.IN_LOCAL_FUNC_PREDIO_ESCOLAR} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label className="text-cad">OCUPAÇÃO PREDIO ESCOLAR</Form.Label>
                                            <Form.Control type="text" required value={data.TP_OCUPACAO_PREDIO_ESCOLAR} disabled={true} onChange={e => setDate(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS DENTRO</Form.Label>
                                            <Form.Control type="text" required value={data.QT_SALAS_UTILIZADAS_DENTRO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS UTILIZADAS FORA</Form.Label>
                                            <Form.Control type="text" required value={data.QT_SALAS_UTILIZADAS_FORA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS UTILIZADAS TOTAL</Form.Label>
                                            <Form.Control type="text" required value={data.QT_SALAS_UTILIZADAS} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">LATITUDE ESCOLA</Form.Label>
                                            <Form.Control type="text" required value={LAT} onChange={e => setLat(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">LONGITUDE ESCOLA</Form.Label>
                                            <Form.Control type="text" required value={LON} onChange={e => setLon(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    {/* <div className="row col-12 justify-content-md-center" > */}

                                    {/* </div> */}
                                </Form>
                                <Button onClick={Index} type="submit" variant="secondary" className="button" size="lg" block >VOLTAR</Button>{' '}
                                <Button onClick={()=> updateEscola(data.CO_ENTIDADE)} type="submit" variant="secondary" className="button" size="lg" block >ATUALIZAR</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Cadastrar_Escola;

