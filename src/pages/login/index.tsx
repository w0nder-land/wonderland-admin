import PrimaryLogo from '@common/Logo/Primary';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const handleSubmit = () => {};

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/assets/images/bg_login.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          component={Grid}
          item
          xs={false}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          display={{ xs: 'none', sm: 'flex' }}
          sx={{
            transform: 'translateY(-10%)',
          }}
          height="100%"
        >
          <Box
            component={Grid}
            item
            xs={false}
            width="100%"
            display={{ xs: 'none', sm: 'flex' }}
            justifyContent="center"
            px={2}
            mb={2}
          >
            <PrimaryLogo
              title="원더랜드 로고"
              width="500"
              height="140"
              color="black"
              style={{
                height: '100%',
              }}
            />
          </Box>
          <Typography
            component="h1"
            variant="h5"
            fontSize={{
              md: 20,
              sm: 15,
              xs: 10,
            }}
          >
            당신이 찾던 페스티벌, 원더랜드
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          my={35}
          mx={4}
        >
          <Avatar sx={{ m: 1, bgcolor: 'main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" mt={1}>
            로그인
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                p: 1.5,
                fontSize: '17px',
                fontWeight: 'bold',
              }}
              size="large"
            >
              로그인
            </Button>
            <Typography align="center" color="grey.400" fontSize="12px">
              Copyright © 원더랜드 All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
