/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.WeatherBoard';

export default defineMessages({
  minTemp: {
    id: `${scope}.minTemp`,
    defaultMessage: 'Min:',
  },
  maxTemp: {
    id: `${scope}.minTemp`,
    defaultMessage: 'Max:',
  },
});
