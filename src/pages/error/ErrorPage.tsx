import { ReactElement } from 'react';
import { Link, Stack, Button, Typography } from '@mui/material';
import Image from 'components/base/Image';
import errorSvg from 'assets/images/error/error.svg';
import { rootPaths } from 'routes/paths';
import { useTranslation } from 'react-i18next';

const ErrorPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Stack
      minHeight="100vh"
      width="fit-content"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      gap={10}
      py={12}
    >
      <Typography variant="h1" color="text.secondary">
        {t('error.pageNotFound')}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={400}
        color="text.primary"
        maxWidth={600}
        textAlign="center"
      >
        {t('error.pageNotFoundMessage')}
      </Typography>
      <Image
        alt={t('common.notFoundImageAlt')}
        src={errorSvg}
        sx={{
          mx: 'auto',
          height: 260,
          my: { xs: 5, sm: 10 },
          width: { xs: 1, sm: 340 },
        }}
      />
      <Button href={rootPaths.homeRoot} size="large" variant="contained" component={Link}>
        {t('error.goToHome')}
      </Button>
    </Stack>
  );
};

export default ErrorPage;
