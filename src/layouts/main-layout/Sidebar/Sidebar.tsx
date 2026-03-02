import { ReactElement } from 'react';
import { Link, List, Toolbar } from '@mui/material';
import navItems from 'data/nav-items';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import Image from 'components/base/Image';
import logo from '/logo.png';
import { useTranslation } from 'react-i18next';
import { rootPaths } from 'routes/paths';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <Toolbar
        sx={{
          position: 'fixed',
          height: 98,
          zIndex: 1,
          bgcolor: 'background.default',
          p: 0,
          justifyContent: 'center',
          width: open ? drawerOpenWidth - 1 : drawerCloseWidth - 1,
        }}
      >
        <Link
          href={rootPaths.homeRoot}
          sx={{
            mt: 3,
          }}
        >
          <Image src={logo} alt={t('common.logo')} height={40} />
        </Link>
      </Toolbar>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <List
          component="nav"
          sx={{
            mt: 24.5,
            py: 2.5,
            height: 'auto',
            justifyContent: 'space-between',
          }}
        >
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} navItem={navItem} open={open} />
          ))}
        </List>
      </SimpleBar>
    </>
  );
};

export default Sidebar;
