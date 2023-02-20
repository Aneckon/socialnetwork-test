import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const Login = () => {
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (name.indexOf(' ') && name.length) {
      setNameError(false);
    }
    if (password.indexOf(' ') && password.length) {
      setPasswordError(false);
    }
  }, [password, name]);

  const submitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      password.indexOf(' ') &&
      name.indexOf(' ') &&
      password.length &&
      name.length &&
      name === 'admin' &&
      password === '12345'
    ) {
      const user = name + password;
      localStorage.setItem('user', user);
      navigate('/profile');
      toast.success('You have entered successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      setNameError(true);
      setPasswordError(true);
    }
  };

  return (
    <Container sx={{ textAlign: 'center', width: 320 }} maxWidth="xl">
      <h1>{t('Login')}</h1>
      <form onSubmit={submitLogin} style={{ display: 'flex', flexDirection: 'column' }}>
        {passwordError && nameError ? (
          <p style={{ color: 'red' }}>Ім'я користувача або пароль введено неправильно.</p>
        ) : (
          ''
        )}
        <TextField
          error={nameError === false ? false : true}
          id="outlined-controlled"
          label={t('UserName')}
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          sx={{ mb: 1 }}
        />
        <TextField
          error={passwordError === false ? false : true}
          id="outlined-controlled"
          label={t('Password')}
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
          sx={{ mb: 1 }}
        />
        <Button type="submit" sx={{ width: 120 }} variant="outlined" color="error">
          {t('Login')}
        </Button>
      </form>
      <p>{t('UserName')}: admin</p>
      <p>{t('Password')}: 12345</p>
    </Container>
  );
};
