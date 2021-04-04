import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

let state = props.store.getState();

let addMessage = () => {
props.store.dispatch(addMessageActionCreator());
}

let onMessageChange = (text) => {
props.store.dispatch(updateNewMessageTextActionCreator(text))
}

  return (
    <Dialogs updateNewMessageText={onMessageChange} 
             addMessage={addMessage} 
             dialogsData={state.dialogsPage.dialogsData}
             messagesData={state.dialogsPage.messagesData}
             newMessageText={state.dialogsPage.newMessageText}/>
             
  )
}

export default DialogsContainer;