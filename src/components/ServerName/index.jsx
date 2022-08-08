import React, {useState, useEffect} from 'react';
import {ServerName, Title, ExpandIcon} from './style.js';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default () => {
    const {idServer} = useParams();
    const [serverName, setServerName] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/get/serverName/${idServer}`).then((response)=>{
            setServerName(response.data);
        })
    },[idServer])

    return(
        <ServerName>
            {serverName.map((row) =><Title>{row.name}</Title>)}
            <ExpandIcon/>
        </ServerName>
    )
}