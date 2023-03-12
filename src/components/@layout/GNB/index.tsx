import PrimaryLogo from '@common/Logo/Primary';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useColorMode } from 'context/ColorModeContext';
import Link from 'next/link';
import React, { useState } from 'react';

import * as Styled from './GNB.styled';

const GNB = () => {
  const { mode } = useColorMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Styled.GNB mode={mode}>
      <Typography variant="h1" sx={{ lineHeight: 0 }}>
        <Link href="/" aria-label="원더랜드">
          <PrimaryLogo
            title="원더랜드 로고"
            width="160"
            height="36"
            color={mode === 'dark' ? 'black' : 'white'}
          />
        </Link>
      </Typography>

      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          sx={{
            p: 0,
          }}
        >
          <AccountCircle
            fontSize="medium"
            sx={{
              fontSize: '27px',
            }}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            top: '32px',
          }}
        >
          <MenuItem onClick={handleClose}>로그아웃</MenuItem>
        </Menu>
      </div>
    </Styled.GNB>
  );
};

export default GNB;
