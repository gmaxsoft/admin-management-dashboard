interface UserMenuItem {
  id: number;
  titleKey: string;
  icon: string;
  color?: string;
}

const userMenuItems: UserMenuItem[] = [
  {
    id: 1,
    titleKey: 'userMenu.viewProfile',
    icon: 'mingcute:user-2-fill',
    color: 'text.primary',
  },
  {
    id: 2,
    titleKey: 'userMenu.accountSettings',
    icon: 'material-symbols:settings-account-box-rounded',
    color: 'text.primary',
  },
  {
    id: 3,
    titleKey: 'userMenu.notifications',
    icon: 'ion:notifications',
    color: 'text.primary',
  },
  {
    id: 4,
    titleKey: 'userMenu.switchAccount',
    icon: 'material-symbols:switch-account',
    color: 'text.primary',
  },
  {
    id: 5,
    titleKey: 'userMenu.helpCenter',
    icon: 'material-symbols:live-help',
    color: 'text.primary',
  },
  {
    id: 6,
    titleKey: 'userMenu.logout',
    icon: 'material-symbols:logout',
    color: 'error.main',
  },
];

export default userMenuItems;
