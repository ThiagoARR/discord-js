import React, {useState} from 'react';
import {Container, LoginBox, LoginHeader, LoginBody, LoginForm, RegisterForm, RegisterBody} from './style.js';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';


const LOGIN_URL = '/auth';

export default ({setLogin, user, setUser, pass, setPass, setAuth, setErrMsg, errMsg}) => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState('');
    const [newPass, setNewPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [formType, setFormType] = useState(1);

    //Register
    const NewUser = (event) => {
        console.log(event.target.value)
        setNewUser(event.target.value);
    }

    const NewPass = (event) => {
        console.log(event.target.value)
        setNewPass(event.target.value);
    }

    const Name = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }

    const Surname = (event) => {
        console.log(event.target.value)
        setSurname(event.target.value);
    }

    const Address = (event) => {
        console.log(event.target.value)
        setAddress(event.target.value);
    }

    const Email = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value);
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/post/register", {
            name: name,
            surname: surname,
            username: newUser,
            password: newPass,
            address: address,
            email: email,
        }).then((response) => {
            console.log(response.data)
        });
    }

    const handleFormTypeLogin = (e) => {
        setFormType(1);
    }

    //Login
    const Usuario = (event) => {
        setUser(event.target.value);
    }

    const Senha = (event) => {
        setPass(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/post/login", {
            withCredentials: true
        },{
            username: user,
            password: pass,
            
        }).then((response) => {
            /* if(response.data.message){
                console.log(response.data.message)
                setErrMsg(response.data.message)
            }else{
                setErrMsg(response.data[0].login);
                console.log(response.data[0].login);
                setLogin(true);
            } */
            navigate("/channels/1");
        });
    }

    const handleFormTypeRegister = (e) => {
        setFormType(2);
    }

    return(
        <Container>
            <LoginBox>
                <LoginHeader>
                    <h5>Boas-vindas ao Discord!</h5>
                    <span>Estamos muito animado em te ver novamente!</span>
                </LoginHeader>
                {formType === 1 ? (<LoginForm onSubmit={handleSubmit}>
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
                        <div>
                            <p onClick={handleFormTypeRegister}>Register</p>
                        </div>
                    </LoginBody>
                </LoginForm>):(<RegisterForm onSubmit={handleRegisterSubmit}>
                    <RegisterBody>
                        <div>
                            <h5>Nome</h5>
                            <input type='text' onChange={Name} value={name}/>
                        </div>
                        <div>
                            <h5>Sobrenome</h5>
                            <input type='text' onChange={Surname} value={surname}/>
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input type='text' onChange={NewUser} value={newUser}/>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type='password' onChange={NewPass} value={newPass}/>
                        </div>
                        <div>
                            <h5>Address</h5>
                            <input type='text' onChange={Address} value={address}/>
                        </div>
                        <div>
                            <h5>E-mail</h5>
                            <input type='text' onChange={Email} value={email}/>
                        </div>
                        <div>
                            <Button type='submit' variant="primary" className="btn-login">Registrar</Button>
                        </div>
                        <div>
                            <p onClick={handleFormTypeLogin}>Login</p>
                        </div>
                    </RegisterBody>
                </RegisterForm>)}
            </LoginBox>
        </Container>
    )
}