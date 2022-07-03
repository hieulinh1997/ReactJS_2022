import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';

export interface INotFoundProps {
}

export function NotFound (props: INotFoundProps) {
  let navigate = useNavigate()

  // const handleLoginClick = () => {
  //   console.log('hhee');
    
  //   navigate('/admin');
  // }
  return (
    <div>
      Not Found

      {/* <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            Fake Login
          </Button> */}
    </div>
  );
}
