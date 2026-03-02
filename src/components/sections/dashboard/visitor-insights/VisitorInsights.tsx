import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { visitorInsightsData } from 'data/chart-data/visitor-insights';

const VisitorInsights = (): ReactElement => {
  const { t } = useTranslation();
  const chartRef = useRef<EChartsReactCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        <Typography variant="h4" color="common.white">
          {t('dashboard.visitorInsights')}
        </Typography>
        <Button
          variant="text"
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 5,
                height: 5,
                bgcolor: 'warning.main',
                borderRadius: 400,
              }}
            />
          }
          sx={{
            justifyContent: 'flex-start',
            px: 4,
            py: 2,
            borderRadius: 1,
            alignItems: 'center',
            fontSize: 'body2.fontSize',
            gap: 1,
            color: 'text.disabled',
            bgcolor: 'background.default',
            cursor: 'default',
            '&:hover': {
              bgcolor: 'background.default',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
        >
          {t('dashboard.newVisitors')}
        </Button>
      </Stack>
      <VisitorInsightsChart
        chartRef={chartRef}
        data={visitorInsightsData}
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;
