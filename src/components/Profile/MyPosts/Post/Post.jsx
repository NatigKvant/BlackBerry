import React from 'react';
import s from './Post.module.css';

const Post = ({id, deletePost, likesCount, message}) => {
  return (
    <div className={s.item}>
      <img src='https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' />
      {message}
      <button onClick={() => deletePost(id)} type="primary">Delete Post</button>
      <div>
        {likesCount}
      </div>
    </div>

  )
}

export default Post;