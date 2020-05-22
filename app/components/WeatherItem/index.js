/*
 * WeatherItem
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { compose } from 'redux';

import type Weather from 'models/Weather';
import {
  StyledWeatherItem,
  StyledDay,
  StyledLabel,
  StyledMinTemp,
  StyledMaxTemp,
} from './styles';
import messages from './messages';

export type Props = {
  weather: Weather,
  intl: intlShape,
};

export function WeatherItem(props: Props) {
  const { intl } = props;
  return (
    <StyledWeatherItem>
      <StyledDay>Monday</StyledDay>
      <StyledMinTemp>
        <StyledLabel>{intl.formatMessage(messages.minTemp)}</StyledLabel>20
      </StyledMinTemp>
      <StyledMaxTemp>
        <StyledLabel>{intl.formatMessage(messages.maxTemp)}</StyledLabel>
        30
      </StyledMaxTemp>
    </StyledWeatherItem>
  );
}

export default compose(
  injectIntl,
  memo,
)(WeatherItem);
