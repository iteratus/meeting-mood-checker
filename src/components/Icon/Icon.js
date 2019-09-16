import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  static checkPropTypeAriaLabel(props, propName) {
    if (props.role === 'img' && !props[propName]) {
      return new Error('Please provide an ariaLabel if role is img!');
    }
    return null;
  }

  static checkPropTypeIcon(props, propName, componentName) {
    if (
      props[propName] &&
      (!props[propName].type || props[propName].type.name !== 'Icon')
    ) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}', expected element of type 'Icon'.`,
      );
    }
    return null;
  }

  static propTypes = {
    /** Provides the user a recognizable name of the object. When the role is set to `presentation`, no label is needed */
    ariaLabel: Icon.checkPropTypeAriaLabel,
    /** Sets a class to give customized styles to the div element. */
    className: PropTypes.string,
    /** Object that gets generated from the SVG-Loader. */
    glyph: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      node: PropTypes.object,
      viewBox: PropTypes.string,
    }).isRequired,
    /** Use `presentation` to hide the elements for assistive technologies. */
    role: PropTypes.oneOf(['img', 'presentation']),
  };

  static defaultProps = {
    ariaLabel: null,
    className: null,
    role: 'presentation',
  };

  render() {
    const { ariaLabel, className, glyph, role, ...other } = this.props;
    const { id, viewBox } = glyph;

    const svgAttr = {
      ...other,
      'aria-label': ariaLabel,
      className,
      role,
      viewBox,
      width: 96, // default height only. can get overwritten by css anytime
    };

    return (
      <svg {...svgAttr}>
        <use xlinkHref={`#${id}`} />
      </svg>
    );
  }
}

export default Icon;
