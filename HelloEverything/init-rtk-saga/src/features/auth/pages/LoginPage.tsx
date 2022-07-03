import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { authActions } from '../authSlice';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  box: {
    padding: '10px'
  }
}));

export function LoginPage() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate()
  const classes = useStyles();

  const handleLoginClick = () => {
    dispatch(authActions.login({
      username: '',
      password: ''
    }))
    // navigate('/admin');
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.box}>
        <Typography
          variant='h5'
          component='h1'>
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
