import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';

import { Icon } from '@iconify/react';
import emojiHappy from '@iconify/icons-entypo/emoji-happy';
import emojiNeutral from '@iconify/icons-entypo/emoji-neutral';
import emojiSad from '@iconify/icons-entypo/emoji-sad';
import checkCircle from '@iconify/icons-fa-solid/check-circle';

import Button from '../../components/Button';
import styles from './Mood.module.scss';
import Header from '../../components/Header/Header';

class Mood extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        session: PropTypes.string,
      }).isRequired,
    }).isRequired
  };

  handleClick = event => {
    const { match: { params: { session } } } = this.props;
    const { value } = event.currentTarget;

    let allValues = null;

    try {
      allValues = JSON.parse(localStorage.moodCheck);
    } catch {
      allValues = { [session]: {} };
    }

    if (!allValues[session]) {
      allValues = { [session]: {} };
    }

    if (!allValues[session][value]) {
      allValues[session][value] = 0;
    }

    allValues[session][value] += 1;

    localStorage.moodCheck = JSON.stringify(allValues);
  };

  render() {
    return (
      <>
        <Header />
        <div className={styles.choose}>
          <div className={styles.column}>
            <Button
              value="happy"
              ariaLabel="Happy"
              className={styles.button}
              onClick={this.handleClick}
            >
              <Icon
                icon={emojiHappy}
                className={classNames(styles.icon, styles.happy)}
              />
              <Icon
                icon={checkCircle}
                className={classNames(styles.icon, styles.checkCircle)}
              />
            </Button>
          </div>
          <div className={styles.column}>
            <Button
              value="neutral"
              ariaLabel="Neutral"
              className={styles.button}
              onClick={this.handleClick}
            >
              <Icon
                icon={emojiNeutral}
                className={classNames(styles.icon, styles.neutral)}
              />
              <Icon
                icon={checkCircle}
                className={classNames(styles.icon, styles.checkCircle)}
              />
            </Button>
          </div>
          <div className={styles.column}>
            <Button
              value="sad"
              ariaLabel="Sad"
              className={styles.button}
              onClick={this.handleClick}
            >
              <Icon
                icon={emojiSad}
                className={classNames(styles.icon, styles.sad)}
              />
              <Icon
                icon={checkCircle}
                className={classNames(styles.icon, styles.checkCircle)}
              />
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Mood);
