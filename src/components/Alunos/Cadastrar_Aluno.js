import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
import api from "../../api/api";
import { useHistory } from "react-router";

function Cadastrar_Aluno() {

    const history = useHistory();
    const [data, setDate] = useState(history.location.state);

    const [LAT, setLat] = useState(data.LAT);
    const [LON, setLon] = useState(data.LON);

    function updateAluno(ID_MATRICULA) {
        api.put(`/alterar-matricula/${ID_MATRICULA}`, { LAT: LAT, LON: LON }, (res) => {
          console.log(res);
        })
        .then(res => {
            alert('Aluno Atualizado!')
            history.push('/consulta-aluno')
    
        } ).catch((err) => {
          alert('Aluno não Atualizado!')
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
                                        <span className="font-weight-bold">ATUALIZAR ALUNO</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ID ALUNO</Form.Label>
                                            <Form.Control type="text" required value={data.ID_ALUNO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ID MATRICULA</Form.Label>
                                            <Form.Control type="text" required value={data.ID_MATRICULA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">IDADE</Form.Label>
                                            <Form.Control required value={data.NU_IDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SEXO</Form.Label>
                                            <Form.Control required value={data.TP_SEXO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RAÇA</Form.Label>
                                            <Form.Control type="text" required value={data.TP_COR_RACA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NACIONALIDADE</Form.Label>
                                            <Form.Control type="text" required value={data.TP_NACIONALIDADE} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ZONA RESIDENCIAL</Form.Label>
                                            <Form.Control type="text" required value={data.TP_ZONA_RESIDENCIAL} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ZONA RESIDENCIAL DIFERENCIADA</Form.Label>
                                            <Form.Control type="text" required value={data.TP_LOCAL_RESID_DIFERENCIADA} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ETAPA ENSINO MEDIO</Form.Label>
                                            <Form.Control type="text" required value={data.TP_ETAPA_ENSINO} disabled={true} onChange={e => setDate(e.target.value)} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LATITUDE ALUNO</Form.Label>
                                            <Form.Control type="text" required value={LAT} onChange={e => setLat(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LONGITUDE ALUNO</Form.Label>
                                            <Form.Control type="text" required value={LON} onChange={e => setLon(e.target.value)} />
                                        </Form.Group>

                                    </Form.Row>

                                    {/* <div className="row col-12 justify-content-md-center" > */}

                                    {/* </div> */}
                                </Form>
                                <Button onClick={Index} type="submit" variant="secondary" className="button" size="lg" block >VOLTAR</Button>{' '}
                                <Button onClick={()=> updateAluno(data.ID_MATRICULA)} type="submit" variant="secondary" className="button" size="lg" block >ATUALIZAR</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Cadastrar_Aluno;

