import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { rootPaths } from 'routes/paths';
import Image from 'components/base/Image';
import logo from '/logo.png';

const Login = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = () => {
    navigate(rootPaths.homeRoot);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link href={rootPaths.homeRoot}>
          <Image src={logo} alt={t('common.logo')} height={60} />
        </Link>
      </Box>
      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
        }}
      >
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            {t('auth.logIn')}
          </Typography>
          <Typography variant="h6" fontWeight={500} textAlign="center" color="text.primary">
            {t('auth.dontHaveAccount')}{' '}
            <Link href="/authentication/sign-up" underline="none">
              {t('auth.signUp')}
            </Link>
          </Typography>
          <TextField
            variant="filled"
            label={t('auth.email')}
            type="email"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label={t('auth.password')}
            type={showPassword ? 'text' : 'password'}
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={t('auth.togglePasswordVisibility')}
                    onClick={handleClickShowPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ ml: 1, width: 'fit-content' }}>
            <FormControlLabel
              control={<Checkbox />}
              label={t('auth.keepSignedIn')}
              sx={{
                color: 'text.secondary',
              }}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
            }}
          >
            {t('auth.logIn')}
          </Button>
          <Divider />
          <Typography textAlign="center" color="text.secondary" variant="body1">
            {t('auth.orSignInUsing')}
          </Typography>
          <Stack gap={1.5} direction="row" justifyContent="space-between">
            <Button
              startIcon={<IconifyIcon icon="flat-color-icons:google" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              {t('auth.google')}
            </Button>
            <Button
              startIcon={<IconifyIcon icon="logos:facebook" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              {t('auth.facebook')}
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default Login;
