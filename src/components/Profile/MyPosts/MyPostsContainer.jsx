import { connect } from 'react-redux';
import { addPostActionCreator, deletePostActionCreator} from '../../../Redux/profileReducer';
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
    },
    deletePost: (id) => {
      dispatch(deletePostActionCreator(id))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;