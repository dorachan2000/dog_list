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
  deployFiltering(){
    console.log('hello')
  }
  render() {
    const { selectedData, totalList, imageLinks, className } = this.props;
    return (
      <SearchBox className={cx('selector__searchbox')} />
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

// function mapDispatchToProps(dispatch) {
//   return {
//     updateTitleAction: () => {
//       dispatch(sampleActions.updateTitle('This is a different title'));
//     },
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}
// export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
export default connect(mapStateToProps)(SearchBoxContainer);
