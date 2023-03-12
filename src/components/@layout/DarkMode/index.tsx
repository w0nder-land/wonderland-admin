import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { useColorMode } from 'context/ColorModeContext';

import * as Styled from './DarkMode.styled';

const DarkMode = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Styled.Fab
      onClick={toggleColorMode}
      size="medium"
      color="primary"
      aria-label="add"
    >
      {mode === 'dark' ? (
        <LightModeIcon style={{ color: 'black' }} />
      ) : (
        <DarkModeIcon style={{ color: 'white' }} />
      )}
    </Styled.Fab>
  );
};

export default DarkMode;
