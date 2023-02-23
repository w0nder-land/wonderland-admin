import GNB from '@layout/GNB';
import { Copyright } from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  Paper,
  Toolbar,
} from '@mui/material';

import { mainListItems, secondaryListItems } from './ListItem';
import * as Styled from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <GNB />
      <Styled.Drawer variant="permanent">
        <List
          sx={{ width: '350px', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {mainListItems()}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Styled.Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                ddd
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                dddddd
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                dddd
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default Sidebar;
