import React from 'react';
import {UserList, Role} from './style'
import User from '../UserRow';

export default () => {
    return(
        <UserList>
            <Role>Mega - 4</Role>
            <User nickname="MEGA 1"></User>
            <User nickname="MEGA 2"></User>
            <User nickname="MEGA 3"></User>
            <User nickname="MEGA 4"></User>

            <Role>Bots - 2</Role>
            <User nickname="BOT 1" isBot></User>
            <User nickname="BOT 2" isBot></User>

            <Role>Disponível - 8</Role>
            <User nickname="USER 1"></User>
            <User nickname="USER 2"></User>
            <User nickname="USER 3"></User>
            <User nickname="USER 4"></User>
            <User nickname="USER 5"></User>
            <User nickname="USER 6"></User>
            <User nickname="USER 7"></User>
            <User nickname="USER 8"></User>

            <Role>Offline - 12</Role>
            <User nickname="USER 9"></User>
            <User nickname="USER 10"></User>
            <User nickname="USER 11"></User>
            <User nickname="USER 12"></User>
            <User nickname="USER 13"></User>
            <User nickname="USER 14"></User>
            <User nickname="USER 15"></User>
            <User nickname="USER 16"></User>
            <User nickname="USER 17"></User>
            <User nickname="USER 18"></User>
            <User nickname="USER 19"></User>
            <User nickname="USER 20"></User>
        </UserList>
    )
}