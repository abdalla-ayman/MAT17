import React from 'react'

import styles from '../styles/Sidebar.module.css'


import CopyRight from './CopyRight';
import ListItem from './ListItem';

export default function Sidebar({sidebarItems}) {
  return (
    <div className={styles.sidebar}>
      <div>
        {/* <img 
          src={require("../assets/TechWorks final design.png")}
          alt="Techworks Logo" 
          className={styles.logo}>
        </img> */}
      </div>
      <div className={styles.menu_items}>
          
          {sidebarItems.map(item => <ListItem name={item}/>)}
      </div>
      <CopyRight></CopyRight>
    </div>
  )
}
