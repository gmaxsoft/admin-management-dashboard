import { ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const App = (): ReactElement => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('app.title');
  }, [t]);
  return <Outlet />;
};

export default App;
