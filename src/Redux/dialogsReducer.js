const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  
    messagesData:[
        {id: 1, message:'Hello'},
        {id: 2, message:'Nice day'},
        {id: 3, message:'We are friends'},
        {id: 4, message:'nice to meet you'},
        {id: 5, message:'Next level'},
        {id: 6, message:'Hi'}
     ],
     newMessageText:'',
     dialogsData:[
        {id: 1, name:'Andrew'},
        {id: 2, name:'Natig'},
        {id: 3, name:'Leona'},
        {id: 4, name:'Vlad'},
        {id: 5, name:'Cherry'},
        {id: 6, name:'Terminator'}
        ],
};

const dialogsReducer = (state = initialState, action) => {
    
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