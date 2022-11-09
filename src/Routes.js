import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Alunos from "./components/Alunos/Cadastrar_Aluno";
import Alunos2 from "./components/Alunos/Consultar_Aluno";
import Docentes from "./components/Docentes/Cadastrar_Docente";
import Docentes2 from "./components/Docentes/Consultar_Docente";
import Escola2 from "./components/Escolas/Consultar_Escola";
import Turma2 from "./components/Turmas/Consultar_Turma";
import Index from "./Index/Index";
import EsolaCad from "./components/Escolas/Cadastrar_Escola";
import Turma1 from "./components/Turmas/Cadastrar_Turma";
// import PrivateRoute from "./components/PrivateRoute";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact />
                <Route component={Alunos} path="/cadastro-aluno" />
                <Route component={Docentes} path="/cadastro-docente" />
                <Route component={Index} path="/index" />  
                <Route component={Docentes2} path="/consulta-docente" />
                <Route component={Alunos2} path="/consulta-aluno" />
                <Route component={Escola2} path="/consulta-escola" />
                <Route component={Turma2} path="/consulta-turma" />
                <Route component={EsolaCad} path="/cadastro-escola" />
                <Route component={Turma1} path="/cadastro-turma" />
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes;
