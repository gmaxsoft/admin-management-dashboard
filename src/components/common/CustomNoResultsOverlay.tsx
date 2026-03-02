import { ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';
import noResultsSvg from 'assets/images/error/no-results.svg';
import { useTranslation } from 'react-i18next';

const CustomNoResultsOverlay = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Stack height={1} px={6} justifyContent="center" alignItems="center" flexGrow={1}>
      <Image
        alt={t('common.noResultsImageAlt')}
        src={noResultsSvg}
        width={1}
        sx={{
          maxWidth: 'fit-content',
        }}
      />
      <Typography variant="h6" color="text.primary">
        {t('common.noResults')}
      </Typography>
    </Stack>
  );
};

export default CustomNoResultsOverlay;
