/*
 * WeatherBoard
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';
import map from 'lodash/fp/map';

import WeatherItem from 'components/WeatherItem';
import { STATUS } from 'utils/constants';
import useHooks from './hooks';
import { StyledWeatherBoard } from './styles';
import messages from './messages';
export type Props = {
  intl: IntlShape,
};

export function WeatherBoard(props: Props) {
  const { selectors } = useHooks();
  const { weathers } = selectors;
  const { data, status } = selectors;
  if (!status) return false;
  return (
    <StyledWeatherBoard>
      {status === STATUS.PENDING && (
        <FormattedMessage {...messages.predicting} />
      )}
      {status === STATUS.FAILED && (
        <FormattedMessage {...messages.somethingWrong} />
      )}
      {status === STATUS.SUCCESS &&
        map(item => <WeatherItem key={item.id} weather={item} />, data)}
      {/* <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem /> */}
    </StyledWeatherBoard>
  );
}

export default memo(WeatherBoard);
