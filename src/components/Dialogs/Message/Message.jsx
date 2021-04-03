import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  
  return(
    <div>
    <div className={s.message}>
    <img src='https://image.shutterstock.com/z/stock-vector-incognito-agent-icon-spy-logo-unknown-person-avatar-1204746199.jpg'></img>
      {props.message}</div>
    </div>
  )
}

export default Message;