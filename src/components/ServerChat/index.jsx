import React, {useState, useEffect} from "react";
import {ServerChat, Messages, InputWrap,Input, InputIcon} from './style';
import ChannelMessage, {Mention} from '../ChannelMessage'
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default () => {
    const {idCanal} = useParams();
    const [message, setMessage] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/get/chat/${idCanal}`).then((response)=>{
            setMessage(response.data);
        })
    },[idCanal])

    return(
        <ServerChat>
            <Messages>
                {message.length > 0 && message.map((row) => (<ChannelMessage
                author={row.login}
                date={row.created_at}
                content={row.content}/>))}

                {/* <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>


                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/> */}

                
            </Messages> 

            <InputWrap>
                <Input 
                    placeholder="Conversa em #chat"
                    onChange={(event) => {setMessage(event.target.value)}} />
                <InputIcon/>
            </InputWrap>
        </ServerChat>
    );
}