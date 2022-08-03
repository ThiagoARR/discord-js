import React from 'react';
import {Container, LoginBox, LoginHeader, LoginBody, LoginForm} from './style.js';
import {Button} from 'react-bootstrap';

import axios from '../../api/axios.js';


const LOGIN_URL = '/auth';

export default ({setLogin, user, setUser, pass, setPass, setAuth, setErrMsg}) => {

    const Usuario = (event) => {
        setUser(event.target.value);
    }

    const Senha = (event) => {
        setPass(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pass}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user,pass,roles,accessToken});
            setUser('');
            setPass('');
            setLogin(true);
        }catch (err){
            if(!err?.response) {
                setErrMsg('No server Response');
            }else if (err.response?.status === 400){
                setErrMsg('Missing Usernameor or Password');
            }else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            }else{
                setErrMsg('Login Failed');
            }
        }
    }

    return(
        <Container>
            <LoginBox>
                <LoginHeader>
                    <h5>Boas-vindas ao Discord!</h5>
                    <span>Estamos muito animado em te ver novamente!</span>
                </LoginHeader>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginBody>
                        <div>
                            <h5>E-MAIL OU NÚMERO DE TELEFONE</h5>
                            <input type='text' onChange={Usuario} value={user}/>
                        </div>
                        <div>
                            <h5>SENHA</h5>
                            <input type='password' onChange={Senha} value={pass}/>
                        </div>
                        <div>
                            <Button type='submit' variant="primary" className="btn-login">Entrar</Button>
                        </div>
                    </LoginBody>
                </LoginForm>
            </LoginBox>
        </Container>
    )
}