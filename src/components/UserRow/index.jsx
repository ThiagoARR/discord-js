import React from 'react'
import {User, Avatar, Verificado} from './style';

export default ({
    nickname,
    isBot
}) =>{
    return(
        <User>
            <Avatar />
            <strong>{nickname}</strong>
            {isBot && <span><Verificado/>BOT</span>}
        </User>
    )
}