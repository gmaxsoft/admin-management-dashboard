import { useMemo, useEffect, ReactElement } from 'react';
import { Stack, Avatar, Tooltip, Typography, CircularProgress } from '@mui/material';
import {
  GridApi,
  DataGrid,
  GridSlots,
  GridColDef,
  useGridApiRef,
  GridActionsCellItem,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from '@mui/x-data-grid';
import { rows } from 'data/customer-data';
import { stringAvatar } from 'helpers/string-avatar';
import IconifyIcon from 'components/base/IconifyIcon';
import { currencyFormat } from 'helpers/format-functions';
import CustomPagination from 'components/common/CustomPagination';
import CustomNoResultsOverlay from 'components/common/CustomNoResultsOverlay';
import { useTranslation } from 'react-i18next';

interface CustomerRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  'billing-address': string;
  'total-spent': number;
}

const getColumns = (t: (key: string) => string): GridColDef<CustomerRow>[] => [
  {
    field: 'id',
    headerName: t('dashboard.id'),
    resizable: false,
    minWidth: 60,
  },
  {
    field: 'name',
    headerName: t('dashboard.name'),
    valueGetter: (value: unknown) => value,
    renderCell: (
      params: GridRenderCellParams<CustomerRow, CustomerRow, unknown, GridTreeNodeWithRender>,
    ) => {
      return (
        <Stack direction="row" gap={1} alignItems="center">
          <Tooltip title={params.row.name} placement="top" arrow>
            <Avatar {...stringAvatar(params.row.name)} />
          </Tooltip>
          <Typography variant="body2">{params.row.name}</Typography>
        </Stack>
      );
    },
    resizable: false,
    flex: 1,
    minWidth: 155,
  },
  {
    field: 'email',
    headerName: t('auth.email'),
    resizable: false,
    flex: 0.5,
    minWidth: 145,
  },
  {
    field: 'phone',
    headerName: t('dashboard.phone'),
    resizable: false,
    flex: 1,
    minWidth: 115,
  },
  {
    field: 'billing-address',
    headerName: t('dashboard.billingAddress'),
    sortable: false,
    resizable: false,
    flex: 1,
    minWidth: 250,
  },
  {
    field: 'total-spent',
    headerName: t('dashboard.totalSpent'),
    resizable: false,
    sortable: false,
    align: 'right',
    headerAlign: 'right',
    flex: 1,
    minWidth: 80,
    valueFormatter: (value) => {
      return currencyFormat(value, { minimumFractionDigits: 2 });
    },
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: t('dashboard.actions'),
    resizable: false,
    flex: 1,
    minWidth: 80,
    getActions: () => {
      return [
        <Tooltip title={t('common.edit')}>
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="fluent:edit-32-filled"
                color="text.secondary"
                sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
              />
            }
            label={t('common.edit')}
            size="small"
          />
        </Tooltip>,
        <Tooltip title={t('common.delete')}>
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="mingcute:delete-3-fill"
                color="error.main"
                sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
              />
            }
            label={t('common.delete')}
            size="small"
          />
        </Tooltip>,
      ];
    },
  },
];

const CustomerTable = ({ searchText }: { searchText: string }): ReactElement => {
  const { t } = useTranslation();
  const apiRef = useGridApiRef<GridApi>();

  const visibleColumns = useMemo(
    () => getColumns(t).filter((column) => column.field !== 'id'),
    [t],
  );

  useEffect(() => {
    apiRef.current.setQuickFilterValues(
      searchText.split(/\b\W+\b/).filter((word: string) => word !== ''),
    );
  }, [searchText]);

  useEffect(() => {
    const handleResize = () => {
      if (apiRef.current) {
        apiRef.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [apiRef]);

  return (
    <>
      <DataGrid
        apiRef={apiRef}
        density="standard"
        columns={visibleColumns}
        autoHeight={false}
        rowHeight={56}
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        rows={rows}
        onResize={() => {
          apiRef.current.autosizeColumns({
            includeOutliers: true,
            expand: true,
          });
        }}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 4 } },
        }}
        slots={{
          loadingOverlay: CircularProgress as GridSlots['loadingOverlay'],
          pagination: CustomPagination as GridSlots['pagination'],
          noResultsOverlay: CustomNoResultsOverlay as GridSlots['noResultsOverlay'],
        }}
        slotProps={{
          pagination: { labelRowsPerPage: rows.length },
        }}
        sx={{
          height: 1,
          width: 1,
          tableLayout: 'fixed',
          scrollbarWidth: 'thin',
        }}
      />
    </>
  );
};

export default CustomerTable;
