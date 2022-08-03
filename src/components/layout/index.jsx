import React from 'react';
import {GridLayout} from './style.js';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ServerInfo from '../ServerInfo';
import InfoUser from '../InfoUser';
import ChannelInfo from '../ChannelInfo';
import UserList from '../UserList';
import ServerChat from '../ServerChat';
import {Routes, Route} from 'react-router-dom';

export default ()=>{
    
    return(
        <GridLayout>
            <ServerList/>
            <ServerName/>
            <ServerInfo/>
            <InfoUser/>
            <ChannelInfo/>
            <ServerChat/>
            <UserList/>
        </GridLayout>
    )
}
