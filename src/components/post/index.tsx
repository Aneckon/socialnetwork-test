import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deletePostList } from '../../redux/services/postSlice';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

interface PostProps {
  title: string;
  body: string;
  id: number;
}

export const Post: FC<PostProps> = ({ id, title, body }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleDeletePost = () => {
    if (localStorage.getItem('user')) {
      dispatch(deletePostList(id));
      toast.success(t('ToastDeletePostSuccessfully'), {
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
      toast.error(t('ToastDeletePostError'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title.length >= 25 ? `${title.slice(0, 25)}...` : title}
        subheader={new Date().toDateString()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleDeletePost} aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
