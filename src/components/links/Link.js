import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './links.module.css';

function Link({icon, text, href }) {

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.isActive : ""}`
      }
    >
      {icon}{text}
    </NavLink>
  )
}
export default Link