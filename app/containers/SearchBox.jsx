import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchFiltering } from 'actions/selector';
import styles from './scss/selector.scss';

const cx = classNames.bind(styles);

class SearchBox extends Component {
  deployFiltering(){
    console.log('hello')
  }
  render() {
    const { selectedData, totalList, imageLinks } = this.props;
    return (
      <div className={cx('searchbox')}>
        <input type="text" name="fname" placeholder="Search" onChange={this.deployFiltering} />
      </div>
    );
  }
}

SearchBox.PropTypes = {
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
// export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
export default connect(mapStateToProps)(SearchBox);
