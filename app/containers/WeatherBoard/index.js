/*
 * WeatherBoard
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import map from 'lodash/fp/map';

import { useInjectSaga } from 'utils/injectSaga';
import WeatherItem from 'components/WeatherItem';
import { STATUS } from 'utils/constants';
import useHooks, { useInit } from './hooks';
import { StyledWeatherBoard } from './styles';
import saga from './saga';
import messages from './messages';

export function WeatherBoard() {
  useInjectSaga({ key: 'WEATHER_BOARD', saga });
  useInit();
  const { selectors } = useHooks();
  const { weathers } = selectors;
  const { data, status } = weathers;
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
    </StyledWeatherBoard>
  );
}

export default memo(WeatherBoard);
