export const UPDATE_ENTIRE_LIST = 'UPDATE_ENTIRE_LIST';
export const UPDATE_CURRENT_LIST = 'UPDATE_CURRENT_LIST';
export const UPDATE_SELECTED = 'UPDATED_SELECTED';

export const updateList = (types) => {
  return {
    type: UPDATE_ENTIRE_LIST,
    types,
  };
};
export const updateCurList = () => {
  return {
    type: UPDATE_CURRENT_LIST,
  };
};
export const fetchTypes = () => (dispatch, getState) => {
  return fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then((json) => {
      dispatch(updateList(json.message));
      dispatch(updateCurList());
    });
};
