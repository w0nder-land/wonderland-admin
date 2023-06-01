import { gql, useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { ISilentRefresh } from 'types/auth';

const SILENT_REFRESH = gql`
  mutation AdminLoginRefreshToken($refreshToken: String!) {
    adminLoginRefreshToken(refreshToken: $refreshToken) {
      item {
        token
        refreshToken
        tokenExpiredAt
        refreshTokenExpiredAt
      }
    }
  }
`;

const useAuth = () => {
  const [cookies, setCookie] = useCookies(['refreshToken']);

  const [silentRefresh] = useMutation<ISilentRefresh>(SILENT_REFRESH, {
    onCompleted: ({ adminLoginRefreshToken: { item } }) => {},
  });

  if (accessToken === null) {
    silentRefresh({ variables: { cookies } });
  }
};

export default useAuth;
