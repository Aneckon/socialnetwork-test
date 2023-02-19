import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import i18next from 'i18next';

import { Header, Home, Login, News, Profile } from './components';

export const App = () => {
  React.useEffect(() => {
    i18next.changeLanguage(i18next.language === 'en' ? 'en' : 'uk');
  }, [i18next]);

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  );
};
