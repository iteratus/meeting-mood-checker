import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    /** Label for screen reader only */
    ariaLabel: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    /** @ignore */
    className: PropTypes.string,
    /** Callback gets fired when the button is clicked */
    onClick: PropTypes.func,
    /** Type of the button */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Initial value of the button */
    value: PropTypes.string
  };

  static defaultProps = {
    ariaLabel: null,
    className: null,
    onClick: () => {},
    type: 'button',
    value: null
  };

  state = {
    active: false
  };

  delayHandler = null;

  handleClick = event => {
    const { onClick } = this.props;

    this.setState({ active: true });

    if (this.delayHandler) {
      clearTimeout(this.delayHandler);
      this.delayHandler = null;
    }

    this.delayHandler = setTimeout(() => {
      this.setState({ active: false });
    }, 1000);

    onClick(event);
  };

  render() {
    const { active } = this.state;

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
      className: classNames(styles.button, className, {
        [styles.active]: active
      }),
      onClick,
      type,
      value
    };

    return (
      <button
        {...buttonAttributes}
        aria-label={ariaLabel}
        onClick={this.handleClick}
      />
    );
  }
}

export default Button;
