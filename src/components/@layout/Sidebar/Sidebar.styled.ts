import { AppBar as MuiAppBar, Drawer as MuiDrawer } from '@mui/material';
import styled from 'styled-components';

export const AppBar = styled(MuiAppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;

export const Drawer = styled(MuiDrawer)`
  margin-top: 68px;

  & .MuiDrawer-paper {
    position: relative;
    box-sizing: border-box;
  }
`;
