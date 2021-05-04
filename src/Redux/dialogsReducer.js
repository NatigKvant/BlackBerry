const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  
    messagesData:[
        {id: 1, message:'Hello'},
        {id: 2, message:'Nice day'},
        {id: 3, message:'We are friends'},
        {id: 4, message:'nice to meet you'},
        {id: 5, message:'Next level'},
        {id: 6, message:'Hi'},
        {id: 7, message:'Welcome'},
        {id: 8, message:'Music is on'},
        {id: 9, message:'Happy day'},
        {id: 10, message:'nice car'},
        {id: 11, message:'My way is open'},
        {id: 12, message:'new home'},
        {id: 13, message:'Like this'},
        {id: 14, message:'well'},
        {id: 15, message:'door is open'},
        {id: 16, message:'movie'},
     ],
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
        let newMessage = action.newMessageText;
        return {
        ...state,
        messagesData: [...state.messagesData,{id: 7, message:newMessage}],
        };
      
      default:
        return state;
    }
     
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer;