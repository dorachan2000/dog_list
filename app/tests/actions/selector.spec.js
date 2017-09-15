import { fetchImageLinks, updateSelected } from '../../actions/selector';

describe('updating selected button', () => {
  it('should update selected to id 10',
    () => {
      expect(updateSelected(10)).toEqual({
        type: 'UPDATED_SELECTED',
        id: 10,
      });
    },
  );
});

