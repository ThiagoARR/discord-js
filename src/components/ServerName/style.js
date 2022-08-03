import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material'


export const ServerName = styled.div`
    grid-area: SN;
    padding: 15px 5px;
    background-color: #2f3136;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px 0 16px;
    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
    z-index: 2;

}
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #FFFFF8;
    margin: 0 !important;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;
    cursor: pointer;
    color: white;
`