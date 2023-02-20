import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';

export const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [localStorage]);

  return (
    <Container maxWidth="xl">
      <h1>{t('Profile')}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde natus iusto, quia earum
        soluta tempore dolor? Ratione eligendi officia dolore doloremque aut molestias. Eveniet aut
        dolorem ipsum fugiat mollitia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde natus iusto, quia earum
        soluta tempore dolor? Ratione eligendi officia dolore doloremque aut molestias. Eveniet aut
        dolorem ipsum fugiat mollitia.
      </p>
    </Container>
  );
};
