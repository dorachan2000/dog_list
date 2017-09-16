import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './scss/searchbox.scss';
import searchIcon from './images/search.svg';

const cx = classNames.bind(styles);

export default (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="selector__searchbutton" />
      <input className="selector__searchtextbox" type="text" name="fname" placeholder="Search" />
    </div>
  );
};

