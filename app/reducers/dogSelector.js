import { UPDATE_LIST } from 'actions/dogSelector';

const data = (
  state = {
    maxNumBtns: 12,
    totalList: [],
    curList: [],
    curData: undefined,
    imageLinks: [],
  },
  action,
) => {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        totalList: action.breeds.slice(),
      };
    case UPDATE_BREED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default data;
