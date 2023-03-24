import React, { useEffect, useState } from "react";
import styles from './HeaderMenu.module.css';

function DateComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 86400000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className={styles.date}>{date.toLocaleDateString()}</p>;
}

export default DateComponent;
