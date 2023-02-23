import PrimaryLogo from '@common/Logo/Primary';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useColorMode } from 'context/ColorModeContext';
import Link from 'next/link';

import * as Styled from './GNB.styled';

const GNB = () => {
  const { mode, toggleColorMode } = useColorMode();

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

      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'dark' ? (
          <LightMode style={{ color: 'black' }} />
        ) : (
          <DarkMode style={{ color: 'white' }} />
        )}
      </IconButton>
    </Styled.GNB>
  );
};

export default GNB;
