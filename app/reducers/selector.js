import { UPDATE_ENTIRE_LIST,
         UPDATE_CURRENT_LIST,
         UPDATE_SELECTED } from 'actions/selector';

const data = (
  state = {
    maxNumBtns: 12,
    totalList: [],
    curList: [],
    selectedData: undefined,
    imageLinks: [],
  },
  action,
) => {
  switch (action.type) {
    case UPDATE_ENTIRE_LIST:
      return {
        ...state,
        totalList: action.list.slice(),
      };
    case UPDATE_CURRENT_LIST:
      return {
        ...state,
      };
    case UPDATE_SELECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default data;
