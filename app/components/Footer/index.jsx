import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  margin-top: 1rem;
  background-color: #8839D1;
  color: #fff;
`;

const A = styled.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <A href="https://h.cash/">The HCash Foundation</A>,
            }}
          />
        </section>
      </div>
    </Wrapper>
  );
}

export default Footer;
