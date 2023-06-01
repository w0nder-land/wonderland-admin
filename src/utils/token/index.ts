import { Cookies } from 'react-cookie';

type Token = 'accessToken' | 'refreshToken';

const cookies = new Cookies();

export const setToken = (key: Token, token: string) => {
  // TODO: expire date 물어보기
  cookies.set(key, token, {
    path: '/',
    // maxAge: 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 3,
    // TODO: https 연결 시에만 쿠키 전송, 개발 환경에서는 동작하지 않을 수 있음
    // secure: true,
    // TODO: false인 경우 해당 쿠키에 접근 가능
    // httpOnly: true,
  });
};

export const removeToken = (key: Token) => {
  cookies.remove(key, { path: '/' });
};

export const getRefreshToken = () => {
  return cookies.get('refreshToken');
};
