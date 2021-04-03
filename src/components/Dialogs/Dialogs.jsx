import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;

let dialogsElements = state.dialogsData.map(d => {
  return <DialogItem name={d.name} id={d.id} />
});

let messageElements = state.messagesData.map(m => {
  return <Message message={m.message} id={m.id}/>
});

let newMessageText = state.newMessageText

let addMessage = () => {
props.store.dispatch(addMessageActionCreator());
}

let onMessageChange = (e) => {
let text = e.target.value
props.store.dispatch(updateNewMessageTextActionCreator(text))
}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          
         { dialogsElements }
     </div>
     <div className={s.messages}>
        <div>{ messageElements }</div>
        <div>
          <div> <input className ={s.input} placeholder='Type Message' 
                                     onChange={onMessageChange} 
                                     value={newMessageText}></input></div>
          <div> <button onClick = {addMessage}>Send</button></div>
        </div>
         
         
      
      </div>
     
    </div>

  )
}

export default Dialogs;