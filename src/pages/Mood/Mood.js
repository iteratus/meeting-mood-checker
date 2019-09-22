import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import { Icon } from '@iconify/react';
import emojiHappy from '@iconify/icons-entypo/emoji-happy';
import emojiNeutral from '@iconify/icons-entypo/emoji-neutral';
import emojiSad from '@iconify/icons-entypo/emoji-sad';
import checkCircle from '@iconify/icons-fa-solid/check-circle';

import Button from '../../components/Button';
import styles from './Mood.module.scss';

class Mood extends Component {
  render() {
    return (
      <>
        <div className={styles.column}>
          <Button value="happy" ariaLabel="Happy" className={styles.button}>
            <Icon icon={emojiHappy} className={classNames(styles.icon, styles.happy)} />
            <Icon icon={checkCircle} className={classNames(styles.icon, styles.checkCircle)} />
          </Button>
        </div>
        <div className={styles.column}>
          <Button value="neutral" ariaLabel="Neutral" className={styles.button}>
            <Icon icon={emojiNeutral} className={classNames(styles.icon, styles.neutral)} />
            <Icon icon={checkCircle} className={classNames(styles.icon, styles.checkCircle)} />
          </Button>
        </div>
        <div className={styles.column}>
          <Button value="sad" ariaLabel="Sad" className={styles.button}>
            <Icon icon={emojiSad} className={classNames(styles.icon, styles.sad)} />
            <Icon icon={checkCircle} className={classNames(styles.icon, styles.checkCircle)} />
          </Button>
        </div>
      </>
    );
  }
}

export default Mood;
