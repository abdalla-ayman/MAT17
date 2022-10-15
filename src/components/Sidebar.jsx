import React from 'react'

import styles from '../styles/Sidebar.module.css'


import ListItem from './ListItem';

export default function Sidebar({sidebarItems}) {
  return (
    <div className={styles.sidebar}>
      <div>
         <img 
          src={require("../assets/images/easy-high-resolution-logo.svg")}
          alt="Techworks Logo" 
          className={styles.logo}>
        </img>
      </div>
      <div className={styles.menu_items}>
          
          {sidebarItems.map(item => <ListItem name={item}/>)}
      </div>
    </div>
  )
}
