import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Icon } from '@iconify/react';
import statsAlt from '@iconify/icons-gridicons/stats-alt';
import outlineFiberNew from '@iconify/icons-ic/outline-fiber-new';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { randomString } from '../../utils/randomString';

class Header extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        session: PropTypes.string,
      }).isRequired,
    }).isRequired
  };

  state = {
    nextSession: randomString(6, randomString.alphaUpper, randomString.numeric)
  };

  newSession = () => {
    this.setState({
      nextSession: randomString(
        6,
        randomString.alphaUpper,
        randomString.numeric
      )
    });
  };

  render() {
    const { match: { params: { session } } } = this.props;
    const { nextSession } = this.state;

    return (
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <Link
              className={styles.link}
              to={`/${nextSession}`}
              onClick={this.newSession}
            >
              <Icon icon={outlineFiberNew} className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/${session}/stats`}>
              <Icon icon={statsAlt} className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
