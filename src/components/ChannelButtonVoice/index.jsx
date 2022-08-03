import React from 'react';
import styled from 'styled-components';
import {VolumeHigh} from 'styled-icons/open-iconic'
import {PersonAdd, Settings} from 'styled-icons/material';

const VolumeIcon = styled(VolumeHigh)`
    width: 16px;
    height: 16px;
    color: #74777a;
`;

const InviteIcon = styled(PersonAdd)`
        width: 16px;
        height: 16px;
        color: #74777a;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
            color: white;
    }
`;

const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    margin-left: 4px;
    color: #74777a;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
    color: white;
}
`;

const Container = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 7px;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;

    > div {
        display: flex;
        align-items: center;
        
    }

    > div:nth-child(2) {
        display: none;
        
    }

    > div:nth-child(3) {
        display: ${(props) => props.hasLimit ? 'block' : 'none'};
        font-size:13px;
        color: var(--gray);
        background: var(--tertiary);
        padding: 1px 15px;
        border-radius: 25px;
    }

    > div span{
        margin-left: 5px;
        color: #828386;
        font-size: 15px;
    }

    &.active,
    &:hover{
        background-color: #393d42;

        > div:nth-child(2){
            display: flex;
        }

        > div:nth-child(3) {
            display: none;
        }

        > div span{
            color: white;
        }
    }
`;

const Limit = styled.div`
background-color: #f84a4b;
position: absolute;
width: auto;
height: 16px;
padding: 0 4px;
right: -4px;
border-radius: 12px;
border: 4px solid #292b2f;
color: white;
text-align: center;
font-size: 13px;
font-weight: bold;
`

export default ({
    channelName,
    selected,
    hasLimit,
    peopleCounter
}) =>{
    return(
        <Container
        peopleCounter={peopleCounter}
        hasLimit={hasLimit}
        className={selected ? 'active' : ''}>
            <div>
                <VolumeIcon/>
                <span>{channelName}</span>
            </div>
            <div>
                <InviteIcon/>
                <SettingsIcon/>
            </div>
            <div>
                {peopleCounter} {hasLimit}
            </div>
        </Container>
    );
};