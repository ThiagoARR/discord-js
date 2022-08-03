import React from "react";
import {Container, Separator} from './style.js';
import ServerButton from '../ServerButton';

export default () => {
    return(
        <Container>
            <ServerButton isHome/>
            <Separator />
            <ServerButton hasNotification />
            <ServerButton mentions={3}/>
            <ServerButton mentions={23}/>
            <ServerButton/>
            <ServerButton hasNotification/>
        </Container>
    )
}