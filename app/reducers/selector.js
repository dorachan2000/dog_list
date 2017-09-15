import { UPDATE_ENTIRE_LIST,
         UPDATE_CURRENT_LIST,
         UPDATE_SELECTED,
         UPDATE_IMG_LINKS } from 'actions/selector';

const MAX_NUM_BUTTONS = 12;
const getPartialList = (totalList) => {
  return totalList
    .slice(0, MAX_NUM_BUTTONS)
    .map((name, i) => i);
};
const data = (
  state = {
    totalList: [],
    curList: [],
    selectedData: -1,
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
        curList: getPartialList(state.totalList),
      };
    case UPDATE_SELECTED:
      return {
        ...state,
        selectedData: action.id,
      };
    case UPDATE_IMG_LINKS:
      return {
        ...state,
        imageLinks: action.links.slice(),
      };
    default:
      return state;
  }
};

export default data;
