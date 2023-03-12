import { MenuItem, Select, SelectProps } from '@mui/material';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

export interface ISelectItem {
  id: string;
  label: string;
  value: string | number;
  selected: boolean;
}

interface IDefaultSelect {
  selectProps?: SelectProps;
  selectList: ISelectItem[];
}

const DefaultSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  selectProps,
  selectList,
  ...props
}: IDefaultSelect & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <Select
      {...selectProps}
      {...field}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      error={!!error}
    >
      {selectList.map(({ id, label, value, selected }) => (
        <MenuItem key={id} value={value} selected={selected}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DefaultSelect;
