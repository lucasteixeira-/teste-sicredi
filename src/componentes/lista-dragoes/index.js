import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {apiDragao} from "../../utils/api";

import "./lista-dragoes.css";

const ListaDragoes = () => {
    
    const [listaDragoes, setListaDragoes] = useState([]);
    const getDragao = () => {
        try {
            apiDragao.get(``).then((res) => {
                console.log(res);
                setListaDragoes(res.data);
            });
        } catch (error) {
            console.log(error);
        }
        
    }    
    
    useEffect(() => {
        getDragao();
        console.log(listaDragoes);
      }, []);

    return (
        <Fragment>
			<section className="containerDragao">
                <h3>Lista de Dragões</h3>
                <div>
                    <div className="dragao">
                        <div className="itemTitulo">
                            <span className="">Nome</span>
                        </div>    
                        <div className="itemTitulo">
                            <span className="">Tipo</span>
                        </div>    
                        <div className="itemTitulo">
                            <span className="">Histórias</span>
                        </div>
                    </div>
                    {listaDragoes !== undefined ? (
                        listaDragoes.map((dragao) => (
                            <div key={dragao.id} className="dragao">
                                <div className="item">
                                    <Link to={`/dragao/${dragao.id}`} title="Clique para editar">{dragao.name}</Link>
                                </div>    
                                <div className="item">
                                    <Link to={`/dragao/${dragao.id}`} title="Clique para editar">{dragao.type}</Link>
                                </div>    
                                <div className="item">
                                    <Link to={`/dragao/${dragao.id}`} title="Clique para editar">{dragao.histories}</Link>
                                </div>
                            </div>
                        ))
                        ) : (
                            <div className="item">Ops, nenhum dragão foi encontrado</div>
                        )
                    }
                    <div className="item">
                        <Link to ="/cadastrar-dragao"><b>Clique aqui</b></Link> para cadastrar um novo dragão
                    </div>
                </div>    
            </section>
        </Fragment>    
    )
}
  
  export default ListaDragoes;
  