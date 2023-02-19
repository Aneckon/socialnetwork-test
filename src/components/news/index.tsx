import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addPostList } from '../../redux/services/postSlice';

import { Post } from '../post';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export const News = () => {
  const [loading, setLoading] = React.useState(false);
  const [loadingPost, useLoadingPost] = React.useState(10);

  const { t } = useTranslation();

  const daspatch = useAppDispatch();
  const postList = useAppSelector((state) => state.postReducer.postList);

  React.useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts?_limit=${loadingPost}`)
      .then((res) => {
        daspatch(addPostList(res.data));
      })
      .then((err) => {
        setLoading(true);
      });
  }, [loadingPost]);

  return (
    <Container sx={{ textAlign: 'center' }} maxWidth="xl">
      <h1 style={{ textAlign: 'left' }}>{t('News')}</h1>

      <Grid sx={{ mb: 5, textAlign: 'left' }} container spacing={2}>
        {loading ? (
          postList.map((item: { id: number; title: string; body: string }) => (
            <Grid key={item.id} item xl={3}>
              <Post title={item.title} body={item.body} id={item.id} />
            </Grid>
          ))
        ) : (
          <p>{t('Loading')}...</p>
        )}
      </Grid>
      <Button
        onClick={() => {
          useLoadingPost(loadingPost + 10);
        }}
        sx={{ mb: 5 }}
        variant="outlined"
        color="error">
        {t('ButtonLoading')}
      </Button>
    </Container>
  );
};
