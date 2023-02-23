import DefaultInput from '@common/Input/Default';
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
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';

interface IILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit } = useForm<IILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: IILoginForm) => {
    console.log(data);
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
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
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          my={20}
          mx={4}
        >
          <Avatar sx={{ m: 1, bgcolor: 'main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5" mt={1}>
            로그인
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <DefaultInput
              name="email"
              control={control}
              textFieldProps={{
                id: 'email',
                margin: 'normal',
                required: true,
                fullWidth: true,
                autoFocus: true,
                label: 'Email',
                autoComplete: 'email',
                type: 'email',
              }}
            />

            <DefaultInput
              name="password"
              control={control}
              textFieldProps={{
                id: 'password',
                margin: 'normal',
                required: true,
                fullWidth: true,
                label: 'Password',
                type: 'password',
                autoComplete: 'current-password',
              }}
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
