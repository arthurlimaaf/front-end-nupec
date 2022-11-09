import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { Navbar, Button } from "react-bootstrap";


function Consultar_Aluno() {

  const [data, setDate] = useState([])
  const history = useHistory();

  const updateEscola = (ID_ALUNO, ID_MATRICULA, NU_IDADE, TP_SEXO, TP_COR_RACA, TP_NACIONALIDADE, TP_ZONA_RESIDENCIAL, TP_LOCAL_RESID_DIFERENCIADA, TP_ETAPA_ENSINO, LAT, LON) => {
    history.push("/cadastro-aluno", { ID_ALUNO, ID_MATRICULA, NU_IDADE, TP_SEXO, TP_COR_RACA, TP_NACIONALIDADE, TP_ZONA_RESIDENCIAL, TP_LOCAL_RESID_DIFERENCIADA, TP_ETAPA_ENSINO, LAT, LON });
    
    }
  
  useEffect(() => {
    api.get('listMatricula')
    .then(res => {
      console.log("Teste...",res.data.result)
      setDate(res.data.result)
    }).catch(err => console.log(err))
    }, []);

  const postDelete = (ID_ALUNO, e) => {
    e.preventDefault();
    api.delete(`/listMatricula/${ID_ALUNO}`)
    .then(res => {
      console.log('Deletado!!!', res)
      alert('Aluno Deletado!');
      history.push('/index');
    }).catch(err => console.log(err))

  }
  
  const arr = data.map((data, index) => {
    return (
      <tbody>
        <tr>
          <td>{data.ID_MATRICULA}</td>
          <td>{data.NU_IDADE}</td>
          <td>{data.TP_SEXO}</td>
          <Button onClick={() => updateEscola(data.ID_ALUNO, data.ID_MATRICULA, data.NU_IDADE, data.TP_SEXO, data.TP_COR_RACA, data.TP_NACIONALIDADE, data.TP_ZONA_RESIDENCIAL, data.TP_LOCAL_RESID_DIFERENCIADA, data.TP_ETAPA_ENSINO, data.LAT, data.LON)} variant="warning">Atualizar</Button>{' '}
          <Button onClick={(e) => postDelete(data.ID_ALUNO, e)} variant="danger">Deletar</Button>
        </tr>
      </tbody>

    )
  })

  return (
    <div className="App">
      <header className="App-header">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
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
          <Row className="justify-content-md-center">
            <h3>CONSULTA ALUNO</h3>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Table striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>ID ALUNO</th>
                  <th>IDADE</th>
                  <th>SEXO</th>
                </tr>
              </thead>
              {arr}    

            </Table>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Consultar_Aluno;