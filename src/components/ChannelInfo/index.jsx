import React, {useState, useEffect} from 'react';
import {ChannelInfo,HashtagIcon,Title,Pin,Notification,Persona,Search,Update,BoxIn,Help} from './style';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default () =>{
    const {idCanal} = useParams();
    const [chatName, setChatName] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/get/chatName/${idCanal}`).then((response)=>{
            setChatName(response.data);
        })
    },[idCanal])

    return(
        <ChannelInfo>
            <div>
                <HashtagIcon/>
                {chatName.length > 0 && chatName.map((row) => (<Title>{row.name}</Title>))}
            </div>
            <div>
                <Notification/>
                <Pin/>
                <Persona/>
                <Search placeholder={"  Buscar"}/>
                <Update/>
                <BoxIn/>
                <Help/>
            </div>
        </ChannelInfo>
    )
}