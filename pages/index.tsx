import React from 'react';

import { Wrapper, Toggle } from '@components';
import GlobalStyle from '@styles/globalStyles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Toggle />
    </Wrapper>
  );
};
export default Home;
