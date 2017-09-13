export const UPDATE_LIST = 'UPDATE_BREEDS_LIST';
export const UPDATE_SELECTED = 'UPDATED_SELECTED';

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title,
  };
};
