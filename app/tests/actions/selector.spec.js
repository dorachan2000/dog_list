import { fetchImageLinks, updateSelected } from '../../actions/selector';

describe('action type for', () => {
  describe('updating seleced button', () => {
    it('should update selected to id 10',
      () => {
        expect(updateSelected(10)).toEqual({
          type: 'UPDATE_SELECTED',
          id: 10,
        });
      },
    );
  });
});

