import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <h1>{t('Home')}</h1>

      <p>{t('Lorem')}</p>
      <p>{t('Lorem')}</p>
      <p>{t('Lorem')}</p>
    </Container>
  );
};
