import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <h3>RiseUp</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Navbar