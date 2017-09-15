import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './scss/image-list';
const cx = classNames.bind(styles);

export default class ImageLinks extends Component {
  constructor(props) {
    super(props);
    this.getImages = this.getImages.bind(this);
  }
  getImages() {
    const { imageLinks } = this.props;
    if (!imageLinks) return <div />;
    else if (imageLinks.length === 0) return <div>No Images</div>;
    return imageLinks.map((link) => {
      return (
        <img className={cx('imagelist__image')} src={`${link}`} alt="dog" />
      );
    });
  }
  // <div>{link}</div>
  render() {
    const images = this.getImages();
    return (
      <div className={cx('imagelist__container')}>
        {images}
      </div>
    );
  }
}

ImageLinks.propTypes = {
};
