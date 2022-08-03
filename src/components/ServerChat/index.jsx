import React, {useState} from "react";
import {ServerChat, Messages, InputWrap,Input, InputIcon} from './style';
import ChannelMessage, {Mention} from '../ChannelMessage'

export default () => {
    const [message, setMessage] = useState({});
    return(
        <ServerChat>
            <Messages>
                {message.lenght > 0 ? <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/> : ''}

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