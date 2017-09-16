import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ImageList from 'components/ImageList'
import SearchBoxContainer from 'containers/SearchBoxContainer'
import { fetchTypes, updateSelected, fetchImageLinks } from 'actions/selector';
import styles from './scss/selector.scss';

const cx = classNames.bind(styles);

class SelectorContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTypes());
  }
  getButtons() {
    const { curList, totalList, dispatch, selectedData} = this.props;

    return curList.map((id) => {
      const selected = selectedData === id;
      return (
        <Button
          key={id}
          className={
            selected ? cx('selector__button-selected') : cx('selector__button')
          }
          buttonText={totalList[id]}
          onClick={() => {
              dispatch(updateSelected(id));
              dispatch(fetchImageLinks(id));
            }
          }
        />);
    });
  }
  render() {
    const { selectedData, totalList, imageLinks } = this.props;
    const selected = totalList[selectedData];
    const buttons = this.getButtons();
    return (
      <div className={cx('sample-container')}>
        <div className={cx('selector__nav')}>
          <h1 className={cx('selector__title')}>Dogs!</h1>
          <SearchBoxContainer />
        </div>
        <div className={cx('selector__container')}>
          {buttons}
        </div>
        <ImageList imageLinks={imageLinks} />

      </div>
    );
  }
}

SelectorContainer.PropTypes = {
  curList: PropTypes.array,
  dispatch: PropTypes.func,
  imageLinks: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    curList: state.selector.curList,
    totalList: state.selector.totalList,
    selectedData: state.selector.selectedData,
    imageLinks: state.selector.imageLinks,
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
