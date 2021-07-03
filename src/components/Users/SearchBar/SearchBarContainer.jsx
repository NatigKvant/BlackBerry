import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import SearchBar from './SearchBar';
import UserSetter from './UserSetter';
import s from '../Users.module.css';
import Paginator from '../../common/Paginator/Paginator';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestUsers,setCurrentPage, toggleFollowingProgress} from '../../../Redux/usersReducer';
import { getCurrentPage, getPageSize, getTotalUsersCount, getIsFetching, getFollowingInProgress, getUsers } from '../../../Redux/users-selectors';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
  
};


class SearchBarContainer extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      query: "",
      filteredItems: [],
      items: [],
      modalIsOpen: false,
    };
    
    this.getData();
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}


getData = () => {
      fetch("https://social-network.samuraijs.com/api/1.0/users", {
        method: 'get',
        withCredentials: true,
        headers: {
          "API-KEY" : "7470744c-b0c9-4f19-8251-815a8819bbdf"
      }
      })
      .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
}



/* componentDidMount() {
this.props.requestUsers(this.props.currentPage, this.props.pageSize);
}

onPageChanged = (pageNumber) => {
  this.props.requestUsers(pageNumber, this.props.pageSize);
} */

handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredItems = prevState.items.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredItems
        };
      });
 };


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { error, isLoaded} = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {

    return (
      
      <div >
        <button className={s.searchButton} onClick={this.openModal}>Search Users</button>
        <ReactModal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(17, 0, 250, 0.74)'
            },
            content: {
              position: 'absolute',
              top: '100px',
              left: '100px',
              right: '100px',
              bottom: '100px',
              border: '1px solid #ccc',
              background: 'rgba(248, 248, 248, 0)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Search</h2>
          <button className ={s.closeButton} onClick={this.closeModal}>close</button>
          
          
          <form >
          <Paginator />
          <SearchBar handleInputChange={this.handleInputChange}/>
          {this.state.filteredItems.map(u => <UserSetter className = {s.usersShow} user={u} key={u.id} />)}
          </form>
        </ReactModal>
      </div>
    );
  }
 }
}

let mapStateToProps = (state) => {

  return {
  usersData: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,{
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
    }),
  /* withAuthRedirect */
)(SearchBarContainer)