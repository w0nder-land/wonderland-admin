import { gql, useMutation } from '@apollo/client';
import GNB from '@layout/GNB';
import { Box, Divider, List as MuiList, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from 'recoil/user';
import { ISilentRefresh } from 'types/auth';
import { getRefreshToken, setToken } from 'utils/token';

import List from './List';
import * as Styled from './Sidebar.styled';

interface ISidebar {
  children: React.ReactNode;
}

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

const Sidebar = ({ children }: ISidebar) => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const [silentRefresh] = useMutation<ISilentRefresh>(SILENT_REFRESH, {
    onCompleted: ({ adminLoginRefreshToken: { item } }) => {
      setUser({ accessToken: item.token });
      setToken('refreshToken', item.refreshToken);
    },
  });

  useEffect(() => {
    const refreshToken = getRefreshToken();
    const { accessToken } = user;

    if (!accessToken && !refreshToken) {
      router.push('/login');
    }

    if (!accessToken && refreshToken) {
      console.log('silent');
      silentRefresh({ variables: { refreshToken } });
      setTimeout(() => {
        console.log('실행');
      }, 1000 * 10);
    }
  }, []);

  return (
    <Box display="flex">
      <GNB />
      <Styled.Drawer variant="permanent">
        <MuiList
          sx={{ width: '300px', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <List />
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </MuiList>
      </Styled.Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Box m={4} mr={12}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
