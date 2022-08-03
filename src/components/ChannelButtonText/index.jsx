import React from 'react';
import {HashtagIcon, InviteIcon, SettingsIcon, Container} from './style'



export default ({
    channelName,
    selected
}) =>{
    return(
        <Container
        className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon><div>
                        <span>
                            <ul>
                                <li>Editar</li>
                                <li>Excluir</li>
                            </ul>
                        </span>
                    </div></HashtagIcon>
                <span>{channelName}</span>
            </div>
            <div>
                <InviteIcon/>
                <SettingsIcon/>
            </div>
        </Container>
    );
};