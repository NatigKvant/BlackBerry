const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    
    switch(action.type) {
      case ADD_MESSAGE:
        let newMessage = state.newMessageText;
        state.messagesData.push({id: 7, message:newMessage});
        state.newMessageText = '';
        return state;
      case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.newText;
        return state;
      default:
        return state;
    }
     
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText})

export default dialogsReducer;