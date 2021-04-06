import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

/* const MyPostsContainer = () => { 
  return (
 <StoreContext.Consumer> 
      { store => {
        let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
            }
          
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
            store.dispatch(action);
            }
          
          return <MyPosts updateNewPostText={onPostChange} 
                          addPost={addPost} 
                          postsData={state.profilePage.postsData}
                          newPostText={state.profilePage.newPostText}/>
        }
       }
       </StoreContext.Consumer>
   )
  
} */

let mapStateToProps = (state) => {
  return {
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;