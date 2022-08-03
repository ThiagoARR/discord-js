import React from 'react';
import {ModalChannel, BackdropFade} from './style.js';

export const Modal = ({showModal, setModalShow}) => {
  return (
    <> 
        {showModal ? 
        <BackdropFade>
            <ModalChannel>
                Modal
            </ModalChannel>
        </BackdropFade> : null }
    </>
  );
}