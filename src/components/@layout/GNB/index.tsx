import PrimaryLogo from '@common/Logo/Primary';
import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Typography } from '@mui/material';
import { useColorMode } from 'context/ColorModeContext';
import Link from 'next/link';
import { lightTheme } from 'styles/theme';

const GNB = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '16px 20px',
      }}
    >
      <div>
        <Typography variant="h1" sx={{ lineHeight: 0 }}>
          <Link href="/" aria-label="원더랜드">
            <PrimaryLogo
              title="원더랜드 로고"
              width="160"
              height="36"
              color={
                mode === 'dark'
                  ? lightTheme.palette.common.black
                  : lightTheme.palette.common.white
              }
            />
          </Link>
        </Typography>
      </div>

      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'dark' ? (
          <DarkMode />
        ) : (
          <LightMode style={{ color: lightTheme.palette.common.white }} />
        )}
      </IconButton>
    </AppBar>
  );
};

export default GNB;
