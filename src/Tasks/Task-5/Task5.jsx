import React from "react";
import styles from "./Styles.module.css";

const Task5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.smallContainer}>
        <h1 className={styles.heading}>STYLING DONE BY CSS MODULES</h1>
        <a
          href="https://github.com/Hamdan-Khan/Fellowship-Interface/tree/master/src/Tasks/Task-5"
          target="_blank"
          className={styles.button}
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Task5;
