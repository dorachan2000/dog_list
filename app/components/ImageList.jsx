import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './scss/sample';
const cx = classNames.bind(styles);

export default class ImageLinks extends Component {
  constructor(props) {
    super(props);
    this.getImages = this.getImages.bind(this);
  }
  getImages() {
    const { imageLinks } = this.props;
    if (!imageLinks) return <div />;
    return imageLinks.map((link) => {
      return (
        <div>{link}</div>
      );
    });
  }
  render() {
    const images = this.getImages();
    return (
      <div>
        {images}
      </div>
    );
  }
}

ImageLinks.propTypes = {
};
