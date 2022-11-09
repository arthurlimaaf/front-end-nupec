import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { Navbar, Button } from "react-bootstrap";


function Consultar_Docente() {

  const [data, setDate] = useState([])
  const history = useHistory();

  const updateEscola = (IDDOCENTES, NU_IDADE, TP_SEXO, TP_COR_RACA, TP_NACIONALIDADE, TP_ZONA_RESIDENCIAL, TP_LOCAL_RESID_DIFERENCIADA, IN_NECESSIDADE_ESPECIAL, TP_ESCOLARIDADE, TP_ENSINO_MEDIO, TP_SITUACAO_CURSO_1, IN_ESPECIALIZACAO, IN_MESTRADO, IN_DOUTORADO, IN_POS_NENHUM) => {
    history.push("/cadastro-docente", { IDDOCENTES, NU_IDADE, TP_SEXO, TP_COR_RACA, TP_NACIONALIDADE, TP_ZONA_RESIDENCIAL, TP_LOCAL_RESID_DIFERENCIADA, IN_NECESSIDADE_ESPECIAL, TP_ESCOLARIDADE, TP_ENSINO_MEDIO, TP_SITUACAO_CURSO_1, IN_ESPECIALIZACAO, IN_MESTRADO, IN_DOUTORADO, IN_POS_NENHUM });
    
    }
  
  useEffect(() => {
    api.get('listDocentes')
    .then(res => {
      console.log("Teste...",res.data.result)
      setDate(res.data.result)
    }).catch(err => console.log(err))
    }, []);

    const postDelete = (IDDOCENTES, e) => {
      e.preventDefault();
      api.delete(`/listDocentes/${IDDOCENTES}`)
      .then(res => {
        console.log('Deletado!!!', res)
        alert('Professor Deletado!');
        history.push('/index');
      }).catch(err => console.log(err))
  
    }
  
  const arr = data.map((data, index) => {
    return (
      <tbody>
        <tr>
          <td>{data.IDDOCENTES}</td>
          <td>{data.NU_IDADE}</td>
          <td>{data.TP_SEXO}</td>
          <Button onClick={() => updateEscola(data.IDDOCENTES, data.NU_IDADE, data.TP_SEXO, data.TP_COR_RACA, data.TP_NACIONALIDADE, data.TP_ZONA_RESIDENCIAL, data.TP_LOCAL_RESID_DIFERENCIADA, data.IN_NECESSIDADE_ESPECIAL, data.TP_ESCOLARIDADE, data.TP_ENSINO_MEDIO, data.TP_SITUACAO_CURSO_1, data.IN_ESPECIALIZACAO, data.IN_MESTRADO, data.IN_DOUTORADO, data.IN_POS_NENHUM)} variant="warning">Atualizar</Button>{' '}
          <Button onClick={(e) => postDelete(data.IDDOCENTES, e)} variant="danger">Deletar</Button>
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
            <h3>CONSULTA DOCENTE</h3>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Table striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>ID DOCENTE</th>
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

export default Consultar_Docente;