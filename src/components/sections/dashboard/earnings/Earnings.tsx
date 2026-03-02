import { Box, Paper, Typography } from '@mui/material';
import EarningsChart from './EarningsChart';
import { ReactElement, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { currencyFormat } from 'helpers/format-functions';

const Earnings = (): ReactElement => {
  const { t } = useTranslation();
  const chartRef = useRef<EChartsReactCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const echartsInstance = chartRef.current.getEchartsInstance();
        echartsInstance.resize({ width: 'auto', height: 'auto' });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={2.5}>
        {t('dashboard.earnings')}
      </Typography>
      <Typography variant="body1" color="text.primary" mb={4.5}>
        {t('dashboard.totalExpense')}
      </Typography>
      <Typography
        variant="h1"
        color="primary.main"
        mb={4.5}
        fontSize={{ xs: 'h2.fontSize', sm: 'h1.fontSize' }}
      >
        {currencyFormat(6078.76, { useGrouping: false })}
      </Typography>
      <Typography variant="body1" color="text.primary" mb={15}>
        {t('dashboard.profitMessage')}
      </Typography>
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        <EarningsChart
          chartRef={chartRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            maxHeight: 152,
          }}
        />
        <Typography
          variant="h1"
          color="common.white"
          textAlign="center"
          mx="auto"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
        >
          80%
        </Typography>
      </Box>
    </Paper>
  );
};

export default Earnings;
