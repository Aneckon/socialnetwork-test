import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import i18next from 'i18next';

export const Profile = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [localStorage]);

  return (
    <Container maxWidth="xl">
      <h1>Profile</h1>

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
