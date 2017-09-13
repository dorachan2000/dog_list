import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './scss/sample';
const cx = classNames.bind(styles);

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div className={cx('sample')}>
        <button className={cx('sample__button')} onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

Sample.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};
