import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <A href="https://www.linkedin.com/in/tien-le-820b8684?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv7lA2obvS%2FGD5HMlaWt5mA%3D%3D">
                Tien Le
              </A>
            ),
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
