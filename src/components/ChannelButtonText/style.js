import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline'
import {PersonAdd, Settings} from 'styled-icons/material';

export const HashtagIcon = styled(Hashtag)`
    width: 22px;
    height: 20px;
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
    position: relative;

    > div span{
        position: absolute;
        width: 90px;
        height: 90px;
        background-color: rgb(32,34,37);
        bottom: 0px;
    }
}
`;

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 7px;
    border-radius: 3px;
    cursor:pointer;
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
        font-size:15px;
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &.active,
    &:hover{
        background-color: #393d42;

        > div:nth-child(2){
            display: flex;
        }

        > div span{
            color: white;
            max-width: 15ch;
        }
    }
`;