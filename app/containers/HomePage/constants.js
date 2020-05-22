/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'Home/CHANGE_USERNAME';
export const SEARCH_LOCATION = 'Home/SEARCH_LOCATION';
export const SEARCH_LOCATION_SUCCESS = 'Home/SEARCH_LOCATION_SUCCESS';
export const SEARCH_LOCATION_FAILED = 'Home/SEARCH_LOCATION_FAILED';

export const SEARCH_WEATHER = 'Home/SEARCH_WEATHER';
export const SEARCH_WEATHER_SUCCESS = 'Home/SEARCH_WEATHER_SUCCESS';
export const SEARCH_WEATHER_FAILED = 'Home/SEARCH_WEATHER_FAILED';

export const CHANGE_CURRENT_LOCATION = 'Home/CHANGE_CURRENT_LOCATION';
