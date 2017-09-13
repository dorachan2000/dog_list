import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import Button from 'components/Button';
import * as sampleActions from 'actions/sample';
import styles from './scss/sample.scss';

const cx = classNames.bind(styles);

class SelectorContainer extends Component {
  getButtons() {
    const { breeds } = this.props;
    return breeds.map((breed) => {
      return (<Button buttonText={breed} />);
    });
  }
  render() {
    const buttons = this.getButtons();
    const { name, updateTitleAction } = this.props
    return (
      <div className={cx('sample-container')}>
        <h1>This is a sample container</h1>
        {buttons}
      </div>
    );
  }
}

SelectorContainer.PropTypes = {
  data: PropTypes.object,
  performSampleAction: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    breeds: state.dogSelector.breeds,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitleAction: () => {
      dispatch(sampleActions.updateTitle('This is a different title'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer);
