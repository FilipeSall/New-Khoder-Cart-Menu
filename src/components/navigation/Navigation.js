import React from 'react';
import styles from './navigation.module.css';
import Logo from '../../assets/imgs/logo.png';
import LinksContainer from '../links/LinksContainer';

function Navigation() {
  return (
    <nav className={styles.container}>
      <img src={Logo} alt='logo'/>
      <LinksContainer />
    </nav>
  )
}

export default Navigation