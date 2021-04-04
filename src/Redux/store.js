import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"


let store = {
   _state:{
 
      profilePage: {
       postsData:[
           {id:1,message:'Hi, how are you?',likesCount:'15 likes'},
           {id:2,message:'Its my new post',likesCount:'20 likes'}
          ],
       newPostText: ''
          
      },
      dialogsPage: {
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
      },
      sidebarPage: {
         sidebarData: [
            {id: 1, name:'Andrew'},
            {id: 2, name:'Natig'},
            {id: 3, name:'Leona'},
      
         ],
       }
      },
      _callSubscriber() {
         console.log('State changed');
          },

   getState() {
      return this._state;
   },
   subscribe(observer){
      this._callSubscriber = observer;
   },

   dispatch(action){
      
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
      
      this._callSubscriber(this._state);
   }
}
     

export default store;
window.store = store;