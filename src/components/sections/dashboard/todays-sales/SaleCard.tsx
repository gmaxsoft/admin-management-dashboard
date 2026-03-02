import { ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';
import { SaleItem } from 'data/sales-data';
import { useTranslation } from 'react-i18next';

const SaleCard = ({ saleItem }: { saleItem: SaleItem }): ReactElement => {
  const { t } = useTranslation();
  return (
    <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
      <Image src={saleItem.icon} alt={t(saleItem.subtitleKey)} width={26} height={26} />
      <Box>
        <Typography variant="h4" color="common.white" mb={4}>
          {saleItem.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {t(saleItem.subtitleKey)}
        </Typography>
        <Typography variant="body2" color={saleItem.color} lineHeight={1.25}>
          {t('dashboard.fromYesterday', { count: saleItem.increment })}
        </Typography>
      </Box>
    </Stack>
  );
};

export default SaleCard;
