/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.WeatherBoard';

export default defineMessages({
  predicting: {
    id: `${scope}.predicting`,
    defaultMessage: 'System is predicting weather...',
  },
  somethingWrong: {
    id: `${scope}.somethingWrong`,
    defaultMessage: 'Something went wrong, please choose another city',
  },
});
