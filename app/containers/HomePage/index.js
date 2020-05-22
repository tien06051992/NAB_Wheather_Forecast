/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import { STATUS } from 'utils/constants';
import { StyledSelect } from './styles';
import Section from './Section';
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
  const { locations } = selectors;
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="NAB Weather Forecast" />
      </Helmet>
      <div>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <StyledSelect
            placeholder={intl.formatMessage(messages.trymePlaceholderSearch)}
            isLoading={locations.status === STATUS.PENDING}
            onInputChange={handlers.onSearchChangeHandler}
          />
        </Section>
      </div>
    </article>
  );
}

export default compose(
  injectIntl,
  memo,
)(HomePage);
