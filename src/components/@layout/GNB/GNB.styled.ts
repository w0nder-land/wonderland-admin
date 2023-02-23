import { AppBar } from '@mui/material';
import styled from 'styled-components';
import { ModeType } from 'types/common';

interface IStyledGNB {
  mode: ModeType;
}

export const GNB = styled(AppBar)<IStyledGNB>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
