/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Weather Forecast',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: 'Location',
  },
  trymePlaceholderSearch: {
    id: `${scope}.tryme.placeholderSearch`,
    defaultMessage: 'Ex: Ho Chi Minh',
  },
});
