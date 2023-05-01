import { atom } from 'recoil';
import { IUserState } from 'types/auth';

export const userState = atom<IUserState>({
  key: 'user',
  default: {
    accessToken: null,
  },
});
