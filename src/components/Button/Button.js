import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    /** Label for screen reader only */
    ariaLabel: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    /** @ignore */
    className: PropTypes.string,
    /** Callback gets fired when the button is clicked */
    onClick: PropTypes.func,
    /** Type of the button */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Initial value of the button */
    value: PropTypes.string,
  };

  static defaultProps = {
    ariaLabel: null,
    className: null,
    onClick: () => {},
    type: 'button',
    value: null,
  };

  render() {
    const {
      ariaLabel,
      children,
      className,
      onClick,
      type,
      value,
      ...other
    } = this.props;

    const buttonAttributes = {
      ...other,
      children,
      className: classnames([styles.button, className]),
      onClick,
      type,
      value,
    };

    // eslint-disable-next-line react/button-has-type
    return <button {...buttonAttributes} aria-label={ariaLabel} />;
  }
}

export default Button;
