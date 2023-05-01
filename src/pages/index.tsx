import type { NextPage } from 'next';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user';

const Home: NextPage = () => {
  const value = useRecoilValue(userState);
  const [cookies, setCookie] = useCookies(['refreshToken']);

  console.log(value);
  console.log(cookies);

  return <>ㅇㅇㅇㅇ</>;
};

export default Home;
