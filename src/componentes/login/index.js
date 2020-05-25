import React, {useState, useRef, useEffect, Fragment} from "react";
import {Form} from "@unform/web";
import Input from "../form/input";
import { useHistory } from "react-router-dom";
import * as demo from "../../utils/constantes";
import Auth from "../../utils/auth.js";


import "./login.css";

const Login = () => {
    
    let history = useHistory();
	let login = demo();
	const [mensagem, setMensagem] = useState("");

    function handleSubmit(data) {
        if(data.user === login.user && data.password === login.password) {
			Auth.login(() => {
				history.push("/dragoes");
			});
		} else {
			setMensagem("Login e/ou senha incorretos!");
		}
    }

    return (
    	<Fragment>
			<section className="containerLogin">
				<h3>API Dragões</h3>
				<Form onSubmit={handleSubmit}>
					<div className="itemLogin">
						<Input className="inputLogin" name="user" type="user" required placeholder="Login"/>
					</div>	
					<div className="itemLogin">
						<Input className="inputLogin" name="password" type="password" required placeholder="Senha"/>
					</div>	
					<div className="itemLogin">
						<label className="mensagemErro">{mensagem}</label>
					</div>	
					<div className="itemLogin">
						<button className="buttonLogin" type="submit">Login</button>
					</div>  
				</Form>
			</section>
		</Fragment>	
    );
  };
  
  export default Login;
  