import { UPDATE_ENTIRE_LIST,
         UPDATE_CURRENT_LIST,
         UPDATE_SELECTED } from 'actions/selector';

const MAX_NUM_BUTTONS = 12;
const data = (
  state = {
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
        totalList: action.types.slice(),
      };
    case UPDATE_CURRENT_LIST:
      return {
        ...state,
        curList: state.totalList.slice(0, MAX_NUM_BUTTONS),
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
