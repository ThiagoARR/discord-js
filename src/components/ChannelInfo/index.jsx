import React from 'react';
import {ChannelInfo,HashtagIcon,Title,Pin,Notification,Persona,Search,Update,BoxIn,Help} from './style';

export default () =>{
    return(
        <ChannelInfo>
            <div>
                <HashtagIcon/>
                <Title>chat</Title>
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