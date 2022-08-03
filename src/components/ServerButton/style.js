import styled from 'styled-components';

export const ServerButton = styled.div`
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
}

&.active, &:hover{
    border-radius: 15px;
    background-color: ${(props) => props.isHome ? '#6633cc':'#6e86d6'}
}

`;