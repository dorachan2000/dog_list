import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SampleContainer from 'containers/SampleContainer';
import SelectorContainer from 'containers/SelectorContainer'

import classNames from 'classnames/bind';
import styles from './scss/base-page';
const cx = classNames.bind(styles);

function BasePage() {
  return (
    <div className={cx('base-page')}>
      {/* <SampleContainer /> */}
      <SelectorContainer />
    </div>
 );
}

export default BasePage;
