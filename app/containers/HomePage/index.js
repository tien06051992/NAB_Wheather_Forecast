/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import { StyledSelect } from './styles';
import Section from './Section';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

const key = 'home';
export type Props = {
  intl: IntlShape,
};

export function HomePage(props: Props) {
  const { intl } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
            isLoading
          />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default compose(
  injectIntl,
  memo,
)(HomePage);
