import styled from 'styled-components';
import { Mic, Headset, Settings} from 'styled-icons/material';

export const InforUser = styled.div`
    grid-area: IU;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--quaternary);
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const UserData = styled.div`
    margin-left: 8px;

    display: flex;
    flex-direction: column;

    > strong {
        color: var(--white);
        font-size: 13px;
        display:block;
    }

    > span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    > svg:not(:first-child) {
    margin-left: 7px;
    }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const Avatar = styled.div`
    position:relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--tertiary);

&::after{
    background-color: var(--notification);
    position: absolute;
    width: 11px;
    height: 11px;
    bottom: -4px;
    right: -4px;
    border-radius: 50%;
    border: 4px solid #292b2f;
    text-align: center;
    content: '${(props) => props.status}';
    display: ${(props) => props.status};
    box-sizing: unset !important;
}
`;