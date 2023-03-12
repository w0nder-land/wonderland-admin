import GNB from '@layout/GNB';
import { Box, Divider, List as MuiList, Toolbar } from '@mui/material';
import React from 'react';

import List from './List';
import * as Styled from './Sidebar.styled';

interface ISidebar {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebar) => {
  return (
    <Box display="flex">
      <GNB />
      <Styled.Drawer variant="permanent">
        <MuiList
          sx={{ width: '350px', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <List />
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </MuiList>
      </Styled.Drawer>
      <Box
        component="main"
        sx={{
          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'light'
          //     ? theme.palette.grey[100]
          //     : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Box m={4}>{children}</Box>
        {/* <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            
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
            
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                dddd
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
