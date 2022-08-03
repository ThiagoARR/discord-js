import React from 'react'
import {Avatar, ChannelMessage, Message, Header, Content} from './style'
export {Mention} from './style';

export default ({
    author,
    date,
    content,
    hasMention,
    isBot
}) =>{
    return(
        <ChannelMessage className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>
            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </ChannelMessage>
    )
}