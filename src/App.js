import './App.css';
import Layout from './components/layout/index';
import Login from './components/Login/index';
import GlobalStyles from './style/GlobalStyles';
import {useState, useContext} from 'react';
import AuthContext from './components/Context/AuthProvider';
import {Routes, Route} from 'react-router-dom';

import axios from './api/axios';

const LOGIN_URL = '/auth';

function App() {
  const {setAuth} = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');

  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login setUser={setUser} setPass={setPass} pass={pass} user={user} errMsg={errMsg} setErrMsg={setErrMsg} setLogin={setLogin}/>}/>
        <Route path="/channels/:idServer" exact element={<Layout />}/>
        <Route path="/channels/:idServer/:idCanal" exact element={<Layout />}/>
        <Route path="/channels/@me" exact element={<Layout />}/>
      </Routes>
      <GlobalStyles/>
    {/* {login ? <Layout/> : <Login setLogin={setLogin} user={user} setUser={setUser} pass={pass} setPass={setPass} setAuth={setAuth} setErrMsg={setErrMsg} />}
    <GlobalStyles/> */}
    </>
  );
}

export default App;
