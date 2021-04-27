import React from 'react';
import { Redirect } from 'react-router';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

let dialogsElements = props.dialogsData.map(d => {
  return <DialogItem name={d.name} id={d.id} key={d.id} />
});

let messageElements = props.messagesData.map(m => {
  return <Message message={m.message} id={m.id} key={m.id}/>
});

let newMessageText = props.newMessageText

let onAddMessage = () => {
props.addMessage();
}

let onMessageChange = (e) => {
let text = e.target.value
props.updateNewMessageText(text)
}

if(!props.isAuth){
  return <Redirect to = "/login" />
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
          <div> <button onClick = {onAddMessage}>Send</button></div>
        </div>
         
         
      
      </div>
     
    </div>

  )
}

export default Dialogs;