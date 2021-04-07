import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import s from './Sidebar.module.css';

const Sidebar = (props) => {

  
let sideBarElements = props.sidebarData.map(b => {
  return <SidebarItem name={b.name} id={b.id} key={b.id} />
});

  return (
    <div className={s.sidebar}>
      <div className={s.sidebarItems}>
          
         { sideBarElements }
     </div>
    
    </div>

  )
}

export default Sidebar;
