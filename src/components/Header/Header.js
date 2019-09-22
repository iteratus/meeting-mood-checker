import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Icon } from '@iconify/react';
import statsAlt from '@iconify/icons-gridicons/stats-alt';
import checkCircle from '@iconify/icons-fa-solid/check-circle';
import outlineFiberNew from '@iconify/icons-ic/outline-fiber-new';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import randomString from '../../utils/randomString';

class Header extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        session: PropTypes.string
      }).isRequired
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
    const {
      match: {
        params: { session },
        path
      }
    } = this.props;
    const { nextSession } = this.state;

    let viewLink = {
      to: `/${session}/stats`,
      'aria-label': 'View stats',
      icon: statsAlt
    };

    if (path.includes('/stats')) {
      viewLink = {
        to: `/${session}`,
        ariaLabel: 'View chooser',
        icon: checkCircle
      };
    }

    return (
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <Link
              className={styles.link}
              to={`/${nextSession}`}
              onClick={this.newSession}
              aria-label="Create new mood check"
            >
              <Icon icon={outlineFiberNew} className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to={viewLink.to}
              aria-label={viewLink.ariaLabel}
            >
              <Icon icon={viewLink.icon} className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
