import { LinearProgressProps } from '@mui/material';

export interface ProductItem {
  id?: string;
  nameKey: string;
  color: LinearProgressProps['color'];
  sales: number;
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    nameKey: 'products.homeDecoreRange',
    color: 'warning',
    sales: 78,
  },
  {
    id: '02',
    nameKey: 'products.disneyPrincessDress',
    color: 'primary',
    sales: 62,
  },
  {
    id: '03',
    nameKey: 'products.bathroomEssentials',
    color: 'info',
    sales: 51,
  },
  {
    id: '04',
    nameKey: 'products.appleSmartwatch',
    color: 'secondary',
    sales: 29,
  },
];
