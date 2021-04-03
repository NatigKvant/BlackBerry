import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => { 

  let state = props.store.getState().profilePage;
  
  let postsElements = state.postsData.map(p => {
    
    return <Post message = {p.message} id={p.id} likesCount={p.likesCount}/>
  }); 

  let newPostText = state.newPostText

  let addPost = () => {
  props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
        <input className ={s.input} onChange={onPostChange}  
                                    value={newPostText}/>
        </div>
        <div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
        </div>
        </div>

      <div className={s.posts}>
        { postsElements }
      </div>
    </div>

  )
}

export default MyPosts;