import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => { 

  let postsElements = props.postsData.map(p => {
    
    return <Post message = {p.message} id={p.id} likesCount={p.likesCount}/>
  }); 

  let newPostText = props.newPostText

  let onAddPost = () => {
  props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
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
        <button onClick={onAddPost}>Add Post</button>
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