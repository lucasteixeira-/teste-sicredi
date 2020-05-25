import React, { Fragment } from "react";
import {Form} from "@unform/web";
import Input from "../form/input";
import {apiDragao} from "../../utils/api";
import { useHistory } from "react-router-dom";

import "./detalhes-dragao.css";

const DetalhesDragao = () => {
    
    let history = useHistory();

    //recupera o ID do dragão pela URL
    let urlParams = window.location.href.split("/");
    let id = urlParams[urlParams.length - 1];

    function formatDateTime(dateTime) {
        var str = dateTime.split("T");
        var strData = str[0].split("-");
        var hora = str[1].substring(0, 8);
        var dataHora = strData[2] + "/" + strData[1] + "/" + strData[0] + " " + hora;
        return dataHora;
    }
    
    //seta os valores dos Inputs com os dados da requisição
    let detalhesDragao = apiDragao.get(`/${id}`).then((res) => {
        document.getElementById("dragaoNome").value = res.data.name;
        document.getElementById("dragaoTipo").value = res.data.type;
        document.getElementById("dragaoData").value = formatDateTime(res.data.createdAt);
    });

    function excluirDragao() {
        if(window.confirm("Deseja realmente excluir este dragão?")){
            console.log("Tchau... " + id)
            apiDragao.delete(`/${id}`).then((res) => {
                alert("Dragão excluído com sucesso!");
                history.push("/dragoes");
            })
        }
    }

    function handleSubmit(data) {
        apiDragao.put(`/${id}`, {
            id: id,
            name: data.name,
            type: data.type,
            createdAt: detalhesDragao.createdAt
        }).then((res) => {
            console.log("RESPOSTA: ", res);
        }).catch((err) => {
            console.log("ERRO: ", err);
        });
    }

    return (
        <Fragment>
			<section className="containerDragao">
                <h3>Detalhes do dragão</h3>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <div className="itemDragao">
                            <Input className="inputDragao" name="name" type="text" id="dragaoNome" placeholder="Nome" required/>
                        </div>    
                        <div className="itemDragao">    
                            <Input className="inputDragao" name="type" type="text" id="dragaoTipo" placeholder="Tipo" required/>
                        </div>    
                        <div className="itemDragao">
                            <Input className="inputDragao" name="createdAt" id="dragaoData" type="text" readOnly/>
                        </div>    
                        <div className="botoes">
                            <button className="buttonSalvar" type="submit">Salvar</button>
                            <button className="buttonExcluir" onClick={excluirDragao}>Excluir</button>        
                        </div>
                    </Form>
                </div>
            </section>
        </Fragment>    
    )
}
  
  export default DetalhesDragao;