import { AppBar as MuiAppBar, Drawer as MuiDrawer } from '@mui/material';
import styled, { css } from 'styled-components';

interface ISidebar {
  open: boolean;
}

export const AppBar = styled(MuiAppBar)<ISidebar>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme }) =>
    theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

  ${({ open, theme }) =>
    open &&
    css`
      margin-left: 240px;
      width: calc(100% - 240px);
      transition: ${theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
    `}
`;

export const Drawer = styled(MuiDrawer)<ISidebar>`
  & .MuiDrawer-paper {
    position: relative;
    white-space: nowrap;
    transition: ${({ theme }) =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
    box-sizing: border-box;
  }

  ${({ open, theme }) =>
    !open &&
    css`
      overflow: 'hidden';
      transition: ${theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
      width: ${theme.spacing(7)};
      ${theme.breakpoints.up('sm')} {
        width: theme.spacing(9);
      }
    `}
`;
