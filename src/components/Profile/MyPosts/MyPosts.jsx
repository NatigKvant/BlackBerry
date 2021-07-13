import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator,required } from '../../../utils/validators/validators'
import { profileTextarea } from '../../common/FormsControls/FormControls';

const MyPosts = ({id, deletePost, postsData, addPost}) => { 

  let postsElements = postsData.map(p => {
    
    return <Post message = {p.message} deletePost={deletePost} id={p.id} likesCount={p.likesCount} key={p.id}/>
  }); 


  let addNewPost = (values) => {
    addPost(values.newPostText);
  }

  return (
    
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.posts}>
        { postsElements }
      </div>
      <AddPostFormRedux onSubmit={addNewPost}/>
    </div>
  

  )
 }



const maxLength10 = maxLengthCreator(10);

const MyPostsForm = ({deletePost, id,  ...props}) => {
    return (
      <form onSubmit={props.handleSubmit}>
      <div>
        <Field className ={s.input} 
               component={profileTextarea} 
               validate={[required, maxLength10]} 
               name="newPostText" 
               placeholder="Add Post" />
        </div>
        <button>Add Post</button>
        
      </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addPostForm"})(MyPostsForm)

export default MyPosts;