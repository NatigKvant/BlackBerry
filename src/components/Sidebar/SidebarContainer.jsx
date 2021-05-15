import { connect } from 'react-redux';
import Sidebar from './Sidebar';


/* const SidebarContainer = () => {

  return <StoreContext.Consumer> 
      { store => {
        let state = store.getState();
        return <Sidebar sidebarData={state.sidebarPage.sidebarData}/>
        
      }
     }
     </StoreContext.Consumer>

  
}

export default SidebarContainer; */

let mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebarPage.sidebarData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
} 


const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;