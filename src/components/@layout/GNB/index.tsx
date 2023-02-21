import PrimaryLogo from '@common/Logo/Primary';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { useColorMode } from 'context/ColorModeContext';
import Link from 'next/link';
import { lightTheme } from 'styles/theme';

const GNB = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <header>
      <h1>
        <Link href="/" aria-label="원더랜드">
          <PrimaryLogo
            title="원더랜드 로고"
            width="678"
            height="153"
            color={
              mode === 'dark'
                ? lightTheme.palette.common.white
                : lightTheme.palette.common.black
            }
          />
        </Link>
      </h1>

      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </header>
  );
};

export default GNB;
