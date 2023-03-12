import DefaultInput from '@common/Input/Default';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useForm } from 'react-hook-form';

interface IAddUserDialog {
  open: boolean;
  handleClose: () => void;
}

interface IAddUserForm {
  id: string;
  password: string;
  name: string;
  email: string;
  regDate: Date;
  isValid: boolean;
}

const AddUserDialog = ({ open, handleClose }: IAddUserDialog) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<IAddUserForm>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
      name: '',
      email: '',
      regDate: new Date(),
      // isValid: true,
    },
  });

  const onSubmit = (data: IAddUserForm) => {
    console.log(data);
    handleClose();
  };

  const handleClosedDialog = () => {
    handleClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle fontWeight="bold" mt={2}>
          관리자 추가
        </DialogTitle>
        <DialogContent>
          <DefaultInput
            name="id"
            control={control}
            rules={{
              required: true,
            }}
            textFieldProps={{
              id: 'id',
              label: '아이디',
              required: true,
              autoFocus: true,
              fullWidth: true,
              autoComplete: 'id',
              margin: 'normal',
            }}
          />

          <DefaultInput
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            textFieldProps={{
              id: 'password',
              type: 'password',
              required: true,
              label: '비밀번호',
              fullWidth: true,
              margin: 'normal',
            }}
          />

          <DefaultInput
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            textFieldProps={{
              id: 'name',
              margin: 'normal',
              required: true,
              fullWidth: true,
              autoFocus: true,
              autoComplete: 'name',
              label: '이름',
            }}
          />

          <DefaultInput
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            textFieldProps={{
              id: 'email',
              margin: 'normal',
              required: true,
              fullWidth: true,
              autoFocus: true,
              label: '이메일',
              autoComplete: 'email',
              type: 'email',
            }}
          />

          <DefaultInput
            name="regDate"
            control={control}
            rules={{
              required: true,
            }}
            textFieldProps={{
              id: 'regDate',
              margin: 'normal',
              required: true,
              fullWidth: true,
              label: '등록일',
              disabled: true,
            }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: '24%',
            mb: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClosedDialog}
            sx={{
              width: '100%',
            }}
            size="large"
          >
            취소
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
            }}
            disabled={!isValid}
            size="large"
          >
            추가
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddUserDialog;
