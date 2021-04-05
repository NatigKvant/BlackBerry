import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
 
  return <StoreContext.Consumer> 
    { store => {
        
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
          }
          
        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text))
          }
        
        let state = store.getState()

        return <Dialogs updateNewMessageText={onMessageChange} 
              addMessage={addMessage} 
              dialogsData={state.dialogsPage.dialogsData}
              messagesData={state.dialogsPage.messagesData}
              newMessageText={state.dialogsPage.newMessageText}/>
      }
     }
     </StoreContext.Consumer>
             
  
}

export default DialogsContainer;

