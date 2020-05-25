import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Login from "../login";
import ListaDragoes from "../lista-dragoes";
import DetalhesDragao from "../detalhes-dragao";
import CadastrarDragao from "../cadastrar-dragao";
import { ProtectedRoute } from "./ProtectedRoute";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <ProtectedRoute exact path="/dragoes" component={ListaDragoes}/>
          <ProtectedRoute exact path="/dragao/:id" component={DetalhesDragao}/>
          <ProtectedRoute exact path="/cadastrar-dragao" component={CadastrarDragao}/>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;