import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import Button from 'components/Button';
import ImageList from 'components/ImageList'
import { fetchTypes, updateSelected, fetchImageLinks } from 'actions/selector';
import styles from './scss/sample.scss';

const cx = classNames.bind(styles);

class SelectorContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTypes());
  }
  getButtons() {
    const { curList, totalList, dispatch } = this.props;
    return curList.map((id) => {
      return (
        <Button
          key={id}
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
    console.log('i', imageLinks)
    console.log('s', selectedData)
    const selected = totalList[selectedData];
    const buttons = this.getButtons();
    return (
      <div className={cx('sample-container')}>
        <h1>Selected breed: {selected}</h1>
        {buttons}
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
