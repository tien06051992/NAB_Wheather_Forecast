import {
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILED,
  CHANGE_CURRENT_LOCATION,
} from '../constants';

import {
  searchLocationAction,
  searchLocationSuccessAction,
  searchLocationFailedAction,
  changeCurrentLocationAction,
} from '../actions';

describe('Home Actions', () => {
  describe('searchLocationAction', () => {
    it('should return the correct type and the passed location', () => {
      const location = 'ho chi minh';
      const expectedResult = {
        type: SEARCH_LOCATION,
        location,
      };

      expect(searchLocationAction(location)).toEqual(expectedResult);
    });
  });

  describe('searchLocationSuccessAction', () => {
    it('should return the correct type and the passed locations', () => {
      const locations = [{ id: 1 }, { id: 2 }];
      const expectedResult = {
        type: SEARCH_LOCATION_SUCCESS,
        locations,
      };

      expect(searchLocationSuccessAction(locations)).toEqual(expectedResult);
    });
  });

  describe('searchLocationFailedAction', () => {
    it('should return the correct type and the passed error', () => {
      const error = 'Dummy error';
      const expectedResult = {
        type: SEARCH_LOCATION_FAILED,
        error,
      };

      expect(searchLocationFailedAction(error)).toEqual(expectedResult);
    });
  });

  describe('changeCurrentLocationAction', () => {
    it('should return the correct type and the passed woeid', () => {
      const woeid = 123;
      const expectedResult = {
        type: CHANGE_CURRENT_LOCATION,
        woeid,
      };

      expect(changeCurrentLocationAction(woeid)).toEqual(expectedResult);
    });
  });
});
