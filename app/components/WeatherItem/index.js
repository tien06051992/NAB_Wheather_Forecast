/*
 * WeatherItem
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { compose } from 'redux';
import get from 'lodash/fp/get';

import { getFullTextDay } from 'utils/date';
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
  const { intl, weather } = props;
  return (
    <StyledWeatherItem>
      <StyledDay>{getFullTextDay(get('applicableDate', weather))}</StyledDay>
      <StyledMinTemp>
        <StyledLabel>{intl.formatMessage(messages.minTemp)}</StyledLabel>
        {Math.round(get('minTemp', weather))}
      </StyledMinTemp>
      <StyledMaxTemp>
        <StyledLabel>{intl.formatMessage(messages.maxTemp)}</StyledLabel>
        {Math.round(get('maxTemp', weather))}
      </StyledMaxTemp>
    </StyledWeatherItem>
  );
}

export default compose(
  injectIntl,
  memo,
)(WeatherItem);
