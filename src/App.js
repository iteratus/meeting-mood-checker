import React from 'react';
import iconExcellent from './logo.svg';
import iconOkay from './logo.svg';
import iconBad from './logo.svg';

import Button from "./components/Button";
import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <div className={styles.column}>
        <Button value="excellent">
          <img src={iconExcellent} alt="Excellent" />
        </Button>
      </div>
      <div className={styles.column}>
        <Button value="okay">
          <img src={iconOkay} alt="Okay" />
        </Button>
      </div>
      <div className={styles.column}>
        <Button value="bad">
          <img src={iconBad} alt="Bad" />
        </Button>
      </div>
    </div>
  );
}

export default App;
