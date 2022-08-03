import styled from 'styled-components'

export const ModalChannel = styled.div`
    position: relative;
`;

export const BackdropFade = styled.div`
    background-color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;