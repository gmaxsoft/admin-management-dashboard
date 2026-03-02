import paths from 'routes/paths';

export interface NavItem {
  id: number;
  path: string;
  titleKey: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: paths.home,
    titleKey: 'nav.dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 2,
    path: paths.login,
    titleKey: 'nav.login',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 3,
    path: paths.signup,
    titleKey: 'nav.signUp',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
