import React, { useState, useEffect } from "react";
import {Container, Separator} from './style.js';
import ServerButton from '../ServerButton';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default () => {
    const [serverList, setServerList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/get`).then((response)=>{
            setServerList(response.data);
        })
    },[])
    return(
        <Container>
            {serverList.length > 0 && serverList.map((row, indice) => (indice == 0 ? (<><Link to={`/channels/${row.id}`}><ServerButton isHome/></Link><Separator /></>):(<Link to={`/channels/${row.id}`}><ServerButton mentions={3} hasNotification/></Link>)))}
            {/* <Separator />
            <ServerButton hasNotification />
            <ServerButton mentions={3}/>
            <ServerButton mentions={23}/>
            <ServerButton/>
            <ServerButton hasNotification/> */}
        </Container>
    )
}