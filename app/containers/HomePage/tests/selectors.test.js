import { initialState } from '../reducer';
import {
  selectHome,
  getLocations,
  getWeathers,
  getCurrentLocation,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      ...initialState,
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('getLocations', () => {
  it('should select the location', () => {
    const location = {
      data: null,
      status: null,
    };
    const mockedState = {
      home: {
        location,
      },
    };
    expect(getLocations(mockedState)).toEqual(location);
  });
});

describe('getWeathers', () => {
  it('should select the location', () => {
    const weather = {
      data: null,
      status: null,
    };
    const mockedState = {
      home: {
        weather,
      },
    };
    expect(getWeathers(mockedState)).toEqual(weather);
  });
});

describe('getCurrentLocation', () => {
  it('should select the location', () => {
    const currentLocation = null;
    const mockedState = {
      home: {
        currentLocation,
      },
    };
    expect(getCurrentLocation(mockedState)).toEqual(currentLocation);
  });
});
