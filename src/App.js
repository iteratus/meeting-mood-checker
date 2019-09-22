import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import styles from './App.module.scss';
import Mood from './pages/Mood';
import randomString from './utils/randomString';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/:session/stats" component={Mood} />
          <Route path="/:session" component={Mood} />
          <Redirect
            to={`/${randomString(
              6,
              randomString.alphaUpper,
              randomString.numeric
            )}`}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
