import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import styles from './App.module.scss';
import Mood from './pages/Mood';
import Stats from './pages/Stats';
import randomString from './utils/randomString';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/:session/stats" component={Stats} />
          <Route exact path="/:session" component={Mood} />
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
