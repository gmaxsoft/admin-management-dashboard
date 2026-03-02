import totalSales from 'assets/images/todays-sales/total-sales.png';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import productSold from 'assets/images/todays-sales/product-sold.png';
import newCustomer from 'assets/images/todays-sales/new-customer.png';

export interface SaleItem {
  id?: number;
  icon: string;
  title: string;
  subtitleKey: string;
  increment: number;
  color: string;
}

const salesData: SaleItem[] = [
  {
    id: 1,
    icon: totalSales,
    title: '$5k',
    subtitleKey: 'dashboard.totalSales',
    increment: 10,
    color: 'warning.main',
  },
  {
    id: 2,
    icon: totalOrder,
    title: '500',
    subtitleKey: 'dashboard.totalOrder',
    increment: 8,
    color: 'primary.main',
  },
  {
    id: 3,
    icon: productSold,
    title: '9',
    subtitleKey: 'dashboard.productSold',
    increment: 2,
    color: 'secondary.main',
  },
  {
    id: 4,
    icon: newCustomer,
    title: '12',
    subtitleKey: 'dashboard.newCustomer',
    increment: 3,
    color: 'info.main',
  },
];

export default salesData;
