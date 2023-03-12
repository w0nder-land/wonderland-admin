import DefaultInput from '@common/Input/Default';
import DefaultSelect from '@common/Select/Default';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import AddUserDialog from 'components/User/AddUserDialog';
import { USER_SEARCH_TYPE } from 'constants/userSearchType';
import { useColorMode } from 'context/ColorModeContext';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { darkTheme, lightTheme } from 'styles/theme';

interface IUserSearchForm {
  searchType: string;
  searchWord: string;
}

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const AdministratorManagement = () => {
  const { control, handleSubmit } = useForm<IUserSearchForm>({
    defaultValues: {
      searchType: 'id',
      searchWord: '',
    },
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { mode } = useColorMode();
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = ({ searchType, searchWord }: IUserSearchForm) => {
    console.log(searchType, searchWord);
  };

  return (
    <>
      <AddUserDialog open={openDialog} handleClose={handleCloseDialog} />
      <Typography
        variant="h6"
        component="h2"
        mb={1}
        color="grey.300"
        fontWeight={600}
        fontSize="18px"
      >
        회원 관리
      </Typography>
      <Typography
        variant="h4"
        component="h1"
        fontSize="28px"
        fontWeight={700}
        mb={5}
      >
        관리자 회원 관리
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        alignItems="center"
        mb={4}
      >
        <FormControl sx={{ minWidth: 120 }} size="small">
          <DefaultSelect
            control={control}
            name="searchType"
            selectList={USER_SEARCH_TYPE}
            selectProps={{
              sx: {
                py: '5px',
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ mx: 1, width: '100%', maxWidth: 400 }}>
          <DefaultInput
            control={control}
            name="searchWord"
            textFieldProps={{
              id: 'searchWord',
              required: true,
              autoFocus: true,
              fullWidth: true,
              type: 'text',
              placeholder: '검색어',
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      disableTouchRipple
                      sx={{
                        p: 0,
                        '&:hover': { backgroundColor: 'transparent' },
                      }}
                    >
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  fontSize: '1rem',
                  height: 50,
                },
              },
            }}
          />
        </FormControl>
      </Box>
      <Typography fontWeight={600} mb={4}>
        총 65건
      </Typography>

      <Paper sx={{ width: '100%', overflow: 'hidden', mb: 4 }}>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      minWidth: column.minWidth,
                      color: mode === 'light' ? 'white' : 'black',
                      backgroundColor:
                        mode === 'light'
                          ? lightTheme.palette.info.main
                          : darkTheme.palette.primary.main,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Box textAlign="right">
        <Button
          variant="contained"
          size="large"
          startIcon={<AddIcon fontSize="medium" />}
          sx={{
            fontWeight: 600,
            lineHeight: '22px',
            padding: '10px 14px',
          }}
          onClick={handleOpenDialog}
        >
          관리자 추가
        </Button>
      </Box>
    </>
  );
};

export default AdministratorManagement;
