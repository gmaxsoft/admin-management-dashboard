import { ReactElement } from 'react';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';
import { productTableRows } from 'data/product-data';
import ProductItemRow from './ProductItemRow';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

const TopProducts = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={6}>
        {t('dashboard.topProducts')}
      </Typography>
      <TableContainer component={SimpleBar}>
        <Table sx={{ minWidth: 440 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">{t('dashboard.hash')}</TableCell>
              <TableCell align="left">{t('dashboard.name')}</TableCell>
              <TableCell align="left">{t('dashboard.popularity')}</TableCell>
              <TableCell align="center">{t('dashboard.sales')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productTableRows.map((product) => (
              <ProductItemRow key={product.id} productItem={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopProducts;
