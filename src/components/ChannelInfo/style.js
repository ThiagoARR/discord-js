import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline';
import {Notifications} from 'styled-icons/material-sharp';
import {Pushpin} from 'styled-icons/remix-fill';
import {PersonFill} from 'styled-icons/bootstrap'
import {Download} from 'styled-icons/heroicons-solid';
import {Inbox} from 'styled-icons/material-rounded';
import {HelpCircle} from 'styled-icons/boxicons-solid';

export const ChannelInfo = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  justify-content: space-between;

  z-index: 2;
  > div {
      display: flex;
      align-items: center;
  }

  > div:nth-child(2) *{
    margin-left:15px;

    &:hover{
        color: #c0c0c0;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 0 !important;
`;

export const Pin = styled(Pushpin)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer
`;

export const Notification = styled(Notifications)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer
`;

export const Persona = styled(PersonFill)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer`;

export const Search = styled.input`
font-size: 13px;
padding: 2px;
border-radius: 3px;
background-color: var(--tertiary);
margin-left:15px;
color: var(--senary);
`;
export const Update = styled(Download)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer`;

export const BoxIn = styled(Inbox)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer`;

export const Help = styled(HelpCircle)`
width: 24px;
height: 24px;
color: var(--gray);
margin-left:15px;
cursor:pointer;`;