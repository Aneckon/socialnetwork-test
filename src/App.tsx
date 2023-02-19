import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import i18next from 'i18next';

import { Header, Home, Login, News, Profile } from './components';

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    i18next.changeLanguage(i18next.language === 'en' ? 'en' : 'uk');
    if (location.pathname === '/') {
      navigate(`${i18next.language}`);
    }
  }, [i18next]);

  return (
    <>
      <Header />
      <Routes>
        <Route path={`/:lan/`} element={<Home />} />
        <Route path={`/:lan/news`} element={<News />} />
        <Route path={`/:lan/profile`} element={<Profile />} />
        <Route path={`/:lan/login`} element={<Login />} />
      </Routes>
    </>
  );
};
