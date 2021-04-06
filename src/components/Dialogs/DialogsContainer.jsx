import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

/* const DialogsContainer = () => {
 
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
} */

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch (updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch (addMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

