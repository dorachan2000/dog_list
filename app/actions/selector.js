export const UPDATE_ENTIRE_LIST = 'UPDATE_ENTIRE_LIST';
export const UPDATE_CURRENT_LIST = 'UPDATE_CURRENT_LIST';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const UPDATE_IMG_LINKS = 'UPDATE_IMG_LINKS';

const MAX_NUM_BUTTONS = 12;
const getPartialList = (totalList) => {
  return totalList
    .slice(0, MAX_NUM_BUTTONS)
    .map((name, i) => i);
};

export const updateList = (types) => {
  return {
    type: UPDATE_ENTIRE_LIST,
    types,
  };
};
export const updateCurList = (types) => {
  return {
    type: UPDATE_CURRENT_LIST,
    types,
  };
};
export const updateSelected = (id) => {
  return {
    type: UPDATE_SELECTED,
    id,
  };
};
export const updateImgLinks = (links) => {
  return {
    type: UPDATE_IMG_LINKS,
    links,
  };
};
export const fetchTypes = () => (dispatch, getState) => {
  return fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then((json) => {
      dispatch(updateList(json.message));
      const partialList = getPartialList(getState().selector.totalList);
      dispatch(updateCurList(partialList));
    });
};

export const fetchImageLinks = id => (dispatch, getState) => {
  const breedName = getState().selector.totalList[id];
  return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then(response => response.json())
    .then((json) => {
      dispatch(updateImgLinks(json.message));
    });
};

