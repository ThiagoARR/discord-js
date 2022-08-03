import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';

const ServerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    margin-bottom: 8px;
    background-color: ${(props) => props.isHome ? '#6633cc' : '#36393f'};
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    transition: 0.2s;

    > img {
        width: 24px;
        height: 24px;
    }
}

&::before{
    content: '';
    height: 9px;
    width: 9px;
    border-radius: 50%;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: white;
    position: absolute;
    display: ${(props) => props.hasNotification ? 'inline' : 'none'};
    box-sizing: unset !important;
}

&.active, &:hover{
    border-radius: 15px;
    background-color: ${(props) => props.isHome ? '#6633cc':'#6e86d6'}
}


&::after{
    background-color: #f84a4b;
    position: absolute;
    width: auto;
    height: 16px;
    padding: 0 4px;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid rgb(32,34,37);
    color: white;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    align-items: center;
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => props.mentions && props.mentions > 0 ? 'flex' : 'none'};
    box-sizing: unset !important;
}
`;

export default ({
    selected,
    isHome,
    hasNotification,
    mentions
}) =>{
    return(
        <ServerButton
        isHome={isHome}
        hasNotification={hasNotification}
        mentions={mentions}
        className={selected ? 'active' : ''}>
            {isHome && <img src={Logo} alt="Discord" />}
        </ServerButton>
    )
}
