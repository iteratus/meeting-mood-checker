import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import statsAlt from '@iconify/icons-gridicons/stats-alt';
import fileNew from '@iconify/icons-el/file-new';
import styles from './App.module.scss';
import Mood from './pages/Mood';
import {ContextProvider} from "./components/Context/Context";
import {randomString} from "./utils/randomString";

console.log(randomString(10));

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className={styles.app}>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li><Link className={styles.link} to="/new"><Icon icon={fileNew} className={styles.icon} /></Link></li>
              <li><Link className={styles.link} to="/stats"><Icon icon={statsAlt} className={styles.icon} /></Link></li>
            </ul>
          </nav>
          <div className={styles.choose}>
            <Route
              path="/stats"
              component={Mood}
            />
            <Route
              path="/"
              component={Mood}
            />
          </div>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
