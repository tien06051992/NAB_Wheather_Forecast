/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

import WeatherBoard from 'containers/WeatherBoard';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import { STATUS } from 'utils/constants';
import {
  StyledSelect,
  StyledSelectWrapper,
  StyledErrorMessage,
  StyledSection,
} from './styles';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import useHooks from './hooks';
const key = 'home';
export type Props = {
  intl: IntlShape,
};

export function HomePage(props: Props) {
  const { intl } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { selectors, handlers } = useHooks();
  const { locations, optionLocations } = selectors;
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="NAB Weather Forecast" />
      </Helmet>
      <div>
        <StyledSection>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <StyledSelectWrapper>
            <StyledSelect
              placeholder={intl.formatMessage(messages.trymePlaceholderSearch)}
              isLoading={locations.status === STATUS.PENDING}
              onInputChange={handlers.onSearchChangeHandler}
              onChange={handlers.onLocationChangeHandler}
              options={optionLocations}
            />
            {locations.status === STATUS.FAILED && (
              <StyledErrorMessage>
                <FormattedMessage {...messages.someThingWrong} />
              </StyledErrorMessage>
            )}
          </StyledSelectWrapper>

          <WeatherBoard />
        </StyledSection>
      </div>
    </article>
  );
}

export default compose(
  injectIntl,
  memo,
)(HomePage);
