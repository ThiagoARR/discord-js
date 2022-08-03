import React, {useState} from 'react'
import {RadioButtonPress, Locker, ServerInfo, AddCategoryIcon, Category, ExpandIcon, UserInput, ModalHeader, ModalBody, HashtagIcon, VolumeIcon, RadioButton} from './style.js';
import ChannelButtonText from '../ChannelButtonText';
import ChannelButtonVoice from '../ChannelButtonVoice';
import {Modal, Button} from 'react-bootstrap';

function ServerInfor(props){
    const [modalShow, setModalShow] = useState(false);
    const [channelSection, setChannelSection] = useState("");
    const [channelType, setChannelType] = useState(1);
    const [userInputText, setUserInputText] = useState('');
    const [UserInputVoice, setUserInputVoice] = useState('');
    const [channelText, setChannelText] = useState(["chat 1","chat 2","chat 3","chat 4"])
    const [channelVoice, setChannelVoice] = useState(
        ["voice 1","voice 2","voice 3","voice 4","voice 5","voice 6","voice 7","voice 8",
            "voice 9",
            "voice 10",
            "voice 11",
            "voice 12"]);
    const [displayText, setDisplayText] = useState(false);
    const [displayVoice, setDisplayVoice] = useState(false);

    const toggleModal = () => {
        setModalShow(prev => !prev);
        setUserInputText('');
    }

    const createChannel = (event) => {
        setUserInputText(event.target.value)
    }

    const insertChannel = () => {
        if(userInputText != ''){
            setChannelText(channelText => [...channelText, userInputText])
            setUserInputText('');
            setModalShow(prev => !prev);
        }else{
            setUserInputText('');
            setModalShow(prev => !prev);
        }
    }
 
    const insertChannelKey = (event) => {
        if(event.key === 'Enter'){
            if(userInputText != ''){
                setChannelText(channelText => [...channelText, userInputText])
                setUserInputText('');
                setModalShow(prev => !prev);
            }else{
                setUserInputText('');
                setModalShow(prev => !prev);
            }
        }
    }

    const setChannelTypeText = () => {
        setChannelType(1);
    }

    const setChannelTypeVoice = () => {
        setChannelType(2);
    }

    return(
        <ServerInfo id="serverInfo">
            <Category>
                <span><ExpandIcon/>Canais de texto</span>
                <AddCategoryIcon onClick={toggleModal}/>
            </Category>
            <>
                {channelText.length > 0 && channelText.map((row) => (<ChannelButtonText channelName={row}/>))}
                {/* {displayText && <UserInput
                    type="text"
                    value={userInputText}
                    onChange={this.textHandleChange} 
                    onKeyPress={this.textHandleKeyPress}/>} */}
            </>

            <Modal 
                backdrop    
                onHide={toggleModal}    
                show={modalShow} 
                animation={true} 
                centered
                contentClassName='modal-create-channel'>
                    <Modal.Header closeButton className='modal-header-content'>
                        <Modal.Title className='modal-title-content'>
                            <h2>Criar canal</h2>
                            <div>em Canais de Texto</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-body-content'>
                        <div className='modal-body-content-wrap-margin'>
                            <div className='modal-body-content-wrap'>
                                <div className='modal-body-select-margin'>
                                    <div className={`modal-body-select-padding ${channelType == 1 ? 'selected' : ''}`} onClick={setChannelTypeText} >
                                        <div className='modal-body-input-radio'>
                                            {channelType == 1 ? (<RadioButtonPress />):(<RadioButton />) }
                                        </div> 
                                        <div className='modal-body-text-margin'>
                                            <div className='modal-body-text'>
                                                <div className='modal-body-text-wrap'>
                                                    <HashtagIcon />
                                                    <div className='modal-body-text-flex'>
                                                        <div className='modal-body-text-option'>Text</div>
                                                        <div className='modal-body-text-description'>Envie mensagens, imagens, GIFs, emojis, opiniões e piadas</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='modal-body-select-margin'>
                                    <div className={`modal-body-select-padding ${channelType == 2 ? 'selected' : ''}`} onClick={setChannelTypeVoice}>
                                        <div className='modal-body-input-radio'>
                                            {channelType == 1 ? (<RadioButton />):(<RadioButtonPress />) }
                                        </div> 
                                        <div className='modal-body-text-margin'>
                                            <div className='modal-body-text'>
                                                <div className='modal-body-text-wrap'>
                                                    <VolumeIcon />
                                                    <div className='modal-body-text-flex'>
                                                        <div className='modal-body-text-option'>Voice</div>
                                                        <div className='modal-body-text-description'>Passe tempo com a turma com voz, vídeo e compartilhamento de tela</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='modal-body-content-wrap-margin'>
                            <h5 className='modal-input-title'>NOME DO CANAL</h5>
                            <div>
                                <UserInput autoFocus type='text' placeholder='novo-canal' onChange={createChannel}  onKeyPress={insertChannelKey}/>
                            </div>
                        </div>
                        <div>
                            <div className='modal-body-content-private-channel-margin'>
                                <div className='modal-body-content-private-channel'>
                                    <label >
                                        <Locker />
                                        <div>
                                            Canal privado
                                        </div>
                                    </label>
                                </div>
                                <div className='modal-body-content-private-channel-description-margin'>
                                    <div>
                                        Apenas membros e cargos selecionados poderão ver esse canal.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='modal-footer-content' >
                        <div className='modal-footer-contet-wrap'>
                            <Button variant="link" className='btn-cancelar' onClick={toggleModal}>Cancelar</Button>
                            <Button variant="primary" className='btn-criar-canal' onClick={insertChannel} disabled={userInputText == '' ? true : false}>Criar canal</Button>
                        </div>
                    </Modal.Footer>
            </Modal>
                    
            {/* <Modal 
                isOpen={modalShow}
                onRequestClose={openModal}
                aria={{labelledby: 'Heading'}}
                style={customStyles}
                overlayClassName="Overlay"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                closeTimeoutMS={300}>
                    <ModalHeader>
                        <h1>Modal</h1>
                        <span>&times;</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className='modal-option'>
                            <HashtagIcon />
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className='modal-option selected'>
                            <VolumeIcon />
                            <div>5</div>
                            <div>6</div>
                        </div>
                    </ModalBody>
            </Modal> */}


             {/* <Modal modalShow={modalShow} setModalShow={setModalShow}
            /> */}
            
            <Category>
                <span><ExpandIcon/>canais de voz</span>
                <AddCategoryIcon onClick={toggleModal}/>
            </Category>
                <>
                {channelVoice.length > 0 && channelVoice.map((row) => (<ChannelButtonVoice channelName={row}/>))}
                    {/* {displayVoice && <UserInput
                    type="text"
                    value={this.state.userInputVoice}
                    onChange={this.voiceHandleChange} 
                    onKeyPress={this.voiceHandleKeyPress}/>} */}
                </>
        </ServerInfo>
        )
    }
export default ServerInfor;