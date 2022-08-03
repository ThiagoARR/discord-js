import styled from 'styled-components'
import {Add} from 'styled-icons/material';
import {ExpandMore} from 'styled-icons/material';
import {Hashtag} from 'styled-icons/heroicons-outline'
import {VolumeHigh} from 'styled-icons/open-iconic'
import { RadioCircle, RadioCircleMarked } from 'styled-icons/boxicons-regular';
import { Lock } from 'styled-icons/boxicons-solid';



export const ServerInfo = styled.div`
    grid-area: SI;
    display: flex;
    flex-direction: column;
    padding: 0px 9.5px 0 9.5px;
    background-color: #2f3136;
    overflow-y: scroll;

    ::-webkit-scrollbar{
      display:none;
    }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  margin-top: 24px;
  cursor:pointer;
  
  > span {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 800;
    color: gray;
    &:hover{
      color: white;
    }
   
  }
`;

export const AddCategoryIcon = styled(Add)`
width: 21px;
height: 21px;
color: #74777a;
cursor: pointer;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    color: #74777a;
    margin: auto;
`;

export const UserInput = styled.input`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 3px;
    width: 100%;
    background-color: rgb(32,34,37);
    color: #828386;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      font-size: 40px;
      color: #c9c9c9;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 34px;
    height: 30px;
    color: #74777a;
`;

export const VolumeIcon = styled(VolumeHigh)`
    width: 26px;
    height: 26px;
    color: #74777a;
`;

export const RadioButton = styled(RadioCircle)`
    width: 36px;
    height: 36px;
    color: var(--gray);
`;

export const RadioButtonPress = styled(RadioCircleMarked)`
    width: 36px;
    height: 36px;
    color: var(--white);
`;

export const Locker = styled(Lock)`
    width: 14px;
    height: 14px;
    color: var(--white);
    margin-right: 5px;
`;

