import { ISelectItem } from '@common/Select/Default';
import { v4 as uuidv4 } from 'uuid';

export const USER_SEARCH_TYPE: ISelectItem[] = [
  {
    id: uuidv4(),
    label: 'ID',
    value: 'id',
    selected: true,
  },
  {
    id: uuidv4(),
    label: '이름',
    value: 'name',
    selected: false,
  },
  {
    id: uuidv4(),
    label: '이메일',
    value: 'email',
    selected: false,
  },
];
