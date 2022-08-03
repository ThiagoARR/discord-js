import styled from 'styled-components';

/* 

SL - Server List
SN - Server Name
CI - Channel Info
SI - Server Info
SC - Server Chat
UL - User List
IU - User Info

*/

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas: 
    "SL SN CI CI"
    "SL SI SC UL"
    "SL IU SC UL";
    height: 100vh;
}
`;