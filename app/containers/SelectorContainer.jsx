import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import Button from 'components/Button';
import { fetchTypes } from 'actions/selector';
import styles from './scss/sample.scss';

const cx = classNames.bind(styles);

class SelectorContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTypes());
  }
  getButtons() {
    const { curList } = this.props;
    return curList.map((type) => {
      return (<Button buttonText={type} />);
    });
  }
  render() {
    const buttons = this.getButtons();
    return (
      <div className={cx('sample-container')}>
        <h1>This is a sample container</h1>
        {buttons}
      </div>
    );
  }
}

SelectorContainer.PropTypes = {
  curList: PropTypes.array,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    curList: state.selector.curList,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     updateTitleAction: () => {
//       dispatch(sampleActions.updateTitle('This is a different title'));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer);
export default connect(mapStateToProps)(SelectorContainer);
