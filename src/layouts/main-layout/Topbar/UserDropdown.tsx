import { Menu, Avatar, Button, Tooltip, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState, MouseEvent, useCallback, ReactElement } from 'react';
import userMenuItems from 'data/usermenu-items';
import { useTranslation } from 'react-i18next';

const UserDropdown = (): ReactElement => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleUserClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleUserClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        id="account-dropdown-menu"
        aria-controls={menuOpen ? 'account-dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleUserClick}
        disableRipple
        sx={{
          borderRadius: 2,
          gap: 3.75,
          px: { xs: 0, sm: 0.625 },
          py: 0.625,
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
      >
        <Tooltip title={t('app.title')} arrow placement="bottom">
          <Avatar sx={{ width: 44, height: 44, bgcolor: 'primary.main' }}>
            <IconifyIcon icon="mingcute:user-2-fill" width={24} height={24} color="common.white" />
          </Avatar>
        </Tooltip>
        <IconifyIcon
          color="common.white"
          icon="mingcute:down-fill"
          width={22.5}
          height={22.5}
          sx={(theme) => ({
            transform: menuOpen ? `rotate(180deg)` : `rotate(0deg)`,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
          })}
        />
      </Button>
      <Menu
        id="account-dropdown-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleUserClose}
        MenuListProps={{
          'aria-labelledby': 'account-dropdown-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userMenuItems.map((userMenuItem) => (
          <MenuItem key={userMenuItem.id} onClick={handleUserClose}>
            <ListItemIcon
              sx={{
                minWidth: `0 !important`,
                color: userMenuItem.color,
                width: 14,
                height: 10,
                mb: 1.5,
              }}
            >
              <IconifyIcon icon={userMenuItem.icon} color={userMenuItem.color} />
            </ListItemIcon>
            <ListItemText
              sx={(theme) => ({
                color: userMenuItem.color,
                '& .MuiListItemText-primary': {
                  fontSize: theme.typography.subtitle2.fontSize,
                  fontFamily: theme.typography.subtitle2.fontFamily,
                  fontWeight: theme.typography.subtitle2.fontWeight,
                },
              })}
            >
              {t(userMenuItem.titleKey)}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserDropdown;
