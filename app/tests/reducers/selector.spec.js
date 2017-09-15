// import {
//   UPDATE_ENTIRE_LIST,
//   UPDATE_CURRENT_LIST,
//   UPDATE_SELECTED,
//   UPDATE_IMG_LINKS } from '../../actions/selector';
// import { reducer } from '../../reducers/selector';

describe('reducer for', () => {
  describe('updating selected button', () => {
    xit('should update selected to id 10',
      () => {
        const defaultState = {
          totalList: [],
          curList: [],
          selectedData: -1,
          imageLinks: [],
        };
        const action = {
          type: UPDATE_SELECTED,
          id: 10,
        };
        const result = reducer(defaultState, action);
        expect(result).toMatchSnapshot();
      },
    );
  });
});

