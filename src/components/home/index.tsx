import { FC } from 'react';
import { BottomTab } from '@components/common/bottomTab';
import { Header } from '@components/common/header';
import styled from 'styled-components';

const Home: FC = () => {
  return (
    <Wrapper>
      <Header />
      <MainSection></MainSection>
      <BottomTab />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;
