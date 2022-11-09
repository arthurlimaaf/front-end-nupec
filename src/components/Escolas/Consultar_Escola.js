import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { Navbar, Button } from "react-bootstrap";


function Consultar_Escola() {

  const [data, setDate] = useState([])
  const history = useHistory();

  const updateEscola = (CO_ENTIDADE, NO_ENTIDADE, CO_ORGAO_REGIONAL, TP_SITUACAO_FUNCIONAMENTO, CO_REGIAO, CO_UF, CO_MUNICIPIO, TP_DEPENDENCIA, TP_LOCALIZACAO, TP_LOCALIZACAO_DIFERENCIADA, TP_REGULAMENTACAO, TP_RESPONSAVEL_REGULAMENTACAO, IN_LOCAL_FUNC_PREDIO_ESCOLAR, TP_OCUPACAO_PREDIO_ESCOLAR, QT_SALAS_UTILIZADAS_DENTRO, QT_SALAS_UTILIZADAS_FORA, QT_SALAS_UTILIZADAS, LAT, LON) => {
    history.push("/cadastro-escola", { CO_ENTIDADE, NO_ENTIDADE, CO_ORGAO_REGIONAL, TP_SITUACAO_FUNCIONAMENTO, CO_REGIAO, CO_UF, CO_MUNICIPIO, TP_DEPENDENCIA, TP_LOCALIZACAO, TP_LOCALIZACAO_DIFERENCIADA, TP_REGULAMENTACAO, TP_RESPONSAVEL_REGULAMENTACAO, IN_LOCAL_FUNC_PREDIO_ESCOLAR, TP_OCUPACAO_PREDIO_ESCOLAR, QT_SALAS_UTILIZADAS_DENTRO, QT_SALAS_UTILIZADAS_FORA, QT_SALAS_UTILIZADAS, LAT, LON });
    
    }
  
  useEffect(() => {
    api.get('listEscola')
    .then(res => {
      console.log("Teste...",res.data.result)
      setDate(res.data.result)
    }).catch(err => console.log(err))
    }, []);
  
  const postDelete = (CO_ENTIDADE, e) => {
    e.preventDefault();
    api.delete(`/listEscola/${CO_ENTIDADE}`)
    .then(res => {
      console.log('Deletado!!!', res)
      alert('Escola Deletada!');
      history.push('/index');
    }).catch(err => console.log(err))

  }
  
  const arr = data.map((data, index) => {
    return (
      <tbody>
        <tr>
          <td>{data.CO_ENTIDADE}</td>
          <td>{data.NO_ENTIDADE}</td>
          <Button onClick={() => updateEscola(data.CO_ENTIDADE, data.NO_ENTIDADE, data.CO_ORGAO_REGIONAL, data.TP_SITUACAO_FUNCIONAMENTO, data.CO_REGIAO, data.CO_UF, data.CO_MUNICIPIO, data.TP_DEPENDENCIA, data.TP_LOCALIZACAO, data.TP_LOCALIZACAO_DIFERENCIADA, data.TP_REGULAMENTACAO, data.TP_RESPONSAVEL_REGULAMENTACAO, data.IN_LOCAL_FUNC_PREDIO_ESCOLAR, data.TP_OCUPACAO_PREDIO_ESCOLAR, data.QT_SALAS_UTILIZADAS_DENTRO, data.QT_SALAS_UTILIZADAS_FORA, data.QT_SALAS_UTILIZADAS, data.LAT, data.LON)} variant="warning">Atualizar</Button>{' '}
          <Button onClick={(e) => postDelete(data.CO_ENTIDADE, e)} variant="danger">Deletar</Button>
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
            <h3>CONSULTAR ESCOLA</h3>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Table striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>CODIGO ESCOLA</th>
                  <th>NOME ESCOLA</th>
                  <th>ORGÃO</th>
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

export default Consultar_Escola;