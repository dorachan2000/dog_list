export const UPDATE_ENTIRE_LIST = 'UPDATE_ENTIRE_LIST';
export const UPDATE_CURRENT_LIST = 'UPDATE_CURRENT_LIST';
export const UPDATE_SELECTED = 'UPDATED_SELECTED';

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title,
  };
};
