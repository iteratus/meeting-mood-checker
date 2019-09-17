import React from 'react';
import classnames from 'classnames';

import { Icon } from '@iconify/react';
import emojiHappy from '@iconify/icons-entypo/emoji-happy';
import emojiNeutral from '@iconify/icons-entypo/emoji-neutral';
import emojiSad from '@iconify/icons-entypo/emoji-sad';
import checkCircle from '@iconify/icons-fa-solid/check-circle';

import Button from "./components/Button";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.column}>
        <Button value="happy" ariaLabel="Happy" className={styles.button}>
          <Icon icon={emojiHappy} className={classnames(styles.icon, styles.happy)} />
          <Icon icon={checkCircle} className={classnames(styles.icon, styles.checkCircle)} />
        </Button>
      </div>
      <div className={styles.column}>
        <Button value="neutral" ariaLabel="Neutral" className={styles.button}>
          <Icon icon={emojiNeutral} className={classnames(styles.icon, styles.neutral)} />
          <Icon icon={checkCircle} className={classnames(styles.icon, styles.checkCircle)} />
        </Button>
      </div>
      <div className={styles.column}>
        <Button value="sad" ariaLabel="Sad" className={styles.button}>
          <Icon icon={emojiSad} className={classnames(styles.icon, styles.sad)} />
          <Icon icon={checkCircle} className={classnames(styles.icon, styles.checkCircle)} />
        </Button>
      </div>
    </div>
  );
}

export default App;
