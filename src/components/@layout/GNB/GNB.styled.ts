import styled from '@emotion/styled';
import { AppBar, Theme } from '@mui/material';
import { ModeType } from 'types/common';

interface IStyledGNB {
  mode: ModeType;
  theme: Theme;
}

export const GNB = styled(AppBar)<IStyledGNB>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
