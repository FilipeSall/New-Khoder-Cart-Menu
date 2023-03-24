import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import Clock from './Clock';
import Date from './Date';
import styles from './HeaderMenu.module.css';

function HeaderMenu() {

  const {setSearchValue} = useContext(GlobalContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <header className={styles.container}>
      <input type='text' className={styles.input} id='input' placeholder='Digite o nome do produto'  onChange={handleChange}/>
        <div className={styles.timeDateWraper}>
          <Clock />
          <Date />
        </div>
    </header>
  )
}

export default HeaderMenu