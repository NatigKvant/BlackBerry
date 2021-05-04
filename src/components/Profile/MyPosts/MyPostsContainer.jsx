import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;