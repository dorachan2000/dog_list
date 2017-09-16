import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchFiltering } from 'actions/selector';
import SearchBox from 'components/SearchBox'
import styles from './scss/selector.scss';

const cx = classNames.bind(styles);

class SearchBoxContainer extends Component {
  throttle(func, limit) {
    let inThrottle, timeoutCall, lastRan;
    let throttledFunc = (...args) => {
      func.apply(this, args)
    }
    return (...args) => {
      let context = this
      if (!inThrottle) {
        throttledFunc(...args)
        lastRan = Date.now()
        inThrottle = true;
      } else {
        clearTimeout(timeoutCall)
        timeoutCall = setTimeout(() => {
            throttledFunc(...args);
            lastRan = Date.now()
          }, limit)

      }
    };
  };
  throttledFilter(){
    const { searchFiltering } = this.props
    return this.throttle(searchFiltering, 200)
  }
  render() {
    return (
      <SearchBox
        className={cx('selector__searchbox')}
        onChange={this.throttledFilter()}
      />
    );
  }
}

SearchBoxContainer.PropTypes = {
  imageLinks: PropTypes.array,
};
function mapStateToProps(state) {
  return {
    totalList: state.selector.totalList,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFiltering }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
