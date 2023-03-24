import React, { useEffect, useState } from "react";
import styles from "./HeaderMenu.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";

function Clock() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  const hours = clock.getHours();
  const minutes = clock.getMinutes();

  return (
    <div className={styles.clockContainer}>
      <AiOutlineClockCircle />
      {hours < 10 ? "0" + hours : hours}:
      {minutes < 10 ? "0" + minutes : minutes}
    </div>
  );
}

export default Clock;
