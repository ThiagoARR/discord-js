import styled from 'styled-components';
import {VolumeHigh} from 'styled-icons/open-iconic'
import {PersonAdd, Settings} from 'styled-icons/material';

export const VolumeIcon = styled(VolumeHigh)`
    width: 16px;
    height: 16px;
    color: #74777a;
`;

export const InviteIcon = styled(PersonAdd)`
        width: 16px;
        height: 16px;
        color: #74777a;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
            color: white;
    }
`;

export const SettingsIcon = styled(Settings)`
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

export const Container = styled.div`
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

        > div span{
            color: white;
        }
    }
`;