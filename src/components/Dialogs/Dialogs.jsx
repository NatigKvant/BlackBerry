import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
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

let addNewMessage = (values) => {
  props.addMessage(values.newMessageText);
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
        
         
         
      
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>

  )
}

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div> 
            <Field component="input" className = {s.input} name="newMessageText" placeholder="Type Message" />
          </div>
          <div> <button>Send</button></div>
        </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(addMessageForm)

export default Dialogs;