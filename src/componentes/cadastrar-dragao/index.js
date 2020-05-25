import React, { Fragment } from "react";
import {Form} from "@unform/web";
import Input from "../form/input";
import TextArea from "../form/TextArea";
import {apiDragao} from "../../utils/api";
import { useHistory } from "react-router-dom";

import "./cadastrar-dragao.css";

const CadastrarDragao = () => {
    
    let history = useHistory();

    function handleSubmit(data) {
        apiDragao.post('', {
            name: data.name,
            type: data.type,
            createdAt: new Date(),
            histories: data.histories
        }).then((res) => {
            alert("Dragão cadastrado com sucesso!");
            history.push("/dragoes");
        }).catch((err) => {
            console.log("ERRO: " + err);
        });
    }

    return (
        <Fragment>
			<section className="containerDragao">
                <h3>Cadastro de dragões</h3>
                <div id="containerDragao">
                    <Form onSubmit={handleSubmit}>
                        <div className="itemDragao">
                            <Input className="inputDragao" name="name" type="text" id="dragaoNome" required placeholder="Nome"/>
                        </div>    
                        <div className="itemDragao">
                            <Input className="inputDragao" name="type" type="text" id="dragaoTipo" required placeholder="Tipo"/>
                        </div>
                        <div className="itemDragao">
                            <TextArea className="textAreaDragao" name="histories" id="dragaoHistorias" placeholder="Histórias"/>
                        </div>
                        
                        <button className="buttonCadastrar" type="submit">Salvar</button>        
                    </Form>
                </div>
            </section>
        </Fragment>    
        
    )
}
  
  export default CadastrarDragao;