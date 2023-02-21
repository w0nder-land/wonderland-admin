import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const Home: NextPage = () => {
  return <Container>안녕하세요 원더랜드 어드민입니다</Container>;
};

export default Home;
